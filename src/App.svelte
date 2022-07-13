<script lang="ts">
  import Card from '@smui/card';
  import Slider from '@smui/slider';
  import { onMount } from 'svelte';
  import { SignatureService } from './signature/SignatureService';

  let width = 500;
  let height = 250;
  let canvas: HTMLCanvasElement;

  onMount(() => {
    const signatureService = new SignatureService(canvas);
  });
</script>

<main>
  <Card>
    <canvas {width} {height} id="canvas" bind:this={canvas} />
  </Card>
  <div class="options">
    <div>
      <span>Height: {height}</span>
      <Slider bind:value={height} max={1000} min={0} />
    </div>
    <div>
      <span>Width: {width}</span>
      <Slider bind:value={width} max={1000} min={0} />
    </div>
  </div>
</main>

<style lang="scss">
  main {
    width: 100vw;
  }
  .options {
    display: flex;
    justify-content: center;
  }
  #canvas {
    background-color: white;
  }
</style>
