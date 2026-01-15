/** Chunk was on web.js **/
/** chunk id: 218867, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
}), require("./388685.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk493773 = require("./493773.js"),
  Chunk270662 = require("./270662.js");

function u(e) {
  var t, n;
  let r = null == (t = e.current) ? true : t.getScrollerNode();
  return null != (n = null == r ? true : r.ownerDocument.defaultView) ? n : window
}
let d = Chunk473749.memo(Chunk473749.forwardRef((e, t) => {
  let {
    onScroll: n,
    onResize: a,
    listPadding: d = [0, 0, 0, 0],
    renderRow: f,
    renderSection: p,
    renderSectionHeader: _,
    renderSectionFooter: h,
    renderListHeader: m,
    rowCount: g,
    rowCountBySection: E,
    rowHeight: b,
    sectionMarginBottom: y,
    sectionHeaderHeight: O,
    sectionFooterHeight: v,
    listHeaderHeight: S,
    stickyHeaders: I = false,
    className: T,
    hideScrollbar: C = false,
    fade: A = false,
    initialScrollTop: N = 0,
    role: P = "list"
  } = e, [w, R] = i.useState(false), [D, x] = i.useState(false), L = i.useRef(null), j = i.useRef(0), M = i.useRef(false);
  (0, l.Ng)(() => {
    var e;
    let t = null == (e = L.current) ? true : e.getScrollerNode();
    null != t && (t.scrollTop = N)
  });
  let k = i.useCallback(() => {
      let e = "function" == typeof S ? S() : S;
      return null == e ? 0 : e
    }, [S]),
    U = i.useCallback((e, t, n) => "function" == typeof b ? b(n, {
      sectionIndex: e,
      sectionRowIndex: t
    }) : b, [b]),
    G = i.useCallback(e => {
      let t = "function" == typeof O ? O(e) : O;
      return null == t ? 0 : t
    }, [O]),
    Z = i.useCallback(e => {
      let t = "function" == typeof v ? v(e) : v;
      return null == t ? 0 : t
    }, [v]),
    F = i.useCallback(e => {
      let t = "function" == typeof y ? y(e) : y;
      return null == t ? 0 : t
    }, [y]),
    B = i.useRef([]),
    V = i.useRef([]),
    {
      totalHeight: H,
      rowDescriptors: Y,
      sectionDescriptors: W
    } = i.useMemo(() => {
      let e = 0,
        t = null != E,
        n = t ? E.length : 1,
        r = d[0],
        i = [],
        a = [];
      r += k();
      for (let o = 0; o < n; o++) {
        let n = t ? E[o] : g,
          s = (null == E ? true : E[o]) !== 0;
        a[o] = {
          firstRowIndex: e,
          offset: {
            top: r,
            bottom: false
          }
        }, r += G(o);
        for (let t = 0; t < n; t++) {
          let n = r + (s ? U(o, t, e) : 0),
            a = {
              top: r,
              bottom: n
            };
          i[e] = {
            sectionIndex: o,
            offset: a
          }, r = n, e++
        }
        r += Z(o) + F(o), a[o].offset.bottom = r
      }
      return {
        totalHeight: r += d[2],
        rowDescriptors: i,
        sectionDescriptors: a
      }
    }, [U, Z, G, F, d, g, E, k]);
  B.current = W, V.current = Y;
  let K = i.useCallback(() => {
    var e;
    let t = null == (e = L.current) ? true : e.getScrollerNode();
    if (null == t) return;
    let {
      offsetWidth: n,
      offsetHeight: r,
      scrollTop: i
    } = t;
    x(r), R(i), null == a || a({
      width: n,
      height: r
    })
  }, [a]);
  i.useLayoutEffect(() => {
    false === D && K()
  }, [D, K]), i.useEffect(() => {
    var e;
    let t = null == (e = L.current) ? true : e.getScrollerNode(),
      n = u(L);
    if (null == t || null == n) return;
    let r = new n.ResizeObserver(K);
    return r.observe(t), () => r.disconnect()
  }, [K]);
  let z = i.useCallback(() => {
    var e;
    let t = null == (e = L.current) ? true : e.getScrollerNode(),
      r = u(L);
    null != t && null != r && (r.cancelAnimationFrame(M.current), M.current = r.requestAnimationFrame(() => {
      let {
        scrollTop: e
      } = t;
      j.current = e, null == n || n(e), R(e)
    }))
  }, [n]);
  i.useImperativeHandle(t, () => ({
    scrollTo: function(e) {
      var t;
      let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {},
        {
          animate: r = false
        } = n;
      null == (t = L.current) || t.scrollTo({
        to: e,
        animate: r
      })
    },
    scrollRowIntoView: function(e) {
      let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {},
        {
          animate: n = false,
          offset: r = 0
        } = t,
        i = V.current[e],
        a = u(L);
      null != i && null != a && a.requestAnimationFrame(() => {
        var t, a;
        let {
          sectionIndex: o,
          offset: {
            top: s,
            bottom: l
          }
        } = i, c = G(o), u = s - (I ? c : 0) - r <= j.current, d = l + r >= j.current + D;
        if (u) {
          let i = j.current + c - s,
            a = I ? j.current - i : s;
          null == (t = L.current) || t.scrollTo({
            to: 0 === e ? 0 : a - r,
            animate: n
          })
        } else if (d) {
          let e = l - (j.current + D);
          null == (a = L.current) || a.scrollTo({
            to: j.current + e + r,
            animate: n
          })
        }
      })
    },
    scrollToSectionTop: function(e) {
      let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {},
        {
          animate: n = false,
          offset: r = 0
        } = t,
        i = B.current[e],
        a = u(L);
      null != i && null != a && a.requestAnimationFrame(() => {
        var t;
        null == (t = L.current) || t.scrollTo({
          to: (0 === e ? 0 : i.offset.top) + r,
          animate: n
        })
      })
    },
    getListDimensions: () => ({
      height: D,
      totalHeight: H
    }),
    getSectionDescriptors: () => B.current,
    getRowDescriptors: () => V.current,
    getScrollerNode: () => {
      var e;
      return null == (e = L.current) ? true : e.getScrollerNode()
    },
    scrollIntoViewNode: e => {
      var t;
      return null == (t = L.current) ? true : t.scrollIntoViewNode({
        node: e
      })
    }
  }), [G, I, H, D]);
  let {
    visibleItems: q,
    listOffset: Q
  } = i.useMemo(() => {
    if (false === D || false === w) return {
      visibleItems: null,
      listOffset: 0
    };
    let e = w,
      t = w + D,
      n = 0,
      r = d[0],
      i = [],
      a = k();
    null != m && e < a ? i.push(m()) : r += a;
    for (let a = 0; a < W.length; a++) {
      let {
        firstRowIndex: o,
        offset: {
          top: s,
          bottom: l
        }
      } = W[a], c = l - s;
      if (0 === c) continue;
      let u = G(a),
        d = Z(a),
        m = F(a);
      if (l <= e) r = l;
      else if (l > e && s < t) {
        n = o;
        let l = [],
          g = 0,
          E = 0,
          b = s,
          y = b + u >= e && b <= t;
        for (null != _ && (I || y) && l.push(_(a)), y || I || (r += u); g + u + d < c - m;) {
          let i = U(a, E, n),
            o = s + g + u,
            c = o + i;
          if (c <= e) r = c - (I ? u : 0);
          else if (c > e && o < t) l.push(f(n, {
            sectionIndex: a,
            sectionRowIndex: E
          }));
          else break;
          g += i, E++, n++
        }
        let O = s + u + g,
          v = O + d >= e && O <= t;
        null != h && v && l.push(h(a)), null != p ? i.push(p(a, l)) : i = [...i, ...l]
      } else break
    }
    return {
      visibleItems: i,
      listOffset: r
    }
  }, [U, Z, G, F, d, f, p, h, _, w, W, I, m, k, D]), X = i.useMemo(() => {
    var e, t, n;
    return {
      top: Q,
      right: null != (e = null == d ? true : d[1]) ? e : 0,
      bottom: null != (t = null == d ? true : d[2]) ? t : 0,
      left: null != (n = null == d ? true : d[3]) ? n : 0
    }
  }, [Q, d]), J = i.useMemo(() => ({
    height: H
  }), [H]), $ = C ? s.xVE : s.h21;
  return (0, r.jsxs)($, {
    fade: A,
    className: o()(c.scroller, T),
    ref: L,
    onScroll: z,
    children: [(0, r.jsx)("div", {
      role: P,
      className: c.listItems,
      style: X,
      children: q
    }), (0, r.jsx)("div", {
      className: c.listHeight,
      style: J
    })]
  })
}))