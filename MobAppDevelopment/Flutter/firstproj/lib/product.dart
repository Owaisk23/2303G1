import 'package:firstproj/firstScreen.dart';
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
          padding: const EdgeInsets.symmetric(horizontal: 15, vertical: 10), 
          child: Column(
            children: [
              Image.network('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ_H9lmgYtSdi8bF9KV_jcwFNcnqT34rRvfw&s',
               height: 200,
               width: double.infinity,
               fit: BoxFit.cover,
              ),
              SizedBox(height: 15,),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceAround,
                children: [
                  Text("Lenovo Thinkpad V14", style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold, color: const Color.fromARGB(255, 33, 33, 33)),),
                  Text("\$ 500", style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold, color: const Color.fromARGB(255, 33, 33, 33)),),
                ],
              ),
              SizedBox(height: 15,),
              Text("Everyday used Everyday used machine for office and personal task Leveno Core i7 14Generation Everyday used machine for office and personal task Leveno Core i7 14Generation", style: TextStyle(fontSize: 12, color: const Color.fromARGB(255, 95, 95, 95)),),
              SizedBox(height: 15,),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  ElevatedButton(
                    onPressed: () {}, 
                    child: Text("Add to Cart"),
                    style: ElevatedButton.styleFrom(
                      backgroundColor: Colors.black,
                      foregroundColor: Colors.white,
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(10),
                      ),
                    ),
                  ),
                  SizedBox(width: 10,),
                  ElevatedButton(
                    onPressed: () {
                      Navigator.push(context, MaterialPageRoute(builder: (context) => FirstScreen()));
                    }, 
                    child: Text("Buy Now"),
                    style: ElevatedButton.styleFrom(
                      backgroundColor: Colors.black,
                      foregroundColor: Colors.white,
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(10),
                      ),
                    ),
                  ),
                ],
              ),  
            ],
          ), 
        ),
        ),
      ),
    );
  }
}