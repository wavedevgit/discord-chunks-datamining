/** Chunk was on 13873 **/
/** chunk id: 590965, original params: e,t,n (module,exports,require) **/
let r;
require.d(exports, {
  Z: () => Z
}), require("./388685.js"), require("./539854.js");
var i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk447543 = require("./447543.js"),
  Chunk413605 = require("./413605.js"),
  Chunk703656 = require("./703656.js"),
  Chunk131704 = require("./131704.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk701190 = require("./701190.js"),
  Chunk496675 = require("./496675.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk411198 = require("./411198.js"),
  Chunk998502 = require("./998502.js"),
  Chunk756679 = require("./756679.js"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js");

function P(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function A(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      P(e, t, n[t])
    })
  }
  return e
}
let E = Chunk981631.IlC.APP,
  j = false,
  _ = false,
  C = [];

function N() {
  j = true
}
class T extends(i = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(a.default, f.Z, O.ZP, g.Z, b.Z, v.Z, p.Z, y.default)
  }
  isOpen() {
    let e = __OVERLAY__ ? S.IlC.OVERLAY : S.IlC.APP;
    return !!(j && C.length > 0 && E === e)
  }
  getProps() {
    return {
      invite: C.length > 0 ? C[0][0] : null,
      error: null != r && "" !== r ? r : null,
      submitting: _
    }
  }
}
P(T, "displayName", "InviteModalStore");
let Z = new T(Chunk570140.Z, {
  OVERLAY_INITIALIZE: N,
  CONNECTION_OPEN: N,
  CONNECTION_CLOSED: function() {
    j = false
  },
  INVITE_MODAL_OPEN: function(e) {
    let t = e.invite;
    if (null == t) returnfalse;
    if (t.state !== S.r2o.EXPIRED && t.state !== S.r2o.BANNED && t.state !== S.r2o.ERROR) {
      let {
        channel: e,
        guild: r
      } = t;
      if (null == e) returnfalse;
      if ((0, d.bc)(e.type)) {
        if (null != f.Z.getChannel(e.id)) return (0, s.XU)(S.ME, e.id), w.ZP.focus(), false
      } else {
        if (null == r) returnfalse;
        if (null != g.Z.getGuild(r.id) && !(0, c.TY)(t)) {
          let e = false;
          if (null != t.roles && t.roles.length > 0) {
            var n;
            let i = a.default.getId(),
              l = O.ZP.getMember(r.id, i),
              o = new Set(null != (n = null == l ? true : l.roles) ? n : []);
            e = t.roles.some(e => !o.has(e.id))
          }
          if (!e) {
            let e = function(e) {
              if ((0, c.W6)(e)) return m.oC.ROLE_SUBSCRIPTIONS;
              let {
                channel: t
              } = e;
              if (null != t) {
                let e = f.Z.getChannel(t.id);
                if (v.Z.can(S.Plq.VIEW_CHANNEL, e)) return t.id
              }
              return null
            }(t);
            return (0, s.XU)(r.id, e), w.ZP.focus(), false
          }
        }
      }
    }
    if (C.some(e => {
        let [n] = e;
        return n.code === t.code
      })) returnfalse;
    E = e.context, _ = false;
    let r = function(e) {
      let {
        approximate_member_count: t,
        approximate_presence_count: n,
        code: r,
        state: i,
        target_type: l,
        target_user: o,
        target_application: u,
        type: c,
        channel: s,
        guild: d,
        is_nickname_changeable: a
      } = e, f = {
        code: r,
        state: i,
        approximate_member_count: t,
        approximate_presence_count: n,
        target_type: l,
        target_user: o,
        target_application: u,
        type: c,
        is_nickname_changeable: a
      };
      return null != s && (f.channel = A({}, s)), null != d && (f.guild = (0, h.Qs)(d)), null != e.inviter && (f.inviter = A({}, e.inviter)), null != e.roles && (f.roles = e.roles), f
    }(t);
    C.push([r, e.resolve]), (0, I.Lz)({
      location: "accept_invite_modal",
      autoTrackExposure: true,
      guild: t.guild
    }).showFriendsInServer && u.ZP.fetchFriendMembers(t.code)
  },
  INVITE_MODAL_CLOSE: function() {
    if (r = null, _ = false, C.length > 0) {
      let [, e] = C.shift();
      null != e && e()
    }
  },
  INVITE_ACCEPT: function() {
    _ = true
  },
  INVITE_MODAL_ERROR: function(e) {
    let {
      message: t
    } = e;
    r = t, _ = false
  }
})