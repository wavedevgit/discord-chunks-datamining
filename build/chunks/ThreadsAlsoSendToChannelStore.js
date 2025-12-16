/** Chunk was on web.js **/
/** chunk id: 315355, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let s = new Map;

function l(e) {
  let {
    channelId: t,
    enabled: n
  } = e;
  s.set(t, n)
}

function c(e) {
  let {
    channelId: t
  } = e;
  s.delete(t)
}
class u extends(r = Chunk442837.ZP.Store) {
  getAlsoSendToChannel(e) {
    return !!s.has(e) && s.get(e)
  }
}
o(u, "displayName", "ThreadsAlsoSendToChannelStore");
let d = new u(Chunk570140.Z, {
  SET_THREADS_ALSO_SEND_TO_CHANNEL: l,
  CREATE_PENDING_SCHEDULED_MESSAGE: c
})