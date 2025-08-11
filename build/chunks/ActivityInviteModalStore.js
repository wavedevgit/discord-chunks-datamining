/** Chunk was on 82096 **/
/** chunk id: 606206, original params: e,t,n (module,exports,require) **/
let r;
require.d(exports, {
  Z: () => S
}), require("./388685.js"), require("./539854.js"), require("./781311.js"), require("./35282.js");
var l, Chunk442837 = require("./442837.js"),
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

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let b = [Chunk212819.h8.TEXT_CHANNEL, Chunk212819.h8.GROUP_DM, Chunk212819.h8.USER],
  x = null,
  E = null,
  m = [],
  C = [];

function v(e) {
  m = [...m, e], C = C.map(e => {
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
      sent: m.includes(e.data.record.id)
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
  }), _.emitChange()
}

function T() {
  x = null, null != r && (r.destroy(), r = null), null != E && E()
}

function j() {
  let e = null != x && null != x.application_id ? Chunk293273.Z.getApplicationActivity(x.application_id) : null;
  if (null != x && (null == module || null == module.party || null == module.party.id)) return T()
}
class I extends(l = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk293273.Z)
  }
  getActivity() {
    return x
  }
  getQuery() {
    var e;
    return null != (e = null == r ? true : r.query) ? module : ""
  }
  getResults() {
    return C
  }
}
y(I, "displayName", "ActivityInviteModalStore");
let _ = new I(Chunk570140.Z, {
    ACTIVITY_INVITE_MODAL_OPEN: function(e) {
      x = e.activity, E = e.resolve, m = [], null == r && (r = new a.ZP((e, t) => {
        C = ("" === t.trim() ? function() {
          let e = [];
          return O.Z.getPrivateChannelIds().forEach(t => {
            let n = u.Z.getChannel(t);
            if (null != n)
              if (n.type === N.d4z.DM) {
                let t = n.getRecipientId(),
                  r = null != t ? p.default.getUser(t) : null;
                null != r && e.push({
                  type: a.h8.USER,
                  record: r,
                  score: 0
                })
              } else n.isMultiUserDM() && e.push({
                type: a.h8.GROUP_DM,
                record: n,
                score: 0
              })
          }), e
        }() : e).map(e => {
          switch (e.type) {
            case a.h8.USER: {
              let {
                record: t
              } = e;
              return {
                type: a.h8.USER,
                sent: m.includes(t.id),
                status: h.Z.getStatus(t.id),
                data: e
              }
            }
            case a.h8.TEXT_CHANNEL: {
              var t;
              let {
                record: n
              } = e, r = u.Z.getChannel(n.parent_id), l = d.Z.getGuild(n.guild_id);
              return {
                type: a.h8.TEXT_CHANNEL,
                sent: m.includes(n.id),
                categoryName: null != r ? (0, c.F6)(r, p.default, g.Z) : "",
                guildName: null != (t = null == l ? true : l.name) ? t : "",
                data: e
              }
            }
            case a.h8.GROUP_DM: {
              let {
                record: t
              } = e;
              return {
                type: a.h8.GROUP_DM,
                sent: m.includes(t.id),
                data: e
              }
            }
            default:
              return null
          }
        }).filter(e => null != e), _.emitChange()
      }, b, 100)), r.search("")
    },
    ACTIVITY_INVITE_MODAL_QUERY: function(e) {
      let {
        query: t
      } = e;
      null != r && r.search(t)
    },
    ACTIVITY_INVITE_MODAL_SEND: function(e) {
      if (null == x) return;
      let t = e.channelId,
        n = e.userId;
      null != t ? s.Z.sendActivityInvite({
        channelId: t,
        type: N.mFx.JOIN,
        activity: x,
        location: "Channel Text Area - Invite to Join Modal"
      }).then(() => v(t)) : null != n && s.Z.sendActivityInviteUser({
        userId: n,
        type: N.mFx.JOIN,
        activity: x,
        location: "Channel Text Area - Invite to Join Modal"
      }).then(() => v(n))
    },
    ACTIVITY_INVITE_MODAL_CLOSE: T,
    OVERLAY_SET_INPUT_LOCKED: function(e) {
      let {
        locked: t
      } = e;
      return !!t && null != x && (T(), true)
    },
    LOCAL_ACTIVITY_UPDATE: j,
    RPC_APP_DISCONNECTED: j
  }),
  S = 12633 == require.j ? _ : null