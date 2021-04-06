<template>
    <div class="row">
        <h2>Sign in</h2>
        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-md-offset-3"/>
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-md-offset-3">

            <input type="email" class="form-control" placeholder="email" v-model="email"/>
            <br>
            <input type="password" class="form-control" placeholder="password" v-model="password"/>
            <br>
            <button type="submit" value="submit" class="btn" @click="login">SignIn</button>
            <button type="submit" value="submit" class="btn" @click="signout">SignOut</button>
    
        </div>

    </div>
</template>

<script>
import firebase from 'firebase';
export default {
  name: "SignIn",
  data: function() {
            return { email: "", password: "" };
        },
  methods: {
       login(e) {
            firebase
            .auth()
            .signInWithEmailAndPassword(this.email, this.password)
            .then(
                 user => {
                    this.$router.go({path:''});
                 },
                 err => {
                    alert(err.message)
                 });
            e.preventDefault();
            firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.$router.replace("/Male")
          alert("You are logged In")
        }
        
       
        });
       },
       
      signout() {
       firebase
       .auth()
       .signOut()
       .then(() => {
         this.$router.replace("/login");
       });
    },
    
  },
      
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
  text-align: center;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>