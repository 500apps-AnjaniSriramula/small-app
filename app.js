new Vue({
    el: '#app1',
    data: {
      msg: 'Finish the course!',
      vuelink: "https://vue.js.org/",
      count:0,
      name:''
    
    },
methods:{
    outputGoal:function(){
        const randomNum=Math.random();
        if(randomNum<0.5){
            return this.msg;
        }else{
            return 'Master Vue';
        }
    },
    Add:function(num){
        //for(i=0;i<5;i++)
        this.count+=num;
    },
    Reduce:function(){
        this.count--;
    },
    setName:function(event,lastName){
        this.name=event.target.value+' '+lastName;

    }
}
});