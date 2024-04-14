import CarouselComp from "@/app/ui/carousel/carousel";
import Services from "@/app/ui/services/services";
// import { Suspense } from "react";
// import Review from '@/app/ui/review/review'

import dynamic from 'next/dynamic'
const Review = dynamic(() => import('@/app/ui/review/review'), { ssr: false })

export default function Home() {
  return (
    <>
      <CarouselComp />
      <Services />
      <div className="flex flex-col items-center justify-between py-20">
        <Review suppressHydrationWarning={true}/>
      </div>
    </>
  );
}
