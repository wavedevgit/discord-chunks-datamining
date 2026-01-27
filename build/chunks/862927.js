/** Chunk was on web.js **/
/** chunk id: 862927, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
});
var Chunk800828 = require("./800828.js"),
  Chunk994500 = require("./994500.js"),
  Chunk660387 = require("./660387.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function s(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      o(e, t, n[t])
    })
  }
  return e
}

function l() {
  return s({
    num_friends: i.A.getFriendCount(),
    num_outgoing_requests: i.A.getOutgoingCount(),
    num_incoming_requests: i.A.getPendingCount(),
    num_game_friends: r.A.getGameFriendCount(),
    num_game_outgoing_requests: r.A.getPendingOutgoingCount(),
    num_game_incoming_requests: r.A.getPendingIncomingCount()
  }, (0, a.F)())
}