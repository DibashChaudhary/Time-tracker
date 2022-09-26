const taskList = [];
const badList = [];
const hrPerWeek = 24*7;

const handleOnSubmit = (e) => {
    const frmData =  new FormData(e);
    const task = frmData.get("task");
    const hr = frmData.get("hr");

    const obj = {
        task: task,
        hr: hr,
    }

    taskList.push(obj)
    console.log(taskList);
    display();
};

const display = () => {
    let str = "";

    taskList.map((item, i) => {
        str += `
        <tr>
        <th scope="row">1</th>
        <td>${item.task}</td>
        <td>${item.hr}</td>
        <td>
            <button class="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
            <button class="btn btn-primary"><i class="fa-solid fa-right-to-bracket"></i></button>
        </td>
      </tr>`
    });

    document.getElementById("task-list").innerHTML = str;
};