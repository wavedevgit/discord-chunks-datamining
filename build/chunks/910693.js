/** Chunk was on 99665 **/
n.d(t, {
  BG: () => f,
  aY: () => E,
  dW: () => g,
  gm: () => _,
  h1: () => h,
  jQ: () => b,
  sE: () => O
});
var r, l, i = n(73800),
  u = n(100527),
  o = n(367907),
  a = n(314897),
  c = n(626135),
  d = n(981631);

function s(e, t, n) {
  var r;
  let l = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), r.forEach(function(t) {
        var r;
        r = n[t], t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r
      })
    }
    return e
  }({}, t, (0, o.hH)(null != (r = t.guild_id) ? r : n));
  c.default.track(e, l)
}

function _(e) {
  return i.useCallback(t => {
    let n = {
      guild_id: e,
      location: u.Z.MEMBER_SAFETY_PAGE
    };
    s(d.rMx.MOD_DASH_SEARCH_MEMBERS, n)
  }, [e])
}

function f(e) {
  return i.useCallback(t => {
    let n = {
      selected_role_count: t.size,
      guild_id: e,
      location: u.Z.MEMBER_SAFETY_PAGE
    };
    s(d.rMx.MOD_DASH_FILTER_ROLES, n)
  }, [e])
}
var E = ((r = {}).UNUSUAL_DM_ACTIVITY = "unusual_dm_activity", r.COMMUNICATION_DISABLED = "communication_disabled", r.UNUSUAL_ACCOUNT_ACTIVITY = "unusual_account_activity", r.USERNAME_QUARANTINED = "username_quarantined", r);

function g(e) {
  return i.useCallback(t => {
    let n = {
      flag_type: t,
      guild_id: e,
      location: u.Z.MEMBER_SAFETY_PAGE
    };
    s(d.rMx.MOD_DASH_FILTER_SAFETY_FLAGS, n)
  }, [e])
}
var b = ((l = {}).BAN = "ban", l.KICK = "kick", l.MUTE = "mute", l.TIMEOUT = "timeout", l.ADD_ROLE = "add_role", l.REMOVE_ROLE = "remove_role", l.COPY_ID = "copy_id", l.CHANGE_NICKNAME = "change_nickname", l);

function O(e, t) {
  let {
    location: n,
    targetUserId: r,
    targets: l,
    locations: u
  } = t;
  return i.useCallback(t => {
    let i = {
      action_type: t,
      mod_user_id: a.default.getId(),
      guild_id: e,
      location: n,
      locations: u,
      target_user_id: null != r ? r : void 0,
      targets: null != l ? l : void 0
    };
    s(d.rMx.MODERATION_ACTION, i)
  }, [e, n, r, l, u])
}

function h(e, t) {
  s(d.rMx.MOD_DASH_MEMBERS_TABLE_VIEWED, {
    guild_id: e,
    location: t
  })
}