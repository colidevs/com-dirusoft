import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";

export default function HomePage() {
  return (
    <div className="flex size-full flex-col">
      <section className="flex  justify-center">
        <header className="space-y-4 text-pretty">
          <h1 className="flex justify-center font-sans text-5xl"> Our process. </h1>
          <p className="flex justify-center text-base text-gray-100/70">
            Realiable process for achieving distinctiveness.
          </p>
        </header>
      </section>

      <div className="container flex size-full justify-center space-x-3">
        <Card className="size-full">
          <CardHeader>
            <h1 className="font-semibold text-red-900">01</h1>
            <CardTitle>Discovery and Research.</CardTitle>
          </CardHeader>
          <CardContent className="space-y-1">
            <div className="container text-gray-100/70">
              <li>Sabemos lo que los clientes necesitan.</li>
              <li>Estudio de mercado previo.</li>
              <li>Indentificamos los elementos claves.</li>
            </div>
          </CardContent>
        </Card>

        <Card className="size-full">
          <CardHeader>
            <h1 className="font-semibold text-red-900">02</h1>
            <CardTitle>Concept Development.</CardTitle>
          </CardHeader>
          <CardContent className="space-y-1">
            <div className="container text-gray-100/70">
              <li>Concentrados en la simplesa.</li>
              <li>Logo escencial.</li>
              <li>Priorizamos los futuros Development.</li>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="container flex size-full justify-center space-x-3">
        <Card className="size-full">
          <CardHeader>
            <h1 className="font-semibold text-red-900">03</h1>
            <CardTitle>Design and Refinement.</CardTitle>
          </CardHeader>
          <CardContent className="space-y-1">
            <div className="container text-gray-100/70">
              <li>Diferentes versiones digitales.</li>
              <li>Refinamos elementos, mejor claridad.</li>
              <li>Incorporamos feedback con el cliente.</li>
            </div>
          </CardContent>
        </Card>

        <Card className="size-full">
          <CardHeader>
            <h1 className="font-semibold text-red-900">04</h1>
            <CardTitle>Finalisation and Delivery.</CardTitle>
          </CardHeader>
          <CardContent className="space-y-1">
            <div className="container text-gray-100/70">
              <li>Preparamos el logo en varios formatos.</li>
              <li>Comprension.</li>
              <li>Assets and support.</li>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

/*
<article className="flex size-full">
      <section className="size-full justify-center">
        <section className="flex justify-center">
          <header className="space-y-4 text-pretty">
            <h1 className="flex justify-center font-sans text-5xl"> Our process. </h1>
            <p className="flex justify-center text-base text-gray-100/70">
              Realiable process for achieving distinctiveness.
            </p>
          </header>
        </section>
      </section>
    </article>

import {Button} from "@/components/ui/button";

export default function HomePage() {
  return (
    <article className="flex size-full">
      <section>
        <header className="space-y-5 text-pretty">
          <h1 className="flex justify-center text-4xl font-semibold">Our Process.</h1>
          <p className="flex justify-center text-xl text-gray-100/70">
            Unlock your teams full potential with our comprehensive software development solutions.
          </p>
        </header>
      </section>

      <aside>
        <div />
      </aside>
    </article>
  );
}
*/
