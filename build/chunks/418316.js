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
  var t, n, r, g, m, b, O, _, y, j, v, C, x, E, S;
  let {
    item: I,
    renderApplication: P
  } = e, N = null != (r = null == (t = I.other_user) ? true : t.id) ? r : p.lds, w = u.ZP.getName(s.default.getUser(null == (n = I.other_user) ? true : n.id)), Z = I.applicationId;
  switch (I.type) {
    case d.O7.FRIEND_REQUESTS_GROUPED:
      let T = u.ZP.getName(s.default.getUser(null == (m = I.other_users) || null == (g = m[0]) ? true : g.id)),
        A = u.ZP.getName(s.default.getUser(null == (O = I.other_users) || null == (b = O[1]) ? true : b.id)),
        R = Math.max((null != (y = null == (_ = I.other_users) ? true : _.length) ? y : 0) - 2, 0);
      return f.intl.format(f.t.g5xyIC, {
        user: T,
        user2: A,
        count: R
      });
    case d.O7.MOBILE_NATIVE_UPDATE_AVAILABLE:
      let D = null != (v = null == (j = I.local_id) ? true : j.split("_").pop()) ? v : "unknown";
      return "Update to build ".concat(D, " available!");
    case d.DY.FRIEND_SUGGESTION_CREATED:
      return a.Z.getRelationshipType(N), p.OGo.PENDING_OUTGOING, null != (C = I.body) ? C : "";
    case d.DY.GUILD_SCHEDULED_EVENT_STARTED:
      let M = I.guild_scheduled_event_id,
        L = null != M ? l.ZP.getGuildScheduledEvent(M) : null,
        k = null == L ? true : L.name,
        U = null == (x = o.Z.getGuild(null == L ? true : L.guild_id)) ? true : x.name,
        G = (0, l.Z2)(null != L ? L : true);
      return (0, c.Ew)(U) || (0, c.Ew)(k) || !G ? null != (E = I.body) ? E : "" : f.intl.format(f.t.AyvfXV, {
        event_name: k,
        guild_name: U
      });
    case d.O7.INCOMING_FRIEND_REQUESTS:
      return h({
        username: w,
        applicationId: Z,
        renderApplication: P,
        withApplication: f.t["9Dgf1N"],
        withDefault: f.t.uIomX1
      });
    case d.O7.INCOMING_FRIEND_REQUESTS_ACCEPTED:
      return h({
        username: w,
        applicationId: Z,
        renderApplication: P,
        withApplication: f.t.nnC1q6,
        withDefault: f.t["5Uzkdn"]
      });
    case d.DY.FRIEND_REQUEST_ACCEPTED:
      return h({
        username: w,
        applicationId: Z,
        renderApplication: P,
        withApplication: f.t.jXlYiI,
        withDefault: f.t.McYRBg
      });
    case d.O7.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED:
      return i()(null != Z, "Expected application id for ".concat(I.type)), f.intl.format(f.t["BB/0vr"], {
        username: w,
        applicationName: () => P(Z)
      });
    case d.O7.INCOMING_GAME_FRIEND_REQUESTS:
      return i()(null != Z, "Expected application id for ".concat(I.type)), f.intl.format(f.t["7cqOLC"], {
        username: w,
        applicationName: () => P(Z)
      });
    case d.DY.GAME_FRIEND_REQUEST_ACCEPTED:
      if (null == Z) return I.body;
      return f.intl.format(f.t.Wi64vL, {
        username: w,
        applicationName: () => P(Z)
      })
  }
  return null != (S = I.body) ? S : ""
}