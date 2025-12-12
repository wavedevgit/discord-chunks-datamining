/** Chunk was on 96253 **/
/** chunk id: 910693, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  BG: () => E,
  aY: () => s,
  dW: () => A,
  gm: () => b,
  h1: () => g,
  jQ: () => f,
  sE: () => M
});
var a, l, Chunk473749 = require("./473749.js"),
  Chunk100527 = require("./100527.js"),
  Chunk367907 = require("./367907.js"),
  Chunk314897 = require("./314897.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js");

function d(e, t, n) {
  var a;
  let l = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        a = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), a.forEach(function(t) {
        var a;
        a = n[t], t in e ? Object.defineProperty(e, t, {
          value: a,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = a
      })
    }
    return e
  }({}, t, (0, i.hH)(null != (a = t.guild_id) ? a : n));
  o.default.track(e, l)
}

function b(e) {
  return c.useCallback(t => {
    let n = {
      guild_id: e,
      location: r.Z.MEMBER_SAFETY_PAGE
    };
    d(_.rMx.MOD_DASH_SEARCH_MEMBERS, n)
  }, [e])
}

function E(e) {
  return c.useCallback(t => {
    let n = {
      selected_role_count: t.size,
      guild_id: e,
      location: r.Z.MEMBER_SAFETY_PAGE
    };
    d(_.rMx.MOD_DASH_FILTER_ROLES, n)
  }, [e])
}
var s = ((a = {}).UNUSUAL_DM_ACTIVITY = "unusual_dm_activity", a.COMMUNICATION_DISABLED = "communication_disabled", a.UNUSUAL_ACCOUNT_ACTIVITY = "unusual_account_activity", a.USERNAME_QUARANTINED = "username_quarantined", a);

function A(e) {
  return c.useCallback(t => {
    let n = {
      flag_type: t,
      guild_id: e,
      location: r.Z.MEMBER_SAFETY_PAGE
    };
    d(_.rMx.MOD_DASH_FILTER_SAFETY_FLAGS, n)
  }, [e])
}
var f = ((l = {}).BAN = "ban", l.KICK = "kick", l.MUTE = "mute", l.TIMEOUT = "timeout", l.ADD_ROLE = "add_role", l.REMOVE_ROLE = "remove_role", l.COPY_ID = "copy_id", l.CHANGE_NICKNAME = "change_nickname", l);

function M(e, t) {
  let {
    location: n,
    targetUserId: a,
    targets: l,
    locations: r
  } = t;
  return c.useCallback(t => {
    let c = {
      action_type: t,
      mod_user_id: u.default.getId(),
      guild_id: e,
      location: n,
      locations: r,
      target_user_id: null != a ? a : true,
      targets: null != l ? l : true
    };
    d(_.rMx.MODERATION_ACTION, c)
  }, [e, n, a, l, r])
}

function g(e, t) {
  d(_.rMx.MOD_DASH_MEMBERS_TABLE_VIEWED, {
    guild_id: e,
    location: t
  })
}