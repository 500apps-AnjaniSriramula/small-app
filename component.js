// //globally
// Vue.component('my-comp',{
//     data(){
//         return {
//             status: 'critical'
//         }
//     },
//     template: '<p>server status: {{status}} (<button @click="changeStatus"> change</button>)</p>',
//     methods:{
//         changeStatus: function(){
//             this.status="Normal";
//         }
//     }
// });


// new Vue({
//     el:"#comp"
// })
//locally
var com={
    data(){
        return {
            status: 'critical'
        }
    },
    template: '<p>server status: {{status}} (<button @click="changeStatus"> change</button>)</p>',
    methods:{
        changeStatus: function(){
            this.status="Normal";
        }
    }
}


new Vue({
    el:"#comp",
    components:{
        'my-comp':com
    }
})

