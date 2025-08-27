/** Chunk was on web.js **/
/** chunk id: 697492, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Gd: () => a,
  ME: () => o,
  Ym: () => s,
  _g: () => i,
  hu: () => l
});
var Chunk570140 = require("./570140.js");

function i(e, t, n) {
  r.Z.dispatch({
    type: "HIGH_FIVE_QUEUE",
    userId: t,
    channelId: n,
    emoji: e
  })
}

function a(e, t) {
  r.Z.dispatch({
    type: "HIGH_FIVE_REMOVE",
    channelId: t,
    userId: e
  })
}

function o(e) {
  r.Z.dispatch({
    type: "HIGH_FIVE_SET_ENABLED",
    enabled: e
  })
}

function s(e, t, n, i) {
  r.Z.dispatch({
    type: "HIGH_FIVE_COMPLETE",
    waitingUserId: e,
    completingUserId: t,
    channelId: n,
    completingEmoji: i
  })
}

function l(e, t, n) {
  r.Z.dispatch({
    type: "HIGH_FIVE_COMPLETE_CLEAR",
    firstUserId: e,
    secondUserId: t,
    channelId: n
  })
}