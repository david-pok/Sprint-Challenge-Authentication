const request = require("supertest");
const server = require("../api/server");

describe("users router", function() {
    it("should run the tests", function() {
      expect(true).toBe(true);
    });
    it("allows user to login with correct credentials", async () => {
      const res = await request(server)
        .post("/api/auth/login")
        .send({
          username: "david1",
          password: "david"
        });
      expect(res.status).toBe(201);
    });
  
    it("denies user with incorrect credentials", async () => {
      const res = await request(server)
        .post("/api/auth/login")
        .send({
          username: "notdavid",
          password: "david"
        });
      expect(res.status).toBe(401);
    });
    it("creates a new user", async () => {
      const res = await request(server)
        .post("/api/auth/register")
        .send({
          username: "david5",
          password: "david"
        });
      expect(res.status).toBe(201);
  
  });
  it("sends an error if credential parameter are incorrect", async () => {
      const res = await request(server)
        .post("/api/auth/register")
        .send({
          stupidname: "david",
          password: "notdavid"
        });
      expect(res.status).toBe(500);
  });
  
  })