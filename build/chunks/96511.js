/** Chunk was on 97492 **/
/** chunk id: 96511, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
}), require("./747238.js");
var Chunk284009 = require("./284009.js"),
  l = require.n(Chunk284009),
  Chunk698441 = require("./698441.js"),
  Chunk71393 = require("./71393.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk240248 = require("./240248.js"),
  Chunk427262 = require("./427262.js"),
  Chunk322387 = require("./322387.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function h(e) {
  let {
    username: t,
    applicationId: n,
    renderApplication: r,
    withApplication: l,
    withDefault: i
  } = e;
  return null != n ? p.intl.format(l, {
    username: t,
    applicationName: () => r(n)
  }) : p.intl.format(i, {
    username: t
  })
}

function b(e) {
  var t, n, r, b, g, m, A, y, O, j, v, x, E, _, C;
  let {
    item: S,
    renderApplication: I
  } = e, N = null != (t = null == (r = S.other_user) ? true : r.id) ? t : f.dJq, T = u.Ay.getName(o.default.getUser(null == (b = S.other_user) ? true : b.id)), P = S.applicationId;
  switch (S.type) {
    case d.Uo.FRIEND_REQUESTS_GROUPED:
      let w = u.Ay.getName(o.default.getUser(null == (A = S.other_users) || null == (m = A[0]) ? true : m.id)),
        R = u.Ay.getName(o.default.getUser(null == (O = S.other_users) || null == (y = O[1]) ? true : y.id)),
        D = Math.max((null != (g = null == (j = S.other_users) ? true : j.length) ? g : 0) - 2, 0);
      return p.intl.format(p.t.g5xyIC, {
        user: w,
        user2: R,
        count: D
      });
    case d.Uo.MOBILE_NATIVE_UPDATE_AVAILABLE:
      let M = null != (v = null == (x = S.local_id) ? true : x.split("_").pop()) ? v : "unknown";
      return "Update to build ".concat(M, " available!");
    case d.hW.FRIEND_SUGGESTION_CREATED:
      return s.A.getRelationshipType(N), f.eA$.PENDING_OUTGOING, null != (E = S.body) ? E : "";
    case d.hW.GUILD_SCHEDULED_EVENT_STARTED:
      let L = S.guild_scheduled_event_id,
        G = null != L ? i.Ay.getGuildScheduledEvent(L) : null,
        k = null == G ? true : G.name,
        U = null == (C = a.A.getGuild(null == G ? true : G.guild_id)) ? true : C.name,
        V = (0, i.AZ)(null != G ? G : true);
      return (0, c.uJ)(U) || (0, c.uJ)(k) || !V ? null != (_ = S.body) ? _ : "" : p.intl.format(p.t.AyvfXR, {
        event_name: k,
        guild_name: U
      });
    case d.Uo.INCOMING_FRIEND_REQUESTS:
      return h({
        username: T,
        applicationId: P,
        renderApplication: I,
        withApplication: p.t["9Dgf1L"],
        withDefault: p.t.uIomXw
      });
    case d.Uo.INCOMING_FRIEND_REQUESTS_ACCEPTED:
      return h({
        username: T,
        applicationId: P,
        renderApplication: I,
        withApplication: p.t.nnC1q9,
        withDefault: p.t["5Uzkdp"]
      });
    case d.hW.FRIEND_REQUEST_ACCEPTED:
      return h({
        username: T,
        applicationId: P,
        renderApplication: I,
        withApplication: p.t.jXlYiF,
        withDefault: p.t.McYRBk
      });
    case d.Uo.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED:
      return l()(null != P, "Expected application id for ".concat(S.type)), p.intl.format(p.t["BB/0vn"], {
        username: T,
        applicationName: () => I(P)
      });
    case d.Uo.INCOMING_GAME_FRIEND_REQUESTS:
      return l()(null != P, "Expected application id for ".concat(S.type)), p.intl.format(p.t["7cqOLI"], {
        username: T,
        applicationName: () => I(P)
      });
    case d.hW.GAME_FRIEND_REQUEST_ACCEPTED:
      if (null == P) return S.body;
      return p.intl.format(p.t.Wi64vN, {
        username: T,
        applicationName: () => I(P)
      })
  }
  return null != (n = S.body) ? n : ""
}