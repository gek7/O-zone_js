import * as filters from "./filters";
import { loadGoodsWithFilter } from "./loadGoods";


const sideFilters = () => {
    const sideContainer = document.querySelector(".filter");
    const minPriceInput = sideContainer.querySelector("#min");
    const maxPriceInput = sideContainer.querySelector("#max");

    minPriceInput.addEventListener('input', () => {
        loadGoodsWithFilter(filters.priceFilter, {
            priceFrom: minPriceInput.value,
            priceTo: maxPriceInput.value
        });
    });

    maxPriceInput.addEventListener('input', () => {
        loadGoodsWithFilter(filters.priceFilter, {
            priceFrom: minPriceInput.value,
            priceTo: maxPriceInput.value
        });
    });

};

export default sideFilters;