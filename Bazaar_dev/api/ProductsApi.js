import firebase from 'firebase';


export function addProduct(product, addComplete){
    firebase.firestore()
    .collection('Products').add({
    title: product.title,
   // image: product.image,
    price: product.price,
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
        }).then((snapshot) => snapshot.get()
        ).then((productData) => addComplete( productData.data()))
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

  //  console.log(productList);
    productRetreived(productList);
}