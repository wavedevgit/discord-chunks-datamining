/** Chunk was on 30243 **/
/** chunk id: 207982, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  G: () => a
}), require("./388685.js"), require("./647438.js");
var Chunk374470 = require("./374470.js"),
  Chunk730606 = require("./730606.jsx"),
  Chunk312097 = require("./312097.jsx"),
  Chunk52824 = require("./52824.js");

function a(e, t, r) {
  let a = {},
    c = {};
  for (let [s, u] of e.entries()) {
    let d = (0, o.q)({
      proxyURL: u.proxyUrl,
      url: u.url
    });
    a[d] = l => (function(e, t, r) {
      var l, o;
      let a = arguments.length > 3 && true !== arguments[3] ? arguments[3] : {},
        c = arguments.length > 4 ? arguments[4] : true;
      e.preventDefault(), (0, n.k)(e.currentTarget) && e.currentTarget.blur(), (0, i.K)((l = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable
          }))), n.forEach(function(t) {
            var n;
            n = r[t], t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = n
          })
        }
        return e
      }({}, a), o = o = {
        items: t,
        startingIndex: r,
        location: null != c ? c : "zoomedMediaModalHelper"
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r.push.apply(r, n)
        }
        return r
      })(Object(o)).forEach(function(e) {
        Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(o, e))
      }), l))
    })(l, e, s, t, r), c[d] = () => (0, l.WG)(u, e.length > 1)
  }
  return {
    srcToOnClickOverride: a,
    srcToHandlePreloadImage: c
  }
}