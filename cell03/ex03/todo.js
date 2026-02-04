const ftList = document.getElementById('ft_list');
const newBtn = document.getElementById('newBtn');

newBtn.addEventListener('click', function() {
    const task = prompt("เพิ่มรายการใหม่ของคุณ:");
    
    if (task !== null && task.trim() !== "") {
        addToDo(task);
    }
});

function addToDo(text) {
    const div = document.createElement('div');
    div.className = 'todo-item';
    div.textContent = text;

    div.addEventListener('click', function() {
        if (confirm("คุณต้องการลบรายการ '" + text + "' ใช่หรือไม่?")) {
            div.remove();
        }
    });

    ftList.insertBefore(div, ftList.firstChild);
}