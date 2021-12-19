import cart from "./modules/cart";
import catalog from "./modules/catalog";
import * as loads from "./modules/loadGoods";
import search from "./modules/search";
import sideFilters from "./modules/sideFilters";

loads.loadGoods();
catalog();
cart();
search();
sideFilters();