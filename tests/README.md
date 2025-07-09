# Unit Tests

Place your unit tests for functions and business logic in this directory.

- Source functions: `src/functions/`
- Unit tests: `tests/`

Example:

src/functions/sum.ts

```
ts
export function sum(a: number, b: number): number {
  return a + b
}
```

tests/sum.test.ts

```
ts
import { describe, it, expect } from 'vitest'
import { sum } from '../src/functions/sum'

describe('sum', () => {
  it('adds two numbers', () => {
    expect(sum(1, 2)).toBe(3)
  })
})
```
