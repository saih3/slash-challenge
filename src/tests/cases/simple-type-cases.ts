import { createTestCases } from '../helpers/createTestCases';

export default createTestCases([
  {
    name: 'Validate string',
    matchesSchema: true,
    schema: {
      type: 'string',
    },
    data: 'Hello world',
  },
  {
    name: 'Validate boolean',
    matchesSchema: true,
    schema: {
      type: 'boolean',
    },
    data: false,
  },
  {
    name: 'Invalides wrong simple type',
    matchesSchema: false,
    schema: {
      type: 'number',
    },
    data: 'hello world',
  },
  {
    name: 'Invalides undefined type',
    matchesSchema: false,
    schema: {
      type: 'number',
    },
    data: undefined,
  },
  {
    name: 'Validates the number 0',
    matchesSchema: true,
    schema: {
      type: 'number',
    },
    data: 0,
  },
  {
    name: 'Validates a number',
    matchesSchema: true,
    schema: {
      type: 'number',
    },
    data: 10,
  },
]);
