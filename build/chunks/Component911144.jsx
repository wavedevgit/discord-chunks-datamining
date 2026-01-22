/** Chunk was on 47841 **/
/** chunk id: 911144, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  C: () => E
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk512750 = require("./512750.js"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk279208 = require("./279208.js"),
  Chunk840120 = require("./840120.js"),
  Chunk828162 = require("./828162.js"),
  Chunk997509 = require("./997509.js"),
  Chunk310527 = require("./310527.js"),
  Chunk446291 = require("./446291.js"),
  Chunk342490 = require("./342490.jsx"),
  Chunk695800 = require("./695800.jsx"),
  Chunk533148 = require("./533148.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk874864 = require("./874864.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk802498 = require("./802498.js");

function v(e) {
  let {
    originalVanityURLCode: t
  } = e;
  if (null != t && t.length > 0) {
    let e = (0, o.A)(t);
    return (0, r.jsx)(s.Text, {
      variant: "text-sm/medium",
      color: "text-subtle",
      className: y.YQ,
      children: O.intl.format(O.t["1qTOvn"], {
        urlText: e,
        urlValue: e
      })
    })
  }
  return null
}

function A(e) {
  let {
    guild: t,
    vanityURLCode: n,
    vanityURLUses: l,
    originalVanityURLCode: a,
    errorDetails: c
  } = e, o = (null == t ? true : t.features.has(h.GuildFeatures.VANITY_URL)) === true, d = i.useCallback(() => {
    (0, g.OH)("")
  }, []), u = i.useCallback(e => {
    (0, g.OH)(e)
  }, []);
  if (null == n) return (0, r.jsx)(s.y$y, {});
  let f = null != c ? (0, b.z)(c.code) : null;
  return (0, r.jsxs)(s.ZpM, {
    editable: true,
    className: y.pU,
    children: [(0, r.jsxs)("div", {
      className: y.p2,
      children: [(0, r.jsx)(s.Heading, {
        variant: "heading-sm/semibold",
        color: "text-default",
        children: O.intl.string(O.t["6oJyq5"])
      }), n.length > 0 ? (0, r.jsx)(s.Text, {
        variant: "text-sm/medium",
        color: "text-subtle",
        children: O.intl.format(O.t.MVWOUY, {
          uses: l
        })
      }) : null]
    }), (0, r.jsx)(x.A, {
      value: n,
      onChange: u,
      error: f,
      disabled: !o
    }), null != a && a.length > 0 ? (0, r.jsx)("div", {
      className: y.J9,
      children: (0, r.jsx)(s.Button, {
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
    vanityURLUses: s,
    originalVanityURLCode: o,
    errorDetails: g
  } = e, {
    analyticsLocations: x
  } = (0, c.Ay)(), O = (0, d.M5)(t.id, "GuildSettingsBoostPerks"), E = i.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), O ? (f.A.close(), (0, u.A)(t.id, a.A.GUILD_POWERUPS_GUILD_SETTINGS_VANITY_URL, l.FB)) : (0, p.p_)({
      guild: t,
      analyticsLocations: x,
      analyticsSection: h.JJy.GUILD_SETTINGS_VANITY_URL,
      analyticsObject: h.ZSU.BUTTON_CTA,
      perks: (0, j.DU)(),
      targetPremiumGuildTier: h.TVA.TIER_3
    })
  }, [x, t, O]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, b.d)(t) ? (0, r.jsx)(A, {
      guild: t,
      vanityURLCode: n,
      vanityURLUses: s,
      originalVanityURLCode: o,
      errorDetails: g
    }) : (0, r.jsx)("div", {
      className: y.Oy,
      children: (0, r.jsx)(m.u, {
        onClick: E
      })
    }), (0, r.jsx)(v, {
      originalVanityURLCode: o
    })]
  })
}