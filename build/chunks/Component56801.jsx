/** Chunk was on web.js **/
/** chunk id: 56801, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk806966 = require("./806966.js"),
  Chunk254494 = require("./254494.jsx"),
  Chunk895924 = require("./895924.js"),
  Chunk826298 = require("./826298.js"),
  Chunk65573 = require("./65573.js");
let _ = [16, 8, 8, 8],
  m = 32,
  h = 4,
  g = 8;

function E(e) {
  let {
    className: t,
    channel: n,
    sections: o,
    activeCategoryIndex: E,
    filteredSectionId: b,
    onSectionClick: y,
    applicationCommandListRef: O
  } = e, v = i.useRef(null), S = i.useCallback((e, t) => {
    var n;
    let r = 2 * h;
    return (null == (n = o[t + 1]) ? true : n.type) === d.Qi.BUILT_IN && (r += g), m + r
  }, [o]), I = i.useCallback((e, t) => {
    var n;
    return t ? (null == (n = o[e + 1]) ? true : n.type) === d.Qi.BUILT_IN ? 0 : 2 * h : 0 === e ? 0 : 2 * h
  }, [o]), T = i.useCallback((e, t) => {
    let i = o[t];
    if (null == i) return;
    let a = (0, f.ky)(i),
      c = i.type === d.Qi.BUILT_IN ? h : 0,
      u = m - 2 * c,
      _ = (0, r.jsx)(a, {
        channel: n,
        section: i,
        isSelected: null != b ? i.id === b : E === t,
        padding: c,
        width: u,
        height: u,
        selectable: true
      }),
      g = i.type !== d.Qi.BUILT_IN && t < o.length - 1 && o[t + 1].type === d.Qi.BUILT_IN;
    return (0, r.jsxs)("div", {
      className: p.section,
      children: [(0, r.jsx)(s.u, {
        text: i.name,
        position: "right",
        asContainer: true,
        children: (0, r.jsx)(l.P3F, {
          "aria-label": i.name,
          onClick: () => {
            y(i)
          },
          children: _
        })
      }), g ? (0, r.jsx)("hr", {
        className: p.builtInSeparator
      }) : null]
    }, i.id)
  }, [E, n, y, o, b]);
  return 0 === o.length ? null : (0, r.jsx)("div", {
    className: a()(t, p.wrapper),
    children: (0, r.jsx)(u.Z, {
      categoryListRef: v,
      expressionsListRef: O,
      store: c.Xn,
      categories: o,
      className: p.list,
      renderCategoryListItem: T,
      rowCount: o.length,
      categoryHeight: S,
      listPadding: _,
      getScrollOffsetForIndex: I
    })
  })
}