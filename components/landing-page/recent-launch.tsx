import { Calendar1Icon, RocketIcon } from "lucide-react";
import SectionHeader from "@/components/common/section-header";
import ProductCard from "@/components/products/product-card";
import EmptyState from "@/components/common/empty-state";
import { Props } from "@/components/products/product-card";

const recentlyLaunchedProducts: Props[] = [
  //   {
  //     id: 1,
  //     name: "Product One",
  //     description: "This is a brief description of Product One.",
  //     tags: ["AI", "SaaS", "Global"],
  //     votes: 300,
  //     isFeatured: true,
  //   },
  //   {
  //     id: 2,
  //     name: "Product Two",
  //     description: "This is a brief description of Product Two.",
  //     tags: ["AI", "full-stack", "Next.js"],
  //     votes: 278,
  //     isFeatured: false,
  //   },
];

export default function RecentLaunch() {
  return (
    <section className="py-20">
      <div className="wrapper">
        <SectionHeader
          title="Recently Launched"
          icon={RocketIcon}
          description="Discover the latest products from our community"
        />

        {recentlyLaunchedProducts.length > 0 ? (
          <div className="grid-wrapper">
            {recentlyLaunchedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <EmptyState
            message="No products launched in the last week. Check back soon for new launches."
            icon={Calendar1Icon}
          />
        )}
      </div>
    </section>
  );
}
