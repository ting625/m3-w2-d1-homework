const { MongoClient } = require('mongodb')

//Create Instance of MongoClient for mongodb
const client = new MongoClient ('mongodb://127.0.0.1:27017/nodemongo') //mongodb://localhost: 27017

//Connect to database
client.connect()
    .then(() => { 
        //console.log('Connected Successfully & Database Created!')
        //Close the database connection
        //client.close();


        var dbo = client.db('statsdb');

        /* Task 1 */
        /*
        console.log("Database created!")
        //Close the database connection
        client.close();
        */
        
        /* Task 2 */
        /*
        dbo.createCollection('uscensus').then(function(){
        console.log("Collection created!");
        //Close the database connection
        client.close();
        })
        */
        
        
        /* Task 3 */
        /*
        var stats =[
            {
            'city': 'San Juan', 
            'zip': '00926', 
            'state': 'PR', 
            'income': '34781',
            'age': '44'
            },

            {
            'city': 'Corona', 
            'zip': '11368', 
            'state': 'NY', 
            'income': '50797',
            'age': '32'
            },

            {
            'city': 'Chicago', 
            'zip': '60629', 
            'state': 'IL', 
            'income': '42019',
            'age': '31'
            },

            {
            'city': 'El Paso', 
            'zip': '79936', 
            'state': 'TX', 
            'income': '54692',
            'age': '31'
            },

            {
            'city': 'Los Angeles', 
            'zip': '90011', 
            'state': 'CA', 
            'income': '36954',
            'age': '28'
            },

            {
            'city': 'Norwalk', 
            'zip': '90650', 
            'state': 'CA', 
            'income': '66453',
            'age': '35'
            }
        ];
        dbo.collection('uscensus').insertMany(stats).then(function(res) {
            console.log("Number of documents inserted:" + res.insertedCount);
            client.close();
        })
        */

        /* Task 4 */
        /*
        var stats =[
            {
            'city': 'Pacoima', 
            'zip': '91331', 
            'state': 'CA', 
            'income': '60360',
            'age': '33'
            },

            {
            'city': 'Ketchikan', 
            'zip': '99950', 
            'state': 'AK', 
            'income': '00000',
            'age': '00'
            }
        ];
        dbo.collection('uscensus').insertMany(stats).then(function(res) {
            console.log("Number of documents inserted:" + res.insertedCount);
            client.close();
        })
        */

        /* Task 5 */
        /*
        dbo.collection('uscensus').findOne({city: 'Corona', state: 'NY'}).then(function(res) {
            console.log('Zip code of requested city is: ' + res.zip);
            client.close();
        })        
        */

        /* Task 6 */
        /*
        var query = {state: "CA"}
        dbo.collection('uscensus').find(query).toArray().then(items => {
            console.log(`Successfully found ${items.length} documents.`)

            items.forEach(result => {
                console.log(`City: ${result.city}, Income: ${result.income}`);
            });

            client.close();
        })
        */
        
        /* Task 7 */
        /*
        var myquery = {state: 'AK'};
        var newvalues = {$set: {income: "38910", age: "46"}};
        dbo.collection('uscensus').updateOne(myquery, newvalues).then(function() {
            console.log("1 document updated");
            client.close();
        })
        */

        /* Task 8 */
        var mysort = {state: -1}
        dbo.collection('uscensus').find()
            .sort(mysort)
            .toArray()
            .then(items => {
                console.log(`Successfully sorted ${items.length} documents.`)
                console.log(items);
                client.close()
        })


    })
    .catch(error => console.log ('Failed to connect', error))