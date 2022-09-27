let taskList = [];
let badList = [];
const hrPerWeek = 24*7;

const handleOnSubmit = (e) => {
    const frmData =  new FormData(e);
    const task = frmData.get("task");
    const hr = +frmData.get("hr");

    const obj = {
        task: task,
        hr: hr,
    }

    //total calculation of hrs using reduce method
    const totalHrs = taskList.reduce((acc, item) => {
        return acc + item.hr
    }, 0)

    const total = totalHrs + hr;

    if (total > hrPerWeek){
        return alert("Sorry boss you have excedded the total hours per week")
    };

    console.log(total);

    taskList.push(obj);
    console.log(taskList);
    display();
    totalTaskHours();

};

const display = () => {
    let str = "";

    taskList.map((item, i) => {
        str += `
        <tr>
        <th scope="row">${i + 1}</th>
        <td>${item.task}</td>
        <td>${item.hr}Hrs</td>
        <td>
            

            <button onclick="deleteItem(${i})" class="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
            <button onclick="nextItem(${i})" class="btn btn-primary"><i class="fa-solid fa-right-to-bracket"></i></i></button>
        </td>
      </tr>`
    });

    document.getElementById("task-list").innerHTML = str;
    
    totalTaskHours();
};

const displayBadlist = () => {
    let str = "";

    badList.map((item, i) => {
        str += `
        <tr>
        <th scope="row">${i + 1}</th>
        <td>${item.task}</td>
        <td>${item.hr}Hrs</td>
        <td>
            <button onclick="backItem(${i})" class="btn btn-primary"><i class="fa-solid fa-angles-left"></i></button>

            <button onclick="deleteBadlist(${i})" class="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
            
        </td>
      </tr>`
    });

    document.getElementById("bad-List").innerHTML = str;
    
    totalTaskHours();
};

 const totalTaskHours = () => {
    const total = taskList.reduce((acc, item) =>{
        return acc + item.hr;
    }, 0);
    document.getElementById("totalHrs").innerText = total + totalBadHours();

    
 }

 const totalBadHours = () => {
    const total = badList.reduce((s, i) => s + i.hr, 0);
  
    document.getElementById("totalBadHrs").innerText = total;
    return total;
  };
 

 const deleteItem = (i) => {
   if (!window.confirm("Are you sure you want to delete it")){
    return;
   }

    const tempArg = taskList.filter((item, index) => {
        return i !== index;
    })
    taskList = tempArg;
    display();
 }

 const deleteBadlist = (i) => {
    if (!window.confirm("Are you sure you want to delete it")){
     return;
    }
 
     const tempArg = badList.filter((item, index) => {
         return i !== index;
     })
     badList = tempArg;
     display();
     displayBadlist();
  }

 const nextItem = (i) => {
    const tempItem = taskList.splice(i,1)[0];

    badList.push(tempItem);

    displayBadlist();
    display();

    console.log(badList, taskList)

 }

 const backItem = (i) => {
    const tempItem = badList.splice(i,1)[0];

    taskList.push(tempItem);

    displayBadlist();
    display();

    console.log(badList, taskList)

 }


