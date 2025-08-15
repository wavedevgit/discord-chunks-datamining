/** Chunk was on web.js **/
/** chunk id: 269982, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk979554 = require("./979554.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk436774 = require("./436774.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk178368 = require("./178368.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
    })
  }
  return e
}

function p(e) {
  let {
    product: t,
    onSecondaryClick: f
  } = e, {
    newestAnalyticsLocation: p
  } = (0, s.ZP)(), h = i.useCallback(() => {
    null != t && (0, o.ZDy)(async () => {
      let {
        default: e
      } = await n.e("43360").then(n.bind(n, 73415));
      return n => (0, r.jsx)(e, _({
        collectableType: null == t ? true : t.type,
        analyticsSource: p,
        analyticsLocation: {
          section: c.jXE.USER_PROFILE,
          object: c.qAy.BUTTON_CTA
        },
        onSecondaryClick: f
      }, n))
    })
  }, [t, p, f]), m = i.useMemo(() => {
    switch (null == t ? true : t.type) {
      case a.Z.AVATAR_DECORATION:
        return u.intl.format(u.t["aFR/EB"], {
          onClick: h
        });
      case a.Z.PROFILE_EFFECT:
        return u.intl.format(u.t.eWNOND, {
          onClick: h
        })
    }
  }, [null == t ? true : t.type, h]);
  return (0, r.jsxs)("div", {
    className: d.nitroUpsellContainer,
    children: [(0, r.jsx)(o.SrA, {
      className: d.nitroWheel,
      size: "md",
      color: l.JX.PREMIUM_TIER_2
    }), (0, r.jsx)(o.Text, {
      className: d.nitroText,
      variant: "text-md/medium",
      children: m
    })]
  })
}