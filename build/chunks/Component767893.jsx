/** Chunk was on web.js **/
/** chunk id: 767893, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
});
var Chunk255367 = require("./255367.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk708816 = require("./708816.jsx"),
  Chunk657707 = require("./657707.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk933557 = require("./933557.js"),
  Chunk471445 = require("./471445.js"),
  Chunk266076 = require("./266076.jsx"),
  Chunk565138 = require("./565138.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk432513 = require("./432513.js");
let g = {
  top: 8,
  bottom: 8,
  left: false,
  right: false
};

function E(e) {
  let {
    channel: t,
    children: n
  } = e;
  return (0, r.jsx)(a.tE, {
    offset: g,
    children: (0, r.jsxs)("div", {
      className: m.channelHeader,
      "data-recents-channel": t.id,
      children: [(0, r.jsx)(b, {
        channel: t
      }), t.isPrivate() ? null : (0, r.jsx)(s.Fbu, {
        size: "xxs"
      }), (0, r.jsx)(y, {
        channel: t
      }), n]
    })
  })
}

function b(e) {
  let {
    channel: t
  } = e, n = (0, l.e7)([p.Z], () => p.Z.getGuild(t.guild_id));
  return null != n ? (0, r.jsx)(_.Z, {
    className: m.icon,
    guild: n,
    size: _.Z.Sizes.SMALLER,
    "aria-hidden": true
  }) : t.isGroupDM() ? (0, r.jsx)(f.Z, {
    channel: t,
    size: c.EFr.SIZE_24,
    experimentLocation: "ForLaterChannelHeader"
  }) : (0, r.jsx)("div", {
    className: o()(m.icon, m.dmIcon),
    children: (0, r.jsx)(s.kBi, {
      size: "xxs"
    })
  })
}

function y(e) {
  let {
    channel: t
  } = e, n = (0, l.e7)([p.Z], () => p.Z.getGuild(t.guild_id)), i = (0, u.ZP)(t, false), o = (0, d.KS)(t, n), a = t.isPrivate() || null == o, s = t.isDM() ? h.intl.formatToPlainString(h.t.smD7XV, {
    username: i
  }) : i;
  return (0, r.jsxs)("div", {
    className: m.channelNameSection,
    children: [a ? null : (0, r.jsx)(o, {
      className: m.channelTypeIcon,
      size: "xxs"
    }), (0, r.jsx)(c.X6q, {
      variant: "text-md/semibold",
      color: "header-secondary",
      children: s
    })]
  })
}