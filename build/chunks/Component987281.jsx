/** Chunk was on 22183 **/
/** chunk id: 987281, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => U
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk239091 = require("./239091.js"),
  Chunk287734 = require("./287734.js"),
  Chunk872810 = require("./872810.js"),
  Chunk410575 = require("./410575.jsx"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk441061 = require("./441061.jsx"),
  Chunk431368 = require("./431368.jsx"),
  Chunk418469 = require("./418469.jsx"),
  Chunk701098 = require("./701098.jsx"),
  Chunk607783 = require("./607783.jsx"),
  Chunk786138 = require("./786138.jsx"),
  Chunk435064 = require("./435064.js"),
  Chunk779618 = require("./779618.js"),
  Chunk39604 = require("./39604.js"),
  Chunk258609 = require("./258609.js"),
  Chunk441167 = require("./441167.js"),
  Chunk700994 = require("./700994.jsx"),
  Chunk76021 = require("./76021.jsx"),
  Chunk199902 = require("./199902.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk131951 = require("./131951.js"),
  Chunk594174 = require("./594174.js"),
  Chunk569545 = require("./569545.js"),
  Chunk981631 = require("./981631.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx");

function T(e) {
  return (0, l.e7)([x.Z], () => {
    let t = x.Z.getActiveStreamForApplicationStream(e);
    return null != t && (0, A.V9)(t) === (0, A.V9)(e)
  })
}

function U(e) {
  let {
    stream: t,
    analyticsContext: n,
    appContext: x,
    exitFullscreen: U,
    onSelect: _,
    onInteraction: D,
    minimal: R = false
  } = e, F = (0, l.cj)([k.default], () => {
    var e;
    return (null == t ? true : t.ownerId) === (null == (e = k.default.getCurrentUser()) ? true : e.id)
  }), G = function(e) {
    let t = T(e),
      n = (0, S.Z)(E.Z),
      o = m.Z.getSettings().clipsEnabled,
      a = e.ownerId === C.default.getId(),
      {
        enableViewerClipping: c,
        ignoreSenderPreference: s
      } = I.Z.useExperiment({
        location: "StreamContextMenu"
      }, {
        autoTrackExposure: false
      }),
      u = (0, l.e7)([m.Z], () => m.Z.getIsAtMaxSaveClipOperations()),
      d = (0, l.e7)([m.Z], () => m.Z.isViewerClippingAllowedForUser(e.ownerId)) || s;
    return n && c && t ? (0, r.jsx)(i.sNh, {
      id: "clip-stream",
      disabled: !o || !(a || d) || u,
      label: V.intl.string(V.t.U4URzM),
      action: () => a ? (0, Z.C1)() : (0, Z.C1)((0, A.V9)(e))
    }) : null
  }(t), J = T(t), Q = function(e) {
    let t = T(e),
      n = (0, y.Z)(e.ownerId, M.Yn.STREAM);
    return t ? n : null
  }(t), L = function(e, t) {
    let n, o = (0, l.e7)([v.Z], () => null != v.Z.getRemoteSessionId()),
      a = (0, l.e7)([P.Z], () => P.Z.getChannel(e.channelId), [e.channelId]),
      u = T(e),
      d = k.default.getCurrentUser(),
      f = null != d && e.ownerId === d.id;
    return (n = f ? V.intl.string(V.t.S5anIS) : u ? V.intl.string(V.t.q3O3Jy) : V.intl.string(V.t["7Xq/nZ"]), o || !f && u && (null == a ? true : a.isGuildStageVoice())) ? null : (0, r.jsx)(i.sNh, {
      id: "watch",
      label: n,
      action: u ? function() {
        (0, s.g)((0, A.V9)(e))
      } : function() {
        c.default.selectVoiceChannel(e.channelId), (0, s.rn)(e)
      },
      icon: t && u && i.g5r
    })
  }(t, R), Y = function(e) {
    let t = T(e),
      n = (0, l.e7)([E.Z], () => E.Z.isLocalMute(e.ownerId, M.Yn.STREAM)),
      a = k.default.getCurrentUser(),
      c = null != a && e.ownerId === a.id;
    return !t || c ? null : (0, r.jsx)(i.S89, {
      id: "mute",
      label: V.intl.string(V.t.sWmtIy),
      action: function() {
        o.Z.toggleLocalMute(e.ownerId, M.Yn.STREAM)
      },
      checked: n
    })
  }(t), z = function(e) {
    let t = T(e),
      n = e.ownerId === C.default.getId(),
      a = E.Z.supports(M.AN.SIDECHAIN_COMPRESSION),
      c = (0, l.e7)([E.Z], () => E.Z.getSidechainCompression()),
      s = (0, l.e7)([E.Z], () => E.Z.getSidechainCompressionStrength()),
      {
        analyticsLocations: u
      } = (0, f.ZP)();
    return !n && t && a ? (0, r.jsxs)(i.kSQ, {
      children: [(0, r.jsx)(i.S89, {
        id: "sidechain-compression",
        label: V.intl.string(V.t["/jwMtr"]),
        subtext: V.intl.string(V.t.zlA23N),
        action: () => o.Z.setSidechainCompression(!c, {
          analyticsLocations: u
        }),
        checked: c
      }), (0, r.jsx)(i.II_, {
        id: "sidechain-parameters",
        label: V.intl.string(V.t.fhEzfn),
        control: (e, t) => {
          var n, l;
          return (0, r.jsx)(i._wy, (n = function(e) {
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
          }({}, e), l = l = {
            ref: t,
            value: s,
            maxValue: 100,
            onChange: e => o.Z.setSidechainCompressionStrength(e, {
              analyticsLocations: u
            }),
            "aria-label": V.intl.string(V.t.fhEzfn)
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(l)).forEach(function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e))
          }), n))
        }
      })]
    }) : null
  }(t), B = (0, p.Z)(t, x, U), q = (0, b.Z)(t.channelId, t.ownerId), H = (0, g.Z)(t.channelId), X = (0, l.e7)([P.Z], () => P.Z.getChannel(t.channelId), [t.channelId]), W = (0, h.G)({
    stream: t,
    channelId: t.channelId
  }), K = (0, j.B)({
    userId: t.ownerId,
    channelId: t.channelId,
    guildId: t.guildId,
    minimal: R
  }), {
    analyticsLocations: $
  } = (0, f.ZP)(d.Z.STREAM_CONTEXT_MENU), ee = (0, O.b)({
    stream: t,
    handleGoLive: () => (0, w.Z)(t.guildId, t.channelId, $),
    minimal: R,
    appContext: x
  });
  return R ? (0, r.jsx)(f.Gt, {
    value: $,
    children: (0, r.jsxs)(i.v2r, {
      navId: "stream-context",
      onClose: a.Zy,
      "aria-label": V.intl.string(V.t.Gl3Q39),
      variant: "fixed",
      onSelect: _,
      onInteraction: D,
      children: [(0, r.jsx)(i.kSQ, {
        children: F ? ee : L
      }), (0, r.jsxs)(i.kSQ, {
        children: [Y, Q]
      }), z, J ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(i.Clw, {}), (0, r.jsxs)(i.sNh, {
          id: "more-options",
          label: V.intl.string(V.t.PdRCRk),
          children: [q, K, W, B]
        })]
      }) : null]
    })
  }) : (0, r.jsx)(u.Z, {
    context: n,
    object: N.qAy.CONTEXT_MENU,
    children: (0, r.jsxs)(i.v2r, {
      navId: "stream-context",
      onClose: a.Zy,
      "aria-label": V.intl.string(V.t.Gl3Q39),
      variant: "flexible",
      onSelect: _,
      onInteraction: D,
      children: [(0, r.jsx)(i.kSQ, {
        children: (0, r.jsxs)(r.Fragment, {
          children: [L, G, Y, W, K]
        })
      }), (0, r.jsx)(i.kSQ, {
        children: Q
      }), z, (0, r.jsxs)(i.kSQ, {
        children: [(null == X ? true : X.isGuildStageVoice()) ? null : H, q, J && B]
      })]
    })
  })
}