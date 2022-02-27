// given a JSON schema
export type JSONObject =
  | {
      type: 'object';
      properties: Record<string, JSONObject>;
      required?: string[];
    }
  | {
      type: 'string';
      enum?: string[];
    }
  | {
      type: 'number';
    }
  | {
      type: 'array';
      items: JSONObject;
    }
  | {
      type: 'boolean';
    };
