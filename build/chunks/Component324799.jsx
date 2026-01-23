/** Chunk was on 97492 **/
/** chunk id: 324799, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  X: () => o
});
var Chunk627968 = require("./627968.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk543465 = require("./543465.js"),
  Chunk985018 = require("./985018.jsx");
let o = e => {
  let {
    channel: t,
    user: o
  } = e, c = (0, l.bG)([s.Ay], () => s.Ay.isChannelMuted(null, t.id));
  return o.bot ? (0, r.jsx)(i.Button, {
    variant: c ? "secondary" : "critical-primary",
    size: "sm",
    text: c ? a.intl.string(a.t.YqAjXy) : a.intl.string(a.t.w4m945),
    onClick: function() {
      (0, i.mMO)(async () => {
        let {
          default: e
        } = await n.e("99312").then(n.bind(n, 259763));
        return n => (0, r.jsx)(e, function(e) {
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
          channelId: t.id
        }, n))
      })
    }
  }) : null
}