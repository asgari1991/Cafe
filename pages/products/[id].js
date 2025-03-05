import React from 'react'
import ProductDetails from '../components/templates/Products/ProductDetails'
import Comments from '../components/templates/Products/Comments'

const Product = ({productData,productComments}) => {
  return (
    <>
     <ProductDetails product={productData} />
     <Comments comments={productComments}/>
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
    const productRes=await fetch(`http://localhost:4000/menu/${params.id}`)
    const productData=await productRes.json()
  
    const CommentsRes=await fetch(`http://localhost:4000/comment`)
    const CommentsData=await CommentsRes.json()
    const productComments=CommentsData.filter(comment=>comment.productID===+params.id)
    return {
        props:{
productData,
productComments
        }
    }
}
export default Product