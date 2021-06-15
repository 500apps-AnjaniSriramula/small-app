new Vue({
    el: '#styling',
    data() {
        return {
            baseStyles: {
                fontWeight:'800',
                color: 'red'
            },
            overrideStyles: {
                color:'blue'
            }
        }
    }
    // computed:{
    //     divClasses:function(){
    //         return {
    //             red: this.boxASelected,
    //             blue: !this.boxASelected
    //         }
    //     }

    // }
    // methods:{
    //     boxSelected:function(box){
    //         if(box==='A'){
    //             this.boxASelected=true;
    //         }else if(box==='B'){
    //             this.boxBSelected=true;
    //         }else if(box==='C'){
    //             this.boxCSelected=true;  
    //         }
    //     }
    // }
})