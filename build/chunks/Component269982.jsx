/** Chunk was on 79589 **/
/** chunk id: 269982, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk979554 = require("./979554.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk436774 = require("./436774.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk178368 = require("./178368.js");

function m(e) {
  let {
    product: t,
    onSecondaryClick: m
  } = e, {
    newestAnalyticsLocation: h
  } = (0, a.ZP)(), x = i.useCallback(() => {
    null != t && (0, s.ZDy)(async () => {
      let {
        default: e
      } = await r.e("43360").then(r.bind(r, 73415));
      return r => (0, n.jsx)(e, function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable
          }))), n.forEach(function(t) {
            var n;
            n = r[t], t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = n
          })
        }
        return e
      }({
        collectableType: null == t ? true : t.type,
        analyticsSource: h,
        analyticsLocation: {
          section: c.jXE.USER_PROFILE,
          object: c.qAy.BUTTON_CTA
        },
        onSecondaryClick: m
      }, r))
    })
  }, [t, h, m]), p = i.useMemo(() => {
    switch (null == t ? true : t.type) {
      case l.Z.AVATAR_DECORATION:
        return u.intl.format(u.t["aFR/EB"], {
          onClick: x
        });
      case l.Z.PROFILE_EFFECT:
        return u.intl.format(u.t.eWNOND, {
          onClick: x
        })
    }
  }, [null == t ? true : t.type, x]);
  return (0, n.jsxs)("div", {
    className: d.nitroUpsellContainer,
    children: [(0, n.jsx)(s.SrA, {
      className: d.nitroWheel,
      size: "md",
      color: o.JX.PREMIUM_TIER_2
    }), (0, n.jsx)(s.Text, {
      className: d.nitroText,
      variant: "text-md/medium",
      children: p
    })]
  })
}