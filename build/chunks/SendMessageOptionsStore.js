/** Chunk was on 37220 **/
/** chunk id: 111618, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk959517 = require("./959517.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let s = {};
class c extends(r = Chunk442837.ZP.Store) {
  getOptions(e) {
    return s[e]
  }
}
a(c, "displayName", "SendMessageOptionsStore");
let u = new c(Chunk570140.Z, {
  MESSAGE_CREATE: function(e) {
    let {
      message: t,
      sendMessageOptions: n
    } = e;
    if (null != n) {
      var r, i, l;
      s[t.id] = (i = function(e) {
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
      }({}, n), l = l = {
        location: null != (r = n.location) ? r : o.dy.OTHER
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(l)).forEach(function(e) {
        Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e))
      }), i)
    }
    null != t.nonce && t.nonce in s && delete s[t.nonce]
  }
})