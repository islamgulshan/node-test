var express= require('express');
var router = express.Router();

const usercontoller= require('../controllers/userControllers');
const reservationControllers= require('../controllers/reservationControllers');


const supplierControllers= require('../controllers/supplierControllers');


router.post('/addsuppler',supplierControllers.addsuppler);

router.get('/get_all_suppler',supplierControllers.get_all_suppler);


router.post('/addreservation',reservationControllers.addreservation);
router.get('/get_all_reservation',reservationControllers.get_all_reservation);
router.post("/getReservationId", reservationControllers.getReservationId);
router.delete("/deleteReservation/:id",reservationControllers.deleteReservation);
router.put("/updatReservation",reservationControllers.updatReservation);
router.post('/signup',usercontoller.signup);

module.exports = router;