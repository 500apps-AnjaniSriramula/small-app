new Vue({
    el: '#app1',
    data: {
      msg: 'Finish the course!',
      vuelink: "https://vue.js.org/",
      count:0,
      name:'',
      confirmedName:'',
      lastName:''
      //fullName:''
    
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
    },
    submitForm:function(){
        //event.preventDefault();
        alert('submitted!');
    },
    confirmInput:function(){
        this.confirmedName=this.name;
    },
    resetInput:function(){
        this.name='';
    }
},
computed:{
    fullName:function(){
        console.log('running again');
        if(this.name===''){
            return '';
        }
        return this.name+' '+'sriramula';
    }
},
watch:{
    count(value){
        if(value>50){
            const that = this;
            setTimeout(function(){
                that.count=0;
            },2000);
        }
    }
    // name(value){
    //     if(value===''){
    //         this.fullName='';
    //     }else{
    //         this.fullName=value+' '+this.lastName;
    //     }
    // },
    // lastName(value){
    //     if(value===''){
    //         this.fullName='';
    //     }else{
    //         this.fullName=this.name+' '+value;
    //     }
    // }
}
});