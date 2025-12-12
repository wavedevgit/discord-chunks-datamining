/** Chunk was on web.js **/
/** chunk id: 254494, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk218867 = require("./218867.jsx"),
  Chunk28546 = require("./28546.js"),
  Chunk981631 = require("./981631.js"),
  Chunk111437 = require("./111437.js");
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
      className: p,
      listPadding: _,
      rowCount: m,
      getScrollOffsetForIndex: h,
      categoryHeight: g,
      onScroll: E,
      renderCategoryListItem: b,
      rowCountBySection: y,
      renderSection: O
    } = e, v = c.useStore(e => e.activeCategoryIndex);
    d({
      activeIndex: v,
      categoryListRef: t,
      getScrollOffsetForIndex: h
    });
    let S = i.useCallback(e => {
        let {
          searchQuery: t
        } = l.Iu.getState();
        if (c.setActiveCategoryIndex(e), "" !== t)(0, l.ql)("");
        else {
          var r;
          null == (r = n.current) || r.scrollToSectionTop(e)
        }
      }, [n, c]),
      I = i.useCallback(e => b(o[e], e, () => S(e), v === e), [v, o, S, b]),
      T = i.useMemo(() => "function" == typeof g ? e => g(o[e], e) : g, [o, g]);
    return (0, r.jsxs)("div", {
      className: a()(u.wrapper, p),
      children: [(0, r.jsx)(s.Z, {
        listPadding: _,
        onScroll: E,
        ref: t,
        renderRow: I,
        rowCount: m,
        rowHeight: T,
        hideScrollbar: true,
        rowCountBySection: y,
        renderSection: O
      }), null == f ? true : f(S)]
    })
  }