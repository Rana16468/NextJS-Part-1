'use client'


const DynamicProductPage = ({params,searchParams}) => {

  
   console.log(searchParams);
    
    return (
        <>
            <h1>This My Dynamic Product Page :{params.productId}</h1>
        </>
    );
};

export default DynamicProductPage;