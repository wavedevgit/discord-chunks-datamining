/** Chunk was on 56710 **/
/** chunk id: 979696, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
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
let a = {
    toastsEnabledForChannel: {}
  },
  s = a;
class c extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    s = null != e ? e : a
  }
  getToastsEnabled(e) {
    var t;
    return null == (t = s.toastsEnabledForChannel[e]) || t
  }
  getState() {
    return s
  }
}
o(c, "displayName", "CallChatToastsStore"), o(c, "persistKey", "CallChatToasts");
let u = new c(Chunk570140.Z, {
  CALL_CHAT_TOASTS_SET_ENABLED: function(e) {
    let {
      channelId: t,
      toastsEnabled: n
    } = e;
    s.toastsEnabledForChannel[t] = n
  },
  LOGOUT: function() {
    s.toastsEnabledForChannel = {}
  }
})