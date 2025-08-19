/** Chunk was on 49802 **/
/** chunk id: 910693, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  BG: () => b,
  aY: () => h,
  dW: () => g,
  gm: () => f,
  h1: () => E,
  jQ: () => p,
  sE: () => _
});
var r, i, Chunk647438 = require("./647438.js"),
  Chunk100527 = require("./100527.js"),
  Chunk367907 = require("./367907.js"),
  Chunk314897 = require("./314897.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js");

function s(e, t, n) {
  var r;
  let i = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), r.forEach(function(t) {
        var r;
        r = n[t], t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = r
      })
    }
    return e
  }({}, t, (0, a.hH)(null != (r = t.guild_id) ? r : n));
  c.default.track(e, i)
}

function f(e) {
  return l.useCallback(t => {
    let n = {
      guild_id: e,
      location: o.Z.MEMBER_SAFETY_PAGE
    };
    s(d.rMx.MOD_DASH_SEARCH_MEMBERS, n)
  }, [e])
}

function b(e) {
  return l.useCallback(t => {
    let n = {
      selected_role_count: t.size,
      guild_id: e,
      location: o.Z.MEMBER_SAFETY_PAGE
    };
    s(d.rMx.MOD_DASH_FILTER_ROLES, n)
  }, [e])
}
var h = ((r = {}).UNUSUAL_DM_ACTIVITY = "unusual_dm_activity", r.COMMUNICATION_DISABLED = "communication_disabled", r.UNUSUAL_ACCOUNT_ACTIVITY = "unusual_account_activity", r.USERNAME_QUARANTINED = "username_quarantined", r);

function g(e) {
  return l.useCallback(t => {
    let n = {
      flag_type: t,
      guild_id: e,
      location: o.Z.MEMBER_SAFETY_PAGE
    };
    s(d.rMx.MOD_DASH_FILTER_SAFETY_FLAGS, n)
  }, [e])
}
var p = ((i = {}).BAN = "ban", i.KICK = "kick", i.MUTE = "mute", i.TIMEOUT = "timeout", i.ADD_ROLE = "add_role", i.REMOVE_ROLE = "remove_role", i.COPY_ID = "copy_id", i.CHANGE_NICKNAME = "change_nickname", i);

function _(e, t) {
  let {
    location: n,
    targetUserId: r,
    targets: i,
    locations: o
  } = t;
  return l.useCallback(t => {
    let l = {
      action_type: t,
      mod_user_id: u.default.getId(),
      guild_id: e,
      location: n,
      locations: o,
      target_user_id: null != r ? r : true,
      targets: null != i ? i : true
    };
    s(d.rMx.MODERATION_ACTION, l)
  }, [e, n, r, i, o])
}

function E(e, t) {
  s(d.rMx.MOD_DASH_MEMBERS_TABLE_VIEWED, {
    guild_id: e,
    location: t
  })
}