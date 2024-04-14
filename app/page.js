import CarouselComp from "@/app/ui/carousel/carousel";
// import Review from '@/app/ui/review/review'
// import dynamic from 'next/dynamic'
// const Review = dynamic(() => import('@/app/ui/review/review'), { ssr: false })

export default function Home() {
  return (
    <>
      <CarouselComp />
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <Review suppressHydrationWarning={true}/> */}
      Review section
    </div>
    </>
  );
}
