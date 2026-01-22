/** Chunk was on 12970 **/
/** chunk id: 104849, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => I
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk847767 = require("./847767.jsx"),
  Chunk358367 = require("./358367.jsx"),
  Chunk212245 = require("./212245.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk50268 = require("./50268.jsx"),
  Chunk346247 = require("./346247.jsx"),
  Chunk504049 = require("./504049.js"),
  Chunk696451 = require("./696451.js"),
  Chunk977997 = require("./977997.js"),
  Chunk291247 = require("./291247.jsx"),
  Chunk239211 = require("./239211.jsx"),
  Chunk399476 = require("./399476.jsx"),
  Chunk301541 = require("./301541.jsx"),
  Chunk252726 = require("./252726.jsx"),
  Chunk103629 = require("./103629.jsx"),
  Chunk521819 = require("./521819.jsx"),
  Chunk243949 = require("./243949.jsx"),
  Chunk180798 = require("./180798.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let I = (0, Chunk358367.A)((0, Chunk847767.A)(function(e) {
  var t;
  let {
    user: n,
    guildId: u,
    channelId: c,
    context: P,
    onSelect: I,
    moderationAlertId: D,
    analyticsLocation: T,
    analyticsLocations: x,
    onCloseContextMenu: N,
    showTransferOwnershipItem: w
  } = e, {
    analyticsLocations: G
  } = (0, A.Ay)(d.A.CONTEXT_MENU), R = (0, s.p)(), U = null != (t = null == x ? true : x[0]) ? t : G[0], B = (0, O.$9)(u, {
    location: U,
    targetUserId: n.id
  }), L = (0, i.bG)([y.A], () => {
    var e;
    return null != (e = y.A.getUserVoiceChannelId(u, n.id)) ? e : true
  }, [u, n.id]), k = l.useCallback(() => {
    B(O.Nj.COPY_ID)
  }, [B]), V = (0, i.bG)([g.Ay], () => g.Ay.isMember(u, n.id), [u, n.id]), F = (0, S.A)({
    userId: n.id,
    guildId: u,
    sourceAnalyticsLocations: x
  }), H = (0, m.A)(n.id, P), K = (0, f.A)({
    guildId: u,
    userId: n.id,
    analyticsLocation: null != T ? T : R.location,
    analyticsLocations: [U],
    context: P
  }), Y = (0, E.A)({
    user: n,
    guildId: u,
    location: U,
    channelId: c
  }), W = (0, j.A)({
    user: n,
    guildId: u,
    location: U,
    channelId: c
  }), X = (0, p.A)(n, u, null != c ? c : L, U), Z = (0, _.A)(c, D), $ = (0, h.A)(n, u), q = (0, M.A)(n.id, u, false, U), z = (0, b.A)({
    id: n.id,
    label: C.intl.string(C.t["/AXYnE"]),
    onSuccess: k
  }), Q = (0, v.A)(n, u), J = !!(null == n ? true : n.isNonUserBot());
  return (0, r.jsxs)(a.W1t, {
    navId: "user-context",
    onClose: () => {
      (0, o.Z_)(), null == N || N()
    },
    "aria-label": C.intl.string(C.t.liqwPJ),
    onSelect: I,
    children: [!J && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)(a.rXV, {
        children: [F, H]
      }), (0, r.jsxs)(a.rXV, {
        children: [K, W, Y]
      }), V && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(a.rXV, {
          children: X
        }), (0, r.jsxs)(a.rXV, {
          children: [q, Q]
        })]
      }), null != D ? Z : null, w && null != $ ? (0, r.jsx)(a.rXV, {
        children: $
      }) : null]
    }), (0, r.jsx)(a.rXV, {
      children: z
    })]
  })
}, {
  object: Chunk652215.ZSU.CONTEXT_MENU
}), [Chunk793574.A.CONTEXT_MENU, Chunk793574.A.GUILD_MODERATION_USER_MENU])