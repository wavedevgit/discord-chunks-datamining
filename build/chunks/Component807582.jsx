/** Chunk was on 32603 **/
/** chunk id: 807582, original params: e,a,t (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./953529.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  n = require.n(Chunk120356),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk158638 = require("./158638.js"),
  Chunk267642 = require("./267642.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk754681 = require("./754681.js");
let p = e => {
  let a, t, i, {
      guildFeature: p,
      guild: u,
      className: m,
      hideTooltip: _ = false,
      tooltipPosition: v = "left",
      onClick: h
    } = e,
    g = u.features.has(p),
    x = (0, l.AR)(u.id, "GuildSettingsBoostPerks"),
    A = (0, f._p)(p);
  return !g && p === d.GuildFeatures.VANITY_URL && x ? null : (g ? (null != A && (i = s.intl.string(s.t.hUgjyP)), a = (0, c.jsxs)(c.Fragment, {
    children: [(0, c.jsx)(r.Ucv, {
      color: r.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
      className: b.unlockedIcon
    }), (0, c.jsx)(r.Heading, {
      variant: "eyebrow",
      className: b.description,
      children: s.intl.string(s.t["0O+87i"])
    })]
  })) : (null != A && (i = s.intl.string(s.t.L2wYYj)), a = (0, c.jsxs)(c.Fragment, {
    children: [(0, c.jsx)(r.Ucv, {
      color: "currentColor",
      className: b.icon
    }), (0, c.jsx)(r.Heading, {
      variant: "eyebrow",
      className: b.description,
      children: null != A && (0, f.e9)(A)
    })]
  })), t = _ || null == i ? (0, c.jsx)("div", {
    className: n()(b.availabilityIndicator, m),
    children: a
  }) : (0, c.jsx)(o.u, {
    position: v,
    text: i,
    children: (0, c.jsx)("div", {
      className: n()(b.availabilityIndicator, m),
      children: a
    })
  }), null == h || g) ? t : (0, c.jsx)(r.P3F, {
    onClick: h,
    className: b.clickable,
    children: t
  })
}