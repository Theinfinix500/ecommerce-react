import { NavBar } from '@/components/navbar';
import { SubNav } from '@/components/subnav';
import categoryImage from '../../assets/images/1.jpg';
import FilterSelect from '../filter-select/filter-select';
import { SortSelect } from '../sort-select';
import ProductCard from '@/components/product-card/product-card';
import headphoneImage from '@/assets/images/category-1.jpg';
import watchImage from '@/assets/images/category-2.jpg';

const Layout = () => {
  const filters = [
    'headphone type',
    'price',
    'review',
    'color',
    'material',
    'offer',
    'all filters',
  ].map((placeholder, i) => (
    <FilterSelect key={i} placeholder={placeholder} options={[]} />
  ));

  const products = Array.from({ length: 12 }, (_, i) => i + 1).map((_, i) => (
    <ProductCard
      key={i + 1}
      layout="card"
      image={i % 2 === 0 ? headphoneImage : watchImage}
    />
  ));

  return (
    <div>
      <SubNav />
      <NavBar />
      <main className="px-24 pb-24">
        <section className="bg-orange-50 flex items-center justify-between px-28">
          <div>
            <p className="font-bold text-5xl text-green-900 max-w-[700px]">
              Grab up to 50% Off On Selected Headphone
            </p>
            <button className="py-4 px-10 bg-green-900 text-white rounded-full capitalize font-medium mt-8">
              Buy now
            </button>
          </div>
          <div className="w-[300px] h-[300px]">
            <img
              src={categoryImage}
              alt="hero-section-image"
              className="w-full h-full object-cover mix-blend-multiply"
            />
          </div>
        </section>
        <section>
          {/* TODO should create a component for these filters */}
          <div className="flex items-center gap-4 py-16">
            {filters}
            <div className="flex-1 flex justify-end">
              <SortSelect placeholder="Sort by" options={[]} />
            </div>
          </div>
        </section>
        <section>
          {/* TODO this section should be in a seperate component */}
          <h1 className="font-bold text-3xl mb-10 capitalize">Headphones for you!</h1>
          <div>
            <div className="grid grid-cols-[repeat(auto-fit,_minmax(295px,_1fr))]  gap-x-6 gap-y-8">
              {products}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Layout;
