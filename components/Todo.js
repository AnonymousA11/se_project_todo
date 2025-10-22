class Todo {
    constructor (data, templateSelector) {
        console.log(data);
        console.log(templateSelector);
        this._data = data;
        this._templateElement = document.querySelector(templateSelector);
        
        
    }

    _setEventListeners() {
        //set event listeners on checkbox element

        this._todoCheckboxEl.addEventListener("change", (checkEvent) => {   
            console.log("clicked");
            this._data.completed;

        });
    };

    _generateCheckboxElement() {
    const todoElement = this._templateElement.content
    .querySelector(".todo")
    .cloneNode(true);
    this._todoNameEl= todoElement.querySelector(".todo__name");
    this._todoCheckboxEl = todoElement.querySelector(".todo__completed");
    this._todoLabel = todoElement.querySelector(".todo__label");
    this._todoDate = todoElement.querySelector(".todo__date");
    this._todoDeleteBtn = todoElement.querySelector(".todo__delete-btn");
    this._todoNameEl.textContent = this._data.name;
    };

    getView() {
    this._todoElement = this._templateElement.content
    .querySelector(".todo")
    .cloneNode(true);

    const todoNameEl = this._todoElement.querySelector(".todo__name");
    const todoCheckboxEl = this._todoElement.querySelector(".todo__completed");
    const todoLabel = this._todoElement.querySelector(".todo__label");
    const todoDate = this._todoElement.querySelector(".todo__date");
    const todoDeleteBtn = this._todoElement.querySelector(".todo__delete-btn");

    todoNameEl.textContent = this._data.name;
    todoDate.textContent = this._data.date.toLocaleDateString();

    todoCheckboxEl.checked = this._data.completed;
     this._generateCheckboxElement();
     this._setEventListeners();
    
    todoCheckboxEl.id = `todo-${this._data.id}`;
    todoLabel.setAttribute("for", `todo-${this._data.id}`);

    this._generateCheckboxElement();


    return this._todoElement;
    };
}



export default Todo;