/** Chunk was on web.js **/
/** chunk id: 126727, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk155718 = require("./155718.js"),
  Chunk207963 = require("./207963.jsx"),
  Chunk969508 = require("./969508.js"),
  Chunk717820 = require("./717820.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}

function f(e) {
  let t, {
      type: n,
      style: u,
      label: f,
      placeholder: p,
      minLength: _,
      maxLength: h,
      required: m,
      value: g
    } = e,
    [E, y] = i.useState(null != g ? g : ""),
    {
      state: b,
      executeStateUpdate: O,
      error: v
    } = (0, o.At)(e, null != g ? {
      type: n,
      value: g
    } : true),
    A = (0, l.FG)(e.id);
  i.useEffect(() => {
    (null == b ? true : b.type) === n && y(b.value)
  }, [n, b]);
  let I = {
    value: E,
    placeholder: p,
    minLength: _,
    maxLength: h,
    required: m,
    onChange: e => {
      y(e), O({
        type: n,
        value: e
      })
    },
    autoFocus: A
  };
  switch (u) {
    case s.qz.SMALL:
      t = (0, r.jsx)(a.ksK, d({}, I));
      break;
    case s.qz.PARAGRAPH:
      t = (0, r.jsx)(a.fs1, d({
        autosize: true
      }, I))
  }
  return null != f ? (0, r.jsx)(a.eIh, {
    title: f,
    required: m,
    className: c.k,
    error: v,
    children: t
  }) : t
}