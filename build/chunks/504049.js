/** Chunk was on 94390 **/
/** chunk id: 504049, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  $9: () => D,
  KW: () => g,
  Ks: () => d,
  Nj: () => T,
  Tj: () => m,
  Zp: () => E,
  hs: () => A
});
var l, a, Chunk64700 = require("./64700.js"),
  Chunk793574 = require("./793574.js"),
  Chunk58149 = require("./58149.js"),
  Chunk961350 = require("./961350.js"),
  Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js");

function _(t, e, n) {
  var l;
  let a = function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = null != arguments[e] ? arguments[e] : {},
        l = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
        return Object.getOwnPropertyDescriptor(n, t).enumerable
      }))), l.forEach(function(e) {
        var l;
        l = n[e], e in t ? Object.defineProperty(t, e, {
          value: l,
          enumerable: true,
          configurable: true,
          writable: true
        }) : t[e] = l
      })
    }
    return t
  }({}, e, (0, r.H$)(null != (l = e.guild_id) ? l : n));
  s.default.track(t, a)
}

function d(t) {
  return i.useCallback(e => {
    let n;
    n = {
      guild_id: t,
      location: o.A.MEMBER_SAFETY_PAGE
    }, _(c.HAw.MOD_DASH_SEARCH_MEMBERS, n)
  }, [t])
}

function A(t) {
  return i.useCallback(e => {
    let n;
    n = {
      selected_role_count: e.size,
      guild_id: t,
      location: o.A.MEMBER_SAFETY_PAGE
    }, _(c.HAw.MOD_DASH_FILTER_ROLES, n)
  }, [t])
}
var E = ((l = {}).UNUSUAL_DM_ACTIVITY = "unusual_dm_activity", l.COMMUNICATION_DISABLED = "communication_disabled", l.UNUSUAL_ACCOUNT_ACTIVITY = "unusual_account_activity", l.USERNAME_QUARANTINED = "username_quarantined", l);

function m(t) {
  return i.useCallback(e => {
    let n;
    n = {
      flag_type: e,
      guild_id: t,
      location: o.A.MEMBER_SAFETY_PAGE
    }, _(c.HAw.MOD_DASH_FILTER_SAFETY_FLAGS, n)
  }, [t])
}
var T = ((a = {}).BAN = "ban", a.KICK = "kick", a.MUTE = "mute", a.TIMEOUT = "timeout", a.ADD_ROLE = "add_role", a.REMOVE_ROLE = "remove_role", a.COPY_ID = "copy_id", a.CHANGE_NICKNAME = "change_nickname", a);

function D(t, e) {
  let {
    location: n,
    targetUserId: l,
    targets: a,
    locations: o
  } = e;
  return i.useCallback(e => {
    let i = {
      action_type: e,
      mod_user_id: u.default.getId(),
      guild_id: t,
      location: n,
      locations: o,
      target_user_id: null != l ? l : true,
      targets: null != a ? a : true
    };
    _(c.HAw.MODERATION_ACTION, i)
  }, [t, n, l, a, o])
}

function g(t, e) {
  _(c.HAw.MOD_DASH_MEMBERS_TABLE_VIEWED, {
    guild_id: t,
    location: e
  })
}