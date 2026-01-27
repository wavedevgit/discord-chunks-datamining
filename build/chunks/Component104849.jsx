/** Chunk was on 12970 **/
/** chunk id: 104849, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => T
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
let T = (0, Chunk358367.A)((0, Chunk847767.A)(function(e) {
  var t;
  let {
    user: n,
    guildId: u,
    channelId: c,
    context: h,
    onSelect: T,
    moderationAlertId: N,
    analyticsLocation: C,
    analyticsLocations: P,
    onCloseContextMenu: R,
    showTransferOwnershipItem: U
  } = e, {
    analyticsLocations: L
  } = (0, A.Ay)(d.A.CONTEXT_MENU), w = (0, s.p)(), G = null != (t = null == P ? true : P[0]) ? t : L[0], x = (0, E.$9)(u, {
    location: G,
    targetUserId: n.id
  }), B = (0, i.bG)([y.A], () => {
    var e;
    return null != (e = y.A.getUserVoiceChannelId(u, n.id)) ? e : true
  }, [u, n.id]), k = l.useCallback(() => {
    x(E.Nj.COPY_ID)
  }, [x]), V = (0, i.bG)([g.Ay], () => g.Ay.isMember(u, n.id), [u, n.id]), W = (0, I.A)({
    userId: n.id,
    guildId: u,
    sourceAnalyticsLocations: P
  }), F = (0, m.A)(n.id, h), K = (0, b.A)({
    guildId: u,
    userId: n.id,
    analyticsLocation: null != C ? C : w.location,
    analyticsLocations: [G],
    context: h
  }), H = (0, p.A)({
    user: n,
    guildId: u,
    location: G,
    channelId: c
  }), Y = (0, _.A)({
    user: n,
    guildId: u,
    location: G,
    channelId: c
  }), X = (0, f.A)(n, u, null != c ? c : B, G), q = (0, M.A)(c, N), Q = (0, j.A)(n, u), Z = (0, v.A)(n.id, u, false, G), $ = (0, O.A)({
    id: n.id,
    label: D.intl.string(D.t["/AXYnE"]),
    onSuccess: k
  }), z = (0, S.A)(n, u), J = !!(null == n ? true : n.isNonUserBot());
  return (0, r.jsxs)(a.W1t, {
    "data-menu-migrated": true,
    navId: "user-context",
    onClose: () => {
      (0, o.Z_)(), null == R || R()
    },
    "aria-label": D.intl.string(D.t.liqwPJ),
    onSelect: T,
    children: [!J && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)(a.rXV, {
        children: [W, F]
      }), (0, r.jsxs)(a.rXV, {
        children: [K, Y, H]
      }), V && (0, r.jsxs)(a.rXV, {
        children: [Z, X, z]
      }), null != N ? q : null, U && null != Q ? (0, r.jsx)(a.rXV, {
        children: Q
      }) : null]
    }), (0, r.jsx)(a.rXV, {
      children: $
    })]
  })
}, {
  object: Chunk652215.ZSU.CONTEXT_MENU
}), [Chunk793574.A.CONTEXT_MENU, Chunk793574.A.GUILD_MODERATION_USER_MENU])