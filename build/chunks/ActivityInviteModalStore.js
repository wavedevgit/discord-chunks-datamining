/** Chunk was on 11010 **/
/** chunk id: 606206, original params: e,t,n (module,exports,require) **/
let r;
require.d(exports, {
  Z: () => j
}), require("./388685.js"), require("./539854.js"), require("./781311.js"), require("./35282.js");
var i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk278323 = require("./278323.js"),
  Chunk212819 = require("./212819.js"),
  Chunk933557 = require("./933557.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk293273 = require("./293273.js"),
  Chunk158776 = require("./158776.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk55589 = require("./55589.js"),
  Chunk981631 = require("./981631.js");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let E = [Chunk212819.h8.TEXT_CHANNEL, Chunk212819.h8.GROUP_DM, Chunk212819.h8.USER],
  y = null,
  _ = null,
  O = [],
  C = [];

function S(e) {
  O = [...O, e], C = C.map(e => {
    var t, n;
    return t = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          v(e, t, n[t])
        })
      }
      return e
    }({}, e), n = n = {
      sent: O.includes(e.data.record.id)
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
  }), T.emitChange()
}

function x() {
  y = null, null != r && (r.destroy(), r = null), null != _ && _()
}

function I() {
  let e = null != y && null != y.application_id ? f.Z.getApplicationActivity(y.application_id) : null;
  if (null != y && (null == e || null == e.party || null == e.party.id)) return x()
}
class N extends(i = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(u.Z, d.Z, f.Z, p.Z, b.Z, m.default)
  }
  getActivity() {
    return y
  }
  getQuery() {
    var e;
    return null != (e = null == r ? true : r.query) ? e : ""
  }
  getResults() {
    return C
  }
}
v(N, "displayName", "ActivityInviteModalStore");
let T = new N(Chunk570140.Z, {
    ACTIVITY_INVITE_MODAL_OPEN: function(e) {
      y = e.activity, _ = e.resolve, O = [], null == r && (r = new c.ZP((e, t) => {
        C = ("" === t.trim() ? function() {
          let e = [];
          return b.Z.getPrivateChannelIds().forEach(t => {
            let n = u.Z.getChannel(t);
            if (null != n)
              if (n.type === h.d4z.DM) {
                let t = n.getRecipientId(),
                  r = null != t ? m.default.getUser(t) : null;
                null != r && e.push({
                  type: c.h8.USER,
                  record: r,
                  score: 0
                })
              } else n.isMultiUserDM() && e.push({
                type: c.h8.GROUP_DM,
                record: n,
                score: 0
              })
          }), e
        }() : e).map(e => {
          switch (e.type) {
            case c.h8.USER: {
              let {
                record: t
              } = e;
              return {
                type: c.h8.USER,
                sent: O.includes(t.id),
                status: p.Z.getStatus(t.id),
                data: e
              }
            }
            case c.h8.TEXT_CHANNEL: {
              var t;
              let {
                record: n
              } = e, r = u.Z.getChannel(n.parent_id), i = d.Z.getGuild(n.guild_id);
              return {
                type: c.h8.TEXT_CHANNEL,
                sent: O.includes(n.id),
                categoryName: null != r ? (0, s.F6)(r, m.default, g.Z) : "",
                guildName: null != (t = null == i ? true : i.name) ? t : "",
                data: e
              }
            }
            case c.h8.GROUP_DM: {
              let {
                record: t
              } = e;
              return {
                type: c.h8.GROUP_DM,
                sent: O.includes(t.id),
                data: e
              }
            }
            default:
              return null
          }
        }).filter(e => null != e), T.emitChange()
      }, E, 100)), r.search("")
    },
    ACTIVITY_INVITE_MODAL_QUERY: function(e) {
      let {
        query: t
      } = e;
      null != r && r.search(t)
    },
    ACTIVITY_INVITE_MODAL_SEND: function(e) {
      if (null == y) return;
      let t = e.channelId,
        n = e.userId;
      null != t ? o.Z.sendActivityInvite({
        channelId: t,
        type: h.mFx.JOIN,
        activity: y,
        location: "Channel Text Area - Invite to Join Modal"
      }).then(() => S(t)) : null != n && o.Z.sendActivityInviteUser({
        userId: n,
        type: h.mFx.JOIN,
        activity: y,
        location: "Channel Text Area - Invite to Join Modal"
      }).then(() => S(n))
    },
    ACTIVITY_INVITE_MODAL_CLOSE: x,
    OVERLAY_SET_INPUT_LOCKED: function(e) {
      let {
        locked: t
      } = e;
      return !!t && null != y && (x(), true)
    },
    LOCAL_ACTIVITY_UPDATE: I,
    RPC_APP_DISCONNECTED: I
  }),
  j = 12633 == require.j ? T : null