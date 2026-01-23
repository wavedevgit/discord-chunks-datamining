/** Chunk was on 92812 **/
/** chunk id: 753838, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  A: () => p
}), require("./228524.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk840120 = require("./840120.js"),
  Chunk473145 = require("./473145.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk483116 = require("./483116.js");
let p = e => {
  let t, i, r, {
      guildFeature: p,
      guild: u,
      className: h,
      hideTooltip: m = false,
      tooltipPosition: x = "left",
      onClick: g
    } = e,
    v = u.features.has(p),
    k = (0, o.Bl)(u.id, "GuildSettingsBoostPerks"),
    j = (0, d.Ys)(p);
  return !v && p === s.GuildFeatures.VANITY_URL && k ? null : (v ? (null != j && (r = c.intl.string(c.t.hUgjyP)), t = (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(_._Jp, {
      color: _.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
      className: f.RQ
    }), (0, n.jsx)(_.Heading, {
      variant: "eyebrow",
      className: f.h_,
      children: c.intl.string(c.t["0O+87i"])
    })]
  })) : (null != j && (r = c.intl.string(c.t.L2wYYj)), t = (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(_._Jp, {
      color: "currentColor",
      className: f.Kk
    }), (0, n.jsx)(_.Heading, {
      variant: "eyebrow",
      className: f.h_,
      children: null != j && (0, d.Qu)(j)
    })]
  })), i = m || null == r ? (0, n.jsx)("div", {
    className: a()(f.Jz, h),
    children: t
  }) : (0, n.jsx)(l.m, {
    position: x,
    text: r,
    children: (0, n.jsx)("div", {
      className: a()(f.Jz, h),
      children: t
    })
  }), null == g || v) ? i : (0, n.jsx)(_.DUT, {
    onClick: g,
    className: f.vk,
    children: i
  })
}