/** Chunk was on web.js **/
/** chunk id: 732586, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk911969 = require("./911969.js"),
  Chunk970184 = require("./970184.jsx"),
  Chunk293979 = require("./293979.js"),
  Chunk59718 = require("./59718.js");

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
      maxLength: m,
      required: h,
      value: g
    } = e,
    [E, b] = i.useState(null != g ? g : ""),
    {
      state: y,
      executeStateUpdate: O,
      error: v
    } = (0, s.Ee)(e, null != g ? {
      type: n,
      value: g
    } : true),
    S = (0, l.hz)(e.id);
  i.useEffect(() => {
    (null == y ? true : y.type) === n && b(y.value)
  }, [n, y]);
  let I = {
    value: E,
    placeholder: p,
    minLength: _,
    maxLength: m,
    required: h,
    onChange: e => {
      b(e), O({
        type: n,
        value: e
      })
    },
    autoFocus: S
  };
  switch (u) {
    case a.PT.SMALL:
      t = (0, r.jsx)(o.oil, d({}, I));
      break;
    case a.PT.PARAGRAPH:
      t = (0, r.jsx)(o.Kx8, d({
        autosize: true
      }, I))
  }
  return null != f ? (0, r.jsx)(o.xJW, {
    title: f,
    required: h,
    className: c.formItem,
    error: v,
    children: t
  }) : t
}