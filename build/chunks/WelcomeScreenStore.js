/** Chunk was on 66201 **/
/** chunk id: 995532, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => I,
  a: () => s
});
var r, l, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");
let s = {},
  o = {},
  u = {},
  c = false,
  E = false,
  d = false;

function _(e) {
  let {
    guild: t
  } = e.invite;
  return (null == t ? true : t.welcome_screen) != null && (o[t.id] = t.welcome_screen, true)
}

function A(e) {
  let {
    welcomeScreen: t,
    guildId: n
  } = e;
  o[n] = null != t ? t : s
}
class T extends(l = Chunk442837.ZP.Store) {
  get(e) {
    if (null != e) return o[e]
  }
  isFetching() {
    return E
  }
  hasError() {
    return d
  }
  hasSeen(e) {
    let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
    return null != e && (t ? c : u[e] || false)
  }
  isEmpty(e) {
    if (null == e) returntrue;
    let t = o[e];
    return null == t || 0 === t.welcome_channels.length
  }
}(r = "displayName") in T ? Object.defineProperty(T, r, {
  value: "WelcomeScreenStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : T[r] = "WelcomeScreenStore";
let I = new T(Chunk570140.Z, {
  INVITE_RESOLVE_SUCCESS: _,
  INVITE_ACCEPT_SUCCESS: _,
  WELCOME_SCREEN_SUBMIT_SUCCESS: A,
  WELCOME_SCREEN_UPDATE: A,
  WELCOME_SCREEN_VIEW: function(e) {
    let {
      guildId: t,
      isLurking: n
    } = e;
    u[t] = true, n && (c = true)
  },
  GUILD_STOP_LURKING: function() {
    c = false
  },
  GUILD_DELETE: function(e) {
    let {
      guild: {
        id: t
      }
    } = e;
    u[t] = false
  },
  WELCOME_SCREEN_FETCH_START: function() {
    E = true, d = false
  },
  WELCOME_SCREEN_FETCH_SUCCESS: function(e) {
    E = false, d = false;
    let {
      welcomeScreen: t,
      guildId: n
    } = e;
    o[n] = null != t ? t : s
  },
  WELCOME_SCREEN_FETCH_FAIL: function() {
    E = false, d = true
  }
})