// export const clean = (input: string): string => {
//   const capitalize = (input: string): string => {
//     return input.charAt(0).toUpperCase() + input.slice(1)
//   }
//   const words = input.split('-')
//   const capitalized = words.map(word => capitalize(word))

//   return capitalized.join(' ').replace(/[^\w\s]/, '')
// }

const packageNames = [
  'clarity',
  'devicon',
  'entypo',
  'feather',
  'font-awesome',
  'jam',
  'material-design',
  'octicons'
]

export const generateNames = (input: string): {raw: string, title: string, path: string} => {
  const capitalize = (input: string): string => {
    return input.charAt(0).toUpperCase() + input.slice(1)
  }
  const words = input.split('-')
  const capitalized = words.map(word => capitalize(word))

  const title = capitalized.join(' ')
  return { raw: input, path: `/${input.toLocaleLowerCase()}`, title }
}

export const packages = packageNames.map(generateNames)
