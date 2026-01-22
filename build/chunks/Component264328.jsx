/** Chunk was on 21738 **/
/** chunk id: 264328, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk64983 = require("./64983.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk49999 = require("./49999.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk360567 = require("./360567.js");

function u(e) {
  let {
    guild: t,
    markAsDismissed: u
  } = e;
  return (0, r.jsx)(l.A, {
    guild: t,
    onDismissed: () => u(s.i.UNKNOWN),
    onClick: function() {
      (0, i.mMO)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("98363"), n.e("4543")]).then(n.bind(n, 780086));
        return t => (0, r.jsx)(e, function(e) {
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
        }({}, t))
      })
    },
    message: o.intl.string(o.t["1+hiP6"]),
    cta: o.intl.string(o.t.hvVgAZ),
    trackingSource: a.kZU.HUB_LINK_NOTICE,
    type: a.n5X.HUB_LINK,
    image: c
  })
}