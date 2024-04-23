//During the test the env variable is set to test

//Require the dev-dependencies
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../../bin/saymee-be-v2");
let should = chai.should();

chai.use(chaiHttp);
const API = `http://localhost:${process.env.PORT}`;
//Our parent block
describe("app_route", () => {
  beforeEach((done) => {
    //Before each test we empty the database in your case
    setTimeout(() => {
      done();
    }, 2000);
  });
  /*
   * Test the /GET remote-configs
   */
  describe("/GET remote-configs", () => {
    it("it should GET remote configs from server", (done) => {
      chai
        .request(API)
        .get("/api/v1/app/remote-configs")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("status").eql(0);
          //   console.log(res.body);
          done();
        });
    });
  });
  /*
   * Test the /GET faqs
   */
  describe("/GET faqs", () => {
    it("it should GET FAQs from server", (done) => {
      chai
        .request(API)
        .get("/api/v1/app/faqs")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("status").eql(0);
          //   console.log(res.body);
          done();
        });
    });
  });
});
