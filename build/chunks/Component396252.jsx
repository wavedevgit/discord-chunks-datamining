/** Chunk was on 91173 **/
/** chunk id: 396252, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
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

function h(e) {
  var t;
  let {
    message: n,
    compact: i,
    usernameHook: h,
    channel: b
  } = e, E = (0, a.e7)([c.Z], () => c.Z.getGuild(b.guild_id)), C = (0, u.ZP)(n), v = h(C), {
    avatarSrc: O,
    eventHandlers: {
      onMouseEnter: y,
      onMouseLeave: x
    }
  } = (0, p.m)(true);
  return (0, r.jsx)("div", {
    onMouseEnter: y,
    onMouseLeave: x,
    children: (0, r.jsx)(m.Z, {
      className: l()(g.mainContainer, {
        [g.compact]: i
      }),
      iconNode: i ? null : (0, r.jsx)(p.S, {
        src: O
      }),
      iconContainerClassName: g.iconContainer,
      compact: i,
      children: (0, r.jsxs)("div", {
        className: l()(g.content, {
          [g.compact]: i
        }),
        children: [(0, r.jsx)(d.nD, {
          message: n,
          messageClassname: g.spanCorrection,
          className: l()(g.usernameContainer, g.spanCorrection, {
            [g.compact]: i
          }),
          username: (0, r.jsxs)("div", {
            className: g.spanCorrection,
            children: [(0, r.jsx)(o.Text, {
              variant: "text-md/normal",
              color: "text-brand",
              tag: "span",
              className: g.username,
              children: _.intl.string(_.t.hG1StL)
            }), (0, r.jsx)(s.Z, {
              type: f.Hb.SYSTEM_DM,
              className: g.systemTag
            })]
          }),
          compact: i,
          showTimestamp: true
        }), (0, r.jsx)("div", {
          className: l()(g.__invalid_messageContent, {
            [g.compact]: i
          }),
          children: _.intl.format(_.t.W0UBIy, {
            username: C.nick,
            usernameHook: v,
            guildName: null != (t = null == E ? true : E.name) ? t : ""
          })
        })]
      })
    })
  })
}