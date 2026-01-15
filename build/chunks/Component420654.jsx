/** Chunk was on web.js **/
/** chunk id: 420654, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk785717 = require("./785717.jsx"),
  Chunk892001 = require("./892001.js"),
  Chunk280885 = require("./280885.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk825293 = require("./825293.js");

function _(e, t, n) {
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
      _(e, t, n[t])
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
let E = 57.75,
  b = Chunk473749.memo(function(e) {
    let {
      user: t,
      onClose: n,
      bio: a,
      hidePersonalInformation: _,
      viewFullBioDisabled: m = false
    } = e, {
      context: b
    } = (0, c.KZ)(), {
      analyticsLocations: y
    } = (0, l.ZP)(), [O, v] = i.useState(false), [S, I] = i.useState(false), T = i.useRef(null), C = e => {
      T.current = e, null != e && (v(!S && e.scrollHeight - e.clientHeight > 1), e.getBoundingClientRect().height > E && I(true))
    }, A = () => {
      null == n || n(), (0, u.openUserProfileModal)(g(h({}, b), {
        userId: t.id,
        sourceAnalyticsLocations: y
      }))
    }, N = e => {
      null == T.current || T.current.contains(e.relatedTarget) || (T.current.scrollTop = 0)
    };
    return _ || null == a || "" === a ? null : (0, r.jsxs)("div", {
      children: [(0, r.jsx)("div", {
        ref: C,
        className: o()(p.descriptionClamp, S && p.maxBioHeight),
        onBlur: N,
        children: (0, r.jsx)(d.Z, {
          userBio: a,
          setLineClamp: false,
          textColor: "text-strong"
        })
      }), (O || S) && (0, r.jsx)("div", {
        className: p.viewFullBio,
        children: (0, r.jsx)(s.Avr, {
          textVariant: "text-xs/normal",
          size: "sm",
          variant: "secondary",
          text: f.intl.string(f.t.YDiPq8),
          onClick: A,
          disabled: m
        })
      })]
    })
  })