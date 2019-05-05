import {connect} from "react-redux";
import { Todos } from '../components/todos';

const Completed = ({ todos, dispatch }) =>  (
  <Todos
    todos={todos}
    dispatch={dispatch}
    filterActive="completed"
  />
);

export default connect(state => state)(Completed);

