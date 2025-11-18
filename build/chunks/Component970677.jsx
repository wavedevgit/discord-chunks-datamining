/** Chunk was on web.js **/
/** chunk id: 970677, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  q: () => p
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk743236 = require("./743236.js"),
  Chunk939350 = require("./939350.js"),
  Chunk515527 = require("./515527.js");

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

function f(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function p(e) {
  let {
    color: t = "default",
    disabled: n,
    isFocused: a,
    showDefaultFocus: u = false,
    menuItemProps: f,
    children: p
  } = e, h = i.useRef(null);
  return i.useLayoutEffect(() => {
    if (!a) return;
    let e = h.current;
    if (null == e) return;
    (0, s.F)(h);
    let t = e.querySelector('[tabindex="0"]');
    null == t || t.focus()
  }, [a]), (0, r.jsx)("div", _(d({
    ref: h,
    className: o()(c.item, l._e[t], {
      [c.disabled]: n,
      [c.focused]: u && a,
      [c.hideInteraction]: !u
    }),
    "aria-disabled": n
  }, f), {
    children: p
  }))
}