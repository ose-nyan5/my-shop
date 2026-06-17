export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-10 flex items-center justify-center">
      <div className="text-center">
        <p className="text-6xl mb-8">✓</p>

        <h1 className="text-5xl font-black">
          THANK YOU
        </h1>

        <p className="text-gray-400 mt-6 text-lg">
          YOUR ORDER HAS BEEN RECEIVED.
        </p>

        <p className="text-gray-500 mt-4">
          ORDER #0001
        </p>

        <a
          href="/"
          className="block bg-white text-black py-5 px-10 mt-10 font-black"
        >
          BACK TO HOME
        </a>
      </div>
    </main>
  )
}