import TodoCard from "./TodoCard";

const TodoList = () => {
  return (
    <div className="md:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-6 gap-6">
      <TodoCard />
      <TodoCard />
      <TodoCard />
      <TodoCard />
    </div>
  );
};

export default TodoList;
