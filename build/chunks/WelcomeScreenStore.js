/** Chunk was on 74486 **/
/** chunk id: 995532, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => T,
  a: () => s
});
var r, l, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");
let s = {},
  o = {},
  u = {},
  c = false,
  d = false,
  E = false;

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
class m extends(l = Chunk442837.ZP.Store) {
  get(e) {
    if (null != e) return o[e]
  }
  isFetching() {
    return d
  }
  hasError() {
    return E
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
}(r = "displayName") in m ? Object.defineProperty(m, r, {
  value: "WelcomeScreenStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : m[r] = "WelcomeScreenStore";
let T = new m(Chunk570140.Z, {
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
    d = true, E = false
  },
  WELCOME_SCREEN_FETCH_SUCCESS: function(e) {
    d = false, E = false;
    let {
      welcomeScreen: t,
      guildId: n
    } = e;
    o[n] = null != t ? t : s
  },
  WELCOME_SCREEN_FETCH_FAIL: function() {
    d = false, E = true
  }
})