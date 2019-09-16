var ln = users.length;
console.log(ln);
for(var i = 0; i < ln; i++){
    console.log(users[i].name +" "+ users[i].email +" "+ users[i].phone +" "+ users[i].company.name);
}