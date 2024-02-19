const {getTodosApi , addTodoApi, deleteTodoApi, getTodoByIdApi, updateTodoApi} = require('../API/todosApi');

exports.getAllTodos = async (req, res) => {
    const response = await getTodosApi();
    const todos = response.data;

    res.status(200).render('todos',{todos})
}
exports.addTodo = (req, res) =>{
    res.status(200).render('addTodo');
}
exports.addNewTodo = async (req, res) => {
    const todo = await addTodoApi(req.body);
    res.status(302).redirect('/todos')

}
exports.deleteTodo = async(req, res) => {
    
    const todo = await deleteTodoApi(req.params.id);
    res.status(302).redirect('/todos')
}

exports.editTodo = async (req, res) => {
    const response = await getTodoByIdApi(req.params.id);
    const todo = response.data;
    res.render('edit', {todo});   
}

exports.updateTodo = async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const respose = await updateTodoApi(id, body);
    res.status(302).redirect('/todos')
}