/** Chunk was on 47841 **/
/** chunk id: 911144, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  C: () => A
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
    let e = (0, c.A)(t);
    return (0, r.jsx)(s.Text, {
      variant: "text-sm/medium",
      color: "text-subtle",
      className: O.YQ,
      children: _.intl.format(_.t["1qTOvn"], {
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
    originalVanityURLCode: a,
    errorDetails: o
  } = e, c = (null == t ? true : t.features.has(x.GuildFeatures.VANITY_URL)) === true, d = i.useCallback(() => {
    (0, m.OH)("")
  }, []), u = i.useCallback(e => {
    (0, m.OH)(e)
  }, []);
  if (null == n) return (0, r.jsx)(s.y$y, {});
  let g = null != o ? (0, p.z)(o.code) : null;
  return (0, r.jsxs)(s.ZpM, {
    editable: true,
    className: O.pU,
    children: [(0, r.jsxs)("div", {
      className: O.p2,
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
    }), (0, r.jsx)(h.A, {
      value: n,
      onChange: u,
      error: g,
      disabled: !c
    }), null != a && a.length > 0 ? (0, r.jsx)("div", {
      className: O.J9,
      children: (0, r.jsx)(s.Button, {
        variant: "critical-secondary",
        onClick: d,
        text: _.intl.string(_.t["3ggb6K"])
      })
    }) : null]
  })
}

function A(e) {
  let {
    guild: t,
    vanityURLCode: n,
    vanityURLUses: s,
    originalVanityURLCode: c,
    errorDetails: m
  } = e, {
    analyticsLocations: h
  } = (0, o.Ay)(), _ = (0, d.M5)(t.id, "GuildSettingsBoostPerks"), A = i.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), _ ? (g.A.close(), (0, u.A)(t.id, a.A.GUILD_POWERUPS_GUILD_SETTINGS_VANITY_URL, l.FB)) : (0, b.p_)({
      guild: t,
      analyticsLocations: h,
      analyticsSection: x.JJy.GUILD_SETTINGS_VANITY_URL,
      analyticsObject: x.ZSU.BUTTON_CTA,
      perks: (0, j.DU)(),
      targetPremiumGuildTier: x.TVA.TIER_3
    })
  }, [h, t, _]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, p.d)(t) ? (0, r.jsx)(y, {
      guild: t,
      vanityURLCode: n,
      vanityURLUses: s,
      originalVanityURLCode: c,
      errorDetails: m
    }) : (0, r.jsx)("div", {
      className: O.Oy,
      children: (0, r.jsx)(f.u, {
        onClick: A
      })
    }), (0, r.jsx)(v, {
      originalVanityURLCode: c
    })]
  })
}