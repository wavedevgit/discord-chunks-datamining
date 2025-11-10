/** Chunk was on web.js **/
/** chunk id: 396252, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk385499 = require("./385499.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk739566 = require("./739566.js"),
  Chunk464891 = require("./464891.jsx"),
  Chunk83561 = require("./83561.jsx"),
  Chunk834129 = require("./834129.jsx"),
  Chunk674563 = require("./674563.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk682392 = require("./682392.js");

function g(e) {
  var t;
  let {
    message: n,
    compact: i,
    usernameHook: g,
    channel: E
  } = e, b = (0, o.e7)([c.Z], () => c.Z.getGuild(E.guild_id)), y = (0, u.ZP)(n), O = g(y), {
    avatarSrc: v,
    eventHandlers: {
      onMouseEnter: I,
      onMouseLeave: S
    }
  } = (0, f.m)(true);
  return (0, r.jsx)("div", {
    onMouseEnter: I,
    onMouseLeave: S,
    children: (0, r.jsx)(_.Z, {
      className: a()(m.mainContainer, {
        [m.compact]: i
      }),
      iconNode: i ? null : (0, r.jsx)(f.S, {
        src: v
      }),
      iconContainerClassName: m.iconContainer,
      compact: i,
      children: (0, r.jsxs)("div", {
        className: a()(m.content, {
          [m.compact]: i
        }),
        children: [(0, r.jsx)(d.nD, {
          message: n,
          messageClassname: m.spanCorrection,
          className: a()(m.usernameContainer, m.spanCorrection, {
            [m.compact]: i
          }),
          username: (0, r.jsxs)("div", {
            className: m.spanCorrection,
            children: [(0, r.jsx)(s.Text, {
              variant: "text-md/normal",
              color: "text-brand",
              tag: "span",
              className: m.username,
              children: h.intl.string(h.t.hG1StD)
            }), (0, r.jsx)(l.Z, {
              type: p.Hb.SYSTEM_DM,
              className: m.systemTag
            })]
          }),
          compact: i,
          showTimestamp: true
        }), (0, r.jsx)("div", {
          className: a()(m.__invalid_messageContent, {
            [m.compact]: i
          }),
          children: h.intl.format(h.t.W0UBI3, {
            username: y.nick,
            usernameHook: O,
            guildName: null != (t = null == b ? true : b.name) ? t : ""
          })
        })]
      })
    })
  })
}