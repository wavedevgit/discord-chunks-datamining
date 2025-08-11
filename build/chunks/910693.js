/** Chunk was on 72920 **/
/** chunk id: 910693, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  BG: () => E,
  aY: () => T,
  dW: () => g,
  gm: () => d,
  h1: () => S,
  jQ: () => A,
  sE: () => O
});
var l, a, Chunk73800 = require("./73800.js"),
  Chunk100527 = require("./100527.js"),
  Chunk367907 = require("./367907.js"),
  Chunk314897 = require("./314897.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js");

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
  }({}, e, (0, o.hH)(null != (l = e.guild_id) ? l : n));
  s.default.track(t, a)
}

function d(t) {
  return i.useCallback(e => {
    let n = {
      guild_id: t,
      location: r.Z.MEMBER_SAFETY_PAGE
    };
    _(c.rMx.MOD_DASH_SEARCH_MEMBERS, n)
  }, [t])
}

function E(t) {
  return i.useCallback(e => {
    let n = {
      selected_role_count: e.size,
      guild_id: t,
      location: r.Z.MEMBER_SAFETY_PAGE
    };
    _(c.rMx.MOD_DASH_FILTER_ROLES, n)
  }, [t])
}
var T = ((l = {}).UNUSUAL_DM_ACTIVITY = "unusual_dm_activity", l.COMMUNICATION_DISABLED = "communication_disabled", l.UNUSUAL_ACCOUNT_ACTIVITY = "unusual_account_activity", l.USERNAME_QUARANTINED = "username_quarantined", l);

function g(t) {
  return i.useCallback(e => {
    let n = {
      flag_type: e,
      guild_id: t,
      location: r.Z.MEMBER_SAFETY_PAGE
    };
    _(c.rMx.MOD_DASH_FILTER_SAFETY_FLAGS, n)
  }, [t])
}
var A = ((a = {}).BAN = "ban", a.KICK = "kick", a.MUTE = "mute", a.TIMEOUT = "timeout", a.ADD_ROLE = "add_role", a.REMOVE_ROLE = "remove_role", a.COPY_ID = "copy_id", a.CHANGE_NICKNAME = "change_nickname", a);

function O(t, e) {
  let {
    location: n,
    targetUserId: l,
    targets: a,
    locations: r
  } = e;
  return i.useCallback(e => {
    let i = {
      action_type: e,
      mod_user_id: u.default.getId(),
      guild_id: t,
      location: n,
      locations: r,
      target_user_id: null != l ? l : true,
      targets: null != a ? a : true
    };
    _(c.rMx.MODERATION_ACTION, i)
  }, [t, n, l, a, r])
}

function S(t, e) {
  _(c.rMx.MOD_DASH_MEMBERS_TABLE_VIEWED, {
    guild_id: t,
    location: e
  })
}