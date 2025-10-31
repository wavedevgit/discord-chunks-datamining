/** Chunk was on web.js **/
/** chunk id: 159299, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => j
}), require("./388685.js"), require("./642613.js"), require("./539854.js");
var r, Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk592125 = require("./592125.js"),
  Chunk271383 = require("./271383.js"),
  Chunk797316 = require("./797316.js"),
  Chunk158776 = require("./158776.js"),
  Chunk885110 = require("./885110.js"),
  Chunk594174 = require("./594174.js"),
  Chunk823379 = require("./823379.js"),
  Chunk700785 = require("./700785.js"),
  Chunk709054 = require("./709054.js"),
  Chunk51144 = require("./51144.js"),
  Chunk981631 = require("./981631.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let y = {};
class O {
  rebuild(e) {
    this.version++, this.sections = {}, null != e && (this.allUserIds = new Set(e));
    let t = l.Z.getChannel(this.parentId);
    a()(Array.from(this.allUserIds)).map(e => {
      let [n, r, i] = this.calculateNewState(e, t);
      return {
        userId: e,
        sectionId: n,
        displayName: r,
        canViewChannel: i
      }
    }).sort((e, t) => m.default.compare(e.userId, t.userId)).sortBy(e => e.displayName).forEach(e => {
      this.addUser(e.userId, e.sectionId, e.displayName, e.canViewChannel, true)
    })
  }
  updateMultipleUserIds(e, t) {
    return (null == t || this.guildId === t) && 0 !== (e = e.filter(e => this.allUserIds.has(e))).length && (e.length > 50 ? this.rebuild() : e.forEach(e => this.updateUserId(e)), true)
  }
  updateUserId(e) {
    if (!this.allUserIds.has(e)) returnfalse;
    let [t, n, r] = this.findOldState(e), [i, a, o] = this.calculateNewState(e, l.Z.getChannel(this.parentId));
    return (t !== i || n !== a || r !== o) && (this.removeUserId(e, t), this.addUser(e, i, a, o), true)
  }
  addUserId(e) {
    let [t, n, r] = this.calculateNewState(e, l.Z.getChannel(this.parentId));
    this.addUser(e, t, n, r)
  }
  removeUserId(e, t) {
    if (this.allUserIds.delete(e), null != t && this.removeUserIdFromSection(e, t)) returntrue;
    for (let t in this.sections)
      if (this.removeUserIdFromSection(e, t)) returntrue;
    returnfalse
  }
  addUser(e, t, n, r, i) {
    this.allUserIds.add(e);
    let a = _.default.getUser(e);
    if (null == a || "" === a.username) return;
    t in this.sections || (this.sections[t] = {
      sectionId: t,
      usersById: {},
      userIds: []
    });
    let o = this.sections[t];
    if (o.usersById[e] = {
        userId: e,
        displayName: n,
        canViewChannel: r
      }, i) o.userIds.push(e);
    else {
      let t = this.findUserIdSortedPosition(o, e, n);
      o.userIds.splice(t, 0, e)
    }
    this.version++
  }
  findUserIdSortedPosition(e, t, n) {
    let {
      userIds: r,
      usersById: i
    } = e;
    for (let e = 0; e < r.length; e++) {
      let a = r[e],
        o = i[a].displayName;
      if (o === n) {
        if (t < a) return e
      } else if (null == o) {
        if (null != n) return e
      } else if (null != n && n < o) return e
    }
    return r.length
  }
  removeUserIdFromSection(e, t) {
    let n = this.sections[t];
    return null != t && e in n.usersById && (delete n.usersById[e], n.userIds = n.userIds.filter(t => t !== e), this.version++, true)
  }
  findOldState(e) {
    for (let t in this.sections) {
      let n = this.sections[t];
      if (e in n.usersById) {
        let r = n.usersById[e];
        return [t, r.displayName, r.canViewChannel]
      }
    }
    return [true, true, false]
  }
  calculateNewState(e, t) {
    var n, r;
    let i = c.ZP.getMember(this.guildId, e),
      a = _.default.getUser(e),
      o = _.default.getCurrentUser(),
      s = (null == a ? true : a.id) === (null == o ? true : o.id) ? f.Z.getStatus() : d.Z.getStatus(e, this.guildId),
      l = null != a && null != t && h.BT({
        permission: E.Plq.VIEW_CHANNEL,
        user: a,
        context: t
      }),
      u = s !== E.Skl.OFFLINE && s !== E.Skl.INVISIBLE && s !== E.Skl.UNKNOWN ? null != (n = null == i ? true : i.hoistRoleId) ? n : "online" : "offline",
      p = null != (r = null == i ? true : i.nick) ? r : g.ZP.getName(a);
    return [u, null == p ? true : p.toLowerCase(), l]
  }
  constructor(e, t, n) {
    b(this, "guildId", true), b(this, "parentId", true), b(this, "threadId", true), b(this, "version", true), b(this, "sections", true), b(this, "allUserIds", true), this.guildId = e, this.parentId = t, this.threadId = n, this.version = 0, this.sections = {}, this.allUserIds = new Set
  }
}

function v() {
  y = {}
}

function I(e) {
  var t, n;
  if (!(e.id in y)) returnfalse;
  null == (t = e.addedMembers) || t.forEach(t => {
    let {
      userId: n
    } = t;
    return y[e.id].addUserId(n)
  }), null == (n = e.removedMemberIds) || n.forEach(t => y[e.id].removeUserId(t))
}

function T(e) {
  let {
    threadId: t,
    guildId: n,
    members: r
  } = e, i = l.Z.getChannel(t), a = null == i ? true : i.parent_id;
  null != a && (y[t] = new O(n, a, t), y[t].rebuild(r.map(e => e.user_id)))
}

function S(e) {
  return N(e.user.id)
}

function A(e) {
  let {
    updates: t
  } = e;
  return t.map(e => {
    let {
      user: t
    } = e;
    return N(t.id)
  }).some(e => e)
}

function C(e) {
  return e.members.reduce((e, t) => N(t.user.id) || e, false)
}

function N(e) {
  if (null == e) returnfalse;
  let t = false;
  for (let n in y) y[n].updateUserId(e) && (t = true);
  return t
}

function R(e) {
  let {
    presences: t
  } = e, n = a()(t).map(e => {
    var t;
    return null == (t = e.user) ? true : t.id
  }).filter(p.lm).uniq().value(), r = false;
  for (let e in y) y[e].updateMultipleUserIds(n) && (r = true);
  return r
}

function P(e) {
  let {
    chunks: t
  } = e, n = false;
  for (let {
      guildId: e,
      members: r
    }
    of t) {
    let t = r.map(e => e.user.id);
    for (let r in y) y[r].updateMultipleUserIds(t, e) && (n = true)
  }
  return n
}

function w(e) {
  var t;
  let {
    channel: n
  } = e;
  if (!(n.id in y) || (null == (t = n.threadMetadata) ? true : t.archived) !== true) returnfalse;
  delete y[n.id]
}

function D(e) {
  let {
    channel: t
  } = e;
  if (!(t.id in y)) returnfalse;
  delete y[t.id]
}

function x(e) {
  let {
    guildId: t
  } = e, n = false;
  for (let e in y) y[e].guildId === t && (y[e].rebuild(), n = true);
  return n
}

function L(e) {
  let {
    channels: t
  } = e, n = new Set(t.map(e => e.id)), r = false;
  for (let e in y) n.has(y[e].parentId) && (y[e].rebuild(), r = true);
  return r
}
class M extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk592125.Z, Chunk271383.ZP, Chunk797316.Z, Chunk158776.Z, Chunk885110.Z, Chunk594174.default), this.syncWith([Chunk797316.Z], () => {
      let e = Chunk797316.Z.getSubscribedThreadIds(),
        t = false;
      for (let n in y) module.has(require) || (delete y[require], t = true);
      return exports
    }), this.syncWith([Chunk885110.Z], () => {
      var e;
      return N(null == (e = Chunk594174.default.getCurrentUser()) ? true : module.id)
    })
  }
  getMemberListVersion(e) {
    var t;
    return null == (t = y[e]) ? true : t.version
  }
  getMemberListSections(e) {
    var t;
    return null == (t = y[e]) ? true : t.sections
  }
  canUserViewChannel(e, t, n) {
    var r, i;
    let a = y[e];
    if (null == a) returnfalse;
    let o = null == (r = a.sections[t]) ? true : r.usersById[n];
    return null != (i = null == o ? true : o.canViewChannel) && i
  }
}
b(M, "displayName", "ThreadMemberListStore");
let j = new M(Chunk570140.Z, {
  CONNECTION_OPEN: v,
  THREAD_MEMBERS_UPDATE: I,
  THREAD_UPDATE: w,
  THREAD_DELETE: D,
  CHANNEL_UPDATES: L,
  THREAD_MEMBER_LIST_UPDATE: T,
  USER_UPDATE: S,
  PRESENCE_UPDATES: A,
  GUILD_MEMBER_ADD: S,
  GUILD_MEMBER_UPDATE: S,
  GUILD_MEMBER_REMOVE: S,
  PRESENCES_REPLACE: R,
  GUILD_MEMBERS_CHUNK_BATCH: P,
  GUILD_ROLE_UPDATE: x,
  GUILD_ROLE_DELETE: x,
  PASSIVE_UPDATE_V2: C
})