/** Chunk was on 12630 **/
/** chunk id: 995532, original params: A,e,t (module,exports,require) **/
require.d(exports, {
  Z: () => d,
  a: () => s
});
var n, r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");
let s = {},
  a = {},
  o = {},
  g = false,
  c = false,
  f = false;

function v(A) {
  let {
    guild: e
  } = A.invite;
  return (null == e ? true : e.welcome_screen) != null && (a[e.id] = e.welcome_screen, true)
}

function u(A) {
  let {
    welcomeScreen: e,
    guildId: t
  } = A;
  a[t] = null != e ? e : s
}
class h extends(r = Chunk442837.ZP.Store) {
  get(A) {
    if (null != A) return a[A]
  }
  isFetching() {
    return c
  }
  hasError() {
    return f
  }
  hasSeen(A) {
    let e = arguments.length > 1 && true !== arguments[1] && arguments[1];
    return null != A && (e ? g : o[A] || false)
  }
  isEmpty(A) {
    if (null == A) returntrue;
    let e = a[A];
    return null == e || 0 === e.welcome_channels.length
  }
}(n = "displayName") in h ? Object.defineProperty(h, n, {
  value: "WelcomeScreenStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : h[n] = "WelcomeScreenStore";
let d = new h(Chunk570140.Z, {
  INVITE_RESOLVE_SUCCESS: v,
  INVITE_ACCEPT_SUCCESS: v,
  WELCOME_SCREEN_SUBMIT_SUCCESS: u,
  WELCOME_SCREEN_UPDATE: u,
  WELCOME_SCREEN_VIEW: function(A) {
    let {
      guildId: e,
      isLurking: t
    } = A;
    o[e] = true, t && (g = true)
  },
  GUILD_STOP_LURKING: function() {
    g = false
  },
  GUILD_DELETE: function(A) {
    let {
      guild: {
        id: e
      }
    } = A;
    o[e] = false
  },
  WELCOME_SCREEN_FETCH_START: function() {
    c = true, f = false
  },
  WELCOME_SCREEN_FETCH_SUCCESS: function(A) {
    c = false, f = false;
    let {
      welcomeScreen: e,
      guildId: t
    } = A;
    a[t] = null != e ? e : s
  },
  WELCOME_SCREEN_FETCH_FAIL: function() {
    c = false, f = true
  }
})