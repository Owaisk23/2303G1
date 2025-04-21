import 'package:flutter/material.dart';

class Details extends StatefulWidget {
  const Details({ Key? key }) : super(key: key);

  @override
  _DetailsState createState() => _DetailsState();
}

class _DetailsState extends State<Details> {
  var user = {"userName": "Owais Ahmed", "userAge": 23, "userDesignation": "Software Engineer"};

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      // string interpolation
      appBar: AppBar(
        title: Text('${user["userName"]}\'s Profile'),
        backgroundColor: Colors.black,
        foregroundColor: Colors.white,
        centerTitle: true,
      ),
      body: Center(
        child: Column(
          children: [
            Text("User Details"),
            Text("User Name: ${user["userName"]}"),
            Text("User Age: ${user["userAge"]}"),
            Text("User Designation: ${user["userDesignation"]}"),
            ElevatedButton(
              onPressed: (){
                print("Before Change: ${user["userName"]}");
                setState(() {
                  user["userName"] = "Sir Owais Ahmed Khan";
                });
                print("After Change: ${user["userName"]}");
              },
              child: Text("Change User Name"))

          ],
        ),
      ),
    );
  }
}