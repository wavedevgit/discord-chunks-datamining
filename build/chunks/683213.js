/** Chunk was on web.js **/
/** chunk id: 683213, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => D
}), require("./321073.js"), require("./896048.js");
var Chunk439372 = require("./439372.js"),
  Chunk571694 = require("./571694.js"),
  Chunk47167 = require("./47167.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk994500 = require("./994500.js"),
  Chunk309010 = require("./309010.js"),
  Chunk287809 = require("./287809.js"),
  Chunk486020 = require("./486020.js"),
  Chunk403362 = require("./403362.js"),
  Chunk427262 = require("./427262.js"),
  Chunk473903 = require("./473903.js"),
  Chunk765239 = require("./765239.js"),
  Chunk652215 = require("./652215.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y() {
  return m.A.getCurrentConfig({
    location: "NativeIntentsManager"
  }, {
    autoTrackExposure: true,
    disable: !h.A.hasSearch()
  }).searchEnabled
}

function b() {
  return m.A.getCurrentConfig({
    location: "NativeIntentsManager"
  }, {
    autoTrackExposure: true,
    disable: !h.A.hasSearch()
  }).clearEnabled
}

function O() {
  return m.A.getCurrentConfig({
    location: "NativeIntentsManager"
  }, {
    autoTrackExposure: true,
    disable: !h.A.hasUserActivity()
  }).activityEnabled
}

function v(e) {
  var t;
  return (null == e || null == (t = e.startsWith) ? true : t.call(e, "/")) ? location.origin + e : null != e ? e : true
}

function A(e, t) {
  var n;
  let r = arguments.length > 2 && true !== arguments[2] && arguments[2],
    o = (0, a.m1)(e, d.default, c.A, true),
    l = (0, a.m1)(e, d.default, c.A, false),
    u = [],
    f = [o, l],
    p = [];
  e.isGuildVocal() && f.push("!".concat(l));
  let _ = s.A.getChannel(e.parent_id);
  if (null != _) {
    let e = (0, a.m1)(_, d.default, c.A, true),
      t = (0, a.m1)(_, d.default, c.A, false);
    p.push(e), p.push(t), u.push(e)
  }
  null != t && (p.push(t.name), u.push(t.name));
  let h = o + (u.length > 0 ? " (".concat(u.join(", "), ")") : ""),
    m = g.BVt.CHANNEL(null != (n = null == t ? true : t.id) ? n : g.ME, e.id);
  return {
    id: m,
    relatedUniqueIdentifier: m,
    type: "url",
    title: h,
    displayName: h,
    thumbnailURL: v((0, i.Y)(e, 128, false)),
    rankingHint: e.type === g.rbe.DM ? 75 : 50,
    keywords: p,
    alternateNames: f,
    isUpdate: r
  }
}

function I(e) {
  return null != e ? v(f.Ay.getGuildIconURL({
    id: e.id,
    icon: e.icon,
    size: 128
  })) : true
}

function S(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    n = I(e),
    r = g.BVt.CHANNEL(e.id),
    i = [{
      id: r,
      relatedUniqueIdentifier: r,
      type: "url",
      title: e.name,
      displayName: e.name,
      alternateNames: ["*".concat(e.name)],
      rankingHint: 100
    }],
    a = s.A.getMutableGuildChannelsForGuild(e.id);
  for (let n in a) {
    let r = a[n];
    l.A.can(g.xBc.VIEW_CHANNEL, r) && i.push(A(r, e, t))
  }
  for (let n of s.A.getAllThreadsForGuild(e.id)) l.A.can(g.xBc.VIEW_CHANNEL, n) && i.push(A(n, e, t));
  return {
    id: e.id,
    items: i,
    defaultThumbnailURL: n,
    isUpdate: t
  }
}

function T(e) {
  let t = [];
  if ("" !== e.name && t.push(e.name), null != e.nicks && t.push(...Object.values(e.nicks)), e.type === g.rbe.DM) {
    let [n] = e.recipients.map(d.default.getUser).filter(p.Vq);
    if (null != n) {
      let e = _.Ay.getGlobalName(n);
      null != e && t.push(e), t.push(n.username), t.push("@" + n.username);
      let r = c.A.getNickname(n.id);
      null != r && t.push(r);
      let i = _.Ay.getName(n);
      null != i && t.push(i)
    }
  }
  return t
}

function C(e) {
  if (!O()) return;
  let t = null != e ? s.A.getChannel(e) : true;
  if (null == t) return void h.A.resignActivity();
  let n = o.A.getGuild(t.guild_id),
    r = (0, a.m1)(t, d.default, c.A, true),
    i = r + (null != n ? " (".concat(n.name, ")") : ""),
    l = [...new Set([r, ...T(t)])],
    u = g.BVt.CHANNEL(t.guild_id, t.id),
    f = {
      webpageURL: "".concat(g.qF7.BASE_URL).concat(u),
      relatedUniqueIdentifier: u,
      eligibleForHandoff: true,
      eligibleForSearch: true,
      title: i,
      keywords: l,
      displayName: i,
      type: "com.discord.view-channel"
    };
  h.A.setActivity(f)
}

function N() {
  if (!y()) return;
  let e = o.A.getGuildsArray().map(e => S(e)),
    t = [],
    n = s.A.getMutablePrivateChannels();
  for (let e in n) {
    let r = n[e];
    t.push(A(r))
  }
  e.push({
    id: g.ME,
    items: t
  }), h.A.indexDomains(e)
}

function R(e) {
  let t = s.A.getDMChannelFromUserId(e);
  null != t && w([t])
}

function w(e) {
  if (!y()) return;
  let t = [],
    n = [],
    r = {};
  for (let a of e)
    if (l.A.can(g.xBc.VIEW_CHANNEL, a)) {
      var i;
      let e = o.A.getGuild(a.guild_id),
        n = null != (i = null == e ? true : e.id) ? i : g.ME,
        s = A(a, e, true),
        l = r[n];
      if (null != l) l.push(s);
      else {
        let i = I(e),
          a = [s];
        t.push({
          id: n,
          items: a,
          defaultThumbnailURL: i
        }), r[n] = a
      }
    } else n.push(a.id);
  t.length > 0 && h.A.indexDomains(t), n.length > 0 && h.A.deleteSearchItems(n)
}
class P extends Chunk439372.A {
  handleInit() {
    C(u.A.getCurrentlySelectedChannelId()), b() && h.A.clearSearchIndex(), y() && N()
  }
  handleLogout() {
    b() && h.A.clearSearchIndex()
  }
  handleChannelSelect(e) {
    let {
      channelId: t
    } = e;
    C(t)
  }
  handleChannelCreate(e) {
    var t;
    let {
      channel: n
    } = e;
    if (!y() || !l.A.can(g.xBc.VIEW_CHANNEL, n)) return;
    let r = o.A.getGuild(n.guild_id);
    if (null == r && null != n.guild_id) return;
    let i = I(r);
    h.A.indexDomains([{
      id: null != (t = null == r ? true : r.id) ? t : g.ME,
      items: [A(n, r)],
      defaultThumbnailURL: i
    }])
  }
  handleChannelDelete(e) {
    let {
      channel: t
    } = e;
    y() && h.A.deleteSearchItems([t.id])
  }
  handleChannelUpdates(e) {
    let {
      channels: t
    } = e;
    w(t)
  }
  handleGuildCreateOrUpdate(e) {
    let {
      guild: t,
      type: n
    } = e;
    if (y()) {
      let e = o.A.getGuild(t.id);
      null != e ? h.A.indexDomains([S(e, "GUILD_UPDATE" === n)]) : h.A.deleteSearchDomains([t.id])
    }
  }
  handleGuildDelete(e) {
    let {
      guild: t
    } = e;
    y() && h.A.deleteSearchDomains([t.id])
  }
  handleThreadUpdate(e) {
    let {
      channel: t
    } = e;
    w([t])
  }
  handleUserUpdate(e) {
    let {
      user: t
    } = e;
    R(t.id)
  }
  handleRelationshipChange(e) {
    let {
      relationship: t
    } = e;
    R(t.id)
  }
  constructor(...e) {
    super(...e), E(this, "actions", {
      POST_CONNECTION_OPEN: this.handleInit,
      LOGOUT: this.handleLogout,
      CHANNEL_SELECT: this.handleChannelSelect,
      CHANNEL_CREATE: this.handleChannelCreate,
      CHANNEL_DELETE: this.handleChannelDelete,
      CHANNEL_UPDATES: this.handleChannelUpdates,
      GUILD_CREATE: this.handleGuildCreateOrUpdate,
      GUILD_UPDATE: this.handleGuildCreateOrUpdate,
      GUILD_DELETE: this.handleGuildDelete,
      RELATIONSHIP_ADD: this.handleRelationshipChange,
      RELATIONSHIP_REMOVE: this.handleRelationshipChange,
      RELATIONSHIP_UPDATE: this.handleRelationshipChange,
      THREAD_CREATE: this.handleChannelCreate,
      THREAD_DELETE: this.handleChannelDelete,
      THREAD_UPDATE: this.handleThreadUpdate,
      USER_UPDATE: this.handleUserUpdate
    })
  }
}
let D = new P