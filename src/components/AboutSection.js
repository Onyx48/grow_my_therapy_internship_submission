import Image from "next/image";

export default function AboutSection({ id }) {
  return (
    <section id={id} className="bg-white py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-x-16 gap-y-12 items-center">
          <div className="lg:col-span-2 w-full max-w-sm mx-auto lg:max-w-none lg:mx-0 h-auto aspect-[4/5] relative lg:order-2">
            <Image
              src="/headshot.jpg"
              alt="Professional headshot of Dr. Serena Blake"
              fill
              sizes="(max-width: 1024px) 90vw, 40vw"
              className="rounded-2xl object-cover shadow-xl"
            />
          </div>
          <div className="lg:col-span-3 lg:order-1 prose prose-lg max-w-none text-gray-800 prose-strong:text-gray-900">
            <h2 className="!text-3xl font-bold !text-gray-900 tracking-tight">
              About Dr. Serena Blake
            </h2>
            <p className="leading-loose">
              Dr. Serena Blake is a licensed clinical psychologist (PsyD) based
              in Los Angeles, CA, with{" "}
              <strong>eight years of experience</strong> and over{" "}
              <strong>500 client sessions</strong>. She blends evidence-based
              approaches—like cognitive-behavioral therapy and mindfulness—with
              compassionate, personalized care to help you overcome anxiety,
              strengthen relationships, and heal from trauma.
            </p>
            <p className="leading-loose">
              Whether you meet in her Maplewood Drive office or connect
              virtually via Zoom, Dr. Blake is committed to creating a{" "}
              <strong>safe, supportive space</strong> for you to thrive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
