import Counter from './_components/Counter'
import './App.css'

import  UserContextProvider  from './context/Context'

{/*
  const productData = [
  {
    id: 1,
    title: "Product 1",
    price: 100,
    description: "This is product 1"
  },
  {
    id: 2,
    title: "Product 2",
    price: 200,
    description: "This is product 2"
  },
  {
    id: 3,
    title: "Product 3",
    price: 300,
    description: "This is product 3"
  }
] */}

function App() {

  return (
    <div className="App">
      {/* 
      <Bouton handleClick={(e, id) => console.log(e.target, id)} />
      <Input value="" handleChange={(event) => console.log(event.target.value)} />  
      <Container style={{  backgroundColor: 'red',border: '1px solid black',padding: '1rem'}} />
    <Products productData={productData} />
      
      
      */}
      <UserContextProvider>
        <Counter />
      </UserContextProvider>


    </div>
  )
}

export default App
