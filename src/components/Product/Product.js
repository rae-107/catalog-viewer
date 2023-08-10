import "./Product.css";

export const Product = ({ image, author, name }) => {
  let formatAuthor = author?.split(',')
  return (
    <div style={{ backgroundImage: `url(${image})` }} className="Product">
      <div className="catalog-info">
        <p>{name}</p>
        {author && <p>by</p>}
        {author && <p>{formatAuthor[1]} {formatAuthor[0]}</p>}
      </div>
    </div>
  );
};
