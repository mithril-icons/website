import { example, asyncExample } from '~/src/utils'

describe('Example', () => {
  test('test', () => {
    expect(example).toBe('Hello')
  })
  test('async test', async () => {
    const result = await asyncExample()
    expect(result).toBe(5)
  })
})
