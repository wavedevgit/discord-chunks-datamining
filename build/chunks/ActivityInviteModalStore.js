/** Chunk was on 61344 **/
/** chunk id: 921955, original params: e,t,n (module,exports,require) **/
let l;
require.d(exports, {
  A: () => T
}), require("./896048.js"), require("./321073.js"), require("./733351.js"), require("./747238.js");
var r, Chunk311907 = require("./311907.js"),
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

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let _ = [Chunk629357.rD.TEXT_CHANNEL, Chunk629357.rD.GROUP_DM, Chunk629357.rD.USER],
  y = null,
  v = null,
  E = [],
  O = [];

function C(e) {
  E = [...E, e], O = O.map(e => {
    var t, n;
    return t = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), l.forEach(function(t) {
          b(e, t, n[t])
        })
      }
      return e
    }({}, e), n = n = {
      sent: E.includes(e.data.record.id)
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        n.push.apply(n, l)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t
  }), I.emitChange()
}

function S() {
  y = null, null != l && (l.destroy(), l = null), null != v && v()
}

function x() {
  let e = null != y && null != y.application_id ? h.A.getApplicationActivity(y.application_id) : null;
  if (null != y && (null == e || null == e.party || null == e.party.id)) return S()
}
class j extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(u.A, d.A, h.A, p.A, g.A, m.default)
  }
  getActivity() {
    return y
  }
  getQuery() {
    var e;
    return null != (e = null == l ? true : l.query) ? e : ""
  }
  getResults() {
    return O
  }
}
b(j, "displayName", "ActivityInviteModalStore");
let I = new j(Chunk73153.h, {
    ACTIVITY_INVITE_MODAL_OPEN: function(e) {
      y = e.activity, v = e.resolve, E = [], null == l && (l = new o.Ay((e, t) => {
        let n;
        O = ("" === t.trim() ? (n = [], g.A.getPrivateChannelIds().forEach(e => {
          let t = u.A.getChannel(e);
          if (null != t)
            if (t.type === A.rbe.DM) {
              let e = t.getRecipientId(),
                l = null != e ? m.default.getUser(e) : null;
              null != l && n.push({
                type: o.rD.USER,
                record: l,
                score: 0
              })
            } else t.isMultiUserDM() && n.push({
              type: o.rD.GROUP_DM,
              record: t,
              score: 0
            })
        }), n) : e).map(e => {
          switch (e.type) {
            case o.rD.USER: {
              let {
                record: t
              } = e;
              return {
                type: o.rD.USER,
                sent: E.includes(t.id),
                status: p.A.getStatus(t.id),
                data: e
              }
            }
            case o.rD.TEXT_CHANNEL: {
              var t;
              let {
                record: n
              } = e, l = u.A.getChannel(n.parent_id), r = d.A.getGuild(n.guild_id);
              return {
                type: o.rD.TEXT_CHANNEL,
                sent: E.includes(n.id),
                categoryName: null != l ? (0, c.m1)(l, m.default, f.A) : "",
                guildName: null != (t = null == r ? true : r.name) ? t : "",
                data: e
              }
            }
            case o.rD.GROUP_DM: {
              let {
                record: t
              } = e;
              return {
                type: o.rD.GROUP_DM,
                sent: E.includes(t.id),
                data: e
              }
            }
            default:
              return null
          }
        }).filter(e => null != e), I.emitChange()
      }, _, 100)), l.search("")
    },
    ACTIVITY_INVITE_MODAL_QUERY: function(e) {
      let {
        query: t
      } = e;
      null != l && l.search(t)
    },
    ACTIVITY_INVITE_MODAL_SEND: function(e) {
      if (null == y) return;
      let t = e.channelId,
        n = e.userId;
      null != t ? s.A.sendActivityInvite({
        channelId: t,
        type: A.xL.JOIN,
        activity: y,
        location: "Channel Text Area - Invite to Join Modal"
      }).then(() => C(t)) : null != n && s.A.sendActivityInviteUser({
        userId: n,
        type: A.xL.JOIN,
        activity: y,
        location: "Channel Text Area - Invite to Join Modal"
      }).then(() => C(n))
    },
    ACTIVITY_INVITE_MODAL_CLOSE: S,
    OVERLAY_SET_INPUT_LOCKED: function(e) {
      let {
        locked: t
      } = e;
      return !!t && null != y && (S(), true)
    },
    LOCAL_ACTIVITY_UPDATE: x,
    RPC_APP_DISCONNECTED: x
  }),
  T = 21552 == require.j ? I : null