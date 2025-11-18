/** Chunk was on web.js **/
/** chunk id: 374558, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M0: () => f,
  YX: () => u,
  tT: () => d
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk390756 = require("./390756.js");
let u = {
    TERTIARY: Chunk390756.tertiary,
    SECONDARY: Chunk390756.secondary,
    PRIMARY: Chunk390756.primary
  },
  d = {
    SIZE_24: Chunk390756.size24,
    SIZE_32: Chunk390756.size32,
    SIZE_36: Chunk390756.size36
  },
  f = Chunk473749.forwardRef(function(e, t) {
    let {
      className: n,
      tooltip: i,
      color: a,
      size: u = d.SIZE_32,
      icon: f,
      onMouseDown: _,
      onClick: p,
      disabled: h,
      focusProps: m
    } = e;
    return (0, r.jsx)(l.u, {
      asContainer: true,
      text: i,
      shouldShow: !h,
      children: (0, r.jsx)(s.P3F, {
        innerRef: t,
        "aria-label": i,
        "aria-disabled": h,
        className: o()(n, c.button, a, u, {
          [c.disabled]: h
        }),
        onMouseDown: _,
        onClick: e => {
          p(e)
        },
        focusProps: m,
        children: f
      })
    })
  })