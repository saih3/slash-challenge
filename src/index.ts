import { type } from 'os';
import { JSONObject } from './types';

export function validateSchema(data: any, schema: JSONObject): boolean {
  const dataType = typeof data;
  switch (dataType) {
    case 'number':
      if (schema.type == 'number') return true;
      else return false;
    case 'boolean':
      if (schema.type == 'boolean') return true;
      else return false;
    case 'string':
      var isbool = false;
      if (schema.type == 'string') {
        isbool = true;
        // checks elements inside enum if there is an enum
        if (typeof schema.enum != 'undefined' && !schema.enum?.includes(data))
          isbool = false;
        return isbool;
      } else return false;
    case 'object':
      var isbool = false;
      // check for array objects
      if (data instanceof Array) {
        schema['enum'].forEach((element) => {
          if (data !== element) isbool = false;
        });
        return isbool;
      }

      // check for required property in CartSchema
      schema['required']?.forEach((element) => {
        if (element == 'items') {
          // checks if item and discounts are arrays
          if (data.items instanceof Array) {
            if (data.items.length == 0) {
              isbool = true;
            } else {
              const itemSchemaRequired =
                schema['properties'].items.items['required'];
              // traverse through items = []
              for (var i = 0; i < data.items.length; i++) {
                const itemSchemaData = data.items[i];
                if (itemSchemaData instanceof Object) {
                  // validates itemschema data with required enums
                  itemSchemaRequired.forEach((e) => {
                    if (typeof itemSchemaData[e] !== 'undefined') {
                      // console.log(itemSchemaData[e]);
                      const itemEnum =
                        schema['properties'].items.items['properties'][e]?.enum;
                      // console.log(itemEnum);
                      if (itemEnum?.includes(itemSchemaData[e])) isbool = true;
                    } else isbool = false;
                  });
                  // checking for properties that are not required in ItemSchema
                  for (const key in itemSchemaData) {
                    if (!itemSchemaRequired.includes(key)) {
                      const props =
                        schema['properties'].items.items['properties'];
                      const propExists: boolean = key in props;
                      // e.g checks if itemSpecificPromotionIds exists
                      if (propExists) {
                        const propType: String = props[key].type;
                        // checks the prop type
                        if (
                          propType === 'array' &&
                          itemSchemaData[key] instanceof Array
                        ) {
                          // checks the prop type of nested element
                          if (props[key].type === 'number') {
                            isbool = true;
                          } else isbool = false;
                        } else isbool = false;
                      } else isbool = false;
                    }
                  }
                } else return false;
              }
            }
            // checking if discounts exist
            if (typeof data.discounts !== 'undefined') {
              // check if discount is an array
              if (data.discounts instanceof Array) {
                if (data.discounts?.length == 0) isbool = true;
                else {
                  if (data.discounts.every((i) => typeof i === 'string'))
                    isbool = true;
                  else isbool = false;
                }
              } else {
                isbool = false;
              }
            }
          }
        }
      });
      return isbool;

    default:
      return false;
  }
}
