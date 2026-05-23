import type { UUID } from 'crypto';
import React from 'react';
import { v7 } from 'uuid';
import type { Item } from './Item.ts';

const testItem: Item = {
	id: v7() as UUID,
	name: 'Test Item',
	value: 5,
	weight: 1,
};

const ItemDetails: React.FC = () => {
	const [item, _setItem] = React.useState<Item>(testItem);
	return <>{JSON.stringify(item)}</>;
};

export default ItemDetails;
