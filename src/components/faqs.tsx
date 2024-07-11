import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is the logo design process?",
    answer: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {question: "How much does a logo design cost", answer: "None"},
  {question: "How long does it take to design a logo", answer: "None"},
  {question: "Do you offer custom logo design or use templates?", answer: "None"},
  {question: "Can you redesign my existing logo?", answer: "None"},
  {question: "What if I don't like the initial concepts?", answer: "None"},
  {question: "How do I get started?", answer: "None"},
  {question: "What payment methods do you accept?", answer: "None"},
];

let keys = 0;

export default function Faqs() {
  return (
    <article className="flex flex-col justify-center">
      <header className="m-2 flex-col text-center text-white">
        <h1 className=" m-2 text-8xl font-semibold">Our Faqs</h1>
        <p className="text-xl text-gray-100/70">The most common question we get asked</p>
      </header>
      <section className="flex">
        <Accordion collapsible className=" mx-auto bg-black text-white" type="single">
          {faqs.map((fq, index) => {
            keys++;

            return (
              <AccordionItem key={keys} value={`item-${index}`}>
                <AccordionTrigger>{fq.question}</AccordionTrigger>
                <AccordionContent>{fq.answer}</AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </section>
    </article>
  );
}
