import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: 0,
    question: "What is the logo design process?",
    answer: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {id: 1, question: "How much does a logo design cost", answer: "None"},
  {id: 2, question: "How long does it take to design a logo", answer: "None"},
  {id: 3, question: "Do you offer custom logo design or use templates?", answer: "None"},
  {id: 4, question: "Can you redesign my existing logo?", answer: "None"},
  {id: 5, question: "What if I don't like the initial concepts?", answer: "None"},
  {id: 6, question: "How do I get started?", answer: "None"},
  {id: 7, question: "What payment methods do you accept?", answer: "None"},
];

export default function Faqs() {
  return (
    <article className="flex flex-col">
      <header className="flex flex-col text-center  text-white">
        <h1 className="text-8xl font-semibold leading-relaxed">Our Faqs</h1>
        <p className=" text-xl text-gray-100/70">The most common question we get asked</p>
      </header>
      <section className="flex justify-center ">
        <Accordion collapsible className="w-full max-w-3xl flex-col  p-4 text-white " type="single">
          {faqs.map((fq) => {
            return (
              <AccordionItem key={fq.id} className="mb-5" value={`item-${fq.id}`}>
                <AccordionTrigger className=" rounded bg-slate-700 p-2 text-lg font-bold hover:text-yellow-300 hover:no-underline ">
                  {fq.question}
                </AccordionTrigger>
                <AccordionContent className=" bg-gray-800 p-3 text-gray-100/70">
                  {fq.answer}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </section>
    </article>
  );
}
