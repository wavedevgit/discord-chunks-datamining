/** Chunk was on 65438 **/
r.d(t, {
  BG: () => d,
  aY: () => E,
  dW: () => f,
  gm: () => u,
  h1: () => _,
  jQ: () => p,
  sE: () => M
});
var n, l, i = r(192379),
  a = r(100527),
  o = r(367907),
  s = r(314897),
  h = r(626135),
  c = r(981631);

function v(e, t, r) {
  var n;
  let l = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {},
        n = Object.keys(r);
      "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
        return Object.getOwnPropertyDescriptor(r, e).enumerable
      }))), n.forEach(function(t) {
        var n;
        n = r[t], t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n
      })
    }
    return e
  }({}, t, (0, o.hH)(null !== (n = t.guild_id) && void 0 !== n ? n : r));
  h.default.track(e, l)
}

function u(e) {
  return i.useCallback(t => {
    ! function(e) {
      let t = {
        guild_id: e,
        location: a.Z.MEMBER_SAFETY_PAGE
      };
      v(c.rMx.MOD_DASH_SEARCH_MEMBERS, t)
    }(e)
  }, [e])
}

function d(e) {
  return i.useCallback(t => {
    ! function(e, t) {
      let r = {
        selected_role_count: t.size,
        guild_id: e,
        location: a.Z.MEMBER_SAFETY_PAGE
      };
      v(c.rMx.MOD_DASH_FILTER_ROLES, r)
    }(e, t)
  }, [e])
}
var E = ((n = {}).UNUSUAL_DM_ACTIVITY = "unusual_dm_activity", n.COMMUNICATION_DISABLED = "communication_disabled", n.UNUSUAL_ACCOUNT_ACTIVITY = "unusual_account_activity", n.USERNAME_QUARANTINED = "username_quarantined", n);

function f(e) {
  return i.useCallback(t => {
    ! function(e, t) {
      let r = {
        flag_type: t,
        guild_id: e,
        location: a.Z.MEMBER_SAFETY_PAGE
      };
      v(c.rMx.MOD_DASH_FILTER_SAFETY_FLAGS, r)
    }(e, t)
  }, [e])
}
var p = ((l = {}).BAN = "ban", l.KICK = "kick", l.MUTE = "mute", l.TIMEOUT = "timeout", l.ADD_ROLE = "add_role", l.REMOVE_ROLE = "remove_role", l.COPY_ID = "copy_id", l.CHANGE_NICKNAME = "change_nickname", l);

function M(e, t) {
  let {
    location: r,
    targetUserId: n,
    targets: l,
    locations: a
  } = t;
  return i.useCallback(t => {
    let i = {
      action_type: t,
      mod_user_id: s.default.getId(),
      guild_id: e,
      location: r,
      locations: a,
      target_user_id: null != n ? n : void 0,
      targets: null != l ? l : void 0
    };
    v(c.rMx.MODERATION_ACTION, i)
  }, [e, r, n, l, a])
}

function _(e, t) {
  v(c.rMx.MOD_DASH_MEMBERS_TABLE_VIEWED, {
    guild_id: e,
    location: t
  })
}