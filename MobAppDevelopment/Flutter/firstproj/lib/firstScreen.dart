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
      body: Center(
        child: Column(
          children: [
            Container(
              height: 100,
              width: 100,
              color: Colors.red,
            ),
            SizedBox(height: 10,),
            Container(
              height: 100,
              width: 100,
              color: Colors.yellow,
            ),
            SizedBox(height: 10,),
            Container(
              height: 100,
              width: 100,
              color: Colors.blue,
            ),
            SizedBox(height: 10,),
            Container(
              height: 100,
              width: 100,
              color: Colors.pink,
            ),
            SizedBox(height: 10,),
            Container(
              height: 100,
              width: 100,
              color: Colors.green,
            )
        ],)
      ),
    );
  }
}