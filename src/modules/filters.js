const searchFilter = (item, value) => {
    return item.title.toLowerCase().includes(value.toLowerCase());
};

const categoryFilter = (item, value) => {
    return item.category.toLowerCase() === value.toLowerCase();
};

/*В value должен находится объект вида:
{
    priceFrom: {float},
    priceTo: {float}
}
*/
const priceFilter = (item, value) => {
    if ((value && value.priceFrom) || (value && value.priceTo)) {

        let isAboveMinFilter = true;
        let isBelowMaxFilter = true;

        //Товар больше минимума
        if (value && value.priceFrom && !isNaN(value.priceFrom)) {
            isAboveMinFilter = item.price >= (value.priceFrom * 1);
        }

        //Товар меньше максимума
        if (value && value.priceTo && !isNaN(value.priceTo)) {
            isBelowMaxFilter = item.price <= (value.priceTo * 1);
        }

        return isAboveMinFilter && isBelowMaxFilter;
    }
    return true;
};




export { searchFilter, categoryFilter, priceFilter };