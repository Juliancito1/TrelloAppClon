import Task from '../Task/Task';
import './Column.scss'

const Column = () => {
    return (
        <div className="column">
        <header>Backlog</header>
        <ul className='task-list'>
          <Task/>
          <li className='task-item'>second</li>
          <li className='task-item'>third</li>
          <li className='task-item'>second</li>
          <li className='task-item'>third</li>
          <li className='task-item'>second</li>
          <li className='task-item'>third</li>
          <li className='task-item'>second</li>
          <li className='task-item'>third</li>
          <li className='task-item'>second</li>
          <li className='task-item'>third</li>
          <li className='task-item'>second</li>
          <li className='task-item'>third</li>
          <li className='task-item'>second</li>
        </ul>
        <footer>Add another card</footer>
        </div>
    );
};

export default Column;