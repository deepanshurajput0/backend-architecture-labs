import { expect, test, it, describe, vi } from 'vitest'
import { app } from '..'
import request from 'supertest'
import { prismaClient } from '../__mocks__/db'
import { a } from 'vitest/dist/chunks/suite.d.FvehnV49'

vi.mock('../db')

describe('Tests the sum',()=>{
  it('sum of a and b should be 5',async()=>{
    prismaClient.sum.create.mockResolvedValue({
      id:1,
      result:5,
      a:3,
      b:2
    })
    vi.spyOn(prismaClient.sum,"create")
    const res = await request(app).post('/sum').send({
      a:3,
      b:2
    })
    expect(prismaClient.sum.create).toHaveBeenCalledWith({
      data:{
        a:3,
        b:2,
        result:5,
      }
    })
    expect(res.body.answer).toBe(5)
    expect(res.body.id).toBe(1)
    expect(res.statusCode).toBe(200)

  })
})


