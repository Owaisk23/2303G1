import 'package:flutter/material.dart';

class Product extends StatefulWidget {
  const Product({ Key? key }) : super(key: key);

  @override
  _ProductState createState() => _ProductState();
}

class _ProductState extends State<Product> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Our Products'),
        backgroundColor: Colors.black,
        foregroundColor: Colors.white,
        centerTitle: true,
      ),
      body: Center(
        child: Container(
          height: 400,
          width: 300,
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(20),
            border: Border.all(color: Colors.black, width: 2),
          ),
         child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 10), 
          child: Column(
            children: [
              Image.network('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ_H9lmgYtSdi8bF9KV_jcwFNcnqT34rRvfw&s',
               height: 200,
               width: double.infinity,
               fit: BoxFit.cover,
              ),
            ],
          ), 
        ),
        ),
      ),
    );
  }
}