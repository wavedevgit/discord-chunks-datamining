/** Chunk was on 56710 **/
/** chunk id: 590965, original params: e,t,n (module,exports,require) **/
let r;
require.d(exports, {
  Z: () => I
}), require("./388685.js"), require("./539854.js");
var i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk413605 = require("./413605.js"),
  Chunk703656 = require("./703656.js"),
  Chunk131704 = require("./131704.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk701190 = require("./701190.js"),
  Chunk496675 = require("./496675.js"),
  Chunk594174 = require("./594174.js"),
  Chunk411198 = require("./411198.js"),
  Chunk998502 = require("./998502.js"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js");

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      O(e, t, n[t])
    })
  }
  return e
}
let v = Chunk981631.IlC.APP,
  j = false,
  C = false,
  x = [];

function E() {
  j = true
}
class S extends(i = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk592125.Z, Chunk430824.Z, Chunk701190.Z, Chunk496675.Z, Chunk594174.default)
  }
  isOpen() {
    let e = __OVERLAY__ ? Chunk981631.IlC.OVERLAY : Chunk981631.IlC.APP;
    return !!(j && x.length > 0 && v === module)
  }
  getProps() {
    return {
      invite: x.length > 0 ? x[0][0] : null,
      error: null != r && "" !== r ? r : null,
      submitting: C
    }
  }
}
O(S, "displayName", "InviteModalStore");
let I = new S(Chunk570140.Z, {
  OVERLAY_INITIALIZE: E,
  CONNECTION_OPEN: E,
  CONNECTION_CLOSED: function() {
    j = false
  },
  INVITE_MODAL_OPEN: function(e) {
    let t = e.invite;
    if (null == t) returnfalse;
    if (t.state !== b.r2o.EXPIRED && t.state !== b.r2o.BANNED && t.state !== b.r2o.ERROR) {
      let {
        channel: e,
        guild: n
      } = t;
      if (null == e) returnfalse;
      if ((0, c.bc)(e.type)) {
        if (null != u.Z.getChannel(e.id)) return (0, s.XU)(b.ME, e.id), m.ZP.focus(), false
      } else {
        if (null == n) returnfalse;
        if (null != d.Z.getGuild(n.id) && !(0, a.TY)(t)) {
          let e = function(e) {
            if ((0, a.W6)(e)) return _.oC.ROLE_SUBSCRIPTIONS;
            let {
              channel: t
            } = e;
            if (null != t) {
              let e = u.Z.getChannel(t.id);
              if (h.Z.can(b.Plq.VIEW_CHANNEL, e)) return t.id
            }
            return null
          }(t);
          return (0, s.XU)(n.id, e), m.ZP.focus(), false
        }
      }
    }
    if (x.some(e => {
        let [n] = e;
        return n.code === t.code
      })) returnfalse;
    v = e.context, C = false;
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
      } = e, p = {
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
      return null != c && (p.channel = y({}, c)), null != u && (p.guild = (0, g.Qs)(u)), null != e.inviter && (p.inviter = y({}, e.inviter)), p
    }(t);
    x.push([n, e.resolve])
  },
  INVITE_MODAL_CLOSE: function() {
    if (r = null, C = false, x.length > 0) {
      let [, e] = x.shift();
      null != module && module()
    }
  },
  INVITE_ACCEPT: function() {
    C = true
  },
  INVITE_MODAL_ERROR: function(e) {
    let {
      message: t
    } = e;
    r = t, C = false
  }
})