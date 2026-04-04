import AddToQueue from "./components/AddToQueue"
import CurrentQueue from "./components/CurrentQueue"
import "./App.css"
import { useState } from "react"


function App() {

  const [queue , setQueue] = useState([])

  const addToQueue = (customer) => {
    setQueue([...queue , {...customer , id : Date.now() , status: "waiting"}])
  }

   const updateStatus = (id, newStatus) => {
    setQueue(queue.map(customer => {
      return customer.id === id ? {...customer , status : newStatus} : customer
    } ))
  }

  const removeFromQueue = (id) => {
    setQueue(queue.filter(customer => customer.id !== id))
  }

  return (
    <>
    <div className="min-h-screen bg-black text-white text-center pl-60 pr-60 pt-1">
      <h1 className="text-5xl font-bold mt-30 mb-10">Queue Management System</h1>
      <p className="text-2xl text-gray-500">Manage your customers efficiently</p>
        <main className="flex gap-20 mt-10">
          <AddToQueue onAdd={addToQueue}/>
          <CurrentQueue queue={queue} onUpdateStatus={updateStatus} onRemove={removeFromQueue} />
        </main>
    </div>
    </>
  )
}

export default App