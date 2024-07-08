import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faqs() {
  return (
    <Accordion collapsible className=" text-white" type="single">
      <AccordionItem value="item-1">
        <AccordionTrigger>What is the logo design process?</AccordionTrigger>
        <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>How much does a logo design cost</AccordionTrigger>
        <AccordionContent>None </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>How long does it take to desing a logo</AccordionTrigger>
        <AccordionContent>None</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>Do you offer custom logo design or use templates?</AccordionTrigger>
        <AccordionContent>None </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>Can you redising my existing logo?</AccordionTrigger>
        <AccordionContent>None </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger>What if i dont like the initial concepts?</AccordionTrigger>
        <AccordionContent>None</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-7">
        <AccordionTrigger>How do i get started?</AccordionTrigger>
        <AccordionContent>None</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-8">
        <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
        <AccordionContent>None</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
