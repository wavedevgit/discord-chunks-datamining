/** Chunk was on web.js **/
/** chunk id: 607841, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => w
}), require("./539854.js"), require("./388685.js");
var Chunk147913 = require("./147913.js"),
  Chunk43267 = require("./43267.js"),
  Chunk933557 = require("./933557.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk699516 = require("./699516.js"),
  Chunk944486 = require("./944486.js"),
  Chunk594174 = require("./594174.js"),
  Chunk768581 = require("./768581.js"),
  Chunk823379 = require("./823379.js"),
  Chunk51144 = require("./51144.js"),
  Chunk495527 = require("./495527.js"),
  Chunk403011 = require("./403011.js"),
  Chunk981631 = require("./981631.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b() {
  return Chunk403011.Z.getCurrentConfig({
    location: "NativeIntentsManager"
  }, {
    autoTrackExposure: true,
    disable: !Chunk495527.Z.hasSearch()
  }).searchEnabled
}

function y() {
  return Chunk403011.Z.getCurrentConfig({
    location: "NativeIntentsManager"
  }, {
    autoTrackExposure: true,
    disable: !Chunk495527.Z.hasSearch()
  }).clearEnabled
}

function O() {
  return Chunk403011.Z.getCurrentConfig({
    location: "NativeIntentsManager"
  }, {
    autoTrackExposure: true,
    disable: !Chunk495527.Z.hasUserActivity()
  }).activityEnabled
}

function v(e) {
  var t;
  return (null == e || null == (t = e.startsWith) ? true : t.call(e, "/")) ? location.origin + e : null != e ? e : true
}

function S(e, t) {
  var n;
  let r = arguments.length > 2 && true !== arguments[2] && arguments[2],
    s = (0, a.F6)(e, d.default, c.Z, true),
    l = (0, a.F6)(e, d.default, c.Z, false),
    u = [],
    f = [s, l],
    p = [];
  e.isGuildVocal() && f.push("!".concat(l));
  let _ = o.Z.getChannel(e.parent_id);
  if (null != _) {
    let e = (0, a.F6)(_, d.default, c.Z, true),
      t = (0, a.F6)(_, d.default, c.Z, false);
    p.push(e), p.push(t), u.push(e)
  }
  null != t && (p.push(t.name), u.push(t.name));
  let m = s + (u.length > 0 ? " (".concat(u.join(", "), ")") : ""),
    h = g.Z5c.CHANNEL(null != (n = null == t ? true : t.id) ? n : g.ME, e.id);
  return {
    id: h,
    relatedUniqueIdentifier: h,
    type: "url",
    title: m,
    displayName: m,
    thumbnailURL: v((0, i.x)(e, 128, false)),
    rankingHint: e.type === g.d4z.DM ? 75 : 50,
    keywords: p,
    alternateNames: f,
    isUpdate: r
  }
}

function I(e) {
  return null != e ? v(f.ZP.getGuildIconURL({
    id: e.id,
    icon: e.icon,
    size: 128
  })) : true
}

function T(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    n = I(e),
    r = g.Z5c.CHANNEL(e.id),
    i = [{
      id: r,
      relatedUniqueIdentifier: r,
      type: "url",
      title: e.name,
      displayName: e.name,
      alternateNames: ["*".concat(e.name)],
      rankingHint: 100
    }],
    a = o.Z.getMutableGuildChannelsForGuild(e.id);
  for (let n in a) {
    let r = a[n];
    l.Z.can(g.Plq.VIEW_CHANNEL, r) && i.push(S(r, e, t))
  }
  for (let n of o.Z.getAllThreadsForGuild(e.id)) l.Z.can(g.Plq.VIEW_CHANNEL, n) && i.push(S(n, e, t));
  return {
    id: e.id,
    items: i,
    defaultThumbnailURL: n,
    isUpdate: t
  }
}

function A(e) {
  let t = [];
  if ("" !== e.name && t.push(e.name), null != e.nicks && t.push(...Object.values(e.nicks)), e.type === g.d4z.DM) {
    let [n] = e.recipients.map(d.default.getUser).filter(p.lm);
    if (null != n) {
      let e = _.ZP.getGlobalName(n);
      null != e && t.push(e), t.push(n.username), t.push("@" + n.username);
      let r = c.Z.getNickname(n.id);
      null != r && t.push(r);
      let i = _.ZP.getName(n);
      null != i && t.push(i)
    }
  }
  return t
}

function C(e) {
  if (!O()) return;
  let t = null != e ? o.Z.getChannel(e) : true;
  if (null == t) return void m.Z.resignActivity();
  let n = s.Z.getGuild(t.guild_id),
    r = (0, a.F6)(t, d.default, c.Z, true),
    i = r + (null != n ? " (".concat(n.name, ")") : ""),
    l = [...new Set([r, ...A(t)])],
    u = g.Z5c.CHANNEL(t.guild_id, t.id),
    f = {
      webpageURL: "".concat(g.yXt.BASE_URL).concat(u),
      relatedUniqueIdentifier: u,
      eligibleForHandoff: true,
      eligibleForSearch: true,
      title: i,
      keywords: l,
      displayName: i,
      type: "com.discord.view-channel"
    };
  m.Z.setActivity(f)
}

function N() {
  if (!b()) return;
  let e = Chunk430824.Z.getGuildsArray().map(e => T(e)),
    t = [],
    n = Chunk592125.Z.getMutablePrivateChannels();
  for (let e in require) {
    let r = require[module];
    exports.push(S(Chunk147913))
  }
  module.push({
    id: Chunk981631.ME,
    items: exports
  }), Chunk495527.Z.indexDomains(module)
}

function P(e) {
  let t = o.Z.getDMChannelFromUserId(e);
  null != t && R([t])
}

function R(e) {
  if (!b()) return;
  let t = [],
    n = [],
    r = {};
  for (let a of e)
    if (l.Z.can(g.Plq.VIEW_CHANNEL, a)) {
      var i;
      let e = s.Z.getGuild(a.guild_id),
        n = null != (i = null == e ? true : e.id) ? i : g.ME,
        o = S(a, e, true),
        l = r[n];
      if (null != l) l.push(o);
      else {
        let i = I(e),
          a = [o];
        t.push({
          id: n,
          items: a,
          defaultThumbnailURL: i
        }), r[n] = a
      }
    } else n.push(a.id);
  t.length > 0 && m.Z.indexDomains(t), n.length > 0 && m.Z.deleteSearchItems(n)
}
class D extends Chunk147913.Z {
  handleInit() {
    C(Chunk944486.Z.getCurrentlySelectedChannelId()), y() && Chunk495527.Z.clearSearchIndex(), b() && N()
  }
  handleLogout() {
    y() && Chunk495527.Z.clearSearchIndex()
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
    if (!b() || !l.Z.can(g.Plq.VIEW_CHANNEL, n)) return;
    let r = s.Z.getGuild(n.guild_id);
    if (null == r && null != n.guild_id) return;
    let i = I(r);
    m.Z.indexDomains([{
      id: null != (t = null == r ? true : r.id) ? t : g.ME,
      items: [S(n, r)],
      defaultThumbnailURL: i
    }])
  }
  handleChannelDelete(e) {
    let {
      channel: t
    } = e;
    b() && m.Z.deleteSearchItems([t.id])
  }
  handleChannelUpdates(e) {
    let {
      channels: t
    } = e;
    R(t)
  }
  handleGuildCreateOrUpdate(e) {
    let {
      guild: t,
      type: n
    } = e;
    if (b()) {
      let e = s.Z.getGuild(t.id);
      null != e ? m.Z.indexDomains([T(e, "GUILD_UPDATE" === n)]) : m.Z.deleteSearchDomains([t.id])
    }
  }
  handleGuildDelete(e) {
    let {
      guild: t
    } = e;
    b() && m.Z.deleteSearchDomains([t.id])
  }
  handleThreadUpdate(e) {
    let {
      channel: t
    } = e;
    R([t])
  }
  handleUserUpdate(e) {
    let {
      user: t
    } = e;
    P(t.id)
  }
  handleRelationshipChange(e) {
    let {
      relationship: t
    } = e;
    P(t.id)
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
let w = new D