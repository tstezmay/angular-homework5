import firebase from 'firebase'

export class AuthController {
  constructor ($scope) {
    this.$scope = $scope
    this.showSinginDiv = true
    this.showRegisterDiv = false
    this.showForgotPasswordDiv = false

    firebase.auth().onAuthStateChanged((user) => {
      console.log(user)
    })
  }

  signUp () {
    this.signUpLoading = true
    firebase.auth().createUserWithEmailAndPassword(this.registerEmail, this.registerPassword)
      .then((res) => {
        this.$scope.$apply(() => {
          this.signUpLoading = false
        })
      })
  }

  signIn () {
    this.signInLoading = true
    firebase.auth().signInWithEmailAndPassword(this.email, this.password)
      .then((res) => {
        this.$scope.$apply(() => {
          this.signInLoading = false
        })
      })
  }

  googleSignIn () {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithRedirect(provider)
      .then((res) => {
        console.log(res)
      })
  }

  signOut () {
    firebase.auth().signOut()
  }
  forgotPassword() {
    this.forgotPasswordLoading = true
  	firebase.auth().sendPasswordResetEmail(this.forgotEmail)
      .then((res) => {
        this.$scope.$apply(() => {
          this.forgotPasswordLoading = false
        })
      })
  }
  showRegister() {
    this.showSinginDiv = false
    this.showRegisterDiv = true
    this.showForgotPasswordDiv = false
  }
  showForgotPassword() {
    this.showSinginDiv = false
    this.showRegisterDiv = false
    this.showForgotPasswordDiv = true
  }
  showSingin() {
    this.showSinginDiv = true
    this.showRegisterDiv = false
    this.showForgotPasswordDiv = false
  }
}