# How to use google fire-base !?

         * INITIAL SETUP *

1. Visit: console.firebase.google.com .

2. Create a new firease prodect .

3. Viait doc ( go to docs ) : Build > Web > Getting Started .

4. Register web app > fierbase project home > click  web > give name and register .

5. Install firebse for yur prodect: npm install firebase .

6. DANGEROUS : get firebase config and put it in Firebsde.js .

7. Export analytics from firebase.js .

        * SETUP PROVIDER *

8. create a auth using getAuth from firebse by using app from Firebase.js .

9. create google auth providert . Do not forget to use new GoogleAuthprovider() .

10. go to firebase > Build > Authentication > Sign In method .

11. Enable google sign in method .

12. Create a button for google sign in method with a click handler .

13. inside the event gandler , call singInWithPopup with auth , provider .

14. after singInWithPopup .then result , error .

## How to add a new sign in method like google

1. enable the sign in method .

2. create clientid and secret .

3. get clientid and secret.

### How to add a normal login and signup syestem

1. "Log in" OR "Sign in" [If already you have a user account created] .

2. "Register" OR "Sign up" [If you dont have any user account created] .

3. get from value:
set from onSubmitHandler
set event parameter
