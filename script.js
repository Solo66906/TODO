const createToDoList = document.getElementById('createToDoList')
const checkList = document.getElementById('checkList')
const list = document.getElementById('list')
const createListItem = document.getElementById('createListItem')
const content = document.getElementById('content')
const notes = [
  {
    title: 'Сделать кнопку',
    completed: false,
  },
  {
    title: 'Cделать меню',
    completed: false,
  },
  {
    title: 'Сделать подвал',
    completed: true,
  },]
function getNoteTemplate (notes,) {
  return `
  <li><span class="${notes.completed ? 'active':'unactiv'}">${notes.title}</span><span id="check">&check;</span><span id="del">&times;</span></li>
  `
}
function render () {
  for (let i = 0; i < notes.length; i++) {
    list.insertAdjacentHTML ('beforeend', getNoteTemplate(notes[i],))
  }
}
render()
/*
<ul id="list">
    <li>
      <span>Чек-лист</span>
      <span>
        <span class="btn btn-check">&check;</span>
        <span class="btn btn-times">&times;</span>
      </span>
    </li>
  </ul>
  */