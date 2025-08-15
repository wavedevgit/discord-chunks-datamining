/** Chunk was on 86357 **/
/** chunk id: 753898, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk680018 = require("./680018.jsx"),
  Chunk374415 = require("./374415.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk100527 = require("./100527.js"),
  Chunk43267 = require("./43267.js"),
  Chunk933557 = require("./933557.js"),
  Chunk266076 = require("./266076.jsx"),
  Chunk187237 = require("./187237.jsx"),
  Chunk769409 = require("./769409.jsx"),
  Chunk518311 = require("./518311.jsx"),
  Chunk518950 = require("./518950.js"),
  Chunk967128 = require("./967128.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk963392 = require("./963392.js");

function C(e) {
  var t, n, C;
  let {
    channel: x,
    children: v,
    user: j
  } = e, O = (0, i.e7)([s.Z], () => s.Z.useReducedMotion), E = null != (t = (0, d.ZP)(x)) ? t : "", {
    avatarDecorationSrc: S,
    eventHandlers: P,
    isAnimating: I
  } = (0, g.Z)({
    userId: null == j ? true : j.id,
    size: o.EFr.SIZE_80,
    animateOnHover: true
  });
  return (0, r.jsxs)(b.ZP, (n = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), r.forEach(function(t) {
        var r;
        r = n[t], t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = r
      })
    }
    return e
  }({
    channelId: x.id
  }, P), C = C = {
    children: [(() => {
      let e = !O && I;
      return x.isMultiUserDM() ? (0, r.jsx)(h.v, {
        channel: x,
        editable: true,
        location: c.Z.EMPTY_GROUP_DM,
        children: (0, r.jsx)(p.Z, {
          channel: x,
          size: o.EFr.SIZE_80,
          experimentLocation: "empty_messages",
          animated: e,
          "aria-label": E
        })
      }) : (0, r.jsx)(o.qEK, {
        "aria-label": E,
        size: o.EFr.SIZE_80,
        src: (0, u.x)(x, 80, e),
        avatarDecoration: S
      })
    })(), (0, r.jsx)(b.Ot, {
      children: E
    }), (0, r.jsx)(b.jz, {
      children: v
    }), x.isMultiUserDM() && (0, r.jsxs)(a.h, {
      className: _.buttonContainer,
      children: [(0, r.jsx)(m.l, {
        channel: x,
        text: y.intl.string(y.t["6Qgren"]),
        icon: o.ejJ
      }), (0, r.jsx)(l.z, {
        icon: o.vdY,
        variant: "secondary",
        text: y.intl.string(y.t["5Q9+/P"]),
        "aria-label": y.intl.string(y.t["5Q9+/P"]),
        onClick: () => (0, f.B)(x.id, c.Z.EMPTY_GROUP_DM)
      })]
    })]
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(C)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(C)).forEach(function(e) {
    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(C, e))
  }), n))
}