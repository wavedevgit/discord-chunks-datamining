/** Chunk was on 92812 **/
/** chunk id: 753838, original params: e,a,c (module,exports,require) **/
require.d(exports, {
  A: () => o
}), require("./228524.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk840120 = require("./840120.js"),
  Chunk473145 = require("./473145.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk483116 = require("./483116.js");
let o = e => {
  let a, c, d, {
      guildFeature: o,
      guild: u,
      className: x,
      hideTooltip: h = false,
      tooltipPosition: p = "left",
      onClick: j
    } = e,
    k = u.features.has(o),
    m = (0, t.Bl)(u.id, "GuildSettingsBoostPerks"),
    g = (0, n.Ys)(o);
  return !k && o === b.GuildFeatures.VANITY_URL && m ? null : (k ? (null != g && (d = i.intl.string(i.t.hUgjyP)), a = (0, f.jsxs)(f.Fragment, {
    children: [(0, f.jsx)(r._Jp, {
      color: r.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
      className: _.RQ
    }), (0, f.jsx)(r.Heading, {
      variant: "eyebrow",
      className: _.h_,
      children: i.intl.string(i.t["0O+87i"])
    })]
  })) : (null != g && (d = i.intl.string(i.t.L2wYYj)), a = (0, f.jsxs)(f.Fragment, {
    children: [(0, f.jsx)(r._Jp, {
      color: "currentColor",
      className: _.Kk
    }), (0, f.jsx)(r.Heading, {
      variant: "eyebrow",
      className: _.h_,
      children: null != g && (0, n.Qu)(g)
    })]
  })), c = h || null == d ? (0, f.jsx)("div", {
    className: s()(_.Jz, x),
    children: a
  }) : (0, f.jsx)(l.m, {
    position: p,
    text: d,
    children: (0, f.jsx)("div", {
      className: s()(_.Jz, x),
      children: a
    })
  }), null == j || k) ? c : (0, f.jsx)(r.DUT, {
    onClick: j,
    className: _.vk,
    children: c
  })
}