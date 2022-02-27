import { createTestCases } from '../helpers/createTestCases';
import { CartSchema } from '../schemas/cart';

export default createTestCases([
  {
    schema: CartSchema,
    name: 'Invalidates wrong type',
    matchesSchema: false,
    data: 'hello world',
  },
  {
    schema: CartSchema,
    name: 'Invalidates invalid array type',
    matchesSchema: false,
    data: {
      items: ['hello', 'world'],
      discounts: [],
    },
  },
  {
    schema: CartSchema,
    name: 'Invalidates partially matching object',
    matchesSchema: false,
    data: {
      items: {},
      discounts: [],
    },
  },
  {
    schema: CartSchema,
    name: 'Invalidates extra object value in array',
    matchesSchema: false,
    data: {
      items: [
        {
          id: '001',
          color: 'blue',
          size: 'xs',
          cost: 2000,
          badObject: {
            haha: true,
          },
        },
      ],
    },
  },
  {
    schema: CartSchema,
    name: 'Invalidates mismatch nested array',
    matchesSchema: false,
    data: {
      items: [
        {
          id: '001',
          color: 'blue',
          size: 'xs',
          cost: 2000,
          itemSpecificPromotionIds: [0, 10, 100],
        },
      ],
    },
  },
  {
    schema: CartSchema,
    name: 'Invalidate missing required properties',
    matchesSchema: false,
    data: {
      items: [
        {
          id: '001',
          color: 'blue',
        },
      ],
    },
  },
  {
    name: 'Invalidate cart with bad enums',
    schema: CartSchema,
    matchesSchema: false, //this was true. i think that was an error
    data: {
      items: [
        {
          id: '001',
          cost: 10,
          size: 'XL',
          color: 'black',
        },
      ],
    },
  },
]);
