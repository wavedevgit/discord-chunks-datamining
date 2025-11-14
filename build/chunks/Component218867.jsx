/** Chunk was on web.js **/
/** chunk id: 218867, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
}), require("./388685.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk493773 = require("./493773.js"),
  Chunk959338 = require("./959338.js");

function u(e) {
  var t, n;
  let r = null == (t = e.current) ? true : t.getScrollerNode();
  return null != (n = null == r ? true : r.ownerDocument.defaultView) ? n : window
}
let d = Chunk647438.memo(Chunk647438.forwardRef((e, t) => {
  let {
    onScroll: n,
    onResize: a,
    listPadding: d = [0, 0, 0, 0],
    renderRow: f,
    renderSection: _,
    renderSectionHeader: p,
    renderSectionFooter: h,
    renderListHeader: m,
    rowCount: g,
    rowCountBySection: E,
    rowHeight: b,
    sectionMarginBottom: y,
    sectionHeaderHeight: O,
    sectionFooterHeight: v,
    listHeaderHeight: I,
    stickyHeaders: T = false,
    className: S,
    hideScrollbar: A = false,
    fade: C = false,
    initialScrollTop: N = 0,
    role: R = "list"
  } = e, [P, D] = i.useState(false), [w, x] = i.useState(false), L = i.useRef(null), M = i.useRef(0), k = i.useRef(false);
  (0, l.Ng)(() => {
    var e;
    let t = null == (e = L.current) ? true : e.getScrollerNode();
    null != t && (t.scrollTop = N)
  });
  let j = i.useCallback(() => {
      let e = "function" == typeof I ? I() : I;
      return null == e ? 0 : e
    }, [I]),
    U = i.useCallback((e, t, n) => "function" == typeof b ? b(n, {
      sectionIndex: e,
      sectionRowIndex: t
    }) : b, [b]),
    G = i.useCallback(e => {
      let t = "function" == typeof O ? O(e) : O;
      return null == t ? 0 : t
    }, [O]),
    B = i.useCallback(e => {
      let t = "function" == typeof v ? v(e) : v;
      return null == t ? 0 : t
    }, [v]),
    Z = i.useCallback(e => {
      let t = "function" == typeof y ? y(e) : y;
      return null == t ? 0 : t
    }, [y]),
    F = i.useRef([]),
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
      r += j();
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
        r += B(o) + Z(o), a[o].offset.bottom = r
      }
      return {
        totalHeight: r += d[2],
        rowDescriptors: i,
        sectionDescriptors: a
      }
    }, [U, B, G, Z, d, g, E, j]);
  F.current = W, V.current = Y;
  let K = i.useCallback(() => {
    var e;
    let t = null == (e = L.current) ? true : e.getScrollerNode();
    if (null == t) return;
    let {
      offsetWidth: n,
      offsetHeight: r,
      scrollTop: i
    } = t;
    x(r), D(i), null == a || a({
      width: n,
      height: r
    })
  }, [a]);
  i.useLayoutEffect(() => {
    false === w && K()
  }, [w, K]), i.useEffect(() => {
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
    null != t && null != r && (r.cancelAnimationFrame(k.current), k.current = r.requestAnimationFrame(() => {
      let {
        scrollTop: e
      } = t;
      M.current = e, null == n || n(e), D(e)
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
        } = i, c = G(o), u = s - (T ? c : 0) - r <= M.current, d = l + r >= M.current + w;
        if (u) {
          let i = M.current + c - s,
            a = T ? M.current - i : s;
          null == (t = L.current) || t.scrollTo({
            to: 0 === e ? 0 : a - r,
            animate: n
          })
        } else if (d) {
          let e = l - (M.current + w);
          null == (a = L.current) || a.scrollTo({
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
        i = F.current[e],
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
      height: w,
      totalHeight: H
    }),
    getSectionDescriptors: () => F.current,
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
  }), [G, T, H, w]);
  let {
    visibleItems: q,
    listOffset: X
  } = i.useMemo(() => {
    if (false === w || false === P) return {
      visibleItems: null,
      listOffset: 0
    };
    let e = P,
      t = P + w,
      n = 0,
      r = d[0],
      i = [],
      a = j();
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
        d = B(a),
        m = Z(a);
      if (l <= e) r = l;
      else if (l > e && s < t) {
        n = o;
        let l = [],
          g = 0,
          E = 0,
          b = s,
          y = b + u >= e && b <= t;
        for (null != p && (T || y) && l.push(p(a)), y || T || (r += u); g + u + d < c - m;) {
          let i = U(a, E, n),
            o = s + g + u,
            c = o + i;
          if (c <= e) r = c - (T ? u : 0);
          else if (c > e && o < t) l.push(f(n, {
            sectionIndex: a,
            sectionRowIndex: E
          }));
          else break;
          g += i, E++, n++
        }
        let O = s + u + g,
          v = O + d >= e && O <= t;
        null != h && v && l.push(h(a)), null != _ ? i.push(_(a, l)) : i = [...i, ...l]
      } else break
    }
    return {
      visibleItems: i,
      listOffset: r
    }
  }, [U, B, G, Z, d, f, _, h, p, P, W, T, m, j, w]), Q = i.useMemo(() => {
    var e, t, n;
    return {
      top: X,
      right: null != (e = null == d ? true : d[1]) ? e : 0,
      bottom: null != (t = null == d ? true : d[2]) ? t : 0,
      left: null != (n = null == d ? true : d[3]) ? n : 0
    }
  }, [X, d]), J = i.useMemo(() => ({
    height: H
  }), [H]), $ = A ? s.xVE : s.h21;
  return (0, r.jsxs)($, {
    fade: C,
    className: o()(c.scroller, S),
    ref: L,
    onScroll: z,
    children: [(0, r.jsx)("div", {
      role: R,
      className: c.listItems,
      style: Q,
      children: q
    }), (0, r.jsx)("div", {
      className: c.listHeight,
      style: J
    })]
  })
}))