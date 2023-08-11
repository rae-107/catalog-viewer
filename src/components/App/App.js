import "./App.css";
import { catalogData } from "../../catalogData";
import { Product } from "../Product/Product";

const App = () => {
  const filteredProducts = catalogData.products.filter((product) => product.images);

  const productCards = filteredProducts.map((product) => {
    console.log(product)
    return (
      <Product
        key={product.sku}
        name={product.name}
        author={product.author}
        image={product.images[0].uri}
      />
    );
  });

  return (
    <div className="App">
      <header className="header">
        <h1>Catalog Viewer</h1>
      </header>
      <section className="product-grid">{productCards}</section>
    </div>
  );
};

export default App;
