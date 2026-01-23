/** Chunk was on web.js **/
/** chunk id: 888457, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  s: () => y
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk86968 = require("./86968.js"),
  Chunk900283 = require("./900283.js"),
  Chunk563014 = require("./563014.js"),
  Chunk112378 = require("./112378.jsx"),
  Chunk52738 = require("./52738.jsx"),
  Chunk885621 = require("./885621.js"),
  Chunk658122 = require("./658122.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      h(e, t, n[t])
    })
  }
  return e
}

function g(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function E(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function y(e) {
  let {
    color: t = "default",
    label: n,
    checked: a,
    subtext: h,
    leadingAccessory: g,
    disabled: y,
    isFocused: b,
    menuItemProps: O,
    action: v,
    className: A,
    focusedClassName: I
  } = e, {
    onInteraction: S
  } = i.useContext(c.x), T = i.useRef(null);
  i.useEffect(() => {
    b && (0, u.Y)(T)
  }, [b]);
  let C = i.useCallback(e => {
    v(e), null == S || S({
      type: c.Q.CHECKBOX
    })
  }, [v, S]);
  return (0, r.jsxs)(o.DUT, E(m({
    innerRef: T,
    className: s()(_.item, _.checkboxContainer, _.labelContainer, p.jV[t], A, {
      [_.disabled]: y,
      [_.focused]: b,
      [null != I ? I : ""]: b
    }),
    onClick: y ? true : C
  }, O), {
    "aria-checked": a,
    "aria-disabled": y,
    children: [null != g && (0, r.jsx)(f.B, {
      accessory: g,
      isFocused: b
    }), (0, r.jsxs)("div", {
      className: _.label,
      children: [(0, r.jsx)(d.V, {
        children: (0, l.J)(n, e)
      }), null != h && (0, r.jsx)("div", {
        className: _.subtext,
        children: h
      })]
    }), (0, r.jsx)("div", {
      className: _.iconContainer,
      children: (0, r.jsx)(o.P7L, {
        checked: a,
        disabled: y,
        size: 20
      })
    })]
  }))
}