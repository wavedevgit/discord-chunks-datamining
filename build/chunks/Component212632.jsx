/** Chunk was on 63141 **/
/** chunk id: 212632, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk856907 = require("./856907.js"),
  Chunk478411 = require("./478411.js");
let h = 0,
  f = e => {
    switch (e) {
      case a._vf.TOP_LEFT:
        return c.intl.string(c.t.xlchpU);
      case a._vf.TOP_RIGHT:
        return c.intl.string(c.t["4uHRHH"]);
      case a._vf.BOTTOM_LEFT:
        return c.intl.string(c.t.ovWFnD);
      case a._vf.BOTTOM_RIGHT:
        return c.intl.string(c.t["M/9V75"]);
      default:
        return c.intl.string(c.t.AlY4Za)
    }
  },
  p = [Chunk981631._vf.DISABLED, Chunk981631._vf.TOP_LEFT, Chunk981631._vf.TOP_RIGHT, Chunk981631._vf.BOTTOM_LEFT, Chunk981631._vf.BOTTOM_RIGHT];

function g(e) {
  let {
    position: t,
    onChange: n
  } = e, [s] = r.useState(() => "notification-position-selector-".concat(h++)), g = t === a._vf.DISABLED ? c.intl.string(c.t.R6LxVf) : c.intl.formatToPlainString(c.t["XXHDM/"], {
    position: f(t)
  });
  return (0, i.jsxs)("div", {
    children: [(0, i.jsx)(l.tEY, {
      within: true,
      offset: false,
      children: (0, i.jsx)("div", {
        className: o()(d.wrapper, {
          [d.disabledSelected]: t === a._vf.DISABLED
        }),
        children: p.map(e => (0, i.jsxs)("label", {
          className: o()({
            [d.selected]: e === t,
            [d.disabled]: e === a._vf.DISABLED,
            [d.topRight]: e === a._vf.TOP_RIGHT,
            [d.topLeft]: e === a._vf.TOP_LEFT,
            [d.bottomRight]: e === a._vf.BOTTOM_RIGHT,
            [d.bottomLeft]: e === a._vf.BOTTOM_LEFT
          }),
          children: [f(e), e === a._vf.DISABLED ? (0, i.jsx)(l.t6m, {
            size: "md",
            color: "currentColor",
            className: d.disabledIcon
          }) : null, (0, i.jsx)("input", {
            type: "radio",
            name: s,
            value: e,
            onChange: t => n(t, e),
            className: d.hiddenInput
          })]
        }, e))
      })
    }), (0, i.jsx)(l.Text, {
      variant: "text-sm/normal",
      className: u.marginTop8,
      children: g
    })]
  })
}
g.Positions = Chunk981631._vf;
let m = g