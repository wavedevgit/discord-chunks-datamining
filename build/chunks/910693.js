/** Chunk was on 78079 **/
/** chunk id: 910693, original params: A,e,t (module,exports,require) **/
require.d(exports, {
  BG: () => v,
  aY: () => u,
  dW: () => h,
  gm: () => f,
  h1: () => C,
  jQ: () => d,
  sE: () => E
});
var n, r, Chunk647438 = require("./647438.js"),
  Chunk100527 = require("./100527.js"),
  Chunk367907 = require("./367907.js"),
  Chunk314897 = require("./314897.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js");

function c(A, e, t) {
  var n;
  let r = function(A) {
    for (var e = 1; e < arguments.length; e++) {
      var t = null != arguments[e] ? arguments[e] : {},
        n = Object.keys(t);
      "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(A) {
        return Object.getOwnPropertyDescriptor(t, A).enumerable
      }))), n.forEach(function(e) {
        var n;
        n = t[e], e in A ? Object.defineProperty(A, e, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        }) : A[e] = n
      })
    }
    return A
  }({}, e, (0, a.hH)(null != (n = e.guild_id) ? n : t));
  o.default.track(A, r)
}

function f(A) {
  return l.useCallback(e => {
    let t = {
      guild_id: A,
      location: i.Z.MEMBER_SAFETY_PAGE
    };
    c(g.rMx.MOD_DASH_SEARCH_MEMBERS, t)
  }, [A])
}

function v(A) {
  return l.useCallback(e => {
    let t = {
      selected_role_count: e.size,
      guild_id: A,
      location: i.Z.MEMBER_SAFETY_PAGE
    };
    c(g.rMx.MOD_DASH_FILTER_ROLES, t)
  }, [A])
}
var u = ((n = {}).UNUSUAL_DM_ACTIVITY = "unusual_dm_activity", n.COMMUNICATION_DISABLED = "communication_disabled", n.UNUSUAL_ACCOUNT_ACTIVITY = "unusual_account_activity", n.USERNAME_QUARANTINED = "username_quarantined", n);

function h(A) {
  return l.useCallback(e => {
    let t = {
      flag_type: e,
      guild_id: A,
      location: i.Z.MEMBER_SAFETY_PAGE
    };
    c(g.rMx.MOD_DASH_FILTER_SAFETY_FLAGS, t)
  }, [A])
}
var d = ((r = {}).BAN = "ban", r.KICK = "kick", r.MUTE = "mute", r.TIMEOUT = "timeout", r.ADD_ROLE = "add_role", r.REMOVE_ROLE = "remove_role", r.COPY_ID = "copy_id", r.CHANGE_NICKNAME = "change_nickname", r);

function E(A, e) {
  let {
    location: t,
    targetUserId: n,
    targets: r,
    locations: i
  } = e;
  return l.useCallback(e => {
    let l = {
      action_type: e,
      mod_user_id: s.default.getId(),
      guild_id: A,
      location: t,
      locations: i,
      target_user_id: null != n ? n : true,
      targets: null != r ? r : true
    };
    c(g.rMx.MODERATION_ACTION, l)
  }, [A, t, n, r, i])
}

function C(A, e) {
  c(g.rMx.MOD_DASH_MEMBERS_TABLE_VIEWED, {
    guild_id: A,
    location: e
  })
}