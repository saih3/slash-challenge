import { JSONObject } from '../types';

export interface ITestCase {
  name: string;
  schema: JSONObject;
  matchesSchema: boolean;
  data: any;
}
