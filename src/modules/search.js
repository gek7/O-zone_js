import * as filters from "./filters";
import goods from "./server/goodsActions";
import renderGoods from "./renderGoods";
import { loadGoodsWithFilter } from "./loadGoods";

const search = () => {
    const search = document.querySelector(".search-wrapper_input");

    search.addEventListener('input', (event) => {
        loadGoodsWithFilter(filters.searchFilter, event.target.value);
    });
};

export default search;