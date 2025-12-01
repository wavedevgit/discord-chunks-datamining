/** Chunk was on web.js **/
/** chunk id: 914010, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => N
});
var r, Chunk828700 = require("./828700.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk937111 = require("./937111.js"),
  Chunk893607 = require("./893607.js"),
  Chunk703656 = require("./703656.js"),
  Chunk314897 = require("./314897.js"),
  Chunk896797 = require("./896797.js"),
  Chunk430824 = require("./430824.js"),
  Chunk981631 = require("./981631.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let m = false,
  h = null,
  g = null,
  E = {};

function b() {
  null != h && null == Chunk430824.Z.getGuild(h) && null == Chunk937111.Z.getRequest(h) && (h = null), null != g && null == Chunk430824.Z.getGuild(g) && null == Chunk937111.Z.getRequest(g) && (g = null), O(h)
}

function y(e) {
  h = e.selectedGuildId, g = true, b()
}

function O(e) {
  null != e && (E[e] = Date.now())
}

function v(e) {
  let {
    guildId: t
  } = e;
  if (h === t) returnfalse;
  O(h), O(t), null != t && (g = t), h = t
}

function S(e) {
  let t = false;
  return delete E[e], g === e && (g = null, t = true), h === e && (f.Z.getGuildsArray().find(t => t.id !== e), h = null, (0, c.dL)(p.Z5c.ME), t = true), t
}

function I(e) {
  let {
    guild: {
      id: t,
      unavailable: n
    }
  } = e;
  returntrue !== n && S(t)
}

function T(e) {
  let {
    guildId: t,
    user: n
  } = e;
  return n.id === u.default.getId() && S(t)
}

function A() {
  h = null, g = null
}
class C extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    var t, n, r, a;
    this.mustEmitChanges(e => "CONNECTION_OPEN" !== e.type), this.waitFor(u.default, d.Z, f.Z, s.Z), E = null != (n = null == e ? true : e.selectedGuildTimestampMillis) ? n : {}, h = null != (r = null == e ? true : e.selectedGuildId) ? r : null, g = null != (a = null == e ? true : e.lastSelectedGuildId) ? a : null;
    let o = d.Z.lastNonVoiceRoute,
      c = (0, i.LX)(o, {
        path: p.Z5c.CHANNEL(l.Hw.guildId())
      });
    null == c || null == (t = c.params) || t.guildId
  }
  getState() {
    return {
      selectedGuildTimestampMillis: E,
      selectedGuildId: h,
      lastSelectedGuildId: g
    }
  }
  getGuildId() {
    return h
  }
  getLastSelectedGuildId() {
    return g
  }
  getLastSelectedTimestamp(e) {
    return h === e ? m : E[e]
  }
}
_(C, "displayName", "SelectedGuildStore"), _(C, "persistKey", "SelectedGuildStore");
let N = new C(Chunk570140.Z, {
  CONNECTION_OPEN: b,
  OVERLAY_INITIALIZE: y,
  CHANNEL_SELECT: v,
  GUILD_MEMBER_REMOVE: T,
  GUILD_DELETE: I,
  LOGOUT: A
})