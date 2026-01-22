/** Chunk was on 94503 **/
/** chunk id: 684407, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => T,
  E: () => s
});
var l, r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");
let s = {},
  o = {},
  c = {},
  u = false,
  E = false,
  d = false;

function _(e) {
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
    return d
  }
  hasSeen(e) {
    let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
    return null != e && (t ? u : c[e] || false)
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
  INVITE_RESOLVE_SUCCESS: _,
  INVITE_ACCEPT_SUCCESS: _,
  WELCOME_SCREEN_SUBMIT_SUCCESS: g,
  WELCOME_SCREEN_UPDATE: g,
  WELCOME_SCREEN_VIEW: function(e) {
    let {
      guildId: t,
      isLurking: n
    } = e;
    c[t] = true, n && (u = true)
  },
  GUILD_STOP_LURKING: function() {
    u = false
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