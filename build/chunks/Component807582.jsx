/** Chunk was on 64982 **/
/** chunk id: 807582, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => g
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
let g = e => {
  let t, n, i, {
      guildFeature: g,
      guild: p,
      className: f,
      hideTooltip: h = false,
      tooltipPosition: x = "left",
      onClick: b
    } = e,
    j = p.features.has(g),
    _ = (0, o.AR)(p.id, "GuildSettingsBoostPerks"),
    v = (0, c._p)(g);
  return !j && g === d.oNc.VANITY_URL && _ ? null : (j ? (null != v && (i = u.intl.string(u.t.hUgjyM)), t = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(a.$Eu, {
      color: a.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
      className: m.unlockedIcon
    }), (0, r.jsx)(a.X6q, {
      variant: "eyebrow",
      className: m.description,
      children: u.intl.string(u.t["0O+87u"])
    })]
  })) : (null != v && (i = u.intl.string(u.t.L2wYYm)), t = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(a.$Eu, {
      color: "currentColor",
      className: m.icon
    }), (0, r.jsx)(a.X6q, {
      variant: "eyebrow",
      className: m.description,
      children: null != v && (0, c.e9)(v)
    })]
  })), n = h || null == i ? (0, r.jsx)("div", {
    className: l()(m.availabilityIndicator, f),
    children: t
  }) : (0, r.jsx)(s.u, {
    position: x,
    text: i,
    children: (0, r.jsx)("div", {
      className: l()(m.availabilityIndicator, f),
      children: t
    })
  }), null == b || j) ? n : (0, r.jsx)(a.P3F, {
    onClick: b,
    className: m.clickable,
    children: n
  })
}