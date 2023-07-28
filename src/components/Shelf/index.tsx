import ProductCard from '../ProductCard';

function Shelf() {
  return (
    <section className="my-4">
      <h3 className="my-6 text-center font-bold text-secondary-500 text-3xl">As Mais Pedidas</h3>
      <article className="shelf-container flex gap-4 justify-center">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </article>
    </section>
  );
}

export default Shelf;
