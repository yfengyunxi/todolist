// 获取元素
const addButton = document.getElementById('add-button');
const taskInput = document.getElementById('task-input');
const todoList = document.getElementById('todo-list');

// 添加任务函数
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') {
    alert('请输入任务内容！');
    return;
  }

  // 创建任务项
  const listItem = document.createElement('li');

  // 创建任务文本
  const taskSpan = document.createElement('span');
  taskSpan.textContent = taskText;

  // 创建删除按钮
  const deleteButton = document.createElement('button');
  deleteButton.textContent = '删除';
  deleteButton.classList.add('delete-btn');

  // 组装任务项
  listItem.appendChild(taskSpan);
  listItem.appendChild(deleteButton);
  todoList.appendChild(listItem);

  // 清空输入框
  taskInput.value = '';

  // 绑定删除事件
  deleteButton.addEventListener('click', function() {
    todoList.removeChild(listItem);
  });
}

// 绑定添加按钮点击事件
addButton.addEventListener('click', addTask);

// 按下回车键也能添加任务
taskInput.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    addTask();
  }
});