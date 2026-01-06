/** Chunk was on web.js **/
/** chunk id: 867333, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  k: () => b
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk761224 = require("./761224.js"),
  Chunk670596 = require("./670596.js"),
  Chunk743236 = require("./743236.js"),
  Chunk481060 = require("./481060.js"),
  Chunk106683 = require("./106683.jsx"),
  Chunk939350 = require("./939350.js"),
  Chunk564546 = require("./564546.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
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

function b(e) {
  let {
    color: t = "default",
    label: n,
    checked: a,
    subtext: m,
    disabled: g,
    isFocused: b,
    menuItemProps: y,
    action: O
  } = e, {
    onInteraction: v
  } = i.useContext(c.p), S = i.useRef(null);
  i.useEffect(() => {
    b && (0, u.F)(S)
  }, [b]);
  let I = i.useCallback(e => {
    O(e), null == v || v({
      type: c.U.RADIO
    })
  }, [O, v]);
  return (0, r.jsxs)(s.P3F, E(h({
    innerRef: S,
    className: o()(_.item, _.labelContainer, p._e[t], {
      [_.disabled]: g,
      [_.focused]: b
    }),
    onClick: g ? true : I
  }, y), {
    "aria-checked": a,
    "aria-disabled": g,
    children: [(0, r.jsxs)("div", {
      className: _.label,
      children: [(0, r.jsx)(f.i, {
        children: (0, l.I)(n, e)
      }), null != m && (0, r.jsx)("div", {
        className: _.subtext,
        children: m
      })]
    }), (0, r.jsx)("div", {
      className: _.iconContainer,
      children: (0, r.jsx)(d.Fj9, {
        checked: a,
        disabled: g,
        radioItemIconClassName: _.radioIcon
      })
    })]
  }))
}