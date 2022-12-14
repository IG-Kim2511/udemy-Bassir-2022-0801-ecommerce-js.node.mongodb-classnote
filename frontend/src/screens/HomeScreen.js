
//๐c05 ๋ฆฌ์กํธ ์ปดํฌ๋ํธ์ฒ๋ผ ์ฒซ๊ธ์ ๋๋ฌธ์

// ๐c05.../data.js'
import data from '../data.js'

/* ๐c05. <render method>

    const ~~~ ={

    render : () => {
        
        return `~~~~~`
    }

    }
*/


const HomeScreen = {
    render:()=>{

        // ๐c05. const {๋ณ์}  (const ๋ณ์ x)
        const {products} = data;

        // ๐c05.map(~)
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
                    `)
                    // ๐c05. .join(~) , array์ items์ฌ์ด๋ง๋ค ~~๋ฃ์. 
                    // \n : enterํค ์๋ฏธ
                    .join('\n')
                }   
            </ul>
        `
    }
}


export default HomeScreen;



const ~~~ ={

    render : () => {
        
        return `~~~~~`
    }

}


const HomeScreen = () => {
  return (
    <div>HomeScreen</div>
  )
}

