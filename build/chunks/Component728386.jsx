/** Chunk was on web.js **/
/** chunk id: 728386, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk574583 = require("./574583.js"),
  Chunk532772 = require("./532772.jsx"),
  Chunk28546 = require("./28546.js"),
  Chunk443603 = require("./443603.jsx"),
  Chunk957825 = require("./957825.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk744114 = require("./744114.js");

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

function E(e, t) {
  let {
    disabled: n,
    type: a
  } = e, [p, m] = (0, c.Iu)(e => [e.activeView, e.pickerId], s.X), E = false, b = p === d.X1.STICKER, y = false, O = i.useCallback(() => {
    (0, c.RO)(d.X1.STICKER, a)
  }, [a]), {
    Component: v,
    events: I,
    play: S
  } = (0, l.z)();
  return n ? null : (0, r.jsx)("div", {
    className: o()(d.CT, _.buttonContainer),
    ref: t,
    children: (0, r.jsx)(u.Z, g(h({
      className: o()(_.button, _.stickerButton)
    }, I), {
      onClick: () => {
        O(), S()
      },
      isActive: b,
      "aria-label": f.intl.string(f.t.rZpidU),
      "aria-expanded": b,
      "aria-haspopup": "dialog",
      "aria-controls": m,
      sparkle: E,
      notification: y ? u.j.UPDATE : null,
      children: (0, r.jsx)(v, {
        size: "refresh_sm",
        color: "currentColor"
      })
    }))
  })
}
let b = Chunk647438.memo(Chunk647438.forwardRef(E))