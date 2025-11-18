/** Chunk was on web.js **/
/** chunk id: 250285, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk748780 = require("./748780.js"),
  Chunk91192 = require("./91192.jsx"),
  Chunk793030 = require("./793030.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk892001 = require("./892001.js"),
  Chunk441863 = require("./441863.js");

function _(e, t, n) {
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
      _(e, t, n[t])
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
    className: _
  } = e, h = 1, [g, E] = i.useState(false), {
    analyticsLocations: b
  } = (0, u.ZP)(), y = i.useCallback(() => {
    (0, d.openUserProfileModal)({
      userId: t,
      sourceAnalyticsLocations: b
    })
  }, [t, b]), O = () => {
    E(true)
  }, v = () => {
    E(false)
  };
  return (0, r.jsx)(l.mh, {
    id: t,
    children: e => (0, r.jsx)(c.tEY, {
      offset: {
        left: false,
        right: false
      },
      children: (0, r.jsx)(s.Z.div, m(p({
        style: {
          opacity: h
        },
        className: o()(f.rowItem, _, {
          [f.last]: a,
          [f.active]: g
        }),
        onMouseEnter: O,
        onMouseLeave: v,
        onClick: y
      }, e), {
        children: n(g)
      }))
    })
  })
}