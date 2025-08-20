/** Chunk was on web.js **/
/** chunk id: 711325, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk583901 = require("./583901.jsx"),
  Chunk780771 = require("./780771.js"),
  Chunk981631 = require("./981631.js"),
  Chunk407304 = require("./407304.js");

function u(e) {
  let {
    selected: t,
    onSelect: n
  } = e, u = (0, a.ZP)();
  return (0, r.jsxs)("div", {
    className: c.picker,
    children: [(0, r.jsx)(i.Text, {
      variant: "text-sm/semibold",
      children: "Preselected Gradient"
    }), (0, r.jsx)("div", {
      className: c.themes,
      children: s.vs.map(e => {
        let i = u !== l.BRd.LIGHT ? e.darkBackground : e.lightBackground,
          a = t === e.name;
        return (0, r.jsx)(o.S4, {
          onSelect: () => n(e),
          style: {
            background: i
          },
          name: e.name,
          isSelected: a
        }, e.name)
      })
    })]
  })
}