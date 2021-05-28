  
new Vue({
    el: '#vue-app',
    data: {
        name: 'Anjani',
        job: 'SD',
        website: 'http://www.500apps.com',
        websiteTag: '<a href="http://www.500apps.com">The 500apps Website</a>'
    },
    methods: {
        greet: function(time){
            return 'Good ' + time + ', ' + this.name;
        }
    }
});
