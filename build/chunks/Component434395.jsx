/** Chunk was on 5606 **/
/** chunk id: 434395, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk531260 = require("./531260.js"),
  Chunk927578 = require("./927578.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk416179 = require("./416179.js");

function p(e) {
  let {
    subscription: t,
    renewalMutations: i,
    className: p,
    analyticsLocation: _
  } = e, m = (0, a.A)(), g = t.currentPeriodEnd;
  return m.fractionalState === c.xc.FP_SUB_PAUSED && (g = m.endsAt.toDate()), (0, r.jsxs)("div", {
    className: l()(u.zr, p),
    children: [(0, r.jsx)(s.EpV, {
      size: "custom",
      width: 20,
      height: 20,
      color: "currentColor",
      className: u.G
    }), (0, r.jsx)("div", {
      className: u.Qq,
      children: d.intl.format(d.t.ar1cPl, {
        planName: t.hasExternalPlanChange ? (0, o.OU)(i) : o.Ay.getDisplayName(i.planId),
        date: g
      })
    }), t.isPurchasedExternally ? null : (0, r.jsx)(s.MzZ, {
      onClick: e => {
        e.preventDefault(), (0, s.mMO)(async () => {
          let {
            default: e
          } = await n.e("65975").then(n.bind(n, 702698));
          return n => {
            var l, s;
            return (0, r.jsx)(e, (l = function(e) {
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
            }({}, n), s = s = {
              subscription: t,
              renewalMutations: i,
              analyticsLocation: _
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
              }
              return n
            })(Object(s)).forEach(function(e) {
              Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(s, e))
            }), l))
          }
        })
      },
      className: u.Lu,
      children: d.intl.string(d.t["ETE/oC"])
    })]
  })
}