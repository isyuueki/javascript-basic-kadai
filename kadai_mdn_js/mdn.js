const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();
const result = year + "年" + month + "月" + day + "日";

console.log(result);
