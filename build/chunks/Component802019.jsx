/** Chunk was on web.js **/
/** chunk id: 802019, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk962125 = require("./962125.jsx"),
  Chunk151271 = require("./151271.js"),
  Chunk652215 = require("./652215.js"),
  Chunk103551 = require("./103551.js");
let d = e => {
    let {
      activeIndex: t,
      categoryListRef: n,
      getScrollOffsetForIndex: r
    } = e, a = i.useRef(c.An1), s = i.useRef(t);
    return i.useEffect(() => {
      null != t && t !== s.current && (a.current !== c.An1 && window.cancelAnimationFrame(a.current), a.current = window.requestAnimationFrame(() => {
        var e;
        if (null == n.current) return;
        let i = t > (null != (e = s.current) ? e : false),
          o = null != r ? r(t, i) : 0;
        n.current.scrollRowIntoView(t, {
          animate: true,
          offset: o
        }), a.current = c.An1, s.current = t
      }))
    }, [t, n, r]), {
      categoryListRef: n
    }
  },
  f = function(e) {
    let {
      categoryListRef: t,
      expressionsListRef: n,
      categories: a,
      store: c,
      children: f,
      className: p,
      listPadding: _,
      rowCount: h,
      getScrollOffsetForIndex: m,
      categoryHeight: g,
      onScroll: E,
      renderCategoryListItem: y,
      rowCountBySection: b,
      renderSection: O
    } = e, v = c.useStore(e => e.activeCategoryIndex);
    d({
      activeIndex: v,
      categoryListRef: t,
      getScrollOffsetForIndex: m
    });
    let A = i.useCallback(e => {
        let {
          searchQuery: t
        } = l.RQ.getState();
        if (c.setActiveCategoryIndex(e), "" !== t)(0, l.Ri)("");
        else {
          var r;
          null == (r = n.current) || r.scrollToSectionTop(e)
        }
      }, [n, c]),
      I = i.useCallback(e => y(a[e], e, () => A(e), v === e), [v, a, A, y]),
      S = i.useMemo(() => "function" == typeof g ? e => g(a[e], e) : g, [a, g]);
    return (0, r.jsxs)("div", {
      className: s()(u.i, p),
      children: [(0, r.jsx)(o.A, {
        listPadding: _,
        onScroll: E,
        ref: t,
        renderRow: I,
        rowCount: h,
        rowHeight: S,
        hideScrollbar: true,
        rowCountBySection: b,
        renderSection: O
      }), null == f ? true : f(A)]
    })
  }