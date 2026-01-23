/** Chunk was on 31748 **/
/** chunk id: 921955, original params: e,t,n (module,exports,require) **/
let r;
require.d(exports, {
  A: () => j
}), require("./896048.js"), require("./321073.js"), require("./733351.js"), require("./747238.js");
var l, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk308368 = require("./308368.js"),
  Chunk629357 = require("./629357.js"),
  Chunk47167 = require("./47167.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk375492 = require("./375492.js"),
  Chunk290863 = require("./290863.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk645959 = require("./645959.js"),
  Chunk652215 = require("./652215.js");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let A = [Chunk629357.rD.TEXT_CHANNEL, Chunk629357.rD.GROUP_DM, Chunk629357.rD.USER],
  b = null,
  E = null,
  v = [],
  O = [];

function x(e) {
  v = [...v, e], O = O.map(e => {
    var t, n;
    return t = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          y(e, t, n[t])
        })
      }
      return e
    }({}, e), n = n = {
      sent: v.includes(e.data.record.id)
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t
  }), I.emitChange()
}

function S() {
  b = null, null != r && (r.destroy(), r = null), null != E && E()
}

function C() {
  let e = null != b && null != b.application_id ? f.A.getApplicationActivity(b.application_id) : null;
  if (null != b && (null == e || null == e.party || null == e.party.id)) return S()
}
class N extends(l = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(u.A, d.A, f.A, p.A, _.A, m.default)
  }
  getActivity() {
    return b
  }
  getQuery() {
    var e;
    return null != (e = null == r ? true : r.query) ? e : ""
  }
  getResults() {
    return O
  }
}
y(N, "displayName", "ActivityInviteModalStore");
let I = new N(Chunk73153.h, {
    ACTIVITY_INVITE_MODAL_OPEN: function(e) {
      b = e.activity, E = e.resolve, v = [], null == r && (r = new s.Ay((e, t) => {
        let n;
        O = ("" === t.trim() ? (n = [], _.A.getPrivateChannelIds().forEach(e => {
          let t = u.A.getChannel(e);
          if (null != t)
            if (t.type === h.rbe.DM) {
              let e = t.getRecipientId(),
                r = null != e ? m.default.getUser(e) : null;
              null != r && n.push({
                type: s.rD.USER,
                record: r,
                score: 0
              })
            } else t.isMultiUserDM() && n.push({
              type: s.rD.GROUP_DM,
              record: t,
              score: 0
            })
        }), n) : e).map(e => {
          switch (e.type) {
            case s.rD.USER: {
              let {
                record: t
              } = e;
              return {
                type: s.rD.USER,
                sent: v.includes(t.id),
                status: p.A.getStatus(t.id),
                data: e
              }
            }
            case s.rD.TEXT_CHANNEL: {
              var t;
              let {
                record: n
              } = e, r = u.A.getChannel(n.parent_id), l = d.A.getGuild(n.guild_id);
              return {
                type: s.rD.TEXT_CHANNEL,
                sent: v.includes(n.id),
                categoryName: null != r ? (0, c.m1)(r, m.default, g.A) : "",
                guildName: null != (t = null == l ? true : l.name) ? t : "",
                data: e
              }
            }
            case s.rD.GROUP_DM: {
              let {
                record: t
              } = e;
              return {
                type: s.rD.GROUP_DM,
                sent: v.includes(t.id),
                data: e
              }
            }
            default:
              return null
          }
        }).filter(e => null != e), I.emitChange()
      }, A, 100)), r.search("")
    },
    ACTIVITY_INVITE_MODAL_QUERY: function(e) {
      let {
        query: t
      } = e;
      null != r && r.search(t)
    },
    ACTIVITY_INVITE_MODAL_SEND: function(e) {
      if (null == b) return;
      let t = e.channelId,
        n = e.userId;
      null != t ? o.A.sendActivityInvite({
        channelId: t,
        type: h.xL.JOIN,
        activity: b,
        location: "Channel Text Area - Invite to Join Modal"
      }).then(() => x(t)) : null != n && o.A.sendActivityInviteUser({
        userId: n,
        type: h.xL.JOIN,
        activity: b,
        location: "Channel Text Area - Invite to Join Modal"
      }).then(() => x(n))
    },
    ACTIVITY_INVITE_MODAL_CLOSE: S,
    OVERLAY_SET_INPUT_LOCKED: function(e) {
      let {
        locked: t
      } = e;
      return !!t && null != b && (S(), true)
    },
    LOCAL_ACTIVITY_UPDATE: C,
    RPC_APP_DISCONNECTED: C
  }),
  j = 21552 == require.j ? I : null