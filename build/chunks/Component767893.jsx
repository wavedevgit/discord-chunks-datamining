/** Chunk was on web.js **/
/** chunk id: 767893, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
});
var Chunk54381 = require("./54381.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk657707 = require("./657707.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk933557 = require("./933557.js"),
  Chunk471445 = require("./471445.js"),
  Chunk266076 = require("./266076.jsx"),
  Chunk565138 = require("./565138.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk478942 = require("./478942.js");
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
  return (0, r.jsx)(s.tEY, {
    offset: g,
    children: (0, r.jsxs)("div", {
      className: h.channelHeader,
      "data-recents-channel": t.id,
      children: [(0, r.jsx)(b, {
        channel: t
      }), t.isPrivate() ? null : (0, r.jsx)(o.Fbu, {
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
  } = e, n = (0, l.e7)([_.Z], () => _.Z.getGuild(t.guild_id));
  return null != n ? (0, r.jsx)(p.Z, {
    className: h.icon,
    guild: n,
    size: p.Z.Sizes.SMALLER,
    "aria-hidden": true
  }) : t.isGroupDM() ? (0, r.jsx)(f.Z, {
    channel: t,
    size: c.EFr.SIZE_24
  }) : (0, r.jsx)("div", {
    className: a()(h.icon, h.dmIcon),
    children: (0, r.jsx)(o.kBi, {
      size: "xxs"
    })
  })
}

function y(e) {
  let {
    channel: t
  } = e, n = (0, l.e7)([_.Z], () => _.Z.getGuild(t.guild_id)), i = (0, u.ZP)(t, false), a = (0, d.KS)(t, n), o = t.isPrivate() || null == a, s = t.isDM() ? m.intl.formatToPlainString(m.t.smD7XV, {
    username: i
  }) : i;
  return (0, r.jsxs)("div", {
    className: h.channelNameSection,
    children: [o ? null : (0, r.jsx)(a, {
      className: h.channelTypeIcon,
      size: "xxs"
    }), (0, r.jsx)(c.Heading, {
      variant: "text-md/semibold",
      color: "header-secondary",
      children: s
    })]
  })
}