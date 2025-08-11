/** Chunk was on web.js **/
/** chunk id: 660579, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk810097 = require("./810097.jsx");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function s(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      a(e, t, n[t])
    })
  }
  return e
}

function l(e, t) {
  if (null == e) return {};
  var n, r, i = c(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function c(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let u = Chunk73800.forwardRef(function(e, t) {
  var {
    children: n,
    className: a,
    onShowToolbar: c
  } = e, u = l(e, ["children", "className", "onShowToolbar"]);
  let d = t,
    [f, _] = i.useState(false),
    p = () => {
      null == c || c(), _(true)
    },
    h = () => {
      _(false)
    };
  return (0, r.jsxs)("div", {
    className: a,
    onMouseEnter: p,
    onMouseLeave: h,
    onFocus: e => {
      var t;
      (null == (t = d.current) ? true : t.contains(e.relatedTarget)) && p()
    },
    onBlur: e => {
      var t;
      let n = e.relatedTarget;
      null != n && (null == (t = d.current) ? true : t.contains(n)) || h()
    },
    ref: d,
    children: [n, (0, r.jsx)(o.ZP, s({
      targetRef: d,
      isVisible: f,
      isExpandable: false
    }, u))]
  })
})