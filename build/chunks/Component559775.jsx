/** Chunk was on web.js **/
/** chunk id: 559775, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => y
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk942381 = require("./942381.js"),
  Chunk541952 = require("./541952.jsx"),
  Chunk151271 = require("./151271.js"),
  Chunk545428 = require("./545428.jsx"),
  Chunk698279 = require("./698279.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk111314 = require("./111314.js");

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

function E(e, t) {
  let {
    disabled: n,
    type: a,
    channel: _
  } = e, [m, E, y, b] = (0, c.RQ)(e => [e.activeView, e.pickerId, e.activeChannelId, e.activeViewType], s.x), O = false, v = m === d.kx.STICKER && b === a && y === _.id, A = false, I = i.useCallback(() => {
    (0, c.r$)(d.kx.STICKER, a, _.id)
  }, [a, _.id]), {
    Component: S,
    events: T,
    play: C
  } = (0, l.g)();
  return n ? null : (0, r.jsx)("div", {
    className: o()(d.VQ, p.UD),
    ref: t,
    children: (0, r.jsx)(u.A, g(h({
      className: o()(p.x6, p.KE)
    }, T), {
      onClick: () => {
        I(), C()
      },
      isActive: v,
      "aria-label": f.intl.string(f.t.rZpidU),
      "aria-expanded": v,
      "aria-haspopup": "dialog",
      "aria-controls": E,
      sparkle: O,
      notification: A ? u.V.UPDATE : null,
      children: (0, r.jsx)(S, {
        size: "refresh_sm",
        color: "currentColor"
      })
    }))
  })
}
let y = Chunk64700.memo(Chunk64700.forwardRef(E))