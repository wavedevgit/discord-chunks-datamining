/** Chunk was on web.js **/
/** chunk id: 385499, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk981729 = require("./981729.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk674563 = require("./674563.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk182171 = require("./182171.js");

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

function _(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let h = e => {
  let {
    invertColor: t = false,
    type: n = l.Hb.BOT,
    className: i,
    verified: d,
    hideIcon: _ = false,
    useRemSizes: h = false,
    children: m = []
  } = e, g = null, E = c.intl.string(c.t.g76OcH), b = t ? u.botTagInvert : u.botTagRegular;
  switch (n) {
    case l.Hb.SYSTEM_DM:
    case l.Hb.OFFICIAL:
      d = true, E = c.intl.string(c.t["7s687u"]), g = c.intl.string(c.t.lKQ7Wl);
      break;
    case l.Hb.SERVER:
      g = c.intl.string(c.t.PuJGuL);
      break;
    case l.Hb.ORIGINAL_POSTER:
      g = c.intl.string(c.t.fyE8sL);
      break;
    case l.Hb.STAFF_ONLY_DM:
      g = c.intl.string(c.t.oMx98P);
      break;
    case l.Hb.NOT_STAFF_WARNING:
      g = c.intl.string(c.t.UWhXbG), b = u.botTagNotStaffWarning;
      break;
    case l.Hb.REMIX:
      d = false, g = c.intl.string(c.t.uXDG39);
      break;
    case l.Hb.BOT:
    default:
      g = c.intl.string(c.t["9RNkeH"])
  }
  let y = n === l.Hb.ORIGINAL_POSTER,
    O = n === l.Hb.REMIX,
    v = null;
  d && (v = (0, r.jsx)(a.u, {
    text: E,
    align: "center",
    position: "top",
    children: e => (0, r.jsx)(s.kSu, p(f({}, e), {
      className: u.botTagVerified,
      color: s.TVs.colors.WHITE
    }))
  }));
  let I = e => (0, r.jsxs)("span", p(f({}, e), {
    className: o()(i, b, h ? u.rem : u.px, {
      [u.botTagOP]: y,
      [u.botTagRemix]: O
    }),
    children: [_ ? null : v, m, (0, r.jsx)("span", {
      className: u.botText,
      children: g
    })]
  }));
  switch (n) {
    case l.Hb.REMIX:
      return (0, r.jsx)(a.u, {
        text: c.intl.string(c.t.xb0str),
        position: "top",
        children: e => I(e)
      });
    case l.Hb.ORIGINAL_POSTER:
      return (0, r.jsx)(a.u, {
        text: c.intl.string(c.t.uN6Emp),
        position: "top",
        children: e => I(e)
      });
    default:
      return I()
  }
};
h.Types = Chunk674563.Hb;
let m = h