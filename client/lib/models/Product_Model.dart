class Product_Model{
  late String? id;
  late String? productName;
  late String? description;
  late int? price;
  late String? image;


  Product_Model({
    this.id,
    this.productName,
    this.description,
    this.price,
    this.image,
  });


  Product_Model.fromJson(Map<String,dynamic> json){
    id = json["_id"];
    productName = json["productName"];
    description = json["description"];
    price = json["price"];
    image = json["image"];

  }


  Map<String,dynamic> toJson(){

    final _data = <String,dynamic>{};

    _data["_id"] = id;
    _data["productName"] = productName;
    _data["description"] = description;
    _data["price"] = price;
    _data["image"] = image;

    return _data;

  }

}