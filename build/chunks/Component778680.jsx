/** Chunk was on web.js **/
/** chunk id: 778680, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk751586 = require("./751586.jsx"),
  Chunk473846 = require("./473846.js");

function l(e) {
  let {
    children: t,
    selectedSections: n = [],
    onSectionSelect: l,
    controls: c
  } = e, u = 0 === n.length || n.length === o.Tl.length, d = i.useMemo(() => u ? "all" : 1 === n.length ? n[0] : "all", [n, u]), f = e => {
    null == l || l(e)
  };
  return (0, r.jsxs)("div", {
    className: s.container,
    children: [(0, r.jsx)("div", {
      className: s.controlsBarContainer,
      children: c
    }), (0, r.jsxs)(a.njP, {
      type: "top",
      look: "brand",
      selectedItem: d,
      onItemSelect: f,
      className: s.tabBar,
      children: [(0, r.jsx)(a.njP.Item, {
        id: "all",
        children: "All Sections"
      }), o.Tl.map(e => (0, r.jsx)(a.njP.Item, {
        id: e.value,
        children: e.label
      }, e.value))]
    }), (0, r.jsx)("div", {
      className: s.contentArea,
      children: (0, r.jsx)("div", {
        className: s.content,
        children: t
      })
    })]
  })
}