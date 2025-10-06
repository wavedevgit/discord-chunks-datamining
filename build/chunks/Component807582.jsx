/** Chunk was on 50893 **/
/** chunk id: 807582, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./953529.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk158638 = require("./158638.js"),
  Chunk267642 = require("./267642.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk481474 = require("./481474.js");
let p = e => {
  let t, n, a, {
      guildFeature: p,
      guild: u,
      className: m,
      hideTooltip: v = false,
      tooltipPosition: g = "left",
      onClick: h
    } = e,
    x = u.features.has(p),
    A = (0, c.AR)(u.id, "GuildSettingsBoostPerks"),
    b = (0, d._p)(p);
  return !x && p === s.oNc.VANITY_URL && A ? null : (x ? (null != b && (a = _.intl.string(_.t.hUgjyM)), t = (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(l.$Eu, {
      color: l.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
      className: f.unlockedIcon
    }), (0, i.jsx)(l.X6q, {
      variant: "eyebrow",
      className: f.description,
      children: _.intl.string(_.t["0O+87u"])
    })]
  })) : (null != b && (a = _.intl.string(_.t.L2wYYm)), t = (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(l.$Eu, {
      color: "currentColor",
      className: f.icon
    }), (0, i.jsx)(l.X6q, {
      variant: "eyebrow",
      className: f.description,
      children: null != b && (0, d.e9)(b)
    })]
  })), n = v || null == a ? (0, i.jsx)("div", {
    className: o()(f.availabilityIndicator, m),
    children: t
  }) : (0, i.jsx)(r.u, {
    position: g,
    text: a,
    children: (0, i.jsx)("div", {
      className: o()(f.availabilityIndicator, m),
      children: t
    })
  }), null == h || x) ? n : (0, i.jsx)(l.P3F, {
    onClick: h,
    className: f.clickable,
    children: n
  })
}