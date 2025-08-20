/** Chunk was on 26434 **/
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
  } = e, E = (0, o.e7)([c.Z], () => c.Z.getGuild(b.guild_id)), C = (0, u.ZP)(n), v = h(C), {
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
      className: l()(_.mainContainer, {
        [_.compact]: i
      }),
      iconNode: i ? null : (0, r.jsx)(p.S, {
        src: O
      }),
      iconContainerClassName: _.iconContainer,
      compact: i,
      children: (0, r.jsxs)("div", {
        className: l()(_.content, {
          [_.compact]: i
        }),
        children: [(0, r.jsx)(d.nD, {
          message: n,
          messageClassname: _.spanCorrection,
          className: l()(_.usernameContainer, _.spanCorrection, {
            [_.compact]: i
          }),
          username: (0, r.jsxs)("div", {
            className: _.spanCorrection,
            children: [(0, r.jsx)(a.Text, {
              variant: "text-md/normal",
              color: "text-brand",
              tag: "span",
              className: _.username,
              children: g.intl.string(g.t.hG1StL)
            }), (0, r.jsx)(s.Z, {
              type: f.Hb.SYSTEM_DM,
              className: _.systemTag
            })]
          }),
          compact: i,
          showTimestamp: true
        }), (0, r.jsx)("div", {
          className: l()(_.__invalid_messageContent, {
            [_.compact]: i
          }),
          children: g.intl.format(g.t.W0UBIy, {
            username: C.nick,
            usernameHook: v,
            guildName: null != (t = null == E ? true : E.name) ? t : ""
          })
        })]
      })
    })
  })
}