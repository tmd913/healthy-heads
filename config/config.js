module.exports = {
  "development": {
    "username": process.env.MYSQL_USER,
    "password": process,
    "database": process.env.MYSQL_KEY,
    "host": process.env.MYSQL_HOST,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": "",
    "database": "healthy_heads_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "use_env_variable":"JAWSDB_URL",
    "dialect": "mysql",
    
  }
}
