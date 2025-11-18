/** Chunk was on 1272 **/
/** chunk id: 145641, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk924826 = require("./924826.js"),
  Chunk91192 = require("./91192.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk617015 = require("./617015.js"),
  Chunk494720 = require("./494720.js");
let p = function(e) {
  let {
    rows: t,
    renderRow: n,
    renderSection: p,
    footer: f
  } = e, h = e => {
    let {
      section: r,
      row: i
    } = e, l = t[r];
    if (null == l || null == i) return null;
    let a = l[i];
    return null == a ? null : n(a)
  }, g = i.useCallback(e => {
    let {
      section: t
    } = e;
    return p(t)
  }, [p]), m = (0, s.e7)([c.Z], () => c.Z.keyboardModeEnabled), _ = i.useRef(null), b = i.useCallback(() => new Promise(e => {
    let t = _.current;
    if (null == t) return e();
    t.scrollToTop({
      callback: () => requestAnimationFrame(() => e())
    })
  }), []), E = i.useCallback(() => new Promise(e => {
    let t = _.current;
    if (null == t) return e();
    t.scrollToBottom({
      callback: () => requestAnimationFrame(() => e())
    })
  }), []), O = i.useCallback(e => {
    let t = document.querySelector(e),
      n = _.current;
    null != t && null != n && n.scrollIntoViewNode({
      node: t,
      padding: 8,
      callback: () => null == t ? true : t.focus()
    })
  }, []), y = (0, l.ZP)({
    id: "people-list",
    isEnabled: m,
    scrollToStart: b,
    scrollToEnd: E,
    setFocus: O
  }), v = i.useMemo(() => t.map(e => e.length), [t]);
  return (0, r.jsx)(a.bG, {
    navigator: y,
    children: (0, r.jsx)(a.SJ, {
      children: e => {
        var {
          ref: t
        } = e, n = function(e, t) {
          if (null == e) return {};
          var n, r, i = function(e, t) {
            if (null == e) return {};
            var n, r, i = {},
              l = Object.keys(e);
            for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i
          }(e, t);
          if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(e);
            for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
          }
          return i
        }(e, ["ref"]);
        return (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(o._2F, function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))), r.forEach(function(t) {
                var r;
                r = n[t], t in e ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : e[t] = r
              })
            }
            return e
          }({
            ref: e => {
              var n;
              _.current = e, t.current = null != (n = null == e ? true : e.getScrollerNode()) ? n : null
            },
            renderRow: h,
            rowHeight: u.NV,
            renderSection: g,
            sectionHeight: u.aS,
            sections: v,
            className: d.peopleList
          }, n)), f]
        })
      }
    })
  })
}