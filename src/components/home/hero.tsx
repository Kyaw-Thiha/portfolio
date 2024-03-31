"use client";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export function Hero() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              My name is <br />
              <span className="mt-1 text-4xl font-bold leading-none md:text-[6rem]">
                Kevin @ Kyaw Thiha
              </span>
            </h1>
          </>
        }
        imgSrc="/hero.jpg"
      />
    </div>
  );
}
