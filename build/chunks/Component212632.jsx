/** Chunk was on 75708 **/
/** chunk id: 212632, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk937848 = require("./937848.js"),
  Chunk20493 = require("./20493.js");
let m = 0,
  p = () => "notification-position-selector-".concat(m++),
  g = e => {
    switch (e) {
      case o._vf.TOP_LEFT:
        return c.intl.string(c.t.xlchpa);
      case o._vf.TOP_RIGHT:
        return c.intl.string(c.t["4uHRHB"]);
      case o._vf.BOTTOM_LEFT:
        return c.intl.string(c.t.ovWFnJ);
      case o._vf.BOTTOM_RIGHT:
        return c.intl.string(c.t["M/9V7+"]);
      default:
        return c.intl.string(c.t.AlY4ZW)
    }
  },
  h = [Chunk981631._vf.DISABLED, Chunk981631._vf.TOP_LEFT, Chunk981631._vf.TOP_RIGHT, Chunk981631._vf.BOTTOM_LEFT, Chunk981631._vf.BOTTOM_RIGHT];

function f(e) {
  let {
    position: t,
    onChange: n
  } = e, [s] = r.useState(() => p()), m = t === o._vf.DISABLED ? c.intl.string(c.t.R6LxVV) : c.intl.formatToPlainString(c.t.XXHDMz, {
    position: g(t)
  });
  return (0, i.jsxs)("div", {
    children: [(0, i.jsx)(l.tEY, {
      within: true,
      offset: false,
      children: (0, i.jsx)("div", {
        className: a()(d.wrapper, {
          [d.disabledSelected]: t === o._vf.DISABLED
        }),
        children: h.map(e => (0, i.jsxs)("label", {
          className: a()({
            [d.selected]: e === t,
            [d.disabled]: e === o._vf.DISABLED,
            [d.topRight]: e === o._vf.TOP_RIGHT,
            [d.topLeft]: e === o._vf.TOP_LEFT,
            [d.bottomRight]: e === o._vf.BOTTOM_RIGHT,
            [d.bottomLeft]: e === o._vf.BOTTOM_LEFT
          }),
          children: [g(e), e === o._vf.DISABLED ? (0, i.jsx)(l.t6m, {
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
    }), (0, i.jsx)(l.R94, {
      type: l.geA.DESCRIPTION,
      className: u.marginTop8,
      children: m
    })]
  })
}
f.Positions = Chunk981631._vf;
let b = f