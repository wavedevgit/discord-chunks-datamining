/** Chunk was on web.js **/
/** chunk id: 368835, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk390551 = require("./390551.js"),
  Chunk130692 = require("./130692.js"),
  Chunk996606 = require("./996606.jsx"),
  Chunk72743 = require("./72743.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}
let p = 1080,
  _ = e => {
    let {
      seats: t,
      participant: n,
      participants: a,
      channel: d,
      idle: _,
      enableAnimations: h = true
    } = e, m = t.find(e => e.claimedBy === n.userId), g = null != m, [E, b] = i.useState(false), y = (0, l.Z)(n), {
      x: O,
      y: v
    } = i.useMemo(() => {
      let e = f({}, n.position);
      if (g) {
        let t = s.Is[m.id - 1];
        null != t && (e.x = t.x + t.player.x, e.y = t.y + t.player.y - y.height)
      }
      return e
    }, [n.position, m, g, y]);
    return (0, r.jsx)("div", {
      className: o()(u.participant, {
        [u.hovering]: E
      }),
      style: {
        transform: "translate3d(".concat(O, "px, ").concat(v, "px, 0)"),
        zIndex: v
      },
      children: g && (0, r.jsx)("div", {
        className: u.avatar,
        children: (0, r.jsx)(c.Z, {
          seats: t,
          claimedSeat: m,
          participant: n,
          participants: a,
          channel: d,
          idle: _,
          flip: O > p,
          handleHover: e => b(e),
          enableAnimations: h
        })
      })
    })
  }