/** Chunk was on 8106 **/
/** chunk id: 970129, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  T: () => c,
  Z: () => d
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk496675 = require("./496675.js"),
  Chunk388032 = require("./388032.jsx");

function c(e, t, n) {
  let r = (0, l.e7)([a.Z], () => !a.Z.isRoleHigher(e, t, n), [e, t, n]);
  return i.useMemo(() => r && n.id === (null == t ? true : t.id), [r, n, t]) ? o.intl.string(o.t.PQylOT) : r ? o.intl.string(o.t.UGIjx8) : null
}

function d(e) {
  let {
    className: t,
    tooltipText: n,
    width: i = 16,
    height: l = 16
  } = e;
  return (0, r.jsx)(s.ua7, {
    text: n,
    children: e => {
      var n, a;
      return (0, r.jsx)("div", (n = function(e) {
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
      }({
        className: t
      }, e), a = a = {
        children: (0, r.jsx)(s.mBM, {
          size: "custom",
          color: "currentColor",
          width: i,
          height: l
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(a)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(a, e))
      }), n))
    }
  })
}