const patientList = [
  'Paul',
  'Jan',
  'Tri',
  'Maryam'
]

alert(patientList);

const command = prompt('Choose one: update, delete, add, reorder');

if (command == 'update'){
  const uname = prompt('Name to be Updated....')
  const nname = prompt('Replacing Name....')

  un1pos = patientList.indexOf(uname);

  patientList[un1pos] = nname;

  alert(patientList);
}

if (command == 'delete'){
  const namedel = prompt('Name to be Deleted');
  const delloc = patientList.indexOf(namedel)

  patientList.splice(delloc, 1)

  alert(patientList);
}

if (command == 'add'){
  const namenew = prompt('New Patient....');

  patientList.splice(4,0,namenew);

  alert(patientList);
}

if (command == 'reorder'){
  const f1nm = prompt('First Name Swapping');
  const f2nm = prompt('Second Name Swapping');

  const f1id = patientList.indexOf(f1nm);
  const f2id = patientList.indexOf(f2nm);

  patientList.splice(f1id, 1, f2nm);
  patientList.splice(f2id, 1, f1nm);

  alert(patientList);
}