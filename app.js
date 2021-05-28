new Vue({
    el:'#vue-app',
    data:{
        name : 'Anjani',
        job : 'SD'
    },
    methods:{
    greet: function(time){
    return 'Good' + ' '+time+' '+this.name;
    }
    }
});
