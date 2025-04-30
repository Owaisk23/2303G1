import 'package:flutter/material.dart';

class DarazScreen extends StatefulWidget {
  const DarazScreen({Key? key}) : super(key: key);

  @override
  _DarazScreenState createState() => _DarazScreenState();
}

class _DarazScreenState extends State<DarazScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Daraz Screen'),
        backgroundColor: Colors.deepOrange,
        foregroundColor: Colors.white,
        centerTitle: true,
      ),
      body: Column(
        children: [
          SizedBox(height: 5),
          Container(
            decoration: BoxDecoration(
              image: DecorationImage(
                image: AssetImage('banner.jpg'),
                fit: BoxFit.cover,
              ),
            ),
            height: 120,
            width: double.infinity,
          ),
          SizedBox(height: 5),
          Row(
            children: [
              Container(
                decoration: BoxDecoration(
                  image: DecorationImage(
                    image: AssetImage('circle1.jpg'),
                    fit: BoxFit.cover,
                  ),
                ),
                height: 70,
                width: 70,
              ),
              SizedBox(width: 5),
              Container(
                decoration: BoxDecoration(
                  image: DecorationImage(
                    image: AssetImage('circle2.jpg'),
                    fit: BoxFit.cover,
                  ),
                ),
                height: 70,
                width: 70,
              ),
              SizedBox(width: 5),
              Container(
                decoration: BoxDecoration(
                  image: DecorationImage(
                    image: AssetImage('circle3.jpg'),
                    fit: BoxFit.cover,
                  ),
                ),
                height: 70,
                width: 70,
              ),
              SizedBox(width: 5),
              Container(
                decoration: BoxDecoration(
                  image: DecorationImage(
                    image: AssetImage('circle4.jpg'),
                    fit: BoxFit.cover,
                  ),
                ),
                height: 70,
                width: 70,
              ),
            ],
          ),
        ],
      ),
    );
  }
}
