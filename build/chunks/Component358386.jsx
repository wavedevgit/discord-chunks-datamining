/** Chunk was on 16120 **/
/** chunk id: 358386, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk601964 = require("./601964.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk388032 = require("./388032.jsx");

function s(e, t) {
  let s = (0, l.e7)([u.default], () => u.default.getCurrentUser()),
    d = (0, l.e7)([o.Z], () => o.Z.getGuild(t));
  return null == d || null == s || e.id === d.ownerId || e.bot || !(0, a.yn)(d, s) ? null : (0, r.jsx)(i.sNh, {
    id: "transfer-ownership",
    color: "danger",
    label: c.intl.string(c.t.Z5s7PD),
    action: () => (0, i.ZDy)(async () => {
      let {
        default: t
      } = await n.e("8653").then(n.bind(n, 928090));
      return n => {
        var l, i;
        return (0, r.jsx)(t, (l = function(e) {
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
        }({}, n), i = i = {
          guild: d,
          fromUser: s,
          toUser: e
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(i)).forEach(function(e) {
          Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e))
        }), l))
      }
    })
  })
}