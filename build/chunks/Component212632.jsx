/** Chunk was on web.js **/
/** chunk id: 212632, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk379249 = require("./379249.js"),
  Chunk197571 = require("./197571.js");
let f = 0,
  _ = () => "notification-position-selector-".concat(f++),
  p = e => {
    switch (e) {
      case l._vf.TOP_LEFT:
        return c.intl.string(c.t.xlchpa);
      case l._vf.TOP_RIGHT:
        return c.intl.string(c.t["4uHRHB"]);
      case l._vf.BOTTOM_LEFT:
        return c.intl.string(c.t.ovWFnJ);
      case l._vf.BOTTOM_RIGHT:
        return c.intl.string(c.t["M/9V7+"]);
      default:
        return c.intl.string(c.t.AlY4ZW)
    }
  },
  h = [Chunk981631._vf.DISABLED, Chunk981631._vf.TOP_LEFT, Chunk981631._vf.TOP_RIGHT, Chunk981631._vf.BOTTOM_LEFT, Chunk981631._vf.BOTTOM_RIGHT];

function m(e) {
  let {
    position: t,
    onChange: n
  } = e, [o] = i.useState(() => _()), f = t === l._vf.DISABLED ? c.intl.string(c.t.R6LxVV) : c.intl.formatToPlainString(c.t.XXHDMz, {
    position: p(t)
  });
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(s.tEY, {
      within: true,
      offset: false,
      children: (0, r.jsx)("div", {
        className: a()(u.wrapper, {
          [u.disabledSelected]: t === l._vf.DISABLED
        }),
        children: h.map(e => (0, r.jsxs)("label", {
          className: a()({
            [u.selected]: e === t,
            [u.disabled]: e === l._vf.DISABLED,
            [u.topRight]: e === l._vf.TOP_RIGHT,
            [u.topLeft]: e === l._vf.TOP_LEFT,
            [u.bottomRight]: e === l._vf.BOTTOM_RIGHT,
            [u.bottomLeft]: e === l._vf.BOTTOM_LEFT
          }),
          children: [p(e), e === l._vf.DISABLED ? (0, r.jsx)(s.t6m, {
            size: "md",
            color: "currentColor",
            className: u.disabledIcon
          }) : null, (0, r.jsx)("input", {
            type: "radio",
            name: o,
            value: e,
            onChange: t => n(t, e),
            className: u.hiddenInput
          })]
        }, e))
      })
    }), (0, r.jsx)(s.R94, {
      type: s.geA.DESCRIPTION,
      className: d.marginTop8,
      children: f
    })]
  })
}
m.Positions = Chunk981631._vf;
let g = m