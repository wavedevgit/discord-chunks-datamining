/** Chunk was on 12970 **/
/** chunk id: 521819, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk260509 = require("./260509.js"),
  Chunk71393 = require("./71393.js"),
  Chunk287809 = require("./287809.js"),
  Chunk985018 = require("./985018.jsx");

function s(e, t) {
  let s = (0, l.bG)([u.default], () => u.default.getCurrentUser()),
    d = (0, l.bG)([o.A], () => o.A.getGuild(t));
  return null == d || null == s || e.id === d.ownerId || e.bot || !(0, a.ok)(d, s) ? null : (0, r.jsx)(i.Drp, {
    id: "transfer-ownership",
    color: "danger",
    label: c.intl.string(c.t.Z5s7PM),
    action: () => (0, i.mMO)(async () => {
      let {
        default: t
      } = await n.e("98215").then(n.bind(n, 482906));
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