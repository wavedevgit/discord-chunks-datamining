/** Chunk was on 21087 **/
/** chunk id: 450369, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Q: () => M,
  Z: () => H
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk990547 = require("./990547.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk475179 = require("./475179.js"),
  Chunk239091 = require("./239091.js"),
  Chunk872810 = require("./872810.js"),
  Chunk40851 = require("./40851.jsx"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk213609 = require("./213609.js"),
  Chunk358221 = require("./358221.js"),
  Chunk795318 = require("./795318.js"),
  Chunk258609 = require("./258609.js"),
  Chunk569545 = require("./569545.js"),
  Chunk102172 = require("./102172.js"),
  Chunk352978 = require("./352978.jsx"),
  Chunk880395 = require("./880395.jsx"),
  Chunk670188 = require("./670188.jsx"),
  Chunk199902 = require("./199902.js"),
  Chunk314897 = require("./314897.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk979651 = require("./979651.js"),
  Chunk88751 = require("./88751.js"),
  Chunk252132 = require("./252132.jsx"),
  Chunk248400 = require("./248400.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk354459 = require("./354459.js"),
  Chunk215097 = require("./215097.js");

function k(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function L(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let M = 16 / 9,
  U = e => {
    let {
      stageParticipant: t,
      rtcParticipant: n,
      channel: l,
      guildId: a,
      user: s,
      width: o,
      isModerator: u,
      onContextMenu: d,
      inPopout: h
    } = e, p = i.useRef(null), {
      reducedMotion: f
    } = i.useContext(c.Sfi), {
      blocked: g,
      ignored: m,
      id: b
    } = t;
    return (0, r.jsx)(C.Z, {
      targetElementRef: p,
      user: s,
      guildId: a,
      channelId: l.id,
      clickTrap: true,
      children: e => (0, r.jsx)(c.P3F, L(k({
        innerRef: p,
        onContextMenu: e => d(n, e)
      }, e), {
        children: (0, r.jsx)(N.Z, {
          participant: n,
          aspectRatio: M,
          blocked: g,
          ignored: m,
          channel: l,
          className: D.tile,
          inCall: true,
          inPopout: h,
          pulseSpeakingIndicator: !f.enabled,
          width: o,
          onContextMenu: d,
          children: u && (0, r.jsx)(R.Z, {})
        }, b)
      }))
    })
  },
  F = e => {
    let {
      stageParticipant: t,
      rtcParticipant: n,
      channel: l,
      width: a,
      isModerator: s,
      onContextMenu: d,
      inPopout: p
    } = e, {
      reducedMotion: f
    } = i.useContext(c.Sfi), {
      id: g,
      blocked: m,
      ignored: y
    } = t, v = (0, o.Wu)([E.Z], () => E.Z.getAllActiveStreams(), []), {
      selectedParticipant: C,
      largeStream: S
    } = (0, o.cj)([b.Z], () => ({
      selectedParticipant: null != l ? b.Z.getSelectedParticipant(l.id) : null,
      largeStream: null != l && b.Z.getStageStreamSize(l.id)
    })), T = i.useCallback((e, t) => {
      if (e.type === A.fO.STREAM && 0 === v.filter(t => (0, j.V9)(t) === e.id && t.state !== w.jm8.ENDED).length) {
        if (!(0, _.p9)(l, P.Z, I.Z, Z.Z, x.Z)[0]) return;
        (0, h.rn)((0, j.my)(e.id), {
          forceMultiple: t.shiftKey
        })
      }(null == C ? true : C.id) === e.id ? S ? (u.Z.selectParticipant(l.id, null), u.Z.updateStageStreamSize(l.id, false)) : u.Z.updateStageStreamSize(l.id, true) : (u.Z.updateStageStreamSize(l.id, false), u.Z.selectParticipant(l.id, e.id))
    }, [v, l, C, S]);
    return (0, r.jsx)(N.Z, {
      participant: n,
      aspectRatio: M,
      fit: n.type === A.fO.USER ? O.L.COVER : true,
      blocked: m,
      ignored: y,
      channel: l,
      className: D.tile,
      inCall: true,
      inPopout: p,
      onClick: T,
      onContextMenu: d,
      pulseSpeakingIndicator: !f.enabled,
      width: a,
      children: s && n.type === A.fO.USER && (0, r.jsx)(R.Z, {})
    }, g)
  },
  H = Chunk73800.memo(function(e) {
    var t;
    let {
      participant: i,
      channel: l,
      width: c
    } = e, {
      newestAnalyticsLocation: u
    } = (0, g.ZP)(f.Z.STAGE_TILE), h = (0, p.bp)(), x = l.getGuildId(), j = S.default.getId();
    a()(null != x, "Channel cannot be guildless");
    let {
      user: _
    } = i, O = (0, o.e7)([b.Z], () => b.Z.getParticipant(l.id, i.id), [l.id, i.id]), C = (0, o.e7)([T.ZP], () => T.ZP.isModerator(_.id, l.id), [l.id, _.id]);
    if (null == O || O.type === A.fO.ACTIVITY) return null;
    let E = e => {
        (0, m.h)({
          type: s.ImpressionTypes.MENU,
          name: s.ImpressionNames.CALL_TILE_CONTEXT_MENU,
          properties: {
            location: "StageTile",
            is_tile_owner: _.id === j,
            tile_type: e
          }
        })
      },
      I = (e, t, i, a) => {
        switch (e.type) {
          case A.fO.HIDDEN_STREAM:
          case A.fO.STREAM:
            E(A.TH.STREAM), (0, d.jW)(t, async () => {
              let {
                default: t
              } = await n.e("22183").then(n.bind(n, 987281));
              return n => (0, r.jsx)(t, L(k({}, n), {
                stream: e.stream,
                appContext: h,
                exitFullscreen: () => {},
                onInteraction: (0, y.u)("StreamContextMenu", u, {
                  entrypoint: a,
                  targetUserId: _.id,
                  tileType: A.TH.STREAM
                })
              }))
            }, {
              context: h
            });
            return;
          case A.fO.USER:
          default:
            if (E(A.TH.USER), i) return (0, v.D)(t, _, l, {
              context: h
            }, (e, t) => (0, y.o)({
              menuName: e,
              menuItemProps: t,
              entrypoint: A.A5.THREE_DOT,
              targetUserId: _.id,
              location: u,
              tileType: A.TH.USER
            }));
            (0, d.jW)(t, async () => {
              let {
                default: e
              } = await Promise.all([n.e("79695"), n.e("98783"), n.e("8982"), n.e("7717"), n.e("96650")]).then(n.bind(n, 757387));
              return t => (0, r.jsx)(e, L(k({}, t), {
                user: _,
                guildId: x,
                channel: l,
                showMediaItems: true,
                showStageChannelItems: true,
                showChatItems: false,
                onInteraction: (0, y.u)("GuildChannelUserContextMenu", u, {
                  targetUserId: _.id,
                  tileType: A.TH.USER
                })
              }))
            }, {
              context: h
            })
        }
      };
    return O.type !== A.fO.USER || (null == (t = O.voiceState) ? true : t.selfVideo) ? (0, r.jsx)(F, {
      stageParticipant: i,
      rtcParticipant: O,
      channel: l,
      guildId: x,
      user: _,
      width: c,
      isModerator: C,
      onContextMenu: I,
      inPopout: h === w.IlC.POPOUT
    }) : (0, r.jsx)(U, {
      stageParticipant: i,
      rtcParticipant: O,
      channel: l,
      guildId: x,
      user: _,
      width: c,
      isModerator: C,
      onContextMenu: I,
      inPopout: h === w.IlC.POPOUT
    })
  })