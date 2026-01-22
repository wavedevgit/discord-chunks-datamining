/** Chunk was on web.js **/
/** chunk id: 559775, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => A
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk942381 = require("./942381.js"),
  Chunk541952 = require("./541952.jsx"),
  Chunk435371 = require("./435371.js"),
  Chunk568765 = require("./568765.js"),
  Chunk151271 = require("./151271.js"),
  Chunk184761 = require("./184761.js"),
  Chunk545428 = require("./545428.jsx"),
  Chunk698279 = require("./698279.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk111314 = require("./111314.js");

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
  } = e, [b, O, A, v] = (0, d.RQ)(e => [e.activeView, e.pickerId, e.activeChannelId, e.activeViewType], o.x), S = false, I = b === _.kx.STICKER && v === a && A === g.id, T = false, C = i.useCallback(() => {
    (0, d.r$)(_.kx.STICKER, a, g.id)
  }, [a, g.id]), {
    Component: N,
    events: R,
    play: w
  } = (0, l.g)(), P = (0, f.p)(u.w);
  return n ? null : (0, r.jsx)("div", {
    className: s()(_.VQ, m.UD),
    ref: t,
    children: (0, r.jsx)(c.m_, {
      shouldShow: null != P,
      text: h.intl.string(h.t.oOJ7KU),
      keyboardShortcut: P,
      children: (0, r.jsx)(p.A, y(E({
        className: s()(m.x6, m.KE)
      }, R), {
        onClick: () => {
          C(), w()
        },
        isActive: I,
        "aria-label": h.intl.string(h.t.rZpidU),
        "aria-expanded": I,
        "aria-haspopup": "dialog",
        "aria-controls": O,
        sparkle: S,
        notification: T ? p.V.UPDATE : null,
        children: (0, r.jsx)(N, {
          size: "refresh_sm",
          color: "currentColor"
        })
      }))
    })
  })
}
let A = Chunk64700.memo(Chunk64700.forwardRef(O))