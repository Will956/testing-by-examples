import Ajv from 'ajv';

const ajv = new Ajv();

export const validateSchema = ajv.compile({
  "type": "object",
  "properties": {
    "id": {
      "type": "integer"
    },
    "firstName": {
      "type": "string"
    },
    "lastName": {
      "type": "string"
    },
    "userName": {
      "type": "string"
    }
  },
  "required": [
    "firstName",
    "lastName",
    "userName"
  ],
  "additionalProperties": false
});
