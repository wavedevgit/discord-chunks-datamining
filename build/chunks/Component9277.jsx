/** Chunk was on web.js **/
/** chunk id: 9277, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => T
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk524825 = require("./524825.js"),
  Chunk442837 = require("./442837.js"),
  Chunk114101 = require("./114101.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk28546 = require("./28546.js"),
  Chunk581883 = require("./581883.js"),
  Chunk459273 = require("./459273.jsx"),
  Chunk443603 = require("./443603.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk957825 = require("./957825.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk744114 = require("./744114.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      b(e, t, n[t])
    })
  }
  return e
}

function O(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function v(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : O(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function I(e, t) {
  let {
    disabled: n,
    type: a
  } = e, [b, O] = i.useState(false), I = (0, l.e7)([f.Z], () => {
    var e, t;
    return b && Object.values(null != (t = null == (e = f.Z.frecencyWithoutFetchingLatest.favoriteGifs) ? true : e.gifs) ? t : {}).length <= 2
  }), [T, S, A] = (0, d.Iu)(e => [e.activeView, e.activeViewType, e.pickerId], s.X), C = i.useRef(0), N = i.useCallback(() => {
    O(true), clearTimeout(C.current), C.current = setTimeout(() => {
      O(false), C.current = 0
    }, 2e3)
  }, []);
  (0, _.yp)({
    event: h.CkL.FAVORITE_GIF,
    handler: N
  });
  let R = i.useCallback(() => {
      (0, d.RO)(m.X1.GIF, a)
    }, [a]),
    {
      Component: P,
      events: w,
      play: D
    } = (0, c.V)();
  if (n) return null;
  let x = T === m.X1.GIF && S === a;
  return (0, r.jsx)(u.ua7, {
    text: I ? g.intl.string(g.t.mE2e8P) : null,
    forceOpen: true,
    children: e => (0, r.jsx)("div", v(y({
      ref: t,
      className: o()(m.CT, E.buttonContainer)
    }, e), {
      children: (0, r.jsx)(p.Z, {
        className: E.button,
        onMouseEnter: w.onMouseEnter,
        onMouseLeave: w.onMouseLeave,
        onClick: () => {
          R(), D()
        },
        isActive: x,
        pulse: b,
        "aria-label": g.intl.string(g.t.PtVpk5),
        "aria-expanded": x,
        "aria-haspopup": "dialog",
        "aria-controls": A,
        children: (0, r.jsx)(P, {
          size: "refresh_sm",
          color: "currentColor"
        })
      })
    }))
  })
}
let T = Chunk647438.memo(Chunk647438.forwardRef(I))