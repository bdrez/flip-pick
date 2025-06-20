console.log(JSON.parse(window.localStorage.getItem('draftee')));
//later potentially save all - this overwrite only stores current one
const drat= JSON.parse(localStorage.getItem('person')) || [];
