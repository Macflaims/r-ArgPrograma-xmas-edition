function probarValidarNombre() {
  console.assert(
      validarNombre("") === "El campo nombre no puede estar vacío",
      "Validar nombre no validó que el nombre no sea vacío",
  );

  console.assert(
      validarNombre(
          "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa") ===
          "El campo nombre no puede contener más de 50 caracteres",
      "Validar nombre no validó que el nombre sea menor a 50 caracteres",
  );
    
  console.assert(
    validarNombre("12123234")==="El campo nombre sólo acepta letras",
  "Validar nombre no validó que solo se usen letras"
  )


  console.assert(
    validarNombre("Martin") === "",
    "Validar nombre falló con una respuesta correcta"
  )
}

probarValidarNombre();

function probarValidarCiudad(){
    console.assert(
        validarCiudad("")=== "El campo ciudad no puede estar vacío",
        "Validar Ciudad no validó que el campo ciudad no esté vaciío",
    );
    console.assert(
        validarCiudad("Buenos Aires") === "",
        "Validar ciudad falló con una respuesta correcta",
      )
    
}

probarValidarCiudad();

function probarValidarDescripcionRegalo(){
    console.assert(
        validarDescripcionRegalo("") === "El campo regalo no puede estar vacío",
        'Validar descripción regalo no validó que el campo regalo no esté vacío',
    )
    console.assert(
        validarDescripcionRegalo("111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111") === 
        "El campo de descripción del regalo no puede contener más de 100 caracteres",
        "Validar descripción regalo no validó que el campo regalo no contenga más de 100 caracteres",
    )
    console.assert(
        validarDescripcionRegalo("Bicicleta")=== "",
        "Validar descripción regalo falló con una respuesta correcta"
    )
    console.assert(
        validarDescripcionRegalo(".,,.,.")==="El campo descripción regalo solo puede tener números y letras",
        "Validar descripcion regalo no validó que el campo solo tenga número y letras"
    )
}

probarValidarDescripcionRegalo();