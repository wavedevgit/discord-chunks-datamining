/** Chunk was on web.js **/
/** chunk id: 374558, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M0: () => f,
  YX: () => u
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk94321 = require("./94321.js");
let u = {
    TERTIARY: Chunk94321.tertiary,
    SECONDARY: Chunk94321.secondary,
    PRIMARY: Chunk94321.primary
  },
  d = {
    SIZE_24: Chunk94321.size24,
    SIZE_32: Chunk94321.size32,
    SIZE_36: Chunk94321.size36
  },
  f = Chunk473749.forwardRef(function(e, t) {
    let {
      className: n,
      tooltip: i,
      color: a,
      size: u = d.SIZE_32,
      icon: f,
      onMouseDown: p,
      onClick: _,
      disabled: m,
      focusProps: h
    } = e;
    return (0, r.jsx)(l.u, {
      asContainer: true,
      text: i,
      shouldShow: !m,
      children: (0, r.jsx)(s.P3F, {
        innerRef: t,
        "aria-label": i,
        "aria-disabled": m,
        className: o()(n, c.button, a, u, {
          [c.disabled]: m
        }),
        onMouseDown: p,
        onClick: e => {
          _(e)
        },
        focusProps: h,
        children: f
      })
    })
  })