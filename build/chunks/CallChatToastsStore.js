/** Chunk was on 42402 **/
/** chunk id: 249288, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");

function s(e, t, n) {
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
  o = a;
class c extends(r = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    o = null != e ? e : a
  }
  getToastsEnabled(e) {
    var t;
    return null == (t = o.toastsEnabledForChannel[e]) || t
  }
  getState() {
    return o
  }
}
s(c, "displayName", "CallChatToastsStore"), s(c, "persistKey", "CallChatToasts");
let u = new c(Chunk73153.h, {
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