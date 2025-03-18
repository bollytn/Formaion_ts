import {productType} from '../types/app'
type ProductsProps = {
    productData: productType[]
}

const Products = ({productData}:ProductsProps) => {
    return (
        <div>
            {
                productData.map((product) => (
                    <div key={product.id}>
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                        <strong>{product.price}</strong>
                    </div>
                ))
            }
        </div>
    )
}

export default Products