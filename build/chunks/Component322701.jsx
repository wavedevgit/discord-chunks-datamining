/** Chunk was on 1272 **/
/** chunk id: 322701, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk924826 = require("./924826.js"),
  Chunk91192 = require("./91192.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk215569 = require("./215569.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk981631 = require("./981631.js"),
  Chunk535881 = require("./535881.js");
let f = function(e) {
  let {
    rows: t,
    renderRow: n,
    renderSection: f,
    hasSearchQuery: g,
    sectionFilter: h,
    footer: m,
    renderSectionFooter: b
  } = e, E = (0, o.e7)([u.Z], () => u.Z.keyboardModeEnabled), _ = (0, o.e7)([u.Z], () => u.Z.useReducedMotion), O = (0, l.ZP)({
    id: "people",
    isEnabled: E,
    async scrollToStart() {},
    async scrollToEnd() {}
  }), I = h !== d.pJs.ONLINE && h !== d.pJs.ALL, v = _ || g || I, y = i.useMemo(() => t.map((e, t) => 0 === e.length ? null : v ? (0, r.jsxs)("div", {
    children: [f(t), e.map(e => n(e, t)), null == b ? true : b(t)]
  }, t) : (0, r.jsxs)(s.W, {
    transitionAppear: false,
    component: "div",
    children: [f(t), e.map(e => n(e, t)), null == b ? true : b(t)]
  }, t)), [n, f, b, t, v]);
  return (0, r.jsx)(a.bG, {
    navigator: O,
    children: (0, r.jsx)(a.SJ, {
      children: e => {
        var t, n, {
            ref: i
          } = e,
          l = function(e, t) {
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
        return (0, r.jsxs)(c.w0Z, (t = function(e) {
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
          ref: i,
          className: p.peopleList
        }, l), n = n = {
          children: [y, m]
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(n)).forEach(function(e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t))
      }
    })
  })
}