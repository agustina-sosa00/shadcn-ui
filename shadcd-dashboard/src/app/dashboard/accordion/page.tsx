import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Al utilizar Ctrl + . lo que hace es importar todos los componentes a la vez
// Recordar que los componentes deben venir siempre de '@/components/ui'
// Siempre hay que importarlos en el orden que se van a utilizar

export default function Page() {
  return (
    <div>
      {/* para dejar que te deje varias opciones abiertas hay que cambiar el type a multiple y sacar el collapsible */}
      <Accordion type="single" collapsible className="w-full">
        {/* para mapear un array solo hay que envolver AccordionItem dentro del map  */}
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you
            prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
