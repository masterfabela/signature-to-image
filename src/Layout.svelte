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
  //let isSignatureEmpty: boolean = true
  

  const clearDraw = () => {
    signatureService.clearDraw();
  };

  const save = () => {
    console.log('save');
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
    <div class="sliders">
      <div class="slider">
        <Label>Height: {height}px</Label>
        <Slider bind:value={height} max={1000} min={0} />
      </div>
      <div class="slider">
        <span>Width: {width}px</span>
        <Slider bind:value={width} max={1000} min={0} />
      </div>
    </div>
    <div class="buttons">
      <Button on:click={clearDraw} variant="raised">
        <Label>CLEAR</Label>
      </Button>
      <Button on:click={() => {
        save();
      }} variant="raised"><Label>SAVE</Label></Button>
    </div>
  </div>
</div>

<style lang="scss">
  .main-layout {
    width: 100%;
    overflow-y: hidden;
    height: 100%;
    display: flex;
    flex-direction: column;
    .signature {
      margin-top: 5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      overflow: auto;
    }
  }
  .options {
    background-color: #242424;
    bottom: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    .sliders {
      margin-top: 2rem;
      display: flex;
      .slider {
        text-align: center;
        width: 300px;
      }
      @media (max-width: 599px) {
        flex-direction: column;
        margin-top: 2rem;
      }
    }
    .buttons {
      display: flex;
      margin-bottom: 26px;
      gap: 2rem;
    }
  }
  #canvas {
    background-color: white;
    border-radius: 11px;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    margin: 0 auto;
    width: 100%;
    height: 100%;

    @media (max-width: 599px) {
      width: 100%;
      height: 100%;
    }
  }
</style>
