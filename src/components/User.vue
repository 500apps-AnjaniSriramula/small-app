<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button @click="changeName">Change my name</button>
        <p>Name is {{name}}</p>
        <p>Age is {{age}}</p>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail :myName="name" 
                    @nameWasReset="name=$event"
                    :resetFun="resetName"
                    :userAge="age"></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit :userAge="age" @ageWasEdited="age=$event"></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
import Button from '../../../createApp/src/components/Button.vue';
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data(){
            return {
                name:"max",
                age:24
            };
        },
        methods:{
            changeName(){
                 this.name="anna";
            },
            resetName(){
                this.name="sri";
            }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit,
                Button
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
