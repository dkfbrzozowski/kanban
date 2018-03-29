import { Router } from 'express';
import * as NoteController from '../controllers/note.controller';

const router = new Router();

// Add a new Note
router.route('/notes').post(NoteController.addNote);

// Delete a note by noteId
router.route('/notes/:noteId').delete(NoteController.deleteNote);

// Modify a note task by laneId
router.route('/notes/:noteId').put(NoteController.updateNote);

export default router;
