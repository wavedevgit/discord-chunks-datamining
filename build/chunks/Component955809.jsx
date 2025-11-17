/** Chunk was on 98335 **/
/** chunk id: 955809, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk131951 = require("./131951.js"),
  Chunk388032 = require("./388032.jsx");

function o(t) {
  return (0, i.e7)([a.Z], () => a.Z.hasContext(t.id), [t.id]) ? (0, r.jsx)(l.sNh, {
    id: "ingame-voice",
    label: c.intl.string(c.t["pOul5/"]),
    action: () => (0, l.ZDy)(async () => {
      let {
        default: e
      } = await n.e("51749").then(n.bind(n, 800740));
      return n => {
        var i, l;
        return (0, r.jsx)(e, (i = function(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {},
              r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
              return Object.getOwnPropertyDescriptor(n, t).enumerable
            }))), r.forEach(function(e) {
              var r;
              r = n[e], e in t ? Object.defineProperty(t, e, {
                value: r,
                enumerable: true,
                configurable: true,
                writable: true
              }) : t[e] = r
            })
          }
          return t
        }({}, n), l = l = {
          mediaEngineContext: t.id,
          subtitle: t.name
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : (function(t, e) {
          var n = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            n.push.apply(n, r)
          }
          return n
        })(Object(l)).forEach(function(t) {
          Object.defineProperty(i, t, Object.getOwnPropertyDescriptor(l, t))
        }), i))
      }
    })
  }) : null
}