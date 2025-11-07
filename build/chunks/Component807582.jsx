/** Chunk was on 64982 **/
/** chunk id: 807582, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./953529.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk158638 = require("./158638.js"),
  Chunk267642 = require("./267642.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk552461 = require("./552461.js");
let m = e => {
  let t, n, i, {
      guildFeature: m,
      guild: p,
      className: f,
      hideTooltip: h = false,
      tooltipPosition: b = "left",
      onClick: x
    } = e,
    j = p.features.has(m),
    _ = (0, o.AR)(p.id, "GuildSettingsBoostPerks"),
    v = (0, c._p)(m);
  return !j && m === d.GuildFeatures.VANITY_URL && _ ? null : (j ? (null != v && (i = u.intl.string(u.t.hUgjyP)), t = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(s.Ucv, {
      color: s.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
      className: g.unlockedIcon
    }), (0, r.jsx)(s.Heading, {
      variant: "eyebrow",
      className: g.description,
      children: u.intl.string(u.t["0O+87i"])
    })]
  })) : (null != v && (i = u.intl.string(u.t.L2wYYj)), t = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(s.Ucv, {
      color: "currentColor",
      className: g.icon
    }), (0, r.jsx)(s.Heading, {
      variant: "eyebrow",
      className: g.description,
      children: null != v && (0, c.e9)(v)
    })]
  })), n = h || null == i ? (0, r.jsx)("div", {
    className: l()(g.availabilityIndicator, f),
    children: t
  }) : (0, r.jsx)(a.u, {
    position: b,
    text: i,
    children: (0, r.jsx)("div", {
      className: l()(g.availabilityIndicator, f),
      children: t
    })
  }), null == x || j) ? n : (0, r.jsx)(s.P3F, {
    onClick: x,
    className: g.clickable,
    children: n
  })
}