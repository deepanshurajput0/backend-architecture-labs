import { describe, expect, it } from "vitest";
import { app } from "../../index";
import request from "supertest";

describe("POST /sum", () => {
    it("should sum add 2 numbers", async () => {
        const res = await request(app).post('/sum').send({
            a: 1,
            b: 2
        })
        expect(res.status).toBe(200);
        expect(res.body).toEqual({ answer: 3, id: expect.any(Number) });
    });
})