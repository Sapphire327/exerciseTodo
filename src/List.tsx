import { memo } from 'react';
import { Product } from './types';
import { getKeyOrPlaceholder } from './utils';

const ListItem = memo(
  ({ item, onDelete }: { item: Product; onDelete: (name: string) => void }) => {
    console.log(`Render ListItem: ${item.name}`);
    return (
      <li style={{ listStyle: 'none', marginBottom: 5 }}>
        <button type="button" onClick={() => onDelete(item.name)}>
          x
        </button>{' '}
        {getKeyOrPlaceholder(item, 'name')},{' '}
        {getKeyOrPlaceholder(item, 'price')}
      </li>
    );
  }
);

const List = memo(
  ({
    items,
    deleteItem,
  }: {
    items: Product[];
    deleteItem: (name: string) => void;
  }) => {
    console.log('\r\nRender List');
    return (
      <ul style={{ paddingLeft: 0 }}>
        {items.map((item, index) => (
          <ListItem key={item.name} item={item} onDelete={deleteItem} />
        ))}
      </ul>
    );
  }
);

export { List };
