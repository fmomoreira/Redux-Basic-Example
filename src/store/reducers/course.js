const INITIAL_STATE = {
  activeLesson: {},
  activeModule: {},
  modules:[
    {
      id:1,
      title: "Aprendendo mais sobre redux",
      lessons: [
        {id:1, title:"Primeira aula"},
        {id:2, title:"Segunda aula"}
      ]
    },
    {
      id:2,
      title: "Aprendendo mais redux sagas",
      lessons: [
        {id:1, title:"Primeira aula"},
        {id:2, title:"Segunda aula"},
        {id:3, title:"Terceira aula"}
      ]
    }
  ]
  
}


export default function course(state = INITIAL_STATE, action){
  if(action.type === 'TOOGLE_LESSON'){
    return { ...state, activeLesson: action.lesson, activeModule: action.module}
  }
  return state;
  }
  