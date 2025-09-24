/** Chunk was on web.js **/
/** chunk id: 778680, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk751586 = require("./751586.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk473846 = require("./473846.js");

function c(e) {
  let {
    children: t,
    selectedSections: n = [],
    onSectionSelect: c,
    controls: u
  } = e, d = (0, o.Ui)(), f = 0 === n.length || n.length === d.length, _ = i.useMemo(() => f ? "all" : 1 === n.length ? n[0] : "all", [n, f]), p = e => {
    null == c || c(e)
  };
  return (0, r.jsxs)("div", {
    className: l.container,
    children: [(0, r.jsx)(a.X6q, {
      variant: "heading-xl/semibold",
      color: "header-primary",
      children: s.intl.string(s.t.BDUDam)
    }), (0, r.jsx)("div", {
      className: l.controlsBarContainer,
      children: u
    }), (0, r.jsxs)(a.njP, {
      type: "top",
      look: "brand",
      selectedItem: _,
      onItemSelect: p,
      children: [(0, r.jsx)(a.njP.Item, {
        id: "all",
        children: s.intl.string(s.t.Y9DnPT)
      }), d.map(e => (0, r.jsx)(a.njP.Item, {
        id: e.value,
        children: e.label
      }, e.value))]
    }), (0, r.jsx)("div", {
      className: l.contentArea,
      children: (0, r.jsx)("div", {
        className: l.content,
        children: t
      })
    })]
  })
}