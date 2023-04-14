import 'package:flutter/material.dart';

import '../models/Product_Model.dart';

class ProductItem extends StatelessWidget {
  const ProductItem({super.key, this.model, this.onDelete});

  final Product_Model? model;
  final Function? onDelete;

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return Card(
      elevation: 0,
      margin: const EdgeInsets.symmetric(horizontal: 10.0, vertical: 5.0),
      child: Container(
        width: 200,
        decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(50)),
        child: Text(model!.productName ?? ""),
      ),
    );
  }


}
