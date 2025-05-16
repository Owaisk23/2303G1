import 'package:firstproj/ApiProduct.dart';
import 'package:firstproj/BillCalculator.dart';
import 'package:firstproj/SongApp.dart';
import 'package:firstproj/darazScreen.dart';
import 'package:firstproj/dynamicList.dart';
import 'package:firstproj/firstScreen.dart';
import 'package:firstproj/product.dart';
import 'package:flutter/material.dart';

class DrawerSide extends StatefulWidget {
  const DrawerSide({ Key? key }) : super(key: key);

  @override
  _DrawerSideState createState() => _DrawerSideState();
}

class _DrawerSideState extends State<DrawerSide> {
  @override
  Widget build(BuildContext context) {
    return Drawer(
      child: ListView(
        padding: EdgeInsets.zero,
        children: [
          DrawerHeader(
            decoration: BoxDecoration(
              color: Colors.blueAccent,
            ),
            child: Text(
              'Drawer Header',
              style: TextStyle(
                color: Colors.white,
                fontSize: 24,
              ),
            ),
          ),
          ListTile(
            leading: Icon(Icons.home),
            title: Text('Home'),
            onTap: () {
              Navigator.push(context, MaterialPageRoute(builder:  (context) => FirstScreen()));         },
          ),
          ListTile(
            leading: Icon(Icons.laptop),
            title: Text('Daraz Screen'),
            onTap: () {
              Navigator.push(context, MaterialPageRoute(builder:  (context) => DarazScreen()));
            },
          ),
          ListTile(
            leading: Icon(Icons.laptop),
            title: Text('Laptops'),
            onTap: () {
              Navigator.push(context, MaterialPageRoute(builder:  (context) => DynamicList()));
            },
          ),
          ListTile(
            leading: Icon(Icons.laptop),
            title: Text('Bill Calculator'),
            onTap: () {
              Navigator.push(context, MaterialPageRoute(builder:  (context) => BillCalculator()));
            },
          ),
          ListTile(
            leading: Icon(Icons.laptop),
            title: Text('Song App'),
            onTap: () {
              Navigator.push(context, MaterialPageRoute(builder:  (context) => SongApp()));
            },
          ),
          ListTile(
            leading: Icon(Icons.laptop),
            title: Text('API Products'),
            onTap: () {
              Navigator.push(context, MaterialPageRoute(builder:  (context) => ApiProduct()));
            },
          ),
          ListTile(
            leading: Icon(Icons.settings),
            title: Text('product'),
            onTap: () {
              Navigator.push(context, MaterialPageRoute(builder:  (context) => Product()));
            },
          ),
        ],
      ),
    );
  }
}