import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as CourseActions from './store/actions/course'


function Aulas({modules, toggleLesson}) {
  return (
    <aside>
      {modules.map(module =>(
        <div key={module.id}>
        <strong>{module.title}</strong>
        <ul>
          {module.lessons.map(lesson => (
            <li key={lesson.id}>{lesson.title}
            <button onClick={ () => toggleLesson(module, lesson)} >Selecionar</button>
            </li>  
          ))}
        </ul>
        </div>
      ))}
    </aside>
   
  );
}

const mapStateToProps = (state => ({
  modules: state.course.modules
}))

// const mapDispatchToProps = (dispatch => ({
//   toggleLesson: (module, lesson) => dispatch(CourseActions.toggleLesson(module, lesson))
// }))


//exemplo utilizando helper do redux
//quando tenho o nome da action e o nome do dispatch for iguais podemos utilizar o bindActionCreators
const mapDispatchToProps = (dispatch => (
  bindActionCreators(CourseActions, dispatch)
))
  




export default connect(mapStateToProps, mapDispatchToProps)(Aulas);
