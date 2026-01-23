/** Chunk was on web.js **/
/** chunk id: 967198, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => N
});
var r, Chunk960488 = require("./960488.js"),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk212455 = require("./212455.js"),
  Chunk463347 = require("./463347.js"),
  Chunk976860 = require("./976860.js"),
  Chunk961350 = require("./961350.js"),
  Chunk650048 = require("./650048.js"),
  Chunk71393 = require("./71393.js"),
  Chunk652215 = require("./652215.js");

function _(e, t, n) {
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

function y() {
  null != m && null == f.A.getGuild(m) && null == o.A.getRequest(m) && (m = null), null != g && null == f.A.getGuild(g) && null == o.A.getRequest(g) && (g = null), O(m)
}

function b(e) {
  m = e.selectedGuildId, g = true, y()
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

function A(e) {
  let t = false;
  return delete E[e], g === e && (g = null, t = true), m === e && (f.A.getGuildsArray().find(t => t.id !== e), m = null, (0, c.bG)(p.BVt.ME), t = true), t
}

function I(e) {
  let {
    guild: {
      id: t,
      unavailable: n
    }
  } = e;
  returntrue !== n && A(t)
}

function S(e) {
  let {
    guildId: t,
    user: n
  } = e;
  return n.id === u.default.getId() && A(t)
}

function T() {
  m = null, g = null
}
class C extends(r = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    var t, n, r, a;
    this.mustEmitChanges(e => "CONNECTION_OPEN" !== e.type), this.waitFor(u.default, d.A, f.A, o.A), E = null != (t = null == e ? true : e.selectedGuildTimestampMillis) ? t : {}, m = null != (n = null == e ? true : e.selectedGuildId) ? n : null, g = null != (r = null == e ? true : e.lastSelectedGuildId) ? r : null;
    let s = d.A.lastNonVoiceRoute,
      c = (0, i.B6)(s, {
        path: p.BVt.CHANNEL(l.pv.guildId())
      });
    null == c || null == (a = c.params) || a.guildId
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
_(C, "displayName", "SelectedGuildStore"), _(C, "persistKey", "SelectedGuildStore");
let N = new C(Chunk73153.h, {
  CONNECTION_OPEN: y,
  OVERLAY_INITIALIZE: b,
  CHANNEL_SELECT: v,
  GUILD_MEMBER_REMOVE: S,
  GUILD_DELETE: I,
  LOGOUT: T
})