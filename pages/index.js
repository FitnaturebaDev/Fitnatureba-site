export default function HomePage() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="bg-[#365132] text-white px-6 py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Transform Your Health, Body, and Mind</h1>
        <p className="mb-6 text-lg">
          Everything you need for your fitness journey—inside one app.
        </p>
        <button className="bg-white text-[#365132] font-semibold px-6 py-3 rounded-xl">
          Access the FitNatureba App
        </button>
      </section>

      {/* 7-Day Detox Section */}
      <section className="p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Our Signature Programs</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <h3 className="font-semibold text-lg">7-Day Detox</h3>
          </div>
          <div>
            <h3 className="font-semibold text-lg">21-Day Weight Loss</h3>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Sample Recipes</h3>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Personalized Meal & Training Plans</
