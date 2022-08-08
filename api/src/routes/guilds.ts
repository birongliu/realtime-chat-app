import express from 'express';
import { createServer, fetchServer, updateServer } from '../database/server';
const	router = express.Router();

router
	.post('/', async (req, res) => {
		try {
			await createServer({
				name: req.body.server_name,
				userId: '1000',
			});
			res.redirect('/app');
		} catch (err) {
			console.log(err);
			res.json({ error: 'An error occured when creating new server' });
		}
	})
	.get('/:id', async (req, res) => {
		try {
<<<<<<< HEAD
			const data = await fetchServer({ id: req.params.id });
			res.json(data);
=======
			const server = await fetchServer({ id: req.params.id });
			res.json(server ?? { error: 'no guild' });
>>>>>>> dc48aca885499e5b74d3e2bb89859c7494e36cc7
		} catch (err) {
			console.log(err);
			res.json({ error: 'An error occured when fetching server' });
		}
	})
	.patch('/:id', async (req, res) => {
		try {
			await updateServer({ id: req.params.id });
			res.status(200).json({ message: `successfully deleted ${req.params.id}` });
		} catch (err) {
			console.log(err);
			res.json({ error: 'An error occured when updating server' });
		}
	});


export default router;
