import { createTestCases } from '../helpers/createTestCases';

export default createTestCases([
  {
    name: 'Validate enum',
    matchesSchema: true,
    schema: {
      type: 'string',
      enum: ['hello', 'world'],
    },
    data: 'hello',
  },
  {
    name: 'Validate empty string enum',
    matchesSchema: true,
    schema: {
      type: 'string',
      enum: [''],
    },
    data: '',
  },
  {
    name: 'Invalidate bad enum',
    matchesSchema: false,
    schema: {
      type: 'string',
      enum: ['hello', 'world'],
    },
    data: 'bad',
  },
  {
    name: 'Invalidate array for enums',
    matchesSchema: false,
    schema: {
      type: 'string',
      enum: ['hello', 'world'],
    },
    data: ['hello', 'world'],
  },
  {
    name: 'Invalidate non-string enums',
    matchesSchema: false,
    schema: {
      type: 'string',
      enum: ['hello', 'world'],
    },
    data: 10,
  },
]);
