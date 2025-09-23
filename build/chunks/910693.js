/** Chunk was on 96306 **/
/** chunk id: 910693, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  BG: () => E,
  aY: () => s,
  dW: () => A,
  gm: () => d,
  h1: () => f,
  jQ: () => M,
  sE: () => g
});
var l, _, Chunk647438 = require("./647438.js"),
  Chunk100527 = require("./100527.js"),
  Chunk367907 = require("./367907.js"),
  Chunk314897 = require("./314897.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js");

function b(e, t, n) {
  var l;
  let _ = function(e) {
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
  }({}, t, (0, i.hH)(null != (l = t.guild_id) ? l : n));
  o.default.track(e, _)
}

function d(e) {
  return a.useCallback(t => {
    let n = {
      guild_id: e,
      location: r.Z.MEMBER_SAFETY_PAGE
    };
    b(c.rMx.MOD_DASH_SEARCH_MEMBERS, n)
  }, [e])
}

function E(e) {
  return a.useCallback(t => {
    let n = {
      selected_role_count: t.size,
      guild_id: e,
      location: r.Z.MEMBER_SAFETY_PAGE
    };
    b(c.rMx.MOD_DASH_FILTER_ROLES, n)
  }, [e])
}
var s = ((l = {}).UNUSUAL_DM_ACTIVITY = "unusual_dm_activity", l.COMMUNICATION_DISABLED = "communication_disabled", l.UNUSUAL_ACCOUNT_ACTIVITY = "unusual_account_activity", l.USERNAME_QUARANTINED = "username_quarantined", l);

function A(e) {
  return a.useCallback(t => {
    let n = {
      flag_type: t,
      guild_id: e,
      location: r.Z.MEMBER_SAFETY_PAGE
    };
    b(c.rMx.MOD_DASH_FILTER_SAFETY_FLAGS, n)
  }, [e])
}
var M = ((_ = {}).BAN = "ban", _.KICK = "kick", _.MUTE = "mute", _.TIMEOUT = "timeout", _.ADD_ROLE = "add_role", _.REMOVE_ROLE = "remove_role", _.COPY_ID = "copy_id", _.CHANGE_NICKNAME = "change_nickname", _);

function g(e, t) {
  let {
    location: n,
    targetUserId: l,
    targets: _,
    locations: r
  } = t;
  return a.useCallback(t => {
    let a = {
      action_type: t,
      mod_user_id: u.default.getId(),
      guild_id: e,
      location: n,
      locations: r,
      target_user_id: null != l ? l : true,
      targets: null != _ ? _ : true
    };
    b(c.rMx.MODERATION_ACTION, a)
  }, [e, n, l, _, r])
}

function f(e, t) {
  b(c.rMx.MOD_DASH_MEMBERS_TABLE_VIEWED, {
    guild_id: e,
    location: t
  })
}