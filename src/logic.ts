import partial from 'lodash/partial'
import get from 'lodash/get'
import { when } from 'koalambda'

export const whenIsDialogHook = partial(
  when,
  ctx => get(ctx, 'event.invocationSource') === 'DialogCodeHook'
)
export const whenIsFulfillmentHook = partial(
  when,
  ctx => get(ctx, 'event.invocationSource') === 'FulfillmentCodeHook'
)
