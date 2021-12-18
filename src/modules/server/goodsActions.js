import dbActions from "./dbActions";

const goodsActions = Object.freeze({
    baseUrl: "https://o-zoneproject-default-rtdb.europe-west1.firebasedatabase.app/goods",

    //Получение всех записей
    getAllRecords() {
        return dbActions.get(this.baseUrl);
    },

    //Получение одной записи по id
    getRecord(id) {
        return dbActions.get(this.baseUrl, id);
    },

    //Добавление новой записи
    addRecord(newRecord) {
        return dbActions.add(this.baseUrl, newRecord);
    },

    //Изменение существующей записи
    patchRecord(id, data) {
        return dbActions.edit(this.baseUrl, id, data);
    },

    //Удаление существующей записи
    deleteRecord(id) {
        return dbActions.delete(this.baseUrl, id);
    },

    createLocalRecord(title, price, sale, img, hoverImg, category) {
        return {
            "title": title,
            "price": price,
            "sale": sale,
            "img": img,
            "hoverImg": hoverImg,
            "category": category
        };
    }
});

export default goodsActions;