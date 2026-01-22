/** Chunk was on web.js **/
/** chunk id: 52822, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  d: () => _
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk563014 = require("./563014.js"),
  Chunk885621 = require("./885621.js"),
  Chunk658122 = require("./658122.js");

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

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function _(e) {
  let {
    color: t = "default",
    disabled: n,
    isFocused: a,
    showDefaultFocus: u = false,
    menuItemProps: f,
    children: _
  } = e, h = i.useRef(null);
  return i.useLayoutEffect(() => {
    if (!a) return;
    let e = h.current;
    if (null == e) return;
    (0, o.Y)(h);
    let t = e.querySelector('[tabindex="0"]');
    null == t || t.focus()
  }, [a]), (0, r.jsx)("div", p(d({
    ref: h,
    className: s()(c.item, l.jV[t], {
      [c.disabled]: n,
      [c.focused]: u && a,
      [c.hideInteraction]: !u
    }),
    "aria-disabled": n
  }, f), {
    children: _
  }))
}