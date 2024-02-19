const axios = require('axios');

const api = axios.create({
    baseURL: 'http://localhost:3000/todos',
    Headers:{
        'Content-type': 'application/json',
        'userid': 3
    }
})

exports.getTodosApi = () => {
    return api.get('/');
}
exports.addTodoApi = (body) =>{
    return api.post('/',body)
}
exports.getTodoByIdApi= (id) =>{
   return api.get(`/${id}`);
}
exports.updateTodoApi = (id,body) =>{
    return api.patch(`/${id}`,body)
}
exports.deleteTodoApi = (id) => {
    return api.delete(`/${id}`);
}
