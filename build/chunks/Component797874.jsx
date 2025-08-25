/** Chunk was on web.js **/
/** chunk id: 797874, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => T
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk810568 = require("./810568.js"),
  Chunk774073 = require("./774073.js"),
  Chunk916317 = require("./916317.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk77498 = require("./77498.js"),
  Chunk768581 = require("./768581.js"),
  Chunk124072 = require("./124072.jsx"),
  Chunk457926 = require("./457926.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk695719 = require("./695719.js");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      y(e, t, n[t])
    })
  }
  return e
}

function v(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function I(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : v(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let T = function(e) {
  let {
    gameId: t,
    channelId: o
  } = e, y = i.useRef(null), v = (0, s.e7)([p.Z], () => p.Z.getDetectableGame(t)), T = (0, s.e7)([_.Z], () => _.Z.getChannel(o)), S = null != T ? T.getGuildId() : null, A = null != v ? e => {
    (0, c.jW)(e, async () => {
      let {
        default: e
      } = await n.e("51064").then(n.bind(n, 631861));
      return t => (0, r.jsx)(e, I(O({}, t), {
        game: v,
        guildId: S
      }))
    })
  } : true, C = null != v ? (0, r.jsx)("img", {
    alt: "",
    className: a()(b.icon, b.imageIcon),
    src: h.ZP.getApplicationIconURL({
      id: v.id,
      icon: v.icon,
      size: 32
    })
  }) : null, N = (0, d.ZP)({
    applicationId: t,
    location: "GameMention",
    source: u.m1.GameMention,
    trackEntryPointImpression: false,
    autoTrackExposure: false
  }), R = i.useCallback(() => {
    (0, l.ZDy)(async () => {
      let {
        default: e
      } = await n.e("36427").then(n.bind(n, 196738));
      return t => (0, r.jsx)(e, O({}, t))
    })
  }, []), P = null != v ? "@game ".concat(v.name) : true;
  return (0, r.jsx)(f.Z, {
    applicationId: t,
    targetElementRef: y,
    children: e => {
      var n;
      return (0, r.jsx)(l.DY3, {
        element: "span",
        text: P,
        "aria-label": P,
        delay: 750,
        children: (0, r.jsxs)(m.Z, I(O({
          onContextMenu: A,
          ref: y
        }, e), {
          onClick: n => {
            if (N.shouldOpenGameProfile && null != t) {
              var r;
              null == (r = e.onClick) || r.call(e, n)
            } else R()
          },
          children: [(0, r.jsx)(g.Z, {
            children: C
          }), (0, r.jsx)("span", {
            className: b.name,
            children: null != (n = null == v ? true : v.name) ? n : E.intl.string(E.t["11pdXV"])
          })]
        }))
      })
    }
  })
}