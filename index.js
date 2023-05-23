console.log('My code is running');
//////Global Variables////////
let submit_button = document.getElementById('submit_button');
let count = 0;
let TODO_ul = document.querySelector('ul')
let form = document.querySelector('form');

/////Global Functions/////
let event_alert=()=>{
    let buttons = document.querySelectorAll('button');
    alert("you clicked a BUTTON")
}
let event_count=()=>{
    ++count;
}
let event_log=(eventObject)=>{
    console.log(eventObject.target.value)
}
let event_submit_handle =(e)=>{
    ///submition Data//
    let TODO_title = document.getElementById('TO-DO_title').value;
    let TODO_description = document.getElementById('TO-DO_description').value;
    ///element creation///
    let Task_list =document.createElement('li')
    let Task_header = document.createElement('h3');
    let Task_body = document.createElement('div');
    let Task_selector = document.createElement('input');
    let Task_finished = document.createElement('button');
    /////content for elements/////
    let Task_header_content = document.createTextNode(TODO_title);
    let Task_body_content = document.createTextNode(TODO_description);
    let Task_selector_content = document.createTextNode('Started')
    let Task_finished_content = document.createTextNode('Finished')
    ///element attributes///
    Task_selector.setAttribute('type', 'checkbox')
    Task_selector.setAttribute('value', 'started')
    Task_finished.setAttribute('type', 'submit')
    Task_finished.setAttribute('class', 'finished_button')
    ////appending/////
    TODO_ul.appendChild(Task_list);
    Task_list.appendChild(Task_header);
    Task_list.appendChild(Task_body);
    Task_list.appendChild(Task_selector);
    Task_list.appendChild(Task_finished);
    Task_header.appendChild(Task_header_content);
    Task_body.appendChild(Task_body_content);
    Task_selector.appendChild(Task_selector_content);
    Task_finished.appendChild(Task_finished_content);
    ///logging///
    console.log(TODO_title)
    console.log(TODO_description)
    ///form clean up///
    e.preventDefault()
    form.reset()
}
let event_submit=()=>{
//    form.submit();
}
let event_finished=()=>{
    TODO_ul.removeChild()
}
/////Events/////
form.addEventListener('submit',event_submit_handle);
TODO_ul.addEventListener('submit',event_finished)

/////////console log testing//////////
//console.log(TODO_title)
//console.log(TODO_description)