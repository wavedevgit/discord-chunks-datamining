/** Chunk was on web.js **/
/** chunk id: 866830, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U5: () => o,
  qR: () => i
});
var Chunk273504 = require("./273504.js");

function i(e) {
  let t = o();
  return Array.from(e.defaultActionTypes).map(e => t[e])
}

function o() {
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