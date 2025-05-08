import { getFirestore, collection, getDocs, doc, getDoc, query, where } from "firebase/firestore";

export const getProducts = async (categoria = null) => {
    try {
        const db = getFirestore(); 
        const productsCollection = collection(db, 'productos');

        let q = productsCollection;

        if (categoria) {
            q = query(productsCollection, where("categoria", "==", categoria));
        }

        const querySnapshot = await getDocs(q);

        const products = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        return products;

    } catch (error) {
        console.error("Error al cargar los productos", error);
        throw error;
    }
};


export const getProductById = async (id) => {
    try {
      const db = getFirestore();
      const docRef = doc(db, "productos", id);
      const snapshot = await getDoc(docRef);
  
      if (snapshot.exists()) {
        return { id: snapshot.id, ...snapshot.data() };
      } else {
        return null; 
      }
    } catch (error) {
      console.error("Error al obtener el producto por ID:", error);
      throw error;
    }
  };
