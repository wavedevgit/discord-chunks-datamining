/** Chunk was on web.js **/
/** chunk id: 290863, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => ea,
  m: () => x
}), require("./321073.js"), require("./896048.js"), require("./638769.js"), require("./114821.js"), require("./339614.js"), require("./264879.js");
var r, Chunk812729 = require("./812729.js"),
  a = require.n(Chunk812729),
  Chunk735438 = require("./735438.js"),
  s = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk682261 = require("./682261.js"),
  Chunk242919 = require("./242919.js"),
  Chunk531181 = require("./531181.js"),
  Chunk477394 = require("./477394.js"),
  Chunk847521 = require("./847521.js"),
  Chunk661191 = require("./661191.js"),
  Chunk961350 = require("./961350.js"),
  Chunk287809 = require("./287809.js"),
  Chunk652215 = require("./652215.js");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let b = Object.freeze([]),
  O = {},
  v = {},
  A = {},
  I = {},
  S = {},
  T = {},
  C = {};

function N(e, t) {
  let n = O[e];
  return null != n ? n[t] : null
}
let w = e => {
  switch (e.type) {
    case E.$pd.CUSTOM_STATUS:
      return 4;
    case E.$pd.COMPETING:
      return 3;
    case E.$pd.STREAMING:
      return 2;
    case E.$pd.PLAYING:
      return 1;
    default:
      return 0
  }
};

function R(e, t) {
  return w(t) - w(e)
}
let P = e => +!!(0, u.A)(e);

function D(e, t) {
  return P(t) - P(e)
}

function L(e, t) {
  var n, r;
  return (null != (n = t.created_at) ? n : 0) - (null != (r = e.created_at) ? r : 0)
}

function x(e, t) {
  return R(e, t) || D(e, t) || L(e, t)
}

function M(e) {
  if (0 === e.length) return e;
  let t = [],
    n = [];
  for (let r of e) r.type === E.$pd.PLAYING ? n.push(r) : t.push(r);
  return n.length <= 1 ? e : [...t, [...n].sort(x)[0]].sort(x)
}

function j(e, t) {
  A[e] = t, I[e] = M(t)
}

function k(e) {
  delete A[e], delete I[e]
}

function U(e, t) {
  if (t === m.default.getId()) return {
    visible: e,
    hidden: []
  };
  let n = p.a.getConfig({
      location: "presence_filtering"
    }).enabled ? e.map(e => (0, _.Dh)(e)) : e.map(e => (0, _.Ar)(e)),
    r = f.o.getCurrentConfig({
      location: "presence_filtering"
    }, {
      autoTrackExposure: false
    });
  if (!r.filterGamePresence && !r.filterRichPresence) return {
    visible: n,
    hidden: []
  };
  let i = [],
    a = [];
  for (let e of n) {
    if (e.type !== E.$pd.PLAYING) {
      i.push(e);
      continue
    }
    let t = null != e.application_id && (0, u.A)(e);
    r.filterGamePresence ? t && a.push(e) : r.filterRichPresence && t ? a.push(e) : i.push(e)
  }
  return {
    visible: i,
    hidden: a
  }
}

function G(e) {
  if (delete v[e], k(e), delete S[e], delete T[e], null == O[e]) return;
  let t = Object.values(O[e]),
    n = t.reduce((e, t) => {
      let n = t.processedAtTimestamp,
        r = e.processedAtTimestamp,
        i = null != t.activities ? t.activities.length : 0,
        a = null != e.activities ? e.activities.length : 0;
      return n > r || n === r && i > a ? t : e
    }, t[0]);
  n.status !== E.clD.OFFLINE || null != n.hiddenActivities && n.hiddenActivities.length > 0 ? (v[e] = n.status, j(e, n.activities), S[e] = V(Object.values(t).flatMap(e => {
    var t;
    return null != (t = e.hiddenActivities) ? t : []
  })), null != n.clientStatus && (T[e] = n.clientStatus)) : s().every(O[e], e => e.status === E.clD.OFFLINE && (null == e.hiddenActivities || 0 === e.hiddenActivities.length)) ? delete O[e] : n.status === E.clD.OFFLINE && t.some(e => null != e.hiddenActivities && e.hiddenActivities.length > 0) && (S[e] = V(Object.values(t).flatMap(e => {
    var t;
    return null != (t = e.hiddenActivities) ? t : []
  })))
}

function V(e) {
  return 0 === e.length ? e : [...new Map([...e].reverse().map(e => {
    var t;
    return ["".concat(e.application_id, ":").concat(null == (t = e.party) ? true : t.id), e]
  })).values()]
}

function F(e) {
  let t = O[e];
  if (null == t) return;
  let n = s().maxBy(Object.values(t), e => e.processedAtTimestamp);
  if (n.status !== E.clD.OFFLINE || null != n.hiddenActivities && n.hiddenActivities.length > 0) {
    var r;
    v[e] = n.status, j(e, n.activities), S[e] = null != (r = n.hiddenActivities) ? r : [], null != n.clientStatus && (T[e] = n.clientStatus)
  }
}

function B(e) {
  let {
    guildId: t,
    userId: n,
    status: r,
    clientStatus: i,
    activities: o,
    hiddenActivities: s,
    processedAtTimestamp: l
  } = e;
  if (n === m.default.getId()) returnfalse;
  let c = r === E.clD.OFFLINE && (null == s || 0 === s.length),
    u = O[n];
  if (null == u) {
    if (c) returnfalse;
    u = O[n] = {}
  }
  if (c) u[t] = {
    status: r,
    clientStatus: i,
    activities: b,
    hiddenActivities: b,
    processedAtTimestamp: l
  };
  else {
    let {
      visible: e,
      hidden: c
    } = U(o.length > 1 ? [...o].sort(x) : o, n), d = V([...null != s ? s : [], ...c]), f = u[t];
    o = null != f && a()(f.activities, e) ? f.activities : e, u[t] = {
      status: r,
      clientStatus: i,
      activities: o,
      hiddenActivities: d,
      processedAtTimestamp: l
    }
  }
  return delete C[n], G(n), true
}

function H(e) {
  let {
    guildId: t,
    userId: n,
    status: r,
    clientStatus: i,
    activities: a,
    hiddenActivities: o,
    processedAtTimestamp: s
  } = e;
  if (n === m.default.getId()) return;
  let l = r === E.clD.OFFLINE && (null == o || 0 === o.length),
    c = O[n];
  if (null == c) {
    if (l) return;
    c = O[n] = {}
  }
  if (l) c[t] = {
    status: r,
    clientStatus: i,
    activities: b,
    hiddenActivities: b,
    processedAtTimestamp: s
  };
  else {
    let {
      visible: e,
      hidden: l
    } = U(a.length > 1 ? [...a].sort(x) : a, n), u = V([...null != o ? o : [], ...l]);
    c[t] = {
      status: r,
      clientStatus: i,
      activities: e,
      hiddenActivities: u,
      processedAtTimestamp: s
    }
  }
}

function Y(e, t) {
  if (t === m.default.getId()) returnfalse;
  let n = O[t];
  if (null == n || null == n[e]) returnfalse;
  delete n[e], 0 === Object.keys(n).length && delete O[t], G(t)
}

function W(e) {
  for (let t of h.default.keys(O)) Y(e, t)
}

function K() {
  returntrue
}

function z(e) {
  let {
    guilds: t,
    presences: n
  } = e, r = m.default.getId();
  O = {}, C = {}, v = {
    [r]: v[r]
  }, A = {
    [r]: A[r]
  }, I = {
    [r]: I[r]
  }, S = {
    [r]: S[r]
  }, T = {
    [r]: {}
  };
  let i = new Set;
  t.forEach(e => {
    e.presences.forEach(t => {
      let {
        user: n,
        status: r,
        clientStatus: a,
        activities: o,
        hiddenActivities: s,
        processedAtTimestamp: l
      } = t;
      H({
        guildId: e.id,
        userId: n.id,
        status: r,
        clientStatus: a,
        activities: o,
        hiddenActivities: s,
        processedAtTimestamp: l
      }), i.add(n.id)
    })
  }), n.forEach(e => {
    let {
      user: t,
      status: n,
      clientStatus: r,
      activities: a,
      hiddenActivities: o,
      processedAtTimestamp: s
    } = e;
    null != t && (H({
      guildId: E.ME,
      userId: t.id,
      status: n,
      clientStatus: r,
      activities: a,
      hiddenActivities: o,
      processedAtTimestamp: s
    }), i.add(t.id))
  }), i.delete(r), i.forEach(F)
}

function q(e) {
  let {
    presences: t
  } = e;
  O = t.presencesForGuilds, v = t.statuses, A = t.activities, S = t.hiddenActivities, C = t.activityMetadata
}

function Z(e) {
  let {
    presences: t
  } = e;
  W(E.ME), t.forEach(e => {
    let {
      user: t,
      status: n,
      clientStatus: r,
      activities: i,
      hiddenActivities: a,
      processedAtTimestamp: o
    } = e;
    null != t && B({
      guildId: E.ME,
      userId: t.id,
      status: n,
      clientStatus: r,
      activities: i,
      hiddenActivities: a,
      processedAtTimestamp: o
    })
  })
}

function Q(e) {
  let {
    guild: t
  } = e;
  t.presences.forEach(e => {
    let {
      user: n,
      status: r,
      clientStatus: i,
      activities: a,
      hiddenActivities: o,
      processedAtTimestamp: s
    } = e;
    B({
      guildId: t.id,
      userId: n.id,
      status: r,
      clientStatus: i,
      activities: a,
      hiddenActivities: o,
      processedAtTimestamp: s
    })
  })
}

function X(e) {
  let {
    guild: t
  } = e;
  W(t.id)
}

function J(e) {
  let {
    guildId: t,
    user: n
  } = e;
  return Y(t, n.id)
}

function $(e) {
  let {
    updates: t
  } = e;
  return t.map(e => {
    let {
      guildId: t,
      user: n,
      status: r,
      clientStatus: i,
      activities: a,
      hiddenActivities: o,
      processedAtTimestamp: s
    } = e;
    return B({
      guildId: null != t ? t : E.ME,
      userId: n.id,
      status: r,
      clientStatus: i,
      activities: a,
      hiddenActivities: o,
      processedAtTimestamp: s
    })
  }).some(e => e)
}

function ee(e) {
  let {
    guildId: t,
    members: n
  } = e;
  n.forEach(e => {
    null != e.presence && B({
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

function et(e) {
  let {
    guildId: t,
    addedMembers: n
  } = e;
  null == n || n.forEach(e => {
    null != e.presence && B({
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

function en(e) {
  let t = m.default.getId();
  if (v[t] === e.status && A[t] === e.activities && S[t] === e.hiddenActivities) returnfalse;
  v[t] = e.status, j(t, [...e.activities].sort(x)), S[t] = [...e.hiddenActivities].sort(x), delete C[t]
}

function er(e) {
  let {
    userId: t,
    metadata: n
  } = e;
  return C[t] = n, false
}
class ei extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(m.default, d.A, g.default)
  }
  setCurrentUserOnConnectionOpen(e, t) {
    v[m.default.getId()] = e, j(m.default.getId(), [...t].sort(x))
  }
  getStatus(e) {
    var t, n;
    let r = arguments.length > 1 && true !== arguments[1] ? arguments[1] : null,
      i = arguments.length > 2 && true !== arguments[2] ? arguments[2] : E.clD.OFFLINE,
      a = g.default.getUser(e);
    if (null != a && a.hasFlag(E.nhx.BOT_HTTP_INTERACTIONS) && (i = E.clD.UNKNOWN), null == r) return null != (n = v[e]) ? n : i;
    let o = N(e, r);
    return null != (t = null == o ? true : o.status) ? t : i
  }
  getActivities(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : null;
    if (null == t) {
      var n;
      return null != (n = I[e]) ? n : b
    }
    let r = N(e, t);
    return null == r || null == r.activities ? b : M(r.activities)
  }
  getUnfilteredActivities(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : null;
    if (null == t) {
      var n;
      return null != (n = A[e]) ? n : b
    }
    let r = N(e, t);
    return null == r || null == r.activities ? b : r.activities
  }
  getHiddenActivities(e) {
    var t, n, r;
    let i = arguments.length > 1 && true !== arguments[1] ? arguments[1] : null;
    return null == i ? null != (r = S[e]) ? r : b : null != (t = null == (n = N(e, i)) ? true : n.hiddenActivities) ? t : b
  }
  getPrimaryActivity(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : null;
    return this.getActivities(e, t).filter(e => e.type !== E.$pd.HANG_STATUS)[0]
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
    return C[e]
  }
  getUserIds() {
    return h.default.keys(A)
  }
  isMobileOnline(e) {
    let t = T[e];
    return null != t && t[E.xfJ.MOBILE] === E.clD.ONLINE && t[E.xfJ.DESKTOP] !== E.clD.ONLINE && t[E.xfJ.VR] !== E.clD.ONLINE
  }
  isVROnline(e) {
    let t = T[e];
    return null != t && t[E.xfJ.VR] === E.clD.ONLINE
  }
  getClientStatus(e) {
    return T[e]
  }
  getState() {
    return {
      presencesForGuilds: O,
      statuses: v,
      activities: A,
      filteredActivities: I,
      hiddenActivities: S,
      activityMetadata: C,
      clientStatuses: T
    }
  }
}
y(ei, "displayName", "PresenceStore");
let ea = new ei(Chunk73153.h, {
  CONNECTION_OPEN: K,
  CONNECTION_OPEN_SUPPLEMENTAL: z,
  OVERLAY_INITIALIZE: q,
  GUILD_CREATE: Q,
  GUILD_DELETE: X,
  GUILD_MEMBER_REMOVE: J,
  PRESENCE_UPDATES: $,
  PRESENCES_REPLACE: Z,
  ACTIVITY_METADATA_UPDATE: er,
  THREAD_MEMBER_LIST_UPDATE: ee,
  THREAD_MEMBERS_UPDATE: et,
  SELF_PRESENCE_STORE_UPDATE: en
})