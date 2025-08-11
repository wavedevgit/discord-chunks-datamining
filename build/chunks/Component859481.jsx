/** Chunk was on 22988 **/
/** chunk id: 859481, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  z: () => N
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk494497 = require("./494497.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk366980 = require("./366980.js"),
  Chunk158638 = require("./158638.js"),
  Chunk441536 = require("./441536.js"),
  Chunk434404 = require("./434404.js"),
  Chunk621319 = require("./621319.js"),
  Chunk770270 = require("./770270.js"),
  Chunk70086 = require("./70086.jsx"),
  Chunk949640 = require("./949640.jsx"),
  Chunk927160 = require("./927160.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk30513 = require("./30513.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk919957 = require("./919957.js");

function y(e) {
  let {
    errorDetails: t,
    originalVanityURLCode: n
  } = e;
  if (null != t) return (0, r.jsx)(s.Text, {
    variant: "text-md/normal",
    color: "text-danger",
    className: O.vanityInfo,
    children: (0, h.i)(null == t ? true : t.code)
  });
  if (null != n && n.length > 0) {
    let e = (0, d.Z)(n);
    return (0, r.jsx)(s.Text, {
      variant: "text-sm/medium",
      color: "text-secondary",
      className: O.vanityInfo,
      children: _.intl.format(_.t["1qTOvr"], {
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
    originalVanityURLCode: o,
    hasError: c
  } = e, d = (null == t ? true : t.features.has(j.oNc.VANITY_URL)) === true, u = i.useCallback(() => {
    (0, p.Gy)("")
  }, []), m = i.useCallback(e => {
    (0, p.Gy)(e)
  }, []);
  return null == n ? (0, r.jsx)(s.$jN, {}) : (0, r.jsxs)(s.Zbd, {
    editable: true,
    className: O.editVanityUrlCard,
    children: [(0, r.jsxs)("div", {
      className: O.formTitleField,
      children: [(0, r.jsx)(s.X6q, {
        variant: "heading-sm/semibold",
        color: "text-default",
        children: _.intl.string(_.t["6oJyq6"])
      }), n.length > 0 ? (0, r.jsx)(s.Text, {
        variant: "text-sm/medium",
        color: "text-secondary",
        children: _.intl.format(_.t.MVWOUV, {
          uses: l
        })
      }) : null]
    }), (0, r.jsx)(x.Z, {
      value: n,
      onChange: m,
      error: c,
      disabled: !d
    }), null != o && o.length > 0 ? (0, r.jsx)(a.zx, {
      className: O.removeVanityUrlButton,
      onClick: u,
      look: a.zx.Looks.LINK,
      size: a.zx.Sizes.MIN,
      color: a.zx.Colors.RED,
      children: _.intl.string(_.t["3ggb6O"])
    }) : null]
  })
}

function N(e) {
  let {
    guild: t,
    vanityURLCode: n,
    vanityURLUses: a,
    originalVanityURLCode: s,
    errorDetails: d
  } = e, {
    analyticsLocations: p
  } = (0, c.ZP)(), x = (0, u.g1)(t.id, "GuildSettingsBoostPerks"), _ = i.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), x ? (g.Z.close(), (0, m.Z)(t.id, o.Z.GUILD_POWERUPS_GUILD_SETTINGS_VANITY_URL, l.A$)) : (0, b.E6)({
      guild: t,
      analyticsLocations: p,
      analyticsSection: j.jXE.GUILD_SETTINGS_VANITY_URL,
      analyticsObject: j.qAy.BUTTON_CTA,
      perks: (0, v.WW)(),
      targetPremiumGuildTier: j.Eu4.TIER_3
    })
  }, [p, t, x]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, h.p)(t) ? (0, r.jsx)(C, {
      guild: t,
      vanityURLCode: n,
      vanityURLUses: a,
      originalVanityURLCode: s,
      hasError: null != d
    }) : (0, r.jsx)(f.P, {
      onClick: _,
      className: O.upsellButton
    }), (0, r.jsx)(y, {
      errorDetails: d,
      originalVanityURLCode: s
    })]
  })
}