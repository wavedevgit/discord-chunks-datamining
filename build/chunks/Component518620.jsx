/** Chunk was on 21738 **/
/** chunk id: 518620, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk884362 = require("./884362.js"),
  Chunk837381 = require("./837381.jsx"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js");
require("./646363.js");
var Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js"),
  Chunk520936 = require("./520936.js");
let f = function(e) {
  let {
    rows: t,
    renderRow: n,
    renderSection: f,
    footer: h,
    sectionFilter: A,
    renderSectionFooter: g
  } = e, m = e => {
    let {
      section: r,
      row: i
    } = e, l = t[r];
    if (null == l || null == i) return null;
    let a = l[i];
    return null == a ? null : n(a, r)
  }, b = i.useCallback((e, n) => {
    var r;
    let i = null == (r = t[e]) ? true : r[n];
    return A === u.m3P.ALL && (null == i ? true : i.giftIntentType) === d.np.FRIEND_ANNIVERSARY && 0 === e ? 72 : 62
  }, [t, A]), _ = i.useCallback(e => {
    let {
      section: t
    } = e;
    return f(t)
  }, [f]), E = i.useCallback(e => null == g ? null : g(e.section), [g]), O = i.useCallback(e => null == g ? 0 : 48 * (null != g(e)), [g]), y = (0, s.bG)([c.A], () => c.A.keyboardModeEnabled), I = i.useRef(null), v = i.useCallback(() => new Promise(e => {
    let t = I.current;
    if (null == t) return e();
    t.scrollToTop({
      callback: () => requestAnimationFrame(() => e())
    })
  }), []), S = i.useCallback(() => new Promise(e => {
    let t = I.current;
    if (null == t) return e();
    t.scrollToBottom({
      callback: () => requestAnimationFrame(() => e())
    })
  }), []), C = i.useCallback(e => {
    let t = document.querySelector(e),
      n = I.current;
    null != t && null != n && n.scrollIntoViewNode({
      node: t,
      padding: 8,
      callback: () => null == t ? true : t.focus()
    })
  }, []), N = (0, l.Ay)({
    id: "people-list",
    isEnabled: y,
    scrollToStart: v,
    scrollToEnd: S,
    setFocus: C
  }), T = i.useMemo(() => t.map(e => e.length), [t]);
  return (0, r.jsx)(a.hD, {
    navigator: N,
    children: (0, r.jsx)(a.PR, {
      children: e => {
        let {
          ref: t
        } = e, n = function(e, t) {
          if (null == e) return {};
          var n, r, i, l = {};
          if ("u" > typeof Reflect && Reflect.ownKeys) {
            for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
            return l
          }
          if (l = function(e, t) {
              if (null == e) return {};
              var n, r, i = {},
                l = Object.getOwnPropertyNames(e);
              for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
              return i
            }(e, t), Object.getOwnPropertySymbols)
            for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
          return l
        }(e, ["ref"]);
        return (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(o.Eie, function(e) {
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
              I.current = e, t.current = null != (n = null == e ? true : e.getScrollerNode()) ? n : null
            },
            renderRow: m,
            rowHeight: b,
            renderSection: _,
            sectionHeight: 50,
            renderFooter: E,
            footerHeight: O,
            sections: T,
            className: p.e3
          }, n)), h]
        })
      }
    })
  })
}