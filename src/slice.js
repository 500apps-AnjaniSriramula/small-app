new Vue({
    el: '#app',
      
      data: { 
          item1:[1,2,3, 10, 9],
          result:''
      },
      
       methods:{
        myFunction: function () {		
            this.result = this.item1.slice(2,0,4,5);	
        }   
       }
    
    });