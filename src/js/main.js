import ProductData from './productData.js';
import ProductList from './productList.js';

// instance of our ProductData class.
const dataSource = new ProductData('tents');
//  element we want the product list to render in
const listElement = document.querySelector('.product-list');

const myList = new ProductList('tents', dataSource, listElement);

myList.init();