let  mysql = require("mysql");

// Se debe prender el xampp
// conexión a la base de datos
// recordatorio: pendiente modificar la base de datos 

const conexion = mysql.createConnection({
  host: "localhost",       // Aqui se coloca el host donde está corriendo la base de datos MySQL
  user: "root",      // se coloca el usuario de MySQL, si esta por defecto solo se pone root
  password: "", // La contraseña del usuario de MySQL , si esta por defecto solo se colocan las comillas
  database: "proyecto" // Nombre de la base de datos a la que se quiere conectar
});

conexion.connect(function(err) {
    if (err) {
      throw err;
    } else {
      console.log("Conexión exitosa");
  
      // Crear la consulta de inserción 
      const query = "INSERT INTO productos (nombre, precio, unidad,categoria) VALUES (?, ?, ?,?)";
  
      // Valores a insertar
      const valores = ["arbeja", 1700, "lb","verdura"];
  
      // Ejecutar la consulta
      conexion.query(query, valores, function(err, resultado) {
        if (err) {
          console.error("Error al insertar el registro:", err);
        } else {
          console.log("Registro insertado con éxito, ID:", resultado.insertId);
        }
  
        // Cerrar la conexión
        conexion.end();
      });
    }
  });
