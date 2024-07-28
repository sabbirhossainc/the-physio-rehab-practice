import CarouselComp from "@/ui/carousel/carousel";
import Services from "@/ui/services/services";
import Testimonial from "@/ui/testimonial/testimonial";
import ReviewListSkeleton from "@/app/components/skeleton/skeleton";

import { Suspense } from "react";
import dynamic from "next/dynamic";
const Review = dynamic(() => import("@/ui/review/review"), { ssr: false });

export default function Home() {
  return (
    <>
      <CarouselComp />
      <Services />
      {/* review */}
      {/* <Suspense fallback={<ReviewListSkeleton />}>
        <Review suppressHydrationWarning={true}/>
      </Suspense> */}
      {/* review */}
      <Testimonial />
    </>
  );
}
