import { generateNames } from '~/src/utils'

describe('clean', () => {
  test('correct input should be left alone', () => {
    const result = generateNames('Hello')
    expect(result.raw).toBe('Hello')
    expect(result.title).toBe('Hello')
    expect(result.path).toBe('/hello')
  })
  test('lowercase input should be uppercased', () => {
    const result = generateNames('hello')
    expect(result.raw).toBe('hello')
    expect(result.title).toBe('Hello')
    expect(result.path).toBe('/hello')
  })
  test('input with dash should be splitted and titlecased', () => {
    const result = generateNames('hello-world')
    expect(result.raw).toBe('hello-world')
    expect(result.title).toBe('Hello World')
    expect(result.path).toBe('/hello-world')
  })
})
