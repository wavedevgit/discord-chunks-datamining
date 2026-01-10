/** Chunk was on 81985 **/
/** chunk id: 450369, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Q: () => L,
  Z: () => B
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk990547 = require("./990547.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk475179 = require("./475179.js"),
  Chunk239091 = require("./239091.js"),
  Chunk872810 = require("./872810.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk213609 = require("./213609.js"),
  Chunk358221 = require("./358221.js"),
  Chunk795318 = require("./795318.js"),
  Chunk258609 = require("./258609.js"),
  Chunk569545 = require("./569545.js"),
  Chunk102172 = require("./102172.js"),
  Chunk728285 = require("./728285.jsx"),
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
  Chunk688267 = require("./688267.js");

function M(e) {
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

function k(e, t) {
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
let L = 16 / 9,
  U = e => {
    let {
      stageParticipant: t,
      rtcParticipant: n,
      channel: l,
      guildId: a,
      user: o,
      width: s,
      isModerator: u,
      onContextMenu: d,
      popoutType: p
    } = e, f = i.useRef(null), {
      reducedMotion: h
    } = i.useContext(c.Sfi), {
      blocked: g,
      ignored: m,
      id: b
    } = t;
    return (0, r.jsx)(E.Z, {
      targetElementRef: f,
      user: o,
      guildId: a,
      channelId: l.id,
      clickTrap: true,
      children: e => (0, r.jsx)(c.P3F, k(M({
        innerRef: f,
        onContextMenu: e => d(n, e)
      }, e), {
        children: (0, r.jsx)(T.Z, {
          participant: n,
          aspectRatio: L,
          blocked: g,
          ignored: m,
          channel: l,
          className: D.tile,
          inCall: true,
          popoutType: p,
          pulseSpeakingIndicator: !h.enabled,
          width: s,
          onContextMenu: d,
          children: u && (0, r.jsx)(A.Z, {})
        }, b)
      }))
    })
  },
  G = e => {
    let {
      stageParticipant: t,
      rtcParticipant: n,
      channel: l,
      width: a,
      isModerator: o,
      onContextMenu: d,
      popoutType: f
    } = e, {
      reducedMotion: h
    } = i.useContext(c.Sfi), {
      id: g,
      blocked: b,
      ignored: j
    } = t, C = (0, s.Wu)([S.Z], () => S.Z.getAllActiveStreams(), []), {
      selectedParticipant: E,
      largeStream: _
    } = (0, s.cj)([m.Z], () => ({
      selectedParticipant: null != l ? m.Z.getSelectedParticipant(l.id) : null,
      largeStream: null != l && m.Z.getStageStreamSize(l.id)
    })), N = i.useCallback((e, t) => {
      if (e.type === R.fO.STREAM && 0 === C.filter(t => (0, v.V9)(t) === e.id && t.state !== w.jm8.ENDED).length) {
        if (!(0, O.p9)(l, Z.Z, I.Z, P.Z, y.default)[0]) return;
        (0, p.rn)((0, v.my)(e.id), {
          forceMultiple: t.shiftKey
        })
      }(null == E ? true : E.id) === e.id ? _ ? (u.Z.selectParticipant(l.id, null), u.Z.updateStageStreamSize(l.id, false)) : u.Z.updateStageStreamSize(l.id, true) : (u.Z.updateStageStreamSize(l.id, false), u.Z.selectParticipant(l.id, e.id))
    }, [C, l, E, _]);
    return (0, r.jsx)(T.Z, {
      participant: n,
      aspectRatio: L,
      fit: n.type === R.fO.USER ? x.L.COVER : true,
      blocked: b,
      ignored: j,
      channel: l,
      className: D.tile,
      inCall: true,
      popoutType: f,
      onClick: N,
      onContextMenu: d,
      pulseSpeakingIndicator: !h.enabled,
      width: a,
      children: o && n.type === R.fO.USER && (0, r.jsx)(A.Z, {})
    }, g)
  },
  B = Chunk473749.memo(function(e) {
    var t;
    let {
      participant: i,
      channel: l,
      width: c,
      popoutType: u
    } = e, {
      newestAnalyticsLocation: p
    } = (0, h.ZP)(f.Z.STAGE_TILE), y = (0, j.bp)(), v = l.getGuildId(), O = _.default.getId();
    a()(null != v, "Channel cannot be guildless");
    let {
      user: x
    } = i, E = (0, s.e7)([m.Z], () => m.Z.getParticipant(l.id, i.id), [l.id, i.id]), S = (0, s.e7)([N.ZP], () => N.ZP.isModerator(x.id, l.id), [l.id, x.id]);
    if (null == E || E.type === R.fO.ACTIVITY) return null;
    let I = e => {
        (0, g.h)({
          type: o.ImpressionTypes.MENU,
          name: o.ImpressionNames.CALL_TILE_CONTEXT_MENU,
          properties: {
            location: "StageTile",
            is_tile_owner: x.id === O,
            tile_type: e
          }
        })
      },
      P = (e, t, i, a) => {
        switch (e.type) {
          case R.fO.HIDDEN_STREAM:
          case R.fO.STREAM:
            I(R.TH.STREAM), (0, d.jW)(t, async () => {
              let {
                default: t
              } = await n.e("22183").then(n.bind(n, 987281));
              return n => (0, r.jsx)(t, k(M({}, n), {
                stream: e.stream,
                appContext: y,
                exitFullscreen: () => {},
                onInteraction: (0, b.u)("StreamContextMenu", p, {
                  entrypoint: a,
                  targetUserId: x.id,
                  tileType: R.TH.STREAM
                })
              }))
            }, {
              context: y
            });
            return;
          case R.fO.USER:
          default:
            if (I(R.TH.USER), i) return (0, C.D)(t, x, l, {
              context: y
            }, (e, t) => (0, b.o)({
              menuName: e,
              menuItemProps: t,
              entrypoint: R.A5.THREE_DOT,
              targetUserId: x.id,
              location: p,
              tileType: R.TH.USER
            }));
            (0, d.jW)(t, async () => {
              let {
                default: e
              } = await Promise.all([n.e("79695"), n.e("4040"), n.e("92524"), n.e("7717"), n.e("9393")]).then(n.bind(n, 757387));
              return t => (0, r.jsx)(e, k(M({}, t), {
                user: x,
                guildId: v,
                channel: l,
                showMediaItems: true,
                showStageChannelItems: true,
                showChatItems: false,
                onInteraction: (0, b.u)("GuildChannelUserContextMenu", p, {
                  targetUserId: x.id,
                  tileType: R.TH.USER
                })
              }))
            }, {
              context: y
            })
        }
      };
    return E.type !== R.fO.USER || (null == (t = E.voiceState) ? true : t.selfVideo) ? (0, r.jsx)(G, {
      stageParticipant: i,
      rtcParticipant: E,
      channel: l,
      guildId: v,
      user: x,
      width: c,
      isModerator: S,
      onContextMenu: P,
      popoutType: u
    }) : (0, r.jsx)(U, {
      stageParticipant: i,
      rtcParticipant: E,
      channel: l,
      guildId: v,
      user: x,
      width: c,
      isModerator: S,
      onContextMenu: P,
      popoutType: u
    })
  })