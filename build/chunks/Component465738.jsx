/** Chunk was on web.js **/
/** chunk id: 465738, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => v
}), require("./733351.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk91871 = require("./91871.js"),
  l = require.n(Chunk91871),
  Chunk735438 = require("./735438.js"),
  u = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk389723 = require("./389723.jsx"),
  Chunk332661 = require("./332661.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk676608 = require("./676608.js"),
  Chunk317525 = require("./317525.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk836836 = require("./836836.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      b(e, t, n[t])
    })
  }
  return e
}
let v = function(e) {
  let {
    className: t,
    guild: n,
    roleStyle: a,
    roleFilter: s,
    onSelect: c,
    onClose: b
  } = e, v = (0, d.bG)([m.A], () => m.A.getSortedRoles(n.id)), A = (0, h.Ay)(n.id, null), I = i.useMemo(() => u()(v).filter(s).map(e => {
    var t, n;
    return {
      id: e.id,
      value: e.id,
      label: e.name,
      leading: "dot" === a ? (0, r.jsx)(_.WYI, {
        className: y.b8,
        color: null != (t = e.colorString) ? t : g.TpD,
        colors: A ? e.colorStrings : null,
        background: false,
        tooltip: false
      }) : (0, r.jsx)(_.RYH, {
        className: y.kb,
        color: null != (n = e.colorString) ? n : g.TpD,
        colors: A ? e.colorStrings : null
      })
    }
  }).value(), [v, s, a, A]), S = i.useCallback((e, t) => "" === t.trim() ? e : e.filter(e => l()(t.toLowerCase(), e.label.toLowerCase())), []);
  return (0, r.jsx)(_.lGe, {
    className: o()(y.kL, t),
    "aria-label": E.intl.string(E.t.ljnBlo),
    children: (0, r.jsxs)(f.iS, {
      selectionMode: "single",
      value: true,
      onSelectionChange: e => {
        null != e && (c(e), b())
      },
      options: I,
      customMatchSorter: S,
      children: [(0, r.jsx)(f.a3, {
        label: E.intl.string(E.t.ljnBlo),
        hideLabel: true,
        placeholder: E.intl.string(E.t.XPGZXP),
        autoFocus: true
      }), (0, r.jsx)(f.X2, {
        renderListItem: e => (0, r.jsx)(p.c, O({}, e))
      })]
    })
  })
}