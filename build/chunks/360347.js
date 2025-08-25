/** Chunk was on web.js **/
/** chunk id: 360347, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk91896 = require("./91896.js"),
  Chunk699516 = require("./699516.js"),
  Chunk453542 = require("./453542.js");

function a(e, t, n) {
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
      a(e, t, n[t])
    })
  }
  return e
}

function l() {
  return s({
    num_friends: Chunk699516.Z.getFriendCount(),
    num_outgoing_requests: Chunk699516.Z.getOutgoingCount(),
    num_incoming_requests: Chunk699516.Z.getPendingCount(),
    num_game_friends: Chunk91896.Z.getGameFriendCount(),
    num_game_outgoing_requests: Chunk91896.Z.getPendingOutgoingCount(),
    num_game_incoming_requests: Chunk91896.Z.getPendingIncomingCount()
  }, (0, Chunk453542.X)())
}