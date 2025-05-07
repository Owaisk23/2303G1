import 'package:flutter/material.dart';
import 'package:firstproj/drawerSide.dart' as drawerSide;
import 'package:http/http.dart' as http;
import 'dart:convert';

class ApiProduct extends StatefulWidget {
  const ApiProduct({ Key? key }) : super(key: key);

  @override
  _ApiProductState createState() => _ApiProductState();
}

class _ApiProductState extends State<ApiProduct> {
  Future<void> getProducts() async{
    var url = Uri.parse('https://dummyjson.com/products');
    var response = await http.get(url);
    // print(response.body);
    return json.decode(response.body);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("API Product"),
        backgroundColor: Colors.blue,
        foregroundColor: Colors.white,
        centerTitle: true,
      ),
      drawer: drawerSide.DrawerSide(),
      body: FutureBuilder(
        future: getProducts(),
        builder: (context, snapshot){
          if(snapshot.hasData){
            var data = snapshot.data as Map<String, dynamic>;
            var products = data['products'] as List<dynamic>;
            return ListView.builder(
              itemCount: products.length,
              itemBuilder: (context, index){
                return ListTile(
                  title: Text(products[index]['title']),
                  subtitle: Text(products[index]['price'].toString()),
                  leading: CircleAvatar(
                    backgroundImage: NetworkImage(products[index]['thumbnail']),
                  ),
                  trailing: Text(products[index]['category']),
                );
              },
            );
          } else {
            return CircularProgressIndicator();
          }
        }),
    );
  }
}