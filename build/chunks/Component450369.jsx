/** Chunk was on 73551 **/
/** chunk id: 450369, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Q: () => L,
  Z: () => F
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
  Chunk375767 = require("./375767.js");

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

function D(e, t) {
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
      inPopout: p
    } = e, h = i.useRef(null), {
      reducedMotion: f
    } = i.useContext(c.Sfi), {
      blocked: m,
      ignored: g,
      id: b
    } = t;
    return (0, r.jsx)(O.Z, {
      targetElementRef: h,
      user: o,
      guildId: a,
      channelId: l.id,
      clickTrap: true,
      children: e => (0, r.jsx)(c.P3F, D(k({
        innerRef: h,
        onContextMenu: e => d(n, e)
      }, e), {
        children: (0, r.jsx)(N.Z, {
          participant: n,
          aspectRatio: L,
          blocked: m,
          ignored: g,
          channel: l,
          className: M.tile,
          inCall: true,
          inPopout: p,
          pulseSpeakingIndicator: !f.enabled,
          width: s,
          onContextMenu: d,
          children: u && (0, r.jsx)(A.Z, {})
        }, b)
      }))
    })
  },
  B = e => {
    let {
      stageParticipant: t,
      rtcParticipant: n,
      channel: l,
      width: a,
      isModerator: o,
      onContextMenu: d,
      inPopout: h
    } = e, {
      reducedMotion: f
    } = i.useContext(c.Sfi), {
      id: m,
      blocked: g,
      ignored: y
    } = t, j = (0, s.Wu)([E.Z], () => E.Z.getAllActiveStreams(), []), {
      selectedParticipant: O,
      largeStream: S
    } = (0, s.cj)([b.Z], () => ({
      selectedParticipant: null != l ? b.Z.getSelectedParticipant(l.id) : null,
      largeStream: null != l && b.Z.getStageStreamSize(l.id)
    })), T = i.useCallback((e, t) => {
      if (e.type === R.fO.STREAM && 0 === j.filter(t => (0, C.V9)(t) === e.id && t.state !== w.jm8.ENDED).length) {
        if (!(0, x.p9)(l, Z.Z, P.Z, I.Z, _.Z)[0]) return;
        (0, p.rn)((0, C.my)(e.id), {
          forceMultiple: t.shiftKey
        })
      }(null == O ? true : O.id) === e.id ? S ? (u.Z.selectParticipant(l.id, null), u.Z.updateStageStreamSize(l.id, false)) : u.Z.updateStageStreamSize(l.id, true) : (u.Z.updateStageStreamSize(l.id, false), u.Z.selectParticipant(l.id, e.id))
    }, [j, l, O, S]);
    return (0, r.jsx)(N.Z, {
      participant: n,
      aspectRatio: L,
      fit: n.type === R.fO.USER ? v.L.COVER : true,
      blocked: g,
      ignored: y,
      channel: l,
      className: M.tile,
      inCall: true,
      inPopout: h,
      onClick: T,
      onContextMenu: d,
      pulseSpeakingIndicator: !f.enabled,
      width: a,
      children: o && n.type === R.fO.USER && (0, r.jsx)(A.Z, {})
    }, m)
  },
  F = Chunk73800.memo(function(e) {
    var t;
    let {
      participant: i,
      channel: l,
      width: c
    } = e, {
      newestAnalyticsLocation: u
    } = (0, m.ZP)(f.Z.STAGE_TILE), p = (0, h.bp)(), _ = l.getGuildId(), C = S.default.getId();
    a()(null != _, "Channel cannot be guildless");
    let {
      user: x
    } = i, v = (0, s.e7)([b.Z], () => b.Z.getParticipant(l.id, i.id), [l.id, i.id]), O = (0, s.e7)([T.ZP], () => T.ZP.isModerator(x.id, l.id), [l.id, x.id]);
    if (null == v || v.type === R.fO.ACTIVITY) return null;
    let E = e => {
        (0, g.h)({
          type: o.ImpressionTypes.MENU,
          name: o.ImpressionNames.CALL_TILE_CONTEXT_MENU,
          properties: {
            location: "StageTile",
            is_tile_owner: x.id === C,
            tile_type: e
          }
        })
      },
      P = (e, t, i, a) => {
        switch (e.type) {
          case R.fO.HIDDEN_STREAM:
          case R.fO.STREAM:
            E(R.TH.STREAM), (0, d.jW)(t, async () => {
              let {
                default: t
              } = await n.e("22183").then(n.bind(n, 987281));
              return n => (0, r.jsx)(t, D(k({}, n), {
                stream: e.stream,
                appContext: p,
                exitFullscreen: () => {},
                onInteraction: (0, y.u)("StreamContextMenu", u, {
                  entrypoint: a,
                  targetUserId: x.id,
                  tileType: R.TH.STREAM
                })
              }))
            }, {
              context: p
            });
            return;
          case R.fO.USER:
          default:
            if (E(R.TH.USER), i) return (0, j.D)(t, x, l, {
              context: p
            }, (e, t) => (0, y.o)({
              menuName: e,
              menuItemProps: t,
              entrypoint: R.A5.THREE_DOT,
              targetUserId: x.id,
              location: u,
              tileType: R.TH.USER
            }));
            (0, d.jW)(t, async () => {
              let {
                default: e
              } = await Promise.all([n.e("79695"), n.e("98783"), n.e("8982"), n.e("7717"), n.e("52021")]).then(n.bind(n, 757387));
              return t => (0, r.jsx)(e, D(k({}, t), {
                user: x,
                guildId: _,
                channel: l,
                showMediaItems: true,
                showStageChannelItems: true,
                showChatItems: false,
                onInteraction: (0, y.u)("GuildChannelUserContextMenu", u, {
                  targetUserId: x.id,
                  tileType: R.TH.USER
                })
              }))
            }, {
              context: p
            })
        }
      };
    return v.type !== R.fO.USER || (null == (t = v.voiceState) ? true : t.selfVideo) ? (0, r.jsx)(B, {
      stageParticipant: i,
      rtcParticipant: v,
      channel: l,
      guildId: _,
      user: x,
      width: c,
      isModerator: O,
      onContextMenu: P,
      inPopout: p === w.IlC.POPOUT
    }) : (0, r.jsx)(U, {
      stageParticipant: i,
      rtcParticipant: v,
      channel: l,
      guildId: _,
      user: x,
      width: c,
      isModerator: O,
      onContextMenu: P,
      inPopout: p === w.IlC.POPOUT
    })
  })