/** Chunk was on 97574 **/
r.d(t, {
  Z: () => M,
  a: () => s
});
var n, l, i, a = r(442837),
  o = r(570140);
let s = {},
  h = {},
  c = {},
  v = !1,
  u = !1,
  d = !1;

function E(e) {
  let {
    guild: t
  } = e.invite;
  return (null == t ? void 0 : t.welcome_screen) != null && (h[t.id] = t.welcome_screen, !0)
}

function f(e) {
  let {
    welcomeScreen: t,
    guildId: r
  } = e;
  h[r] = null != t ? t : s
}
class p extends(i = a.ZP.Store) {
  get(e) {
    if (null != e) return h[e]
  }
  isFetching() {
    return u
  }
  hasError() {
    return d
  }
  hasSeen(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return null != e && (t ? v : c[e] || !1)
  }
  isEmpty(e) {
    if (null == e) return !0;
    let t = h[e];
    return null == t || 0 === t.welcome_channels.length
  }
}
l = "WelcomeScreenStore", (n = "displayName") in p ? Object.defineProperty(p, n, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : p[n] = l;
let M = new p(o.Z, {
  INVITE_RESOLVE_SUCCESS: E,
  INVITE_ACCEPT_SUCCESS: E,
  WELCOME_SCREEN_SUBMIT_SUCCESS: f,
  WELCOME_SCREEN_UPDATE: f,
  WELCOME_SCREEN_VIEW: function(e) {
    let {
      guildId: t,
      isLurking: r
    } = e;
    c[t] = !0, r && (v = !0)
  },
  GUILD_STOP_LURKING: function() {
    v = !1
  },
  GUILD_DELETE: function(e) {
    let {
      guild: {
        id: t
      }
    } = e;
    c[t] = !1
  },
  WELCOME_SCREEN_FETCH_START: function() {
    u = !0, d = !1
  },
  WELCOME_SCREEN_FETCH_SUCCESS: function(e) {
    u = !1, d = !1;
    let {
      welcomeScreen: t,
      guildId: r
    } = e;
    h[r] = null != t ? t : s
  },
  WELCOME_SCREEN_FETCH_FAIL: function() {
    u = !1, d = !0
  }
})