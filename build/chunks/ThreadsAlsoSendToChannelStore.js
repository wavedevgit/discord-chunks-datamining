/** Chunk was on web.js **/
/** chunk id: 67259, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
}), require("./896048.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");

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
class u extends(r = Chunk311907.Ay.Store) {
  getAlsoSendToChannel(e) {
    return !!s.has(e) && s.get(e)
  }
}
o(u, "displayName", "ThreadsAlsoSendToChannelStore");
let d = new u(Chunk73153.h, {
  SET_THREADS_ALSO_SEND_TO_CHANNEL: l,
  CREATE_PENDING_SCHEDULED_MESSAGE: c
})