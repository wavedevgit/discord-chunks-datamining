/** Chunk was on web.js **/
/** chunk id: 29909, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk68405 = require("./68405.js"),
  Chunk985375 = require("./985375.js"),
  Chunk585483 = require("./585483.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk54816 = require("./54816.js");

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
let E = Chunk73800.memo(function(e) {
  let {
    width: t,
    height: n,
    src: o,
    url: p,
    format: m,
    className: E
  } = e, [b, y] = i.useState(false), O = (0, c.hb)((0, l.iy)(p)), v = O ? f.intl.string(f.t["5/NS7+"]) : f.intl.string(f.t.nIH0v7), I = O ? s.r7p : s.vxU;
  i.useEffect(() => {
    if (!b) return;
    let e = setTimeout(() => {
      y(false)
    }, 500);
    return () => clearTimeout(e)
  }, [b]);
  let T = e => {
    e.preventDefault(), e.stopPropagation(), y(true), O ? (0, l.PF)(p) : ((0, l.uL)({
      url: p,
      src: o,
      width: t,
      height: n,
      format: m
    }), u.S.dispatch(d.CkL.FAVORITE_GIF))
  };
  return (0, r.jsx)(s.ua7, {
    text: v,
    children: e => (0, r.jsx)(s.P3F, g(h({}, e), {
      className: a()(E, _.gifFavoriteButton, {
        [_.selected]: O,
        [_.showPulse]: b
      }),
      onMouseDown: e => e.preventDefault(),
      onClick: T,
      onDoubleClick: e => e.preventDefault(),
      children: (0, r.jsx)(I, {
        color: "currentColor",
        className: _.icon,
        size: "custom",
        width: 20,
        height: 20
      })
    }))
  })
})