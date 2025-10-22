/** Chunk was on 79695 **/
/** chunk id: 947440, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  Z: () => J
}), require("./388685.js"), require("./539854.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk278323 = require("./278323.js"),
  Chunk224706 = require("./224706.js"),
  Chunk2052 = require("./2052.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk835473 = require("./835473.js"),
  Chunk768419 = require("./768419.js"),
  Chunk300020 = require("./300020.js"),
  Chunk456190 = require("./456190.js"),
  Chunk239470 = require("./239470.js"),
  Chunk894344 = require("./894344.jsx"),
  Chunk203777 = require("./203777.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk650774 = require("./650774.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk158776 = require("./158776.js"),
  Chunk699516 = require("./699516.js"),
  Chunk944486 = require("./944486.js"),
  Chunk885110 = require("./885110.js"),
  Chunk594174 = require("./594174.js"),
  Chunk979651 = require("./979651.js"),
  Chunk181106 = require("./181106.js"),
  Chunk5192 = require("./5192.js"),
  Chunk566620 = require("./566620.js"),
  Chunk317381 = require("./317381.js"),
  Chunk638880 = require("./638880.js"),
  Chunk790920 = require("./790920.js"),
  Chunk255621 = require("./255621.js"),
  Chunk16609 = require("./16609.js"),
  Chunk527805 = require("./527805.js"),
  Chunk620662 = require("./620662.js"),
  Chunk841784 = require("./841784.js"),
  Chunk275920 = require("./275920.js"),
  Chunk701488 = require("./701488.js"),
  Chunk981631 = require("./981631.js"),
  Chunk616922 = require("./616922.js"),
  Chunk388032 = require("./388032.jsx");

function J(t, e) {
  let {
    analyticsLocations: J
  } = (0, c.ZP)(), W = (0, l.e7)([m.default], () => m.default.getCurrentUser()), X = (0, l.e7)([T.ZP], () => T.ZP.getSelfEmbeddedActivities()), q = (0, l.Wu)([E.Z], () => E.Z.getActivities().filter(t => null == t.application_id || !(null == X ? true : X.has(t.application_id)))), $ = (0, l.Wu)([N.Z], () => null != e ? N.Z.getActivities(e.id, null == t ? true : t.getGuildId()) : [], [e, t]), z = (0, l.Wu)([T.ZP], () => {
    let i = (null == t ? true : t.id) != null ? T.ZP.getEmbeddedActivitiesForChannel(t.id) : T.i6;
    return null != e ? i.filter(t => {
      let {
        userIds: i
      } = t;
      return i.has(e.id)
    }) : i
  }, [e, t]), H = (0, l.e7)([h.Z], () => null == t || t.isPrivate() || h.Z.can(M.Plq.SEND_MESSAGES, t), [t]), B = (0, l.Wu)([P.Z], () => [...$.map(t => null != t.application_id && P.Z.getState(t.application_id, M.mFx.JOIN) === M.OcF.LOADING), ...z.map(t => P.Z.getState(t.applicationId, M.mFx.JOIN) === M.OcF.LOADING)], [$, z]), K = (0, u.Z)([...$.filter(t => (null == t ? true : t.application_id) != null).map(t => t.application_id), ...z.map(t => t.applicationId)]), Q = null == t ? true : t.id, tt = (0, l.Wu)([Z.Z, O.Z, j.Z, S.Z, g.Z, _.Z, h.Z], () => [...$.map(t => (0, L.Z)({
    user: null != e ? e : W,
    activity: t,
    application: K.find(e => (null == e ? true : e.id) === t.application_id),
    channelId: Q,
    currentUser: W,
    isEmbedded: (0, Y.Z)(t),
    ChannelStore: Z.Z,
    GuildStore: O.Z,
    GuildMemberCountStore: j.Z,
    RelationshipStore: S.Z,
    SelectedChannelStore: g.Z,
    VoiceStateStore: _.Z,
    PermissionStore: h.Z
  })), ...z.map(t => {
    let i = null != e ? e : W;
    return null != i && (0, U.ZP)({
      userId: i.id,
      application: K.find(e => (null == e ? true : e.id) === t.applicationId),
      channelId: Q,
      currentUser: W,
      isActivitiesEnabledForCurrentPlatform: (0, G.a)(),
      ChannelStore: Z.Z,
      GuildStore: O.Z,
      VoiceStateStore: _.Z,
      PermissionStore: h.Z
    }) === U.Fw.CAN_JOIN
  })], [$, K, Q, W, z, e]), te = (0, l.Wu)([s.Z, v.default], () => $.map(t => t.type === M.IIU.LISTENING && null != e ? (0, b.Z)(s.Z, v.default, e, t) : true), [e, $]), ti = (0, r.O)();
  if (!H && (null == t ? true : t.type) !== M.d4z.GUILD_VOICE) return null;
  let tn = (i, n) => {
      null != t ? o.Z.sendActivityInvite({
        type: i,
        channelId: t.id,
        activity: n,
        location: M.Sbl.CONTEXT_MENU
      }) : null != e && o.Z.sendActivityInviteUser({
        type: i,
        userId: e.id,
        activity: n,
        location: M.Sbl.CONTEXT_MENU
      })
    },
    tl = async t => {
      let i = (0, D.Z)(t, M.xjy.EMBEDDED),
        n = g.Z.getVoiceChannelId(),
        l = Z.Z.getChannel(n);
      if (await d.Z.join({
          userId: e.id,
          sessionId: t.session_id,
          applicationId: t.application_id,
          channelId: n,
          messageId: null,
          intent: k.Ws.PLAY,
          embedded: i,
          locationObject: ti.location,
          analyticsLocations: J
        }), !i) {
        var a;
        (0, V.Z)({
          type: M.q5t.JOIN,
          userId: e.id,
          guildId: null == l ? true : l.guild_id,
          channelId: n,
          channelType: null == l ? true : l.type,
          applicationId: t.application_id,
          partyId: null == (a = t.party) ? true : a.id,
          locationObject: ti.location,
          analyticsLocations: J
        })
      }
    }, ta = async e => {
      await (0, A.Z)({
        applicationId: e.applicationId,
        activityChannelId: null == t ? true : t.id,
        locationObject: ti.location,
        analyticsLocations: J
      })
    }, to = [];
  return null == X || X.forEach(l => {
    let o = (null == e ? true : e.id) != null && l.userIds.has(null == e ? true : e.id),
      d = h.Z.can(M.Plq.CREATE_INSTANT_INVITE, t),
      r = K.find(t => (null == t ? true : t.id) === l.applicationId);
    null != l.launchId && !o && d && null != r && to.push((0, n.jsx)(a.sNh, {
      id: "invite-to-join-embedded",
      label: F.intl.string(F.t["3fRySx"]),
      subtext: r.name,
      action: () => {
        ((l, o) => {
          let d = Z.Z.getChannel(l),
            r = null == d ? true : O.Z.getGuild(d.guild_id);
          if (null != d && null != r) {
            if (null != e) return C.pu({
              channelId: d.id,
              applicationId: o,
              userId: e.id,
              location: M.t4x.CONTEXT_MENU,
              inviteAnalyticsMetadata: {
                source: M.t4x.ACTIVITY_INVITE
              }
            });
            if (null != t && t.type === M.d4z.GUILD_VOICE) return (0, a.ZDy)(async () => {
              let {
                default: e
              } = await Promise.all([i.e("49049"), i.e("7654"), i.e("89334")]).then(i.bind(i, 560114));
              return i => {
                var l, a;
                return (0, n.jsx)(e, (l = function(t) {
                  for (var e = 1; e < arguments.length; e++) {
                    var i = null != arguments[e] ? arguments[e] : {},
                      n = Object.keys(i);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(t) {
                      return Object.getOwnPropertyDescriptor(i, t).enumerable
                    }))), n.forEach(function(e) {
                      var n;
                      n = i[e], e in t ? Object.defineProperty(t, e, {
                        value: n,
                        enumerable: true,
                        configurable: true,
                        writable: true
                      }) : t[e] = n
                    })
                  }
                  return t
                }({}, i), a = a = {
                  guild: r,
                  channel: d,
                  applicationId: o,
                  analyticsLocation: t.type === M.d4z.GUILD_VOICE ? M.ZY5.GUILD_CHANNEL : M.ZY5.DM_CHANNEL,
                  source: M.t4x.ACTIVITY_INVITE
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(a)) : (function(t, e) {
                  var i = Object.keys(t);
                  if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    i.push.apply(i, n)
                  }
                  return i
                })(Object(a)).forEach(function(t) {
                  Object.defineProperty(l, t, Object.getOwnPropertyDescriptor(a, t))
                }), l))
              }
            }, {
              modalKey: "use-activity-items-embedded-invite-modal"
            });
            if ((null == t ? true : t.id) != null) return C.sN({
              activityChannelId: d.id,
              invitedChannelId: t.id,
              applicationId: o,
              location: M.t4x.CONTEXT_MENU,
              inviteAnalyticsMetadata: {
                source: M.t4x.ACTIVITY_INVITE
              }
            })
          }
        })((0, w.p)(l.location), l.applicationId)
      }
    }, "self-embedded-".concat(l.applicationId)))
  }), q.forEach((t, i) => {
    (null == e ? true : e.id) !== v.default.getId() && (t.type === M.IIU.PLAYING && (0, D.Z)(t, M.xjy.JOIN) ? to.push((0, n.jsx)(a.sNh, {
      id: "invite-to-join",
      label: F.intl.string(F.t["3fRySx"]),
      subtext: t.name,
      action: () => tn(M.mFx.JOIN, t)
    }, "self".concat(i))) : t.type === M.IIU.LISTENING && (0, D.Z)(t, M.xjy.SYNC) && to.push((0, n.jsx)(a.sNh, {
      id: "invite-to-listen",
      label: F.intl.string(F.t["5vvGpV"]),
      subtext: t.name,
      action: () => tn(M.mFx.LISTEN, t)
    }, "self".concat(i))))
  }), to.length > 0 && to.push((0, n.jsx)(a.Clw, {}, "menu-separator")), $.forEach((i, l) => {
    let o = (0, D.Z)(i, M.xjy.EMBEDDED),
      d = (0, D.Z)(i, M.xjy.CONTEXTLESS);
    if (i.type === M.IIU.PLAYING && (0, D.Z)(i, M.xjy.JOIN) && (!o || d) && null != i.session_id && null != i.application_id)
      if (tt[l]) {
        let t = B[l];
        to.push((0, n.jsx)(a.sNh, {
          id: "join",
          label: t ? F.intl.string(F.t.bf6Ci7) : F.intl.string(F.t.VJlc0S),
          disabled: t,
          hint: t ? (0, n.jsx)(a.$jN, {
            type: a.$jN.Type.PULSING_ELLIPSIS
          }) : null,
          subtext: i.name,
          action: () => tl(i)
        }, l))
      } else to.push((0, n.jsx)(a.sNh, {
        id: "ask-to-join",
        label: F.intl.string(F.t.OKsSCR),
        subtext: i.name,
        action: () => tn(M.mFx.JOIN_REQUEST, i)
      }, l));
    else if (i.type === M.IIU.LISTENING && (0, D.Z)(i, M.xjy.SYNC) && null != te[l]) {
      let o = te[l],
        {
          playDisabled: d,
          syncDisabled: r
        } = o;
      to.push((0, n.jsx)(a.sNh, {
        id: "spotify-play-".concat(i.session_id),
        action: () => (0, f.Z)(o, R.kG.USER_ACTIVITY_PLAY),
        label: (0, p.Z)(o, R.kG.USER_ACTIVITY_PLAY),
        subtext: d ? (0, I.Z)(o, R.kG.USER_ACTIVITY_PLAY, null != t ? x.ZP.getNickname(t.guild_id, t.id, e) : true) : true,
        disabled: d
      }, "spotify-play-".concat(i.session_id)), (0, n.jsx)(a.sNh, {
        id: "spotify-sync-".concat(i.session_id),
        action: () => (0, y.Z)(o, R.kG.USER_ACTIVITY_SYNC),
        label: F.intl.string(F.t.gXYoq2),
        subtext: r ? (0, I.Z)(o, R.kG.USER_ACTIVITY_SYNC, null != t ? x.ZP.getNickname(t.guild_id, t.id, e) : true) : true,
        disabled: r
      }, "spotify-sync-".concat(i.session_id)))
    }
  }), z.forEach((t, e) => {
    var i;
    let l = t.userIds.has(null != (i = null == W ? true : W.id) ? i : M.lds),
      o = e + $.length,
      d = B[o] || l,
      r = F.intl.string(F.t["4i2vj+"]);
    l ? r = F.intl.string(F.t["0OiwfH"]) : B[o] && (r = F.intl.string(F.t.bf6Ci7));
    let c = K.find(e => (null == e ? true : e.id) === t.applicationId);
    tt[o] && null != c && to.push((0, n.jsx)(a.sNh, {
      id: "embedded-activity-join-".concat(t.applicationId),
      label: r,
      disabled: d,
      hint: B[o] ? (0, n.jsx)(a.$jN, {
        type: a.$jN.Type.PULSING_ELLIPSIS
      }) : null,
      subtext: c.name,
      action: () => ta(t)
    }, "embedded-activity-".concat(t.applicationId)))
  }), to
}