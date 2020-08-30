const express = require('express')
const router = express.Router()
const customerControllers = require('../app/controllers/customerControllers')
const departmentControllers = require('../app/controllers/departmentControllers')
const employeesControllers = require('../app/controllers/employeeControllers')
const ticketControllers = require('../app/controllers/ticketControllers')
const userControllers = require('../app/controllers/userController')
const authenticationUser = require('../app/middlewares/authenticationUser')

router.post('/users/register',userControllers.register)
router.post('/users/login',userControllers.login)
router.delete('/users/logout',authenticationUser,userControllers.logout)
router.get('/users/account',authenticationUser,userControllers.accounts)


router.get('/customers',authenticationUser,customerControllers.list)
router.post('/customers',authenticationUser,customerControllers.create)
router.get('/customers/:id',authenticationUser,customerControllers.show)
router.put('/customers/:id',authenticationUser, customerControllers.update)
router.delete('/customers/:id',authenticationUser,customerControllers.destroy)

router.get('/departments',authenticationUser,departmentControllers.list)
router.post('/departments',authenticationUser,departmentControllers.create)
router.get('/departments/:id',authenticationUser,departmentControllers.show)
router.put('/departments/:id',authenticationUser,departmentControllers.update)
router.delete('/departments/:id',authenticationUser,departmentControllers.destroy)

router.get('/employees',authenticationUser,employeesControllers.list)
router.post('/employees',authenticationUser,employeesControllers.create)
router.get('/employees/:id',authenticationUser,employeesControllers.show)
router.put('/employees/:id',authenticationUser,employeesControllers.update)
router.delete('/employees/:id',authenticationUser,employeesControllers.destroy)

router.get('/tickets',authenticationUser,ticketControllers.list)
router.post('/tickets',authenticationUser,ticketControllers.create)
router.get('/tickets/:id',authenticationUser,ticketControllers.show)
router.put('/tickets/:id',authenticationUser,ticketControllers.update)
router.delete('/tickets/:id',authenticationUser,ticketControllers.destroy)




module.exports = router
