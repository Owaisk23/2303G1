import 'package:flutter/material.dart';
import 'package:firstproj/drawerSide.dart' as drawerSide;

class BillCalculator extends StatefulWidget {
  const BillCalculator({ Key? key }) : super(key: key);

  @override
  _BillCalculatorState createState() => _BillCalculatorState();
}

class _BillCalculatorState extends State<BillCalculator> {
  final GlobalKey<FormState> myformkey = GlobalKey<FormState>();
  TextEditingController unitsController = TextEditingController();
  TextEditingController priceController = TextEditingController();
  TextEditingController taxPercentController = TextEditingController();

  double units =0,
  pricePerUnit =0,
  taxPercent =0,
  billAmount =0,
  taxAmount =0,
  finalBillAmount =0;

  var billDetails = {};

  void calculateBill() {
    if (myformkey.currentState!.validate()) {
      units = double.parse(unitsController.text);
      pricePerUnit = double.parse(priceController.text);
      taxPercent = double.parse(taxPercentController.text);

      billAmount = units * pricePerUnit;
      taxAmount = (billAmount * taxPercent) / 100;

      setState(() {
        finalBillAmount = billAmount + taxAmount;
      });
      print("Final Bill Amount: $finalBillAmount");
    }
    else {
      print("Please insert valid details");
    }
  }


  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Bill Calculator"),
        centerTitle: true,
        backgroundColor: Colors.indigoAccent,
        foregroundColor: Colors.white,
      ),
      drawer: drawerSide.DrawerSide(),
      body: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 20),
          child: Form(
              key: myformkey,
              child: ListView(
                children: [
                  Text(
                    "Enter the details",
                    style: TextStyle(fontSize: 22, color: Colors.indigoAccent),
                  ),
                  SizedBox(
                    height: 20,
                  ),
                  TextFormField(
                    decoration: InputDecoration(
                      labelText: "Enter the number of units consumed",
                      prefixIcon: Icon(Icons.electric_bolt_outlined),
                      border: OutlineInputBorder(),
                    ),
                    keyboardType: TextInputType.number,
                    validator: (value) {
                      if (value!.isEmpty) {
                        return "This field cannot be empty";
                      }
                    },
                    controller: unitsController,
                  ),
                  SizedBox(
                    height: 20,
                  ),
                  TextFormField(
                    decoration: InputDecoration(
                      labelText: "Enter the price per unit",
                      prefixIcon: Icon(Icons.monetization_on),
                      border: OutlineInputBorder(),
                    ),
                    keyboardType: TextInputType.number,
                    validator: (value) {
                      if (value!.isEmpty) {
                        return "This field cannot be empty";
                      }
                    },
                    controller: priceController,
                  ),
                  SizedBox(
                    height: 20,
                  ),
                  TextFormField(
                    decoration: InputDecoration(
                      labelText: "Enter the tax percentage",
                      prefixIcon: Icon(Icons.percent),
                      border: OutlineInputBorder(),
                    ),
                    keyboardType: TextInputType.number,
                    validator: (value) {
                      if (value!.isEmpty) {
                        return "This field cannot be empty";
                      }
                    },
                    controller: taxPercentController,
                  ),
                  SizedBox(
                    height: 20,
                  ),
                  // ElevatedButton(onPressed: calculateBill, child:
                  // Text("Calculate"))

                  GestureDetector(
                    onTap: calculateBill,
                    child: Container(
                      height: 40,
                      width: double.infinity,
                      decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(50),
                          color: Colors.indigoAccent),
                      child: Center(
                          child: Text(
                        "Calculate Bill",
                        style: TextStyle(color: Colors.white, fontSize: 20),
                        textAlign: TextAlign.center,
                      )),
                    ),
                  ),

                  SizedBox(
                    height: 60,
                  ),
                  Text(finalBillAmount != 0
                      ? "Final Bill Amount:$finalBillAmount"
                      : "Enter values to get your bill")
                ],
              )
              ),
        )
    );
  }
}