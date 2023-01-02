<script lang="ts">
  import Actions from '@smui/card/src/Actions.svelte';
  import Layout from './Layout.svelte';
  import { initializeApp } from "firebase/app";
  import { getAnalytics } from "firebase/analytics";  
  import firebaseConfig from '../firebase.json';

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app)
  
</script>


<main>
  <Layout />
</main>


<style lang="scss">
  body {
    text-align: center;
    padding: 1em;
    display: flex;
    width: 100%;
    height: 100vh;
    height: 100dvh;
  }
</style>
