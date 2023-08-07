<script>
  import svelteLogo from "./assets/svelte.svg";
  import viteLogo from "/vite.svg";
  import About from "./components/about.svelte";
  import Notes from "./components/notes.svelte";
  import Layout from "./components/layout.svelte";

  let component = About;
</script>

<main class="lg:mx-80 m-4 my-4 shadow-lg bg-slate-50 p-6 rounded-xl">
  <div class="flex items-center flex-col">
    <div class="list-logo flex gap-2">
      <img class="hover:animate-ping" src={svelteLogo} alt="Svelte logo" />
      <img class="hover:animate-ping" src={viteLogo} alt="Vite logo" />
    </div>
    <h1 class="text-lg font-bold">D'Catet</h1>
    <p class="text-sm text-slate-700">Lupakan Kebiasan Sering Kelupaan</p>
  </div>
  <nav class="flex gap-2 justify-center">
    <button on:click={() => (component = About)}>About</button>
    <button on:click={() => (component = Notes)}>Notes</button>
  </nav>
  <Layout>
    <svelte:component this={component} />
  </Layout>
</main>
