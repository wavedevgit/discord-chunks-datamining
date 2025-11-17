/** Chunk was on 5704 **/
/** chunk id: 360429, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => M
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk239091 = require("./239091.js"),
  Chunk287734 = require("./287734.js"),
  Chunk872810 = require("./872810.js"),
  Chunk410575 = require("./410575.jsx"),
  Chunk906732 = require("./906732.jsx"),
  Chunk418469 = require("./418469.jsx"),
  Chunk701098 = require("./701098.jsx"),
  Chunk607783 = require("./607783.jsx"),
  Chunk435064 = require("./435064.js"),
  Chunk779618 = require("./779618.js"),
  Chunk341569 = require("./341569.js"),
  Chunk39604 = require("./39604.js"),
  Chunk258609 = require("./258609.js"),
  Chunk569545 = require("./569545.js"),
  Chunk352978 = require("./352978.jsx"),
  Chunk441167 = require("./441167.js"),
  Chunk700994 = require("./700994.jsx"),
  Chunk199902 = require("./199902.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk131951 = require("./131951.js"),
  Chunk594174 = require("./594174.js"),
  Chunk444295 = require("./444295.js"),
  Chunk1226 = require("./1226.js"),
  Chunk981631 = require("./981631.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx");

function T(e) {
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

function G(e) {
  return (0, o.e7)([Z.Z], () => {
    let t = Z.Z.getActiveStreamForApplicationStream(e);
    return null != t && (0, y.V9)(t) === (0, y.V9)(e)
  })
}

function M(e) {
  let {
    stream: t,
    analyticsContext: n,
    appContext: Z,
    exitFullscreen: M,
    onSelect: U
  } = e, Q = function(e) {
    let t = G(e),
      n = (0, j.Z)(V.Z),
      l = (0, h.z8)(),
      i = e.ownerId === x.default.getId(),
      {
        enableViewerClipping: a,
        ignoreSenderPreference: c
      } = E.Z.useExperiment({
        location: "StreamContextMenu"
      }, {
        autoTrackExposure: false
      }),
      s = (0, o.e7)([I.Z], () => I.Z.getIsAtMaxSaveClipOperations()),
      d = (0, o.e7)([I.Z], () => I.Z.isViewerClippingAllowedForUser(e.ownerId)) || c;
    return n && a && t ? (0, r.jsx)(u.sNh, {
      id: "clip-stream",
      disabled: !l || !(i || d) || s,
      label: N.intl.string(N.t.U4URzP),
      action: () => i ? (0, m.br)() : (0, m.C1)((0, y.V9)(e))
    }) : null
  }(t), R = G(t), B = function(e) {
    let t = G(e),
      n = l.useMemo(() => (0, i.debounce)(t => {
        (0, k.Ws)(_.Odu.GO_LIVE, {
          type: k.Qu.AUDIO,
          value: k.bk.SETTING_ADJUSTED,
          userId: e.ownerId
        })
      }, 1e3), [e.ownerId]),
      r = (0, v.Z)(e.ownerId, D.Yn.STREAM, n);
    return t ? r : null
  }(t), J = function(e) {
    let t, n = (0, o.e7)([S.default], () => null != S.default.getRemoteSessionId()),
      l = (0, o.e7)([C.Z], () => C.Z.getChannel(e.channelId), [e.channelId]),
      i = G(e),
      a = P.default.getCurrentUser(),
      c = null != a && e.ownerId === a.id;
    return (t = c ? N.intl.string(N.t.S5anIc) : i ? N.intl.string(N.t.q3O3J8) : N.intl.string(N.t["7Xq/nV"]), n || !c && i && (null == l ? true : l.isGuildStageVoice())) ? null : (0, r.jsx)(u.sNh, {
      id: "watch",
      label: t,
      action: i ? function() {
        (0, d.g)((0, y.V9)(e)), (0, k.Ws)(_.Odu.GO_LIVE, {
          type: k.Qu.GO_LIVE,
          value: k.bk.DISABLED,
          userId: e.ownerId
        })
      } : function() {
        s.default.selectVoiceChannel(e.channelId), (0, d.rn)(e), (0, k.Ws)(_.Odu.GO_LIVE, {
          type: k.Qu.GO_LIVE,
          value: k.bk.ENABLED,
          userId: e.ownerId
        })
      }
    })
  }(t), F = function(e) {
    let t = G(e),
      n = (0, o.e7)([V.Z], () => V.Z.isLocalMute(e.ownerId, D.Yn.STREAM)),
      l = P.default.getCurrentUser(),
      i = null != l && e.ownerId === l.id;
    return !t || i ? null : (0, r.jsx)(u.S89, {
      id: "mute",
      label: N.intl.string(N.t.sWmtI6),
      action: function() {
        a.Z.toggleLocalMute(e.ownerId, D.Yn.STREAM)
      },
      checked: n
    })
  }(t), Y = function(e) {
    let t = G(e),
      n = e.ownerId === x.default.getId(),
      l = V.Z.supports(D.AN.SIDECHAIN_COMPRESSION),
      i = (0, o.e7)([V.Z], () => V.Z.getSidechainCompression()),
      c = (0, o.e7)([V.Z], () => V.Z.getSidechainCompressionStrength()),
      {
        analyticsLocations: s
      } = (0, b.ZP)();
    return !n && t && l ? (0, r.jsxs)(u.kSQ, {
      children: [(0, r.jsx)(u.S89, {
        id: "sidechain-compression",
        label: N.intl.string(N.t["/jwMtn"]),
        action: () => a.Z.setSidechainCompression(!i, {
          analyticsLocations: s
        }),
        checked: i
      }), (0, r.jsx)(u.II_, {
        id: "sidechain-parameters",
        label: N.intl.string(N.t.fhEzfj),
        control: (e, t) => (0, r.jsx)(u._wy, L(T({}, e), {
          ref: t,
          value: c,
          maxValue: 100,
          onChange: e => a.Z.setSidechainCompressionStrength(e, {
            analyticsLocations: s
          }),
          "aria-label": N.intl.string(N.t.fhEzfj)
        }))
      })]
    }) : null
  }(t), z = (0, p.Z)(t, Z, M), W = (0, O.G)({
    stream: t,
    channelId: t.channelId
  }), q = (0, g.B)({
    userId: t.ownerId,
    channelId: t.channelId,
    guildId: t.guildId
  }), H = function(e) {
    let t = l.useMemo(() => (0, i.debounce)(() => {
        (0, k.Ws)(_.Odu.GO_LIVE, {
          type: k.Qu.SCREEN_SHARE,
          value: k.bk.SETTING_ADJUSTED,
          userId: e.ownerId
        })
      }, 1e3), [e.ownerId]),
      n = n => {
        (0, A.cq)(e, n), t()
      },
      o = (0, A.BO)(e);
    return (0, r.jsx)(u.II_, {
      id: "stream-zoom",
      label: N.intl.string(N.t.B3kEDs),
      control: (e, t) => (0, r.jsx)(u._wy, L(T({}, e), {
        ref: t,
        value: o,
        maxValue: 300,
        onChange: n,
        minValue: 100,
        "aria-label": N.intl.string(N.t.B3kEDs)
      }))
    })
  }(t), X = function(e) {
    let t = (0, A.xN)(e);
    return (0, r.jsx)(u.S89, {
      id: "fit",
      label: N.intl.string(N.t.mpnvrV),
      action: () => {
        (0, A.gI)(e, t === w.L.CONTAIN ? w.L.COVER : w.L.CONTAIN), (0, k.Ws)(_.Odu.GO_LIVE, {
          type: k.Qu.GO_LIVE,
          value: k.bk.SETTING_ADJUSTED,
          userId: e.ownerId
        })
      },
      checked: t === w.L.COVER
    })
  }(t);
  return (0, r.jsx)(f.Z, {
    context: n,
    object: _.qAy.CONTEXT_MENU,
    children: (0, r.jsxs)(u.v2r, {
      navId: "stream-context",
      onClose: c.Zy,
      "aria-label": N.intl.string(N.t.Gl3Q30),
      onSelect: U,
      children: [(0, r.jsxs)(u.kSQ, {
        children: [J, Q, F, W, q]
      }), (0, r.jsx)(u.kSQ, {
        children: B
      }), (0, r.jsxs)(u.kSQ, {
        children: [H, X]
      }), Y, (0, r.jsx)(u.kSQ, {
        children: R && z
      })]
    })
  })
}