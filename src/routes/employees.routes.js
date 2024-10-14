import {Router} from 'express'
const router =Router()
import {deleteEmployees, getEmployee, createEmployees, getEmployees, updateEmployees} from '../controllers/employees.controller.js'


router.get('/employees', getEmployees)

router.get('/employees/:id', getEmployee)

router.post('/employees', createEmployees)
router.patch('/employees/:id', updateEmployees)
router.delete('/employees/:id', deleteEmployees)


export default router