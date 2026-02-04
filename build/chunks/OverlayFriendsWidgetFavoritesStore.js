/** Chunk was on 7685 **/
/** chunk id: 406595, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => K
}), require("./896048.js");
var l, Chunk311907 = require("./311907.js"),
  Chunk713402 = require("./713402.js"),
  Chunk73153 = require("./73153.js"),
  Chunk21119 = require("./21119.js"),
  Chunk95701 = require("./95701.js"),
  Chunk734057 = require("./734057.js"),
  Chunk197305 = require("./197305.js"),
  Chunk576705 = require("./576705.js"),
  Chunk290863 = require("./290863.js"),
  Chunk222823 = require("./222823.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk914853 = require("./914853.js"),
  Chunk956753 = require("./956753.js"),
  Chunk652215 = require("./652215.js");

function A(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let y = Number.MAX_SAFE_INTEGER,
  S = new Chunk713402.J(e => [e.tab], e => e.sortKey),
  v = new Set(Object.values(Chunk914853.x)),
  O = new Map,
  b = false;

function N(e, t, n) {
  return e < t ? t : e > n ? n : e
}

function T(e, t) {
  return String(e).padStart(t, "0")
}

function _(e) {
  return Number.isFinite(e) ? Math.floor(N(e, 0, y)) : Date.now()
}

function C(e) {
  return e ? "0" : "1"
}

function x(e, t) {
  return "".concat(e, ":").concat(t)
}

function D(e) {
  let t = O.get(e);
  return null == t && (t = new Map, O.set(e, t)), t
}

function M(e) {
  return Array.from(D(e).values())
}

function j() {
  let e = c.A.affinities,
    t = 0;
  for (let l = 0; l < e.length; l += 1) {
    var n;
    let r = null != (n = e[l].score) ? n : 0;
    r > t && (t = r)
  }
  return t > 0 ? t : 1
}

function w(e) {
  return {
    hasMention: g.Ay.getMentionCount(e) > 0,
    hasUnread: g.Ay.hasUnread(e)
  }
}

function P(e, t) {
  let n = u.A.getChannel(t);
  if (null == n) returnfalse;
  switch (e) {
    case I.x.MESSAGES:
      if (n.isDM() || n.isMultiUserDM() || n.isPrivate()) returntrue;
      if (!(0, o.ke)(n.type)) returnfalse;
      return d.A.can(E.xBc.READ_MESSAGE_HISTORY, n);
    case I.x.VOICE:
      if (!(0, o.ay)(n.type)) returnfalse;
      return d.A.can(E.xBc.VIEW_CHANNEL, n);
    case I.x.FRIENDS:
      returnfalse;
    default:
      return e
  }
}

function R(e) {
  var t;
  let n, {
      tab: l,
      targetId: r,
      isOnline: i,
      affinityScore: s,
      hasMention: a,
      hasUnread: o,
      addedTimestampMs: u
    } = e,
    c = {
      rowId: x(l, r),
      tab: l,
      targetId: r,
      isOnline: i,
      affinityScore: s,
      hasMention: a,
      hasUnread: o,
      addedTimestampMs: u,
      sortKey: ""
    };
  return c.sortKey = [(t = c).tab, C(t.isOnline), T(Math.round((1 - N(t.affinityScore, 0, 1)) * 1e6), 7), C(t.hasMention), C(t.hasUnread), (n = N(t.addedTimestampMs, 0, y), T(y - n, 16)), t.rowId].join("\0"), c
}

function U(e) {
  let {
    tab: t,
    targetId: n,
    addedTimestampMs: l,
    guildAffinityNormalizationMax: r,
    pruneInvalid: i
  } = e;
  if (t === I.x.FRIENDS) {
    if (null == p.default.getUser(n)) return {
      kind: "NOT_READY_YET"
    };
    if (!f.A.isFriend(n)) return i ? {
      kind: "INVALID"
    } : {
      kind: "NOT_READY_YET"
    };
    let e = function(e, t, n) {
      var l, r, i;
      if (e !== I.x.FRIENDS || null == p.default.getUser(t) || !f.A.isFriend(t)) return null;
      let s = (i = h.A.getStatus(t)) === E.clD.ONLINE || i === E.clD.IDLE || i === E.clD.DND,
        o = null != (l = null == (r = a.A.getUserAffinity(t)) ? true : r.communicationProbability) ? l : 0,
        c = u.A.getDMFromUserId(t),
        {
          hasMention: d,
          hasUnread: g
        } = null != c ? w(c) : {
          hasMention: false,
          hasUnread: false
        };
      return R({
        tab: e,
        targetId: t,
        isOnline: s,
        affinityScore: o,
        hasMention: d,
        hasUnread: g,
        addedTimestampMs: n
      })
    }(t, n, l);
    return null == e ? i ? {
      kind: "INVALID"
    } : {
      kind: "NOT_READY_YET"
    } : {
      kind: "BUILT",
      row: e
    }
  }
  if (null == u.A.getChannel(n)) return {
    kind: "NOT_READY_YET"
  };
  if (!P(t, n)) return i ? {
    kind: "INVALID"
  } : {
    kind: "NOT_READY_YET"
  };
  let s = function(e, t, n, l) {
    var r, i, s;
    if (!P(e, t)) return null;
    let a = u.A.getChannel(t);
    if (null == a) return null;
    let d = null != (r = a.getGuildId()) ? r : null,
      h = N((null != d && null != (i = null == (s = c.A.getGuildAffinity(d)) ? true : s.score) ? i : 0) / l, 0, 1),
      {
        hasMention: g,
        hasUnread: f
      } = (0, o.ke)(a.type) || a.isDM() || a.isMultiUserDM() || a.isPrivate() ? w(t) : {
        hasMention: false,
        hasUnread: false
      };
    return R({
      tab: e,
      targetId: t,
      isOnline: false,
      affinityScore: h,
      hasMention: g,
      hasUnread: f,
      addedTimestampMs: n
    })
  }(t, n, l, r);
  return null == s ? i ? {
    kind: "INVALID"
  } : {
    kind: "NOT_READY_YET"
  } : {
    kind: "BUILT",
    row: s
  }
}

function G(e, t) {
  return e.rowId !== t.rowId || e.tab !== t.tab || e.targetId !== t.targetId || e.isOnline !== t.isOnline || e.affinityScore !== t.affinityScore || e.hasMention !== t.hasMention || e.hasUnread !== t.hasUnread || e.addedTimestampMs !== t.addedTimestampMs || e.sortKey !== t.sortKey
}

function L(e) {
  let {
    pruneInvalid: t
  } = e, n = new Set(S.values().map(e => e.rowId)), l = j(), r = false;
  for (let e of v) {
    let i = D(e);
    for (let [s, a] of i.entries()) {
      let o = x(e, s),
        u = U({
          tab: e,
          targetId: s,
          addedTimestampMs: a.addedTimestampMs,
          guildAffinityNormalizationMax: l,
          pruneInvalid: t
        });
      switch (n.delete(o), u.kind) {
        case "BUILT": {
          let e = u.row,
            t = S.get(e.rowId);
          (null == t || G(t, e)) && (r = S.set(e.rowId, e) || r);
          break
        }
        case "NOT_READY_YET":
          r = S.delete(o) || r;
          break;
        case "INVALID":
          i.delete(s), r = true, r = S.delete(o) || r;
          break;
        default:
          return u
      }
    }
  }
  for (let e of n) r = S.delete(e) || r;
  return r
}

function k(e, t) {
  let n = D(e).delete(t),
    l = S.delete(x(e, t));
  return n || l
}

function F(e) {
  let {
    tab: t,
    targetId: n,
    pruneInvalid: l,
    guildAffinityNormalizationMax: r
  } = e, i = D(t), s = i.get(n), a = x(t, n);
  if (null == s) return S.delete(a);
  let o = U({
    tab: t,
    targetId: n,
    addedTimestampMs: s.addedTimestampMs,
    guildAffinityNormalizationMax: r,
    pruneInvalid: l
  });
  switch (o.kind) {
    case "BUILT": {
      let e = o.row,
        t = S.get(e.rowId);
      return !!(null == t || G(t, e)) && S.set(e.rowId, e)
    }
    case "NOT_READY_YET":
      return S.delete(a);
    case "INVALID":
      return l && i.delete(n), S.delete(a);
    default:
      return o
  }
}

function V(e, t) {
  let {
    pruneInvalid: n
  } = t, l = D(e);
  if (0 === l.size && 0 === S.values(e).length) returnfalse;
  let r = j(),
    i = false,
    s = new Set;
  for (let t of l.keys()) s.add(x(e, t)), i = F({
    tab: e,
    targetId: t,
    pruneInvalid: n,
    guildAffinityNormalizationMax: r
  }) || i;
  for (let t of S.values(e)) s.has(t.rowId) || (i = S.delete(t.rowId) || i);
  return i
}

function H(e, t) {
  let {
    pruneInvalid: n
  } = t, l = D(I.x.FRIENDS);
  if (0 === l.size) returnfalse;
  let r = j(),
    i = false;
  for (let t of l.keys()) u.A.getDMFromUserId(t) === e && (i = F({
    tab: I.x.FRIENDS,
    targetId: t,
    pruneInvalid: n,
    guildAffinityNormalizationMax: r
  }) || i);
  return i
}

function Y(e) {
  let t = b,
    n = j(),
    l = false;
  return D(I.x.MESSAGES).has(e) && (l = F({
    tab: I.x.MESSAGES,
    targetId: e,
    pruneInvalid: t,
    guildAffinityNormalizationMax: n
  }) || l), l = H(e, {
    pruneInvalid: t
  }) || l
}

function W() {
  return b = true, L({
    pruneInvalid: true
  })
}
class z extends(l = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    this.waitFor(u.A, c.A, d.A, h.A, g.Ay, f.A, a.A, p.default),
      function(e) {
        O = new Map, S.clear();
        for (let t of v)(function(e, t) {
          let n = function(e, t) {
              var n, l, r;
              if (null == e) return [];
              switch (t) {
                case I.x.FRIENDS:
                  return null != (n = e.friendsFavoriteTargetIds) ? n : [];
                case I.x.MESSAGES:
                  return null != (l = e.messagesFavoriteTargetIds) ? l : [];
                case I.x.VOICE:
                  return null != (r = e.voiceFavoriteTargetIds) ? r : [];
                default:
                  return t
              }
            }(e, t),
            l = D(t),
            r = 0;
          for (let e of n) {
            let t = null == e || "string" != typeof e.targetId ? null : {
              targetId: e.targetId,
              addedTimestampMs: _(e.addedTimestampMs)
            };
            null != t && (l.set(t.targetId, t), r += 1)
          };
        })(e, t)
      }(e), L({
        pruneInvalid: false
      })
  }
  getState() {
    return {
      friendsFavoriteTargetIds: M(I.x.FRIENDS),
      messagesFavoriteTargetIds: M(I.x.MESSAGES),
      voiceFavoriteTargetIds: M(I.x.VOICE)
    }
  }
  getFavoriteTargetIdsForTab(e) {
    return [S.values(e).map(e => e.targetId), S.version]
  }
  isFavorite(e, t) {
    return [D(e).has(t), S.version]
  }
}
A(z, "displayName", "OverlayFriendsWidgetFavoritesStore"), A(z, "persistKey", "OverlayFriendsWidgetFavoritesStore");
let B = e => (0, m.v$)(e, "OverlayFriendsWidgetFavoritesStore"),
  K = new z(Chunk73153.h, __OVERLAY__ ? {} : {
    OVERLAY_FRIENDS_WIDGET_SET_FAVORITE: B(function(e) {
      var t, n, l;
      let r = x(e.tab, e.targetId);
      if (!e.isFavorite) {
        let t = D(e.tab).delete(e.targetId),
          n = S.delete(r);
        return t || n
      }
      let i = _(null != (t = null != (n = e.addedTimestampMs) ? n : null == (l = D(e.tab).get(e.targetId)) ? true : l.addedTimestampMs) ? t : Date.now()),
        s = D(e.tab);
      s.set(e.targetId, {
        targetId: e.targetId,
        addedTimestampMs: i
      });
      let a = j(),
        o = U({
          tab: e.tab,
          targetId: e.targetId,
          addedTimestampMs: i,
          guildAffinityNormalizationMax: a,
          pruneInvalid: b
        });
      switch (o.kind) {
        case "BUILT": {
          let e = o.row,
            t = S.get(e.rowId);
          (null == t || G(t, e)) && S.set(e.rowId, e);
          break
        }
        case "NOT_READY_YET":
          S.delete(r);
          break;
        case "INVALID":
          s.delete(e.targetId), S.delete(r);
          break;
        default:
          return o
      }
      returntrue
    }),
    POST_CONNECTION_OPEN: B(W),
    OVERLAY_INITIALIZE: B(W),
    CACHE_LOADED: B(W),
    CACHE_LOADED_LAZY: B(W),
    FRIENDS_LIST_POPOUT_MOUNTED: B(W),
    PRESENCE_UPDATES: B(function(e) {
      let t = D(I.x.FRIENDS);
      if (0 === t.size) returnfalse;
      let n = j(),
        l = false;
      for (let i of e.updates) {
        var r;
        let e = null == (r = i.user) ? true : r.id;
        null != e && t.has(e) && (l = F({
          tab: I.x.FRIENDS,
          targetId: e,
          pruneInvalid: b,
          guildAffinityNormalizationMax: n
        }) || l)
      }
      return l
    }),
    PRESENCES_REPLACE: B(function(e) {
      let t = D(I.x.FRIENDS);
      if (0 === t.size) returnfalse;
      let n = j(),
        l = false;
      for (let i of e.presences) {
        var r;
        let e = null == (r = i.user) ? true : r.id;
        null != e && t.has(e) && (l = F({
          tab: I.x.FRIENDS,
          targetId: e,
          pruneInvalid: b,
          guildAffinityNormalizationMax: n
        }) || l)
      }
      return l
    }),
    LOAD_USER_AFFINITIES_V2_SUCCESS: B(function() {
      return V(I.x.FRIENDS, {
        pruneInvalid: b
      })
    }),
    LOAD_GUILD_AFFINITIES_SUCCESS: B(function() {
      let e = b;
      return V(I.x.MESSAGES, {
        pruneInvalid: e
      }) || V(I.x.VOICE, {
        pruneInvalid: e
      })
    }),
    MESSAGE_CREATE: B(e => Y(e.channelId)),
    MESSAGE_ACK: B(e => Y(e.channelId)),
    CHANNEL_ACK: B(e => Y(e.channelId)),
    CHANNEL_UPDATES: B(function(e) {
      let t = b,
        n = j(),
        l = false,
        r = D(I.x.MESSAGES),
        i = D(I.x.VOICE);
      for (let s of e.channels) {
        let e = null == s ? true : s.id;
        null != e && (r.has(e) && (l = F({
          tab: I.x.MESSAGES,
          targetId: e,
          pruneInvalid: t,
          guildAffinityNormalizationMax: n
        }) || l), i.has(e) && (l = F({
          tab: I.x.VOICE,
          targetId: e,
          pruneInvalid: t,
          guildAffinityNormalizationMax: n
        }) || l), l = H(e, {
          pruneInvalid: t
        }) || l)
      }
      return l
    }),
    CHANNEL_DELETE: B(function(e) {
      var t;
      let n = null == (t = e.channel) ? true : t.id;
      if (null == n) returnfalse;
      let l = false;
      return l = k(I.x.MESSAGES, n) || l, l = k(I.x.VOICE, n) || l, l = H(n, {
        pruneInvalid: b
      }) || l
    }),
    RELATIONSHIP_ADD: B(function(e) {
      var t;
      let n = null == (t = e.relationship) ? true : t.id;
      if (null == n || !D(I.x.FRIENDS).has(n)) returnfalse;
      let l = j();
      return F({
        tab: I.x.FRIENDS,
        targetId: n,
        pruneInvalid: b,
        guildAffinityNormalizationMax: l
      })
    }),
    RELATIONSHIP_REMOVE: B(function(e) {
      var t;
      let n = null == (t = e.relationship) ? true : t.id;
      return null != n && k(I.x.FRIENDS, n)
    }),
    LOGOUT: B(function() {
      let e = S.size() > 0 || O.size > 0;
      return S.clear(), O = new Map, b = false, e
    })
  })