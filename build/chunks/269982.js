/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
"use strict";
n.d(t, {
  Z: () => p
});
var r = n(200651),
  i = n(192379),
  o = n(979554),
  a = n(481060),
  s = n(436774),
  l = n(981631),
  c = n(388032),
  u = n(90125);

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}

function p(e) {
  let {
    product: t,
    onSecondaryClick: d
  } = e, p = i.useCallback(() => {
    null != t && (0, a.ZDy)(async () => {
      let {
        default: e
      } = await n.e("43360").then(n.bind(n, 73415));
      return n => (0, r.jsx)(e, f({
        collectableType: null == t ? void 0 : t.type,
        analyticsSource: l.Sbl.PROFILE_PANEL,
        analyticsLocation: {
          section: l.jXE.USER_PROFILE,
          object: l.qAy.BUTTON_CTA
        },
        onSecondaryClick: d
      }, n))
    })
  }, [t, d]), _ = i.useMemo(() => {
    switch (null == t ? void 0 : t.type) {
      case o.Z.AVATAR_DECORATION:
        return c.NW.format(c.t["aFR/EB"], {
          onClick: p
        });
      case o.Z.PROFILE_EFFECT:
        return c.NW.format(c.t.eWNOND, {
          onClick: p
        })
    }
  }, [null == t ? void 0 : t.type, p]);
  return (0, r.jsxs)("div", {
    className: u.nitroUpsellContainer,
    children: [(0, r.jsx)(a.SrA, {
      className: u.nitroWheel,
      size: "md",
      color: s.JX.PREMIUM_TIER_2
    }), (0, r.jsx)(a.Text, {
      className: u.nitroText,
      variant: "text-md/medium",
      children: _
    })]
  })
}