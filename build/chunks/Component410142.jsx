/** Chunk was on web.js **/
/** chunk id: 410142, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  f: () => m
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk900283 = require("./900283.js"),
  Chunk563014 = require("./563014.js"),
  Chunk397927 = require("./397927.js"),
  Chunk885621 = require("./885621.js"),
  Chunk658122 = require("./658122.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
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

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function m(e) {
  let {
    color: t = "default",
    label: n,
    checked: a,
    disabled: f = false,
    isFocused: _,
    menuItemProps: m,
    action: g,
    className: E
  } = e, {
    onInteraction: y
  } = i.useContext(o.x), b = i.useRef(null), O = i.useId();
  i.useEffect(() => {
    _ && (0, l.Y)(b)
  }, [_]);
  let v = i.useCallback(e => {
    g(e), null == y || y({
      type: o.Q.SWITCH
    })
  }, [g, y]);
  return (0, r.jsxs)("div", h(p({
    ref: b,
    className: s()(d.item, d.switchItem, d.hideInteraction, u.jV[t], E, {
      [d.disabled]: f
    }),
    "aria-checked": a,
    "aria-disabled": f
  }, m), {
    children: [null != n ? (0, r.jsx)("div", {
      className: d.labelContainer,
      children: (0, r.jsx)("label", {
        htmlFor: O,
        className: d.label,
        children: n
      })
    }) : null, (0, r.jsx)("div", {
      className: d.switchContainer,
      children: (0, r.jsx)(c.dOG, {
        id: O,
        checked: a,
        onChange: v,
        disabled: f
      })
    })]
  }))
}