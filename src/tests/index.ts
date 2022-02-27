import fs from 'fs';
import path from 'path';
import { validateSchema } from '..';
import { ITestCase } from './types';

function runTests(): void {
  const fileNames = fs.readdirSync(path.join(__dirname, 'cases'));

  const cases = fileNames
    .map((filename) => require(`./cases/${filename}`).default)
    .flat() as ITestCase[];

  const results = cases.map((data) => ({
    name: data.name,
    computed: validateSchema(data.data, data.schema),
    expected: data.matchesSchema,
  }));

  console.table(
    results.map((result) => ({
      name: result.name,
      expected: result.expected,
      result: result.computed,
      passed: result.expected === result.computed,
    }))
  );

  console.log(
    `Passed ${
      results.filter((val) => val.expected === val.computed).length
    } / ${results.length} tests`
  );
}

runTests();
