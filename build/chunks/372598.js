/** Chunk was on 24202 **/
/** chunk id: 372598, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  XO: () => i,
  dL: () => l
});
var Chunk411335 = require("./411335.js");

function l(e) {
  let t = i();
  return Array.from(e.defaultActionTypes).map(e => t[e])
}

function i() {
  return {
    [r.AH.BLOCK_MESSAGE]: {
      type: r.AH.BLOCK_MESSAGE,
      metadata: {
        customMessage: true
      }
    },
    [r.AH.FLAG_TO_CHANNEL]: {
      type: r.AH.FLAG_TO_CHANNEL,
      metadata: {
        channelId: true
      }
    },
    [r.AH.USER_COMMUNICATION_DISABLED]: {
      type: r.AH.USER_COMMUNICATION_DISABLED,
      metadata: {
        durationSeconds: 60
      }
    },
    [r.AH.QUARANTINE_USER]: {
      type: r.AH.QUARANTINE_USER,
      metadata: {}
    }
  }
}