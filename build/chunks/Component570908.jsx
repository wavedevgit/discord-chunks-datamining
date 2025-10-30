/** Chunk was on web.js **/
/** chunk id: 570908, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk446215 = require("./446215.js");
let l = Chunk647438.forwardRef((e, t) => {
  let {
    muted: n = false,
    highlighted: i = false,
    avatar: a,
    decorators: l,
    name: c,
    subText: u,
    avatarClassName: d,
    innerClassName: f,
    withDisplayNameStyles: _ = false
  } = e;
  return (0, r.jsxs)("div", {
    ref: t,
    className: o()(s.layout, f, {
      [s.muted]: n,
      [s.highlighted]: i
    }),
    children: [(0, r.jsx)("div", {
      className: o()(s.avatar, d),
      children: a
    }), (0, r.jsxs)("div", {
      className: o()(s.content, {
        [s.withDisplayNameStyles]: _
      }),
      children: [(0, r.jsxs)("div", {
        className: s.nameAndDecorators,
        children: [(0, r.jsx)("div", {
          className: s.name,
          children: c
        }), l]
      }), null != u ? (0, r.jsx)("div", {
        className: s.subText,
        children: u
      }) : null]
    })]
  })
});
l.displayName = "AvatarWithText";
let c = l