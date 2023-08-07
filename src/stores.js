import {writable} from 'svelte/store';

let lastId = 0;

// Keys are ids and values are objects with id, title, and text properties.
export const notesStore = writable({});

export function addNote(title, text) {
	lastId++;
  const note = {id: lastId, title, text};
	notesStore.update(notes => {
		notes[lastId] = note;
		return notes;
	});
	return lastId;
}

addNote('JavaScript', 'JS is cool!');
addNote('Svelte', 'Svelte is elegant and minimal.');
addNote('Tailwind', 'Tailwind fast and creative..');