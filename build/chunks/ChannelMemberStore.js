/** Chunk was on web.js **/
/** chunk id: 439170, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  CR: () => P,
  ZP: () => Q,
  oL: () => w,
  so: () => R
}), require("./539854.js"), require("./642613.js"), require("./388685.js");
var r, Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk108131 = require("./108131.js"),
  s = require.n(Chunk108131),
  Chunk149765 = require("./149765.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk353926 = require("./353926.js"),
  Chunk700785 = require("./700785.js"),
  Chunk199902 = require("./199902.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk650774 = require("./650774.js"),
  Chunk271383 = require("./271383.js"),
  Chunk485386 = require("./485386.js"),
  Chunk430824 = require("./430824.js"),
  Chunk158776 = require("./158776.js"),
  Chunk885110 = require("./885110.js"),
  Chunk594174 = require("./594174.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function C(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      T(e, t, n[t])
    })
  }
  return e
}

function A(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function N(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : A(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let P = "everyone",
  w = 0;
var R = function(e) {
  return e.GROUP = "GROUP", e.MEMBER = "MEMBER", e.CONTENT_INVENTORY = "CONTENT_INVENTORY", e.CONTENT_INVENTORY_GROUP = "CONTENT_INVENTORY_GROUP", e.HIDDEN_CONTENT_INVENTORY = "HIDDEN_CONTENT_INVENTORY", e.CONTENT_INVENTORY_LEADERBOARD = "CONTENT_INVENTORY_LEADERBOARD", e
}({});

function D(e, t, n, r) {
  switch (t) {
    case S.Skl.ONLINE:
    case S.Skl.OFFLINE:
    case S.Skl.UNKNOWN:
      return {
        type: "GROUP", key: t, id: t, get title() {
          switch (t) {
            case S.Skl.ONLINE:
              return I.intl.string(I.t.WbGtnH);
            case S.Skl.OFFLINE:
              return I.intl.string(I.t.Vv0abJ);
            default:
              return I.intl.string(I.t["UQMV/E"])
          }
        }, count: n, index: r
      };
    default:
      let i = b.Z.getGuild(e),
        a = null != i ? E.Z.getRole(i.id, t) : null;
      return {
        type: "GROUP", key: t, id: t, title: null != a ? a.name : "", count: n, index: r
      }
  }
}

function x(e, t, n) {
  let r = n === _.default.getId(),
    i = y.Z.isMobileOnline(n),
    a = r ? O.Z.getStatus() : y.Z.getStatus(n, e),
    o = r ? O.Z.getActivities() : y.Z.getActivities(n, e),
    s = p.Z.getStreamForUser(n, e),
    l = v.default.getUser(n);
  return null == l ? null : N(C({
    type: "MEMBER"
  }, g.ZP.getMember(e, n)), {
    user: l,
    status: a,
    activities: o,
    applicationStream: s,
    isOwner: t === n,
    isMobileOnline: i
  })
}

function L(e) {
  let t = h.Z.getChannel(e);
  return null == t ? P : null == t.memberListId ? j(t) : t.memberListId
}

function j(e) {
  return f.oz(S.Plq.VIEW_CHANNEL, e) ? P : s().v3(a()(e.permissionOverwrites).reduce((e, t) => {
    let {
      id: n,
      allow: r,
      deny: i
    } = t;
    return l.e$(r, S.Plq.VIEW_CHANNEL) ? e.push("allow:".concat(n)) : l.e$(i, S.Plq.VIEW_CHANNEL) && e.push("deny:".concat(n)), e
  }, []).sort().join(",")).toString()
}
class M {
  updateOwnerId() {
    let e = b.Z.getGuild(this.guildId);
    if (null == e) returnfalse;
    let t = f.iJ(e);
    return this.ownerId !== t && (this.ownerId = t, true)
  }
  setGroups(e) {
    let t = 0;
    this.groups = e.map(e => {
      var n;
      let r = t,
        i = Math.max(0, null != (n = e.count) ? n : 0);
      return t += i + 1, D(this.guildId, e.id, i, r)
    }), this.rows.length = t
  }
  sync(e, t) {
    let [n] = e;
    t.forEach((e, t) => this.update(n + t, e))
  }
  invalidate(e) {
    let [t, n] = e;
    for (let e = t; e <= n; e++) {
      let t = this.rows[e];
      if (null == t) break;
      delete this.rows[e], "MEMBER" === t.type && delete this.members[t.user.id]
    }
    this.version++
  }
  insert(e, t) {
    let {
      group: n,
      member: r
    } = t;
    if (null != n) this.rows.splice(e, 0, D(this.guildId, n.id, n.count));
    else if (null != r) {
      let t = x(this.guildId, this.ownerId, r.user.id);
      if (null == t) return;
      this.rows.splice(e, 0, t), this.members[r.user.id] = t
    }
    this.version++
  }
  update(e, t) {
    let {
      group: n,
      member: r
    } = t, i = this.rows[e];
    if (null != i && "MEMBER" === i.type && delete this.members[i.user.id], null != n) this.rows[e] = D(this.guildId, n.id, n.count);
    else if (null != r) {
      let t = x(this.guildId, this.ownerId, r.user.id);
      if (null == t) return;
      this.rows[e] = t, this.members[r.user.id] = t
    }
    this.version++
  }
  delete(e) {
    let t = this.rows[e];
    null != t && ("MEMBER" === t.type && delete this.members[t.user.id], this.rows.splice(e, 1), this.version++)
  }
  rebuildMember(e) {
    let t = this.members[e];
    null != t && (Object.assign(t, x(this.guildId, this.ownerId, e)), this.version++)
  }
  rebuildMembers() {
    let e = Object.keys(this.members);
    for (let t = 0; t < e.length; t++) {
      let n = e[t];
      this.rebuildMember(n)
    }
  }
  rebuildGroup(e) {
    let t = this.groups.findIndex(t => t.id === e),
      n = this.groups[t];
    null != n && (this.groups.splice(t, 1, D(this.guildId, e, n.count, n.index)), this.version++)
  }
  constructor(e, t) {
    T(this, "guildId", true), T(this, "listId", true), T(this, "ownerId", true), T(this, "rows", []), T(this, "groups", []), T(this, "members", {}), T(this, "version", 0), this.guildId = e, this.listId = t, this.updateOwnerId()
  }
}
class k {
  get(e, t) {
    let n = this._guildLists[e];
    null == n && (n = this._guildLists[e] = {});
    let r = n[t];
    return null == r && ((r = new M(e, t)).setGroups([{
      id: S.Skl.UNKNOWN,
      count: 0
    }]), n[t] = r), r
  }
  forEach(e, t) {
    if (null == e) a().forEach(this._guildLists, e => {
      a().forEach(e, t)
    });
    else {
      let n = this._guildLists[e];
      null != n && a().forEach(n, t)
    }
  }
  delete(e) {
    delete this._guildLists[e]
  }
  reset() {
    this._guildLists = {}
  }
  constructor() {
    T(this, "_guildLists", {})
  }
}
let U = new k;

function G(e) {
  let t = U.get(e.guildId, e.id);
  e.ops.forEach(e => {
    switch (e.op) {
      case "SYNC":
        t.sync(e.range, e.items);
        break;
      case "INVALIDATE":
        t.invalidate(e.range);
        break;
      case "INSERT":
        t.insert(e.index, e.item);
        break;
      case "UPDATE":
        t.update(e.index, e.item);
        break;
      case "DELETE":
        t.delete(e.index)
    }
  }), t.setGroups(e.groups)
}

function Z() {
  U.reset()
}

function F(e) {
  let {
    guild: t
  } = e;
  U.forEach(t.id, e => {
    e.updateOwnerId() && e.rebuildMembers()
  })
}

function B(e) {
  let {
    guild: t
  } = e;
  U.delete(t.id)
}

function V(e) {
  let {
    guildId: t,
    role: n
  } = e;
  U.forEach(t, e => {
    e.rebuildGroup(n.id), e.rebuildMembers()
  })
}

function H(e) {
  let {
    guildId: t,
    user: n
  } = e;
  U.forEach(t, e => e.rebuildMember(n.id))
}
let Y = [];

function W() {
  let e = p.Z.getAllApplicationStreams(),
    t = Y.concat(e);
  Y = e, t.forEach(e => {
    U.forEach(null, t => t.rebuildMember(e.ownerId))
  })
}

function K() {
  let e = _.default.getId();
  U.forEach(null, t => t.rebuildMember(e))
}

function z() {
  returntrue
}
class q extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(v.default, b.Z, E.Z, h.Z, g.ZP, y.Z, O.Z, _.default, m.Z, p.Z, d.Z), this.syncWith([O.Z], K), this.syncWith([p.Z], W)
  }
  getProps(e, t) {
    let n = U.get(e, L(t));
    return {
      listId: "".concat(n.guildId, ":").concat(n.listId),
      groups: n.groups,
      rows: n.rows,
      version: n.version
    }
  }
  getRows(e, t) {
    return U.get(e, L(t)).rows
  }
}
T(q, "displayName", "ChannelMemberStore");
let Q = new q(Chunk570140.Z, {
  CONNECTION_OPEN: Z,
  OVERLAY_INITIALIZE: Z,
  GUILD_MEMBER_LIST_UPDATE: G,
  GUILD_UPDATE: F,
  GUILD_DELETE: B,
  GUILD_ROLE_UPDATE: V,
  GUILD_MEMBER_UPDATE: H,
  CHANNEL_UPDATES: z
})