/** Chunk was on 66863 **/
/** chunk id: 753838, original params: e,t,n (module,exports,require) **/
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
  let t, n, r, {
      guildFeature: p,
      guild: u,
      className: h,
      hideTooltip: m = false,
      tooltipPosition: x = "left",
      onClick: v
    } = e,
    g = u.features.has(p),
    j = (0, o.Bl)(u.id, "GuildSettingsBoostPerks"),
    k = (0, d.Ys)(p);
  return !g && p === s.GuildFeatures.VANITY_URL && j ? null : (g ? (null != k && (r = c.intl.string(c.t.hUgjyP)), t = (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(l._Jp, {
      color: l.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
      className: f.RQ
    }), (0, i.jsx)(l.Heading, {
      variant: "eyebrow",
      className: f.h_,
      children: c.intl.string(c.t["0O+87i"])
    })]
  })) : (null != k && (r = c.intl.string(c.t.L2wYYj)), t = (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(l._Jp, {
      color: "currentColor",
      className: f.Kk
    }), (0, i.jsx)(l.Heading, {
      variant: "eyebrow",
      className: f.h_,
      children: null != k && (0, d.Qu)(k)
    })]
  })), n = m || null == r ? (0, i.jsx)("div", {
    className: a()(f.Jz, h),
    children: t
  }) : (0, i.jsx)(_.m, {
    position: x,
    text: r,
    children: (0, i.jsx)("div", {
      className: a()(f.Jz, h),
      children: t
    })
  }), null == v || g) ? n : (0, i.jsx)(l.DUT, {
    onClick: v,
    className: f.vk,
    children: n
  })
}