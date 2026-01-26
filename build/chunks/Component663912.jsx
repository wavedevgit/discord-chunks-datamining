/** Chunk was on 61361 **/
/** chunk id: 663912, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => U
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk827343 = require("./827343.js"),
  Chunk442433 = require("./442433.js"),
  Chunk956793 = require("./956793.js"),
  Chunk401843 = require("./401843.js"),
  Chunk820284 = require("./820284.jsx"),
  Chunk688810 = require("./688810.jsx"),
  Chunk74329 = require("./74329.jsx"),
  Chunk304006 = require("./304006.jsx"),
  Chunk479335 = require("./479335.jsx"),
  Chunk274372 = require("./274372.js"),
  Chunk915618 = require("./915618.js"),
  Chunk572164 = require("./572164.js"),
  Chunk399925 = require("./399925.js"),
  Chunk643501 = require("./643501.js"),
  Chunk652896 = require("./652896.js"),
  Chunk401901 = require("./401901.jsx"),
  Chunk670470 = require("./670470.js"),
  Chunk972432 = require("./972432.jsx"),
  Chunk616356 = require("./616356.js"),
  Chunk961350 = require("./961350.js"),
  Chunk734057 = require("./734057.js"),
  Chunk430452 = require("./430452.js"),
  Chunk287809 = require("./287809.js"),
  Chunk810412 = require("./810412.js"),
  Chunk761661 = require("./761661.js"),
  Chunk652215 = require("./652215.js"),
  Chunk731854 = require("./731854.js"),
  Chunk985018 = require("./985018.jsx");

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

function N(e, t) {
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

function M(e) {
  return (0, o.bG)([w.A], () => {
    let t = w.A.getActiveStreamForApplicationStream(e);
    return null != t && (0, y._z)(t) === (0, y._z)(e)
  })
}

function U(e) {
  let t, n, w, U, X, R, z, F, Z, J, Y, B, $, K, q, H, Q, {
      stream: W,
      analyticsContext: ee,
      appContext: et,
      exitFullscreen: en,
      onSelect: er
    } = e,
    el = function(e) {
      let t = M(e),
        n = (0, A.A)(P.A),
        l = (0, h.Et)(),
        i = e.ownerId === x.default.getId(),
        {
          enableViewerClipping: s,
          ignoreSenderPreference: c
        } = S.A.useExperiment({
          location: "StreamContextMenu"
        }, {
          autoTrackExposure: false
        }),
        u = (0, o.bG)([O.A], () => O.A.getIsAtMaxSaveClipOperations()),
        d = (0, o.bG)([O.A], () => O.A.isViewerClippingAllowedForUser(e.ownerId)) || c;
      return n && s && t ? (0, r.jsx)(a.Drp, {
        id: "clip-stream",
        disabled: !l || !(i || d) || u,
        label: k.intl.string(k.t.U4URzP),
        action: () => i ? (0, j.l0)() : (0, j.yd)((0, y._z)(e))
      }) : null
    }(W),
    ei = M(W),
    eo = (t = M(W), n = l.useMemo(() => (0, i.debounce)(e => {
      (0, D.YX)(_.uss.GO_LIVE, {
        type: D.Z5.AUDIO,
        value: D.IP.SETTING_ADJUSTED,
        userId: W.ownerId
      })
    }, 1e3), [W.ownerId]), w = (0, v.A)(W.ownerId, T.x.STREAM, n), t ? w : null),
    ea = (X = (0, o.bG)([m.default], () => null != m.default.getRemoteSessionId()), R = (0, o.bG)([C.A], () => C.A.getChannel(W.channelId), [W.channelId]), z = M(W), (U = (Z = null != (F = V.default.getCurrentUser()) && W.ownerId === F.id) ? k.intl.string(k.t.S5anIc) : z ? k.intl.string(k.t.q3O3J8) : k.intl.string(k.t["7Xq/nV"]), X || !Z && z && (null == R ? true : R.isGuildStageVoice())) ? null : (0, r.jsx)(a.Drp, {
      id: "watch",
      label: U,
      action: z ? function() {
        (0, d.vN)((0, y._z)(W)), (0, D.YX)(_.uss.GO_LIVE, {
          type: D.Z5.GO_LIVE,
          value: D.IP.DISABLED,
          userId: W.ownerId
        })
      } : function() {
        u.default.selectVoiceChannel(W.channelId), (0, d.A9)(W), (0, D.YX)(_.uss.GO_LIVE, {
          type: D.Z5.GO_LIVE,
          value: D.IP.ENABLED,
          userId: W.ownerId
        })
      }
    })),
    es = (J = M(W), Y = (0, o.bG)([P.A], () => P.A.isLocalMute(W.ownerId, T.x.STREAM)), $ = null != (B = V.default.getCurrentUser()) && W.ownerId === B.id, !J || $ ? null : (0, r.jsx)(a.sLh, {
      id: "mute",
      label: k.intl.string(k.t.sWmtI6),
      action: function() {
        s.A.toggleLocalMute(W.ownerId, T.x.STREAM)
      },
      checked: Y
    })),
    ec = function(e) {
      let t = M(e),
        n = e.ownerId === x.default.getId(),
        l = P.A.supports(T.O5.SIDECHAIN_COMPRESSION),
        i = (0, o.bG)([P.A], () => P.A.getSidechainCompression()),
        c = (0, o.bG)([P.A], () => P.A.getSidechainCompressionStrength()),
        {
          analyticsLocations: u
        } = (0, p.Ay)();
      return !n && t && l ? (0, r.jsxs)(a.rXV, {
        children: [(0, r.jsx)(a.sLh, {
          id: "sidechain-compression",
          label: k.intl.string(k.t["/jwMtn"]),
          action: () => s.A.setSidechainCompression(!i, {
            analyticsLocations: u
          }),
          checked: i
        }), (0, r.jsx)(a.aK1, {
          id: "sidechain-parameters",
          label: k.intl.string(k.t.fhEzfj),
          control: (e, t) => (0, r.jsx)(a.i42, N(L({}, e), {
            ref: t,
            value: c,
            maxValue: 100,
            onChange: e => s.A.setSidechainCompressionStrength(e, {
              analyticsLocations: u
            }),
            "aria-label": k.intl.string(k.t.fhEzfj)
          }))
        })]
      }) : null
    }(W),
    eu = (0, f.A)(W, et, en),
    ed = (0, g.h)({
      stream: W,
      channelId: W.channelId
    }),
    eb = (0, I.u)({
      userId: W.ownerId,
      channelId: W.channelId,
      guildId: W.guildId
    }),
    ep = (K = l.useMemo(() => (0, i.debounce)(() => {
      (0, D.YX)(_.uss.GO_LIVE, {
        type: D.Z5.SCREEN_SHARE,
        value: D.IP.SETTING_ADJUSTED,
        userId: W.ownerId
      })
    }, 1e3), [W.ownerId]), q = e => {
      (0, G.Qp)(W, e), K()
    }, H = (0, G.f4)(W), (0, r.jsx)(a.aK1, {
      id: "stream-zoom",
      label: k.intl.string(k.t.B3kEDs),
      control: (e, t) => (0, r.jsx)(a.i42, N(L({}, e), {
        ref: t,
        value: H,
        maxValue: 300,
        onChange: q,
        minValue: 100,
        "aria-label": k.intl.string(k.t.B3kEDs)
      }))
    })),
    ef = (Q = (0, G.XG)(W), (0, r.jsx)(a.sLh, {
      id: "fit",
      label: k.intl.string(k.t.mpnvrV),
      action: () => {
        (0, G.CZ)(W, Q === E.$.CONTAIN ? E.$.COVER : E.$.CONTAIN), (0, D.YX)(_.uss.GO_LIVE, {
          type: D.Z5.GO_LIVE,
          value: D.IP.SETTING_ADJUSTED,
          userId: W.ownerId
        })
      },
      checked: Q === E.$.COVER
    }));
  return (0, r.jsx)(b.A, {
    context: ee,
    object: _.ZSU.CONTEXT_MENU,
    children: (0, r.jsxs)(a.W1t, {
      "data-menu-mixed": true,
      navId: "stream-context",
      onClose: c.Z_,
      "aria-label": k.intl.string(k.t.Gl3Q30),
      onSelect: er,
      children: [(0, r.jsxs)(a.rXV, {
        children: [ea, el, es, ed, eb]
      }), (0, r.jsx)(a.rXV, {
        children: eo
      }), (0, r.jsxs)(a.rXV, {
        children: [ep, ef]
      }), ec, (0, r.jsx)(a.rXV, {
        children: ei && eu
      })]
    })
  })
}