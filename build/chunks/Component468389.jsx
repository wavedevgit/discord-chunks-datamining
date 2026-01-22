/** Chunk was on 97262 **/
/** chunk id: 468389, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  A: () => K
}), require("./896048.js"), require("./321073.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk308368 = require("./308368.js"),
  Chunk544420 = require("./544420.js"),
  Chunk212245 = require("./212245.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk429913 = require("./429913.js"),
  Chunk655116 = require("./655116.js"),
  Chunk160768 = require("./160768.js"),
  Chunk341335 = require("./341335.js"),
  Chunk286617 = require("./286617.js"),
  Chunk533207 = require("./533207.jsx"),
  Chunk881335 = require("./881335.js"),
  Chunk961350 = require("./961350.js"),
  Chunk734057 = require("./734057.js"),
  Chunk498642 = require("./498642.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk290863 = require("./290863.js"),
  Chunk994500 = require("./994500.js"),
  Chunk309010 = require("./309010.js"),
  Chunk461213 = require("./461213.js"),
  Chunk287809 = require("./287809.js"),
  Chunk977997 = require("./977997.js"),
  Chunk689168 = require("./689168.js"),
  Chunk562153 = require("./562153.js"),
  Chunk795816 = require("./795816.js"),
  Chunk933958 = require("./933958.js"),
  Chunk447031 = require("./447031.js"),
  Chunk170148 = require("./170148.js"),
  Chunk902169 = require("./902169.js"),
  Chunk969151 = require("./969151.js"),
  Chunk550151 = require("./550151.js"),
  Chunk833349 = require("./833349.js"),
  Chunk765379 = require("./765379.js"),
  Chunk946255 = require("./946255.js"),
  Chunk360469 = require("./360469.js"),
  Chunk652215 = require("./652215.js"),
  Chunk272984 = require("./272984.js"),
  Chunk985018 = require("./985018.jsx");

function K(t, e) {
  let {
    analyticsLocations: K
  } = (0, c.Ay)(), Q = (0, l.bG)([_.default], () => _.default.getCurrentUser()), X = (0, l.bG)([x.Ay], () => x.Ay.getSelfEmbeddedActivities()), B = (0, l.yK)([S.A], () => S.A.getActivities().filter(t => null == t.application_id || !(null == X ? true : X.has(t.application_id)))), H = (0, l.yK)([g.A], () => null != e ? g.A.getActivities(e.id, null == t ? true : t.getGuildId()) : [], [e, t]), q = (0, l.yK)([x.Ay], () => {
    let i = (null == t ? true : t.id) != null ? x.Ay.getEmbeddedActivitiesForChannel(t.id) : x.Am;
    return null != e ? i.filter(t => {
      let {
        userIds: i
      } = t;
      return i.has(e.id)
    }) : i
  }, [e, t]), F = (0, l.bG)([E.A], () => null == t || t.isPrivate() || E.A.can(R.xBc.SEND_MESSAGES, t), [t]), Z = (0, l.yK)([T.A], () => [...H.map(t => null != t.application_id && T.A.getState(t.application_id, R.xL.JOIN) === R.eAD.LOADING), ...q.map(t => T.A.getState(t.applicationId, R.xL.JOIN) === R.eAD.LOADING)], [H, q]), W = (0, u.A)([...H.filter(t => (null == t ? true : t.application_id) != null).map(t => t.application_id), ...q.map(t => t.applicationId)]), z = null == t ? true : t.id, tt = (0, l.yK)([v.A, j.A, O.A, m.A, h.A, N.A, E.A], () => [...H.map(t => (0, U.A)({
    user: null != e ? e : Q,
    activity: t,
    application: W.find(e => (null == e ? true : e.id) === t.application_id),
    channelId: z,
    currentUser: Q,
    isEmbedded: (0, Y.A)(t),
    ChannelStore: v.A,
    GuildStore: j.A,
    GuildMemberCountStore: O.A,
    RelationshipStore: m.A,
    SelectedChannelStore: h.A,
    VoiceStateStore: N.A,
    PermissionStore: E.A
  })), ...q.map(t => {
    let i = null != e ? e : Q;
    return null != i && (0, w.Ay)({
      userId: i.id,
      application: W.find(e => (null == e ? true : e.id) === t.applicationId),
      channelId: z,
      currentUser: Q,
      isActivitiesEnabledForCurrentPlatform: (0, D.A)(),
      ChannelStore: v.A,
      GuildStore: j.A,
      VoiceStateStore: N.A,
      PermissionStore: E.A
    }) === w.Gy.CAN_JOIN
  })], [H, W, z, Q, q, e]), te = (0, l.yK)([s.A, f.default], () => H.map(t => t.type === R.$pd.LISTENING && null != e ? (0, y.A)(s.A, f.default, e, t) : true), [e, H]), ti = (0, d.p)();
  if (!F && (null == t ? true : t.type) !== R.rbe.GUILD_VOICE) return null;
  let tn = (i, n) => {
      null != t ? o.A.sendActivityInvite({
        type: i,
        channelId: t.id,
        activity: n,
        location: R.ThZ.CONTEXT_MENU
      }) : null != e && o.A.sendActivityInviteUser({
        type: i,
        userId: e.id,
        activity: n,
        location: R.ThZ.CONTEXT_MENU
      })
    },
    tl = async t => {
      let i = (0, V.A)(t, R.jUm.EMBEDDED),
        n = h.A.getVoiceChannelId(),
        l = v.A.getChannel(n);
      if (await r.A.join({
          userId: e.id,
          sessionId: t.session_id,
          applicationId: t.application_id,
          channelId: n,
          messageId: null,
          intent: M.W9.PLAY,
          embedded: i,
          locationObject: ti.location,
          analyticsLocations: K
        }), !i) {
        var a;
        (0, k.A)({
          type: R.UqL.JOIN,
          userId: e.id,
          guildId: null == l ? true : l.guild_id,
          channelId: n,
          channelType: null == l ? true : l.type,
          applicationId: t.application_id,
          partyId: null == (a = t.party) ? true : a.id,
          locationObject: ti.location,
          analyticsLocations: K
        })
      }
    }, ta = async e => {
      await (0, L.A)({
        applicationId: e.applicationId,
        activityChannelId: null == t ? true : t.id,
        locationObject: ti.location,
        analyticsLocations: K
      })
    }, to = [];
  return null == X || X.forEach(l => {
    let o = (null == e ? true : e.id) != null && l.userIds.has(null == e ? true : e.id),
      r = E.A.can(R.xBc.CREATE_INSTANT_INVITE, t),
      d = W.find(t => (null == t ? true : t.id) === l.applicationId);
    null != l.launchId && !o && r && null != d && to.push((0, n.jsx)(a.Drp, {
      id: "invite-to-join-embedded",
      label: $.intl.string($.t["3fRySx"]),
      subtext: d.name,
      action: () => {
        ((l, o) => {
          let r = v.A.getChannel(l),
            d = null == r ? true : j.A.getGuild(r.guild_id);
          if (null != r && null != d) {
            if (null != e) return P.Ue({
              channelId: r.id,
              applicationId: o,
              userId: e.id,
              location: R.PE1.CONTEXT_MENU,
              inviteAnalyticsMetadata: {
                source: R.PE1.ACTIVITY_INVITE
              }
            });
            if (null != t && t.type === R.rbe.GUILD_VOICE) return (0, a.mMO)(async () => {
              let {
                default: e
              } = await Promise.all([i.e("43600"), i.e("28136"), i.e("41278")]).then(i.bind(i, 234355));
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
                  guild: d,
                  channel: r,
                  applicationId: o,
                  analyticsLocation: t.type === R.rbe.GUILD_VOICE ? R.liQ.GUILD_CHANNEL : R.liQ.DM_CHANNEL,
                  source: R.PE1.ACTIVITY_INVITE
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
            if ((null == t ? true : t.id) != null) return P.tk({
              activityChannelId: r.id,
              invitedChannelId: t.id,
              applicationId: o,
              location: R.PE1.CONTEXT_MENU,
              inviteAnalyticsMetadata: {
                source: R.PE1.ACTIVITY_INVITE
              }
            })
          }
        })((0, G.H)(l.location), l.applicationId)
      }
    }, "self-embedded-".concat(l.applicationId)))
  }), B.forEach((t, i) => {
    (null == e ? true : e.id) !== f.default.getId() && (t.type === R.$pd.PLAYING && (0, V.A)(t, R.jUm.JOIN) ? to.push((0, n.jsx)(a.Drp, {
      id: "invite-to-join",
      label: $.intl.string($.t["3fRySx"]),
      subtext: t.name,
      action: () => tn(R.xL.JOIN, t)
    }, "self".concat(i))) : t.type === R.$pd.LISTENING && (0, V.A)(t, R.jUm.SYNC) && to.push((0, n.jsx)(a.Drp, {
      id: "invite-to-listen",
      label: $.intl.string($.t["5vvGpV"]),
      subtext: t.name,
      action: () => tn(R.xL.LISTEN, t)
    }, "self".concat(i))))
  }), to.length > 0 && to.push((0, n.jsx)(a.bXX, {}, "menu-separator")), H.forEach((i, l) => {
    let o = (0, V.A)(i, R.jUm.EMBEDDED),
      r = (0, V.A)(i, R.jUm.CONTEXTLESS);
    if (i.type === R.$pd.PLAYING && (0, V.A)(i, R.jUm.JOIN) && (!o || r) && null != i.session_id && null != i.application_id)
      if (tt[l]) {
        let t = Z[l];
        to.push((0, n.jsx)(a.Drp, {
          id: "join",
          label: t ? $.intl.string($.t.bf6Ci7) : $.intl.string($.t.VJlc0S),
          disabled: t,
          hint: t ? (0, n.jsx)(a.y$y, {
            type: a.y$y.Type.PULSING_ELLIPSIS
          }) : null,
          subtext: i.name,
          action: () => tl(i)
        }, l))
      } else to.push((0, n.jsx)(a.Drp, {
        id: "ask-to-join",
        label: $.intl.string($.t.OKsSCR),
        subtext: i.name,
        action: () => tn(R.xL.JOIN_REQUEST, i)
      }, l));
    else if (i.type === R.$pd.LISTENING && (0, V.A)(i, R.jUm.SYNC) && null != te[l]) {
      let o = te[l],
        {
          playDisabled: r,
          syncDisabled: d
        } = o;
      to.push((0, n.jsx)(a.Drp, {
        id: "spotify-play-".concat(i.session_id),
        action: () => (0, b.A)(o, J.Qp.USER_ACTIVITY_PLAY),
        label: (0, p.A)(o, J.Qp.USER_ACTIVITY_PLAY),
        subtext: r ? (0, A.A)(o, J.Qp.USER_ACTIVITY_PLAY, null != t ? C.Ay.getNickname(t.guild_id, t.id, e) : true) : true,
        disabled: r
      }, "spotify-play-".concat(i.session_id)), (0, n.jsx)(a.Drp, {
        id: "spotify-sync-".concat(i.session_id),
        action: () => (0, I.A)(o, J.Qp.USER_ACTIVITY_SYNC),
        label: $.intl.string($.t.gXYoq2),
        subtext: d ? (0, A.A)(o, J.Qp.USER_ACTIVITY_SYNC, null != t ? C.Ay.getNickname(t.guild_id, t.id, e) : true) : true,
        disabled: d
      }, "spotify-sync-".concat(i.session_id)))
    }
  }), q.forEach((t, e) => {
    var i;
    let l = t.userIds.has(null != (i = null == Q ? true : Q.id) ? i : R.dJq),
      o = e + H.length,
      r = Z[o] || l,
      d = $.intl.string($.t["4i2vj+"]);
    l ? d = $.intl.string($.t["0OiwfH"]) : Z[o] && (d = $.intl.string($.t.bf6Ci7));
    let c = W.find(e => (null == e ? true : e.id) === t.applicationId);
    tt[o] && null != c && to.push((0, n.jsx)(a.Drp, {
      id: "embedded-activity-join-".concat(t.applicationId),
      label: d,
      disabled: r,
      hint: Z[o] ? (0, n.jsx)(a.y$y, {
        type: a.y$y.Type.PULSING_ELLIPSIS
      }) : null,
      subtext: c.name,
      action: () => ta(t)
    }, "embedded-activity-".concat(t.applicationId)))
  }), to
}