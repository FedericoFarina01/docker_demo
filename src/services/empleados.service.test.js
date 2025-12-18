import assert from 'assert';
import * as service from './empleados.service.js';

describe('empleados.service', () => {

  it('getAllEmpleados retorna array de empleados', async () => {
    const result = await service.getAllEmpleados();

    assert.ok(Array.isArray(result));
    assert.ok(result.length > 0);
    assert.ok(result[0].nombre);
    assert.ok(result[0].id);
  });

  it('getTeamLeaders retorna empleados con rol Team Leader', async () => {
    const result = await service.getTeamLeaders();

    assert.ok(Array.isArray(result));
    if (result.length > 0) {
      result.forEach(emp => {
        assert.strictEqual(emp.rol, 'Team Leader');
        assert.ok(emp.nombre);
      });
    }
  });

  it('insertTrainee inserta empleado correctamente', async () => {
    const nuevoTrainee = {
      nombre: 'TestInsert_' + Date.now(),
      edad: 21,
      id_departamento: 1
    };

    const result = await service.insertTrainee(nuevoTrainee);

    assert.ok(Array.isArray(result));
    assert.strictEqual(result[0].nombre, nuevoTrainee.nombre);
    assert.strictEqual(result[0].edad, nuevoTrainee.edad);
    assert.strictEqual(result[0].id_departamento, nuevoTrainee.id_departamento);
  });

  it('changeEmployeeDepartment actualiza departamento', async () => {
    // Insertar un empleado para testear
    const testEmp = await service.insertTrainee({
      nombre: 'TestUpdate_' + Date.now(),
      edad: 25,
      id_departamento: 1
    });

    // Cambiar departamento
    const result = await service.changeEmployeeDepartment({
      nombre: testEmp[0].nombre,
      nuevoDepartamento: 3
    });

    assert.ok(Array.isArray(result));
    assert.ok(result.length > 0);
  });

  it('countEmployeesByDepartment retorna conteo', async () => {
    const result = await service.countEmployeesByDepartment(1);

    assert.ok(Array.isArray(result));
    assert.ok(result.length > 0);
    assert.ok(result[0].cant_empleados !== undefined);
    assert.ok(Number(result[0].cant_empleados) >= 0);
  });

});

