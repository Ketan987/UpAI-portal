var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "upaitech_dataInserter",
  password: "S]M]M=@%7LhH",
  database: "upaitech_preregistration"
});


// data inserter => S]M]M=@%7LhH

const saveUserInfo = async(info) => {
    try{
        con.connect();
        const id = uuidv4();
        const insertQuery = `INSERT INTO preannouncement (userId, name, email, beta_user, newsletter_subs, createdDate, updatedDate) values (${id}, ${info.name}, ${info.email}, true, true, ${new Date()}, ${new Date()}) ;`
        const res = await con.query(insertQuery);
        console.log('connected here - ', res);
        con.end()
        return true
    }
    catch(err) {
      console.log('connection not occured');
      return false
    }
}

export default saveUserInfo;