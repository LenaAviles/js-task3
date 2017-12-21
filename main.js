// 2. Реализовать объект ToDoList – список дел. Объект должен иметь следующие
// методы:
// rememberTo(task) – запомнить задачу и поставить ее в конец списка
// whatIsNext() – возвращает первую задачу из списка и удаляет ее из списка
// urgentlyRememberTo(task) – запомнить задачу и поставить ее в начало списка.
// length() – возвращает количество задач в списке
// toString() – преобразовывает список задач в строку
// isEmpty() – возвращает true если список пустой, иначе false
// Реализовывать с помощью объектов. Если с помощью объектов не получится,
// то можно использовать массив

function ToDoList() {
	this._storage = {};
	this._size = 0;
	this._offset = 0;
}

ToDoList.prototype.rememberTo = function(task) {
	this._storage[this._size++] = task;					
	return;
}

ToDoList.prototype.whatIsNext = function() {
	if (this.isEmpty()) return;
	var task = this._storage[this._offset];
	delete this._storage[this._offset++];		
	this._size--;
	return task;
}

ToDoList.prototype.urgentlyRememberTo = function(task) {		
		var temp = this._storage;
		this._storage = {};						
		this._storage[0] = task;
		this._size = 1;
		this._offset = 0;
		for (var i in temp) {							
			this.rememberTo(temp[i]);
		}			
	return;
}

ToDoList.prototype.length = function() {
	return this._size;
}

ToDoList.prototype.toString = function() {
	var s = '';
	for (var i in this._storage) 
		s += this._storage[i] + ',';
	return s.substring(0, s.length-1);
}

ToDoList.prototype.isEmpty = function() {		
	return !this._size;
}



var toDo = new ToDoList();
toDo.rememberTo('A');
toDo.rememberTo('B');
toDo.rememberTo('C');
console.log(toDo.toString());
toDo.whatIsNext();
toDo.whatIsNext();
toDo.whatIsNext();
toDo.whatIsNext();
toDo.rememberTo('C');
toDo.rememberTo('D');
console.log(toDo.toString());
console.log(toDo.isEmpty());
toDo.urgentlyRememberTo('B');
toDo.urgentlyRememberTo('A');
toDo.urgentlyRememberTo('A');
toDo.whatIsNext();
console.log(toDo.toString());