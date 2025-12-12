/** Chunk was on web.js **/
/** chunk id: 464281, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Av: () => l,
  C9: () => c,
  FX: () => u,
  QV: () => a,
  Sw: () => d,
  tS: () => s
}), require("./781311.js"), require("./35282.js"), require("./539854.js"), require("./388685.js"), require("./49124.js");
var Chunk473749 = require("./473749.js");

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function o(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      i(e, t, n[t])
    })
  }
  return e
}

function a(e, t) {
  let n = (null != e ? e : "").trim(),
    r = (null != t ? t : "").trim();
  if ("" === n) return r;
  if ("" === r) return n;
  let i = " ".concat(n, " "),
    o = r.split(/\s+/).filter(Boolean),
    a = [];
  for (let e of o) {
    let t = " ".concat(e, " ");
    i.includes(t) || a.push(e)
  }
  return 0 === a.length ? n : "".concat(n, " ").concat(a.join(" ")).trim()
}

function s(e, t) {
  if (null != e || null != t) return function() {
    for (var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
    "function" == typeof e && e(...r), "function" == typeof t && t(...r)
  }
}

function l(e) {
  switch (e) {
    case "top":
    default:
      return "bottom";
    case "bottom":
      return "top";
    case "left":
      return "right";
    case "right":
      return "left"
  }
}

function c(e, t, n, i) {
  let o = e.props,
    l = (e, t) => {
      null != e && ("function" == typeof e ? e(t) : "object" == typeof e && "current" in e && (e.current = t))
    },
    c = e.ref,
    u = e => {
      l(c, e), null != e && "function" == typeof e.getBoundingClientRect && i(e)
    },
    d = {
      onMouseEnter: s(o.onMouseEnter, t.onMouseEnter),
      onMouseLeave: s(o.onMouseLeave, t.onMouseLeave),
      onFocus: s(o.onFocus, t.onFocus),
      onBlur: s(o.onBlur, t.onBlur),
      onContextMenu: s(o.onContextMenu, t.onContextMenu),
      onClick: s(o.onClick, t.onClick)
    };
  if (null != n && "" !== n && (d["aria-describedby"] = a(o["aria-describedby"], n)), "string" == typeof e.type) d.ref = u;
  else if ("buttonRef" in e.props) {
    let t = e.props.buttonRef;
    d.buttonRef = e => {
      l(t, e), u(e)
    }, d.ref = u
  } else if ("innerRef" in e.props) {
    let t = e.props.innerRef;
    d.innerRef = e => {
      l(t, e), u(e)
    }, d.ref = u
  } else d.ref = u, d.innerRef = u;
  return r.cloneElement(e, d)
}

function u(e) {
  let {
    tag: t,
    className: n,
    tabIndex: i,
    children: a,
    triggerHandlers: s,
    describedById: l,
    triggerRef: c
  } = e;
  return r.createElement(t, o({
    ref: c,
    className: n,
    tabIndex: i,
    onMouseEnter: s.onMouseEnter,
    onMouseLeave: s.onMouseLeave,
    onFocus: s.onFocus,
    onBlur: s.onBlur,
    onContextMenu: s.onContextMenu,
    onClick: s.onClick
  }, null != l && "" !== l ? {
    "aria-describedby": l
  } : {}), a)
}

function d(e) {
  if (null == e) return "";
  if ("string" == typeof e) return e;
  try {
    return JSON.stringify(e)
  } catch (t) {
    return String(e)
  }
}