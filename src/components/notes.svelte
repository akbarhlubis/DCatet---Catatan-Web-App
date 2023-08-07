<script>
	import {onMount} from 'svelte';
	import Count from './count.svelte';
	import {addNote, notesStore} from './../stores';
	
	const NEW_NOTE = {title: '', text: ''};
	
	let editing = false;
	let note;
	let selectedId;
	let textInput;
	let titleInput;
	
	$: console.log('note =', note);
	$: console.log('editing =', editing);
	
	$: sortedNotes = Object.values($notesStore).sort();
	$: note = $notesStore[selectedId] || NEW_NOTE;
	
	function deleteNote() {
		if (confirm('Are you sure you want to delete this note?')) {
	    notesStore.update(notes => {
        delete notes[note.id];
		    return notes;
		  });
		}
	}
	
	function editNote() {
		textInput.focus();
		editing = true;
	}
	
	function handleSubmit() {
    // do nothing for now
	}
	
	function newNote() {
		selectedId = addNote('', '');
		editing = true;
		titleInput.focus();
	}
</script>
<form class="flex flex-col gap-2" on:submit|preventDefault={handleSubmit}>
	<div class="flex gap-2">
	  <select class="p-2 rounded-md" bind:value={selectedId}>
			<option>Select note</option>
	    {#each sortedNotes as note}
  		  <option value={note.id}>{note.title}</option>
	    {/each}
	  </select>
    <button class="text-orange-400" disabled={!note.id} on:click={editNote}>Edit</button>
		<button class="text-red-400" disabled={!note.id} on:click={deleteNote}>Delete</button>
		<button class="text-yellow-400 font-bold" on:click={newNote}>New</button>
	</div>

	<div>
	  <label for="title">Title</label>
	  <input class="rounded-md p-2" id="title" readonly={!editing} bind:this={titleInput} bind:value={note.title} />
	</div>

	<textarea class="rounded-md p-2 mt-2" readonly={!editing} rows="10" bind:this={textInput} bind:value={note.text} />
	{#if note.text}
	  <Count text={note.text} />
	{/if}
</form>

<style>
	input, textarea {
    width: 100%;
	}
	
	input:read-only, textarea:read-only {
		background-color: lightgray;
    border: none;
	}
</style>