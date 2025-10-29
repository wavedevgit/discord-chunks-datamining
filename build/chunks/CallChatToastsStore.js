/** Chunk was on 85496 **/
/** chunk id: 979696, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var l, Chunk442837 = require("./442837.js"),
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
  o = s;
class c extends(l = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    o = null != e ? e : s
  }
  getToastsEnabled(e) {
    var t;
    return null == (t = o.toastsEnabledForChannel[e]) || t
  }
  getState() {
    return o
  }
}
a(c, "displayName", "CallChatToastsStore"), a(c, "persistKey", "CallChatToasts");
let u = new c(Chunk570140.Z, {
  CALL_CHAT_TOASTS_SET_ENABLED: function(e) {
    let {
      channelId: t,
      toastsEnabled: n
    } = e;
    o.toastsEnabledForChannel[t] = n
  },
  LOGOUT: function() {
    o.toastsEnabledForChannel = {}
  }
})