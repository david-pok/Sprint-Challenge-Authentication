const request = require("supertest");

const server = require("../api/server.js");

describe("joke-router.js", function() {
  describe("GET /api/jokes", function() {
    it("should return 200 OK", async function() {
      const res = await request(server).get("/api/jokes");

      expect(res.status).toBe(200);
    });

    it("should return JSON", async function() {
        const res = await request(server).get("/api/users");
  
        expect(res.type).toMatch(/html/i);
      });
  });
});
