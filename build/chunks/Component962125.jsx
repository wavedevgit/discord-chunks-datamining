/** Chunk was on web.js **/
/** chunk id: 962125, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
}), require("./896048.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk964486 = require("./964486.js"),
  Chunk570741 = require("./570741.js");

function u(e) {
  var t, n;
  let r = null == (n = e.current) ? true : n.getScrollerNode();
  return null != (t = null == r ? true : r.ownerDocument.defaultView) ? t : window
}
let d = Chunk64700.memo(Chunk64700.forwardRef((e, t) => {
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
    rowHeight: y,
    sectionMarginBottom: b,
    sectionHeaderHeight: O,
    sectionFooterHeight: v,
    listHeaderHeight: A,
    stickyHeaders: I = false,
    className: S,
    hideScrollbar: T = false,
    fade: C = false,
    initialScrollTop: N = 0,
    role: w = "list"
  } = e, [R, P] = i.useState(false), [D, x] = i.useState(false), L = i.useRef(null), j = i.useRef(0), M = i.useRef(false);
  (0, l.u5)(() => {
    var e;
    let t = null == (e = L.current) ? true : e.getScrollerNode();
    null != t && (t.scrollTop = N)
  });
  let k = i.useCallback(() => {
      let e = "function" == typeof A ? A() : A;
      return null == e ? 0 : e
    }, [A]),
    U = i.useCallback((e, t, n) => "function" == typeof y ? y(n, {
      sectionIndex: e,
      sectionRowIndex: t
    }) : y, [y]),
    G = i.useCallback(e => {
      let t = "function" == typeof O ? O(e) : O;
      return null == t ? 0 : t
    }, [O]),
    V = i.useCallback(e => {
      let t = "function" == typeof v ? v(e) : v;
      return null == t ? 0 : t
    }, [v]),
    F = i.useCallback(e => {
      let t = "function" == typeof b ? b(e) : b;
      return null == t ? 0 : t
    }, [b]),
    B = i.useRef([]),
    H = i.useRef([]),
    {
      totalHeight: Y,
      rowDescriptors: W,
      sectionDescriptors: K
    } = i.useMemo(() => {
      let e = 0,
        t = null != E,
        n = t ? E.length : 1,
        r = d[0],
        i = [],
        a = [];
      r += k();
      for (let s = 0; s < n; s++) {
        let n = t ? E[s] : g,
          o = (null == E ? true : E[s]) !== 0;
        a[s] = {
          firstRowIndex: e,
          offset: {
            top: r,
            bottom: false
          }
        }, r += G(s);
        for (let t = 0; t < n; t++) {
          let n = r + (o ? U(s, t, e) : 0),
            a = {
              top: r,
              bottom: n
            };
          i[e] = {
            sectionIndex: s,
            offset: a
          }, r = n, e++
        }
        r += V(s) + F(s), a[s].offset.bottom = r
      }
      return {
        totalHeight: r += d[2],
        rowDescriptors: i,
        sectionDescriptors: a
      }
    }, [U, V, G, F, d, g, E, k]);
  B.current = K, H.current = W;
  let z = i.useCallback(() => {
    var e;
    let t = null == (e = L.current) ? true : e.getScrollerNode();
    if (null == t) return;
    let {
      offsetWidth: n,
      offsetHeight: r,
      scrollTop: i
    } = t;
    x(r), P(i), null == a || a({
      width: n,
      height: r
    })
  }, [a]);
  i.useLayoutEffect(() => {
    false === D && z()
  }, [D, z]), i.useEffect(() => {
    var e;
    let t = null == (e = L.current) ? true : e.getScrollerNode(),
      n = u(L);
    if (null == t || null == n) return;
    let r = new n.ResizeObserver(z);
    return r.observe(t), () => r.disconnect()
  }, [z]);
  let q = i.useCallback(() => {
    var e;
    let t = null == (e = L.current) ? true : e.getScrollerNode(),
      r = u(L);
    null != t && null != r && (r.cancelAnimationFrame(M.current), M.current = r.requestAnimationFrame(() => {
      let {
        scrollTop: e
      } = t;
      j.current = e, null == n || n(e), P(e)
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
        i = H.current[e],
        a = u(L);
      null != i && null != a && a.requestAnimationFrame(() => {
        var t, a;
        let {
          sectionIndex: s,
          offset: {
            top: o,
            bottom: l
          }
        } = i, c = G(s), u = o - (I ? c : 0) - r <= j.current, d = l + r >= j.current + D;
        if (u) {
          let i = j.current + c - o,
            a = I ? j.current - i : o;
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
      totalHeight: Y
    }),
    getSectionDescriptors: () => B.current,
    getRowDescriptors: () => H.current,
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
  }), [G, I, Y, D]);
  let {
    visibleItems: Z,
    listOffset: X
  } = i.useMemo(() => {
    if (false === D || false === R) return {
      visibleItems: null,
      listOffset: 0
    };
    let e = R,
      t = R + D,
      n = 0,
      r = d[0],
      i = [],
      a = k();
    null != m && e < a ? i.push(m()) : r += a;
    for (let a = 0; a < K.length; a++) {
      let {
        firstRowIndex: s,
        offset: {
          top: o,
          bottom: l
        }
      } = K[a], c = l - o;
      if (0 === c) continue;
      let u = G(a),
        d = V(a),
        m = F(a);
      if (l <= e) r = l;
      else if (l > e && o < t) {
        n = s;
        let l = [],
          g = 0,
          E = 0,
          y = o,
          b = y + u >= e && y <= t;
        for (null != _ && (I || b) && l.push(_(a)), b || I || (r += u); g + u + d < c - m;) {
          let i = U(a, E, n),
            s = o + g + u,
            c = s + i;
          if (c <= e) r = c - (I ? u : 0);
          else if (c > e && s < t) l.push(f(n, {
            sectionIndex: a,
            sectionRowIndex: E
          }));
          else break;
          g += i, E++, n++
        }
        let O = o + u + g,
          v = O + d >= e && O <= t;
        null != h && v && l.push(h(a)), null != p ? i.push(p(a, l)) : i = [...i, ...l]
      } else break
    }
    return {
      visibleItems: i,
      listOffset: r
    }
  }, [U, V, G, F, d, f, p, h, _, R, K, I, m, k, D]), Q = i.useMemo(() => {
    var e, t, n;
    return {
      top: X,
      right: null != (e = null == d ? true : d[1]) ? e : 0,
      bottom: null != (t = null == d ? true : d[2]) ? t : 0,
      left: null != (n = null == d ? true : d[3]) ? n : 0
    }
  }, [X, d]), J = i.useMemo(() => ({
    height: Y
  }), [Y]), $ = T ? o.zCo : o.ChK;
  return (0, r.jsxs)($, {
    fade: C,
    className: s()(c.XG, S),
    ref: L,
    onScroll: q,
    children: [(0, r.jsx)("div", {
      role: w,
      className: c.Dw,
      style: Q,
      children: Z
    }), (0, r.jsx)("div", {
      className: c.W7,
      style: J
    })]
  })
}))