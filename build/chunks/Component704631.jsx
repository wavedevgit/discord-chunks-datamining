/** Chunk was on 1272 **/
/** chunk id: 704631, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk82950 = require("./82950.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk524094 = require("./524094.js");

function u(e) {
  let {
    guild: t,
    markAsDismissed: u
  } = e;
  return (0, r.jsx)(l.Z, {
    guild: t,
    onDismissed: () => u(o.L.UNKNOWN),
    onClick: function() {
      (0, i.ZDy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("7082"), n.e("32454")]).then(n.bind(n, 650233));
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
    message: s.intl.string(s.t["1+hiP6"]),
    cta: s.intl.string(s.t.hvVgAZ),
    trackingSource: a.PsQ.HUB_LINK_NOTICE,
    type: a.vID.HUB_LINK,
    image: c
  })
}