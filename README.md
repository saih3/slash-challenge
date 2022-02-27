# Challenge

The challenge is to implement a limited-scope OpenAPI schema validator.

- The possible types of the schema are defined in the [JSONObject](./src/types.ts).
- The test cases are in [./src/tests/cases](./src/tests/cases) directory.
- Write code in [src/index](./src/index.ts) that takes in a `JSONObject` schema and a JSON object that returns true or false depending on whether or not it matches.
- The challenge should only take 2-4 hours - so no need to over-engineer a solution, although make sure the implementation is readable
- Write additional test-cases in [user-test-cases.ts](./src/tests/cases/user-test-cases.ts) to add additional tests not covered (this is optional if you have extra time)
