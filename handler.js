'use strict';

const debug = async (event) => {

  const id = event.queryStringParameters.id;

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        event
      },
      null,
      2
    ),
  };
}

module.exports = {
  debug
};