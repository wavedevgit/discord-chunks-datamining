/** Chunk was on 22183 **/
/** chunk id: 987281, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => D
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
  Chunk111672 = require("./111672.js"),
  Chunk441167 = require("./441167.js"),
  Chunk700994 = require("./700994.jsx"),
  Chunk76021 = require("./76021.jsx"),
  Chunk199902 = require("./199902.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk131951 = require("./131951.js"),
  Chunk594174 = require("./594174.js"),
  Chunk358085 = require("./358085.js"),
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

function D(e) {
  let {
    stream: t,
    analyticsContext: n,
    appContext: C,
    exitFullscreen: D,
    onSelect: R,
    onInteraction: F,
    minimal: G = false
  } = e, J = (0, l.cj)([A.default], () => {
    var e;
    return (null == t ? true : t.ownerId) === (null == (e = A.default.getCurrentUser()) ? true : e.id)
  }), Q = function(e) {
    let t = _(e),
      n = (0, Z.Z)(k.Z),
      o = O.Z.getSettings().clipsEnabled,
      a = e.ownerId === P.default.getId(),
      {
        enableViewerClipping: c,
        ignoreSenderPreference: s
      } = I.Z.useExperiment({
        location: "StreamContextMenu"
      }, {
        autoTrackExposure: false
      }),
      u = (0, l.e7)([O.Z], () => O.Z.getIsAtMaxSaveClipOperations()),
      d = (0, l.e7)([O.Z], () => O.Z.isViewerClippingAllowedForUser(e.ownerId)) || s;
    return n && c && t ? (0, r.jsx)(i.sNh, {
      id: "clip-stream",
      disabled: !o || !(a || d) || u,
      label: U.intl.string(U.t.U4URzM),
      action: () => a ? (0, v.C1)() : (0, v.C1)((0, V.V9)(e))
    }) : null
  }(t), L = _(t), Y = function(e) {
    let t = _(e),
      n = (0, w.Z)(e.ownerId, T.Yn.STREAM);
    return t ? n : null
  }(t), z = function(e, t) {
    let n, o = (0, l.e7)([S.Z], () => null != S.Z.getRemoteSessionId()),
      a = (0, l.e7)([E.Z], () => E.Z.getChannel(e.channelId), [e.channelId]),
      u = _(e),
      d = A.default.getCurrentUser(),
      f = null != d && e.ownerId === d.id;
    return (n = f ? U.intl.string(U.t.S5anIS) : u ? U.intl.string(U.t.q3O3Jy) : U.intl.string(U.t["7Xq/nZ"]), o || !f && u && (null == a ? true : a.isGuildStageVoice())) ? null : (0, r.jsx)(i.sNh, {
      id: "watch",
      label: n,
      action: u ? function() {
        (0, s.g)((0, V.V9)(e))
      } : function() {
        c.default.selectVoiceChannel(e.channelId), (0, s.rn)(e)
      },
      icon: t && u && i.g5r
    })
  }(t, G), B = function(e) {
    let t = _(e),
      n = (0, l.e7)([k.Z], () => k.Z.isLocalMute(e.ownerId, T.Yn.STREAM)),
      a = A.default.getCurrentUser(),
      c = null != a && e.ownerId === a.id;
    return !t || c ? null : (0, r.jsx)(i.S89, {
      id: "mute",
      label: U.intl.string(U.t.sWmtIy),
      action: function() {
        o.Z.toggleLocalMute(e.ownerId, T.Yn.STREAM)
      },
      checked: n
    })
  }(t), q = function(e) {
    let t = _(e),
      n = e.ownerId === P.default.getId(),
      {
        sidechainAvailable: a
      } = y.Z.getCurrentConfig({
        location: "StreamContextMenu"
      }),
      c = (0, l.e7)([k.Z], () => k.Z.getSidechainCompression()),
      s = (0, l.e7)([k.Z], () => k.Z.getSidechainCompressionStrength()),
      {
        analyticsLocations: u
      } = (0, f.ZP)();
    return n || !t || !a || (0, M.isWeb)() ? null : (0, r.jsxs)(i.kSQ, {
      children: [(0, r.jsx)(i.S89, {
        id: "sidechain-compression",
        label: U.intl.string(U.t["/jwMtr"]),
        subtext: U.intl.string(U.t.zlA23N),
        action: () => o.Z.setSidechainCompression(!c, {
          analyticsLocations: u
        }),
        checked: c
      }), (0, r.jsx)(i.II_, {
        id: "sidechain-parameters",
        label: U.intl.string(U.t.fhEzfn),
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
            "aria-label": U.intl.string(U.t.fhEzfn)
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
    })
  }(t), W = (0, p.Z)(t, C, D), X = (0, b.Z)(t.channelId, t.ownerId), H = (0, g.Z)(t.channelId), K = (0, l.e7)([E.Z], () => E.Z.getChannel(t.channelId), [t.channelId]), $ = (0, h.G)({
    stream: t,
    channelId: t.channelId
  }), ee = (0, j.B)({
    userId: t.ownerId,
    channelId: t.channelId,
    guildId: t.guildId,
    minimal: G
  }), {
    analyticsLocations: et
  } = (0, f.ZP)(d.Z.STREAM_CONTEXT_MENU), en = (0, m.b)({
    stream: t,
    handleGoLive: () => (0, x.Z)(t.guildId, t.channelId, et),
    minimal: G,
    appContext: C
  });
  return G ? (0, r.jsx)(f.Gt, {
    value: et,
    children: (0, r.jsxs)(i.v2r, {
      navId: "stream-context",
      onClose: a.Zy,
      "aria-label": U.intl.string(U.t.Gl3Q39),
      variant: "fixed",
      onSelect: R,
      onInteraction: F,
      children: [(0, r.jsx)(i.kSQ, {
        children: J ? en : z
      }), (0, r.jsxs)(i.kSQ, {
        children: [B, Y]
      }), q, L ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(i.Clw, {}), (0, r.jsxs)(i.sNh, {
          id: "more-options",
          label: U.intl.string(U.t.PdRCRk),
          children: [X, ee, $, W]
        })]
      }) : null]
    })
  }) : (0, r.jsx)(u.Z, {
    context: n,
    object: N.qAy.CONTEXT_MENU,
    children: (0, r.jsxs)(i.v2r, {
      navId: "stream-context",
      onClose: a.Zy,
      "aria-label": U.intl.string(U.t.Gl3Q39),
      variant: "flexible",
      onSelect: R,
      onInteraction: F,
      children: [(0, r.jsx)(i.kSQ, {
        children: (0, r.jsxs)(r.Fragment, {
          children: [z, Q, B, $, ee]
        })
      }), (0, r.jsx)(i.kSQ, {
        children: Y
      }), q, (0, r.jsxs)(i.kSQ, {
        children: [(null == K ? true : K.isGuildStageVoice()) ? null : H, X, L && W]
      })]
    })
  })
}