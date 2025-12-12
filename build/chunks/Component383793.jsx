/** Chunk was on 384 **/
/** chunk id: 383793, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  z: () => y
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
  Chunk856521 = require("./856521.js");

function O(e) {
  let {
    originalVanityURLCode: t
  } = e;
  if (null != t && t.length > 0) {
    let e = (0, c.Z)(t);
    return (0, r.jsx)(s.Text, {
      variant: "text-sm/medium",
      color: "text-subtle",
      className: v.vanityInfo,
      children: _.intl.format(_.t["1qTOvn"], {
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
    vanityURLUses: l,
    originalVanityURLCode: a,
    errorDetails: o
  } = e, c = (null == t ? true : t.features.has(b.GuildFeatures.VANITY_URL)) === true, u = i.useCallback(() => {
    (0, m.Gy)("")
  }, []), d = i.useCallback(e => {
    (0, m.Gy)(e)
  }, []);
  if (null == n) return (0, r.jsx)(s.$jN, {});
  let g = null != o ? (0, p.i)(o.code) : null;
  return (0, r.jsxs)(s.Zbd, {
    editable: true,
    className: v.editVanityUrlCard,
    children: [(0, r.jsxs)("div", {
      className: v.formTitleField,
      children: [(0, r.jsx)(s.Heading, {
        variant: "heading-sm/semibold",
        color: "text-default",
        children: _.intl.string(_.t["6oJyq5"])
      }), n.length > 0 ? (0, r.jsx)(s.Text, {
        variant: "text-sm/medium",
        color: "text-subtle",
        children: _.intl.format(_.t.MVWOUY, {
          uses: l
        })
      }) : null]
    }), (0, r.jsx)(x.Z, {
      value: n,
      onChange: d,
      error: g,
      disabled: !c
    }), null != a && a.length > 0 ? (0, r.jsx)("div", {
      className: v.removeVanityUrlButton,
      children: (0, r.jsx)(s.Button, {
        variant: "critical-secondary",
        onClick: u,
        text: _.intl.string(_.t["3ggb6K"])
      })
    }) : null]
  })
}

function y(e) {
  let {
    guild: t,
    vanityURLCode: n,
    vanityURLUses: s,
    originalVanityURLCode: c,
    errorDetails: m
  } = e, {
    analyticsLocations: x
  } = (0, o.ZP)(), _ = (0, u.g1)(t.id, "GuildSettingsBoostPerks"), y = i.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), _ ? (g.Z.close(), (0, d.Z)(t.id, a.Z.GUILD_POWERUPS_GUILD_SETTINGS_VANITY_URL, l.A$)) : (0, h.E6)({
      guild: t,
      analyticsLocations: x,
      analyticsSection: b.jXE.GUILD_SETTINGS_VANITY_URL,
      analyticsObject: b.qAy.BUTTON_CTA,
      perks: (0, j.WW)(),
      targetPremiumGuildTier: b.Eu4.TIER_3
    })
  }, [x, t, _]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, p.p)(t) ? (0, r.jsx)(C, {
      guild: t,
      vanityURLCode: n,
      vanityURLUses: s,
      originalVanityURLCode: c,
      errorDetails: m
    }) : (0, r.jsx)("div", {
      className: v.upsellButton,
      children: (0, r.jsx)(f.v, {
        onClick: y
      })
    }), (0, r.jsx)(O, {
      originalVanityURLCode: c
    })]
  })
}