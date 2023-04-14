import 'package:client/widget/product_item.dart';
import 'package:flutter/material.dart';

import '../models/Product_Model.dart';

class ProductListScreen extends StatefulWidget {
  const ProductListScreen({super.key});

  @override
  State<ProductListScreen> createState() => _ProductListScreenState();
}

class _ProductListScreenState extends State<ProductListScreen> {
  List<Product_Model> products = List<Product_Model>.empty(growable: true);


  @override
  void initState(){
    super.initState();
    products.add(
      Product_Model(
        id:"1",
        productName: "Haldiram",
        price: 20,
        image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.in%2FHaldirams-Delhi-Bhujia-1kg%2Fdp%2FB00AG1TK72&psig=AOvVaw096CFKqwk-aOXtP4lnVaEo&ust=1681534468327000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCIDSsZfKqP4CFQAAAAAdAAAAABAE"
      )
    );
     products.add(
      Product_Model(
        id:"1",
        productName: "Haldiram",
        price: 20,
        image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.in%2FHaldirams-Delhi-Bhujia-1kg%2Fdp%2FB00AG1TK72&psig=AOvVaw096CFKqwk-aOXtP4lnVaEo&ust=1681534468327000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCIDSsZfKqP4CFQAAAAAdAAAAABAE"
      )
    );
  }


  Widget productList(products){
    return SingleChildScrollView(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.spaceAround,
        crossAxisAlignment: CrossAxisAlignment.center,
        
        children: [
          Column(
            mainAxisAlignment: MainAxisAlignment.start,
            children: [
              ElevatedButton(onPressed: (){}, style: ElevatedButton.styleFrom(
                foregroundColor: Colors.white,
                backgroundColor: Colors.orange,
                minimumSize: const Size(88,36),
                padding: const EdgeInsets.symmetric(horizontal: 16),
                shape: const RoundedRectangleBorder(
                  borderRadius: BorderRadius.all(
                    Radius.circular(10)
                  )
                )

              ), child: Text('Add Product')),
              ListView.builder(
                shrinkWrap: true,
                physics: const ClampingScrollPhysics(),
                scrollDirection: Axis.vertical,
                itemCount: products.length,
                itemBuilder: (context, index){
                  return ProductItem(
                    model: products[index],
                    onDelete: (Product_Model model){

                    },
                  );
                },
              )
            ],
          )

      ]),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Product App"),
      ),
      backgroundColor: Colors.grey[200],
      body: productList(products),
    );
  }
}