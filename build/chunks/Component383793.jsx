/** Chunk was on 64982 **/
/** chunk id: 383793, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  z: () => y
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk821458 = require("./821458.jsx"),
  Chunk585961 = require("./585961.jsx"),
  Chunk790359 = require("./790359.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk30513 = require("./30513.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk856521 = require("./856521.js");

function C(e) {
  let {
    originalVanityURLCode: t
  } = e;
  if (null != t && t.length > 0) {
    let e = (0, c.Z)(t);
    return (0, r.jsx)(a.Text, {
      variant: "text-sm/medium",
      color: "text-secondary",
      className: _.vanityInfo,
      children: v.intl.format(v.t["1qTOvr"], {
        urlText: e,
        urlValue: e
      })
    })
  }
  return null
}

function O(e) {
  let {
    guild: t,
    vanityURLCode: n,
    vanityURLUses: l,
    originalVanityURLCode: s,
    errorDetails: o
  } = e, c = (null == t ? true : t.features.has(b.oNc.VANITY_URL)) === true, d = i.useCallback(() => {
    (0, m.Gy)("")
  }, []), u = i.useCallback(e => {
    (0, m.Gy)(e)
  }, []);
  if (null == n) return (0, r.jsx)(a.$jN, {});
  let g = null != o ? (0, p.i)(o.code) : null;
  return (0, r.jsxs)(a.Zbd, {
    editable: true,
    className: _.editVanityUrlCard,
    children: [(0, r.jsxs)("div", {
      className: _.formTitleField,
      children: [(0, r.jsx)(a.X6q, {
        variant: "heading-sm/semibold",
        color: "text-default",
        children: v.intl.string(v.t["6oJyq6"])
      }), n.length > 0 ? (0, r.jsx)(a.Text, {
        variant: "text-sm/medium",
        color: "text-secondary",
        children: v.intl.format(v.t.MVWOUV, {
          uses: l
        })
      }) : null]
    }), (0, r.jsx)(x.Z, {
      value: n,
      onChange: u,
      error: g,
      disabled: !c
    }), null != s && s.length > 0 ? (0, r.jsx)("div", {
      className: _.removeVanityUrlButton,
      children: (0, r.jsx)(a.zxk, {
        variant: "critical-secondary",
        onClick: d,
        text: v.intl.string(v.t["3ggb6O"])
      })
    }) : null]
  })
}

function y(e) {
  let {
    guild: t,
    vanityURLCode: n,
    vanityURLUses: a,
    originalVanityURLCode: c,
    errorDetails: m
  } = e, {
    analyticsLocations: x
  } = (0, o.ZP)(), v = (0, d.g1)(t.id, "GuildSettingsBoostPerks"), y = i.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), v ? (g.Z.close(), (0, u.Z)(t.id, s.Z.GUILD_POWERUPS_GUILD_SETTINGS_VANITY_URL, l.A$)) : (0, f.E6)({
      guild: t,
      analyticsLocations: x,
      analyticsSection: b.jXE.GUILD_SETTINGS_VANITY_URL,
      analyticsObject: b.qAy.BUTTON_CTA,
      perks: (0, j.WW)(),
      targetPremiumGuildTier: b.Eu4.TIER_3
    })
  }, [x, t, v]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, p.p)(t) ? (0, r.jsx)(O, {
      guild: t,
      vanityURLCode: n,
      vanityURLUses: a,
      originalVanityURLCode: c,
      errorDetails: m
    }) : (0, r.jsx)(h.P, {
      onClick: y,
      className: _.upsellButton
    }), (0, r.jsx)(C, {
      originalVanityURLCode: c
    })]
  })
}