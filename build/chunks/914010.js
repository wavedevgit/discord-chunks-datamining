/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => C
});
var r, i = n(512969),
  o = n(442837),
  a = n(570140),
  s = n(937111),
  l = n(893607),
  c = n(703656),
  u = n(314897),
  d = n(896797),
  f = n(430824),
  _ = n(981631);

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let h = -1,
  g = null,
  m = null,
  E = {};

function v() {
  null != g && null == f.Z.getGuild(g) && null == s.Z.getRequest(g) && (g = null), null != m && null == f.Z.getGuild(m) && null == s.Z.getRequest(m) && (m = null), y(g)
}

function b(e) {
  g = e.selectedGuildId, m = void 0, v()
}

function y(e) {
  null != e && (E[e] = Date.now())
}

function O(e) {
  let {
    guildId: t
  } = e;
  if (g === t) return !1;
  y(g), y(t), null != t && (m = t), g = t
}

function S(e) {
  let t = !1;
  return delete E[e], m === e && (m = null, t = !0), g === e && (Object.values(f.Z.getGuilds()).find(t => t.id !== e), g = null, (0, c.dL)(_.Z5c.ME), t = !0), t
}

function I(e) {
  let {
    guild: {
      id: t,
      unavailable: n
    }
  } = e;
  return !0 !== n && S(t)
}

function T(e) {
  let {
    guildId: t,
    user: n
  } = e;
  return n.id === u.default.getId() && S(t)
}

function N() {
  g = null, m = null
}
class A extends(r = o.ZP.PersistedStore) {
  initialize(e) {
    var t, n, r, o;
    this.mustEmitChanges(e => "CONNECTION_OPEN" !== e.type), this.waitFor(f.Z, u.default, d.Z), E = null !== (n = null == e ? void 0 : e.selectedGuildTimestampMillis) && void 0 !== n ? n : {}, g = null !== (r = null == e ? void 0 : e.selectedGuildId) && void 0 !== r ? r : null, m = null !== (o = null == e ? void 0 : e.lastSelectedGuildId) && void 0 !== o ? o : null;
    let a = d.Z.lastNonVoiceRoute,
      s = (0, i.LX)(a, {
        path: _.Z5c.CHANNEL(l.Hw.guildId())
      });
    null == s || null === (t = s.params) || void 0 === t || t.guildId
  }
  getState() {
    return {
      selectedGuildTimestampMillis: E,
      selectedGuildId: g,
      lastSelectedGuildId: m
    }
  }
  getGuildId() {
    return g
  }
  getLastSelectedGuildId() {
    return m
  }
  getLastSelectedTimestamp(e) {
    return g === e ? h : E[e]
  }
}
p(A, "displayName", "SelectedGuildStore"), p(A, "persistKey", "SelectedGuildStore");
let C = new A(a.Z, {
  CONNECTION_OPEN: v,
  OVERLAY_INITIALIZE: b,
  CHANNEL_SELECT: O,
  GUILD_MEMBER_REMOVE: T,
  GUILD_DELETE: I,
  LOGOUT: N
})