/** Chunk was on 16120 **/
/** chunk id: 833737, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => C
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
let C = (0, Chunk108843.Z)((0, Chunk883385.Z)(function(e) {
  var t;
  let {
    user: n,
    guildId: u,
    channelId: c,
    context: M,
    onSelect: C,
    moderationAlertId: I,
    analyticsLocation: A,
    analyticsLocations: T,
    onCloseContextMenu: D,
    showTransferOwnershipItem: w
  } = e, {
    analyticsLocations: x
  } = (0, f.ZP)(d.Z.CONTEXT_MENU), U = (0, s.O)(), R = null != (t = null == T ? true : T[0]) ? t : x[0], k = (0, O.sE)(u, {
    location: R,
    targetUserId: n.id
  }), L = (0, i.e7)([y.Z], () => {
    var e;
    return null != (e = y.Z.getUserVoiceChannelId(u, n.id)) ? e : true
  }, [u, n.id]), q = r.useCallback(() => {
    k(O.jQ.COPY_ID)
  }, [k]), B = (0, i.e7)([E.ZP], () => E.ZP.isMember(u, n.id), [u, n.id]), G = (0, _.Z)({
    userId: n.id,
    guildId: u,
    sourceAnalyticsLocations: T
  }), V = (0, j.Z)(n.id, M), F = (0, g.Z)({
    guildId: u,
    userId: n.id,
    analyticsLocation: null != A ? A : U.location,
    analyticsLocations: [R],
    context: M
  }), K = (0, Z.Z)({
    user: n,
    guildId: u,
    location: R,
    channelId: c
  }), Y = (0, P.Z)({
    user: n,
    guildId: u,
    location: R,
    channelId: c
  }), Q = (0, p.Z)(n, u, null != c ? c : L, R), H = (0, v.Z)(c, I), W = (0, h.Z)(n, u), X = (0, S.Z)(n.id, u, false, R), z = (0, b.Z)({
    id: n.id,
    label: N.intl.string(N.t["/AXYnJ"]),
    onSuccess: q
  }), J = (0, m.Z)(n, u), $ = !!(null == n ? true : n.isNonUserBot());
  return (0, l.jsxs)(a.v2r, {
    navId: "user-context",
    onClose: () => {
      (0, o.Zy)(), null == D || D()
    },
    "aria-label": N.intl.string(N.t.liqwPD),
    onSelect: C,
    children: [!$ && (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsxs)(a.kSQ, {
        children: [G, V]
      }), (0, l.jsxs)(a.kSQ, {
        children: [F, Y, K]
      }), B && (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(a.kSQ, {
          children: Q
        }), (0, l.jsxs)(a.kSQ, {
          children: [X, J]
        })]
      }), null != I ? H : null, w && null != W ? (0, l.jsx)(a.kSQ, {
        children: W
      }) : null]
    }), (0, l.jsx)(a.kSQ, {
      children: z
    })]
  })
}, {
  object: Chunk981631.qAy.CONTEXT_MENU
}), [Chunk100527.Z.CONTEXT_MENU, Chunk100527.Z.GUILD_MODERATION_USER_MENU])