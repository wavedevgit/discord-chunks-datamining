/** Chunk was on web.js **/
/** chunk id: 607841, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => R
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
  Chunk495527 = require("./495527.js"),
  Chunk403011 = require("./403011.js"),
  Chunk981631 = require("./981631.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g() {
  return Chunk403011.Z.getCurrentConfig({
    location: "NativeIntentsManager"
  }, {
    autoTrackExposure: true,
    disable: !Chunk495527.Z.hasSearch()
  }).searchEnabled
}

function E() {
  return Chunk403011.Z.getCurrentConfig({
    location: "NativeIntentsManager"
  }, {
    autoTrackExposure: true,
    disable: !Chunk495527.Z.hasSearch()
  }).clearEnabled
}

function b() {
  return Chunk403011.Z.getCurrentConfig({
    location: "NativeIntentsManager"
  }, {
    autoTrackExposure: true,
    disable: !Chunk495527.Z.hasUserActivity()
  }).activityEnabled
}

function y(e) {
  var t;
  return (null == e || null == (t = e.startsWith) ? true : t.call(e, "/")) ? location.origin + e : null != e ? e : true
}

function O(e, t) {
  var n;
  let r = arguments.length > 2 && true !== arguments[2] && arguments[2],
    s = (0, o.F6)(e, d.default, c.Z, true),
    l = (0, o.F6)(e, d.default, c.Z, false),
    u = [],
    f = [s, l],
    _ = [];
  e.isGuildVocal() && f.push("!".concat(l));
  let p = a.Z.getChannel(e.parent_id);
  if (null != p) {
    let e = (0, o.F6)(p, d.default, c.Z, true),
      t = (0, o.F6)(p, d.default, c.Z, false);
    _.push(e), _.push(t), u.push(e)
  }
  null != t && (_.push(t.name), u.push(t.name));
  let m = s + (u.length > 0 ? " (".concat(u.join(", "), ")") : ""),
    g = h.Z5c.CHANNEL(null != (n = null == t ? true : t.id) ? n : h.ME, e.id);
  return {
    id: g,
    relatedUniqueIdentifier: g,
    type: "url",
    title: m,
    displayName: m,
    thumbnailURL: y((0, i.x)(e, 128, false)),
    rankingHint: e.type === h.d4z.DM ? 75 : 50,
    keywords: _,
    alternateNames: f,
    isUpdate: r
  }
}

function v(e) {
  return null != e ? y(f.ZP.getGuildIconURL({
    id: e.id,
    icon: e.icon,
    size: 128
  })) : true
}

function I(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    n = v(e),
    r = h.Z5c.CHANNEL(e.id),
    i = [{
      id: r,
      relatedUniqueIdentifier: r,
      type: "url",
      title: e.name,
      displayName: e.name,
      alternateNames: ["*".concat(e.name)],
      rankingHint: 100
    }],
    o = a.Z.getMutableGuildChannelsForGuild(e.id);
  for (let n in o) {
    let r = o[n];
    l.Z.can(h.Plq.VIEW_CHANNEL, r) && i.push(O(r, e, t))
  }
  for (let n of a.Z.getAllThreadsForGuild(e.id)) l.Z.can(h.Plq.VIEW_CHANNEL, n) && i.push(O(n, e, t));
  return {
    id: e.id,
    items: i,
    defaultThumbnailURL: n,
    isUpdate: t
  }
}

function T(e) {
  if (!b()) return;
  let t = null != e ? a.Z.getChannel(e) : true;
  if (null == t) return void _.Z.resignActivity();
  let n = s.Z.getGuild(t.guild_id),
    r = (0, o.F6)(t, d.default, c.Z, true) + (null != n ? " (".concat(n.name, ")") : ""),
    i = h.Z5c.CHANNEL(t.guild_id, t.id),
    l = {
      webpageURL: "".concat(h.yXt.BASE_URL).concat(i),
      relatedUniqueIdentifier: i,
      eligibleForHandoff: true,
      eligibleForSearch: true,
      title: r,
      displayName: r,
      type: "com.discord.view-channel"
    };
  _.Z.setActivity(l)
}

function S() {
  if (!g()) return;
  let e = Chunk430824.Z.getGuildsArray().map(e => I(e)),
    t = [],
    n = Chunk592125.Z.getMutablePrivateChannels();
  for (let e in require) {
    let r = require[module];
    exports.push(O(Chunk147913))
  }
  module.push({
    id: Chunk981631.ME,
    items: exports
  }), Chunk495527.Z.indexDomains(module)
}

function A(e) {
  let t = a.Z.getDMChannelFromUserId(e);
  null != t && C([t])
}

function C(e) {
  if (!g()) return;
  let t = [],
    n = [],
    r = {};
  for (let o of e)
    if (l.Z.can(h.Plq.VIEW_CHANNEL, o)) {
      var i;
      let e = s.Z.getGuild(o.guild_id),
        n = null != (i = null == e ? true : e.id) ? i : h.ME,
        a = O(o, e, true),
        l = r[n];
      if (null != l) l.push(a);
      else {
        let i = v(e),
          o = [a];
        t.push({
          id: n,
          items: o,
          defaultThumbnailURL: i
        }), r[n] = o
      }
    } else n.push(o.id);
  t.length > 0 && _.Z.indexDomains(t), n.length > 0 && _.Z.deleteSearchItems(n)
}
class N extends Chunk147913.Z {
  handleInit() {
    T(Chunk944486.Z.getCurrentlySelectedChannelId()), E() && Chunk495527.Z.clearSearchIndex(), g() && S()
  }
  handleLogout() {
    E() && Chunk495527.Z.clearSearchIndex()
  }
  handleChannelSelect(e) {
    let {
      channelId: t
    } = e;
    T(t)
  }
  handleChannelCreate(e) {
    var t;
    let {
      channel: n
    } = e;
    if (!g() || !l.Z.can(h.Plq.VIEW_CHANNEL, n)) return;
    let r = s.Z.getGuild(n.guild_id);
    if (null == r && null != n.guild_id) return;
    let i = v(r);
    _.Z.indexDomains([{
      id: null != (t = null == r ? true : r.id) ? t : h.ME,
      items: [O(n, r)],
      defaultThumbnailURL: i
    }])
  }
  handleChannelDelete(e) {
    let {
      channel: t
    } = e;
    g() && _.Z.deleteSearchItems([t.id])
  }
  handleChannelUpdates(e) {
    let {
      channels: t
    } = e;
    C(t)
  }
  handleGuildCreateOrUpdate(e) {
    let {
      guild: t,
      type: n
    } = e;
    if (g()) {
      let e = s.Z.getGuild(t.id);
      null != e ? _.Z.indexDomains([I(e, "GUILD_UPDATE" === n)]) : _.Z.deleteSearchDomains([t.id])
    }
  }
  handleGuildDelete(e) {
    let {
      guild: t
    } = e;
    g() && _.Z.deleteSearchDomains([t.id])
  }
  handleThreadUpdate(e) {
    let {
      channel: t
    } = e;
    C([t])
  }
  handleUserUpdate(e) {
    let {
      user: t
    } = e;
    A(t.id)
  }
  handleRelationshipChange(e) {
    let {
      relationship: t
    } = e;
    A(t.id)
  }
  constructor(...e) {
    super(...e), m(this, "actions", {
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
let R = new N