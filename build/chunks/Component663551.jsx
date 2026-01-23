/** Chunk was on web.js **/
/** chunk id: 663551, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  i: () => y
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk86968 = require("./86968.js"),
  Chunk900283 = require("./900283.js"),
  Chunk563014 = require("./563014.js"),
  Chunk397927 = require("./397927.js"),
  Chunk112378 = require("./112378.jsx"),
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
    disabled: g,
    isFocused: y,
    menuItemProps: b,
    action: O
  } = e, {
    onInteraction: v
  } = i.useContext(c.x), A = i.useRef(null);
  i.useEffect(() => {
    y && (0, u.Y)(A)
  }, [y]);
  let I = i.useCallback(e => {
    O(e), null == v || v({
      type: c.Q.RADIO
    })
  }, [O, v]);
  return (0, r.jsxs)(o.DUT, E(m({
    innerRef: A,
    className: s()(_.item, _.labelContainer, p.jV[t], {
      [_.disabled]: g,
      [_.focused]: y
    }),
    onClick: g ? true : I
  }, b), {
    "aria-checked": a,
    "aria-disabled": g,
    children: [(0, r.jsxs)("div", {
      className: _.label,
      children: [(0, r.jsx)(f.V, {
        children: (0, l.J)(n, e)
      }), null != h && (0, r.jsx)("div", {
        className: _.subtext,
        children: h
      })]
    }), (0, r.jsx)("div", {
      className: _.iconContainer,
      children: (0, r.jsx)(d.TN6, {
        checked: a,
        disabled: g,
        radioItemIconClassName: _.radioIcon
      })
    })]
  }))
}