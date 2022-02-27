import { createTestCases } from '../helpers/createTestCases';
import { CartSchema } from '../schemas/cart';

export default createTestCases([
  {
    name: 'Validate cart with no items but with discounts ',
    schema: CartSchema,
    matchesSchema: true,
    data: {
      items: [],
      discounts: ['hello', 'bro'],
    },
  },
  {
    schema: CartSchema,
    name: 'Invalidates partially matching object with discount as dict',
    matchesSchema: false,
    data: {
      items: [],
      discounts: {},
    },
  },
  {
    schema: CartSchema,
    name: 'Invalidates discounts with array type number',
    matchesSchema: false,
    data: {
      items: [],
      discounts: [1, 2, 'hello'],
    },
  },
]);
