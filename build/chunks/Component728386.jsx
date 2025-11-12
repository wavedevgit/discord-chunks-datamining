/** Chunk was on web.js **/
/** chunk id: 728386, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk574583 = require("./574583.js"),
  Chunk532772 = require("./532772.jsx"),
  Chunk681715 = require("./681715.js"),
  Chunk400332 = require("./400332.js"),
  Chunk28546 = require("./28546.js"),
  Chunk713913 = require("./713913.js"),
  Chunk443603 = require("./443603.jsx"),
  Chunk957825 = require("./957825.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk564355 = require("./564355.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      g(e, t, n[t])
    })
  }
  return e
}

function b(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function O(e, t) {
  let {
    disabled: n,
    type: a
  } = e, [g, b] = (0, d.Iu)(e => [e.activeView, e.pickerId], s.X), O = false, v = g === p.X1.STICKER, I = false, T = i.useCallback(() => {
    (0, d.RO)(p.X1.STICKER, a)
  }, [a]), {
    Component: S,
    events: A,
    play: C
  } = (0, l.z)(), N = (0, f.v)(u.U);
  return n ? null : (0, r.jsx)("div", {
    className: o()(p.CT, m.buttonContainer),
    ref: t,
    children: (0, r.jsx)(c.u, {
      shouldShow: null != N,
      text: h.intl.string(h.t.oOJ7KU),
      keyboardShortcut: N,
      children: (0, r.jsx)(_.Z, y(E({
        className: o()(m.button, m.stickerButton)
      }, A), {
        onClick: () => {
          T(), C()
        },
        isActive: v,
        "aria-label": h.intl.string(h.t.rZpidU),
        "aria-expanded": v,
        "aria-haspopup": "dialog",
        "aria-controls": b,
        sparkle: O,
        notification: I ? _.j.UPDATE : null,
        children: (0, r.jsx)(S, {
          size: "refresh_sm",
          color: "currentColor"
        })
      }))
    })
  })
}
let v = Chunk647438.memo(Chunk647438.forwardRef(O))