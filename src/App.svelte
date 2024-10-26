<script lang="ts">
  import Layout from './Layout.svelte';
  import { initializeApp } from 'firebase/app';
  import firebaseConfig from '../firebase.json';

  const app = initializeApp(firebaseConfig);
</script>

<main>
  <Layout />
</main>
