const workerController = require('../controllers/workerController')

const router = require('express').Router()

router.post('/addWorker', workerController.addWorker)
router.get('/', workerController.getAllWorker)
router.get('/active', workerController.getActiveWorker)
router.get('/:id', workerController.getOneWorker)
router.put('/:id', workerController.updateWorker)
router.delete('/:id', workerController.deleteWorker)

module.exports = router
