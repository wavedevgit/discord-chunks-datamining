/** Chunk was on web.js **/
/** chunk id: 439170, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  CR: () => R,
  ZP: () => X,
  oL: () => P,
  so: () => D
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

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function A(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      S(e, t, n[t])
    })
  }
  return e
}

function C(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : C(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let R = "everyone",
  P = 0;
var D = function(e) {
  return e.GROUP = "GROUP", e.MEMBER = "MEMBER", e.CONTENT_INVENTORY = "CONTENT_INVENTORY", e.CONTENT_INVENTORY_GROUP = "CONTENT_INVENTORY_GROUP", e.HIDDEN_CONTENT_INVENTORY = "HIDDEN_CONTENT_INVENTORY", e.CONTENT_INVENTORY_LEADERBOARD = "CONTENT_INVENTORY_LEADERBOARD", e
}({});

function w(e, t, n, r) {
  switch (t) {
    case I.Skl.ONLINE:
    case I.Skl.OFFLINE:
    case I.Skl.UNKNOWN:
      return {
        type: "GROUP", key: t, id: t, get title() {
          switch (t) {
            case I.Skl.ONLINE:
              return T.intl.string(T.t.WbGtnH);
            case I.Skl.OFFLINE:
              return T.intl.string(T.t.Vv0abJ);
            default:
              return T.intl.string(T.t["UQMV/E"])
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

function L(e, t, n) {
  let r = n === p.default.getId(),
    i = y.Z.isMobileOnline(n),
    a = r ? O.Z.getStatus() : y.Z.getStatus(n, e),
    o = r ? O.Z.getActivities() : y.Z.getActivities(n, e),
    s = _.Z.getStreamForUser(n, e),
    l = v.default.getUser(n);
  return null == l ? null : N(A({
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

function x(e) {
  let t = h.Z.getChannel(e);
  return null == t ? R : null == t.memberListId ? M(t) : t.memberListId
}

function M(e) {
  return f.oz(I.Plq.VIEW_CHANNEL, e) ? R : s().v3(a()(e.permissionOverwrites).reduce((e, t) => {
    let {
      id: n,
      allow: r,
      deny: i
    } = t;
    return l.e$(r, I.Plq.VIEW_CHANNEL) ? e.push("allow:".concat(n)) : l.e$(i, I.Plq.VIEW_CHANNEL) && e.push("deny:".concat(n)), e
  }, []).sort().join(",")).toString()
}
class k {
  updateOwnerId() {
    let e = Chunk430824.Z.getGuild(this.guildId);
    if (null == module) returnfalse;
    let t = Chunk700785.iJ(module);
    return this.ownerId !== exports && (this.ownerId = exports, true)
  }
  setGroups(e) {
    let t = 0;
    this.groups = e.map(e => {
      var n;
      let r = t,
        i = Math.max(0, null != (n = e.count) ? n : 0);
      return t += i + 1, w(this.guildId, e.id, i, r)
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
    if (null != n) this.rows.splice(e, 0, w(this.guildId, n.id, n.count));
    else if (null != r) {
      let t = L(this.guildId, this.ownerId, r.user.id);
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
    if (null != i && "MEMBER" === i.type && delete this.members[i.user.id], null != n) this.rows[e] = w(this.guildId, n.id, n.count);
    else if (null != r) {
      let t = L(this.guildId, this.ownerId, r.user.id);
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
    null != t && (Object.assign(t, L(this.guildId, this.ownerId, e)), this.version++)
  }
  rebuildMembers() {
    let e = Object.keys(this.members);
    for (let t = 0; exports < module.length; exports++) {
      let n = module[exports];
      this.rebuildMember(require)
    }
  }
  constructor(e, t) {
    S(this, "guildId", true), S(this, "listId", true), S(this, "ownerId", true), S(this, "rows", []), S(this, "groups", []), S(this, "members", {}), S(this, "version", 0), this.guildId = e, this.listId = t, this.updateOwnerId()
  }
}
class j {
  get(e, t) {
    let n = this._guildLists[e];
    null == n && (n = this._guildLists[e] = {});
    let r = n[t];
    return null == r && ((r = new k(e, t)).setGroups([{
      id: I.Skl.UNKNOWN,
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
    S(this, "_guildLists", {})
  }
}
let U = new j;

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

function B() {
  U.reset()
}

function Z(e) {
  let {
    guild: t
  } = e;
  U.forEach(t.id, e => {
    e.updateOwnerId() && e.rebuildMembers()
  })
}

function F(e) {
  let {
    guild: t
  } = e;
  U.delete(t.id)
}

function V(e) {
  let {
    guildId: t
  } = e;
  U.forEach(t, e => e.rebuildMembers())
}

function H(e) {
  let {
    guildId: t,
    user: n
  } = e;
  U.forEach(t, e => e.rebuildMember(n.id))
}
let W = [];

function Y() {
  let e = Chunk199902.Z.getAllApplicationStreams(),
    t = W.concat(module);
  W = module, exports.forEach(e => {
    U.forEach(null, t => t.rebuildMember(e.ownerId))
  })
}

function K() {
  let e = Chunk314897.default.getId();
  U.forEach(null, t => t.rebuildMember(e))
}

function z() {
  returntrue
}
class q extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk594174.default, Chunk430824.Z, Chunk485386.Z, Chunk592125.Z, Chunk271383.ZP, Chunk158776.Z, Chunk885110.Z, Chunk314897.default, Chunk650774.Z, Chunk199902.Z, Chunk353926.Z), this.syncWith([Chunk885110.Z], K), this.syncWith([Chunk199902.Z], Y)
  }
  getProps(e, t) {
    let n = U.get(e, x(t));
    return {
      listId: "".concat(n.guildId, ":").concat(n.listId),
      groups: n.groups,
      rows: n.rows,
      version: n.version
    }
  }
  getRows(e, t) {
    return U.get(e, x(t)).rows
  }
}
S(q, "displayName", "ChannelMemberStore");
let X = new q(Chunk570140.Z, {
  CONNECTION_OPEN: B,
  OVERLAY_INITIALIZE: B,
  GUILD_MEMBER_LIST_UPDATE: G,
  GUILD_UPDATE: Z,
  GUILD_DELETE: F,
  GUILD_ROLE_UPDATE: V,
  GUILD_MEMBER_UPDATE: H,
  CHANNEL_UPDATES: z
})