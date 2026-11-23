export default function PageHeader({ title, subtitle }) {
  return (
    <section className="border-b border-navy/10 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="text-3xl font-bold text-navy md:text-4xl">{title}</h1>
        {subtitle && (
          <p className="mt-2 max-w-xl text-gray-600">{subtitle}</p>
        )}
      </div>
    </section>
  );
}