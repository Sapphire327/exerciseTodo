import { FC, useState, useCallback, useRef, useEffect } from 'react';

import { List } from './List';
import { Product } from './types';

export const App: FC<{}> = ({}) => {
  const [fieldValue, setFieldValue] = useState('');
  const [fieldPrice, setFieldPrice] = useState('');
  const [items, setItems] = useState([
    {name: 'Coffee', price: 10 },
    {name: 'Tea', price: 20 },
    {name: 'Milk', price: 30 },
  ] as Product[]);

  const deleteItem = useCallback((nameToDelete: string) => {
    setItems((items)=>items.filter((item) => item.name !== nameToDelete));
  },[]);
  const inputRef = useRef(null);
  const onAdd = (e: any) => {
    if (fieldValue) {
        if (items.some((item)=>item.name===fieldValue)){
            alert("This item is already on the list")
            return
        }
      let price = parseInt(fieldPrice)
      setItems((prev) => {
        return [...prev, {name: fieldValue, price: price||0 }];
      });
      setFieldValue('');
      setFieldPrice('');
    }
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
      <>
        <input
            type="text"
            id="input"
            placeholder="product"
            ref={inputRef}
            value={fieldValue}
            onChange={({target}) => setFieldValue(target.value)}
        />
        <input
            type="number"
            id="price"
            placeholder="price"
            ref={inputRef}
            value={fieldPrice}
            onChange={({target}) => setFieldPrice(target.value)}
        />
        <button type="button" onClick={onAdd}>
          add
        </button>

        <List items={items} deleteItem={deleteItem}/>
      </>
  );
};
