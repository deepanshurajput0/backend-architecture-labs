import { expect, test, it, describe } from 'vitest'
import { app } from '..'
import request from 'supertest'


describe('Tests the sum',()=>{
  it('sum of a and b should be 5',async()=>{
    const res = await request(app).post('/sum').send({
      a:3,
      b:2
    })
    expect(res.body.answer).toBe(5)
    expect(res.statusCode).toBe(200)

  })
})


