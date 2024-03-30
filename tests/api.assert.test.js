// test.js
const assert = require("assert");
const request = require("supertest");
const app = require("../index");

describe("API Tests", function () {
  it("Should return status 200 and correct data", function (done) {
    request(app)
      .get("/api/users")
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);

        // Memeriksa apakah respons berisi data pengguna yang benar
        assert.strictEqual(res.body.length, 2);
        assert.strictEqual(res.body[0].id, 1);
        assert.strictEqual(res.body[0].name, "John Doe");
        assert.strictEqual(res.body[1].id, 2);
        assert.strictEqual(res.body[1].name, "Jane Smith");

        done();
      });
  });

  it("Should return status 404 for non-existent endpoint", function (done) {
    request(app).get("/api/nonexistent").expect(404, done);
  });
});
