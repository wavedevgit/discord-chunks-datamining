/** Chunk was on 22183 **/
/** chunk id: 987281, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => F
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
  Chunk434500 = require("./434500.jsx"),
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

function _(e) {
  return (0, l.e7)([C.Z], () => {
    let t = C.Z.getActiveStreamForApplicationStream(e);
    return null != t && (0, V.V9)(t) === (0, V.V9)(e)
  })
}

function F(e) {
  let {
    stream: t,
    analyticsContext: n,
    appContext: C,
    exitFullscreen: F,
    onSelect: D,
    onInteraction: Q,
    minimal: U = false
  } = e, R = (0, l.cj)([A.default], () => {
    var e;
    return (null == t ? true : t.ownerId) === (null == (e = A.default.getCurrentUser()) ? true : e.id)
  }), G = function(e) {
    let t = _(e),
      n = (0, O.Z)(E.Z),
      o = I.Z.getSettings().clipsEnabled,
      a = e.ownerId === P.default.getId(),
      {
        enableViewerClipping: c,
        ignoreSenderPreference: s
      } = y.Z.useExperiment({
        location: "StreamContextMenu"
      }, {
        autoTrackExposure: false
      }),
      u = (0, l.e7)([I.Z], () => I.Z.getIsAtMaxSaveClipOperations()),
      d = (0, l.e7)([I.Z], () => I.Z.isViewerClippingAllowedForUser(e.ownerId)) || s;
    return n && c && t ? (0, r.jsx)(i.sNh, {
      id: "clip-stream",
      disabled: !o || !(a || d) || u,
      label: M.intl.string(M.t.U4URzP),
      action: () => a ? (0, v.br)() : (0, v.C1)((0, V.V9)(e))
    }) : null
  }(t), Y = _(t), J = function(e) {
    let t = _(e),
      n = (0, x.Z)(e.ownerId, N.Yn.STREAM);
    return t ? n : null
  }(t), L = function(e, t) {
    let n, o = (0, l.e7)([S.default], () => null != S.default.getRemoteSessionId()),
      a = (0, l.e7)([k.Z], () => k.Z.getChannel(e.channelId), [e.channelId]),
      u = _(e),
      d = A.default.getCurrentUser(),
      f = null != d && e.ownerId === d.id;
    return (n = f ? M.intl.string(M.t.S5anIc) : u ? M.intl.string(M.t.q3O3J8) : M.intl.string(M.t["7Xq/nV"]), o || !f && u && (null == a ? true : a.isGuildStageVoice())) ? null : (0, r.jsx)(i.sNh, {
      id: "watch",
      label: n,
      action: u ? function() {
        (0, s.g)((0, V.V9)(e))
      } : function() {
        c.default.selectVoiceChannel(e.channelId), (0, s.rn)(e)
      },
      icon: t && u && i.g5r
    })
  }(t, U), z = function(e) {
    let t = _(e),
      n = (0, l.e7)([E.Z], () => E.Z.isLocalMute(e.ownerId, N.Yn.STREAM)),
      a = A.default.getCurrentUser(),
      c = null != a && e.ownerId === a.id;
    return !t || c ? null : (0, r.jsx)(i.S89, {
      id: "mute",
      label: M.intl.string(M.t.sWmtI6),
      action: function() {
        o.Z.toggleLocalMute(e.ownerId, N.Yn.STREAM)
      },
      checked: n
    })
  }(t), B = function(e) {
    let t = _(e),
      n = e.ownerId === P.default.getId(),
      a = E.Z.supports(N.AN.SIDECHAIN_COMPRESSION),
      c = (0, l.e7)([E.Z], () => E.Z.getSidechainCompression()),
      s = (0, l.e7)([E.Z], () => E.Z.getSidechainCompressionStrength()),
      {
        analyticsLocations: u
      } = (0, f.ZP)();
    return !n && t && a ? (0, r.jsxs)(i.kSQ, {
      children: [(0, r.jsx)(i.S89, {
        id: "sidechain-compression",
        label: M.intl.string(M.t["/jwMtn"]),
        subtext: M.intl.string(M.t.zlA23F),
        action: () => o.Z.setSidechainCompression(!c, {
          analyticsLocations: u
        }),
        checked: c
      }), (0, r.jsx)(i.II_, {
        id: "sidechain-parameters",
        label: M.intl.string(M.t.fhEzfj),
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
            "aria-label": M.intl.string(M.t.fhEzfj)
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
  }(t), X = (0, h.Z)(t, C, F), q = (0, b.Z)(t.channelId, t.ownerId), H = (0, g.Z)(t.channelId), W = (0, p.Z)(t.channelId, (0, V.V9)(t)), K = (0, l.e7)([k.Z], () => k.Z.getChannel(t.channelId), [t.channelId]), $ = (0, j.G)({
    stream: t,
    channelId: t.channelId
  }), ee = (0, m.B)({
    userId: t.ownerId,
    channelId: t.channelId,
    guildId: t.guildId,
    minimal: U
  }), {
    analyticsLocations: et
  } = (0, f.ZP)(d.Z.STREAM_CONTEXT_MENU), en = (0, Z.b)({
    stream: t,
    handleGoLive: () => (0, w.Z)(t.guildId, t.channelId, et),
    minimal: U,
    appContext: C
  });
  return U ? (0, r.jsx)(f.Gt, {
    value: et,
    children: (0, r.jsxs)(i.v2r, {
      navId: "stream-context",
      onClose: a.Zy,
      "aria-label": M.intl.string(M.t.Gl3Q30),
      variant: "fixed",
      onSelect: D,
      onInteraction: Q,
      children: [(0, r.jsx)(i.kSQ, {
        children: R ? en : L
      }), (0, r.jsxs)(i.kSQ, {
        children: [z, J]
      }), (0, r.jsx)(i.kSQ, {
        children: W
      }), B, Y ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(i.Clw, {}), (0, r.jsxs)(i.sNh, {
          id: "more-options",
          label: M.intl.string(M.t.PdRCRg),
          children: [q, ee, $, X]
        })]
      }) : null]
    })
  }) : (0, r.jsx)(u.Z, {
    context: n,
    object: T.qAy.CONTEXT_MENU,
    children: (0, r.jsxs)(i.v2r, {
      navId: "stream-context",
      onClose: a.Zy,
      "aria-label": M.intl.string(M.t.Gl3Q30),
      variant: "flexible",
      onSelect: D,
      onInteraction: Q,
      children: [(0, r.jsx)(i.kSQ, {
        children: (0, r.jsxs)(r.Fragment, {
          children: [L, G, z, $, ee]
        })
      }), (0, r.jsx)(i.kSQ, {
        children: J
      }), (0, r.jsx)(i.kSQ, {
        children: W
      }), B, (0, r.jsxs)(i.kSQ, {
        children: [(null == K ? true : K.isGuildStageVoice()) ? null : H, q, Y && X]
      })]
    })
  })
}