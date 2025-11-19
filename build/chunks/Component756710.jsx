/** Chunk was on web.js **/
/** chunk id: 756710, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  o: () => h
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk743236 = require("./743236.js"),
  Chunk939350 = require("./939350.js"),
  Chunk334405 = require("./334405.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}

function _(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function h(e) {
  let {
    children: t,
    color: n = "default",
    isFocused: a = false,
    disabled: d = false,
    keepItemStyles: _ = false,
    menuItemProps: h,
    action: m,
    dontCloseOnActionIfHoldingShiftKey: g,
    dontCloseOnAction: E,
    onClose: b
  } = e, y = i.useRef(null);
  i.useEffect(() => {
    a && (0, l.F)(y)
  }, [a]);
  let O = i.useCallback(e => {
      if (null == m) returnfalse;
      e.shiftKey && g || E || b(), e.persist(), requestAnimationFrame(() => m(e))
    }, [m, b, g, E]),
    v = _ ? o()(u.item, c._e[n], {
      [u.focused]: a
    }) : u.customItem;
  return (0, r.jsx)(s.P3F, p(f({
    innerRef: y,
    className: v,
    onClick: d ? true : O,
    "aria-disabled": d
  }, h), {
    children: t({
      color: n,
      disabled: d,
      isFocused: a
    })
  }))
}