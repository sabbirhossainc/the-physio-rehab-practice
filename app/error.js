"use client"; // Error components must be Client Components

import { useEffect } from "react";
import BgArtTemplate from "@/Templates/bgArtTemplate/BgArtTemplate";
import { GlobalBtn } from "@/app/components/buttons/Buttons";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <BgArtTemplate>
      <div className="flex flex-col gap-3 items-center justify-center">
        <h2 className="justify-center flex items-center text-3xl text-red-500">
          Something went wrong!
        </h2>
        <GlobalBtn btnText={"Try again"} onclick={() => reset()} />
      </div>
    </BgArtTemplate>
  );
}
