import { describe, it, expect } from '@jest/globals'
import request = require('supertest')
import { app } from '..'
describe('sum of numbers',()=>{
    it('should return the sum of 2 numbers',async()=>{
      const res = await request(app).post('/sum').send({
        a:2,
        b:3,
      })
      expect(res.statusCode).toBe(200)
      expect(res.body.ans).toBe(5)
    })
    
})

