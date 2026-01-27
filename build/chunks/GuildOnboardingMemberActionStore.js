/** Chunk was on web.js **/
/** chunk id: 65995, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => b
}), require("./896048.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function s(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      o(e, t, n[t])
    })
  }
  return e
}

function l(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function c(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : l(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let u = {},
  d = {},
  f = new Set;

function p(e) {
  let {
    guildId: t,
    channelId: n
  } = e;
  d = c(s({}, d), {
    [t]: c(s({}, d[t]), {
      [n]: true
    })
  })
}

function _(e) {
  let {
    memberActions: t,
    guildId: n
  } = e;
  if (null == t) {
    d[n] = u;
    return
  }
  d[n] = t, f.delete(n)
}

function h(e) {
  let {
    guildId: t
  } = e;
  f.add(t)
}

function m(e) {
  let {
    guildId: t
  } = e;
  f.delete(t)
}

function g(e) {
  let {
    guild: t
  } = e;
  if (null == d[t.id]) returnfalse;
  delete d[t.id]
}

function E(e) {
  let {
    guildId: t
  } = e;
  if (null == d[t]) returnfalse;
  delete d[t]
}
class y extends(r = Chunk311907.Ay.Store) {
  getCompletedActions(e) {
    return null == e ? null : d[e]
  }
  hasCompletedActionForChannel(e, t) {
    let n = this.getCompletedActions(e);
    return null != n && null != n[t]
  }
  getState(e) {
    return null == e ? {} : {
      completedActions: d[e],
      loading: f.has(e)
    }
  }
}
o(y, "displayName", "GuildOnboardingMemberActionStore");
let b = new y(Chunk73153.h, {
  GUILD_NEW_MEMBER_ACTIONS_FETCH_START: h,
  GUILD_NEW_MEMBER_ACTIONS_FETCH_SUCCESS: _,
  GUILD_NEW_MEMBER_ACTIONS_FETCH_FAIL: m,
  GUILD_NEW_MEMBER_ACTIONS_DELETE_SUCCESS: E,
  COMPLETE_NEW_MEMBER_ACTION: p,
  GUILD_DELETE: g
})