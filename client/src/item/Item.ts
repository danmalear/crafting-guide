import type { UUID } from 'crypto';

export interface Item {
	id: UUID;
	name: string;
	weight: number;
	value: number;
}
