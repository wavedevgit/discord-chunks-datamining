/** Chunk was on web.js **/
/** chunk id: 442228, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => y
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk183555 = require("./183555.jsx"),
  Chunk657331 = require("./657331.js"),
  Chunk389996 = require("./389996.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk200894 = require("./200894.js");

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
  y = Chunk64700.memo(function(e) {
    let {
      user: t,
      onClose: n,
      bio: a,
      hidePersonalInformation: _,
      viewFullBioDisabled: m = false
    } = e, {
      context: y
    } = (0, c.NJ)(), {
      analyticsLocations: b
    } = (0, l.Ay)(), [O, v] = i.useState(false), [A, I] = i.useState(false), S = i.useRef(null), T = e => {
      S.current = e, null == e || (v(!A && e.scrollHeight - e.clientHeight > 1), e.getBoundingClientRect().height > E && I(true))
    }, C = () => {
      null == n || n(), (0, u.openUserProfileModal)(g(h({}, y), {
        userId: t.id,
        sourceAnalyticsLocations: b
      }))
    }, N = e => {
      null == S.current || S.current.contains(e.relatedTarget) || (S.current.scrollTop = 0)
    };
    return _ || null == a || "" === a ? null : (0, r.jsxs)("div", {
      children: [(0, r.jsx)("div", {
        ref: T,
        className: o()(p.mA, A && p.Em),
        onBlur: N,
        children: (0, r.jsx)(d.A, {
          userBio: a,
          setLineClamp: false,
          textColor: "text-strong"
        })
      }), (O || A) && (0, r.jsx)("div", {
        className: p.HV,
        children: (0, r.jsx)(s.QWc, {
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