/** Chunk was on 84018 **/
/** chunk id: 499820, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => y
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk291358 = require("./291358.js"),
  Chunk473169 = require("./473169.js");
let p = 0,
  h = e => {
    switch (e) {
      case a.G6Q.TOP_LEFT:
        return c.intl.string(c.t.xlchpU);
      case a.G6Q.TOP_RIGHT:
        return c.intl.string(c.t["4uHRHH"]);
      case a.G6Q.BOTTOM_LEFT:
        return c.intl.string(c.t.ovWFnD);
      case a.G6Q.BOTTOM_RIGHT:
        return c.intl.string(c.t["M/9V75"]);
      default:
        return c.intl.string(c.t.AlY4Za)
    }
  },
  f = [Chunk652215.G6Q.DISABLED, Chunk652215.G6Q.TOP_LEFT, Chunk652215.G6Q.TOP_RIGHT, Chunk652215.G6Q.BOTTOM_LEFT, Chunk652215.G6Q.BOTTOM_RIGHT];

function g(e) {
  let {
    position: t,
    onChange: n
  } = e, [s] = r.useState(() => "notification-position-selector-".concat(p++)), g = t === a.G6Q.DISABLED ? c.intl.string(c.t.R6LxVf) : c.intl.formatToPlainString(c.t["XXHDM/"], {
    position: h(t)
  });
  return (0, i.jsxs)("div", {
    children: [(0, i.jsx)(o.vN3, {
      within: true,
      offset: false,
      children: (0, i.jsx)("div", {
        className: l()(d.iE, {
          [d.wX]: t === a.G6Q.DISABLED
        }),
        children: f.map(e => (0, i.jsxs)("label", {
          className: l()({
            [d.wH]: e === t,
            [d.r9]: e === a.G6Q.DISABLED,
            [d.O3]: e === a.G6Q.TOP_RIGHT,
            [d.lA]: e === a.G6Q.TOP_LEFT,
            [d.oF]: e === a.G6Q.BOTTOM_RIGHT,
            [d.RV]: e === a.G6Q.BOTTOM_LEFT
          }),
          children: [h(e), e === a.G6Q.DISABLED ? (0, i.jsx)(o.KTN, {
            size: "md",
            color: "currentColor",
            className: d.WO
          }) : null, (0, i.jsx)("input", {
            type: "radio",
            name: s,
            value: e,
            onChange: t => n(t, e),
            className: d.hH
          })]
        }, e))
      })
    }), (0, i.jsx)(o.Text, {
      variant: "text-sm/normal",
      className: u.Ot,
      children: g
    })]
  })
}
g.Positions = Chunk652215.G6Q;
let y = g