// Auto-generated by the Load Impact converter

import "./libs/shim/core.js";

export let options = { maxRedirects: 4,
  vus: 1000,
  duration: "30s" };

const Request = Symbol.for("request");
postman[Symbol.for("initial")]({
  options
});

export default function() {
  postman[Request]({
    name: "Postman Echo GET",
    id: "8bf06ae3-ce23-49b4-acfa-d068152b32bf",
    method: "GET",
    address: "http://localhost:8090/order"
  });

  postman[Request]({
    name: "Postman Echo POST",
    id: "5cb4ea6d-68ee-4143-9c9b-f1be0bf18e7c",
    method: "POST",
    address: "http://localhost:8090/order",
    data: '{"repairOrderId":10002,"repairOrderStartDate":"2019-02-03","repairOrderEndDate":"2019-02-03","repairOrderIssueDate":"2019-02-13","repairOrderCostEstimated":57.00,"repairOrderCostTotal":85.00,"client":{"clientId":102,"clientPhoneNumber":"158563175415","firstName":"Мария","lastName":"Орлова","address":{"addressId":102,"houseNumber":"736","apartmentNumber":"518","city":{"cityId":52,"cityName":"Саратов"},"street":{"streetId":52,"streetName":"Некрасова пр."}}},"device":{"deviceId":102,"deviceIMEIOrSn":"55788586297515","devicePassword":"7446","type":{"typeId":12,"typeName":"Capers"},"model":{"modelId":12,"modelName":"Rhubarb"},"brand":{"brandId":12,"brandName":"Bean Sprouts"},"appearance":{"appearanceId":12,"appearanceName":"Cornichons"},"complectation":{"complectationId":12,"complectationName":"Papaw"},"defect":{"defectId":12,"defectName":"Passionfruit"}},"employee":{"employeeId":7,"firstName":"Анжела","lastName":"Щукин","employeeType":{"employeeTypeId":7,"employeeTypeName":"Ms."}},"sparePart":{"sparePartId":102,"sparePartName":"Des Buratto","sparePartCost":48.00},"status":{"statusId":6,"statusName":"Waiting for a spare part"}}',
    headers: {
      "Content-Type": "application/json"
    }
  });

 postman[Request]({
    name: "Postman Echo PUT",
    id: "3fe46c89-7a20-44c3-aa8f-3a000059e2db",
    method: "PUT",
    address: "http://localhost:8090/order",
    data: '{"repairOrderId":5,"repairOrderStartDate":"2019-10-08","repairOrderEndDate":"2019-02-03","repairOrderIssueDate":"2019-02-13","repairOrderCostEstimated":57.00,"repairOrderCostTotal":85.00,"client":{"clientId":2,"clientPhoneNumber":"158563175415","firstName":"Мария","lastName":"Орлова","address":{"addressId":2,"houseNumber":"736","apartmentNumber":"518","city":{"cityId":2,"cityName":"Саратов"},"street":{"streetId":2,"streetName":"Некрасова пр."}}},"device":{"deviceId":2,"deviceIMEIOrSn":"55788586297515","devicePassword":"7446","type":{"typeId":1,"typeName":"Capers"},"model":{"modelId":1,"modelName":"Rhubarb"},"brand":{"brandId":1,"brandName":"Bean Sprouts"},"appearance":{"appearanceId":1,"appearanceName":"Cornichons"},"complectation":{"complectationId":1,"complectationName":"Papaw"},"defect":{"defectId":1,"defectName":"Passionfruit"}},"employee":{"employeeId":1,"firstName":"Анжела","lastName":"Щукин","employeeType":{"employeeTypeId":1,"employeeTypeName":"Ms."}},"sparePart":{"sparePartId":1,"sparePartName":"Des Buratto","sparePartCost":48.00},"status":{"statusId":1,"statusName":"Ready"}}',
    headers: {
      "Content-Type": "application/json"
    }
  });

  postman[Request]({
    name: "Postman Echo GET",
    id: "8bf06ae3-ce23-49b4-acfa-d068152b32b2",
    method: "GET",
    address: "http://localhost:8090/order/55"
  });

}
