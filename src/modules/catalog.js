import * as filters from "./filters";
import { loadGoodsWithFilter } from "./loadGoods";
const catalog = () => {
    const catalogButton = document.querySelector(".catalog-button > button");
    const catalog = document.querySelector(".catalog-button .catalog");
    const categoryButtons = document.querySelectorAll(".catalog-list > li");
    let isOpen = false;

    //Событие на раскрытие списка категорий
    catalogButton.addEventListener('click', () => {
        if (isOpen) {
            catalog.style.display = '';
        } else {
            catalog.style.display = 'block';
        }
        isOpen = !isOpen;
    });

    //Событие на нажатие категории
    categoryButtons.forEach((btn) => {
        btn.addEventListener('click', (event) => {
            loadGoodsWithFilter(filters.categoryFilter, event.target.innerText);
        });
    });
};

export default catalog;