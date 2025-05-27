import Tasks from './Tasks';

const TasksPage = () => {

    return (
        <div className="container mt-5 p-4 rounded shadow bg-light" style={{ maxWidth: '500px', minWidth: '400px' }}>
            <h3 className="text-center text-secondary">UNBREAKABLES</h3>
            <hr className='border-1 border-secondary' />
            <h5 className="text-center text-primary mb-4">TO DO LIST</h5>
            <Tasks />

        </div>
    );
};

export default TasksPage;
