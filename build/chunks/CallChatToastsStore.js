/** Chunk was on web.js **/
/** chunk id: 979696, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let s = {
    toastsEnabledForChannel: {}
  },
  l = s;

function c(e) {
  let {
    channelId: t,
    toastsEnabled: n
  } = e;
  l.toastsEnabledForChannel[t] = n
}

function u() {
  l.toastsEnabledForChannel = {}
}
class d extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    l = null != e ? e : s
  }
  getToastsEnabled(e) {
    var t;
    return null == (t = l.toastsEnabledForChannel[e]) || t
  }
  getState() {
    return l
  }
}
a(d, "displayName", "CallChatToastsStore"), a(d, "persistKey", "CallChatToasts");
let f = new d(Chunk570140.Z, {
  CALL_CHAT_TOASTS_SET_ENABLED: c,
  LOGOUT: u
})