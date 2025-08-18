/** Chunk was on 91173 **/
/** chunk id: 27103, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk385499 = require("./385499.jsx"),
  Chunk739566 = require("./739566.js"),
  Chunk464891 = require("./464891.jsx"),
  Chunk83561 = require("./83561.jsx"),
  Chunk834129 = require("./834129.jsx"),
  Chunk674563 = require("./674563.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk682392 = require("./682392.js");

function _(e) {
  let {
    message: t,
    compact: n,
    usernameHook: i
  } = e, _ = (0, s.ZP)(t), g = i(_), {
    avatarSrc: h,
    eventHandlers: {
      onMouseEnter: b,
      onMouseLeave: E
    }
  } = (0, u.m)(true);
  return (0, r.jsx)("div", {
    onMouseEnter: b,
    onMouseLeave: E,
    children: (0, r.jsx)(d.Z, {
      className: l()(f.mainContainer, {
        [f.compact]: n
      }),
      iconNode: n ? null : (0, r.jsx)(u.S, {
        src: h
      }),
      iconContainerClassName: f.iconContainer,
      compact: n,
      children: (0, r.jsxs)("div", {
        className: l()(f.content, {
          [f.compact]: n
        }),
        children: [(0, r.jsx)(c.nD, {
          message: t,
          messageClassname: f.spanCorrection,
          className: l()(f.usernameContainer, f.spanCorrection, {
            [f.compact]: n
          }),
          username: (0, r.jsxs)("div", {
            className: f.spanCorrection,
            children: [(0, r.jsx)(a.Text, {
              variant: "text-md/normal",
              color: "text-brand",
              tag: "span",
              className: f.username,
              children: m.intl.string(m.t.hG1StL)
            }), (0, r.jsx)(o.Z, {
              type: p.Hb.SYSTEM_DM,
              className: f.systemTag
            })]
          }),
          compact: n,
          showTimestamp: true
        }), (0, r.jsx)("div", {
          className: l()(f.__invalid_messageContent, {
            [f.compact]: n
          }),
          children: m.intl.format(m.t.qntXNT, {
            username: _.nick,
            usernameHook: g
          })
        })]
      })
    })
  })
}