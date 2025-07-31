"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const chai_1 = require("chai");
const supertest_1 = __importDefault(require("supertest"));
let response;
(0, cucumber_1.When)('I send a GET request to {string}', function (url) {
    return __awaiter(this, void 0, void 0, function* () {
        response = yield (0, supertest_1.default)('http://localhost:3000').get(url);
    });
});
(0, cucumber_1.Then)('the response status should be {int}', function (status) {
    (0, chai_1.expect)(response.status).to.equal(status);
});
(0, cucumber_1.Then)('the response body should contain {string}', function (text) {
    (0, chai_1.expect)(response.text).to.include(text);
});
