
import Layout from "../../components/layout"
import Card from "../../components/Card"
import ProductDetail from "../../components/productDetail"
import { useContext } from 'react'
import { ShoppingCartContext } from "../../context"

function Home() {
  const context = useContext (ShoppingCartContext)
  const renderView = () => {
    
      if (context.filteredItems?.length > 0) {
        return (
          context.filteredItems?.map(item => (<Card key={item.id} data={item} />))
        )
      } else {
        return (
          <div>We don´t have anything</div>
        )
      }
    }   

/*     if (context.searchByTitle?.length > 0) {
      if (context.filteredItems?.length > 0) {
        return (
          context.filteredItems?.map(item => (
            <Card key={item.id} data={item} />
          ))
        )
      } else {
        return (
          <div>We dont have anything </div>
        )
      }
    } else {
      return (
        context.items?.map(item => (
          <Card key={item.id} data={item} />
        ))
      )
    }
  } */

  return (
    <Layout>

      <div className="flex w-80 items-center relative justify-center mb-6">
        <h1 className="font-medium text-xl"> Products</h1>
      </div>

      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {renderView ()}
      </div>
      <ProductDetail/>
    </Layout>
  )
}

export default Home
