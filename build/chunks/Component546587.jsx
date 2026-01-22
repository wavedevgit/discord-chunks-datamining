/** Chunk was on web.js **/
/** chunk id: 546587, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => E
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk850992 = require("./850992.js"),
  Chunk802019 = require("./802019.jsx"),
  Chunk392054 = require("./392054.js"),
  Chunk664929 = require("./664929.js"),
  Chunk681755 = require("./681755.js");
let _ = [16, 8, 8, 8],
  h = 32,
  m = 4,
  g = 8;

function E(e) {
  let {
    className: t,
    channel: n,
    sections: a,
    activeCategoryIndex: E,
    filteredSectionId: b,
    onSectionClick: y,
    applicationCommandListRef: O
  } = e, A = i.useRef(null), v = i.useCallback((e, t) => {
    var n;
    let r = 2 * m;
    return (null == (n = a[t + 1]) ? true : n.type) === d.Hf.BUILT_IN && (r += g), h + r
  }, [a]), S = i.useCallback((e, t) => {
    var n;
    return t ? (null == (n = a[e + 1]) ? true : n.type) === d.Hf.BUILT_IN ? 0 : 2 * m : 0 === e ? 0 : 2 * m
  }, [a]), I = i.useCallback((e, t) => {
    let i = a[t];
    if (null == i) return;
    let s = (0, f.Rg)(i),
      c = i.type === d.Hf.BUILT_IN ? m : 0,
      u = h - 2 * c,
      _ = (0, r.jsx)(s, {
        channel: n,
        section: i,
        isSelected: null != b ? i.id === b : E === t,
        padding: c,
        width: u,
        height: u,
        selectable: true
      }),
      g = i.type !== d.Hf.BUILT_IN && t < a.length - 1 && a[t + 1].type === d.Hf.BUILT_IN;
    return (0, r.jsxs)("div", {
      className: p.uW,
      children: [(0, r.jsx)(o.m, {
        text: i.name,
        position: "right",
        asContainer: true,
        children: (0, r.jsx)(l.DUT, {
          "aria-label": i.name,
          onClick: () => {
            y(i)
          },
          children: _
        })
      }), g ? (0, r.jsx)("hr", {
        className: p.zQ
      }) : null]
    }, i.id)
  }, [E, n, y, a, b]);
  return 0 === a.length ? null : (0, r.jsx)("div", {
    className: s()(t, p.iE),
    children: (0, r.jsx)(u.A, {
      categoryListRef: A,
      expressionsListRef: O,
      store: c.LS,
      categories: a,
      className: p.p_,
      renderCategoryListItem: I,
      rowCount: a.length,
      categoryHeight: v,
      listPadding: _,
      getScrollOffsetForIndex: S
    })
  })
}