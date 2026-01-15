/** Chunk was on web.js **/
/** chunk id: 608798, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
}), require("./781311.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk658722 = require("./658722.js"),
  l = require.n(Chunk658722),
  Chunk392711 = require("./392711.js"),
  u = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk496600 = require("./496600.jsx"),
  Chunk713072 = require("./713072.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk402235 = require("./402235.js"),
  Chunk485386 = require("./485386.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk640856 = require("./640856.js");

function y(e, t, n) {
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
      y(e, t, n[t])
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
    onClose: y
  } = e, v = (0, d.e7)([m.Z], () => m.Z.getSortedRoles(n.id)), S = (0, h.ZP)(n.id, null), I = i.useMemo(() => u()(v).filter(s).map(e => {
    var t, n;
    return {
      id: e.id,
      value: e.id,
      label: e.name,
      leading: "dot" === a ? (0, r.jsx)(_.FhE, {
        className: b.popoutRoleDot,
        color: null != (t = e.colorString) ? t : g.Pbq,
        colors: S ? e.colorStrings : null,
        background: false,
        tooltip: false
      }) : (0, r.jsx)(_.xko, {
        className: b.popoutRoleCircle,
        color: null != (n = e.colorString) ? n : g.Pbq,
        colors: S ? e.colorStrings : null
      })
    }
  }).value(), [v, s, a, S]), T = i.useCallback((e, t) => "" === t.trim() ? e : e.filter(e => l()(t.toLowerCase(), e.label.toLowerCase())), []);
  return (0, r.jsx)(_.VqE, {
    className: o()(b.container, t),
    "aria-label": E.intl.string(E.t.ljnBlo),
    children: (0, r.jsxs)(f.uz, {
      selectionMode: "single",
      value: null,
      onSelectionChange: e => {
        null != e && (c(e), y())
      },
      options: I,
      customMatchSorter: T,
      children: [(0, r.jsx)(f.Ct, {
        label: E.intl.string(E.t.ljnBlo),
        hideLabel: true,
        placeholder: E.intl.string(E.t.XPGZXP),
        autoFocus: true
      }), (0, r.jsx)(f.px, {
        renderListItem: e => (0, r.jsx)(p.W, O({}, e))
      })]
    })
  })
}