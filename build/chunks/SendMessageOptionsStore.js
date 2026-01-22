/** Chunk was on 1636 **/
/** chunk id: 965407, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk381941 = require("./381941.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let c = {};
class s extends(r = Chunk311907.Ay.Store) {
  getOptions(e) {
    return c[e]
  }
}
a(s, "displayName", "SendMessageOptionsStore");
let d = new s(Chunk73153.h, {
  MESSAGE_CREATE: function(e) {
    let {
      message: t,
      sendMessageOptions: n
    } = e;
    if (null != n) {
      var r, l, i;
      c[t.id] = (l = function(e) {
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
      }({}, n), i = i = {
        location: null != (r = n.location) ? r : o.Hx.OTHER
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(i)).forEach(function(e) {
        Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e))
      }), l)
    }
    null != t.nonce && t.nonce in c && delete c[t.nonce]
  }
})