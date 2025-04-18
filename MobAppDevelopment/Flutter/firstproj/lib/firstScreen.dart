import 'package:flutter/material.dart';

class FirstScreen extends StatefulWidget {
  const FirstScreen({ Key? key }) : super(key: key);

  @override
  _FirstScreenState createState() => _FirstScreenState();
}

class _FirstScreenState extends State<FirstScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black87,
      appBar: AppBar(
        title: const Text('First Screen'),
        backgroundColor: Colors.black,
        foregroundColor: Colors.white,
        centerTitle: true,
      ),
      body: Padding(
          // padding: const EdgeInsets.all(10),
          // padding: const EdgeInsets.symmetric(horizontal: 50, vertical: 20),
          padding: const EdgeInsets.only(top: 40, left: 20, right: 20),
          child: ListView(
            // mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: [
            Container(
              height: 100,
              width: 100,
              color: Colors.red,
              child: Icon(Icons.home, color: Colors.white, size: 50,),
            ),
            SizedBox(height: 10,),
            Container(
              height: 100,
              width: 100,
              color: Colors.pink,
              child: Icon(Icons.wheelchair_pickup, color: Colors.white, size: 50,),
            ),
            SizedBox(height: 10,),
            Container(
              height: 100,
              width: 100,
              color: Colors.blue,
              child: Icon(Icons.phone, color: Colors.white, size: 50,),
            ),
            SizedBox(height: 10,),
            Container(
              height: 100,
              width: 100,
              color: Colors.teal,
              child: Icon(Icons.tab, color: Colors.white, size: 50,),
            ),
            SizedBox(height: 10,),
            Container(
              height: 100,
              width: 100,
              color: Colors.deepPurpleAccent,
              child: Icon(Icons.h_mobiledata, color: Colors.white, size: 50,),
            ),
            SizedBox(height: 10,),
            Container(
              height: 100,
              width: 100,
              color: Colors.deepOrange,
              child: Icon(Icons.bus_alert, color: Colors.white, size: 50,),
            ),
            SizedBox(height: 10,),
            Container(
              height: 100,
              width: 100,
              color: Colors.blueGrey,
              child: Icon(Icons.car_crash, color: Colors.white, size: 50,),
            ),
            SizedBox(height: 10,),
            Container(
              height: 100,
              width: 100,
              color: Colors.greenAccent,
              child: Icon(Icons.bike_scooter, color: Colors.white, size: 50,),
            ),
            SizedBox(height: 10,),
            Container(
              height: 100,
              width: 100,
              color: Colors.brown,
              child: Icon(Icons.ballot, color: Colors.white, size: 50,),
            ),
        ],)
        
      ),
      // body: Center(
      //   child: SingleChildScrollView(
      //     scrollDirection: Axis.vertical,
      //     child: Column(
      //       // mainAxisAlignment: MainAxisAlignment.spaceEvenly,
      //     children: [
      //       Container(
      //         height: 100,
      //         width: 100,
      //         color: Colors.red,
      //         child: Icon(Icons.home, color: Colors.white, size: 50,),
      //       ),
      //       SizedBox(height: 10,),
      //       Container(
      //         height: 100,
      //         width: 100,
      //         color: Colors.pink,
      //         child: Icon(Icons.wheelchair_pickup, color: Colors.white, size: 50,),
      //       ),
      //       SizedBox(height: 10,),
      //       Container(
      //         height: 100,
      //         width: 100,
      //         color: Colors.blue,
      //         child: Icon(Icons.phone, color: Colors.white, size: 50,),
      //       ),
      //       SizedBox(height: 10,),
      //       Container(
      //         height: 100,
      //         width: 100,
      //         color: Colors.teal,
      //         child: Icon(Icons.tab, color: Colors.white, size: 50,),
      //       ),
      //       // SizedBox(height: 10,),
      //       // Container(
      //       //   height: 100,
      //       //   width: 100,
      //       //   color: Colors.deepPurpleAccent,
      //       //   child: Icon(Icons.h_mobiledata, color: Colors.white, size: 50,),
      //       // ),
      //       // SizedBox(height: 10,),
      //       // Container(
      //       //   height: 100,
      //       //   width: 100,
      //       //   color: Colors.deepOrange,
      //       //   child: Icon(Icons.bus_alert, color: Colors.white, size: 50,),
      //       // ),
      //       // SizedBox(height: 10,),
      //       // Container(
      //       //   height: 100,
      //       //   width: 100,
      //       //   color: Colors.blueGrey,
      //       //   child: Icon(Icons.car_crash, color: Colors.white, size: 50,),
      //       // ),
      //       // SizedBox(height: 10,),
      //       // Container(
      //       //   height: 100,
      //       //   width: 100,
      //       //   color: Colors.greenAccent,
      //       //   child: Icon(Icons.bike_scooter, color: Colors.white, size: 50,),
      //       // ),
      //       // SizedBox(height: 10,),
      //       // Container(
      //       //   height: 100,
      //       //   width: 100,
      //       //   color: Colors.brown,
      //       //   child: Icon(Icons.ballot, color: Colors.white, size: 50,),
      //       // ),
      //   ],)
      //   ),
      // ),
    );
  }
}