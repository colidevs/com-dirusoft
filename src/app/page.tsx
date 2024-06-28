import {Button} from "@/components/ui/button";

export default function HomePage() {
  return (
    <article className="m-auto flex size-full max-w-6xl justify-center">
      <div className="relative inset-0 -z-10 h-full w-full bg-transparent bg-[linear-gradient(to_right,#414141_1px,transparent_1px),linear-gradient(to_bottom,#414141_1px,transparent_1px)] bg-[size:7.995rem_5.22rem]" />
      <div className="absolute">
        <header className="m-auto space-y-7 pt-20 text-center">
          <h1 className="text-3xl font-bold tracking-tighter text-gray-50 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            Elevate Your Softare Development
          </h1>
          <p className="m-auto max-w-[600px] text-lg text-gray-50 md:text-xl lg:text-base xl:text-lg">
            Unlock your team&apos;s full potential with our comprehensive software development
            solutions.
          </p>
          <Button className="m-auto mt-10 w-60 rounded-full bg-violet-700 tracking-wide text-gray-50 shadow-[1px_5px_1px_1px_rgba(_109,_40,_217,_0.4),1px_10px_1px_1px_rgba(_109,_40,_217,_0.3),1px_15px_1px_1px_rgba(_109,_40,_217,_0.2),1px_20px_1px_1px_rgba(_109,_40,_217,_0.1),1px_25px_1px_1px_rgba(0,_40,_90,_0.05)] transition-shadow ease-in hover:bg-violet-600 hover:shadow-[1px_10px_1px_1px_rgba(_109,_40,_217,_0.4),1px_20px_1px_1px_rgba(_109,_40,_217,_0.3),1px_30px_1px_1px_rgba(_109,_40,_217,_0.2),1px_40px_1px_1px_rgba(_109,_40,_217,_0.1),1px_50px_1px_1px_rgba(_109,_40,_217,_0.05)]">
            Get in touch
          </Button>
        </header>
      </div>
    </article>
  );
}
