'use strict';

const {kompose, callbackBased} = require('koalambda')

module.exports.hello = kompose(
  callbackBased,
  async (ctx, next) => {
    console.log(ctx.event)
    ctx.state.response = 'abc'
    await next()
  }
)
