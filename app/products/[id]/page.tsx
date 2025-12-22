import { Suspense } from "react";
import Loader from "../loader";

type ParamsType = { id: string } | Promise<{ id: string }>;

type Props = { params: ParamsType };

export default function Product({ params }: Props) {
  return (
    <Suspense fallback={<Loader />}>
      <ProductContent params={params} />
    </Suspense>
  );
}

async function ProductContent({ params }: Props) {
  const { id } = await params;

  return (
    <section>
      <h1>Product {id}</h1>
    </section>
  );
}
