const app = new Vue({
  el : '#app',
  data : {
    list : [
      // {name: 'Juan', avg: '10', status: false},
      // {name: 'Alex', avg: '17', status: true},
      // {name: 'Luis', avg: '18', status: true},
    ],
    name: '',
    avg: '',
  },
  methods: {
    addNote: function(){
      statusA = false;
      if(this.avg>=12.5){
        statusA = true;
      }
      if(this.name!=='' && this.avg!==''){
        this.list.push({name: this.name, avg: this.avg, status:statusA})
        this.name = '';
        this.avg = '';
      } else {
        alert ('Add name and avg student');
      }
    }
  }
})