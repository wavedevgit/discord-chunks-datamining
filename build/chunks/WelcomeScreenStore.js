/** Chunk was on 873 **/
/** chunk id: 995532, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => I,
  a: () => o
});
var r, l, s, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");
let o = {},
  u = {},
  c = {},
  E = false,
  d = false,
  _ = false;

function A(e) {
  let {
    guild: t
  } = e.invite;
  return (null == t ? true : t.welcome_screen) != null && (u[t.id] = t.welcome_screen, true)
}

function T(e) {
  let {
    welcomeScreen: t,
    guildId: n
  } = e;
  u[n] = null != t ? t : o
}
class m extends(s = Chunk442837.ZP.Store) {
  get(e) {
    if (null != e) return u[e]
  }
  isFetching() {
    return d
  }
  hasError() {
    return _
  }
  hasSeen(e) {
    let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
    return null != e && (t ? E : c[e] || false)
  }
  isEmpty(e) {
    if (null == e) returntrue;
    let t = u[e];
    return null == t || 0 === t.welcome_channels.length
  }
}
l = "WelcomeScreenStore", (r = "displayName") in m ? Object.defineProperty(m, r, {
  value: l,
  enumerable: true,
  configurable: true,
  writable: true
}) : m[r] = l;
let I = new m(Chunk570140.Z, {
  INVITE_RESOLVE_SUCCESS: A,
  INVITE_ACCEPT_SUCCESS: A,
  WELCOME_SCREEN_SUBMIT_SUCCESS: T,
  WELCOME_SCREEN_UPDATE: T,
  WELCOME_SCREEN_VIEW: function(e) {
    let {
      guildId: t,
      isLurking: n
    } = e;
    c[t] = true, n && (E = true)
  },
  GUILD_STOP_LURKING: function() {
    E = false
  },
  GUILD_DELETE: function(e) {
    let {
      guild: {
        id: t
      }
    } = e;
    c[t] = false
  },
  WELCOME_SCREEN_FETCH_START: function() {
    d = true, _ = false
  },
  WELCOME_SCREEN_FETCH_SUCCESS: function(e) {
    d = false, _ = false;
    let {
      welcomeScreen: t,
      guildId: n
    } = e;
    u[n] = null != t ? t : o
  },
  WELCOME_SCREEN_FETCH_FAIL: function() {
    d = false, _ = true
  }
})