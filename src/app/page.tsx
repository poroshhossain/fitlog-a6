import Products from "@/components/HomeComponent/Products";
import Banner from "@/components/shared/Banner";
import Lodding from "@/components/shared/Lodding";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="bg-cDark">
      {/* Banner */}
      <Suspense fallback={<Lodding />}>
        <Banner />
      </Suspense>

      {/* Products */}
      <Suspense fallback={<Lodding />}>
        <Products />
      </Suspense>
    </div>
  );
}
