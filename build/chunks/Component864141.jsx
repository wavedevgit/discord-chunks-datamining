/** Chunk was on web.js **/
/** chunk id: 864141, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => w
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk933557 = require("./933557.js"),
  Chunk430824 = require("./430824.js"),
  Chunk957575 = require("./957575.js"),
  Chunk323038 = require("./323038.js"),
  Chunk960870 = require("./960870.js"),
  Chunk139793 = require("./139793.js"),
  Chunk652853 = require("./652853.jsx"),
  Chunk336383 = require("./336383.jsx"),
  Chunk194811 = require("./194811.jsx"),
  Chunk265386 = require("./265386.jsx"),
  Chunk340266 = require("./340266.jsx"),
  Chunk849755 = require("./849755.jsx"),
  Chunk384298 = require("./384298.jsx"),
  Chunk670451 = require("./670451.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk704543 = require("./704543.js");

function N(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function C(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      N(e, t, n[t])
    })
  }
  return e
}

function R(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function P(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : R(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function w(e) {
  let {
    user: t,
    currentUser: n,
    voiceChannel: i,
    className: N,
    onClose: R
  } = e, {
    themeType: w
  } = (0, m.z)(), {
    analyticsLocations: D
  } = (0, c.ZP)(l.Z.USER_PROFILE_VOICE_ACTIVITY_CARD), L = (0, p.Z)({
    display: "voice",
    activity: {
      type: "VOICE"
    },
    voiceChannelId: i.id,
    user: t,
    analyticsLocations: D
  }), x = (0, h.Z)({
    userId: t.id,
    onAction: L
  }), M = (0, a.e7)([d.Z], () => d.Z.getGuild(i.guild_id)), j = (0, _.Z)(i), k = (0, u.ZP)(i), {
    channelStatusEnabled: U
  } = (0, f.D)({
    location: "UserProfileVoiceActivityCard"
  }), G = () => {
    if (t.id !== n.id) return null;
    let e = i.isDM() || i.isGroupDM() ? S.intl.string(S.t["+DsWbW"]) : S.intl.string(S.t.xOVEjY);
    return (0, r.jsx)(s.ua7, {
      text: e,
      children: e => (0, r.jsx)(s.d3s, P(C({}, e), {
        size: "xxs"
      }))
    })
  }, B = () => (0, r.jsx)("div", {
    className: A.actions,
    children: (0, r.jsx)(v.Z, {
      channel: i,
      onAction: L,
      onClose: R
    })
  }), Z = i.isDM() || i.isGroupDM() ? S.intl.string(S.t["9FaEzs"]) : i.isGuildStageVoice() ? S.intl.string(S.t.QygGCA) : S.intl.string(S.t.msxteH);
  return (0, r.jsx)(c.Gt, {
    value: D,
    children: (0, r.jsxs)(g.Z, {
      ref: x,
      className: o()(A.card, N),
      onAction: L,
      onClose: R,
      "aria-label": "".concat(Z, ", ").concat(k),
      children: [(0, r.jsx)(E.Z, {
        text: Z,
        tags: G(),
        contextMenu: (0, r.jsx)(I.Z, {
          display: "voice",
          user: t,
          onClose: R
        })
      }), (0, r.jsx)("div", {
        className: A.body,
        children: (0, r.jsxs)("div", {
          className: A.content,
          children: [(0, r.jsx)(y.Z, {
            users: j,
            channel: i
          }), (0, r.jsxs)("div", {
            className: A.details,
            children: [(0, r.jsx)(b.Z, {
              channel: i,
              guild: M,
              onAction: L,
              onClose: R
            }), U && i.isGuildVoice() && (0, r.jsx)(O.Z, {
              voiceChannel: i,
              onAction: L,
              onClose: R
            }), w === T.lY.MODAL_V2 && B()]
          }), w === T.lY.MODAL && B()]
        })
      }), w !== T.lY.MODAL && w !== T.lY.MODAL_V2 && B()]
    })
  })
}