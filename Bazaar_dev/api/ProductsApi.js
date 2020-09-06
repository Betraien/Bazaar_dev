import firebase from 'firebase';

export function AddProducts(Product) {
    Product.createdAt = firebase.firestore.FieldValue.serverTimestamp();
  
    firebase.firestore()
      .collection('Products')
      .add(Product)
      .then((snapshot) => {
        Product.id = snapshot.id;
        snapshot.set(Product);
      }).then(() => console.log("success"))
      .catch((error) => console.log(error));
  }


export async function getProduct(productRetreived){
    var productList = [];
    var snapshot = await firebase.firestore()
    .collection('Products')
    .orderBy('createdAt')
    .get()
    console.log(snapshot)

    snapshot.forEach((doc) => {
    productList.push(doc.data());
    });

    productRetreived(productList);
}