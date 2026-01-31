/** Chunk was on web.js **/
/** chunk id: 262295, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk948651 = require("./948651.js");
let l = Chunk64700.forwardRef((e, t) => {
  let {
    muted: n = false,
    highlighted: i = false,
    avatar: a,
    decorators: l,
    name: c,
    subText: u,
    avatarClassName: d,
    innerClassName: f,
    withDisplayNameStyles: p = false
  } = e;
  return (0, r.jsxs)("div", {
    ref: t,
    className: o()(s.Zp, f, {
      [s.SU]: n,
      [s.mr]: i
    }),
    children: [(0, r.jsx)("div", {
      className: o()(s.my, d),
      children: a
    }), (0, r.jsxs)("div", {
      className: o()(s.Qs, {
        [s.e8]: p
      }),
      children: [(0, r.jsxs)("div", {
        className: s.BG,
        children: [(0, r.jsx)("div", {
          className: s.UU,
          children: c
        }), l]
      }), null != u ? (0, r.jsx)("div", {
        className: s.Sv,
        children: u
      }) : null]
    })]
  })
});
l.displayName = "AvatarWithText";
let c = l