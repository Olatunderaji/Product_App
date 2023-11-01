import './App.css'
import Product from './Components/Product/Product'



function App() {
  const Products = [
    {
    image: "https://shorturl.at/zKS15",
    name: "iPhone 15 ProMax",
    price: "N2,030,000",
    description: "Phone",
  },
    {
    image: "https://shorturl.at/sBHR6",
    name: "iPhone 12 ProMax",
    price: "N670,000",
    description: "256GB Gold New",
  },
    {
    image: "https://shorturl.at/vxDU8",
    name: "iphone 14 ProMax",
    price: "N1,550,000",
    description: "5G - 6.7 512GB ROM - 6GB RAM - NanoSIM - A16 Bionic Chip - 4323mAh - Golden",
  },
    {
    image: "https://shorturl.at/gjmGL",
    name: "iPhone 13 ProMax",
    price: "N950,000",
    description: "5G - Single Sim - 512GB ROM - 6GB RAM - 6.7  OLED - iOS 15 - 4352mAh - Blue | Konga Online Shopping",
  },
    {
    image: "https://shorturl.at/tF126",
    name: "Samsung Z Fold 5",
    price: "N1,300,000",
    description: "7.6 inches Foldable Dynamic AMOLED 2X, 120Hz, HDR10+Cover display: 6.2 inches Dynamic AMOLED 2X, 120HzCorning Gorilla Glass Victus 2Armor aluminum ",
  },
    {
    image: "https://shorturl.at/glsES",
    name: "Samsung S23",
    price: "N900,000",
    description: "512GB/12GB, Dual Sim, Cream",
  },
  ]
  
  return (
    <>
    <h1>Product Page</h1>
    <div className='cardBox'>
    {Products.map(({image, name, price, description}, index) => (
      <Product
      key={index}
      image={image}
      name={name}
      price={price}
      description={description}
/>

    ))}
    </div>
    </>
    
  );
    }
export default App;
