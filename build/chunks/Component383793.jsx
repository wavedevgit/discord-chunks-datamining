/** Chunk was on 9536 **/
/** chunk id: 383793, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  z: () => N
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk494497 = require("./494497.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk366980 = require("./366980.js"),
  Chunk158638 = require("./158638.js"),
  Chunk441536 = require("./441536.js"),
  Chunk434404 = require("./434404.js"),
  Chunk736617 = require("./736617.js"),
  Chunk196961 = require("./196961.js"),
  Chunk465682 = require("./465682.jsx"),
  Chunk821458 = require("./821458.jsx"),
  Chunk790359 = require("./790359.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk30513 = require("./30513.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk269181 = require("./269181.js");

function C(e) {
  let {
    originalVanityURLCode: t
  } = e;
  if (null != t && t.length > 0) {
    let e = (0, c.Z)(t);
    return (0, r.jsx)(a.Text, {
      variant: "text-sm/medium",
      color: "text-subtle",
      className: O.vanityInfo,
      children: v.intl.format(v.t["1qTOvn"], {
        urlText: e,
        urlValue: e
      })
    })
  }
  return null
}

function y(e) {
  let {
    guild: t,
    vanityURLCode: n,
    vanityURLUses: l,
    originalVanityURLCode: s,
    errorDetails: o
  } = e, c = (null == t ? true : t.features.has(x.GuildFeatures.VANITY_URL)) === true, d = i.useCallback(() => {
    (0, f.Gy)("")
  }, []), u = i.useCallback(e => {
    (0, f.Gy)(e)
  }, []);
  if (null == n) return (0, r.jsx)(a.$jN, {});
  let g = null != o ? (0, m.i)(o.code) : null;
  return (0, r.jsxs)(a.Zbd, {
    editable: true,
    className: O.editVanityUrlCard,
    children: [(0, r.jsxs)("div", {
      className: O.formTitleField,
      children: [(0, r.jsx)(a.Heading, {
        variant: "heading-sm/semibold",
        color: "text-default",
        children: v.intl.string(v.t["6oJyq5"])
      }), n.length > 0 ? (0, r.jsx)(a.Text, {
        variant: "text-sm/medium",
        color: "text-subtle",
        children: v.intl.format(v.t.MVWOUY, {
          uses: l
        })
      }) : null]
    }), (0, r.jsx)(h.Z, {
      value: n,
      onChange: u,
      error: g,
      disabled: !c
    }), null != s && s.length > 0 ? (0, r.jsx)("div", {
      className: O.removeVanityUrlButton,
      children: (0, r.jsx)(a.Button, {
        variant: "critical-secondary",
        onClick: d,
        text: v.intl.string(v.t["3ggb6K"])
      })
    }) : null]
  })
}

function N(e) {
  let {
    guild: t,
    vanityURLCode: n,
    vanityURLUses: a,
    originalVanityURLCode: c,
    errorDetails: f
  } = e, {
    analyticsLocations: h
  } = (0, o.ZP)(), v = (0, d.g1)(t.id, "GuildSettingsBoostPerks"), N = i.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), v ? (g.Z.close(), (0, u.Z)(t.id, s.Z.GUILD_POWERUPS_GUILD_SETTINGS_VANITY_URL, l.A$)) : (0, p.E6)({
      guild: t,
      analyticsLocations: h,
      analyticsSection: x.jXE.GUILD_SETTINGS_VANITY_URL,
      analyticsObject: x.qAy.BUTTON_CTA,
      perks: (0, j.WW)(),
      targetPremiumGuildTier: x.Eu4.TIER_3
    })
  }, [h, t, v]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, m.p)(t) ? (0, r.jsx)(y, {
      guild: t,
      vanityURLCode: n,
      vanityURLUses: a,
      originalVanityURLCode: c,
      errorDetails: f
    }) : (0, r.jsx)("div", {
      className: O.upsellButton,
      children: (0, r.jsx)(b.v, {
        onClick: N
      })
    }), (0, r.jsx)(C, {
      originalVanityURLCode: c
    })]
  })
}