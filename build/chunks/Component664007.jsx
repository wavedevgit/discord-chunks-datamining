/** Chunk was on 47841 **/
/** chunk id: 664007, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk736653 = require("./736653.js"),
  Chunk342298 = require("./342298.jsx"),
  Chunk458091 = require("./458091.js");

function u(e) {
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
}
let g = Chunk827734.A.unsafe_rawColors.PRIMARY_400.css,
  m = Chunk827734.A.unsafe_rawColors.PRIMARY_500.css;

function p(e) {
  let {
    enabled: t,
    imageClassName: n,
    iconWrapperClassName: i
  } = e, s = function(e, t) {
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
  }(e, ["enabled", "imageClassName", "iconWrapperClassName"]), p = (0, o.Ay)(), f = {
    height: 18,
    width: 18,
    color: (0, a.Mwr)(p) ? g : m
  };
  return (0, r.jsx)(c.A, u({
    className: l()({
      [d.MY]: t,
      [d.O7]: !t
    }),
    imageClassName: l()(n, d.f3, {
      [d.Hn]: !t
    }),
    icon: null != s.image && "" !== s.image ? (0, r.jsx)(a.R2l, u({
      size: "custom"
    }, f)) : (0, r.jsx)(a.XGR, u({
      size: "custom"
    }, f)),
    iconClassName: l()(d.oB, d.BD),
    iconWrapperClassName: i,
    showIcon: true,
    showIconDisabled: true,
    hideSize: true
  }, s))
}