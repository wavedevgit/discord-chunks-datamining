/** Chunk was on 94503 **/
/** chunk id: 504049, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $9: () => h,
  KW: () => I,
  Ks: () => d,
  Nj: () => T,
  Tj: () => A,
  Zp: () => g,
  hs: () => _
});
var l, r, Chunk64700 = require("./64700.js"),
  Chunk793574 = require("./793574.js"),
  Chunk58149 = require("./58149.js"),
  Chunk961350 = require("./961350.js"),
  Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js");

function E(e, t, n) {
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
  }({}, t, (0, s.H$)(null != (l = t.guild_id) ? l : n));
  u.default.track(e, r)
}

function d(e) {
  return a.useCallback(t => {
    let n;
    n = {
      guild_id: e,
      location: i.A.MEMBER_SAFETY_PAGE
    }, E(c.HAw.MOD_DASH_SEARCH_MEMBERS, n)
  }, [e])
}

function _(e) {
  return a.useCallback(t => {
    let n;
    n = {
      selected_role_count: t.size,
      guild_id: e,
      location: i.A.MEMBER_SAFETY_PAGE
    }, E(c.HAw.MOD_DASH_FILTER_ROLES, n)
  }, [e])
}
var g = ((l = {}).UNUSUAL_DM_ACTIVITY = "unusual_dm_activity", l.COMMUNICATION_DISABLED = "communication_disabled", l.UNUSUAL_ACCOUNT_ACTIVITY = "unusual_account_activity", l.USERNAME_QUARANTINED = "username_quarantined", l);

function A(e) {
  return a.useCallback(t => {
    let n;
    n = {
      flag_type: t,
      guild_id: e,
      location: i.A.MEMBER_SAFETY_PAGE
    }, E(c.HAw.MOD_DASH_FILTER_SAFETY_FLAGS, n)
  }, [e])
}
var T = ((r = {}).BAN = "ban", r.KICK = "kick", r.MUTE = "mute", r.TIMEOUT = "timeout", r.ADD_ROLE = "add_role", r.REMOVE_ROLE = "remove_role", r.COPY_ID = "copy_id", r.CHANGE_NICKNAME = "change_nickname", r);

function h(e, t) {
  let {
    location: n,
    targetUserId: l,
    targets: r,
    locations: i
  } = t;
  return a.useCallback(t => {
    let a = {
      action_type: t,
      mod_user_id: o.default.getId(),
      guild_id: e,
      location: n,
      locations: i,
      target_user_id: null != l ? l : true,
      targets: null != r ? r : true
    };
    E(c.HAw.MODERATION_ACTION, a)
  }, [e, n, l, r, i])
}

function I(e, t) {
  E(c.HAw.MOD_DASH_MEMBERS_TABLE_VIEWED, {
    guild_id: e,
    location: t
  })
}