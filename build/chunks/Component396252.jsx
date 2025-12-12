/** Chunk was on web.js **/
/** chunk id: 396252, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
  Chunk138851 = require("./138851.js");

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
      onMouseEnter: S,
      onMouseLeave: I
    }
  } = (0, f.m)(true);
  return (0, r.jsx)("div", {
    onMouseEnter: S,
    onMouseLeave: I,
    children: (0, r.jsx)(p.Z, {
      className: a()(h.mainContainer, {
        [h.compact]: i
      }),
      iconNode: i ? null : (0, r.jsx)(f.S, {
        src: v
      }),
      iconContainerClassName: h.iconContainer,
      compact: i,
      children: (0, r.jsxs)("div", {
        className: a()(h.content, {
          [h.compact]: i
        }),
        children: [(0, r.jsx)(d.nD, {
          message: n,
          messageClassname: h.spanCorrection,
          className: a()(h.usernameContainer, h.spanCorrection, {
            [h.compact]: i
          }),
          username: (0, r.jsxs)("div", {
            className: h.spanCorrection,
            children: [(0, r.jsx)(s.Text, {
              variant: "text-md/normal",
              color: "text-brand",
              tag: "span",
              className: h.username,
              children: m.intl.string(m.t.hG1StD)
            }), (0, r.jsx)(l.Z, {
              type: _.Hb.SYSTEM_DM,
              className: h.systemTag
            })]
          }),
          compact: i,
          showTimestamp: true
        }), (0, r.jsx)("div", {
          className: a()(h.__invalid_messageContent, {
            [h.compact]: i
          }),
          children: m.intl.format(m.t.W0UBI3, {
            username: y.nick,
            usernameHook: O,
            guildName: null != (t = null == b ? true : b.name) ? t : ""
          })
        })]
      })
    })
  })
}