import {Poppins} from "next/font/google";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {Card, CardDescription, CardHeader} from "@/components/ui/card";
const lora = Poppins({
  weight: ["100", "200", "300", "400", "500", "700"],
  subsets: ["latin"],
});

export default function HomePage() {
  return (
    <>
      <section className="m-auto mb-32 flex max-w-4xl flex-col">
        <article className="m-auto max-w-6xl">
          <header className="m-auto mb-32 space-y-7 pt-20 text-center">
            <h1 className="text-3xl font-bold tracking-wide text-zinc-50 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              Elevate Your Software Development
            </h1>
            <p
              className={`${lora.className} m-auto max-w-[600px] text-lg font-extralight tracking-wider text-zinc-50 md:text-xl lg:text-base xl:text-lg`}
            >
              Unlock your team&apos;s full potential with our comprehensive software development
              solutions.
            </p>
          </header>
          <Card className="relative h-[38rem] flex-1">
            <div className="absolute top-0 flex w-full justify-center">
              <div className="left-0 h-[1px] animate-border-width rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-zinc-400/80 to-[rgba(17,17,17,0)] transition-all duration-1000" />
            </div>
            <CardDescription className="flex h-full items-center justify-center rounded-md border border-zinc-700/15 bg-gradient-to-b from-zinc-950 to-black px-3 py-2 text-sm text-zinc-300">
              Card Content
            </CardDescription>
          </Card>
        </article>
      </section>
      <section className="m-auto mb-16 flex max-w-4xl flex-col gap-40">
        <Card
          className="relative flex-1 border-[1px] border-blue-500/25 bg-black/60 p-8 transition-all duration-1000 hover:border-blue-500/40"
          id="process"
        >
          <div className="absolute -left-5 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-50 shadow-xl" />
          <div className="absolute -z-[6] h-screen w-screen bg-[radial-gradient(ellipse_10%_40%_at_0%_-10%,#1e5ab4d8,#000000)] blur-[100px]" />
          <CardHeader className="mb-8 p-0 py-4">
            <H2 text="Process" />
          </CardHeader>
          <Process />
        </Card>
        <Card
          className="flex-1 bg-background p-8 opacity-75 transition-all duration-1000"
          id="faqs"
        >
          <CardHeader className="relative mb-8 p-0 py-4">
            <H2 text="FAQS" />
          </CardHeader>
          <Faqs />
        </Card>
      </section>
    </>
  );
}

function H2({text}: {text: string}) {
  return (
    <h2
      className={`${lora.className} scroll-m-20 border-b pb-2 text-3xl font-medium tracking-normal first:mt-0`}
    >
      {text}
    </h2>
  );
}

function H3({text}: {text: string}) {
  return <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">{text}</h3>;
}

function Faqs() {
  return (
    <Accordion collapsible className="w-full" type="single">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

function Process() {
  return (
    <section className="grid grid-cols-2 gap-8">
      <Card className="relative h-52 flex-1">
        <div className="absolute top-0 flex w-full justify-center">
          <div className="left-0 h-[1px] rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-zinc-400/80 to-[rgba(17,17,17,0)] transition-all duration-1000" />
        </div>
        <CardDescription className="flex h-full items-center justify-center rounded-md border border-zinc-700/15 bg-black/35 px-3 py-2 text-sm text-zinc-300 transition-all duration-300 hover:border-zinc-300/40">
          Card Content
        </CardDescription>
      </Card>
      <Card className="relative h-52 flex-1">
        <div className="absolute top-0 flex w-full justify-center">
          <div className="left-0 h-[1px] rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-zinc-400/80 to-[rgba(17,17,17,0)] transition-all duration-1000" />
        </div>
        <CardDescription className="flex h-full items-center justify-center rounded-md border border-zinc-700/15 bg-black/35 px-3 py-2 text-sm text-zinc-300 transition-all duration-300 hover:border-zinc-300/40">
          Card Content
        </CardDescription>
      </Card>
      <Card className="relative h-52 flex-1">
        <div className="absolute top-0 flex w-full justify-center">
          <div className="left-0 h-[1px] rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-zinc-400/80 to-[rgba(17,17,17,0)] transition-all duration-1000" />
        </div>
        <CardDescription className="flex h-full items-center justify-center rounded-md border border-zinc-700/15 bg-black/35 px-3 py-2 text-sm text-zinc-300 transition-all duration-300 hover:border-zinc-300/40">
          Card Content
        </CardDescription>
      </Card>
      <Card className="relative h-52 flex-1">
        <div className="absolute top-0 flex w-full justify-center">
          <div className="left-0 h-[1px] rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-zinc-400/80 to-[rgba(17,17,17,0)] transition-all duration-1000" />
        </div>
        <CardDescription className="flex h-full items-center justify-center rounded-md border border-zinc-700/15 bg-black/35 px-3 py-2 text-sm text-zinc-300 transition-all duration-300 hover:border-zinc-300/40">
          Card Content
        </CardDescription>
      </Card>
    </section>
  );
}
