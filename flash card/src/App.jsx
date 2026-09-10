import { useState } from "react"

const flashcardData = [
  { id: 1, question: "What is Tailwind CSS?", answer: "A utility-first CSS framework packed with classes." },
  { id: 2, question: "What does useState do?", answer: "It lets you add state to functional React components." },
  { id: 3, question: "What is Vite?", answer: "A fast modern frontend build tool." }
]

function App() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)

  const currentCard = flashcardData[currentIndex]

  const handleNext = () => {
    setIsFlipped(false)
    setCurrentIndex((prev) => (prev + 1) % flashcardData.length)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-100 p-4">

      <div className="w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-indigo-600 mb-6">Flash Cards</h1>

        {/* Card */}
        <div onClick={() => setIsFlipped(!isFlipped)}
          className="bg-white p-10 rounded-2xl shadow-lg min-h-[200px] flex items-center justify-center cursor-pointer mb-6 transition-all hover:shadow-xl border border-state-200">

          <p className="text-xl font-medium text-slate-800" >
            {isFlipped ? currentCard.answer : currentCard.question}
          </p>
        </div>

        <p className="text-sm text-slate-500 mb-4"> Click card to flip • Card {currentIndex + 1}of {flashcardData.length}</p>

        <button
          onClick={handleNext}
          className="bg-indigo-600 text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-indigo-700 transition"
        >
          Next Card
        </button>

      </div>
    </div>
  )
}

export default App