/** Chunk was on 53488 **/
/** chunk id: 807582, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./953529.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk158638 = require("./158638.js"),
  Chunk267642 = require("./267642.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk552461 = require("./552461.js");
let p = e => {
  let t, i, a, {
      guildFeature: p,
      guild: u,
      className: m,
      hideTooltip: v = false,
      tooltipPosition: h = "left",
      onClick: g
    } = e,
    x = u.features.has(p),
    b = (0, c.AR)(u.id, "GuildSettingsBoostPerks"),
    A = (0, s._p)(p);
  return !x && p === d.GuildFeatures.VANITY_URL && b ? null : (x ? (null != A && (a = _.intl.string(_.t.hUgjyP)), t = (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(l.Ucv, {
      color: l.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
      className: f.unlockedIcon
    }), (0, n.jsx)(l.Heading, {
      variant: "eyebrow",
      className: f.description,
      children: _.intl.string(_.t["0O+87i"])
    })]
  })) : (null != A && (a = _.intl.string(_.t.L2wYYj)), t = (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(l.Ucv, {
      color: "currentColor",
      className: f.icon
    }), (0, n.jsx)(l.Heading, {
      variant: "eyebrow",
      className: f.description,
      children: null != A && (0, s.e9)(A)
    })]
  })), i = v || null == a ? (0, n.jsx)("div", {
    className: o()(f.availabilityIndicator, m),
    children: t
  }) : (0, n.jsx)(r.u, {
    position: h,
    text: a,
    children: (0, n.jsx)("div", {
      className: o()(f.availabilityIndicator, m),
      children: t
    })
  }), null == g || x) ? i : (0, n.jsx)(l.P3F, {
    onClick: g,
    className: f.clickable,
    children: i
  })
}