const TasksForm = ({ handleTask, input, setInput }) => {

    const handleInputChange = (e) => {
        setInput(e.target.value)
    }

    const handleAddTasks = () => {
        if (input.trim() !== '') {
            handleTask({
                id: Date.now(),
                text: input,
            })
        }
    }


    return (
        <div>
            <input type="text" value={input} placeholder="Digite sua Tarefa" onChange={handleInputChange} />
            <button onClick={handleAddTasks}>Adicionar</button>
        </div>
    )
}

export default TasksForm