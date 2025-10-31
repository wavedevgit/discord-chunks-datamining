/** Chunk was on web.js **/
/** chunk id: 420654, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk785717 = require("./785717.jsx"),
  Chunk892001 = require("./892001.js"),
  Chunk280885 = require("./280885.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk108670 = require("./108670.js");

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
let E = 57.75,
  b = Chunk647438.memo(function(e) {
    let {
      user: t,
      onClose: n,
      bio: a,
      hidePersonalInformation: p,
      viewFullBioDisabled: m = false
    } = e, {
      context: b
    } = (0, c.KZ)(), {
      analyticsLocations: y
    } = (0, l.ZP)(), [O, v] = i.useState(false), [I, T] = i.useState(false), S = i.useRef(null), A = e => {
      S.current = e, null != e && (v(!I && e.scrollHeight - e.clientHeight > 1), e.getBoundingClientRect().height > E && T(true))
    }, C = () => {
      null == n || n(), (0, u.openUserProfileModal)(g(h({}, b), {
        userId: t.id,
        sourceAnalyticsLocations: y
      }))
    }, N = e => {
      null == S.current || S.current.contains(e.relatedTarget) || (S.current.scrollTop = 0)
    };
    return p || null == a || "" === a ? null : (0, r.jsxs)("div", {
      children: [(0, r.jsx)("div", {
        ref: A,
        className: o()(_.descriptionClamp, I && _.maxBioHeight),
        onBlur: N,
        children: (0, r.jsx)(d.Z, {
          userBio: a,
          setLineClamp: false,
          textColor: "header-primary"
        })
      }), (O || I) && (0, r.jsx)("div", {
        className: _.viewFullBio,
        children: (0, r.jsx)(s.Avr, {
          textVariant: "text-xs/normal",
          size: "sm",
          variant: "secondary",
          text: f.intl.string(f.t.YDiPq8),
          onClick: C,
          disabled: m
        })
      })]
    })
  })