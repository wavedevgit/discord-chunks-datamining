/** Chunk was on 2155 **/
/** chunk id: 684407, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => T,
  E: () => s
});
var l, r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");
let s = {},
  o = {},
  u = {},
  c = false,
  E = false,
  _ = false;

function d(e) {
  let {
    guild: t
  } = e.invite;
  return (null == t ? true : t.welcome_screen) != null && (o[t.id] = t.welcome_screen, true)
}

function g(e) {
  let {
    welcomeScreen: t,
    guildId: n
  } = e;
  o[n] = null != t ? t : s
}
class A extends(r = Chunk311907.Ay.Store) {
  get(e) {
    if (null != e) return o[e]
  }
  isFetching() {
    return E
  }
  hasError() {
    return _
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
}(l = "displayName") in A ? Object.defineProperty(A, l, {
  value: "WelcomeScreenStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : A[l] = "WelcomeScreenStore";
let T = new A(Chunk73153.h, {
  INVITE_RESOLVE_SUCCESS: d,
  INVITE_ACCEPT_SUCCESS: d,
  WELCOME_SCREEN_SUBMIT_SUCCESS: g,
  WELCOME_SCREEN_UPDATE: g,
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
    E = true, _ = false
  },
  WELCOME_SCREEN_FETCH_SUCCESS: function(e) {
    E = false, _ = false;
    let {
      welcomeScreen: t,
      guildId: n
    } = e;
    o[n] = null != t ? t : s
  },
  WELCOME_SCREEN_FETCH_FAIL: function() {
    E = false, _ = true
  }
})