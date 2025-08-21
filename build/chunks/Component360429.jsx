/** Chunk was on 5704 **/
/** chunk id: 360429, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => _
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
  Chunk906732 = require("./906732.jsx"),
  Chunk418469 = require("./418469.jsx"),
  Chunk701098 = require("./701098.jsx"),
  Chunk607783 = require("./607783.jsx"),
  Chunk435064 = require("./435064.js"),
  Chunk779618 = require("./779618.js"),
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

function N(e) {
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

function L(e) {
  return (0, i.e7)([v.Z], () => {
    let t = v.Z.getActiveStreamForApplicationStream(e);
    return null != t && (0, m.V9)(t) === (0, m.V9)(e)
  })
}

function _(e) {
  let {
    stream: t,
    analyticsContext: n,
    appContext: v,
    exitFullscreen: _,
    onSelect: M
  } = e, T = function(e) {
    let t = L(e),
      n = (0, O.Z)(E.Z),
      o = g.Z.getSettings().clipsEnabled,
      a = e.ownerId === w.default.getId(),
      {
        enableViewerClipping: c,
        ignoreSenderPreference: s
      } = y.Z.useExperiment({
        location: "StreamContextMenu"
      }, {
        autoTrackExposure: false
      }),
      u = (0, i.e7)([g.Z], () => g.Z.getIsAtMaxSaveClipOperations()),
      d = (0, i.e7)([g.Z], () => g.Z.isViewerClippingAllowedForUser(e.ownerId)) || s;
    return n && c && t ? (0, r.jsx)(l.sNh, {
      id: "clip-stream",
      disabled: !o || !(a || d) || u,
      label: A.intl.string(A.t.U4URzM),
      action: () => a ? (0, h.C1)() : (0, h.C1)((0, m.V9)(e))
    }) : null
  }(t), B = L(t), R = function(e) {
    let t = L(e),
      n = (0, S.Z)(e.ownerId, V.Yn.STREAM);
    return t ? n : null
  }(t), U = function(e) {
    let t, n = (0, i.e7)([j.Z], () => null != j.Z.getRemoteSessionId()),
      o = (0, i.e7)([Z.Z], () => Z.Z.getChannel(e.channelId), [e.channelId]),
      a = L(e),
      u = x.default.getCurrentUser(),
      d = null != u && e.ownerId === u.id;
    return (t = d ? A.intl.string(A.t.S5anIS) : a ? A.intl.string(A.t.q3O3Jy) : A.intl.string(A.t["7Xq/nZ"]), n || !d && a && (null == o ? true : o.isGuildStageVoice())) ? null : (0, r.jsx)(l.sNh, {
      id: "watch",
      label: t,
      action: a ? function() {
        (0, s.g)((0, m.V9)(e)), (0, C.Ws)(k.Odu.GO_LIVE, {
          type: C.Qu.GO_LIVE,
          value: C.bk.DISABLED,
          userId: e.ownerId
        })
      } : function() {
        c.default.selectVoiceChannel(e.channelId), (0, s.rn)(e), (0, C.Ws)(k.Odu.GO_LIVE, {
          type: C.Qu.GO_LIVE,
          value: C.bk.ENABLED,
          userId: e.ownerId
        })
      }
    })
  }(t), G = function(e) {
    let t = L(e),
      n = (0, i.e7)([E.Z], () => E.Z.isLocalMute(e.ownerId, V.Yn.STREAM)),
      a = x.default.getCurrentUser(),
      c = null != a && e.ownerId === a.id;
    return !t || c ? null : (0, r.jsx)(l.S89, {
      id: "mute",
      label: A.intl.string(A.t.sWmtIy),
      action: function() {
        o.Z.toggleLocalMute(e.ownerId, V.Yn.STREAM)
      },
      checked: n
    })
  }(t), J = function(e) {
    let t = L(e),
      n = e.ownerId === w.default.getId(),
      a = E.Z.supports(V.AN.SIDECHAIN_COMPRESSION),
      c = (0, i.e7)([E.Z], () => E.Z.getSidechainCompression()),
      s = (0, i.e7)([E.Z], () => E.Z.getSidechainCompressionStrength()),
      {
        analyticsLocations: u
      } = (0, d.ZP)();
    return !n && t && a ? (0, r.jsxs)(l.kSQ, {
      children: [(0, r.jsx)(l.S89, {
        id: "sidechain-compression",
        label: A.intl.string(A.t["/jwMtr"]),
        action: () => o.Z.setSidechainCompression(!c, {
          analyticsLocations: u
        }),
        checked: c
      }), (0, r.jsx)(l.II_, {
        id: "sidechain-parameters",
        label: A.intl.string(A.t.fhEzfn),
        control: (e, t) => (0, r.jsx)(l._wy, D(N({}, e), {
          ref: t,
          value: s,
          maxValue: 100,
          onChange: e => o.Z.setSidechainCompressionStrength(e, {
            analyticsLocations: u
          }),
          "aria-label": A.intl.string(A.t.fhEzfn)
        }))
      })]
    }) : null
  }(t), Q = (0, f.Z)(t, v, _), F = (0, b.G)({
    stream: t,
    channelId: t.channelId
  }), Y = (0, p.B)({
    userId: t.ownerId,
    channelId: t.channelId,
    guildId: t.guildId
  }), z = function(e) {
    let t = t => {
        (0, P.cq)(e, t)
      },
      n = (0, P.BO)(e);
    return (0, r.jsx)(l.II_, {
      id: "stream-zoom",
      label: A.intl.string(A.t.B3kEDg),
      control: (e, i) => (0, r.jsx)(l._wy, D(N({}, e), {
        ref: i,
        value: n,
        maxValue: 300,
        onChange: t,
        minValue: 100,
        "aria-label": A.intl.string(A.t.B3kEDg)
      }))
    })
  }(t), q = function(e) {
    let t = (0, P.xN)(e);
    return (0, r.jsx)(l.S89, {
      id: "fit",
      label: A.intl.string(A.t.mpnvra),
      action: () => {
        (0, P.gI)(e, t === I.L.CONTAIN ? I.L.COVER : I.L.CONTAIN)
      },
      checked: t === I.L.COVER
    })
  }(t);
  return (0, r.jsx)(u.Z, {
    context: n,
    object: k.qAy.CONTEXT_MENU,
    children: (0, r.jsxs)(l.v2r, {
      navId: "stream-context",
      onClose: a.Zy,
      "aria-label": A.intl.string(A.t.Gl3Q39),
      onSelect: M,
      children: [(0, r.jsxs)(l.kSQ, {
        children: [U, T, G, F, Y]
      }), (0, r.jsx)(l.kSQ, {
        children: R
      }), (0, r.jsxs)(l.kSQ, {
        children: [z, q]
      }), J, (0, r.jsx)(l.kSQ, {
        children: B && Q
      })]
    })
  })
}