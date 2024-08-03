import ReviewListSkeleton from "@/app/components/skeleton/skeleton";
import CarouselComp from "@/ui/carousel/carousel";
import Services from "@/ui/services/services";
import Testimonial from "@/ui/testimonial/testimonial";

import dynamic from "next/dynamic";
import { Suspense } from "react";
const Review = dynamic(() => import("@/ui/review/review"), { ssr: false });

export default function Home() {
  return (
    <>
      <CarouselComp />
      <Services />
      {/* review */}
      <Suspense fallback={<ReviewListSkeleton />}>
        <Review suppressHydrationWarning={true} />
      </Suspense>
      {/* review */}
      <Testimonial />
    </>
  );
}
