import fs from 'fs'

export function addLine (line) {
  fs.appendFileSync('todos.txt', line + '\n')
}

export function removeLine (index) {
  const lines = fs.readFileSync('todos.txt', 'utf8').split('\n')
  lines.splice(index, 1)
  fs.writeFileSync('todos.txt', lines.join('\n'))
}

export function getLines () {
  return fs.readFileSync('todos.txt', 'utf8')
}