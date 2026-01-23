/** Chunk was on web.js **/
/** chunk id: 442671, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => g
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk615300 = require("./615300.js"),
  Chunk837381 = require("./837381.jsx"),
  Chunk158954 = require("./158954.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk657331 = require("./657331.js"),
  Chunk331011 = require("./331011.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
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

function h(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let g = e => {
  let {
    userId: t,
    children: n,
    isLast: a,
    className: p
  } = e, h = 1, [g, E] = i.useState(false), {
    analyticsLocations: y
  } = (0, u.Ay)(), b = i.useCallback(() => {
    (0, d.openUserProfileModal)({
      userId: t,
      sourceAnalyticsLocations: y
    })
  }, [t, y]), O = () => {
    E(true)
  }, v = () => {
    E(false)
  };
  return (0, r.jsx)(l.tG, {
    id: t,
    children: e => (0, r.jsx)(c.vN3, {
      offset: {
        left: false,
        right: false
      },
      children: (0, r.jsx)(o.A.div, m(_({
        style: {
          opacity: h
        },
        className: s()(f.KG, p, {
          [f.HV]: a,
          [f.vu]: g
        }),
        onMouseEnter: O,
        onMouseLeave: v,
        onClick: b
      }, e), {
        children: n(g)
      }))
    })
  })
}