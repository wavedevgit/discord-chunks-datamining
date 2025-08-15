/** Chunk was on 30202 **/
/** chunk id: 711325, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk583901 = require("./583901.jsx"),
  Chunk780771 = require("./780771.js"),
  Chunk981631 = require("./981631.js"),
  Chunk407304 = require("./407304.js");

function d(e) {
  let {
    selected: t,
    onSelect: n
  } = e, d = (0, s.ZP)();
  return (0, i.jsxs)("div", {
    className: c.picker,
    children: [(0, i.jsx)(r.Text, {
      variant: "text-sm/semibold",
      children: "Preselected Gradient"
    }), (0, i.jsx)("div", {
      className: c.themes,
      children: l.vs.map(e => {
        let r = d !== o.BRd.LIGHT ? e.darkBackground : e.lightBackground,
          s = t === e.name;
        return (0, i.jsx)(a.S4, {
          onSelect: () => n(e),
          style: {
            background: r
          },
          name: e.name,
          isSelected: s
        }, e.name)
      })
    })]
  })
}