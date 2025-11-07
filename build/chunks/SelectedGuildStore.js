/** Chunk was on web.js **/
/** chunk id: 914010, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => N
});
var r, Chunk843611 = require("./843611.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk937111 = require("./937111.js"),
  Chunk893607 = require("./893607.js"),
  Chunk703656 = require("./703656.js"),
  Chunk314897 = require("./314897.js"),
  Chunk896797 = require("./896797.js"),
  Chunk430824 = require("./430824.js"),
  Chunk981631 = require("./981631.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let h = false,
  m = null,
  g = null,
  E = {};

function b() {
  null != m && null == Chunk430824.Z.getGuild(m) && null == Chunk937111.Z.getRequest(m) && (m = null), null != g && null == Chunk430824.Z.getGuild(g) && null == Chunk937111.Z.getRequest(g) && (g = null), O(m)
}

function y(e) {
  m = e.selectedGuildId, g = true, b()
}

function O(e) {
  null != e && (E[e] = Date.now())
}

function v(e) {
  let {
    guildId: t
  } = e;
  if (m === t) returnfalse;
  O(m), O(t), null != t && (g = t), m = t
}

function I(e) {
  let t = false;
  return delete E[e], g === e && (g = null, t = true), m === e && (f.Z.getGuildsArray().find(t => t.id !== e), m = null, (0, c.dL)(_.Z5c.ME), t = true), t
}

function S(e) {
  let {
    guild: {
      id: t,
      unavailable: n
    }
  } = e;
  returntrue !== n && I(t)
}

function T(e) {
  let {
    guildId: t,
    user: n
  } = e;
  return n.id === u.default.getId() && I(t)
}

function A() {
  m = null, g = null
}
class C extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    var t, n, r, a;
    this.mustEmitChanges(e => "CONNECTION_OPEN" !== e.type), this.waitFor(u.default, d.Z, f.Z, s.Z), E = null != (n = null == e ? true : e.selectedGuildTimestampMillis) ? n : {}, m = null != (r = null == e ? true : e.selectedGuildId) ? r : null, g = null != (a = null == e ? true : e.lastSelectedGuildId) ? a : null;
    let o = d.Z.lastNonVoiceRoute,
      c = (0, i.LX)(o, {
        path: _.Z5c.CHANNEL(l.Hw.guildId())
      });
    null == c || null == (t = c.params) || t.guildId
  }
  getState() {
    return {
      selectedGuildTimestampMillis: E,
      selectedGuildId: m,
      lastSelectedGuildId: g
    }
  }
  getGuildId() {
    return m
  }
  getLastSelectedGuildId() {
    return g
  }
  getLastSelectedTimestamp(e) {
    return m === e ? h : E[e]
  }
}
p(C, "displayName", "SelectedGuildStore"), p(C, "persistKey", "SelectedGuildStore");
let N = new C(Chunk570140.Z, {
  CONNECTION_OPEN: b,
  OVERLAY_INITIALIZE: y,
  CHANNEL_SELECT: v,
  GUILD_MEMBER_REMOVE: T,
  GUILD_DELETE: S,
  LOGOUT: A
})