import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { TodoButton } from '../TodoButton';
import { Modal } from '../Modal';
import { TodoContext } from '../TodoContext';
import {TodoForm} from '../TodoForm';
import React from 'react';

function AppUI() {
    const {
        searcherTodos,
        completeTodo,
        deleteTodo,
        loading,
        error,
        openModal,
        setOpenModal,
    }= React.useContext(TodoContext);
    return (
        <>
            <TodoCounter />
            <TodoSearch />

            <TodoList>
                {loading && <TodosLoading />}
                {error && <TodosError />}
                {(!loading && searcherTodos.length === 0) && <EmptyTodos />}

                {searcherTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>
            <TodoButton 
                setOpenModal={setOpenModal}
            />

            {openModal && (
            <Modal>
                <TodoForm/>
            </Modal>)}
        </>
    );
}

export { AppUI };