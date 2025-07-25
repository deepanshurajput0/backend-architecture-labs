import { describe, test, expect } from '@jest/globals'
import { sum } from '../index'

describe('sum of numbers',()=>{
    test('adds 1+2 is equals to 3',()=>{
        expect(sum(2,3)).toBe(5)
    })
})

