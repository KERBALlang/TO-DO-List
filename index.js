console.log('My code is running');
//////Global Variables////////
let count = 0;
let form = document.querySelector('form');
let TODO_ul = document.querySelector('ul')
let Handle_ID =[];

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
let event_finished=(element)=>{
    TODO_ul.removeChild(element)
}
let event_checked=()=>{
    let check_state=TODO_ul.getAttribute('checked')
    if(check_state){
        return true;
    }
    else{
        return false;
    }
}
let event_handle_id=()=>{
        //console.log(Handle_ID);
        for(let i = 0; i < Handle_ID.length; i++){
            console.log(Handle_ID[i])
            let object_id=document.getElementById(Handle_ID[i])
            console.log(object_id)
            let subelement=object_id.childNodes[3]
            subelement.addEventListener('submit',event_finished(object_id))
        }
}
/////function event handler/////////
let event_submit_handle =(e)=>{
    ///submition Data//
    let TODO_title = document.getElementById('TO-DO_title').value;
    let TODO_description = document.getElementById('TO-DO_description').value;
    if(TODO_title !== '' && TODO_description !== ''){
        ///element creation///
        let Task_list =document.createElement('li')
        let Task_header = document.createElement('h3');
        let Task_body = document.createElement('span');
        let Task_selector = document.createElement('input');
        let Task_finished = document.createElement('button');
        /////content for elements/////
        let Task_header_content = document.createTextNode(TODO_title);
        let Task_body_content = document.createTextNode(TODO_description);
        let Task_selector_content = document.createTextNode('Started')
        let Task_finished_content = document.createTextNode('Finished')
        ///element attributes///
        Task_list.setAttribute('id', TODO_ul.childNodes.length)
        Task_selector.setAttribute('type', 'checkbox')
        Task_selector.setAttribute('value', 'started')
        Task_finished.setAttribute('type', 'submit')
        Task_finished.setAttribute('class', 'finished_button')
        ///test theory///
        
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
        console.log(TODO_ul.childNodes.length)
        console.log(TODO_ul.childNodes)
        ///form clean up///
        e.preventDefault()
        form.reset()
        ///Returns///
        Handle_ID.push(Task_list.getAttribute('id'))
        //console.log(Handle_ID)
    }
    else{
        alert("YOU failed to enter a TODO_title & TODO_description");
    }    
}
/////Events/////
form.addEventListener('submit',event_submit_handle);
TODO_ul.addEventListener('click',event_handle_id);

/////////console log testing//////////
console.log(TODO_ul.childNodes)
console.log(Handle_ID)