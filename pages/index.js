import {connect} from "react-redux";
import { Todos } from '../components/todos';

const Home = ({ todos, dispatch }) =>  (
  <Todos
    todos={todos}
    dispatch={dispatch}
  />
);

export default connect(state => state)(Home);
