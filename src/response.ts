export const elicitSlot = (
  sessionAttributes,
  intentName,
  slots,
  slotToElicit,
  message
) => ({
  sessionAttributes,
  dialogAction: {
    type: 'ElicitSlot',
    intentName,
    slots,
    slotToElicit,
    message
  }
})

export const close = (sessionAttributes, fulfillmentState, message) => ({
  sessionAttributes,
  dialogAction: {
    type: 'Close',
    fulfillmentState,
    message
  }
})

function delegate(sessionAttributes, slots) {
  return {
    sessionAttributes,
    dialogAction: {
      type: 'Delegate',
      slots
    }
  }
}
