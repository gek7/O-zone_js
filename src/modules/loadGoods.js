import renderGoods from "./renderGoods";
import goods from "./server/goodsActions";

let filters = {};

//Метод для подгрузки товаров без фильтров
const loadGoods = () => {
    goods.getAllRecords()
        .then((data) => renderGoods(data));
};

//Общий метод для подрузки товаров, поддерживает функцию-фильтр
//с сигнатурой Функция(Товар, Значение для фильтрации)
const loadGoodsWithFilter = (filter, value) => {

    filters[filter.name] = ({ filter, value });

    goods.getAllRecords()
        .then((data) => {
            renderGoods(filterData(data));
        });
};

/**
 * Функция, которая фильтрует данные по применёным ранее фильтрам
 * @param {array} data набор данных
 * @returns отфильтрованный набор данных
 */
function filterData(data) {
    return data.filter((item) => {
        //Итерируем ранее применённые фильтры
        for (let filterName in filters) {
            const appliedFilter = filters[filterName];
            //Если хоть один применённый фильтр не проходит, то товар не проходит проверку
            if (!appliedFilter.filter(item, appliedFilter.value)) {
                return false;
            }
        }
        return true;
    });
}

export { loadGoods, loadGoodsWithFilter };