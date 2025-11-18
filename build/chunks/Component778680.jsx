/** Chunk was on 1272 **/
/** chunk id: 778680, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk751586 = require("./751586.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk807231 = require("./807231.js");

function c(e) {
  let {
    children: t,
    selectedSections: n = [],
    onSectionSelect: c,
    controls: u
  } = e, d = (0, a.Ui)(), p = 0 === n.length || n.length === d.length, f = i.useMemo(() => p ? "all" : 1 === n.length ? n[0] : "all", [n, p]);
  return (0, r.jsxs)("div", {
    className: o.container,
    children: [(0, r.jsx)(l.Heading, {
      variant: "heading-xl/semibold",
      color: "header-primary",
      children: s.intl.string(s.t.BDUDau)
    }), (0, r.jsx)("div", {
      className: o.controlsBarContainer,
      children: u
    }), (0, r.jsxs)(l.njP, {
      type: "top",
      look: "brand",
      selectedItem: f,
      onItemSelect: e => {
        null == c || c(e)
      },
      children: [(0, r.jsx)(l.njP.Item, {
        id: "all",
        children: s.intl.string(s.t.Y9DnPa)
      }), d.map(e => (0, r.jsx)(l.njP.Item, {
        id: e.value,
        children: e.label
      }, e.value))]
    }), (0, r.jsx)("div", {
      className: o.contentArea,
      children: (0, r.jsx)("div", {
        className: o.content,
        children: t
      })
    })]
  })
}