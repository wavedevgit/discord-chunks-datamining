/** Chunk was on web.js **/
/** chunk id: 27103, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk385499 = require("./385499.jsx"),
  Chunk739566 = require("./739566.js"),
  Chunk464891 = require("./464891.jsx"),
  Chunk83561 = require("./83561.jsx"),
  Chunk834129 = require("./834129.jsx"),
  Chunk674563 = require("./674563.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk682392 = require("./682392.js");

function m(e) {
  let {
    message: t,
    compact: n,
    usernameHook: i
  } = e, m = (0, l.ZP)(t), h = i(m), {
    avatarSrc: g,
    eventHandlers: {
      onMouseEnter: E,
      onMouseLeave: b
    }
  } = (0, u.m)(true);
  return (0, r.jsx)("div", {
    onMouseEnter: E,
    onMouseLeave: b,
    children: (0, r.jsx)(d.Z, {
      className: o()(_.mainContainer, {
        [_.compact]: n
      }),
      iconNode: n ? null : (0, r.jsx)(u.S, {
        src: g
      }),
      iconContainerClassName: _.iconContainer,
      compact: n,
      children: (0, r.jsxs)("div", {
        className: o()(_.content, {
          [_.compact]: n
        }),
        children: [(0, r.jsx)(c.nD, {
          message: t,
          messageClassname: _.spanCorrection,
          className: o()(_.usernameContainer, _.spanCorrection, {
            [_.compact]: n
          }),
          username: (0, r.jsxs)("div", {
            className: _.spanCorrection,
            children: [(0, r.jsx)(a.Text, {
              variant: "text-md/normal",
              color: "text-brand",
              tag: "span",
              className: _.username,
              children: p.intl.string(p.t.hG1StD)
            }), (0, r.jsx)(s.Z, {
              type: f.Hb.SYSTEM_DM,
              className: _.systemTag
            })]
          }),
          compact: n,
          showTimestamp: true
        }), (0, r.jsx)("div", {
          className: o()(_.__invalid_messageContent, {
            [_.compact]: n
          }),
          children: p.intl.format(p.t.qntXNQ, {
            username: m.nick,
            usernameHook: h
          })
        })]
      })
    })
  })
}