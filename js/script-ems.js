// CREATE AN ARRAY OF EMPLOYEES
let employees = [
    ['1000', 'Ron Burgandy', '0001', 'ron@burgandy.com', 'Executive'],
    ['2000','Brian Fantana', '0002', 'brian@fantana.com', 'Administrative'],
    [ '3000','Champ Kind', '0003', 'champ@kind.com', 'Marketing'],
    [ '4000','Brick Tamland', '0004', 'brick@tamland.com', 'Quality Assurance'],
    [ '5000','Veronica Corningstone', '0005', 'veronica@corningstone.com', 'Engineering']
]
// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
window.addEventListener('load', () => {
    localStorage.setItem('employees', JSON.stringify(employees))

// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
    if ('employees' in localStorage) {
        JSON.parse(localStorage.getItem('employees'));
    }
})

// GET DOM ELEMENTS
let form = document.querySelector('#addForm')
let empTable = document.querySelector('#empTable')
let empCount = document.querySelector('#empCount')
let count = employees.length
// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
addEventListener('load', () => {
    empCount.value = `${count}`
    for (const emp of employees) {
        let row = document.createElement('tr')
        empTable.querySelector('tbody').appendChild(row)

        for (const data of emp) {
            let td = document.createElement('td')
            row.appendChild(td).innerHTML = `${data}`
        }
        let deleteBtn = document.createElement('button')
        deleteBtn.className = 'btn btn-danger btn-sm float-end delete'
        deleteBtn.appendChild(document.createTextNode('X'))
        let td = document.createElement('td')
        row.appendChild(td)
        td.appendChild(deleteBtn)
    }
})

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();
    // GET THE VALUES FROM THE TEXT BOXES
    let empId = document.getElementById('id').value
    let empName = document.getElementById('name').value
    let empExt = document.getElementById('extension').value
    let empEmail = document.getElementById('email').value
    let empDept = document.getElementById('department').value

    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    let newEmployee = [empId, empName, empExt, empEmail, empDept]
    console.log(newEmployee)
    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    employees.push(newEmployee)
    // BUILD THE GRID
    buildGrid()
    // RESET THE FORM
    form.reset()
    // SET FOCUS BACK TO THE ID TEXT BOX
    e.target.id.focus()
    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    count++
    empCount.value = `(${count})`
})

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    // CONFIRM THE DELETE
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure you want to delete this employee?')) {   
        // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
        let tbody = document.querySelector('tbody')
        // CALL DELETEROW() METHOD TO DELETE SPECIFIC ROW IN THE TABLE
        tbody.deleteRow(e.target.parentNode.parentNode.rowIndex)
        // REMOVE EMPLOYEE FROM ARRAY
        employees.pop()
        // BUILD THE GRID
        buildGrid()
        // DECREMENT COUNTER
        count--
        empCount.value = `(${count})`
        }
    }
})

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    document.querySelector('tbody').remove()
    // REBUILD THE TBODY FROM SCRATCH
    empTable.appendChild(document.createElement('tbody'))
    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE
    for (const emp of employees) {
        let row = document.createElement('tr')
        empTable.querySelector('tbody').appendChild(row)
        for (const data of emp) {
            let td = document.createElement('td')
            row.appendChild(td).innerHTML = `${data}`
        }
        let deleteBtn = document.createElement('button')
        deleteBtn.className = 'btn btn-danger btn-sm delete'
        deleteBtn.appendChild(document.createTextNode('X'))
        let td = document.createElement('td')
        row.appendChild(td)
        td.appendChild(deleteBtn)
    }
    // BIND THE TBODY TO THE EMPLOYEE TABLE
    // UPDATE EMPLOYEE COUNT
    // STORE THE ARRAY IN STORAGE
    localStorage.setItem('employees', JSON.stringify(employees))
    if ('employees' in localStorage) {
        JSON.parse(localStorage.getItem('employees'))
    }
}