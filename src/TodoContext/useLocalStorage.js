import React from 'react';

function useLocalStorage(itemName,initialValue){
  const[item,setItem] = React.useState(initialValue);
  const[loading,setLoading] = React.useState(true);
  const[error,setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout (() => {
      try{/*envolver el código que pueda fallar */
      const localStorageItem=localStorage.getItem(itemName);

      let parsedItem;
  
      if(!localStorageItem){
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem=initialValue;
      }else {
        parsedItem= JSON.parse(localStorageItem);
        setItem(parsedItem);/*mio */
      }
      setLoading(false);
    } catch(error){
      setLoading(false);
      setError(true);
    }
    },2000);
  }, []);

  const saveItem= (newItem)=>{
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };


  return {
    item,
    saveItem,
    loading,
    error}; //como objetos, para saber cual es
}

export {useLocalStorage};

// localeStorage.removeItem('TODO_V1');
// const defaultTodos = [
//  {text:'Cortar cebolla', completed: true},
//  {text:'Curso de React.js', completed: true},
//  {text:'Llorar', completed: false},
//  {text:'correr', completed: false},
//  {text:'bailar', completed: false},
//  {text:'LALALA', completed: false},
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
