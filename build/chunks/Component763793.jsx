/** Chunk was on 44669 **/
/** chunk id: 763793, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => B,
  i: () => k
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  s = require.n(Chunk284009),
  Chunk110259 = require("./110259.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk367513 = require("./367513.js"),
  Chunk442433 = require("./442433.js"),
  Chunk401843 = require("./401843.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk139286 = require("./139286.js"),
  Chunk313961 = require("./313961.js"),
  Chunk480890 = require("./480890.js"),
  Chunk643501 = require("./643501.js"),
  Chunk652896 = require("./652896.js"),
  Chunk279250 = require("./279250.js"),
  Chunk267102 = require("./267102.jsx"),
  Chunk401901 = require("./401901.jsx"),
  Chunk326567 = require("./326567.jsx"),
  Chunk342296 = require("./342296.jsx"),
  Chunk616356 = require("./616356.js"),
  Chunk961350 = require("./961350.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk977997 = require("./977997.js"),
  Chunk312006 = require("./312006.js"),
  Chunk704384 = require("./704384.jsx"),
  Chunk289105 = require("./289105.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk806931 = require("./806931.js"),
  Chunk742149 = require("./742149.js");

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

function G(e, t) {
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
let k = 16 / 9,
  U = e => {
    let {
      stageParticipant: t,
      rtcParticipant: n,
      channel: i,
      guildId: s,
      user: a,
      width: o,
      isModerator: u,
      onContextMenu: d,
      popoutType: p
    } = e, h = l.useRef(null), {
      reducedMotion: g
    } = l.useContext(c.CZY), {
      blocked: f,
      ignored: m,
      id: b
    } = t;
    return (0, r.jsx)(v.A, {
      targetElementRef: h,
      user: a,
      guildId: s,
      channelId: i.id,
      clickTrap: true,
      children: e => (0, r.jsx)(c.DUT, G(M({
        innerRef: h,
        onContextMenu: e => d(n, e)
      }, e), {
        children: (0, r.jsx)(P.A, {
          participant: n,
          aspectRatio: k,
          blocked: f,
          ignored: m,
          channel: i,
          className: L.V,
          inCall: true,
          popoutType: p,
          pulseSpeakingIndicator: !g.enabled,
          width: o,
          onContextMenu: d,
          children: u && (0, r.jsx)(w.A, {})
        }, b)
      }))
    })
  },
  V = e => {
    let {
      stageParticipant: t,
      rtcParticipant: n,
      channel: i,
      width: s,
      isModerator: a,
      onContextMenu: d,
      popoutType: h
    } = e, {
      reducedMotion: g
    } = l.useContext(c.CZY), {
      id: f,
      blocked: b,
      ignored: j
    } = t, _ = (0, o.yK)([E.A], () => E.A.getAllActiveStreams(), []), {
      selectedParticipant: v,
      largeStream: C
    } = (0, o.cf)([m.A], () => ({
      selectedParticipant: null != i ? m.A.getSelectedParticipant(i.id) : null,
      largeStream: null != i && m.A.getStageStreamSize(i.id)
    })), T = l.useCallback((e, t) => {
      if (e.type === D.lp.STREAM && 0 === _.filter(t => (0, y._z)(t) === e.id && t.state !== R.XYD.ENDED).length) {
        if (!(0, O.eo)(i, N.A, S.A, I.A, A.default)[0]) return;
        (0, p.A9)((0, y.Iy)(e.id), {
          forceMultiple: t.shiftKey
        })
      }(null == v ? true : v.id) === e.id ? C ? (u.A.selectParticipant(i.id, null), u.A.updateStageStreamSize(i.id, false)) : u.A.updateStageStreamSize(i.id, true) : (u.A.updateStageStreamSize(i.id, false), u.A.selectParticipant(i.id, e.id))
    }, [_, i, v, C]);
    return (0, r.jsx)(P.A, {
      participant: n,
      aspectRatio: k,
      fit: n.type === D.lp.USER ? x.$.COVER : true,
      blocked: b,
      ignored: j,
      channel: i,
      className: L.V,
      inCall: true,
      popoutType: h,
      onClick: T,
      onContextMenu: d,
      pulseSpeakingIndicator: !g.enabled,
      width: s,
      children: a && n.type === D.lp.USER && (0, r.jsx)(w.A, {})
    }, f)
  },
  B = Chunk64700.memo(function(e) {
    var t;
    let {
      participant: l,
      channel: i,
      width: c,
      popoutType: u
    } = e, {
      newestAnalyticsLocation: p
    } = (0, g.Ay)(h.A.STAGE_TILE), A = (0, j.Us)(), y = i.getGuildId(), O = C.default.getId();
    s()(null != y, "Channel cannot be guildless");
    let {
      user: x
    } = l, v = (0, o.bG)([m.A], () => m.A.getParticipant(i.id, l.id), [i.id, l.id]), E = (0, o.bG)([T.Ay], () => T.Ay.isModerator(x.id, i.id), [i.id, x.id]);
    if (null == v || v.type === D.lp.ACTIVITY) return null;
    let S = e => {
        (0, f.x)({
          type: a.ImpressionTypes.MENU,
          name: a.ImpressionNames.CALL_TILE_CONTEXT_MENU,
          properties: {
            location: "StageTile",
            is_tile_owner: x.id === O,
            tile_type: e
          }
        })
      },
      I = (e, t, l, s) => {
        switch (e.type) {
          case D.lp.HIDDEN_STREAM:
          case D.lp.STREAM:
            S(D.qs.STREAM), (0, d.L3)(t, async () => {
              let {
                default: t
              } = await n.e("66692").then(n.bind(n, 796175));
              return n => (0, r.jsx)(t, G(M({}, n), {
                stream: e.stream,
                appContext: A,
                exitFullscreen: () => {},
                onInteraction: (0, b.s)("StreamContextMenu", p, {
                  entrypoint: s,
                  targetUserId: x.id,
                  tileType: D.qs.STREAM
                })
              }))
            }, {
              context: A
            });
            return;
          case D.lp.USER:
          default:
            if (S(D.qs.USER), l) return (0, _.r)(t, x, i, {
              context: A
            }, (e, t) => (0, b.Y)({
              menuName: e,
              menuItemProps: t,
              entrypoint: D.GK.THREE_DOT,
              targetUserId: x.id,
              location: p,
              tileType: D.qs.USER
            }));
            (0, d.L3)(t, async () => {
              let {
                default: e
              } = await Promise.all([n.e("97262"), n.e("29534"), n.e("55296"), n.e("84841"), n.e("31885")]).then(n.bind(n, 107632));
              return t => (0, r.jsx)(e, G(M({}, t), {
                user: x,
                guildId: y,
                channel: i,
                showMediaItems: true,
                showStageChannelItems: true,
                showChatItems: false,
                onInteraction: (0, b.s)("GuildChannelUserContextMenu", p, {
                  targetUserId: x.id,
                  tileType: D.qs.USER
                })
              }))
            }, {
              context: A
            })
        }
      };
    return v.type !== D.lp.USER || (null == (t = v.voiceState) ? true : t.selfVideo) ? (0, r.jsx)(V, {
      stageParticipant: l,
      rtcParticipant: v,
      channel: i,
      guildId: y,
      user: x,
      width: c,
      isModerator: E,
      onContextMenu: I,
      popoutType: u
    }) : (0, r.jsx)(U, {
      stageParticipant: l,
      rtcParticipant: v,
      channel: i,
      guildId: y,
      user: x,
      width: c,
      isModerator: E,
      onContextMenu: I,
      popoutType: u
    })
  })