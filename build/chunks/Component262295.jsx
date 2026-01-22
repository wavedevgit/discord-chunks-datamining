/** Chunk was on web.js **/
/** chunk id: 262295, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk948651 = require("./948651.js");
let l = Chunk64700.forwardRef((e, t) => {
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
    className: s()(o.Zp, p, {
      [o.SU]: n,
      [o.mr]: i,
      [o.Ij]: null != c
    }),
    children: [(0, r.jsx)("div", {
      className: s()(o.my, f),
      children: a
    }), (0, r.jsxs)("div", {
      className: s()(o.Qs, {
        [o.e8]: m
      }),
      children: [(0, r.jsxs)("div", {
        className: o.BG,
        children: [(0, r.jsxs)("div", {
          className: o.R1,
          children: [(0, r.jsx)("div", {
            className: s()(o.UU, _),
            children: u
          }), l]
        }), c]
      }), null != d ? (0, r.jsx)("div", {
        className: s()(o.Sv, h),
        children: d
      }) : null]
    })]
  })
});
l.displayName = "AvatarWithText";
let c = l