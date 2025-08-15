/** Chunk was on 54157 **/
/** chunk id: 767893, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk951288 = require("./951288.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk67136 = require("./67136.jsx"),
  Chunk657707 = require("./657707.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk933557 = require("./933557.js"),
  Chunk471445 = require("./471445.js"),
  Chunk266076 = require("./266076.jsx"),
  Chunk565138 = require("./565138.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk478942 = require("./478942.js");
let S = {
  top: 8,
  bottom: 8,
  left: false,
  right: false
};

function m(e) {
  let {
    channel: t,
    children: n
  } = e;
  return (0, r.jsx)(a.tE, {
    offset: S,
    children: (0, r.jsxs)("div", {
      className: g.channelHeader,
      "data-recents-channel": t.id,
      children: [(0, r.jsx)(y, {
        channel: t
      }), t.isPrivate() ? null : (0, r.jsx)(i.Fbu, {
        size: "xxs"
      }), (0, r.jsx)(b, {
        channel: t
      }), n]
    })
  })
}

function y(e) {
  let {
    channel: t
  } = e, n = (0, o.e7)([f.Z], () => f.Z.getGuild(t.guild_id));
  return null != n ? (0, r.jsx)(p.Z, {
    className: g.icon,
    guild: n,
    size: p.Z.Sizes.SMALLER,
    "aria-hidden": true
  }) : t.isGroupDM() ? (0, r.jsx)(h.Z, {
    channel: t,
    size: c.EFr.SIZE_24,
    experimentLocation: "ForLaterChannelHeader"
  }) : (0, r.jsx)("div", {
    className: l()(g.icon, g.dmIcon),
    children: (0, r.jsx)(i.kBi, {
      size: "xxs"
    })
  })
}

function b(e) {
  let {
    channel: t
  } = e, n = (0, o.e7)([f.Z], () => f.Z.getGuild(t.guild_id)), s = (0, u.ZP)(t, false), l = (0, d.KS)(t, n), a = t.isPrivate() || null == l, i = t.isDM() ? _.intl.formatToPlainString(_.t.smD7XV, {
    username: s
  }) : s;
  return (0, r.jsxs)("div", {
    className: g.channelNameSection,
    children: [a ? null : (0, r.jsx)(l, {
      className: g.channelTypeIcon,
      size: "xxs"
    }), (0, r.jsx)(c.X6q, {
      variant: "text-md/semibold",
      color: "header-secondary",
      children: i
    })]
  })
}