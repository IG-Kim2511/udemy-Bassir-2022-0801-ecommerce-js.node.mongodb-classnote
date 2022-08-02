
//🍀05 리액트 컴포넌트처럼 첫글자 대문자


// const HomeScreen = () => {
//   return (
//     <div>HomeScreen</div>
//   )
// }

import data from '../data.js'

const HomeScreen = {
    render:()=>{

        // 🍀c06. const {변수}  (const 변수 x)
        const {products} = data;

        return `

            <ul class ='products'>
                ${products.map(p_product =>`
                <li>
                <div class="product">
                <a href="/#/product/1">
                    <img src="/images/product-1.jpg" alt="product 1" />
                </a>
                <div class="product-name">
                    <a href="/#/product/1">
                    Fit Slim Shirt
                    </a>
                </div>
                <div class="product-brand">
                    Nike
                </div>
                <div class="product-price">
                    $59
                </div>
                </div>
            </li>
            <li>
                <div class="product">
                <a href="/#/product/1">
                    <img src="/images/product-1.jpg" alt="product 1" />
                </a>
                <div class="product-name">
                    <a href="/#/product/1">
                    Fit Slim Shirt
                    </a>
                </div>
                <div class="product-brand">
                    Nike
                </div>
                <div class="product-price">
                    $59
                </div>
                </div>
            </li>
            <li>
                <div class="product">
                <a href="/#/product/1">
                    <img src="/images/product-1.jpg" alt="product 1" />
                </a>
                <div class="product-name">
                    <a href="/#/product/1">
                    Fit Slim Shirt
                    </a>
                </div>
                <div class="product-brand">
                    Nike
                </div>
                <div class="product-price">
                    $59
                </div>
                </div>
            </li>
            <li>
                <div class="product">
                <a href="/#/product/1">
                    <img src="/images/product-1.jpg" alt="product 1" />
                </a>
                <div class="product-name">
                    <a href="/#/product/1">
                    Fit Slim Shirt
                    </a>
                </div>
                <div class="product-brand">
                    Nike
                </div>
                <div class="product-price">
                    $59
                </div>
                </div>
            </li>
            <li>
                <div class="product">
                <a href="/#/product/1">
                    <img src="/images/product-1.jpg" alt="product 1" />
                </a>
                <div class="product-name">
                    <a href="/#/product/1">
                    Fit Slim Shirt
                    </a>
                </div>
                <div class="product-brand">
                    Nike
                </div>
                <div class="product-price">
                    $59
                </div>
                </div>
            </li>
            <li>
                <div class="product">
                <a href="/#/product/1">
                    <img src="/images/product-1.jpg" alt="product 1" />
                </a>
                <div class="product-name">
                    <a href="/#/product/1">
                    Fit Slim Shirt
                    </a>
                </div>
                <div class="product-brand">
                    Nike
                </div>
                <div class="product-price">
                    $59
                </div>
                </div>
            </li>
                
                `)}
            </ul>
            
            <h1>hello</h1>
        `
    }
}


export default HomeScreen;