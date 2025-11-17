/** Chunk was on 63141 **/
/** chunk id: 212632, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk379249 = require("./379249.js"),
  Chunk197571 = require("./197571.js");
let h = 0,
  p = e => {
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
  } = e, [o] = r.useState(() => "notification-position-selector-".concat(h++)), g = t === a._vf.DISABLED ? c.intl.string(c.t.R6LxVf) : c.intl.formatToPlainString(c.t["XXHDM/"], {
    position: p(t)
  });
  return (0, i.jsxs)("div", {
    children: [(0, i.jsx)(s.tEY, {
      within: true,
      offset: false,
      children: (0, i.jsx)("div", {
        className: l()(d.wrapper, {
          [d.disabledSelected]: t === a._vf.DISABLED
        }),
        children: f.map(e => (0, i.jsxs)("label", {
          className: l()({
            [d.selected]: e === t,
            [d.disabled]: e === a._vf.DISABLED,
            [d.topRight]: e === a._vf.TOP_RIGHT,
            [d.topLeft]: e === a._vf.TOP_LEFT,
            [d.bottomRight]: e === a._vf.BOTTOM_RIGHT,
            [d.bottomLeft]: e === a._vf.BOTTOM_LEFT
          }),
          children: [p(e), e === a._vf.DISABLED ? (0, i.jsx)(s.t6m, {
            size: "md",
            color: "currentColor",
            className: d.disabledIcon
          }) : null, (0, i.jsx)("input", {
            type: "radio",
            name: o,
            value: e,
            onChange: t => n(t, e),
            className: d.hiddenInput
          })]
        }, e))
      })
    }), (0, i.jsx)(s.Text, {
      variant: "text-sm/normal",
      className: u.marginTop8,
      children: g
    })]
  })
}
g.Positions = Chunk981631._vf;
let m = g