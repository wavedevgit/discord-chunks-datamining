/** Chunk was on 97492 **/
/** chunk id: 763793, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => F,
  i: () => k
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  a = require.n(Chunk284009),
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

function L(e) {
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
      guildId: a,
      user: s,
      width: o,
      isModerator: u,
      onContextMenu: d,
      popoutType: f
    } = e, p = l.useRef(null), {
      reducedMotion: h
    } = l.useContext(c.CZY), {
      blocked: b,
      ignored: g,
      id: m
    } = t;
    return (0, r.jsx)(E.A, {
      targetElementRef: p,
      user: s,
      guildId: a,
      channelId: i.id,
      clickTrap: true,
      children: e => (0, r.jsx)(c.DUT, G(L({
        innerRef: p,
        onContextMenu: e => d(n, e)
      }, e), {
        children: (0, r.jsx)(P.A, {
          participant: n,
          aspectRatio: k,
          blocked: b,
          ignored: g,
          channel: i,
          className: M.V,
          inCall: true,
          popoutType: f,
          pulseSpeakingIndicator: !h.enabled,
          width: o,
          onContextMenu: d,
          children: u && (0, r.jsx)(w.A, {})
        }, m)
      }))
    })
  },
  V = e => {
    let {
      stageParticipant: t,
      rtcParticipant: n,
      channel: i,
      width: a,
      isModerator: s,
      onContextMenu: d,
      popoutType: p
    } = e, {
      reducedMotion: h
    } = l.useContext(c.CZY), {
      id: b,
      blocked: m,
      ignored: j
    } = t, x = (0, o.yK)([_.A], () => _.A.getAllActiveStreams(), []), {
      selectedParticipant: E,
      largeStream: C
    } = (0, o.cf)([g.A], () => ({
      selectedParticipant: null != i ? g.A.getSelectedParticipant(i.id) : null,
      largeStream: null != i && g.A.getStageStreamSize(i.id)
    })), T = l.useCallback((e, t) => {
      if (e.type === D.lp.STREAM && 0 === x.filter(t => (0, y._z)(t) === e.id && t.state !== R.XYD.ENDED).length) {
        if (!(0, O.eo)(i, N.A, S.A, I.A, A.default)[0]) return;
        (0, f.A9)((0, y.Iy)(e.id), {
          forceMultiple: t.shiftKey
        })
      }(null == E ? true : E.id) === e.id ? C ? (u.A.selectParticipant(i.id, null), u.A.updateStageStreamSize(i.id, false)) : u.A.updateStageStreamSize(i.id, true) : (u.A.updateStageStreamSize(i.id, false), u.A.selectParticipant(i.id, e.id))
    }, [x, i, E, C]);
    return (0, r.jsx)(P.A, {
      participant: n,
      aspectRatio: k,
      fit: n.type === D.lp.USER ? v.$.COVER : true,
      blocked: m,
      ignored: j,
      channel: i,
      className: M.V,
      inCall: true,
      popoutType: p,
      onClick: T,
      onContextMenu: d,
      pulseSpeakingIndicator: !h.enabled,
      width: a,
      children: s && n.type === D.lp.USER && (0, r.jsx)(w.A, {})
    }, b)
  },
  F = Chunk64700.memo(function(e) {
    var t;
    let {
      participant: l,
      channel: i,
      width: c,
      popoutType: u
    } = e, {
      newestAnalyticsLocation: f
    } = (0, h.Ay)(p.A.STAGE_TILE), A = (0, j.Us)(), y = i.getGuildId(), O = C.default.getId();
    a()(null != y, "Channel cannot be guildless");
    let {
      user: v
    } = l, E = (0, o.bG)([g.A], () => g.A.getParticipant(i.id, l.id), [i.id, l.id]), _ = (0, o.bG)([T.Ay], () => T.Ay.isModerator(v.id, i.id), [i.id, v.id]);
    if (null == E || E.type === D.lp.ACTIVITY) return null;
    let S = e => {
        (0, b.x)({
          type: s.ImpressionTypes.MENU,
          name: s.ImpressionNames.CALL_TILE_CONTEXT_MENU,
          properties: {
            location: "StageTile",
            is_tile_owner: v.id === O,
            tile_type: e
          }
        })
      },
      I = (e, t, l, a) => {
        switch (e.type) {
          case D.lp.HIDDEN_STREAM:
          case D.lp.STREAM:
            S(D.qs.STREAM), (0, d.L3)(t, async () => {
              let {
                default: t
              } = await n.e("66692").then(n.bind(n, 796175));
              return n => (0, r.jsx)(t, G(L({}, n), {
                stream: e.stream,
                appContext: A,
                exitFullscreen: () => {},
                onInteraction: (0, m.s)("StreamContextMenu", f, {
                  entrypoint: a,
                  targetUserId: v.id,
                  tileType: D.qs.STREAM
                })
              }))
            }, {
              context: A
            });
            return;
          case D.lp.USER:
          default:
            if (S(D.qs.USER), l) return (0, x.r)(t, v, i, {
              context: A
            }, (e, t) => (0, m.Y)({
              menuName: e,
              menuItemProps: t,
              entrypoint: D.GK.THREE_DOT,
              targetUserId: v.id,
              location: f,
              tileType: D.qs.USER
            }));
            (0, d.L3)(t, async () => {
              let {
                default: e
              } = await Promise.all([n.e("97262"), n.e("29534"), n.e("55296"), n.e("84841"), n.e("25623")]).then(n.bind(n, 107632));
              return t => (0, r.jsx)(e, G(L({}, t), {
                user: v,
                guildId: y,
                channel: i,
                showMediaItems: true,
                showStageChannelItems: true,
                showChatItems: false,
                onInteraction: (0, m.s)("GuildChannelUserContextMenu", f, {
                  targetUserId: v.id,
                  tileType: D.qs.USER
                })
              }))
            }, {
              context: A
            })
        }
      };
    return E.type !== D.lp.USER || (null == (t = E.voiceState) ? true : t.selfVideo) ? (0, r.jsx)(V, {
      stageParticipant: l,
      rtcParticipant: E,
      channel: i,
      guildId: y,
      user: v,
      width: c,
      isModerator: _,
      onContextMenu: I,
      popoutType: u
    }) : (0, r.jsx)(U, {
      stageParticipant: l,
      rtcParticipant: E,
      channel: i,
      guildId: y,
      user: v,
      width: c,
      isModerator: _,
      onContextMenu: I,
      popoutType: u
    })
  })