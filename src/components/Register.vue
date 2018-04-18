<template>
  	<v-form v-model="valid" ref="form" lazy-validation>
  		<v-text-field
  			label="email"
  			v-model="email"
  			:rules="emailRules"
  			:counter="10"
            ref="email"
  			required>
  		</v-text-field>

  		<v-text-field
  			label="password"
  			v-model="password"
  			type="password"
            ref="password"
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
    			emailRules: [
    			    v => !!v || 'E-mail is required',
    			    v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
    			],
    		}
    	},
    	methods: {
    		submit () {
                const self = this
    			if (this.$refs.form.validate()) {
                    // console.log( this.$router.push( '/' ) )
    				axios.post( 'http://localhost:5000/register', {
                        email: this.email,
                        password: this.password
                    }).then( function( res ) {
                        console.log( res )
                        console.log( self.$router )
                        self.$router.push( '/' )
                        window.localStorage.setItem( 'token', res.data )
                        // self.$router.push('/')
                    }).catch( function( err ) {
                        console.log( err.response )
                    })
    			} else {
    				console.log( 'nope' )
    			}
    		}
    	}
  	}
</script>