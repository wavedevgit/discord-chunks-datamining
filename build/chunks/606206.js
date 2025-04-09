/** Chunk was on 79921 **/
let r;
l.d(t, {
  Z: () => T
}), l(388685), l(539854), l(781311), l(415506), l(35282);
var n, s = l(442837),
  a = l(570140),
  u = l(278323),
  i = l(212819),
  c = l(933557),
  o = l(592125),
  d = l(430824),
  h = l(293273),
  p = l(158776),
  _ = l(699516),
  m = l(594174),
  N = l(55589),
  g = l(981631);

function E(e, t, l) {
  return t in e ? Object.defineProperty(e, t, {
    value: l,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = l, e
}
let C = [i.h8.TEXT_CHANNEL, i.h8.GROUP_DM, i.h8.USER],
  y = null,
  f = null,
  v = [],
  x = [];

function I(e) {
  v = [...v, e], x = x.map(e => {
    var t, l;
    return t = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var l = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(l);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(l).filter(function(e) {
          return Object.getOwnPropertyDescriptor(l, e).enumerable
        }))), r.forEach(function(t) {
          E(e, t, l[t])
        })
      }
      return e
    }({}, e), l = l = {
      sent: v.includes(e.data.record.id)
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
      var l = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        l.push.apply(l, r)
      }
      return l
    })(Object(l)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(l, e))
    }), t
  }), j.emitChange()
}

function O() {
  y = null, null != r && (r.destroy(), r = null), null != f && f()
}

function S() {
  let e = null != y && null != y.application_id ? h.Z.getApplicationActivity(y.application_id) : null;
  if (null != y && (null == e || null == e.party || null == e.party.id)) return O()
}
class b extends(n = s.ZP.Store) {
  initialize() {
    this.waitFor(h.Z)
  }
  getActivity() {
    return y
  }
  getQuery() {
    var e;
    return null != (e = null == r ? void 0 : r.query) ? e : ""
  }
  getResults() {
    return x
  }
}
E(b, "displayName", "ActivityInviteModalStore");
let j = new b(a.Z, {
    ACTIVITY_INVITE_MODAL_OPEN: function(e) {
      y = e.activity, f = e.resolve, v = [], null == r && (r = new i.ZP((e, t) => {
        x = ("" === t.trim() ? function() {
          let e = [];
          return N.Z.getPrivateChannelIds().forEach(t => {
            let l = o.Z.getChannel(t);
            if (null != l)
              if (l.type === g.d4z.DM) {
                let t = l.getRecipientId(),
                  r = null != t ? m.default.getUser(t) : null;
                null != r && e.push({
                  type: i.h8.USER,
                  record: r,
                  score: 0
                })
              } else l.isMultiUserDM() && e.push({
                type: i.h8.GROUP_DM,
                record: l,
                score: 0
              })
          }), e
        }() : e).map(e => {
          switch (e.type) {
            case i.h8.USER: {
              let {
                record: t
              } = e;
              return {
                type: i.h8.USER,
                sent: v.includes(t.id),
                status: p.Z.getStatus(t.id),
                data: e
              }
            }
            case i.h8.TEXT_CHANNEL: {
              let {
                record: t
              } = e, l = o.Z.getChannel(t.parent_id), r = d.Z.getGuild(t.guild_id);
              return {
                type: i.h8.TEXT_CHANNEL,
                sent: v.includes(t.id),
                categoryName: null != l ? (0, c.F6)(l, m.default, _.Z) : "",
                guildName: null != r ? r.toString() : "",
                data: e
              }
            }
            case i.h8.GROUP_DM: {
              let {
                record: t
              } = e;
              return {
                type: i.h8.GROUP_DM,
                sent: v.includes(t.id),
                data: e
              }
            }
            default:
              throw Error("Unknown Result Type: ".concat(e.type))
          }
        }), j.emitChange()
      }, C, 100)), r.search("")
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
        l = e.userId;
      null != t ? u.Z.sendActivityInvite({
        channelId: t,
        type: g.mFx.JOIN,
        activity: y,
        location: "Channel Text Area - Invite to Join Modal"
      }).then(() => I(t)) : null != l && u.Z.sendActivityInviteUser({
        userId: l,
        type: g.mFx.JOIN,
        activity: y,
        location: "Channel Text Area - Invite to Join Modal"
      }).then(() => I(l))
    },
    ACTIVITY_INVITE_MODAL_CLOSE: O,
    OVERLAY_SET_INPUT_LOCKED: function(e) {
      let {
        locked: t
      } = e;
      return !!t && null != y && (O(), !0)
    },
    LOCAL_ACTIVITY_UPDATE: S,
    RPC_APP_DISCONNECTED: S
  }),
  T = j