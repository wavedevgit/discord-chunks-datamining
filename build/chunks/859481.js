/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  z: () => b
}), n(757143), n(301563);
var r = n(200651),
  i = n(192379),
  s = n(481060),
  a = n(906732),
  l = n(263145),
  o = n(366980),
  c = n(621319),
  A = n(770270),
  d = n(70086),
  u = n(949640),
  g = n(981631),
  f = n(30513),
  m = n(388032),
  p = n(917188);

function h(e) {
  let {
    errorDetails: t,
    originalVanityURLCode: n
  } = e;
  if (null != t) return (0, r.jsx)(s.Text, {
    variant: "text-md/normal",
    color: "text-danger",
    className: p.vanityInfo,
    children: (0, A.i)(null == t ? void 0 : t.code)
  });
  if (null != n && n.length > 0) {
    let e = (0, o.Z)(n);
    return (0, r.jsx)(s.Text, {
      variant: "text-sm/medium",
      color: "text-secondary",
      className: p.vanityInfo,
      children: m.NW.format(m.t["1qTOvr"], {
        urlText: e,
        urlValue: e
      })
    })
  }
  return null
}

function C(e) {
  let {
    guild: t,
    vanityURLCode: n,
    vanityURLUses: a,
    originalVanityURLCode: o,
    hasError: A
  } = e, d = (null == t ? void 0 : t.hasFeature(g.oNc.VANITY_URL)) === !0, u = i.useCallback(() => {
    (0, c.Gy)("")
  }, []), f = i.useCallback(e => {
    (0, c.Gy)(e.replace(/ /g, "-"))
  }, []);
  return null == n ? (0, r.jsx)(s.$jN, {}) : (0, r.jsxs)(s.Zbd, {
    editable: !0,
    className: p.editVanityUrlCard,
    children: [(0, r.jsxs)("div", {
      className: p.formTitleField,
      children: [(0, r.jsx)(s.X6q, {
        variant: "heading-sm/semibold",
        color: "text-normal",
        children: m.NW.string(m.t["6oJyq6"])
      }), n.length > 0 ? (0, r.jsx)(s.Text, {
        variant: "text-sm/medium",
        color: "text-secondary",
        children: m.NW.format(m.t.MVWOUV, {
          uses: a
        })
      }) : null]
    }), (0, r.jsx)(l.Z, {
      prefix: "".concat("https://discord.gg", "/"),
      value: n,
      onChange: f,
      maxLength: 25,
      error: A,
      disabled: !d
    }), null != o && o.length > 0 ? (0, r.jsx)(s.zxk, {
      className: p.removeVanityUrlButton,
      onClick: u,
      look: s.zxk.Looks.LINK,
      size: s.zxk.Sizes.MIN,
      color: s.zxk.Colors.RED,
      children: m.NW.string(m.t["3ggb6O"])
    }) : null]
  })
}

function b(e) {
  let {
    guild: t,
    vanityURLCode: n,
    vanityURLUses: s,
    originalVanityURLCode: l,
    errorDetails: o
  } = e, {
    analyticsLocations: c
  } = (0, a.ZP)(), m = i.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), (0, u.E6)({
      guild: t,
      analyticsLocations: c,
      analyticsSection: g.jXE.GUILD_SETTINGS_VANITY_URL,
      analyticsObject: g.qAy.BUTTON_CTA,
      perks: (0, f.WW)(),
      targetPremiumGuildTier: g.Eu4.TIER_3
    })
  }, [c, t]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, A.p)(t) ? (0, r.jsx)(C, {
      guild: t,
      vanityURLCode: n,
      vanityURLUses: s,
      originalVanityURLCode: l,
      hasError: null != o
    }) : (0, r.jsx)(d.P, {
      onClick: m,
      className: p.upsellButton
    }), (0, r.jsx)(h, {
      errorDetails: o,
      originalVanityURLCode: l
    })]
  })
}