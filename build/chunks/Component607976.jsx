/** Chunk was on 21738 **/
/** chunk id: 607976, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk886217 = require("./886217.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk104574 = require("./104574.js");

function c(e) {
  let {
    children: t,
    selectedSections: n = [],
    onSectionSelect: c,
    controls: u
  } = e, d = (0, a._B)(), p = 0 === n.length || n.length === d.length, f = i.useMemo(() => p ? "all" : 1 === n.length ? n[0] : "all", [n, p]);
  return (0, r.jsxs)("div", {
    className: o.kL,
    children: [(0, r.jsx)(l.Heading, {
      variant: "heading-xl/semibold",
      color: "text-strong",
      children: s.intl.string(s.t.BDUDau)
    }), (0, r.jsx)("div", {
      className: o.pf,
      children: u
    }), (0, r.jsxs)(l.VQ0, {
      type: "top",
      look: "brand",
      selectedItem: f,
      onItemSelect: e => {
        null == c || c(e)
      },
      children: [(0, r.jsx)(l.VQ0.Item, {
        id: "all",
        children: s.intl.string(s.t.Y9DnPa)
      }), d.map(e => (0, r.jsx)(l.VQ0.Item, {
        id: e.value,
        children: e.label
      }, e.value))]
    }), (0, r.jsx)("div", {
      className: o.tZ,
      children: (0, r.jsx)("div", {
        className: o.Qs,
        children: t
      })
    })]
  })
}