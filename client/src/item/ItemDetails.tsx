import { randomUUID } from 'crypto';
import React from 'react';
import type { Item } from './Item.ts';

const testItem: Item = {
	id: randomUUID(),
	name: 'Test Item',
	value: 5,
	weight: 1,
};

const ItemDetails: React.FC = () => {
	const [item, _setItem] = React.useState<Item>(testItem);
	return <>{JSON.stringify(item)}</>;
};

export default ItemDetails;
