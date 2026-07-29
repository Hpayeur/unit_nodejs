const chai = require("chai");
const expect = chai.expect;
const chaiAsPromised = require("chai-as-promised").default;
chai.use(chaiAsPromised);
const sinon = require("sinon");
const sinonChai = require("sinon-chai").default;
chai.use(sinonChai);
const rewire = require("rewire");

// var sandbox = sinon.sandbox.create() has changed into sinon.createSandbox().
var sandbox = sinon.createSandbox();
var mailer = rewire("./mailer");
