import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import TodoApp from './components/TodoApp'
import TodoList from './components/TodoList'
import TodoItem from './components/TodoItem'

function App() {

  return (
    <>
      <Header title="Todo App" />
      <TodoApp>
        <TodoList>
          <TodoItem item="Learn React" />
          <TodoItem item="Build a Todo App" />
        </TodoList>
      </TodoApp>
      {/* TodoItem */}
      <Footer />
    </>
  )
}

export default App
