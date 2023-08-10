import "./Product.css";

export const Product = ({ image, author, name }) => {
  return (
    <div style={{ backgroundImage: `url(${image})` }} className="Product">
      <div className="catalog-info">
        <p>{name}</p>
        <p>{author}</p>
      </div>
    </div>
  );
};
