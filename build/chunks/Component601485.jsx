/** Chunk was on web.js **/
/** chunk id: 601485, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  a: () => h
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk900283 = require("./900283.js"),
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
    color: t = "default",
    label: n,
    control: a,
    disabled: d,
    isFocused: p,
    showDefaultFocus: h = false,
    menuItemProps: m,
    onClose: g
  } = e, {
    onInteraction: E
  } = i.useContext(o.x), y = i.useRef(null), b = i.useRef(null);
  i.useLayoutEffect(() => {
    var e, t, n;
    p ? ((0, l.Y)(y), null == (e = b.current) || e.focus()) : null == (n = b.current) || null == (t = n.blur) || t.call(n)
  }, [p]);
  let O = i.useCallback(() => {
      var e, t;
      (null == (t = b.current) || null == (e = t.activate) ? true : e.call(t)) && g()
    }, [g]),
    v = a({
      onClose: g,
      disabled: d,
      isFocused: p,
      onInteraction: i.useCallback(e => {
        null == E || E({
          type: null != e ? e : o.Q.DEFAULT
        })
      }, [E])
    }, b);
  return (0, r.jsxs)("div", _(f({
    onClick: O,
    className: s()(u.item, c.jV[t], {
      [u.disabled]: d,
      [u.focused]: h && p,
      [u.hideInteraction]: !h
    }),
    "aria-disabled": d
  }, m), {
    children: [null != n ? (0, r.jsx)("div", {
      className: u.labelContainer,
      children: (0, r.jsx)("div", {
        className: u.label,
        children: n
      })
    }) : null, v]
  }))
}