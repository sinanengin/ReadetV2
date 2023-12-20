const { MongoClient } = require('mongodb');

// MongoDB bağlantı URL'si ve veritabanı adı
const uri = 'mongodb+srv://sinanengin:KCGwfnsWLhRqA1Uw@shemdb.hyem2oa.mongodb.net/'; // MongoDB URL'nizi buraya yazın
const dbName = 'ShemDB'; // Veritabanı adınızı buraya yazın

// MongoDB istemcisini oluşturun ve bağlanın
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectDB() {
  try {
    await client.connect();
    console.log('MongoDB\'ye başarıyla bağlandı');

    const db = client.db(dbName);
    return db;
  } catch (err) {
    console.error('MongoDB bağlantı hatası:', err);
  }
}

// Örnek veri eklemek için
async function insertData(_data) {

  const db = await connectDB();

  if (db) {
    const collection = db.collection('users'); // Koleksiyon adınızı buraya yazın

    // Eklenecek veri
    const data = _data;

    // Veriyi koleksiyona ekle
    const result = await collection.insertOne(data);
    console.log('Veri eklendi:', result.insertedId);
  } else {
    console.log('Veritabanı bağlantısı bulunamadı.');
  }

  client.close(); // Bağlantıyı kapat
}
export default insertData;
