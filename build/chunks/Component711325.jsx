/** Chunk was on 65347 **/
/** chunk id: 711325, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk583901 = require("./583901.jsx"),
  Chunk780771 = require("./780771.js"),
  Chunk981631 = require("./981631.js"),
  Chunk606502 = require("./606502.js");

function d(e) {
  let {
    selected: t,
    onSelect: n
  } = e, d = (0, i.ZP)();
  return (0, a.jsxs)("div", {
    className: c.picker,
    children: [(0, a.jsx)(l.Text, {
      variant: "text-sm/semibold",
      children: "Preselected Gradient"
    }), (0, a.jsx)("div", {
      className: c.themes,
      children: s.vs.map(e => {
        let l = d !== o.BRd.LIGHT ? e.darkBackground : e.lightBackground,
          i = t === e.name;
        return (0, a.jsx)(r.S4, {
          onSelect: () => n(e),
          style: {
            background: l
          },
          name: e.name,
          isSelected: i
        }, e.name)
      })
    })]
  })
}