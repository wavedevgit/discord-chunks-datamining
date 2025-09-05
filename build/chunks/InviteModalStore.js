/** Chunk was on 27978 **/
/** chunk id: 590965, original params: e,t,n (module,exports,require) **/
let r;
require.d(exports, {
  Z: () => y
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

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      E(e, t, n[t])
    })
  }
  return e
}
let j = Chunk981631.IlC.APP,
  b = false,
  I = false,
  N = [];

function O() {
  b = true
}
class S extends(i = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk430824.Z, Chunk701190.Z, Chunk594174.default)
  }
  isOpen() {
    let e = __OVERLAY__ ? Chunk981631.IlC.OVERLAY : Chunk981631.IlC.APP;
    return !!(b && N.length > 0 && j === module)
  }
  getProps() {
    return {
      invite: N.length > 0 ? N[0][0] : null,
      error: null != r && "" !== r ? r : null,
      submitting: I
    }
  }
}
E(S, "displayName", "InviteModalStore");
let y = new S(Chunk570140.Z, {
  OVERLAY_INITIALIZE: O,
  CONNECTION_OPEN: O,
  CONNECTION_CLOSED: function() {
    b = false
  },
  INVITE_MODAL_OPEN: function(e) {
    let t = e.invite;
    if (null == t) returnfalse;
    if (t.state !== _.r2o.EXPIRED && t.state !== _.r2o.BANNED && t.state !== _.r2o.ERROR) {
      let {
        channel: e,
        guild: n
      } = t;
      if (null == e) returnfalse;
      if ((0, c.bc)(e.type)) {
        if (null != u.Z.getChannel(e.id)) return (0, a.XU)(_.ME, e.id), m.ZP.focus(), false
      } else {
        if (null == n) returnfalse;
        if (null != d.Z.getGuild(n.id) && !(0, o.TY)(t)) {
          let e = function(e) {
            if ((0, o.W6)(e)) return x.oC.ROLE_SUBSCRIPTIONS;
            let {
              channel: t
            } = e;
            if (null != t) {
              let e = u.Z.getChannel(t.id);
              if (f.Z.can(_.Plq.VIEW_CHANNEL, e)) return t.id
            }
            return null
          }(t);
          return (0, a.XU)(n.id, e), m.ZP.focus(), false
        }
      }
    }
    if (N.some(e => {
        let [n] = e;
        return n.code === t.code
      })) returnfalse;
    j = e.context, I = false;
    let n = function(e) {
      let {
        approximate_member_count: t,
        approximate_presence_count: n,
        code: r,
        state: i,
        target_type: l,
        target_user: s,
        target_application: o,
        type: a,
        channel: c,
        guild: u,
        is_nickname_changeable: d
      } = e, h = {
        code: r,
        state: i,
        approximate_member_count: t,
        approximate_presence_count: n,
        target_type: l,
        target_user: s,
        target_application: o,
        type: a,
        is_nickname_changeable: d
      };
      return null != c && (h.channel = v({}, c)), null != u && (h.guild = (0, g.Qs)(u)), null != e.inviter && (h.inviter = v({}, e.inviter)), h
    }(t);
    N.push([n, e.resolve])
  },
  INVITE_MODAL_CLOSE: function() {
    if (r = null, I = false, N.length > 0) {
      let [, e] = N.shift();
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