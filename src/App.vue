<template>
    <div>
        <form-helper>
            <div slot="form-header">
                <h3>MT 500apps</h3>
                <p>please fill out our form to get notifications.</p>
            </div>
            <div slot="form-fields">
                <input type="text" placeholder="name" required />
                <input type="password" placeholder="password" required />
            </div>
            <div slot="form-controls">
                <button v-on:click="handleSubmit">Submit</button>
            </div>
        </form-helper>
    </div>
</template>

<script>
// Imports
import formHelper from './components/formHelper.vue'
export default {
    components: {
        'form-helper': formHelper
    },
    data () {
        return {
        }
    },
    methods: {
        handleSubmit: function(){
            alert('thanks for submitting');
        }
    }
}
</script>

<style>
body{
    margin: 0;
    font-family: 'Nunito SemiBold';
}
</style>