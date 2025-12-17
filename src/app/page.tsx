import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center h-dvh px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm text-center">
        <Image
          src="/common/logo/full/color/logo-offsetwp-stroked.svg"
          alt="OffsetWP logo"
          width={320}
          height={65}
          priority
        />
      </div>
    </div>
  );
}
