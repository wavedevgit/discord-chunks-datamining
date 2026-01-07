/** Chunk was on 93375 **/
/** chunk id: 866830, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  U5: () => i,
  qR: () => l
});
var Chunk273504 = require("./273504.js");

function l(e) {
  let t = i();
  return Array.from(e.defaultActionTypes).map(e => t[e])
}

function i() {
  return {
    [r.jj.BLOCK_MESSAGE]: {
      type: r.jj.BLOCK_MESSAGE,
      metadata: {
        customMessage: true
      }
    },
    [r.jj.FLAG_TO_CHANNEL]: {
      type: r.jj.FLAG_TO_CHANNEL,
      metadata: {
        channelId: true
      }
    },
    [r.jj.USER_COMMUNICATION_DISABLED]: {
      type: r.jj.USER_COMMUNICATION_DISABLED,
      metadata: {
        durationSeconds: 60
      }
    },
    [r.jj.QUARANTINE_USER]: {
      type: r.jj.QUARANTINE_USER,
      metadata: {}
    }
  }
}