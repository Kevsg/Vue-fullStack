<template>
    <v-toolbar fixed class="cyan" dark>  
        <v-toolbar-title class="mr-4">
            <router-link tag="span" class="home" :to="{name: 'songs'}"> TabTracker</router-link>
        </v-toolbar-title>  

        
        <v-toolbar-items>  
            <v-btn flat dark :to="{name: 'songs'}">
                Browse
            </v-btn>
        </v-toolbar-items>  
        
        <v-spacer></v-spacer>

        <v-toolbar-items>  

            <v-btn flat dark :to="{name: 'login'}" v-if="!$store.state.isUserLoggedIn">
                Login
            </v-btn>


            <v-btn flat dark :to="{name: 'register'}" v-if="!$store.state.isUserLoggedIn">
                Sign Up
            </v-btn>

            <v-btn flat dark @click="logout" v-if="$store.state.isUserLoggedIn">
                Log Out
            </v-btn>
        </v-toolbar-items>  
        

    </v-toolbar>
</template>

<script>
export default {
    methods: {
        logout() {
            this.$store.dispatch('setToken', null)
            this.$store.dispatch('setUser', null)
            // TODO: redirect to Homepage
            this.$router.push({
                name: 'songs'
            })
        }
    }
}
</script>

<style scoped>

.home {
    cursor: pointer;
}

.home:hover {
    color: #E9E;
}
</style>
