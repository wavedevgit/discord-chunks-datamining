/** Chunk was on 79381 **/
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
    [Chunk273504.jj.BLOCK_MESSAGE]: {
      type: Chunk273504.jj.BLOCK_MESSAGE,
      metadata: {
        customMessage: true
      }
    },
    [Chunk273504.jj.FLAG_TO_CHANNEL]: {
      type: Chunk273504.jj.FLAG_TO_CHANNEL,
      metadata: {
        channelId: true
      }
    },
    [Chunk273504.jj.USER_COMMUNICATION_DISABLED]: {
      type: Chunk273504.jj.USER_COMMUNICATION_DISABLED,
      metadata: {
        durationSeconds: 60
      }
    },
    [Chunk273504.jj.QUARANTINE_USER]: {
      type: Chunk273504.jj.QUARANTINE_USER,
      metadata: {}
    }
  }
}