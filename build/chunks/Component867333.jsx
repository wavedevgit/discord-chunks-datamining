/** Chunk was on web.js **/
/** chunk id: 867333, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  k: () => E
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
  Chunk939350 = require("./939350.js"),
  Chunk334405 = require("./334405.js");

function p(e, t, n) {
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
      p(e, t, n[t])
    })
  }
  return e
}

function m(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function g(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : m(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function E(e) {
  let {
    color: t = "default",
    label: n,
    checked: a,
    subtext: p,
    disabled: m,
    isFocused: E,
    menuItemProps: b,
    action: y
  } = e, {
    onInteraction: O
  } = i.useContext(c.p), v = i.useRef(null);
  i.useEffect(() => {
    E && (0, u.F)(v)
  }, [E]);
  let I = i.useCallback(e => {
    y(e), null == O || O({
      type: c.U.RADIO
    })
  }, [y, O]);
  return (0, r.jsxs)(s.P3F, g(h({
    innerRef: v,
    className: o()(_.item, _.labelContainer, f._e[t], {
      [_.disabled]: m,
      [_.focused]: E
    }),
    onClick: m ? true : I
  }, b), {
    "aria-checked": a,
    "aria-disabled": m,
    children: [(0, r.jsxs)("div", {
      className: _.label,
      children: [(0, l.I)(n, e), null != p && (0, r.jsx)("div", {
        className: _.subtext,
        children: p
      })]
    }), (0, r.jsx)("div", {
      className: _.iconContainer,
      children: (0, r.jsx)(d.Fj9, {
        checked: a,
        disabled: m,
        radioItemIconClassName: _.radioIcon
      })
    })]
  }))
}