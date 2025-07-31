import { Then, When } from '@cucumber/cucumber';
import { expect } from 'chai';
import request from 'supertest';

let response: request.Response;

When('I send a GET request to {string}', async function (url: string) {
  response = await request('http://localhost:3000').get(url);
});

Then('the response status should be {int}', function (status: number) {
  expect(response.status).to.equal(status);
});

Then('the response body should contain {string}', function (text: string) {
  expect(response.text).to.include(text);
});
