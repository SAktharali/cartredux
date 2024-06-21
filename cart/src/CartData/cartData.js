import breakfast from '../assets/breakfast.jpg'
import lunch from '../assets/lunch.png'
import dinner from '../assets/dinner.png'
import snack from '../assets/snack.jpg'
import drink from '../assets/sprite.jpg'
import sweet from '../assets/sweet.jpg'

const cartData=
{
    "MealTypes":[
  {
    "meal_id":1,
    "name":"Breakfast Menu",
    "customerName":'karthick',
    "content":"enjoy your breakfast with the following items like mini breakfast contains idly-1,mini_dosai-1,vadai-1.",
    "foodList":'combo of mini breakfast contains idly-1,mini_dosai-1,vadai-1.',
    "image":breakfast,
    "price":50,
    "gst":5,
    "deliveryCharges":5,
    "deliveryAddress":'01 abc street,abc.',
    "customerMobileNo":751264960,
    "contactUs":9600740471,
    "modeOfPayment":"UPI",
    "transactionID":14785236901233
  },
  {
    "meal_id":2,
    "name":"Lunch Menu",
    "customerName":'murali',
    "content":"enjoy your meals with the following items like rice,veggies,sidedishes & sweets.",
    "foodList":'combo of rice,veggies,sidedishes & sweets.',
    "image": lunch,
    "price":100,
    "gst":10,
    "deliveryCharges":10,
    "deliveryAddress":'02 def street,def.',
      "customerMobileNo":951264960,
    "contactUs":9600740471,
    "modeOfPayment":"cash on delivery",
  },
  {
    "meal_id":3,
    "name":"Dinner Menu",
    "customerName":'arun',
    "content":"enjoy your dinner with the following items like chappatti-2,dosai-1,idly-2.",
    "foodList":'combo of chappatti-2,dosai-1,idly-2.',
    "image": dinner,
    "price":100,
    "gst":10,
    "deliveryCharges":15,
    "deliveryAddress":'03 ghi street,ghi.',
      "customerMobileNo":851264960,
    "contactUs":9600740471,
    "modeOfPayment":"UPI",
    "transactionID":14785236901233
    },
  {
    "meal_id":4,
    "name":"Snacks Menu",
    "customerName":'tom',
    "content":"enjoy your snacks with any one of the following items like samosa-2,chips,biscuits.",
    "image":snack,
    "foodList":'samosa-2,chips,biscuits any one will include in the list.',
    "price":50,
    "gst":5,
    "deliveryCharges":5,
    "deliveryAddress":'04 jkl street,jkl.',
    "customerMobileNo":756264960,
    "contactUs":9600740471,
    "modeOfPayment":"cash on delivery",
      },
  {
    "meal_id":5,
    "name":"Drinks Menu",
    "customerName":'jerry',
    "content":"enjoy your drinks with any one of the following items like coke,sprite,pepsi,miranda,7up etc...",
    "foodList":'coke,sprite,pepsi,miranda,7up any one will include in the list.',
    "image": drink,
    "price":50,
    "gst":5,
    "deliveryCharges":5,
    "deliveryAddress":'05 mno street,mno.',
    "customerMobileNo":961262960,
    "contactUs":9600740471,
    "modeOfPayment":"UPI",
    "transactionID":14785236901233
    },
  {
    "meal_id":6,
    "name":"Sweets Menu",
    "customerName":'shyaan',
    "content":"enjoy your sweets with any one of the following items like ladoo,gulab jamun,halwa,rasgula.",
    "foodList":'ladoo,gulab jamun,halwa,rasgula any one will include in the list.',
    "image": sweet,
    "price":50,
    "gst":5,
    "deliveryCharges":20,
    "deliveryAddress":'06 pqr street,pqr.',
      "customerMobileNo":951260060,
    "contactUs":9600740471,
    "modeOfPayment":"UPI",
  "modeOfPayment":"Debit Card/Net Banking",
  "transactionID":14785236901233
    },
  ]
 }

 export default cartData;