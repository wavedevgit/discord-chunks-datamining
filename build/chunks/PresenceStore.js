/** Chunk was on web.js **/
/** chunk id: 158776, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => et,
  f: () => x
}), require("./539854.js"), require("./388685.js"), require("./361932.js"), require("./187205.js"), require("./583741.js"), require("./642613.js");
var r, Chunk348327 = require("./348327.js"),
  o = require.n(Chunk348327),
  Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk122810 = require("./122810.js"),
  Chunk106301 = require("./106301.js"),
  Chunk920828 = require("./920828.js"),
  Chunk355281 = require("./355281.js"),
  Chunk509003 = require("./509003.js"),
  Chunk709054 = require("./709054.js"),
  Chunk314897 = require("./314897.js"),
  Chunk594174 = require("./594174.js"),
  Chunk981631 = require("./981631.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let y = Object.freeze([]),
  O = {},
  v = {},
  I = {},
  T = {},
  S = {},
  A = {};

function C(e, t) {
  let n = O[e];
  return null != n ? n[t] : null
}
let N = e => {
  switch (e.type) {
    case E.IIU.CUSTOM_STATUS:
      return 4;
    case E.IIU.COMPETING:
      return 3;
    case E.IIU.STREAMING:
      return 2;
    case E.IIU.PLAYING:
      return 1;
    default:
      return 0
  }
};

function R(e, t) {
  return N(t) - N(e)
}
let P = e => +!!(0, u.Z)(e);

function w(e, t) {
  return P(t) - P(e)
}

function D(e, t) {
  var n, r;
  return (null != (n = t.created_at) ? n : 0) - (null != (r = e.created_at) ? r : 0)
}

function x(e, t) {
  return R(e, t) || w(e, t) || D(e, t)
}

function L(e, t) {
  if (t === m.default.getId()) return {
    visible: e,
    hidden: []
  };
  let n = _.m.getConfig({
      location: "presence_filtering"
    }).enabled ? e.map(e => (0, p.FT)(e)) : e.map(e => (0, p.Jc)(e)),
    r = f.R.getCurrentConfig({
      location: "presence_filtering"
    }, {
      autoTrackExposure: false
    });
  if (!r.filterGamePresence && !r.filterRichPresence) return {
    visible: n,
    hidden: []
  };
  let i = [],
    o = [];
  for (let e of n) {
    if (e.type !== E.IIU.PLAYING) {
      i.push(e);
      continue
    }
    let t = null != e.application_id && (0, u.Z)(e);
    r.filterGamePresence ? t && o.push(e) : r.filterRichPresence && t ? o.push(e) : i.push(e)
  }
  return {
    visible: i,
    hidden: o
  }
}

function j(e) {
  if (delete v[e], delete I[e], delete T[e], delete S[e], null == O[e]) return;
  let t = Object.values(O[e]),
    n = t.reduce((e, t) => {
      let n = t.processedAtTimestamp,
        r = e.processedAtTimestamp,
        i = null != t.activities ? t.activities.length : 0,
        o = null != e.activities ? e.activities.length : 0;
      return n > r || n === r && i > o ? t : e
    }, t[0]);
  n.status !== E.Skl.OFFLINE || null != n.hiddenActivities && n.hiddenActivities.length > 0 ? (v[e] = n.status, I[e] = n.activities, T[e] = M(Object.values(t).flatMap(e => {
    var t;
    return null != (t = e.hiddenActivities) ? t : []
  })), null != n.clientStatus && (S[e] = n.clientStatus)) : s().every(O[e], e => e.status === E.Skl.OFFLINE && (null == e.hiddenActivities || 0 === e.hiddenActivities.length)) ? delete O[e] : n.status === E.Skl.OFFLINE && t.some(e => null != e.hiddenActivities && e.hiddenActivities.length > 0) && (T[e] = M(Object.values(t).flatMap(e => {
    var t;
    return null != (t = e.hiddenActivities) ? t : []
  })))
}

function M(e) {
  return 0 === e.length ? e : [...new Map([...e].reverse().map(e => {
    var t;
    return ["".concat(e.application_id, ":").concat(null == (t = e.party) ? true : t.id), e]
  })).values()]
}

function k(e) {
  let t = O[e];
  if (null == t) return;
  let n = s().maxBy(Object.values(t), e => e.processedAtTimestamp);
  if (n.status !== E.Skl.OFFLINE || null != n.hiddenActivities && n.hiddenActivities.length > 0) {
    var r;
    v[e] = n.status, I[e] = n.activities, T[e] = null != (r = n.hiddenActivities) ? r : [], null != n.clientStatus && (S[e] = n.clientStatus)
  }
}

function U(e) {
  let {
    guildId: t,
    userId: n,
    status: r,
    clientStatus: i,
    activities: a,
    hiddenActivities: s,
    processedAtTimestamp: l
  } = e;
  if (n === m.default.getId()) returnfalse;
  let c = r === E.Skl.OFFLINE && (null == s || 0 === s.length),
    u = O[n];
  if (null == u) {
    if (c) returnfalse;
    u = O[n] = {}
  }
  if (c) u[t] = {
    status: r,
    clientStatus: i,
    activities: y,
    hiddenActivities: y,
    processedAtTimestamp: l
  };
  else {
    let {
      visible: e,
      hidden: c
    } = L(a.length > 1 ? [...a].sort(x) : a, n), d = M([...null != s ? s : [], ...c]), f = u[t];
    a = null != f && o()(f.activities, e) ? f.activities : e, u[t] = {
      status: r,
      clientStatus: i,
      activities: a,
      hiddenActivities: d,
      processedAtTimestamp: l
    }
  }
  return delete A[n], j(n), true
}

function G(e) {
  let {
    guildId: t,
    userId: n,
    status: r,
    clientStatus: i,
    activities: o,
    hiddenActivities: a,
    processedAtTimestamp: s
  } = e;
  if (n === m.default.getId()) return;
  let l = r === E.Skl.OFFLINE && (null == a || 0 === a.length),
    c = O[n];
  if (null == c) {
    if (l) return;
    c = O[n] = {}
  }
  if (l) c[t] = {
    status: r,
    clientStatus: i,
    activities: y,
    hiddenActivities: y,
    processedAtTimestamp: s
  };
  else {
    let {
      visible: e,
      hidden: l
    } = L(o.length > 1 ? [...o].sort(x) : o, n), u = M([...null != a ? a : [], ...l]);
    c[t] = {
      status: r,
      clientStatus: i,
      activities: e,
      hiddenActivities: u,
      processedAtTimestamp: s
    }
  }
}

function B(e, t) {
  if (t === m.default.getId()) returnfalse;
  let n = O[t];
  if (null == n || null == n[e]) returnfalse;
  delete n[e], 0 === Object.keys(n).length && delete O[t], j(t)
}

function Z(e) {
  for (let t of h.default.keys(O)) B(e, t)
}

function F() {
  returntrue
}

function V(e) {
  let {
    guilds: t,
    presences: n
  } = e, r = m.default.getId();
  O = {}, A = {}, v = {
    [r]: v[r]
  }, I = {
    [r]: I[r]
  }, T = {
    [r]: T[r]
  }, S = {
    [r]: {}
  };
  let i = new Set;
  t.forEach(e => {
    e.presences.forEach(t => {
      let {
        user: n,
        status: r,
        clientStatus: o,
        activities: a,
        hiddenActivities: s,
        processedAtTimestamp: l
      } = t;
      G({
        guildId: e.id,
        userId: n.id,
        status: r,
        clientStatus: o,
        activities: a,
        hiddenActivities: s,
        processedAtTimestamp: l
      }), i.add(n.id)
    })
  }), n.forEach(e => {
    let {
      user: t,
      status: n,
      clientStatus: r,
      activities: o,
      hiddenActivities: a,
      processedAtTimestamp: s
    } = e;
    null != t && (G({
      guildId: E.ME,
      userId: t.id,
      status: n,
      clientStatus: r,
      activities: o,
      hiddenActivities: a,
      processedAtTimestamp: s
    }), i.add(t.id))
  }), i.delete(r), i.forEach(k)
}

function H(e) {
  let {
    presences: t
  } = e;
  O = t.presencesForGuilds, v = t.statuses, I = t.activities, T = t.hiddenActivities, A = t.activityMetadata
}

function Y(e) {
  let {
    presences: t
  } = e;
  Z(E.ME), t.forEach(e => {
    let {
      user: t,
      status: n,
      clientStatus: r,
      activities: i,
      hiddenActivities: o,
      processedAtTimestamp: a
    } = e;
    null != t && U({
      guildId: E.ME,
      userId: t.id,
      status: n,
      clientStatus: r,
      activities: i,
      hiddenActivities: o,
      processedAtTimestamp: a
    })
  })
}

function W(e) {
  let {
    guild: t
  } = e;
  t.presences.forEach(e => {
    let {
      user: n,
      status: r,
      clientStatus: i,
      activities: o,
      hiddenActivities: a,
      processedAtTimestamp: s
    } = e;
    U({
      guildId: t.id,
      userId: n.id,
      status: r,
      clientStatus: i,
      activities: o,
      hiddenActivities: a,
      processedAtTimestamp: s
    })
  })
}

function K(e) {
  let {
    guild: t
  } = e;
  Z(t.id)
}

function z(e) {
  let {
    guildId: t,
    user: n
  } = e;
  return B(t, n.id)
}

function q(e) {
  let {
    updates: t
  } = e;
  return t.map(e => {
    let {
      guildId: t,
      user: n,
      status: r,
      clientStatus: i,
      activities: o,
      hiddenActivities: a,
      processedAtTimestamp: s
    } = e;
    return U({
      guildId: null != t ? t : E.ME,
      userId: n.id,
      status: r,
      clientStatus: i,
      activities: o,
      hiddenActivities: a,
      processedAtTimestamp: s
    })
  }).some(e => e)
}

function X(e) {
  let {
    guildId: t,
    members: n
  } = e;
  n.forEach(e => {
    null != e.presence && U({
      guildId: t,
      userId: e.user_id,
      status: e.presence.status,
      clientStatus: e.presence.clientStatus,
      activities: e.presence.activities,
      hiddenActivities: e.presence.hiddenActivities,
      processedAtTimestamp: e.presence.processedAtTimestamp
    })
  })
}

function Q(e) {
  let {
    guildId: t,
    addedMembers: n
  } = e;
  null == n || n.forEach(e => {
    null != e.presence && U({
      guildId: t,
      userId: e.userId,
      status: e.presence.status,
      clientStatus: e.presence.clientStatus,
      activities: e.presence.activities,
      hiddenActivities: e.presence.hiddenActivities,
      processedAtTimestamp: e.presence.processedAtTimestamp
    })
  })
}

function J(e) {
  let t = m.default.getId();
  if (v[t] === e.status && I[t] === e.activities && T[t] === e.hiddenActivities) returnfalse;
  v[t] = e.status, I[t] = [...e.activities].sort(x), T[t] = [...e.hiddenActivities].sort(x), delete A[t]
}

function $(e) {
  let {
    userId: t,
    metadata: n
  } = e;
  return A[t] = n, false
}
class ee extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk314897.default, Chunk106301.Z)
  }
  setCurrentUserOnConnectionOpen(e, t) {
    v[m.default.getId()] = e, I[m.default.getId()] = [...t].sort(x)
  }
  getStatus(e) {
    var t, n;
    let r = arguments.length > 1 && true !== arguments[1] ? arguments[1] : null,
      i = arguments.length > 2 && true !== arguments[2] ? arguments[2] : E.Skl.OFFLINE,
      o = g.default.getUser(e);
    if (null != o && o.hasFlag(E.xW$.BOT_HTTP_INTERACTIONS) && (i = E.Skl.UNKNOWN), null == r) return null != (t = v[e]) ? t : i;
    let a = C(e, r);
    return null != (n = null == a ? true : a.status) ? n : i
  }
  getActivities(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : null;
    if (null == t) {
      var n;
      return null != (n = I[e]) ? n : y
    }
    let r = C(e, t);
    return null == r || null == r.activities ? y : r.activities
  }
  getHiddenActivities(e) {
    var t, n, r;
    let i = arguments.length > 1 && true !== arguments[1] ? arguments[1] : null;
    return null == i ? null != (n = T[e]) ? n : y : null != (r = null == (t = C(e, i)) ? true : t.hiddenActivities) ? r : y
  }
  getPrimaryActivity(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : null;
    return this.getActivities(e, t).filter(e => e.type !== E.IIU.HANG_STATUS)[0]
  }
  getAllApplicationActivities(e) {
    let t = [];
    for (let n of h.default.keys(I))
      for (let r of I[n]) r.application_id === e && t.push({
        userId: n,
        activity: r
      });
    return t
  }
  getApplicationActivity(e, t) {
    let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : null;
    return this.findActivity(e, e => e.application_id === t, n, true)
  }
  findActivity(e, t) {
    let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : null,
      r = arguments.length > 3 && true !== arguments[3] && arguments[3];
    r = null != r && r;
    let i = this.getActivities(e, n);
    return r && (i = i.concat(this.getHiddenActivities(e, n))), i.find(t)
  }
  getActivityMetadata(e) {
    return A[e]
  }
  getUserIds() {
    return Chunk709054.default.keys(I)
  }
  isMobileOnline(e) {
    let t = S[e];
    return null != t && t[E.X5t.MOBILE] === E.Skl.ONLINE && t[E.X5t.DESKTOP] !== E.Skl.ONLINE
  }
  getClientStatus(e) {
    return S[e]
  }
  getState() {
    return {
      presencesForGuilds: O,
      statuses: v,
      activities: I,
      hiddenActivities: T,
      activityMetadata: A,
      clientStatuses: S
    }
  }
}
b(ee, "displayName", "PresenceStore");
let et = new ee(Chunk570140.Z, {
  CONNECTION_OPEN: F,
  CONNECTION_OPEN_SUPPLEMENTAL: V,
  OVERLAY_INITIALIZE: H,
  GUILD_CREATE: W,
  GUILD_DELETE: K,
  GUILD_MEMBER_REMOVE: z,
  PRESENCE_UPDATES: q,
  PRESENCES_REPLACE: Y,
  ACTIVITY_METADATA_UPDATE: $,
  THREAD_MEMBER_LIST_UPDATE: X,
  THREAD_MEMBERS_UPDATE: Q,
  SELF_PRESENCE_STORE_UPDATE: J
})