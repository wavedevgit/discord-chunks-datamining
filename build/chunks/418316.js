/** Chunk was on 91488 **/
/** chunk id: 418316, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./35282.js");
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk924301 = require("./924301.js"),
  Chunk430824 = require("./430824.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk624138 = require("./624138.js"),
  Chunk51144 = require("./51144.js"),
  Chunk497089 = require("./497089.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function f(e) {
  let {
    username: t,
    applicationId: n,
    renderApplication: r,
    withApplication: i,
    withDefault: l
  } = e;
  return null != n ? h.intl.format(i, {
    username: t,
    applicationName: () => r(n)
  }) : h.intl.format(l, {
    username: t
  })
}

function g(e) {
  var t, n, r, g, m, b, O, y, _, v, j, x, C, S, E;
  let {
    item: P,
    renderApplication: I
  } = e, N = null != (r = null == (t = P.other_user) ? true : t.id) ? r : p.lds, w = u.ZP.getName(s.default.getUser(null == (n = P.other_user) ? true : n.id)), Z = P.applicationId;
  switch (P.type) {
    case d.O7.FRIEND_REQUESTS_GROUPED:
      let T = u.ZP.getName(s.default.getUser(null == (m = P.other_users) || null == (g = m[0]) ? true : g.id)),
        A = u.ZP.getName(s.default.getUser(null == (O = P.other_users) || null == (b = O[1]) ? true : b.id)),
        R = Math.max((null != (_ = null == (y = P.other_users) ? true : y.length) ? _ : 0) - 2, 0);
      return h.intl.format(h.t.g5xyIC, {
        user: T,
        user2: A,
        count: R
      });
    case d.O7.MOBILE_NATIVE_UPDATE_AVAILABLE:
      let D = null != (j = null == (v = P.local_id) ? true : v.split("_").pop()) ? j : "unknown";
      return "Update to build ".concat(D, " available!");
    case d.DY.FRIEND_SUGGESTION_CREATED:
      return a.Z.getRelationshipType(N), p.OGo.PENDING_OUTGOING, null != (x = P.body) ? x : "";
    case d.DY.GUILD_SCHEDULED_EVENT_STARTED:
      let M = P.guild_scheduled_event_id,
        L = null != M ? l.ZP.getGuildScheduledEvent(M) : null,
        k = null == L ? true : L.name,
        U = null == (C = o.Z.getGuild(null == L ? true : L.guild_id)) ? true : C.name,
        G = (0, l.Z2)(null != L ? L : true);
      return (0, c.Ew)(U) || (0, c.Ew)(k) || !G ? null != (S = P.body) ? S : "" : h.intl.format(h.t.AyvfXV, {
        event_name: k,
        guild_name: U
      });
    case d.O7.INCOMING_FRIEND_REQUESTS:
      return f({
        username: w,
        applicationId: Z,
        renderApplication: I,
        withApplication: h.t["9Dgf1N"],
        withDefault: h.t.uIomX1
      });
    case d.O7.INCOMING_FRIEND_REQUESTS_ACCEPTED:
      return f({
        username: w,
        applicationId: Z,
        renderApplication: I,
        withApplication: h.t.nnC1q6,
        withDefault: h.t["5Uzkdn"]
      });
    case d.DY.FRIEND_REQUEST_ACCEPTED:
      return f({
        username: w,
        applicationId: Z,
        renderApplication: I,
        withApplication: h.t.jXlYiI,
        withDefault: h.t.McYRBg
      });
    case d.O7.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED:
      return i()(null != Z, "Expected application id for ".concat(P.type)), h.intl.format(h.t["BB/0vr"], {
        username: w,
        applicationName: () => I(Z)
      });
    case d.O7.INCOMING_GAME_FRIEND_REQUESTS:
      return i()(null != Z, "Expected application id for ".concat(P.type)), h.intl.format(h.t["7cqOLC"], {
        username: w,
        applicationName: () => I(Z)
      });
    case d.DY.GAME_FRIEND_REQUEST_ACCEPTED:
      if (null == Z) return P.body;
      return h.intl.format(h.t.Wi64vL, {
        username: w,
        applicationName: () => I(Z)
      })
  }
  return null != (E = P.body) ? E : ""
}