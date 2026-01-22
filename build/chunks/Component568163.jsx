/** Chunk was on 881 **/
/** chunk id: 568163, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk430452 = require("./430452.js"),
  Chunk985018 = require("./985018.jsx");

function o(t) {
  return (0, i.bG)([a.A], () => a.A.hasContext(t.id), [t.id]) ? (0, r.jsx)(l.Drp, {
    id: "ingame-voice",
    label: c.intl.string(c.t["pOul5/"]),
    action: () => (0, l.mMO)(async () => {
      let {
        default: e
      } = await n.e("96531").then(n.bind(n, 880510));
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