import { ArrowUpRight, StarIcon } from "lucide-react";
import SectionHeader from "@/components/common/section-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ProductCard from "../products/product-card";

const featuredProducts = [
  {
    id: 1,
    name: "Product One",
    description: "This is a brief description of Product One.",
    tags: ["AI", "SaaS", "Global"],
    votes: 300,
    isFeatured: true,
  },
  {
    id: 2,
    name: "Product Two",
    description: "This is a brief description of Product Two.",
    tags: ["AI", "full-stack", "Next.js"],
    votes: 278,
    isFeatured: false,
  },
];

function FeaturedProducts() {
  return (
    <section className="py-20 bg-muted/20">
      <div className="wrapper">
        <div className="flex items-center justify-between mb-8">
          <SectionHeader
            title="Featured Today"
            icon={StarIcon}
            description="Top picks from our community this week "
          />
          <Button asChild variant="outline" className="hidden sm:flex">
            <Link href="/projects">
              View All
              <ArrowUpRight className="size-4" />
            </Link>
          </Button>
        </div>

        <div className="grid-wrapper">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
