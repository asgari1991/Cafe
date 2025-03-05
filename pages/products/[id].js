import React from 'react'
import ProductDetails from '../components/templates/Products/ProductDetails'
import Comments from '../components/templates/Products/Comments'

const Product = ({data}) => {
  return (
    <>
     <ProductDetails product={data}/>
     <Comments/>
    </>
   
  )
}
export async function getStaticPaths(context) {
    const res=await fetch(`http://localhost:4000/menu`)
    const products=await res.json()
    const paths=products.map(product=>({params:{id:String(product.id)}}))
    return{
        paths,
        fallback:false
    }
}
export async function getStaticProps(context) {
    const {params}=context
    const res=await fetch(`http://localhost:4000/menu/${params.id}`)
    const data=await res.json()
  
    
    return {
        props:{
data
        }
    }
}
export default Product