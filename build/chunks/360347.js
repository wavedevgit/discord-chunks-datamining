/** Chunk was on web.js **/
/** chunk id: 360347, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk91896 = require("./91896.js"),
  Chunk699516 = require("./699516.js"),
  Chunk453542 = require("./453542.js");

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
    num_friends: i.Z.getFriendCount(),
    num_outgoing_requests: i.Z.getOutgoingCount(),
    num_incoming_requests: i.Z.getPendingCount(),
    num_game_friends: r.Z.getGameFriendCount(),
    num_game_outgoing_requests: r.Z.getPendingOutgoingCount(),
    num_game_incoming_requests: r.Z.getPendingIncomingCount()
  }, (0, a.X)())
}