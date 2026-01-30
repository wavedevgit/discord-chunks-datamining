/** Chunk was on 97262 **/
/** chunk id: 468389, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  A: () => Q
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

function Q(e, t) {
  let {
    analyticsLocations: Q
  } = (0, c.Ay)(), X = (0, l.bG)([_.default], () => _.default.getCurrentUser()), $ = (0, l.bG)([x.Ay], () => x.Ay.getSelfEmbeddedActivities()), B = (0, l.yK)([S.A], () => S.A.getActivities().filter(e => null == e.application_id || !(null == $ ? true : $.has(e.application_id)))), H = (0, l.yK)([E.A], () => null != t ? E.A.getActivities(t.id, null == e ? true : e.getGuildId()) : [], [t, e]), q = (0, l.yK)([x.Ay], () => {
    let i = (null == e ? true : e.id) != null ? x.Ay.getEmbeddedActivitiesForChannel(e.id) : x.Am;
    return null != t ? i.filter(e => {
      let {
        userIds: i
      } = e;
      return i.has(t.id)
    }) : i
  }, [t, e]), F = (0, l.bG)([j.A], () => null == e || e.isPrivate() || j.A.can(R.xBc.SEND_MESSAGES, e), [e]), Z = (0, l.yK)([T.A], () => [...H.map(e => null != e.application_id && T.A.getState(e.application_id, R.xL.JOIN) === R.eAD.LOADING), ...q.map(e => T.A.getState(e.applicationId, R.xL.JOIN) === R.eAD.LOADING)], [H, q]), W = (0, u.A)([...H.filter(e => (null == e ? true : e.application_id) != null).map(e => e.application_id), ...q.map(e => e.applicationId)]), z = null == e ? true : e.id, ee = (0, l.yK)([v.A, g.A, O.A, m.A, h.A, N.A, j.A], () => [...H.map(e => (0, U.A)({
    user: null != t ? t : X,
    activity: e,
    application: W.find(t => (null == t ? true : t.id) === e.application_id),
    channelId: z,
    currentUser: X,
    isEmbedded: (0, Y.A)(e),
    ChannelStore: v.A,
    GuildStore: g.A,
    GuildMemberCountStore: O.A,
    RelationshipStore: m.A,
    SelectedChannelStore: h.A,
    VoiceStateStore: N.A,
    PermissionStore: j.A
  })), ...q.map(e => {
    let i = null != t ? t : X;
    return null != i && (0, G.Ay)({
      userId: i.id,
      application: W.find(t => (null == t ? true : t.id) === e.applicationId),
      channelId: z,
      currentUser: X,
      isActivitiesEnabledForCurrentPlatform: (0, L.A)(),
      ChannelStore: v.A,
      GuildStore: g.A,
      VoiceStateStore: N.A,
      PermissionStore: j.A
    }) === G.Gy.CAN_JOIN
  })], [H, W, z, X, q, t]), et = (0, l.yK)([s.A, f.default], () => H.map(e => e.type === R.$pd.LISTENING && null != t ? (0, b.A)(s.A, f.default, t, e) : true), [t, H]), ei = (0, d.p)();
  if (!F && (null == e ? true : e.type) !== R.rbe.GUILD_VOICE) return null;
  let en = (i, n) => {
      null != e ? o.A.sendActivityInvite({
        type: i,
        channelId: e.id,
        activity: n,
        location: R.ThZ.CONTEXT_MENU
      }) : null != t && o.A.sendActivityInviteUser({
        type: i,
        userId: t.id,
        activity: n,
        location: R.ThZ.CONTEXT_MENU
      })
    },
    el = async e => {
      let i = (0, V.A)(e, R.jUm.EMBEDDED),
        n = h.A.getVoiceChannelId(),
        l = v.A.getChannel(n);
      if (await r.A.join({
          userId: t.id,
          sessionId: e.session_id,
          applicationId: e.application_id,
          channelId: n,
          messageId: null,
          intent: M.W9.PLAY,
          embedded: i,
          locationObject: ei.location,
          analyticsLocations: Q
        }), !i) {
        var a;
        (0, k.A)({
          type: R.UqL.JOIN,
          userId: t.id,
          guildId: null == l ? true : l.guild_id,
          channelId: n,
          channelType: null == l ? true : l.type,
          applicationId: e.application_id,
          partyId: null == (a = e.party) ? true : a.id,
          locationObject: ei.location,
          analyticsLocations: Q
        })
      }
    }, ea = async t => {
      await (0, D.A)({
        applicationId: t.applicationId,
        activityChannelId: null == e ? true : e.id,
        locationObject: ei.location,
        analyticsLocations: Q
      })
    }, eo = [];
  return null == $ || $.forEach(l => {
    let o = (null == t ? true : t.id) != null && l.userIds.has(null == t ? true : t.id),
      r = j.A.can(R.xBc.CREATE_INSTANT_INVITE, e),
      d = W.find(e => (null == e ? true : e.id) === l.applicationId);
    null != l.launchId && !o && r && null != d && eo.push((0, n.jsx)(a.Drp, {
      id: "invite-to-join-embedded",
      label: K.intl.string(K.t["3fRySx"]),
      subtext: d.name,
      action: () => {
        ((l, o) => {
          let r = v.A.getChannel(l),
            d = null == r ? true : g.A.getGuild(r.guild_id);
          if (null != r && null != d) {
            if (null != t) return P.Ue({
              channelId: r.id,
              applicationId: o,
              userId: t.id,
              location: R.PE1.CONTEXT_MENU,
              inviteAnalyticsMetadata: {
                source: R.PE1.ACTIVITY_INVITE
              }
            });
            if (null != e && e.type === R.rbe.GUILD_VOICE) return (0, a.mMO)(async () => {
              let {
                default: t
              } = await Promise.all([i.e("43600"), i.e("28136"), i.e("88332"), i.e("92779")]).then(i.bind(i, 234355));
              return i => {
                var l, a;
                return (0, n.jsx)(t, (l = function(e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var i = null != arguments[t] ? arguments[t] : {},
                      n = Object.keys(i);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(e) {
                      return Object.getOwnPropertyDescriptor(i, e).enumerable
                    }))), n.forEach(function(t) {
                      var n;
                      n = i[t], t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: true,
                        configurable: true,
                        writable: true
                      }) : e[t] = n
                    })
                  }
                  return e
                }({}, i), a = a = {
                  guild: d,
                  channel: r,
                  applicationId: o,
                  analyticsLocation: e.type === R.rbe.GUILD_VOICE ? R.liQ.GUILD_CHANNEL : R.liQ.DM_CHANNEL,
                  source: R.PE1.ACTIVITY_INVITE
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
                  var i = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    i.push.apply(i, n)
                  }
                  return i
                })(Object(a)).forEach(function(e) {
                  Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(a, e))
                }), l))
              }
            }, {
              modalKey: "use-activity-items-embedded-invite-modal"
            });
            if ((null == e ? true : e.id) != null) return P.tk({
              activityChannelId: r.id,
              invitedChannelId: e.id,
              applicationId: o,
              location: R.PE1.CONTEXT_MENU,
              inviteAnalyticsMetadata: {
                source: R.PE1.ACTIVITY_INVITE
              }
            })
          }
        })((0, w.H)(l.location), l.applicationId)
      }
    }, "self-embedded-".concat(l.applicationId)))
  }), B.forEach((e, i) => {
    (null == t ? true : t.id) !== f.default.getId() && (e.type === R.$pd.PLAYING && (0, V.A)(e, R.jUm.JOIN) ? eo.push((0, n.jsx)(a.Drp, {
      id: "invite-to-join",
      label: K.intl.string(K.t["3fRySx"]),
      subtext: e.name,
      action: () => en(R.xL.JOIN, e)
    }, "self".concat(i))) : e.type === R.$pd.LISTENING && (0, V.A)(e, R.jUm.SYNC) && eo.push((0, n.jsx)(a.Drp, {
      id: "invite-to-listen",
      label: K.intl.string(K.t["5vvGpV"]),
      subtext: e.name,
      action: () => en(R.xL.LISTEN, e)
    }, "self".concat(i))))
  }), eo.length > 0 && eo.push((0, n.jsx)(a.bXX, {}, "menu-separator")), H.forEach((i, l) => {
    let o = (0, V.A)(i, R.jUm.EMBEDDED),
      r = (0, V.A)(i, R.jUm.CONTEXTLESS);
    if (i.type === R.$pd.PLAYING && (0, V.A)(i, R.jUm.JOIN) && (!o || r) && null != i.session_id && null != i.application_id)
      if (ee[l]) {
        let e = Z[l];
        eo.push((0, n.jsx)(a.Drp, {
          id: "join",
          label: e ? K.intl.string(K.t.bf6Ci7) : K.intl.string(K.t.VJlc0S),
          disabled: e,
          loading: e,
          subtext: i.name,
          action: () => el(i)
        }, l))
      } else eo.push((0, n.jsx)(a.Drp, {
        id: "ask-to-join",
        label: K.intl.string(K.t.OKsSCR),
        subtext: i.name,
        action: () => en(R.xL.JOIN_REQUEST, i)
      }, l));
    else if (i.type === R.$pd.LISTENING && (0, V.A)(i, R.jUm.SYNC) && null != et[l]) {
      let o = et[l],
        {
          playDisabled: r,
          syncDisabled: d
        } = o;
      eo.push((0, n.jsx)(a.Drp, {
        id: "spotify-play-".concat(i.session_id),
        action: () => (0, I.A)(o, J.Qp.USER_ACTIVITY_PLAY),
        label: (0, p.A)(o, J.Qp.USER_ACTIVITY_PLAY),
        subtext: r ? (0, A.A)(o, J.Qp.USER_ACTIVITY_PLAY, null != e ? C.Ay.getNickname(e.guild_id, e.id, t) : true) : true,
        disabled: r
      }, "spotify-play-".concat(i.session_id)), (0, n.jsx)(a.Drp, {
        id: "spotify-sync-".concat(i.session_id),
        action: () => (0, y.A)(o, J.Qp.USER_ACTIVITY_SYNC),
        label: K.intl.string(K.t.gXYoq2),
        subtext: d ? (0, A.A)(o, J.Qp.USER_ACTIVITY_SYNC, null != e ? C.Ay.getNickname(e.guild_id, e.id, t) : true) : true,
        disabled: d
      }, "spotify-sync-".concat(i.session_id)))
    }
  }), q.forEach((e, t) => {
    var i;
    let l = e.userIds.has(null != (i = null == X ? true : X.id) ? i : R.dJq),
      o = t + H.length,
      r = Z[o] || l,
      d = K.intl.string(K.t["4i2vj+"]);
    l ? d = K.intl.string(K.t["0OiwfH"]) : Z[o] && (d = K.intl.string(K.t.bf6Ci7));
    let c = W.find(t => (null == t ? true : t.id) === e.applicationId);
    ee[o] && null != c && eo.push((0, n.jsx)(a.Drp, {
      id: "embedded-activity-join-".concat(e.applicationId),
      label: d,
      disabled: r,
      loading: Z[o],
      subtext: c.name,
      action: () => ea(e)
    }, "embedded-activity-".concat(e.applicationId)))
  }), eo
}