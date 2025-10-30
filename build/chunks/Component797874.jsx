/** Chunk was on web.js **/
/** chunk id: 797874, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => T
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
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

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      O(e, t, n[t])
    })
  }
  return e
}

function I(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function S(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : I(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let T = function(e) {
  let {
    gameId: t,
    channelId: a
  } = e, O = i.useRef(null), I = (0, s.e7)([h.Z], () => h.Z.getDetectableGame(t)), T = (0, s.e7)([p.Z], () => p.Z.getChannel(a)), A = null != T ? T.getGuildId() : null, C = null != I ? e => {
    (0, u.jW)(e, async () => {
      let {
        default: e
      } = await n.e("51064").then(n.bind(n, 631861));
      return t => (0, r.jsx)(e, S(v({}, t), {
        game: I,
        guildId: A
      }))
    })
  } : true, N = null != I ? (0, r.jsx)("img", {
    alt: "",
    className: o()(y.icon, y.imageIcon),
    src: m.ZP.getApplicationIconURL({
      id: I.id,
      icon: I.icon,
      size: 32
    })
  }) : null, R = (0, f.ZP)({
    applicationId: t,
    location: "GameMention",
    source: d.m1.GameMention,
    trackEntryPointImpression: false,
    autoTrackExposure: false
  }), P = i.useCallback(() => {
    (0, c.ZDy)(async () => {
      let {
        default: e
      } = await n.e("36427").then(n.bind(n, 196738));
      return t => (0, r.jsx)(e, v({}, t))
    })
  }, []), w = null != I ? "@game ".concat(I.name) : true;
  return (0, r.jsx)(_.Z, {
    applicationId: t,
    targetElementRef: O,
    source: d.m1.GameMention,
    children: e => {
      var n;
      return (0, r.jsx)(l.u, {
        asContainer: true,
        tag: "span",
        text: w,
        "aria-label": w,
        delay: 750,
        children: (0, r.jsxs)(g.Z, S(v({
          onContextMenu: C,
          ref: O
        }, e), {
          onClick: n => {
            if (R.shouldOpenGameProfile && null != t) {
              var r;
              null == (r = e.onClick) || r.call(e, n)
            } else P()
          },
          children: [(0, r.jsx)(E.Z, {
            children: N
          }), (0, r.jsx)("span", {
            className: y.name,
            children: null != (n = null == I ? true : I.name) ? n : b.intl.string(b.t["11pdXZ"])
          })]
        }))
      })
    }
  })
}