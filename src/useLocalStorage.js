import React from 'react';
function useLocalStorage(itemName,initialValue){
    const  [item,setItem] = React.useState(initialValue)
    const  [loading,setLoading] = React.useState(true)
    const  [error,setError] = React.useState(false)



    React.useEffect(()=> {
        setTimeout(() => {try {
            const localStorageTodos = localStorage.getItem(itemName)
            let parsedItems 
            if(!localStorageTodos){
                localStorage.setItem(itemName,JSON.stringify(initialValue))
                parsedItems = []
                }else{
                  parsedItems = JSON.parse(localStorageTodos)
                  setItem(parsedItems)
                  }
                  setLoading(false) 
        } catch (error) {
            setLoading(false) 

            setError(true)
        }
          },2000)
        
        
    },[])
     const saveItems = (newItems) => {
          localStorage.setItem(itemName,JSON.stringify(newItems))
          setItem(newItems)
      
        }
        return { item,saveItems,loading,error }
  }
  export { useLocalStorage };