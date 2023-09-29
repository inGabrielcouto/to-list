
const ClearAll = ({ tasks ,clearAllTasks}) => { 



const handleClearTasks = () => {
    clearAllTasks();
}

  return (
    <div>
        <button className="button-clear-all" onClick={handleClearTasks} disabled={tasks.length <= 0}>Limpar tudo</button>
        
    </div>
  )
}

export default ClearAll