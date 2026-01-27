/** Chunk was on web.js **/
/** chunk id: 653872, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  c: () => g
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk842867 = require("./842867.js"),
  Chunk965609 = require("./965609.js"),
  Chunk158954 = require("./158954.js"),
  Chunk588428 = require("./588428.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}

function p(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = m(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}

function g(e, t, n) {
  let a = (0, s.dG)(e),
    d = new Map,
    p = new n(e => {
      e.forEach(e => {
        var t;
        let {
          target: n
        } = e;
        null == (t = d.get(n)) || t(e)
      })
    });
  return (0, i.forwardRef)(function(n, m) {
    var g;
    let [E, ...y] = [n, m], {
      onScroll: b,
      dir: O = "ltr",
      sections: v,
      columns: A,
      getItemKey: I,
      getItemHeight: S,
      getSectionHeight: T,
      chunkSize: C,
      renderSection: N,
      renderItem: w,
      getSectionProps: R,
      itemGutter: P,
      removeEdgeItemGutters: D,
      sectionGutter: L,
      padding: x,
      paddingVertical: M,
      paddingHorizontal: j,
      fade: k = false,
      className: U,
      style: G,
      maxContentWidth: F,
      renderAccessory: V,
      onItemVisibilityChange: B
    } = E, H = h(E, ["onScroll", "dir", "sections", "columns", "getItemKey", "getItemHeight", "getSectionHeight", "chunkSize", "renderSection", "renderItem", "getSectionProps", "itemGutter", "removeEdgeItemGutters", "sectionGutter", "padding", "paddingVertical", "paddingHorizontal", "fade", "className", "style", "maxContentWidth", "renderAccessory", "onItemVisibilityChange"]), [Y] = y, W = i.useRef(null), K = i.useRef(null), z = i.useRef({}), [q, Z] = i.useState(false), {
      scrollerRef: Q,
      scrollerState: X,
      getScrollerState: J
    } = (0, s.F6)();
    (0, s._I)({
      scrollerRef: Q,
      className: U,
      specs: a,
      orientation: "vertical",
      dir: O
    });
    let {
      forceUpdateOnChunkChange: $,
      coordsMap: ee,
      gridData: et,
      visibleSections: en,
      totalHeight: er,
      forceUpdate: ei,
      masonryComputer: ea
    } = (0, s.vL)({
      sections: v,
      columns: A,
      getItemKey: I,
      getItemHeight: S,
      getSectionHeight: T,
      chunkSize: C,
      itemGutter: P,
      removeEdgeItemGutters: D,
      sectionGutter: L,
      padding: x,
      paddingVertical: M,
      paddingHorizontal: j,
      getScrollerState: J,
      dir: O,
      maxBufferWidth: F
    });
    i.useEffect(() => {
      null != B && (0, l.EL)(en, z.current, B), z.current = en
    }, [en, B]);
    let eo = (0, i.useCallback)(function() {
        let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : 2;
        e > X.current.dirty && (X.current.dirty = e), 2 === e ? ei() : $(1)
      }, [$, X, ei]),
      es = (0, s.kR)(Q),
      el = (0, i.useCallback)(() => ea.itemGrid, [ea]),
      ec = (0, i.useCallback)(() => ea.coordsMap, [ea]),
      eu = i.useCallback(() => eo(), [eo]);
    (0, s.Bb)({
      ref: Q,
      key: "container",
      onUpdate: eu,
      resizeObserver: p,
      listenerMap: d
    }), (0, i.useImperativeHandle)(Y, () => f({
      getScrollerNode: () => Q.current,
      getItemGrid: el,
      getCoordsMap: ec,
      getScrollerState: J
    }, (0, s.cJ)(Q, J, es)), [Q, J, el, es, ec]);
    let ed = (0, i.useCallback)(e => {
      eo(1), null == W.current ? Z(true) : clearTimeout(W.current), W.current = setTimeout(() => {
        W.current = null, Z(false)
      }, 200), null != b && b(e)
    }, [b, eo]);
    return i.useLayoutEffect(() => {
      2 !== X.current.dirty && (X.current.dirty = 2)
    }, [er, X]), (0, r.jsxs)("div", _(f({
      ref: Q,
      onScroll: ed,
      className: o()(U, {
        [e]: true,
        [t]: k,
        [u.qw]: q
      }),
      style: (0, s.Ze)(G)
    }, H), {
      children: [null != (g = null == V ? true : V(er)) ? g : null, (0, i.useMemo)(() => (0, r.jsx)(c.xpW, {
        containerRef: K,
        children: (0, r.jsx)("div", {
          style: {
            height: er
          },
          className: u.Qs,
          ref: K,
          children: Object.keys(en).map(e => {
            var t;
            let n = (0, s.Vd)(e),
              i = ee[e],
              a = en[e],
              o = ee[(0, s.tx)(n)],
              l = null == R ? true : R(n);
            return null != i && null != a ? (0, r.jsxs)("div", _(f({}, l), {
              style: f({}, i, null != (t = null == l ? true : l.style) ? t : {}),
              children: [null != N && null != o && N(n, o, e), a.map(e => {
                let [t, n, r] = e, i = ee[t];
                return null != i ? w(n, r, i, t, et) : null
              })]
            }), e) : null
          })
        })
      }), [en, w, N, ee, er, R, et])]
    }))
  })
}