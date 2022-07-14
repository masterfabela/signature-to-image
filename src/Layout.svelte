<script lang="ts">
  import Card from '@smui/card';
  import Slider from '@smui/slider';
  import Button, { Label } from '@smui/button';
  import { onMount } from 'svelte';
  import { SignatureService } from './signature/SignatureService';

  let width = 500;
  let height = 250;
  let canvas: HTMLCanvasElement;
  let signatureService: SignatureService;

  const clearDraw = () => {
    signatureService.clearDraw();
  };

  const save = () => {
    signatureService.savePNG();
  };

  onMount(() => {
    signatureService = new SignatureService(canvas);
  });
</script>

<div class="main-layout">
  <div class="signature">
    <Card>
      <canvas {width} {height} id="canvas" bind:this={canvas} />
    </Card>
  </div>
  <div class="options">
    <div class="slider">
      <Label>Height: {height}</Label>
      <Slider bind:value={height} max={1000} min={0} />
    </div>
    <div class="slider">
      <span>Width: {width}</span>
      <Slider bind:value={width} max={1000} min={0} />
    </div>
    <Button on:click={clearDraw} variant="raised">
      <Label>CLEAR</Label>
    </Button>
    <Button on:click={save} variant="raised"><Label>SAVE</Label></Button>
  </div>
</div>

<style lang="scss">
  .main-layout {
    height: 100%;
    display: flex;
    flex-direction: column;
    .signature {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      overflow: auto;
    }
  }
  .options {
    overflow: auto;
    background-color: #242424;
    bottom: 0;
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    .slider {
      width: 300px;
    }
  }
  #canvas {
    background-color: white;
    border-radius: 11px;
  }
</style>
