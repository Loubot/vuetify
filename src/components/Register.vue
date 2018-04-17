<template>
  	<v-form v-model="valid" ref="form" lazy-validation>
  		<v-text-field
  			label="email"
  			v-model="email"
  			:rules="nameRules"
  			:counter="10"
  			required>
  		</v-text-field>

  		<v-text-field
  			label="password"
  			v-model="password"
  			type="password"
  			required>
  		</v-text-field>

  		<v-btn
  		    @click="submit"
  		    :disabled="!valid"
  		    color="success"
  		>
  		    submit
  		</v-btn>
  	</v-form>
</template>


<script>
	import axios from 'axios'
  	export default {

    	data () {
    		return {
    			valid: true,
    			email: '',
    			password: '',
    			nameRules: [
			        v => !!v || 'Name is required',
			        v => (v && v.length <= 10) || 'Name must be less than 10 characters'
    			]
    		}
    	},
    	methods: {
    		submit () {
    			return false
    		}
    	}
  	}
</script>