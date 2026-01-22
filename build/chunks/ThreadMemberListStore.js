/** Chunk was on web.js **/
/** chunk id: 219065, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => M
}), require("./896048.js"), require("./638769.js"), require("./321073.js");
var r, Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk734057 = require("./734057.js"),
  Chunk696451 = require("./696451.js"),
  Chunk82057 = require("./82057.js"),
  Chunk290863 = require("./290863.js"),
  Chunk461213 = require("./461213.js"),
  Chunk287809 = require("./287809.js"),
  Chunk403362 = require("./403362.js"),
  Chunk488926 = require("./488926.js"),
  Chunk661191 = require("./661191.js"),
  Chunk427262 = require("./427262.js"),
  Chunk652215 = require("./652215.js");

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
    let t = l.A.getChannel(this.parentId);
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
    let [t, n, r] = this.findOldState(e), [i, a, s] = this.calculateNewState(e, l.A.getChannel(this.parentId));
    return (t !== i || n !== a || r !== s) && (this.removeUserId(e, t), this.addUser(e, i, a, s), true)
  }
  addUserId(e) {
    let [t, n, r] = this.calculateNewState(e, l.A.getChannel(this.parentId));
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
    let a = p.default.getUser(e);
    if (null == a || "" === a.username) return;
    t in this.sections || (this.sections[t] = {
      sectionId: t,
      usersById: {},
      userIds: []
    });
    let s = this.sections[t];
    if (s.usersById[e] = {
        userId: e,
        displayName: n,
        canViewChannel: r
      }, i) s.userIds.push(e);
    else {
      let t = this.findUserIdSortedPosition(s, e, n);
      s.userIds.splice(t, 0, e)
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
        s = i[a].displayName;
      if (s === n) {
        if (t < a) return e
      } else if (null == s) {
        if (null != n) return e
      } else if (null != n && n < s) return e
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
    let i = c.Ay.getMember(this.guildId, e),
      a = p.default.getUser(e),
      s = p.default.getCurrentUser(),
      o = (null == a ? true : a.id) === (null == s ? true : s.id) ? f.A.getStatus() : d.A.getStatus(e, this.guildId),
      l = null != a && null != t && h.$3({
        permission: E.xBc.VIEW_CHANNEL,
        user: a,
        context: t
      }),
      u = o !== E.clD.OFFLINE && o !== E.clD.INVISIBLE && o !== E.clD.UNKNOWN ? null != (n = null == i ? true : i.hoistRoleId) ? n : "online" : "offline",
      _ = null != (r = null == i ? true : i.nick) ? r : g.Ay.getName(a);
    return [u, null == _ ? true : _.toLowerCase(), l]
  }
  constructor(e, t, n) {
    b(this, "guildId", true), b(this, "parentId", true), b(this, "threadId", true), b(this, "version", true), b(this, "sections", true), b(this, "allUserIds", true), this.guildId = e, this.parentId = t, this.threadId = n, this.version = 0, this.sections = {}, this.allUserIds = new Set
  }
}

function A() {
  y = {}
}

function v(e) {
  var t, n;
  if (!(e.id in y)) returnfalse;
  null == (t = e.addedMembers) || t.forEach(t => {
    let {
      userId: n
    } = t;
    return y[e.id].addUserId(n)
  }), null == (n = e.removedMemberIds) || n.forEach(t => y[e.id].removeUserId(t))
}

function S(e) {
  let {
    threadId: t,
    guildId: n,
    members: r
  } = e, i = l.A.getChannel(t), a = null == i ? true : i.parent_id;
  null != a && (y[t] = new O(n, a, t), y[t].rebuild(r.map(e => e.user_id)))
}

function I(e) {
  return N(e.user.id)
}

function T(e) {
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
  }).filter(_.Vq).uniq().value(), r = false;
  for (let e in y) y[e].updateMultipleUserIds(n) && (r = true);
  return r
}

function w(e) {
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

function P(e) {
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
class j extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(l.A, c.Ay, u.A, d.A, f.A, p.default), this.syncWith([u.A], () => {
      let e = u.A.getSubscribedThreadIds(),
        t = false;
      for (let n in y) e.has(n) || (delete y[n], t = true);
      return t
    }), this.syncWith([f.A], () => {
      var e;
      return N(null == (e = p.default.getCurrentUser()) ? true : e.id)
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
    let s = null == (i = a.sections[t]) ? true : i.usersById[n];
    return null != (r = null == s ? true : s.canViewChannel) && r
  }
}
b(j, "displayName", "ThreadMemberListStore");
let M = new j(Chunk73153.h, {
  CONNECTION_OPEN: A,
  THREAD_MEMBERS_UPDATE: v,
  THREAD_UPDATE: P,
  THREAD_DELETE: D,
  CHANNEL_UPDATES: L,
  THREAD_MEMBER_LIST_UPDATE: S,
  USER_UPDATE: I,
  PRESENCE_UPDATES: T,
  GUILD_MEMBER_ADD: I,
  GUILD_MEMBER_UPDATE: I,
  GUILD_MEMBER_REMOVE: I,
  PRESENCES_REPLACE: R,
  GUILD_MEMBERS_CHUNK_BATCH: w,
  GUILD_ROLE_UPDATE: x,
  GUILD_ROLE_DELETE: x,
  PASSIVE_UPDATE_V2: C
})