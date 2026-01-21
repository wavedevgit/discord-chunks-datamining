/** Chunk was on 82124 **/
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
  var t, n, r, g, m, b, y, v, O, j, x, C, E, S, _;
  let {
    item: I,
    renderApplication: P
  } = e, Z = null != (r = null == (t = I.other_user) ? true : t.id) ? r : p.lds, N = u.ZP.getName(s.default.getUser(null == (n = I.other_user) ? true : n.id)), T = I.applicationId;
  switch (I.type) {
    case d.O7.FRIEND_REQUESTS_GROUPED:
      let A = u.ZP.getName(s.default.getUser(null == (m = I.other_users) || null == (g = m[0]) ? true : g.id)),
        w = u.ZP.getName(s.default.getUser(null == (y = I.other_users) || null == (b = y[1]) ? true : b.id)),
        R = Math.max((null != (O = null == (v = I.other_users) ? true : v.length) ? O : 0) - 2, 0);
      return f.intl.format(f.t.g5xyIC, {
        user: A,
        user2: w,
        count: R
      });
    case d.O7.MOBILE_NATIVE_UPDATE_AVAILABLE:
      let D = null != (x = null == (j = I.local_id) ? true : j.split("_").pop()) ? x : "unknown";
      return "Update to build ".concat(D, " available!");
    case d.DY.FRIEND_SUGGESTION_CREATED:
      return o.Z.getRelationshipType(Z), p.OGo.PENDING_OUTGOING, null != (C = I.body) ? C : "";
    case d.DY.GUILD_SCHEDULED_EVENT_STARTED:
      let M = I.guild_scheduled_event_id,
        k = null != M ? l.ZP.getGuildScheduledEvent(M) : null,
        L = null == k ? true : k.name,
        U = null == (E = a.Z.getGuild(null == k ? true : k.guild_id)) ? true : E.name,
        G = (0, l.Z2)(null != k ? k : true);
      return (0, c.Ew)(U) || (0, c.Ew)(L) || !G ? null != (S = I.body) ? S : "" : f.intl.format(f.t.AyvfXR, {
        event_name: L,
        guild_name: U
      });
    case d.O7.INCOMING_FRIEND_REQUESTS:
      return h({
        username: N,
        applicationId: T,
        renderApplication: P,
        withApplication: f.t["9Dgf1L"],
        withDefault: f.t.uIomXw
      });
    case d.O7.INCOMING_FRIEND_REQUESTS_ACCEPTED:
      return h({
        username: N,
        applicationId: T,
        renderApplication: P,
        withApplication: f.t.nnC1q9,
        withDefault: f.t["5Uzkdp"]
      });
    case d.DY.FRIEND_REQUEST_ACCEPTED:
      return h({
        username: N,
        applicationId: T,
        renderApplication: P,
        withApplication: f.t.jXlYiF,
        withDefault: f.t.McYRBk
      });
    case d.O7.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED:
      return i()(null != T, "Expected application id for ".concat(I.type)), f.intl.format(f.t["BB/0vn"], {
        username: N,
        applicationName: () => P(T)
      });
    case d.O7.INCOMING_GAME_FRIEND_REQUESTS:
      return i()(null != T, "Expected application id for ".concat(I.type)), f.intl.format(f.t["7cqOLI"], {
        username: N,
        applicationName: () => P(T)
      });
    case d.DY.GAME_FRIEND_REQUEST_ACCEPTED:
      if (null == T) return I.body;
      return f.intl.format(f.t.Wi64vN, {
        username: N,
        applicationName: () => P(T)
      })
  }
  return null != (_ = I.body) ? _ : ""
}