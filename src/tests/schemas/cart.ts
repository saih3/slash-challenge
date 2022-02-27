import { JSONObject } from '../../types';

const ItemSchema: JSONObject = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
    },
    color: {
      type: 'string',
      enum: ['red', 'blue', 'green', 'orange'],
    },
    size: {
      type: 'string',
      enum: ['xs', 's', 'm', 'l'],
    },
    cost: {
      type: 'number',
    },
    itemSpecificPromotionIds: {
      type: 'array',
      items: {
        type: 'number',
      },
    },
  },
  required: ['id', 'color', 'size', 'cost'],
};

export const CartSchema: JSONObject = {
  type: 'object',
  properties: {
    items: {
      type: 'array',
      items: ItemSchema,
    },
    discounts: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
  },
  required: ['items'],
};
