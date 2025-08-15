/** Chunk was on 16120 **/
/** chunk id: 833737, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => v
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk883385 = require("./883385.jsx"),
  Chunk108843 = require("./108843.jsx"),
  Chunk2052 = require("./2052.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk299206 = require("./299206.jsx"),
  Chunk976192 = require("./976192.jsx"),
  Chunk910693 = require("./910693.js"),
  Chunk271383 = require("./271383.js"),
  Chunk979651 = require("./979651.js"),
  Chunk933409 = require("./933409.jsx"),
  Chunk389052 = require("./389052.jsx"),
  Chunk158508 = require("./158508.jsx"),
  Chunk88966 = require("./88966.jsx"),
  Chunk712301 = require("./712301.jsx"),
  Chunk567711 = require("./567711.jsx"),
  Chunk358386 = require("./358386.jsx"),
  Chunk37258 = require("./37258.jsx"),
  Chunk931617 = require("./931617.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let v = (0, Chunk108843.Z)((0, Chunk883385.Z)(function(e) {
  var t;
  let {
    user: n,
    guildId: u,
    channelId: c,
    context: I,
    onSelect: v,
    moderationAlertId: h,
    analyticsLocation: T,
    analyticsLocations: D,
    onCloseContextMenu: C,
    showTransferOwnershipItem: U
  } = e, {
    analyticsLocations: R
  } = (0, f.ZP)(d.Z.CONTEXT_MENU), L = (0, s.O)(), w = null != (t = null == D ? true : D[0]) ? t : R[0], x = (0, g.sE)(u, {
    location: w,
    targetUserId: n.id
  }), G = (0, i.e7)([y.Z], () => {
    var e;
    return null != (e = y.Z.getUserVoiceChannelId(u, n.id)) ? e : true
  }, [u, n.id]), k = l.useCallback(() => {
    x(g.jQ.COPY_ID)
  }, [x]), B = (0, i.e7)([b.ZP], () => b.ZP.isMember(u, n.id), [u, n.id]), q = (0, A.Z)({
    userId: n.id,
    guildId: u,
    sourceAnalyticsLocations: D
  }), K = (0, j.Z)(n.id, I), F = (0, E.Z)({
    guildId: u,
    userId: n.id,
    analyticsLocation: null != T ? T : L.location,
    analyticsLocations: [w],
    context: I
  }), V = (0, p.Z)({
    user: n,
    guildId: u,
    location: w,
    channelId: c
  }), W = (0, m.Z)({
    user: n,
    guildId: u,
    location: w,
    channelId: c
  }), Y = (0, _.Z)(n, u, null != c ? c : G, w), H = (0, M.Z)(c, h), Q = (0, S.Z)(n, u), X = (0, Z.Z)(n.id, u, false, w), J = (0, O.Z)({
    id: n.id,
    label: N.intl.string(N.t["/AXYnJ"]),
    onSuccess: k
  }), z = (0, P.Z)(n, u), $ = !!(null == n ? true : n.isNonUserBot());
  return (0, r.jsxs)(a.v2r, {
    navId: "user-context",
    onClose: () => {
      (0, o.Zy)(), null == C || C()
    },
    "aria-label": N.intl.string(N.t.liqwPD),
    onSelect: v,
    children: [!$ && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)(a.kSQ, {
        children: [q, K]
      }), (0, r.jsxs)(a.kSQ, {
        children: [F, W, V]
      }), B && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(a.kSQ, {
          children: Y
        }), (0, r.jsxs)(a.kSQ, {
          children: [X, z]
        })]
      }), null != h ? H : null, U && null != Q ? (0, r.jsx)(a.kSQ, {
        children: Q
      }) : null]
    }), (0, r.jsx)(a.kSQ, {
      children: J
    })]
  })
}, {
  object: Chunk981631.qAy.CONTEXT_MENU
}), [Chunk100527.Z.CONTEXT_MENU, Chunk100527.Z.GUILD_MODERATION_USER_MENU])