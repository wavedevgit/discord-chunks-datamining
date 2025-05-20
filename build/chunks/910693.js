/** Chunk was on 72920 **/
l.d(t, {
  BG: () => E,
  aY: () => x,
  dW: () => T,
  gm: () => d,
  h1: () => C,
  jQ: () => m,
  sE: () => A
});
var n, o, r = l(73800),
  a = l(100527),
  c = l(367907),
  i = l(314897),
  s = l(626135),
  u = l(981631);

function _(e, t, l) {
  var n;
  let o = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var l = null != arguments[t] ? arguments[t] : {},
        n = Object.keys(l);
      "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(l).filter(function(e) {
        return Object.getOwnPropertyDescriptor(l, e).enumerable
      }))), n.forEach(function(t) {
        var n;
        n = l[t], t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n
      })
    }
    return e
  }({}, t, (0, c.hH)(null != (n = t.guild_id) ? n : l));
  s.default.track(e, o)
}

function d(e) {
  return r.useCallback(t => {
    let l = {
      guild_id: e,
      location: a.Z.MEMBER_SAFETY_PAGE
    };
    _(u.rMx.MOD_DASH_SEARCH_MEMBERS, l)
  }, [e])
}

function E(e) {
  return r.useCallback(t => {
    let l = {
      selected_role_count: t.size,
      guild_id: e,
      location: a.Z.MEMBER_SAFETY_PAGE
    };
    _(u.rMx.MOD_DASH_FILTER_ROLES, l)
  }, [e])
}
var x = ((n = {}).UNUSUAL_DM_ACTIVITY = "unusual_dm_activity", n.COMMUNICATION_DISABLED = "communication_disabled", n.UNUSUAL_ACCOUNT_ACTIVITY = "unusual_account_activity", n.USERNAME_QUARANTINED = "username_quarantined", n);

function T(e) {
  return r.useCallback(t => {
    let l = {
      flag_type: t,
      guild_id: e,
      location: a.Z.MEMBER_SAFETY_PAGE
    };
    _(u.rMx.MOD_DASH_FILTER_SAFETY_FLAGS, l)
  }, [e])
}
var m = ((o = {}).BAN = "ban", o.KICK = "kick", o.MUTE = "mute", o.TIMEOUT = "timeout", o.ADD_ROLE = "add_role", o.REMOVE_ROLE = "remove_role", o.COPY_ID = "copy_id", o.CHANGE_NICKNAME = "change_nickname", o);

function A(e, t) {
  let {
    location: l,
    targetUserId: n,
    targets: o,
    locations: a
  } = t;
  return r.useCallback(t => {
    let r = {
      action_type: t,
      mod_user_id: i.default.getId(),
      guild_id: e,
      location: l,
      locations: a,
      target_user_id: null != n ? n : void 0,
      targets: null != o ? o : void 0
    };
    _(u.rMx.MODERATION_ACTION, r)
  }, [e, l, n, o, a])
}

function C(e, t) {
  _(u.rMx.MOD_DASH_MEMBERS_TABLE_VIEWED, {
    guild_id: e,
    location: t
  })
}