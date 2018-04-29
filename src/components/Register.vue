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

       <!--  <v-text-field type="text" label="password" v-model="password"> </v-text-field>
        <p class="error--text" v-if="!$v.password.required">The password field is required!</p>
        <p class="error--text" v-if="!$v.password.minLength">The input must have at least 6 chars</p> -->

  		<v-text-field
  			label="password"
  			v-model="password"
  			type="password"
            ref="password"
            minLength="6"
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
    import { required, minLength, between } from 'vuelidate/lib/validators'
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
        validations: {
            password: {
                required,
                minLength: minLength( 6 )
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
                        self.$alertify.success("success")
                        // self.$router.push('/')
                    }).catch( function( err ) {
                        console.log( err.response )
                        self.$alertify.error("fail")
                    })
    			} else {
    				console.log( 'nope' )
    			}
    		}
    	}
  	}
</script>