import { ref } from "vue";
import { projectFirestore } from "@/firebase/config";

const getCollection = (collection) => {
    const documents = ref(null);
    const error = ref(null);

    let collectionRef = projectFirestore.collection(collection).orderBy('createdAt');

    collectionRef.onSnapshot((snaphot) => {
        let results = [];
        snaphot.docs.forEach(doc => {
            //prevent from adding data without already created timestamp
            doc.data().createdAt && results.push({
                ...doc.data(), id: doc.id
            });
        });

        documents.value = results;
        error.value = null;
    }, (error) => {
        console.log(error.message);
        documents.value = null;
        error.value = 'Could not fetch data';
    });

    return { documents, error };
};

export default getCollection;