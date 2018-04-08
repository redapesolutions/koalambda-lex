import 'jest'
import 'chai'
import noop from 'lodash/noop'
import { whenIsDialogHook, whenIsFulfillmentHook } from '../src/koalambda-lex'

describe('When wrappers specific to Lex', () => {
  describe('whenIsDialogHook', () => {
    it('should trigger middleware when dialog hook', async () => {
      const spy = jest.fn()
      const fn = whenIsDialogHook(spy)
      await fn(
        {
          event: {
            invocationSource: 'DialogCodeHook'
          }
        },
        noop
      )
      expect(spy).toHaveBeenCalled()
    })
    it('should trigger middleware when other source', async () => {
      const spy = jest.fn()
      const fn = whenIsDialogHook(spy)
      await fn(
        {
          event: {
            invocationSource: 'Lalala'
          }
        },
        noop
      )
      expect(spy).not.toHaveBeenCalled()
    })
  })
  describe('whenIsFulfillmentHook', () => {
    it('should trigger middleware when Fulfillment hook', async () => {
      const spy = jest.fn()
      const fn = whenIsFulfillmentHook(spy)
      await fn(
        {
          event: {
            invocationSource: 'FulfillmentCodeHook'
          }
        },
        noop
      )
      expect(spy).toHaveBeenCalled()
    })
    it('should trigger middleware when other source', async () => {
      const spy = jest.fn()
      const fn = whenIsFulfillmentHook(spy)
      await fn(
        {
          event: {
            invocationSource: 'Lalala'
          }
        },
        noop
      )
      expect(spy).not.toHaveBeenCalled()
    })
  })
})
