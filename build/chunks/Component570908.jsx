/** Chunk was on web.js **/
/** chunk id: 570908, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk226462 = require("./226462.js");
let l = Chunk473749.forwardRef((e, t) => {
  let {
    muted: n = false,
    highlighted: i = false,
    avatar: a,
    decorators: l,
    rightDecorators: c,
    name: u,
    subText: d,
    avatarClassName: f,
    innerClassName: p,
    nameClassName: _,
    subtextClassName: h,
    withDisplayNameStyles: m = false
  } = e;
  return (0, r.jsxs)("div", {
    ref: t,
    className: o()(s.layout, p, {
      [s.muted]: n,
      [s.highlighted]: i,
      [s.fullWidth]: null != c
    }),
    children: [(0, r.jsx)("div", {
      className: o()(s.avatar, f),
      children: a
    }), (0, r.jsxs)("div", {
      className: o()(s.content, {
        [s.withDisplayNameStyles]: m
      }),
      children: [(0, r.jsxs)("div", {
        className: s.nameAndDecorators,
        children: [(0, r.jsxs)("div", {
          className: s.leftName,
          children: [(0, r.jsx)("div", {
            className: o()(s.name, _),
            children: u
          }), l]
        }), c]
      }), null != d ? (0, r.jsx)("div", {
        className: o()(s.subText, h),
        children: d
      }) : null]
    })]
  })
});
l.displayName = "AvatarWithText";
let c = l