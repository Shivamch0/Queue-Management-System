import AddToQueue from "./components/AddToQueue"
import CurrentQueue from "./components/CurrentQueue"
import "./App.css"


function App() {


  return (
    <>
    <div className="min-h-screen bg-black text-white text-center pl-60 pr-60 pt-1">
      <h1 className="text-5xl font-bold mt-30 mb-10">Queue Management System</h1>
      <p className="text-2xl text-gray-500">Manage your customers efficiently</p>
        <div className="flex gap-20 mt-10">
          <AddToQueue />
          <CurrentQueue />
        </div>
    </div>
    </>
  )
}

export default App