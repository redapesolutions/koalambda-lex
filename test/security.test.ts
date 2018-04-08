import 'jest'
import 'chai'
import noop from 'lodash/noop'
import { kompose, callbackBased } from 'koalambda'
import { validateBot } from '../src/koalambda-lex'

describe('Bot validation', () => {
  describe('validateBot', () => {
    it('should raise if wrong name', async () => {
      const cb = jest.fn()
      await kompose(callbackBased, validateBot('randomname'))(
        {
          sessionAttributes: {},
          requestAttributes: null,
          bot: { name: 'TestFirst', alias: '$LATEST', version: '$LATEST' },
          outputDialogMode: 'Text',
          currentIntent: {
            name: 'Register',
            slots: { Day: null, Location: 'Karachi' },
            slotDetails: { Day: [null], Location: [null] },
            confirmationStatus: 'None'
          },
          inputTranscript: 'Karachi'
        },
        {},
        cb
      )
      const [err] = cb.mock.calls[0]
      expect(err).not.toBeNull()
    })
    it('should raise if wrong version', async () => {
      const cb = jest.fn()
      await kompose(callbackBased, validateBot('TestFirst', '1.0'))(
        {
          sessionAttributes: {},
          requestAttributes: null,
          bot: { name: 'TestFirst', alias: '$LATEST', version: '$LATEST' },
          outputDialogMode: 'Text',
          currentIntent: {
            name: 'Register',
            slots: { Day: null, Location: 'Karachi' },
            slotDetails: { Day: [null], Location: [null] },
            confirmationStatus: 'None'
          },
          inputTranscript: 'Karachi'
        },
        {},
        cb
      )
      const [err] = cb.mock.calls[0]
      expect(err).not.toBeNull()
    })
    it('should not raise if valid name and no version', async () => {
      const cb = jest.fn()
      await kompose(callbackBased, validateBot('TestFirst'))(
        {
          sessionAttributes: {},
          requestAttributes: null,
          bot: { name: 'TestFirst', alias: '$LATEST', version: '$LATEST' },
          outputDialogMode: 'Text',
          currentIntent: {
            name: 'Register',
            slots: { Day: null, Location: 'Karachi' },
            slotDetails: { Day: [null], Location: [null] },
            confirmationStatus: 'None'
          },
          inputTranscript: 'Karachi'
        },
        {},
        cb
      )
      const [err] = cb.mock.calls[0]
      expect(err).toBeNull()
    })
    it('should not raise if valid name and correct version', async () => {
      const cb = jest.fn()
      await kompose(callbackBased, validateBot('TestFirst'))(
        {
          sessionAttributes: {},
          requestAttributes: null,
          bot: { name: 'TestFirst', alias: '$LATEST', version: '$LATEST' },
          outputDialogMode: 'Text',
          currentIntent: {
            name: 'Register',
            slots: { Day: null, Location: 'Karachi' },
            slotDetails: { Day: [null], Location: [null] },
            confirmationStatus: 'None'
          },
          inputTranscript: 'Karachi'
        },
        {},
        cb
      )
      const [err] = cb.mock.calls[0]
      expect(err).toBeNull()
    })
  })
})
