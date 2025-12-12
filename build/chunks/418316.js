/** Chunk was on 64722 **/
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

function p(e) {
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
  var t, n, r, g, m, b, _, y, O, v, j, C, x, E, S;
  let {
    item: I,
    renderApplication: P
  } = e, N = null != (r = null == (t = I.other_user) ? true : t.id) ? r : f.lds, Z = u.ZP.getName(s.default.getUser(null == (n = I.other_user) ? true : n.id)), w = I.applicationId;
  switch (I.type) {
    case d.O7.FRIEND_REQUESTS_GROUPED:
      let T = u.ZP.getName(s.default.getUser(null == (m = I.other_users) || null == (g = m[0]) ? true : g.id)),
        A = u.ZP.getName(s.default.getUser(null == (_ = I.other_users) || null == (b = _[1]) ? true : b.id)),
        R = Math.max((null != (O = null == (y = I.other_users) ? true : y.length) ? O : 0) - 2, 0);
      return h.intl.format(h.t.g5xyIC, {
        user: T,
        user2: A,
        count: R
      });
    case d.O7.MOBILE_NATIVE_UPDATE_AVAILABLE:
      let D = null != (j = null == (v = I.local_id) ? true : v.split("_").pop()) ? j : "unknown";
      return "Update to build ".concat(D, " available!");
    case d.DY.FRIEND_SUGGESTION_CREATED:
      return a.Z.getRelationshipType(N), f.OGo.PENDING_OUTGOING, null != (C = I.body) ? C : "";
    case d.DY.GUILD_SCHEDULED_EVENT_STARTED:
      let M = I.guild_scheduled_event_id,
        L = null != M ? l.ZP.getGuildScheduledEvent(M) : null,
        k = null == L ? true : L.name,
        G = null == (x = o.Z.getGuild(null == L ? true : L.guild_id)) ? true : x.name,
        U = (0, l.Z2)(null != L ? L : true);
      return (0, c.Ew)(G) || (0, c.Ew)(k) || !U ? null != (E = I.body) ? E : "" : h.intl.format(h.t.AyvfXR, {
        event_name: k,
        guild_name: G
      });
    case d.O7.INCOMING_FRIEND_REQUESTS:
      return p({
        username: Z,
        applicationId: w,
        renderApplication: P,
        withApplication: h.t["9Dgf1L"],
        withDefault: h.t.uIomXw
      });
    case d.O7.INCOMING_FRIEND_REQUESTS_ACCEPTED:
      return p({
        username: Z,
        applicationId: w,
        renderApplication: P,
        withApplication: h.t.nnC1q9,
        withDefault: h.t["5Uzkdp"]
      });
    case d.DY.FRIEND_REQUEST_ACCEPTED:
      return p({
        username: Z,
        applicationId: w,
        renderApplication: P,
        withApplication: h.t.jXlYiF,
        withDefault: h.t.McYRBk
      });
    case d.O7.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED:
      return i()(null != w, "Expected application id for ".concat(I.type)), h.intl.format(h.t["BB/0vn"], {
        username: Z,
        applicationName: () => P(w)
      });
    case d.O7.INCOMING_GAME_FRIEND_REQUESTS:
      return i()(null != w, "Expected application id for ".concat(I.type)), h.intl.format(h.t["7cqOLI"], {
        username: Z,
        applicationName: () => P(w)
      });
    case d.DY.GAME_FRIEND_REQUEST_ACCEPTED:
      if (null == w) return I.body;
      return h.intl.format(h.t.Wi64vN, {
        username: Z,
        applicationName: () => P(w)
      })
  }
  return null != (S = I.body) ? S : ""
}