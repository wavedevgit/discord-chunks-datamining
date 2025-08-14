/** Chunk was on web.js **/
/** chunk id: 56801, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => I
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk806966 = require("./806966.js"),
  Chunk254494 = require("./254494.jsx"),
  Chunk895924 = require("./895924.js"),
  Chunk826298 = require("./826298.js"),
  Chunk65573 = require("./65573.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}

function h(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function g(e, t) {
  if (null == e) return {};
  var n, r, i = E(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function E(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let b = [16, 8, 8, 8],
  y = 32,
  O = 4,
  v = 8;

function I(e) {
  let {
    className: t,
    channel: n,
    sections: o,
    activeCategoryIndex: _,
    filteredSectionId: h,
    onSectionClick: E,
    applicationCommandListRef: I
  } = e, T = i.useRef(null), S = i.useCallback((e, t) => {
    var n;
    let r = 2 * O;
    return (null == (n = o[t + 1]) ? true : n.type) === u.Qi.BUILT_IN && (r += v), y + r
  }, [o]), A = i.useCallback((e, t) => {
    var n;
    return t ? (null == (n = o[e + 1]) ? true : n.type) === u.Qi.BUILT_IN ? 0 : 2 * O : 0 === e ? 0 : 2 * O
  }, [o]), N = i.useCallback((e, t) => {
    let i = o[t];
    if (null == i) return;
    let a = (0, d.ky)(i),
      l = i.type === u.Qi.BUILT_IN ? O : 0,
      c = y - 2 * l,
      b = (0, r.jsx)(a, {
        channel: n,
        section: i,
        isSelected: null != h ? i.id === h : _ === t,
        padding: l,
        width: c,
        height: c,
        selectable: true
      }),
      v = i.type !== u.Qi.BUILT_IN && t < o.length - 1 && o[t + 1].type === u.Qi.BUILT_IN;
    return (0, r.jsxs)("div", {
      className: f.section,
      children: [(0, r.jsx)(s.ua7, {
        text: i.name,
        position: "right",
        children: e => {
          var {
            onClick: t
          } = e, n = g(e, ["onClick"]);
          return (0, r.jsx)(s.P3F, m(p({
            "aria-label": i.name,
            onClick: () => {
              E(i), null == t || t()
            }
          }, n), {
            children: b
          }))
        }
      }), v ? (0, r.jsx)("hr", {
        className: f.builtInSeparator
      }) : null]
    }, i.id)
  }, [_, n, E, o, h]);
  return 0 === o.length ? null : (0, r.jsx)("div", {
    className: a()(t, f.wrapper),
    children: (0, r.jsx)(c.Z, {
      categoryListRef: T,
      expressionsListRef: I,
      store: l.Xn,
      categories: o,
      className: f.list,
      renderCategoryListItem: N,
      rowCount: o.length,
      categoryHeight: S,
      listPadding: b,
      getScrollOffsetForIndex: A
    })
  })
}