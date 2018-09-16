function addNewEmployee(){
    $.confirm({
        title: 'Add new employee',
        content: '<form action="/domain/employees/insert" method="post">' +
        '<div class="form-group">'+
        '<label>Identification number:</label>'+
        ' <input type="number" class="form-control" name="identification_number" placeholder="Identification number">'+
        ' </div>'+
        '<div class="form-group">'+
        '<label>Employee name</label>' +
        '<input type="text" class="form-control" name="employee_name" placeholder="Employee name">' +
        '</div>' +
        '<div class="form-group">' +
        ' <label>Max hours per month</label>' +
        '<input type="number" class="form-control" name="max_hours" placeholder="Max hours per month">' +
        '</div>'+
        '</div>'+
        '<div class="form-group">' +
        ' <label>Hours assigned</label>' +
        '<input type="number" class="form-control" name="hours_assigned" placeholder="Hours assigned">' +
        '</div>'+
        '<div class="form-group">' +
        ' <label>Hourly rate (eur)</label>' +
        '<input type="number" class="form-control" name="hourly_rate" placeholder="Hourly rate (eur)">' +
        '</div>'+
        '<div class="form-group">' +
        ' <label>Department code</label>' +
        '<input type="number" class="form-control" name="id_department" placeholder="Department code" id="id_department">' +
        '</div>'+
        '<label>ATTENTION: IT Depratment: 1; Bussines Department: 2; HR Department: 3;</label>'+
        '<button style="float: right" type="submit" class="btn btn-success" style="float:right">Add employee</button>' +
        '</form>',

        cancel: function(){

        }
    });
}

function addNewProject() {
    $.confirm({
        title: 'Add new project',
        content: '<form action="/domain/projects/insert" method="post">' +
        '<div class="form-group">'+
        '<label>Name of the project</label>'+
        ' <input type="text" class="form-control" name="name" placeholder="Name of the project">'+
        ' </div>'+
        '<div class="form-group">'+
        '<label>Project budget</label>' +
        '<input type="text" class="form-control" name="value" placeholder="Project budget">' +
        '</div>' +
        '<div class="form-group">' +
        ' <label>Type of project</label>' +
        '<input type="number" class="form-control" name="id_projecttype" placeholder="Type of project" id="id_projecttype">' +
        '</div>'+
        '<button style="float: right" type="submit" class="btn btn-success" style="float:right">Add project</button>' +
        '<label>ATTENTION: IT Project: 1; Business Project: 2; Service Project: 3; </label>'+
        '</form>',

        cancel: function(){

        }
    });
}