/** Chunk was on 79023 **/
/** chunk id: 539895, original params: e,t,n (module,exports,require) **/
let r;
require.d(exports, {
  A: () => T
}), require("./938796.js"), require("./896048.js"), require("./321073.js");
var i, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk846293 = require("./846293.js"),
  Chunk346542 = require("./346542.js"),
  Chunk976860 = require("./976860.js"),
  Chunk95701 = require("./95701.js"),
  Chunk961350 = require("./961350.js"),
  Chunk734057 = require("./734057.js"),
  Chunk696451 = require("./696451.js"),
  Chunk71393 = require("./71393.js"),
  Chunk299091 = require("./299091.js"),
  Chunk576705 = require("./576705.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk860689 = require("./860689.js"),
  Chunk837921 = require("./837921.js"),
  Chunk430914 = require("./430914.js"),
  Chunk652215 = require("./652215.js"),
  Chunk746080 = require("./746080.js");

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      I(e, t, n[t])
    })
  }
  return e
}
let j = Chunk652215.BRT.APP,
  P = false,
  _ = false,
  N = [];

function C() {
  P = true
}
class R extends(i = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(a.default, f.A, O.Ay, b.A, g.A, p.A, y.A, v.default)
  }
  isOpen() {
    let e = __OVERLAY__ ? S.BRT.OVERLAY : S.BRT.APP;
    return !!(P && N.length > 0 && j === e)
  }
  getProps() {
    return {
      invite: N.length > 0 ? N[0][0] : null,
      error: null != r && "" !== r ? r : null,
      submitting: _
    }
  }
}
I(R, "displayName", "InviteModalStore");
let T = new R(Chunk73153.h, {
  OVERLAY_INITIALIZE: C,
  CONNECTION_OPEN: C,
  CONNECTION_CLOSED: function() {
    P = false
  },
  INVITE_MODAL_OPEN: function(e) {
    let t = e.invite;
    if (null == t) returnfalse;
    if (t.state !== S.elq.EXPIRED && t.state !== S.elq.BANNED && t.state !== S.elq.ERROR) {
      let {
        channel: e,
        guild: r
      } = t;
      if (null == e) returnfalse;
      if ((0, s.MK)(e.type)) {
        if (null != f.A.getChannel(e.id)) return (0, d.uh)(S.ME, e.id), A.Ay.focus(), false
      } else {
        if (null == r) returnfalse;
        if (null != b.A.getGuild(r.id) && !(0, c.G4)(t)) {
          let e = false;
          if (null != t.roles && t.roles.length > 0) {
            var n;
            let i = a.default.getId(),
              l = O.Ay.getMember(r.id, i),
              o = new Set(null != (n = null == l ? true : l.roles) ? n : []);
            e = t.roles.some(e => !o.has(e.id))
          }
          if (!e) {
            let e = function(e) {
              if ((0, c.d4)(e)) return m.VV.ROLE_SUBSCRIPTIONS;
              let {
                channel: t
              } = e;
              if (null != t) {
                let e = f.A.getChannel(t.id);
                if (p.A.can(S.xBc.VIEW_CHANNEL, e)) return t.id
              }
              return null
            }(t);
            return (0, d.uh)(r.id, e), A.Ay.focus(), false
          }
        }
      }
    }
    if (N.some(e => {
        let [n] = e;
        return n.code === t.code
      })) returnfalse;
    j = e.context, _ = false;
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
        channel: d,
        guild: s,
        is_nickname_changeable: a,
        flags: f
      } = e, O = {
        code: r,
        state: i,
        approximate_member_count: t,
        approximate_presence_count: n,
        target_type: l,
        target_user: o,
        target_application: u,
        type: c,
        is_nickname_changeable: a,
        flags: f
      };
      return null != d && (O.channel = E({}, d)), null != s && (O.guild = (0, h.DY)(s)), null != e.inviter && (O.inviter = E({}, e.inviter)), null != e.roles && (O.roles = e.roles), O
    }(t);
    N.push([r, e.resolve]), (0, w.Zs)({
      location: "accept_invite_modal",
      autoTrackExposure: true,
      guild: t.guild
    }).showFriendsInServer && u.Ay.fetchFriendMembers(t.code)
  },
  INVITE_MODAL_CLOSE: function() {
    if (r = null, _ = false, N.length > 0) {
      let [, e] = N.shift();
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