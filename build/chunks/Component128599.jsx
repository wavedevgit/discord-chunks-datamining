/** Chunk was on web.js **/
/** chunk id: 128599, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  a: () => h
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk563014 = require("./563014.js"),
  Chunk885621 = require("./885621.js"),
  Chunk658122 = require("./658122.js");

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

function p(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function h(e) {
  let {
    children: t,
    color: n = "default",
    isFocused: a = false,
    disabled: d = false,
    keepItemStyles: p = false,
    menuItemProps: h,
    action: m,
    dontCloseOnActionIfHoldingShiftKey: g,
    dontCloseOnAction: E,
    onClose: b
  } = e, y = i.useRef(null);
  i.useEffect(() => {
    a && (0, l.Y)(y)
  }, [a]);
  let O = i.useCallback(e => {
      if (null == m) returnfalse;
      e.shiftKey && g || E || b(), e.persist(), requestAnimationFrame(() => m(e))
    }, [m, b, g, E]),
    A = p ? s()(u.item, c.jV[n], {
      [u.focused]: a
    }) : u.customItem;
  return (0, r.jsx)(o.DUT, _(f({
    innerRef: y,
    className: A,
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