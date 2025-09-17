/** Chunk was on 11160 **/
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

function h(e) {
  let {
    username: t,
    applicationId: n,
    renderApplication: r,
    withApplication: i,
    withDefault: l
  } = e;
  return null != n ? f.intl.format(i, {
    username: t,
    applicationName: () => r(n)
  }) : f.intl.format(l, {
    username: t
  })
}

function g(e) {
  var t, n, r, g, m, b, O, y, _, v, j, x, C, E, S;
  let {
    item: P,
    renderApplication: I
  } = e, N = null != (r = null == (t = P.other_user) ? true : t.id) ? r : p.lds, Z = u.ZP.getName(s.default.getUser(null == (n = P.other_user) ? true : n.id)), w = P.applicationId;
  switch (P.type) {
    case d.O7.FRIEND_REQUESTS_GROUPED:
      let T = u.ZP.getName(s.default.getUser(null == (m = P.other_users) || null == (g = m[0]) ? true : g.id)),
        A = u.ZP.getName(s.default.getUser(null == (O = P.other_users) || null == (b = O[1]) ? true : b.id)),
        R = Math.max((null != (_ = null == (y = P.other_users) ? true : y.length) ? _ : 0) - 2, 0);
      return f.intl.format(f.t.g5xyIC, {
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
      let L = P.guild_scheduled_event_id,
        M = null != L ? l.ZP.getGuildScheduledEvent(L) : null,
        k = null == M ? true : M.name,
        U = null == (C = o.Z.getGuild(null == M ? true : M.guild_id)) ? true : C.name,
        G = (0, l.Z2)(null != M ? M : true);
      return (0, c.Ew)(U) || (0, c.Ew)(k) || !G ? null != (E = P.body) ? E : "" : f.intl.format(f.t.AyvfXV, {
        event_name: k,
        guild_name: U
      });
    case d.O7.INCOMING_FRIEND_REQUESTS:
      return h({
        username: Z,
        applicationId: w,
        renderApplication: I,
        withApplication: f.t["9Dgf1N"],
        withDefault: f.t.uIomX1
      });
    case d.O7.INCOMING_FRIEND_REQUESTS_ACCEPTED:
      return h({
        username: Z,
        applicationId: w,
        renderApplication: I,
        withApplication: f.t.nnC1q6,
        withDefault: f.t["5Uzkdn"]
      });
    case d.DY.FRIEND_REQUEST_ACCEPTED:
      return h({
        username: Z,
        applicationId: w,
        renderApplication: I,
        withApplication: f.t.jXlYiI,
        withDefault: f.t.McYRBg
      });
    case d.O7.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED:
      return i()(null != w, "Expected application id for ".concat(P.type)), f.intl.format(f.t["BB/0vr"], {
        username: Z,
        applicationName: () => I(w)
      });
    case d.O7.INCOMING_GAME_FRIEND_REQUESTS:
      return i()(null != w, "Expected application id for ".concat(P.type)), f.intl.format(f.t["7cqOLC"], {
        username: Z,
        applicationName: () => I(w)
      });
    case d.DY.GAME_FRIEND_REQUEST_ACCEPTED:
      if (null == w) return P.body;
      return f.intl.format(f.t.Wi64vL, {
        username: Z,
        applicationName: () => I(w)
      })
  }
  return null != (S = P.body) ? S : ""
}