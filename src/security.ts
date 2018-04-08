import get from 'lodash/get'

export const validateBot = (botName: string, version?: string) => async (
  ctx,
  next
) => {
  if (
    get(ctx, 'event.bot.name') !== botName ||
    (version && get(ctx, 'event.bot.version') !== version)
  ) {
    throw {
      code: 403,
      message: 'Invalid bot name or version'
    }
  }
  await next()
}
