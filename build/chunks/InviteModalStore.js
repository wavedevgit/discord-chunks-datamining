/** Chunk was on 64271 **/
/** chunk id: 590965, original params: e,t,n (module,exports,require) **/
let r;
require.d(exports, {
  Z: () => w
}), require("./388685.js"), require("./539854.js");
var i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk447543 = require("./447543.js"),
  Chunk413605 = require("./413605.js"),
  Chunk703656 = require("./703656.js"),
  Chunk131704 = require("./131704.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
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

function x(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function C(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      x(e, t, n[t])
    })
  }
  return e
}
let E = Chunk981631.IlC.APP,
  S = false,
  I = false,
  P = [];

function N() {
  S = true
}
class Z extends(i = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk314897.default, Chunk592125.Z, Chunk430824.Z, Chunk701190.Z, Chunk496675.Z, Chunk699516.Z, Chunk594174.default)
  }
  isOpen() {
    let e = __OVERLAY__ ? Chunk981631.IlC.OVERLAY : Chunk981631.IlC.APP;
    return !!(S && P.length > 0 && E === module)
  }
  getProps() {
    return {
      invite: P.length > 0 ? P[0][0] : null,
      error: null != r && "" !== r ? r : null,
      submitting: I
    }
  }
}
x(Z, "displayName", "InviteModalStore");
let w = new Z(Chunk570140.Z, {
  OVERLAY_INITIALIZE: N,
  CONNECTION_OPEN: N,
  CONNECTION_CLOSED: function() {
    S = false
  },
  INVITE_MODAL_OPEN: function(e) {
    let t = e.invite;
    if (null == t) returnfalse;
    if (t.state !== v.r2o.EXPIRED && t.state !== v.r2o.BANNED && t.state !== v.r2o.ERROR) {
      let {
        channel: e,
        guild: n
      } = t;
      if (null == e) returnfalse;
      if ((0, u.bc)(e.type)) {
        if (null != f.Z.getChannel(e.id)) return (0, c.XU)(v.ME, e.id), y.ZP.focus(), false
      } else {
        if (null == n) returnfalse;
        if (null != h.Z.getGuild(n.id) && !(0, s.TY)(t)) {
          let e = function(e) {
            if ((0, s.W6)(e)) return j.oC.ROLE_SUBSCRIPTIONS;
            let {
              channel: t
            } = e;
            if (null != t) {
              let e = f.Z.getChannel(t.id);
              if (g.Z.can(v.Plq.VIEW_CHANNEL, e)) return t.id
            }
            return null
          }(t);
          return (0, c.XU)(n.id, e), y.ZP.focus(), false
        }
      }
    }
    if (P.some(e => {
        let [n] = e;
        return n.code === t.code
      })) returnfalse;
    E = e.context, I = false;
    let n = function(e) {
      let {
        approximate_member_count: t,
        approximate_presence_count: n,
        code: r,
        state: i,
        target_type: l,
        target_user: o,
        target_application: a,
        type: s,
        channel: c,
        guild: u,
        is_nickname_changeable: d
      } = e, f = {
        code: r,
        state: i,
        approximate_member_count: t,
        approximate_presence_count: n,
        target_type: l,
        target_user: o,
        target_application: a,
        type: s,
        is_nickname_changeable: d
      };
      return null != c && (f.channel = C({}, c)), null != u && (f.guild = (0, _.Qs)(u)), null != e.inviter && (f.inviter = C({}, e.inviter)), f
    }(t);
    P.push([n, e.resolve]), null != t.guild && d.default.isAuthenticated() && m.Z.getFriendCount() > 0 && (0, O.xY)(t.guild) && (0, O.Jv)({
      location: "accept_invite_modal",
      autoTrackExposure: true
    }).showFriendsInServer && a.ZP.fetchFriendMembers(t.code)
  },
  INVITE_MODAL_CLOSE: function() {
    if (r = null, I = false, P.length > 0) {
      let [, e] = P.shift();
      null != module && module()
    }
  },
  INVITE_ACCEPT: function() {
    I = true
  },
  INVITE_MODAL_ERROR: function(e) {
    let {
      message: t
    } = e;
    r = t, I = false
  }
})