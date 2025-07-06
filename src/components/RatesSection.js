// src/components/RatesSection.js

export default function RatesSection() {
  return (
    <section className="bg-muted-teal text-gray-800 py-20 sm:py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-serif text-4xl md:text-5xl tracking-tight">
          Rates and Insurance
        </h2>

     
        <div className="mt-12 space-y-4 text-lg">
          <p>Session Fee - $200 / individual session</p>
          <p>Session Fee - $240 / couples session</p>
        </div>

       
        <div className="mt-12 space-y-6 max-w-2xl mx-auto text-base">
          <p>
            I do not accept insurance directly and am considered an
            out-of-network provider. This allows us to focus entirely on your
            therapeutic goals without the restrictions often imposed by
            insurance companies.
          </p>
          <p>
            Upon request, I can provide you with a "superbill" (a detailed
            monthly receipt) that you can submit to your insurance company for
            potential out-of-network reimbursement.
          </p>
        </div>
      </div>
    </section>
  );
}
