import {connect} from "react-redux";
import { Todos } from '../components/todos';

const Active = ({ todos, dispatch }) =>  (
  <Todos
    todos={todos}
    dispatch={dispatch}
    filterActive="active"
  />
);

export default connect(state => state)(Active);
