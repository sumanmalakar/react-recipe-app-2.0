import logo from './logo.svg';
import './App.css';
import { db } from './Firebase'
import { addDoc, collection, getDocs, onSnapshot, deleteDoc, doc, getDoc, updateDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react';
function App() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const collref = collection(db, 'crud');
  const [data, setData] = useState([]);
  const [id, setId] = useState('')

  const [updatedData, setUpdatedData] = useState(
    {}
  )

  useEffect(() => {

    // const fetchData = async() =>{
    //     const firebaseData = await getDocs(collref)
    //     setData(firebaseData.docs.map((doc)=>({
    //       ...doc.data(), id:doc.id
    //     })))
    // }

    const fetchData = async () => {

      onSnapshot(collref, (snapshot) => {
        setData(snapshot.docs.map((doc) => ({
          ...doc.data(), id: doc.id
        })))
      })
    }
    fetchData();
    setName(updatedData.name)
    setEmail(updatedData.email)
    console.log("useEffect is running")
    // console.log(data)
  }, [updatedData])



  const handleSubmit = async (e) => {
    e.preventDefault();

    if (id === '') {

      await addDoc(collref, { name, email });

      setName('')
      setEmail('');

    } else {
      const singleDoc = doc(db, 'crud', id)

      updateDoc(singleDoc, { name, email })
      setId('');

      setName('')
      setEmail('');
    }

    console.log("your form submitted")



  }

  const handleDelete = async (id) => {

    const deleteData = doc(db, 'crud', id)

    await deleteDoc(deleteData)
  }

  const handleUpdate = (id) => {
    setId(id);
    const singleDoc = doc(db, 'crud', id)
    getDoc(singleDoc).then((doc) => setUpdatedData(doc.data()))





  }

  // console.log(updatedData)


  return (
    <>

      <div className="App">
        <h1>Firebase crud</h1>
        <form onSubmit={handleSubmit}>

          name :- <input
            value={name}
            type="text"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <br />
          <br />
          email :- <input
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <br />
          <br />

          <input type="submit" />

        </form>

        {
          data.map((d) => {
            return (
              <>
                <h3>{d.name} {d.email} {d.pincode}
                  <button onClick={() => handleDelete(d.id)}>delete</button> {" "}
                  <button onClick={() => handleUpdate(d.id)}>update</button>
                </h3>


              </>
            )
          })
        }

      </div>
    </>
  );
}

export default App;
