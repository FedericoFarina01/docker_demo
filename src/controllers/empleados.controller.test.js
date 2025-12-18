import assert from 'assert';
import * as controller from './empleados.controller.js';

describe('empleados.controller', () => {

  it('getRoot devuelve texto', async () => {
    const req = {};
    let respuesta;
    
    const res = {
      send: (data) => {
        respuesta = data;
      }
    };

    await controller.getRoot(req, res);
    
    assert.strictEqual(respuesta, 'App básica en NodeJs');
  });

  it('getEmpleados devuelve empleados', async () => {
    const req = {};
    let respuesta;
    
    const res = {
      json: (data) => {
        respuesta = data;
      },
      status: () => ({ json: () => {} })
    };

    await controller.getEmpleados(req, res);
    
    assert.ok(Array.isArray(respuesta));
    assert.ok(respuesta.length > 0);
  });

  it('getEmpleados responde 500 si hay error', async () => {
    const req = {};
    let statusCode;

    const res = {
      status: (code) => {
        statusCode = code;
        return { json: () => {} };
      }
    };

    await controller.getEmpleados(null, res);

    assert.strictEqual(statusCode, 500);
  });

  it('getTeamLeaders solo devuelve Team Leaders', async () => {
    const req = {};
    let respuesta;
    
    const res = {
      json: (data) => {
        respuesta = data;
      },
      status: () => ({ json: () => {} })
    };

    await controller.getTeamLeaders(req, res);
    
    assert.ok(Array.isArray(respuesta));
    respuesta.forEach(emp => {
      assert.strictEqual(emp.rol, 'Team Leader');
    });
  });

  it('getTeamLeaders responde 500 si hay error', async () => {
    const req = {};
    let statusCode;

    const res = {
      status: (code) => {
        statusCode = code;
        return { json: () => {} };
      }
    };

    await controller.getTeamLeaders(null, res);

    assert.strictEqual(statusCode, 500);
  });

  it('createTrainee responde 500 si hay error', async () => {
    const req = { body: null };
    let statusCode;

    const res = {
      status: (code) => {
        statusCode = code;
        return { json: () => {} };
      }
    };

    await controller.createTrainee(null, res);

    assert.strictEqual(statusCode, 500);
  });

  it('changeRole responde 500 si hay error', async () => {
    const req = { body: null };
    let statusCode;

    const res = {
      status: (code) => {
        statusCode = code;
        return { json: () => {} };
      }
    };

    await controller.changeRole(null, res);

    assert.strictEqual(statusCode, 500);
  });

  it('countEmpleadosDept1 devuelve numero', async () => {
    const req = {};
    let respuesta;
    
    const res = {
      json: (data) => {
        respuesta = data;
      },
      status: () => ({ json: () => {} })
    };

    await controller.countEmpleadosDept1(req, res);
    
    assert.ok(Array.isArray(respuesta));
    assert.ok(Number(respuesta[0].cant_empleados) > 0);
  });

  it('countEmpleadosDept1 responde 500 si hay error', async () => {
    const req = {};
    let statusCode;

    const res = {
      status: (code) => {
        statusCode = code;
        return { json: () => {} };
      }
    };

    await controller.countEmpleadosDept1(null, res);

    assert.strictEqual(statusCode, 500);
  });

  it('countEmpleadosDept2 responde 500 si hay error', async () => {
    const req = {};
    let statusCode;

    const res = {
      status: (code) => {
        statusCode = code;
        return { json: () => {} };
      }
    };

    await controller.countEmpleadosDept2(null, res);

    assert.strictEqual(statusCode, 500);
  });

});
