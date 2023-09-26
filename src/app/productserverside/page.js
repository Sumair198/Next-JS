import BtnComponent from "./Btn-component"

const productsList = async () =>
{
    let response = await fetch('https://dummyjson.com/products')
    let data = await response.json()
    return data.products
}



const productServerSide = async()=>
{
    let productsHere = await productsList()
    console.log(productsHere)

    return (
        <div>
            <h1>Product List With  Server Side</h1>

            {
               productsHere.map((item)=>
               (
                   <div>
                    <h4>{item.title}</h4>
                    <BtnComponent price={item.price} />
                    </div>
               ))
            }
        </div>
    )
}
export default productServerSide