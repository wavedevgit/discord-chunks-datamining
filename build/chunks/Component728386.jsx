/** Chunk was on web.js **/
/** chunk id: 728386, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk55160 = require("./55160.js"),
  Chunk532772 = require("./532772.jsx"),
  Chunk681715 = require("./681715.js"),
  Chunk400332 = require("./400332.js"),
  Chunk28546 = require("./28546.js"),
  Chunk713913 = require("./713913.js"),
  Chunk443603 = require("./443603.jsx"),
  Chunk957825 = require("./957825.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk72775 = require("./72775.js");

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
    type: a,
    channel: g
  } = e, [b, O, v, S] = (0, d.Iu)(e => [e.activeView, e.pickerId, e.activeChannelId, e.activeViewType], s.X), I = false, T = b === _.X1.STICKER && S === a && v === g.id, C = false, A = i.useCallback(() => {
    (0, d.RO)(_.X1.STICKER, a, g.id)
  }, [a, g.id]), {
    Component: N,
    events: P,
    play: R
  } = (0, l.z)(), w = (0, f.v)(u.U);
  return n ? null : (0, r.jsx)("div", {
    className: o()(_.CT, h.buttonContainer),
    ref: t,
    children: (0, r.jsx)(c.u, {
      shouldShow: null != w,
      text: m.intl.string(m.t.oOJ7KU),
      keyboardShortcut: w,
      children: (0, r.jsx)(p.Z, y(E({
        className: o()(h.button, h.stickerButton)
      }, P), {
        onClick: () => {
          A(), R()
        },
        isActive: T,
        "aria-label": m.intl.string(m.t.rZpidU),
        "aria-expanded": T,
        "aria-haspopup": "dialog",
        "aria-controls": O,
        sparkle: I,
        notification: C ? p.j.UPDATE : null,
        children: (0, r.jsx)(N, {
          size: "refresh_sm",
          color: "currentColor"
        })
      }))
    })
  })
}
let v = Chunk473749.memo(Chunk473749.forwardRef(O))