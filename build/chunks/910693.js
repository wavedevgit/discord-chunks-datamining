/** Chunk was on 45130 **/
/** chunk id: 910693, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  BG: () => b,
  aY: () => f,
  dW: () => E,
  gm: () => _,
  h1: () => v,
  jQ: () => g,
  sE: () => O
});
var l, r, Chunk647438 = require("./647438.js"),
  Chunk100527 = require("./100527.js"),
  Chunk367907 = require("./367907.js"),
  Chunk314897 = require("./314897.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js");

function s(e, t, n) {
  var l;
  let r = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        l = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), l.forEach(function(t) {
        var l;
        l = n[t], t in e ? Object.defineProperty(e, t, {
          value: l,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = l
      })
    }
    return e
  }({}, t, (0, u.hH)(null != (l = t.guild_id) ? l : n));
  a.default.track(e, r)
}

function _(e) {
  return o.useCallback(t => {
    let n = {
      guild_id: e,
      location: i.Z.MEMBER_SAFETY_PAGE
    };
    s(d.rMx.MOD_DASH_SEARCH_MEMBERS, n)
  }, [e])
}

function b(e) {
  return o.useCallback(t => {
    let n = {
      selected_role_count: t.size,
      guild_id: e,
      location: i.Z.MEMBER_SAFETY_PAGE
    };
    s(d.rMx.MOD_DASH_FILTER_ROLES, n)
  }, [e])
}
var f = ((l = {}).UNUSUAL_DM_ACTIVITY = "unusual_dm_activity", l.COMMUNICATION_DISABLED = "communication_disabled", l.UNUSUAL_ACCOUNT_ACTIVITY = "unusual_account_activity", l.USERNAME_QUARANTINED = "username_quarantined", l);

function E(e) {
  return o.useCallback(t => {
    let n = {
      flag_type: t,
      guild_id: e,
      location: i.Z.MEMBER_SAFETY_PAGE
    };
    s(d.rMx.MOD_DASH_FILTER_SAFETY_FLAGS, n)
  }, [e])
}
var g = ((r = {}).BAN = "ban", r.KICK = "kick", r.MUTE = "mute", r.TIMEOUT = "timeout", r.ADD_ROLE = "add_role", r.REMOVE_ROLE = "remove_role", r.COPY_ID = "copy_id", r.CHANGE_NICKNAME = "change_nickname", r);

function O(e, t) {
  let {
    location: n,
    targetUserId: l,
    targets: r,
    locations: i
  } = t;
  return o.useCallback(t => {
    let o = {
      action_type: t,
      mod_user_id: c.default.getId(),
      guild_id: e,
      location: n,
      locations: i,
      target_user_id: null != l ? l : true,
      targets: null != r ? r : true
    };
    s(d.rMx.MODERATION_ACTION, o)
  }, [e, n, l, r, i])
}

function v(e, t) {
  s(d.rMx.MOD_DASH_MEMBERS_TABLE_VIEWED, {
    guild_id: e,
    location: t
  })
}