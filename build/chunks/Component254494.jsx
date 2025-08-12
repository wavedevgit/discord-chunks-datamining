/** Chunk was on web.js **/
/** chunk id: 254494, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk218867 = require("./218867.jsx"),
  Chunk28546 = require("./28546.js"),
  Chunk981631 = require("./981631.js"),
  Chunk343950 = require("./343950.js");
let d = e => {
    let {
      activeIndex: t,
      categoryListRef: n,
      getScrollOffsetForIndex: r
    } = e, o = i.useRef(c.xAR), a = i.useRef(t);
    return i.useEffect(() => {
      null != t && t !== a.current && (o.current !== c.xAR && window.cancelAnimationFrame(o.current), o.current = window.requestAnimationFrame(() => {
        var e;
        if (null == n.current) return;
        let i = t > (null != (e = a.current) ? e : false),
          s = null != r ? r(t, i) : 0;
        n.current.scrollRowIntoView(t, {
          animate: true,
          offset: s
        }), o.current = c.xAR, a.current = t
      }))
    }, [t, n, r]), {
      categoryListRef: n
    }
  },
  f = function(e) {
    let {
      categoryListRef: t,
      expressionsListRef: n,
      categories: o,
      store: c,
      children: f,
      className: _,
      listPadding: p,
      rowCount: h,
      getScrollOffsetForIndex: m,
      categoryHeight: g,
      onScroll: E,
      renderCategoryListItem: b,
      rowCountBySection: y,
      renderSection: O
    } = e, v = c.useStore(e => e.activeCategoryIndex);
    d({
      activeIndex: v,
      categoryListRef: t,
      getScrollOffsetForIndex: m
    });
    let I = i.useCallback(e => {
        let {
          searchQuery: t
        } = l.Iu.getState();
        if (c.setActiveCategoryIndex(e), "" !== t)(0, l.ql)("");
        else {
          var r;
          null == (r = n.current) || r.scrollToSectionTop(e)
        }
      }, [n, c]),
      T = i.useCallback(e => b(o[e], e, () => I(e), v === e), [v, o, I, b]),
      S = i.useMemo(() => "function" == typeof g ? e => g(o[e], e) : g, [o, g]);
    return (0, r.jsxs)("div", {
      className: a()(u.wrapper, _),
      children: [(0, r.jsx)(s.Z, {
        listPadding: p,
        onScroll: E,
        ref: t,
        renderRow: T,
        rowCount: h,
        rowHeight: S,
        hideScrollbar: true,
        rowCountBySection: y,
        renderSection: O
      }), null == f ? true : f(I)]
    })
  }