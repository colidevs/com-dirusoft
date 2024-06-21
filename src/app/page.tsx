import {Button} from "@/components/ui/button";

export default function HomePage() {
  return (
    <article className="flex size-full text-center gap-10 ">
      <section className="flex-1 flex justify-center flex-col gap-5 my-5">
        <header className="space-y-8 text-left text-pretty max-w-4xl">
        <h1 className="font-semibold text-8xl">Elevate Your Softare Development</h1>
        <p className="text-gray-100/70 text-xl">Unlock your team's full potential with our comprehensive software development solutions.</p>
        </header>
        <Button>Get in touch</Button>
      </section>

      <aside className="flex-1 py-10">
        <div className="size-full bg-slate-600"></div>
      </aside>
    </article>
  );
}
