import Image from "next/image";
import BgArtTemplate from "../components/bgArtTemplate/BgArtTemplate";

const page = () => {
  return (
    <>
    <BgArtTemplate>
    <div class="text-gray-600 body-font">
          <div class="container px-1 py-24 mx-auto flex flex-col">
            <div class="flex flex-col gap-8 lg:w-5/6 mx-auto">
              <div class="rounded-lg h-80 overflow-hidden">
                <Image
                  alt="content"
                  class="object-cover object-center h-full w-full"
                  width={400}
                  height={100}
                  src="https://www.physio.co.uk/images/background/appointments-index.png"
                />
              </div>
              <div class="flex flex-col sm:flex-row">
                <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                  <div class="flex flex-col items-center text-center justify-center">
                    <h2 class="font-medium title-font mt-4 text-gray-900 text-lg capitalize">
                    Appointments
                    </h2>
                    <div class="w-16 h-1 bg-primary rounded mt-2 mb-4"></div>
                    <p class="text-base">
                      Book appointments at thephysiorehabpractice.co.uk
                    </p>
                  </div>
                </div>
                <div class="flex justify-center items-center sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-primary sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-left">
                  <p class="text-lg first-letter:capitalize mb-4">
                    thephysiorehabpractice.co.uk, provide quick, flexible appointments, either in one of our modern clinics or within the comfort of your home.
                  </p>
                </div>
              </div>
              <div class="rounded-lg h-80 overflow-hidden">
                <Image
                  alt="content"
                  class="rounded-lg object-cover object-bottom h-full w-full"
                  width={400}
                  height={100}
                  src="https://www.physio.co.uk/images/appointments/appointments.jpg"
                />
              </div>

              <div class="sm:py-8 mt-4 pt-4 sm:mt-0 text-center">
                <p class="text-lg first-letter:capitalize">
                  Your treatment at Physio.co.uk will be tailored to your
                  condition to promote recovery and improve functional
                  independence with everyday activities.
                </p>
              </div>
            </div>
          </div>
        </div>
    </BgArtTemplate>
    </>
  );
};

export default page;