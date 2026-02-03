/** Chunk was on web.js **/
/** chunk id: 962125, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
}), require("./896048.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
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
  } = e, [R, P] = i.useState(false), [D, L] = i.useState(false), x = i.useRef(null), M = i.useRef(0), j = i.useRef(false);
  (0, l.u5)(() => {
    var e;
    let t = null == (e = x.current) ? true : e.getScrollerNode();
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
    F = i.useCallback(e => {
      let t = "function" == typeof v ? v(e) : v;
      return null == t ? 0 : t
    }, [v]),
    V = i.useCallback(e => {
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
        r += F(o) + V(o), a[o].offset.bottom = r
      }
      return {
        totalHeight: r += d[2],
        rowDescriptors: i,
        sectionDescriptors: a
      }
    }, [U, F, G, V, d, g, E, k]);
  B.current = K, H.current = W;
  let z = i.useCallback(() => {
    var e;
    let t = null == (e = x.current) ? true : e.getScrollerNode();
    if (null == t) return;
    let {
      offsetWidth: n,
      offsetHeight: r,
      scrollTop: i
    } = t;
    L(r), P(i), null == a || a({
      width: n,
      height: r
    })
  }, [a]);
  i.useLayoutEffect(() => {
    false === D && z()
  }, [D, z]), i.useEffect(() => {
    var e;
    let t = null == (e = x.current) ? true : e.getScrollerNode(),
      n = u(x);
    if (null == t || null == n) return;
    let r = new n.ResizeObserver(z);
    return r.observe(t), () => r.disconnect()
  }, [z]);
  let q = i.useCallback(() => {
    var e;
    let t = null == (e = x.current) ? true : e.getScrollerNode(),
      r = u(x);
    null != t && null != r && (r.cancelAnimationFrame(j.current), j.current = r.requestAnimationFrame(() => {
      let {
        scrollTop: e
      } = t;
      M.current = e, null == n || n(e), P(e)
    }))
  }, [n]);
  i.useImperativeHandle(t, () => ({
    scrollTo: function(e) {
      var t;
      let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {},
        {
          animate: r = false
        } = n;
      null == (t = x.current) || t.scrollTo({
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
        a = u(x);
      null != i && null != a && a.requestAnimationFrame(() => {
        var t, a;
        let {
          sectionIndex: o,
          offset: {
            top: s,
            bottom: l
          }
        } = i, c = G(o), u = s - (I ? c : 0) - r <= M.current, d = l + r >= M.current + D;
        if (u) {
          let i = M.current + c - s,
            a = I ? M.current - i : s;
          null == (t = x.current) || t.scrollTo({
            to: 0 === e ? 0 : a - r,
            animate: n
          })
        } else if (d) {
          let e = l - (M.current + D);
          null == (a = x.current) || a.scrollTo({
            to: M.current + e + r,
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
        a = u(x);
      null != i && null != a && a.requestAnimationFrame(() => {
        var t;
        null == (t = x.current) || t.scrollTo({
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
      return null == (e = x.current) ? true : e.getScrollerNode()
    },
    scrollIntoViewNode: e => {
      var t;
      return null == (t = x.current) ? true : t.scrollIntoViewNode({
        node: e
      })
    }
  }), [G, I, Y, D]);
  let {
    visibleItems: Z,
    listOffset: Q
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
        firstRowIndex: o,
        offset: {
          top: s,
          bottom: l
        }
      } = K[a], c = l - s;
      if (0 === c) continue;
      let u = G(a),
        d = F(a),
        m = V(a);
      if (l <= e) r = l;
      else if (l > e && s < t) {
        n = o;
        let l = [],
          g = 0,
          E = 0,
          y = s,
          b = y + u >= e && y <= t;
        for (null != _ && (I || b) && l.push(_(a)), b || I || (r += u); g + u + d < c - m;) {
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
  }, [U, F, G, V, d, f, p, h, _, R, K, I, m, k, D]), X = i.useMemo(() => {
    var e, t, n;
    return {
      top: Q,
      right: null != (e = null == d ? true : d[1]) ? e : 0,
      bottom: null != (t = null == d ? true : d[2]) ? t : 0,
      left: null != (n = null == d ? true : d[3]) ? n : 0
    }
  }, [Q, d]), J = i.useMemo(() => ({
    height: Y
  }), [Y]), $ = T ? s.zCo : s.ChK;
  return (0, r.jsxs)($, {
    fade: C,
    className: o()(c.XG, S),
    ref: x,
    onScroll: q,
    children: [(0, r.jsx)("div", {
      role: w,
      className: c.Dw,
      style: X,
      children: Z
    }), (0, r.jsx)("div", {
      className: c.W7,
      style: J
    })]
  })
}))