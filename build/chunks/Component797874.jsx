/** Chunk was on web.js **/
/** chunk id: 797874, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => T
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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

function S(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : S(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let T = function(e) {
  let {
    gameId: t,
    channelId: o
  } = e, O = i.useRef(null), S = (0, s.e7)([m.Z], () => m.Z.getDetectableGame(t)), T = (0, s.e7)([_.Z], () => _.Z.getChannel(o)), C = null != T ? T.getGuildId() : null, A = null != S ? e => {
    (0, u.jW)(e, async () => {
      let {
        default: e
      } = await n.e("51064").then(n.bind(n, 631861));
      return t => (0, r.jsx)(e, I(v({}, t), {
        game: S,
        guildId: C
      }))
    })
  } : true, N = null != S ? (0, r.jsx)("img", {
    alt: "",
    className: a()(y.icon, y.imageIcon),
    src: h.ZP.getApplicationIconURL({
      id: S.id,
      icon: S.icon,
      size: 32
    })
  }) : null, P = (0, f.ZP)({
    applicationId: t,
    location: "GameMention",
    source: d.m1.GameMention,
    trackEntryPointImpression: false,
    autoTrackExposure: false
  }), R = i.useCallback(() => {
    (0, c.ZDy)(async () => {
      let {
        default: e
      } = await n.e("36427").then(n.bind(n, 196738));
      return t => (0, r.jsx)(e, v({}, t))
    })
  }, []), w = null != S ? "@game ".concat(S.name) : true;
  return (0, r.jsx)(p.Z, {
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
        children: (0, r.jsxs)(g.Z, I(v({
          onContextMenu: A,
          ref: O
        }, e), {
          onClick: n => {
            if (P.shouldOpenGameProfile && null != t) {
              var r;
              null == (r = e.onClick) || r.call(e, n)
            } else R()
          },
          children: [(0, r.jsx)(E.Z, {
            children: N
          }), (0, r.jsx)("span", {
            className: y.name,
            children: null != (n = null == S ? true : S.name) ? n : b.intl.string(b.t["11pdXZ"])
          })]
        }))
      })
    }
  })
}