/** Chunk was on web.js **/
/** chunk id: 834968, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk73510 = require("./73510.js"),
  Chunk60090 = require("./60090.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      c(e, t, n[t])
    })
  }
  return e
}

function d(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = f(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function f(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let p = e => {
  switch (e.id) {
    case o.Ik.BUILT_IN:
      return s.kC9;
    case o.Ik.FRECENCY:
      return s.O4;
    default:
      return
  }
};

function _(e) {
  let {
    section: t,
    className: n,
    width: i,
    height: s,
    padding: o,
    isSelected: c,
    selectable: f = false
  } = e, _ = d(e, ["section", "className", "width", "height", "padding", "isSelected", "selectable"]), h = p(t);
  return (0, r.jsx)("div", {
    className: a()(l.iE, n, {
      [l.rb]: f,
      [l.wH]: f && c
    }),
    style: {
      width: i,
      height: s,
      padding: null != o ? o : 0
    },
    children: null != h ? (0, r.jsx)(h, u({
      className: l.Kk,
      color: "currentColor",
      size: "custom",
      width: i,
      height: s
    }, _)) : null
  })
}