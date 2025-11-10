/** Chunk was on 63141 **/
/** chunk id: 212632, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk379249 = require("./379249.js"),
  Chunk197571 = require("./197571.js");
let p = 0,
  h = e => {
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
  f = [Chunk981631._vf.DISABLED, Chunk981631._vf.TOP_LEFT, Chunk981631._vf.TOP_RIGHT, Chunk981631._vf.BOTTOM_LEFT, Chunk981631._vf.BOTTOM_RIGHT];

function g(e) {
  let {
    position: t,
    onChange: n
  } = e, [s] = r.useState(() => "notification-position-selector-".concat(p++)), g = t === a._vf.DISABLED ? c.intl.string(c.t.R6LxVf) : c.intl.formatToPlainString(c.t["XXHDM/"], {
    position: h(t)
  });
  return (0, i.jsxs)("div", {
    children: [(0, i.jsx)(l.tEY, {
      within: true,
      offset: false,
      children: (0, i.jsx)("div", {
        className: o()(d.wrapper, {
          [d.disabledSelected]: t === a._vf.DISABLED
        }),
        children: f.map(e => (0, i.jsxs)("label", {
          className: o()({
            [d.selected]: e === t,
            [d.disabled]: e === a._vf.DISABLED,
            [d.topRight]: e === a._vf.TOP_RIGHT,
            [d.topLeft]: e === a._vf.TOP_LEFT,
            [d.bottomRight]: e === a._vf.BOTTOM_RIGHT,
            [d.bottomLeft]: e === a._vf.BOTTOM_LEFT
          }),
          children: [h(e), e === a._vf.DISABLED ? (0, i.jsx)(l.t6m, {
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