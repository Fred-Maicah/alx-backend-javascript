// 6-payment_token.test.js
const getPaymentTokenFromAPI = require('./6-payment_token');
const { expect } = require('chai');

describe('getPaymentTokenFromAPI', function () {
  it('should return a resolved promise with the correct data when success is true', function (done) {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        // Verify the resolved value
        expect(response).to.deep.equal({ data: 'Successful response from the API' });
        done(); // Indicate the test is complete
      })
      .catch((err) => done(err)); // Handle unexpected errors
  });
});
