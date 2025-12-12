/** Chunk was on 16120 **/
/** chunk id: 833737, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => I
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
let I = (0, Chunk108843.Z)((0, Chunk883385.Z)(function(e) {
  var t;
  let {
    user: n,
    guildId: u,
    channelId: c,
    context: M,
    onSelect: I,
    moderationAlertId: N,
    analyticsLocation: A,
    analyticsLocations: T,
    onCloseContextMenu: D,
    showTransferOwnershipItem: w
  } = e, {
    analyticsLocations: x
  } = (0, f.ZP)(d.Z.CONTEXT_MENU), R = (0, s.O)(), U = null != (t = null == T ? true : T[0]) ? t : x[0], k = (0, O.sE)(u, {
    location: U,
    targetUserId: n.id
  }), L = (0, i.e7)([p.Z], () => {
    var e;
    return null != (e = p.Z.getUserVoiceChannelId(u, n.id)) ? e : true
  }, [u, n.id]), G = r.useCallback(() => {
    k(O.jQ.COPY_ID)
  }, [k]), q = (0, i.e7)([E.ZP], () => E.ZP.isMember(u, n.id), [u, n.id]), B = (0, _.Z)({
    userId: n.id,
    guildId: u,
    sourceAnalyticsLocations: T
  }), F = (0, m.Z)(n.id, M), V = (0, g.Z)({
    guildId: u,
    userId: n.id,
    analyticsLocation: null != A ? A : R.location,
    analyticsLocations: [U],
    context: M
  }), K = (0, Z.Z)({
    user: n,
    guildId: u,
    location: U,
    channelId: c
  }), Y = (0, P.Z)({
    user: n,
    guildId: u,
    location: U,
    channelId: c
  }), Q = (0, y.Z)(n, u, null != c ? c : L, U), H = (0, h.Z)(c, N), W = (0, v.Z)(n, u), X = (0, S.Z)(n.id, u, false, U), z = (0, b.Z)({
    id: n.id,
    label: C.intl.string(C.t["/AXYnE"]),
    onSuccess: G
  }), J = (0, j.Z)(n, u), $ = !!(null == n ? true : n.isNonUserBot());
  return (0, l.jsxs)(a.v2r, {
    navId: "user-context",
    onClose: () => {
      (0, o.Zy)(), null == D || D()
    },
    "aria-label": C.intl.string(C.t.liqwPJ),
    onSelect: I,
    children: [!$ && (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsxs)(a.kSQ, {
        children: [B, F]
      }), (0, l.jsxs)(a.kSQ, {
        children: [V, Y, K]
      }), q && (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(a.kSQ, {
          children: Q
        }), (0, l.jsxs)(a.kSQ, {
          children: [X, J]
        })]
      }), null != N ? H : null, w && null != W ? (0, l.jsx)(a.kSQ, {
        children: W
      }) : null]
    }), (0, l.jsx)(a.kSQ, {
      children: z
    })]
  })
}, {
  object: Chunk981631.qAy.CONTEXT_MENU
}), [Chunk100527.Z.CONTEXT_MENU, Chunk100527.Z.GUILD_MODERATION_USER_MENU])