/** Chunk was on 29679 **/
/** chunk id: 169903, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk647438 = require("./647438.js"),
  Chunk584825 = require("./584825.js"),
  Chunk14263 = require("./14263.js");

function a(e, t) {
  let n = (0, i.qi)(e),
    a = (0, l.Z)(e);
  return r.useMemo(() => n.map(e => {
    var n, r, i;
    let l = null == e ? true : e.role_id;
    return r = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          var r;
          r = n[t], t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = r
        })
      }
      return e
    }({}, null != (n = null == t ? true : t.ppgs[e.id]) ? n : {}), i = i = {
      key: e.id,
      subscriptionListing: e,
      roleMemberCount: null == l || null == a ? true : a[l]
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(i)).forEach(function(e) {
      Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e))
    }), r
  }), [n, null == t ? true : t.ppgs, a])
}