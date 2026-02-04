/** Chunk was on 17869 **/
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
  } = e, c = (0, r.bG)([a.Ay], () => a.Ay.isChannelMuted(null, t.id));
  return o.bot ? (0, l.jsx)(i.Button, {
    variant: c ? "secondary" : "critical-primary",
    size: "sm",
    text: c ? s.intl.string(s.t.YqAjXy) : s.intl.string(s.t.w4m945),
    onClick: function() {
      (0, i.mMO)(async () => {
        let {
          default: e
        } = await n.e("99312").then(n.bind(n, 259763));
        return n => (0, l.jsx)(e, function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              l = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), l.forEach(function(t) {
              var l;
              l = n[t], t in e ? Object.defineProperty(e, t, {
                value: l,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = l
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