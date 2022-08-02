
//🍀c05 리액트 컴포넌트처럼 첫글자 대문자

// 🍀c05.../data.js'
import data from '../data.js'

/* 🍀c05. <render method>

    const ~~~ ={

    render : () => {
        
        return `~~~~~`
    }

    }
*/


const HomeScreen = {
    render:()=>{

        // 🍀c05. const {변수}  (const 변수 x)
        const {products} = data;

        // 🍀c05.map(~)
        return `
            <ul class ='products'>
                ${products.map(p_product =>`
                    <li>
                        <div class="product">
                        <a href="/#/product/${p_product._id}">
                            <img src="${p_product.image}" alt="${p_product.name}" />
                        </a>
                        <div class="product-name">
                            <a href="/#/product/1">
                             ${p_product.name}
                            </a>
                        </div>
                        <div class="product-brand">
                             ${p_product.brand}
                        </div>
                        <div class="product-price">
                             $${p_product.price}
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