import goods from "./server/goodsActions";

const second = () => {
    goods.getAllRecords().then((data) => console.log(data));
};

export default second;