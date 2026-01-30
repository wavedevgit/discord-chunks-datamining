/** Chunk was on 89488 **/
/** chunk id: 269849, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  o: () => l
}), require("./896048.js"), require("./64700.js");
var Chunk621466 = require("./621466.js"),
  Chunk644447 = require("./644447.js"),
  Chunk369254 = require("./369254.jsx"),
  Chunk256905 = require("./256905.jsx");

function l(e, t, n) {
  let l = {},
    c = {};
  for (let [_, s] of e.entries()) {
    let d = (0, i.E)({
      proxyURL: s.proxyUrl,
      url: s.url
    });
    l[d] = i => (function(e, t, n) {
      var i, o;
      let l = arguments.length > 3 && true !== arguments[3] ? arguments[3] : {},
        c = arguments.length > 4 ? arguments[4] : true;
      e.preventDefault(), (0, r.vq)(e.currentTarget) && e.currentTarget.blur(), (0, a.R)((i = function(e) {
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
      }({}, l), o = o = {
        items: t,
        startingIndex: n,
        location: null != c ? c : "zoomedMediaModalHelper"
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(o)).forEach(function(e) {
        Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(o, e))
      }), i))
    })(i, e, _, t, n), c[d] = () => (0, o.Z5)(s, e.length > 1)
  }
  return {
    srcToOnClickOverride: l,
    srcToHandlePreloadImage: c
  }
}