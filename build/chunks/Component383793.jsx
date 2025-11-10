/** Chunk was on 64982 **/
/** chunk id: 383793, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  z: () => E
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk494497 = require("./494497.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk366980 = require("./366980.js"),
  Chunk892803 = require("./892803.js"),
  Chunk158638 = require("./158638.js"),
  Chunk441536 = require("./441536.js"),
  Chunk434404 = require("./434404.js"),
  Chunk736617 = require("./736617.js"),
  Chunk196961 = require("./196961.js"),
  Chunk465682 = require("./465682.jsx"),
  Chunk821458 = require("./821458.jsx"),
  Chunk585961 = require("./585961.jsx"),
  Chunk790359 = require("./790359.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk30513 = require("./30513.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk856521 = require("./856521.js");

function y(e) {
  let {
    originalVanityURLCode: t
  } = e;
  if (null != t && t.length > 0) {
    let e = (0, c.Z)(t);
    return (0, r.jsx)(a.Text, {
      variant: "text-sm/medium",
      color: "text-secondary",
      className: C.vanityInfo,
      children: O.intl.format(O.t["1qTOvn"], {
        urlText: e,
        urlValue: e
      })
    })
  }
  return null
}

function N(e) {
  let {
    guild: t,
    vanityURLCode: n,
    vanityURLUses: l,
    originalVanityURLCode: s,
    errorDetails: o
  } = e, c = (null == t ? true : t.features.has(_.GuildFeatures.VANITY_URL)) === true, d = i.useCallback(() => {
    (0, p.Gy)("")
  }, []), u = i.useCallback(e => {
    (0, p.Gy)(e)
  }, []);
  if (null == n) return (0, r.jsx)(a.$jN, {});
  let g = null != o ? (0, f.i)(o.code) : null;
  return (0, r.jsxs)(a.Zbd, {
    editable: true,
    className: C.editVanityUrlCard,
    children: [(0, r.jsxs)("div", {
      className: C.formTitleField,
      children: [(0, r.jsx)(a.Heading, {
        variant: "heading-sm/semibold",
        color: "text-default",
        children: O.intl.string(O.t["6oJyq5"])
      }), n.length > 0 ? (0, r.jsx)(a.Text, {
        variant: "text-sm/medium",
        color: "text-secondary",
        children: O.intl.format(O.t.MVWOUY, {
          uses: l
        })
      }) : null]
    }), (0, r.jsx)(j.Z, {
      value: n,
      onChange: u,
      error: g,
      disabled: !c
    }), null != s && s.length > 0 ? (0, r.jsx)("div", {
      className: C.removeVanityUrlButton,
      children: (0, r.jsx)(a.Button, {
        variant: "critical-secondary",
        onClick: d,
        text: O.intl.string(O.t["3ggb6K"])
      })
    }) : null]
  })
}

function E(e) {
  let {
    guild: t,
    vanityURLCode: n,
    vanityURLUses: a,
    originalVanityURLCode: c,
    errorDetails: p
  } = e, {
    analyticsLocations: j
  } = (0, o.ZP)(), O = (0, u.g1)(t.id, "GuildSettingsBoostPerks"), {
    enabled: E
  } = d.Z.useConfig({
    location: "GuildSettingsVanityCard"
  }), I = i.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), O ? (m.Z.close(), (0, g.Z)(t.id, s.Z.GUILD_POWERUPS_GUILD_SETTINGS_VANITY_URL, l.A$)) : (0, b.E6)({
      guild: t,
      analyticsLocations: j,
      analyticsSection: _.jXE.GUILD_SETTINGS_VANITY_URL,
      analyticsObject: _.qAy.BUTTON_CTA,
      perks: (0, v.WW)(),
      targetPremiumGuildTier: _.Eu4.TIER_3
    })
  }, [j, t, O]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, f.p)(t) ? (0, r.jsx)(N, {
      guild: t,
      vanityURLCode: n,
      vanityURLUses: a,
      originalVanityURLCode: c,
      errorDetails: p
    }) : E ? (0, r.jsx)("div", {
      className: C.upsellButton,
      children: (0, r.jsx)(h.v, {
        onClick: I
      })
    }) : (0, r.jsx)(x.P, {
      onClick: I,
      className: C.upsellButton
    }), (0, r.jsx)(y, {
      originalVanityURLCode: c
    })]
  })
}