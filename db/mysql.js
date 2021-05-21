import MySqlConnection from 'react-native-my-sql-connection';
 
let config = {
    host:'hostname',
    database:'mydatabase',
    user:'myUser',
    password:'myPassword',
    port:3306 
    };
    try{
        const connection = await MySqlConnection.createConnection(config);
        let res = await connection.executeQuery('SELECT * FROM myTable');
        connection.close();
    }catch(err){
        // handle error
    }
