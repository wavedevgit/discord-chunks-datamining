/** Chunk was on web.js **/
/** chunk id: 794704, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => e$
}), require("./953529.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk348327 = require("./348327.js"),
  l = require.n(Chunk348327),
  Chunk512722 = require("./512722.js"),
  u = require.n(Chunk512722),
  Chunk392711 = require("./392711.js"),
  f = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk224706 = require("./224706.js"),
  Chunk660216 = require("./660216.js"),
  Chunk765250 = require("./765250.js"),
  Chunk13245 = require("./13245.js"),
  Chunk825209 = require("./825209.jsx"),
  Chunk593472 = require("./593472.js"),
  Chunk493773 = require("./493773.js"),
  Chunk100527 = require("./100527.js"),
  Chunk812206 = require("./812206.js"),
  Chunk835473 = require("./835473.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk594190 = require("./594190.js"),
  Chunk137920 = require("./137920.js"),
  Chunk320724 = require("./320724.js"),
  Chunk925329 = require("./925329.jsx"),
  Chunk297700 = require("./297700.jsx"),
  Chunk444295 = require("./444295.js"),
  Chunk486016 = require("./486016.js"),
  Chunk837268 = require("./837268.js"),
  Chunk32300 = require("./32300.js"),
  Chunk809357 = require("./809357.js"),
  Chunk371651 = require("./371651.js"),
  Chunk829907 = require("./829907.js"),
  Chunk624864 = require("./624864.js"),
  Chunk610394 = require("./610394.js"),
  Chunk957148 = require("./957148.jsx"),
  Chunk932404 = require("./932404.js"),
  Chunk398269 = require("./398269.jsx"),
  Chunk340101 = require("./340101.js"),
  Chunk243487 = require("./243487.jsx"),
  Chunk430561 = require("./430561.jsx"),
  Chunk509003 = require("./509003.js"),
  Chunk865066 = require("./865066.js"),
  Chunk894300 = require("./894300.jsx"),
  Chunk131704 = require("./131704.js"),
  Chunk598077 = require("./598077.js"),
  Chunk189786 = require("./189786.js"),
  Chunk77498 = require("./77498.js"),
  Chunk355863 = require("./355863.js"),
  Chunk283595 = require("./283595.js"),
  Chunk594174 = require("./594174.js"),
  Chunk556296 = require("./556296.js"),
  Chunk808506 = require("./808506.js"),
  Chunk237997 = require("./237997.js"),
  Chunk626135 = require("./626135.js"),
  Chunk823379 = require("./823379.js"),
  Chunk358085 = require("./358085.js"),
  Chunk13140 = require("./13140.js"),
  Chunk145597 = require("./145597.js"),
  Chunk273313 = require("./273313.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk987650 = require("./987650.js"),
  Chunk501787 = require("./501787.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk607547 = require("./607547.js"),
  Chunk131970 = require("./131970.js"),
  Chunk730462 = require("./730462.js");

function ey(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function eO(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      ey(e, t, n[t])
    })
  }
  return e
}

function ev(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function eI(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ev(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function eT(e, t) {
  if (null == e) return {};
  var n, r, i = eS(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function eS(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let eA = eL(null),
  eC = 20,
  eN = 16,
  eR = 1,
  eP = 25,
  eD = [0, 5, 10, 15, 20, 25];

function ew() {
  let e = eL(eA);
  f().isEqual(module, eA) || (Chunk626135.default.track(Chunk981631.rMx.OVERLAY_SETTINGS_UPDATED, module), eA = module)
}

function eL(e) {
  var t;
  let n = ea.default.getNotificationPositionMode(),
    r = n !== ef._vf.DISABLED,
    i = er.ZP.getOverlayKeybind(),
    a = er.ZP.getOverlayChatKeybind();
  return {
    enabled: ei.default.enabled,
    notifications_enabled: r,
    notifications_position: r ? n : null,
    text_notifications_mode: G.Z.isNotificationDisabled(ep.n0.TextChat) ? "DISABLED" : "ENABLED",
    hotkey: null != i ? (0, ec.BB)(i.shortcut) : null,
    text_activation_hotkey: null != a ? (0, ec.BB)(a.shortcut) : null,
    text_opacity_slider: ea.default.getTextWidgetOpacity(),
    old_enabled: null != (t = null == e ? true : e.enabled) ? t : ei.default.enabled
  }
}

function ex(e) {
  let {
    header: t,
    icon: n,
    title: i,
    description: a,
    action: s,
    hint: l,
    warning: c,
    onClick: u,
    "aria-label": d,
    className: f
  } = e;
  return (0, r.jsxs)("div", {
    className: o()(eg.groupContainer, f),
    children: [(0, r.jsxs)(h.kL8, {
      "aria-label": d,
      onClick: u,
      children: [null != t && (0, r.jsx)("div", {
        className: eg.groupHeader,
        children: t
      }), (0, r.jsxs)("div", {
        className: eg.groupContent,
        children: [null != n && (0, r.jsx)("div", {
          className: eg.groupIcon,
          children: n
        }), (0, r.jsxs)("div", {
          className: eg.groupMainContent,
          children: [(0, r.jsx)(h.Text, {
            variant: "text-md/medium",
            color: "header-primary",
            className: eg.groupTitle,
            children: i
          }), null != a && (0, r.jsx)(h.Text, {
            variant: "text-sm/normal",
            color: "text-secondary",
            children: a
          }), null != l && (0, r.jsx)(h.Text, {
            variant: "text-xxs/medium",
            color: "text-muted",
            children: l
          })]
        }), (0, r.jsx)("div", {
          className: eg.groupAction,
          children: s
        })]
      })]
    }), (0, r.jsx)("div", {
      className: eg.groupWarning,
      children: c
    })]
  })
}

function eM(e) {
  var {
    children: t,
    className: n,
    onExpand: a
  } = e, s = eT(e, ["children", "className", "onExpand"]);
  let [l, c] = i.useState(false), u = e => {
    c(e), null == a || a(e)
  };
  return (0, r.jsx)(h.zF9, {
    className: eg.collapseable,
    collapsibleContent: (0, r.jsx)("div", {
      className: eg.groupCollapsedContainer,
      children: t
    }),
    children: e => {
      let {
        onClick: t
      } = e;
      return (0, r.jsx)(ex, eI(eO({}, s), {
        onClick: e => {
          u(!l), null == t || t(e)
        },
        className: o()(eg.mainCollapseableContainer, n),
        action: (0, r.jsxs)("div", {
          className: eg.groupCollapsedAction,
          children: [s.action, l ? (0, r.jsx)(h.CJ0, {
            size: "custom",
            width: eC,
            height: eC,
            color: "var(--interactive-active)"
          }) : (0, r.jsx)(h.Fbu, {
            size: "custom",
            width: eC,
            height: eC,
            color: "var(--interactive-active)"
          })]
        })
      }))
    }
  })
}
let ek = new Set([Chunk837268.mM.INITIALIZING, Chunk837268.mM.WAITING_FOR_SCREEN_TYPE_RESOLUTION, Chunk837268.mM.WAITING_FOR_MODULE_TRACKING, Chunk837268.mM.WAITING_FOR_OVERLAY_OPEN, Chunk837268.mM.WAITING_FOR_POPOUT_OPEN, Chunk837268.mM.WAITING_FOR_MODULE_POPOUT_CAPTURE, Chunk837268.mM.WAITING_FOR_REACT_INITIALIZATION, Chunk837268.mM.WAITING_FOR_PID_FOCUS, Chunk837268.mM.WAITING_FOR_SUCCESSFUL_SHOW]),
  ej = e => {
    e.preventDefault(), e.stopPropagation()
  };

function eU(e) {
  var t, n, a;
  let {
    runningGame: o,
    runningGameApplication: s
  } = e, c = null == o ? true : o.pid, u = (0, _.e7)([j.default], () => null == o || null == c ? null : j.default.getTrackedGameByPid(c), [o, c], l()), {
    enabledLegacy: d,
    enabledOOP: f
  } = (0, _.cj)([$.Z, et.Z], () => {
    if (null == o && null == u) return {
      enabledLegacy: false,
      enabledOOP: false
    };
    if (null == o) {
      var e, t;
      return {
        enabledLegacy: null != (e = null == u ? true : u.legacyEnabled) && e,
        enabledOOP: null != (t = null == u ? true : u.oopEnabled) && t
      }
    }
    return (0, C.b6)(o, false, [$.Z, et.Z])
  }, [o, u]), p = (0, _.e7)([C.ZP, $.Z, et.Z], () => null == o ? null : (0, C.FZ)(o, C.ZP, $.Z, et.Z), [o], l()), [g, E] = i.useState(f), [y, I] = i.useState(d), [T, S] = i.useState(false);
  i.useEffect(() => {
    E(f), I(d)
  }, [f, d]);
  let A = !(0, eu.supportsLegacy)(),
    N = !(0, eu.supportsOutOfProcess)(),
    {
      legacyEnabled: R,
      oopEnabled: L
    } = (0, _.cj)([j.default], () => j.default.getGlobalEnabledStatus()),
    M = (e, t) => {
      var n, r, i;
      if (null == o) return;
      let a = false,
        s = false;
      switch (t) {
        case w.OverlayToggledClientSettingType.LEGACY_GAME:
          I(e), m.Z.toggleOverlay(o, e, g), a = !e && y;
          break;
        case w.OverlayToggledClientSettingType.OOP_GAME:
          E(e), m.Z.toggleOverlay(o, y, e), s = !e && g;
          break;
        case w.OverlayToggledClientSettingType.LEGACY:
          b.Z.setEnabled(e, L), (0, w.ou)(e, w.OverlayToggledClientSettingType.LEGACY, null != (n = o.id) ? n : null);
          break;
        case w.OverlayToggledClientSettingType.OOP:
          b.Z.setEnabled(R, e), (0, w.ou)(e, w.OverlayToggledClientSettingType.OOP, null != (r = o.id) ? r : null)
      }(a || s) && (0, Z.l)(a ? w.OverlayToggledClientSettingType.LEGACY_GAME : w.OverlayToggledClientSettingType.OOP_GAME, null != (i = o.id) ? i : null)
    },
    k = (e, t) => {
      let n = !t && e,
        r = !L && g,
        i = !R && y,
        a = !g && L,
        o = !y && R;
      switch (true) {
        case n && (r || i) && (a || o):
          return "both";
        case n && (r || i):
          return "global";
        default:
          return "game"
      }
    },
    U = (e, t) => {
      if (null == o) return;
      let n = false,
        r = false;
      switch (t) {
        case "game":
          m.Z.toggleOverlay(o, e, e), I(e), E(e), n = !e && y, r = !e && g;
          break;
        case "global":
          b.Z.setEnabled(e, e), n = !e && R, r = !e && L;
          break;
        case "both":
          b.Z.setEnabled(e, e), m.Z.toggleOverlay(o, e, e), I(e), E(e), n = !e && R || !e && y, r = !e && L || !e && g
      }
      let i = null;
      if (n ? i = "game" === t ? w.OverlayToggledClientSettingType.LEGACY_GAME : w.OverlayToggledClientSettingType.LEGACY : r && (i = "game" === t ? w.OverlayToggledClientSettingType.OOP_GAME : w.OverlayToggledClientSettingType.OOP), null != i) {
        var a;
        (0, Z.l)(i, null != (a = o.id) ? a : null)
      }
    },
    G = A && N,
    B = !R && !L,
    F = !g && !R && y && !A,
    V = !y && !L && g && !N,
    H = (null == u ? true : u.overlayMethod) === x.gl.Disabled,
    Y = (null == u ? true : u.state) === x.mM.OVERLAY_RENDERING && !H,
    W = (null == u ? true : u.state) != null && ek.has(u.state) && !H,
    K = (null == u ? true : u.overlayMethod) === x.gl.OutOfProcess,
    z = (null == u ? true : u.overlayMethod) === x.gl.OutOfProcessLimitedInteraction,
    X = (null == u ? true : u.overlayMethod) === x.gl.Hook,
    Q = (null == u ? true : u.state) === x.mM.OVERLAY_CRASHED || (null == u ? true : u.state) === x.mM.OVERLAY_CRASHED_DISABLED,
    J = !g && !y,
    [ee, en] = (() => {
      switch (true) {
        case Y && K:
          function e(e, t) {
            return (0, r.jsx)(h.Text, {
              tag: "span",
              variant: "text-sm/medium",
              color: "text-feedback-positive",
              children: e
            }, t)
          }
          return [em.intl.format(em.t.hFVBIg, {
            overlayMethod: em.intl.string(em.t.a3eXSw),
            overlayMethodHook: e
          }), null];
        case Y && z:
          function t(e, t) {
            return (0, r.jsx)(h.Text, {
              tag: "span",
              variant: "text-sm/medium",
              color: "text-feedback-warning",
              children: e
            }, t)
          }
          return [em.intl.format(em.t.hFVBIg, {
            overlayMethod: em.intl.string(em.t["506Aba"]),
            overlayMethodHook: t
          }), null];
        case Y && X:
          function n() {
            var e, t;
            switch (true) {
              case (null == u ? true : u.fullscreenType) !== O.Jx.BORDERLESS_FULLSCREEN:
                return em.intl.string(em.t.mJmbeC);
              case N:
                return em.intl.string(em.t.C7bLTQ);
              case !(null != (e = null == u ? true : u.oopEnabled) && e):
                return em.intl.string(em.t.WiY24u);
              case !L:
                return em.intl.string(em.t.cAFVsL);
              case !(null != (t = null == u ? true : u.supportsOutOfProcess) && t):
                return em.intl.string(em.t.XcGEcs);
              default:
                return em.intl.string(em.t.bJXH2v)
            }
          }

          function i(e, t) {
            return (0, r.jsx)(h.Text, {
              tag: "span",
              variant: "text-sm/medium",
              color: "text-primary",
              children: e
            }, t)
          }
          return [em.intl.format(em.t.hFVBIg, {
            overlayMethod: em.intl.string(em.t.bvlpDR),
            overlayMethodHook: i
          }), n()];
        case Q:
          return [em.intl.string(em.t.OFC2aw), null];
        case G:
          return [em.intl.string(em.t.m7X4az), null];
        case B:
          return [em.intl.string(em.t["9DUS5l"]), null];
        case J:
          return [em.intl.string(em.t.nQ9EdJ), null];
        case F:
        case V:
          return [em.intl.string(em.t.VWUn0a), null];
        case W:
          if (K) return [em.intl.string(em.t["s8+CFq"]), null];
          if (X) return [em.intl.string(em.t.JEEdqt), null];
          if (z) return [em.intl.string(em.t.pzBMwY), null];
          return [em.intl.string(em.t["2Xhy9k"]), null];
        case null == u:
          return [em.intl.string(em.t.vwHPRi), null];
        case H: {
          let e = (null == u ? true : u.fullscreenType) === O.Jx.FULLSCREEN ? em.intl.string(em.t.mJmbeC) : null;
          return [em.intl.string(em.t.VPW4XY), e]
        }
        default:
          return [em.intl.string(em.t.ONovP5), null]
      }
    })();
  (0, v.ZP)(() => {
    m.Z.getDetectableGames()
  });
  let [er, ei] = i.useMemo(() => W ? ["text-muted", h.TVs.colors.TEXT_MUTED.css] : Y && z ? ["text-feedback-warning", h.TVs.colors.TEXT_FEEDBACK_WARNING.css] : Y && K ? ["text-feedback-positive", h.TVs.colors.TEXT_FEEDBACK_POSITIVE.css] : Y && X ? ["text-primary", h.TVs.colors.TEXT_PRIMARY.css] : ["interactive-normal", h.TVs.colors.INTERACTIVE_NORMAL.css], [W, Y, z, K, X]);
  return null == o ? null : (0, r.jsxs)(eM, {
    onExpand: S,
    className: T ? eg.expandedContainer : true,
    title: (0, r.jsxs)(r.Fragment, {
      children: [null != (a = null != (n = null != (t = null == s ? true : s.name) ? t : null == p ? true : p.name) ? n : null == o ? true : o.gameName) ? a : "", null != p && p.verified ? (0, r.jsx)(h.aML, {
        "data-migration-pending": true,
        text: em.intl.string(em.t["4PJP5p"]),
        children: e => (0, r.jsx)(D.Z, eI(eO({
          size: eN,
          color: h.TVs.colors.BG_BRAND.css
        }, e), {
          children: (0, r.jsx)(h.kmB, {
            size: "custom",
            width: eN,
            height: eN,
            color: h.TVs.colors.WHITE.css
          })
        }))
      }) : null]
    }),
    description: ee,
    hint: null != en ? en : true,
    header: (0, r.jsxs)(r.Fragment, {
      children: [Y || W ? (0, r.jsx)(h.pzj, {
        size: "xxs",
        color: ei
      }) : (0, r.jsx)("div", {
        className: eg.playingDot
      }), (0, r.jsx)(h.Text, {
        variant: "text-xs/semibold",
        color: er,
        children: em.intl.string(em.t.CDOx3w)
      })]
    }),
    icon: (0, r.jsx)(P.Z, {
      game: s,
      pid: null == o ? true : o.pid,
      size: P.A.MEDIUM
    }),
    "aria-label": em.intl.string(em.t["87O5GC"]),
    action: (0, r.jsx)(h.P3F, {
      onClick: e => ej(e),
      children: (0, r.jsx)(h.rsf, {
        checked: g && L || y && R,
        disabled: G,
        onChange: e => {
          U(e, k(e, g && L || y && R))
        }
      })
    }),
    warning: (0, r.jsx)(q.Z, {
      className: eg.systemServiceWarning,
      game: o
    }),
    children: [(0, r.jsx)(ex, {
      title: em.intl.string(em.t["7BlVIs"]),
      description: em.intl.string(em.t.ndgADE),
      hint: L ? true : em.intl.string(em.t.cAFVsL),
      "aria-label": em.intl.string(em.t["7BlVIs"]),
      action: (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(h.rsf, {
          checked: g && L,
          disabled: N,
          onChange: e => {
            e && !L ? M(e, w.OverlayToggledClientSettingType.OOP) : M(e, w.OverlayToggledClientSettingType.OOP_GAME)
          }
        }), (0, r.jsx)("div", {
          className: eg.emptySpacer
        })]
      })
    }), (0, r.jsx)(ex, {
      title: em.intl.string(em.t.BfFpW1),
      description: em.intl.string(em.t.OzInYk),
      hint: R ? true : em.intl.string(em.t["3sYHXm"]),
      "aria-label": em.intl.string(em.t.BfFpW1),
      action: (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(h.rsf, {
          checked: y && R,
          disabled: A,
          onChange: e => {
            e && !R ? M(e, w.OverlayToggledClientSettingType.LEGACY) : M(e, w.OverlayToggledClientSettingType.LEGACY_GAME)
          }
        }), (0, r.jsx)("div", {
          className: eg.emptySpacer
        })]
      })
    })]
  })
}

function eG(e) {
  let {
    game: t,
    gameApplication: n
  } = e, a = i.useMemo(() => null == t ? null : "pid" in t ? t.pid : null, [t]), o = (0, _.e7)([T.Z], () => null != n ? n : T.Z.getApplication(null == t ? true : t.id), [n, t]);
  return (0, r.jsx)(P.Z, {
    game: o,
    pid: a,
    size: P.A.SMALL
  })
}

function eB(e) {
  let {
    rawGame: t,
    gameApplication: n,
    supportDisabled: a,
    getEnabledFromStatus: o,
    onChange: s,
    clientSettingType: l,
    ariaLabel: c
  } = e, u = (0, _.cj)([C.ZP, $.Z, et.Z], () => (0, C.FZ)(t, C.ZP, $.Z, et.Z)), d = (0, _.cj)([$.Z, et.Z], () => (0, C.b6)(t, false, [$.Z, et.Z]), [t]), f = o(d), [p, m] = i.useState(f);
  i.useEffect(() => {
    m(f)
  }, [f]);
  let g = e => {
    let n = !e && p;
    if (m(e), s(e, u, d), n) {
      var r, i;
      (0, Z.l)(l, null != (i = null != (r = u.id) ? r : null == t ? true : t.id) ? i : null)
    }
  };
  return (0, r.jsx)(ex, {
    title: t.name,
    icon: (0, r.jsx)(eG, {
      game: u,
      gameApplication: n
    }),
    "aria-label": c,
    action: (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(h.rsf, {
        checked: p,
        disabled: a,
        onChange: e => g(e)
      }), (0, r.jsx)("div", {
        className: eg.emptySpacer
      })]
    })
  })
}

function eZ() {
  let [e, t] = Chunk473749.useState(false), {
    legacyEnabled: n,
    oopEnabled: a
  } = (0, Chunk442837.cj)([Chunk371651.default], () => Chunk371651.default.getGlobalEnabledStatus()), o = (0, Chunk442837.Wu)([Chunk594190.ZP], () => Chunk594190.ZP.getGamesSeen(true)).filter(e => !(0, K.le)(e)), s = (0, Chunk835473.Z)(o.map(e => e.id)), l = !(0, Chunk145597.supportsLegacy)(), c = e => {
    var t, r;
    b.Z.setEnabled(e, a);
    let i = null != (r = null == (t = C.ZP.getCurrentGameForAnalytics()) ? true : t.id) ? r : null;
    (0, w.ou)(e, w.OverlayToggledClientSettingType.LEGACY, i), !e && n && (0, Z.l)(w.OverlayToggledClientSettingType.LEGACY, i)
  }, u = (e, t, n) => {
    let {
      enabledOOP: r
    } = n;
    m.Z.toggleOverlay(t, e, r)
  }, d = Chunk473749.useMemo(() => (0, Chunk145597.supportsLegacy)() ? l ? Chunk388032.intl.string(Chunk388032.t.r9jEVw) : Chunk388032.intl.string(Chunk388032.t.OzInYk) : Chunk388032.intl.string(Chunk388032.t["8Ox6/E"]), [l]);
  return 0 === o.length ? (0, Chunk54381.jsx)(ex, {
    title: Chunk388032.intl.string(Chunk388032.t.BfFpW1),
    description: Chunk392711,
    "aria-label": Chunk388032.intl.string(Chunk388032.t.BfFpW1),
    className: Chunk607547.standaloneContainer,
    action: (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
      children: [(0, Chunk54381.jsx)(Chunk481060.rsf, {
        checked: require,
        disabled: l,
        onChange: e => c(e)
      }), Chunk987650.iP && (0, Chunk54381.jsx)("div", {
        className: Chunk607547.emptySpacer
      })]
    })
  }) : (0, Chunk54381.jsxs)(eM, {
    onExpand: exports,
    className: module ? Chunk607547.expandedContainer : true,
    title: Chunk388032.intl.string(Chunk388032.t.BfFpW1),
    description: Chunk392711,
    "aria-label": Chunk388032.intl.string(Chunk388032.t.BfFpW1),
    action: (0, Chunk54381.jsx)(Chunk481060.P3F, {
      onClick: e => ej(e),
      children: (0, Chunk54381.jsx)(Chunk481060.rsf, {
        checked: require,
        disabled: l,
        onChange: e => c(e)
      })
    }),
    children: [(0, Chunk54381.jsx)("div", {
      className: Chunk607547.subtitleContainer,
      children: (0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "text-xs/semibold",
        color: "text-muted",
        children: Chunk388032.intl.string(Chunk388032.t.FzoWRo)
      })
    }), (0, Chunk54381.jsx)(Chunk481060.zJl, {
      className: Chunk607547.scroller,
      children: o.map((e, t) => (0, r.jsx)(eB, {
        rawGame: e,
        clientSettingType: w.OverlayToggledClientSettingType.LEGACY_GAME,
        supportDisabled: l,
        gameApplication: s[t],
        getEnabledFromStatus: e => {
          let {
            enabledLegacy: t
          } = e;
          return t
        },
        onChange: u,
        ariaLabel: em.intl.format(em.t.hvPYsF, {
          gameName: e.name
        }).toString()
      }, e.id))
    })]
  })
}

function eF() {
  let [e, t] = Chunk473749.useState(false), {
    oopEnabled: n,
    legacyEnabled: a
  } = (0, Chunk442837.cj)([Chunk371651.default], () => Chunk371651.default.getGlobalEnabledStatus()), o = !(0, Chunk145597.supportsOutOfProcess)(), s = (0, Chunk442837.Wu)([Chunk594190.ZP], () => Chunk594190.ZP.getGamesSeen(true)).filter(e => !(0, K.le)(e)), l = (0, Chunk835473.Z)(Chunk348327.map(e => e.id)), c = e => {
    var t, r;
    let i = !e && n;
    b.Z.setEnabled(a, e);
    let o = null != (r = null == (t = C.ZP.getCurrentGameForAnalytics()) ? true : t.id) ? r : null;
    (0, w.ou)(e, w.OverlayToggledClientSettingType.OOP, o), i && (0, Z.l)(w.OverlayToggledClientSettingType.OOP, o)
  }, u = (e, t, n) => {
    let {
      enabledLegacy: r
    } = n;
    m.Z.toggleOverlay(t, e, r)
  }, d = Chunk473749.useMemo(() => Chunk987650.iP ? o ? Chunk388032.intl.string(Chunk388032.t.C7bLTQ) : Chunk388032.intl.string(Chunk388032.t.ndgADE) : Chunk388032.intl.string(Chunk388032.t.m7X4az), [o]);
  return 0 === Chunk348327.length ? (0, Chunk54381.jsx)(ex, {
    title: Chunk388032.intl.string(Chunk388032.t["7BlVIs"]),
    description: Chunk392711,
    "aria-label": Chunk388032.intl.string(Chunk388032.t["7BlVIs"]),
    className: Chunk607547.standaloneContainer,
    action: (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
      children: [(0, Chunk54381.jsx)(Chunk481060.rsf, {
        checked: require,
        disabled: o,
        onChange: e => c(e)
      }), Chunk987650.iP && (0, Chunk54381.jsx)("div", {
        className: Chunk607547.emptySpacer
      })]
    })
  }) : (0, Chunk54381.jsxs)(eM, {
    onExpand: exports,
    className: module ? Chunk607547.expandedContainer : true,
    title: Chunk388032.intl.string(Chunk388032.t["7BlVIs"]),
    description: Chunk392711,
    "aria-label": Chunk388032.intl.string(Chunk388032.t["7BlVIs"]),
    action: (0, Chunk54381.jsx)(Chunk481060.P3F, {
      onClick: e => ej(e),
      children: (0, Chunk54381.jsx)(Chunk481060.rsf, {
        checked: require,
        disabled: o,
        onChange: e => c(e)
      })
    }),
    children: [(0, Chunk54381.jsx)("div", {
      className: Chunk607547.subtitleContainer,
      children: (0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "text-xs/semibold",
        color: "text-muted",
        children: Chunk388032.intl.string(Chunk388032.t.FzoWRo)
      })
    }), (0, Chunk54381.jsx)(Chunk481060.zJl, {
      className: Chunk607547.scroller,
      children: Chunk348327.map((e, t) => (0, r.jsx)(eB, {
        rawGame: e,
        clientSettingType: w.OverlayToggledClientSettingType.OOP_GAME,
        gameApplication: l[t],
        supportDisabled: o,
        getEnabledFromStatus: e => {
          let {
            enabledOOP: t
          } = e;
          return t
        },
        onChange: u,
        ariaLabel: em.intl.format(em.t.nByTd3, {
          gameName: e.name
        }).toString()
      }, e.id))
    })]
  })
}

function eV() {
  return (0, Chunk32300.T_)(Chunk100527.Z.USER_SETTINGS) ? (0, Chunk54381.jsx)(ex, {
    title: Chunk388032.intl.string(Chunk388032.t["z4/l+V"]),
    description: Chunk388032.intl.string(Chunk388032.t["3aZq/0"]),
    action: (0, Chunk54381.jsx)(Chunk481060.Button, {
      variant: "primary",
      text: Chunk388032.intl.string(Chunk388032.t.s2nVhG),
      onClick: () => {
        (0, Chunk398269.N)(Chunk100527.Z.USER_SETTINGS, Chunk981631.IlC.APP)
      }
    }),
    "aria-label": Chunk388032.intl.string(Chunk388032.t["z4/l+V"])
  }) : null
}

function eH() {
  var e;
  let t = (0, Chunk442837.e7)([Chunk556296.ZP], () => Chunk556296.ZP.getOverlayKeybind()),
    n = !(0, Chunk145597.supportsLegacy)(),
    i = !(0, Chunk145597.supportsOutOfProcess)(),
    [a, o] = (0, Chunk442837.Wu)([Chunk594190.ZP], () => [Chunk594190.ZP.canShowAdminWarning, Chunk594190.ZP.getVisibleGame()], []),
    s = (0, Chunk865066.hi)(),
    l = null != o && o.elevated && Chunk120356 && !Chunk348327,
    c = !(0, Chunk556296.I1)(null != (e = null == exports ? true : exports.shortcut) ? module : []);

  function d(e) {
    u()(null != t, "Keybind should never be undefined"), g.Z.setKeybind(eI(eO({}, t), {
      shortcut: e
    }))
  }
  return (0, Chunk54381.jsx)("div", {
    className: Chunk607547.keybindMainContainer,
    children: (0, Chunk54381.jsxs)("div", {
      className: Chunk607547.keybindContainer,
      children: [(0, Chunk54381.jsxs)("div", {
        className: Chunk607547.keybindHeaderContainer,
        children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          children: Chunk388032.intl.string(Chunk388032.t.VsAZcC)
        }), l && (0, Chunk54381.jsx)(Chunk481060.Text, {
          variant: "text-xs/normal",
          color: "text-feedback-warning",
          className: Chunk607547.keybindAdminWarning,
          children: Chunk388032.intl.string(Chunk388032.t.NsowVa)
        }), Chunk512722 && (0, Chunk54381.jsx)(Chunk481060.Text, {
          variant: "text-xs/normal",
          color: "text-feedback-warning",
          className: Chunk607547.keybindAdminWarning,
          children: Chunk388032.intl.string(Chunk388032.t["UNoTw/"])
        })]
      }), (0, Chunk54381.jsx)("div", {
        className: Chunk607547.keybindRecorderContainer,
        children: (0, Chunk54381.jsx)(Chunk825209.Z, {
          disabled: require && Chunk473749,
          defaultValue: null != exports ? exports.shortcut : [],
          onChange: Chunk392711
        })
      })]
    })
  })
}
let eY = e => [{
  title: em.t.eVE4LX,
  description: em.t["72WNqk"],
  disabledSetting: L.i.TEXT_CHAT
}, {
  title: em.t.oifnSh,
  description: em.t.bgU5r0,
  disabledSetting: L.i.WELCOME_GENERAL
}, {
  title: em.t.hqsZJW,
  description: em.t.kHjdqc,
  disabledSetting: L.i.GO_LIVE_NUDGE
}, {
  title: em.t.sop3rn,
  description: em.t.pjgffc,
  disabledSetting: L.i.GAME_ACTIVITY
}, {
  title: em.t["2QVhbb"],
  description: em.t.wQ4ilB,
  disabledSetting: L.i.NOW_PLAYING
}, e && {
  title: em.t["5/21FT"],
  description: em.t.EIzwfA,
  disabledSetting: L.i.FRIEND_STREAM_WATCH_NUDGE
}].filter(e => false !== e).filter(Boolean);

function eW() {
  let {
    enabled: e
  } = (0, Chunk32300.aq)("OverlayV3StreamWatchNudge"), t = eY(module), n = e => t => {
    b.Z.setNotificationDisabledSetting(e, !t)
  }, i = (0, Chunk442837.e7)([Chunk624864.Z], () => Chunk624864.Z.getDisabledNotifications());
  return (0, Chunk54381.jsxs)("div", {
    className: Chunk607547.notificationSettingsContainer,
    children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
      variant: "heading-md/semibold",
      color: "header-primary",
      children: Chunk388032.intl.string(Chunk388032.t.xOE5bA)
    }), exports.map(e => (0, r.jsxs)("div", {
      className: eg.notificationItem,
      children: [(0, r.jsxs)("div", {
        className: eg.notificationDescriptionContainer,
        children: [(0, r.jsx)(h.Text, {
          variant: "text-sm/semibold",
          color: "header-primary",
          children: em.intl.string(e.title)
        }), (0, r.jsx)(h.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: em.intl.string(e.description)
        })]
      }), (0, r.jsx)(h.rsf, {
        checked: !i.has(e.disabledSetting),
        onChange: n(e.disabledSetting)
      })]
    }, e.disabledSetting))]
  })
}

function eK(e) {
  let t = ez(e.username);
  return t.user = e, t
}

function ez(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    n = arguments.length > 2 && true !== arguments[2] && arguments[2],
    r = arguments.length > 3 && true !== arguments[3] && arguments[3],
    i = "456" + Math.floor(1e6 * Math.random());
  return {
    voiceState: new J.Z({
      channelId: "123",
      userId: i,
      sessionId: "789",
      mute: t,
      deaf: n,
      selfMute: false,
      selfDeaf: false,
      selfVideo: false,
      selfStream: false,
      discoverable: r
    }),
    user: new Q.Z({
      id: i,
      username: e
    }),
    member: {
      nick: e,
      userId: i,
      guildId: "890",
      roles: [],
      hoistRoleId: null,
      premiumSince: null,
      joinedAt: new Date().toISOString(),
      colorString: "#000000",
      colorStrings: {
        primaryColor: "#000000",
        secondaryColor: null,
        tertiaryColor: null
      }
    },
    nick: e,
    comparator: e,
    _isPlaceholder: true
  }
}

function eq() {
  return (0, Chunk131704.createChannelRecord)({
    id: "123",
    name: "Test Channel",
    type: Chunk981631.d4z.GUILD_VOICE,
    guild_id: "456"
  })
}

function eX() {
  var e, t;
  let {
    avatarSizeMode: n,
    displayNameMode: a,
    displayUserMode: s
  } = (0, Chunk442837.cj)([Chunk237997.default], () => ({
    avatarSizeMode: Chunk237997.default.getAvatarSizeMode(),
    displayNameMode: Chunk237997.default.getDisplayNameMode(),
    displayUserMode: Chunk237997.default.getDisplayUserMode()
  })), l = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser()), [c] = Chunk473749.useState(() => [ez(Chunk388032.intl.string(Chunk388032.t.C0ZDvo), true, false), ez(Chunk388032.intl.string(Chunk388032.t.iOtj8E), false, false, true), ez(Chunk388032.intl.string(Chunk388032.t["0oqNgL"]), false, true)]), u = (0, Chunk442837.e7)([Chunk610394.Z, Chunk355863.Z], () => {
    let e = Chunk610394.Z.getWidgetByType(Chunk981631.Odu.VOICE_V3);
    if (null == module) return null;
    let t = Chunk355863.Z.getWidget(module.id);
    return null != exports && (0, Chunk340101.Aw)(exports) ? exports : null
  }), d = null != (t = null == u || null == (e = u.meta) ? true : module.voiceStatesMaxShown) ? exports : Chunk501787.At, f = [null != l ? eK(l) : null, ...Chunk512722].filter(Chunk823379.lm), p = [new Map(f.map(e => [e.user.id, e])), f.map(e => e.user.id)];

  function m(e) {
    null != u && (e < eR ? (0, E.zG)(u.id, {
      voiceStatesMaxShown: eh.Og
    }) : (0, E.zG)(u.id, {
      voiceStatesMaxShown: Math.floor(e)
    }))
  }
  let g = Chunk981631.BRd.MIDNIGHT;
  return (0, Chunk54381.jsxs)("div", {
    className: Chunk607547.voiceSettingsContainer,
    children: [(0, Chunk54381.jsx)(Chunk481060.q4e, {
      label: Chunk388032.intl.string(Chunk388032.t.dnvZSg),
      options: [{
        label: Chunk388032.intl.string(Chunk388032.t.YcOxtr),
        value: Chunk981631.ipw.LARGE
      }, {
        label: Chunk388032.intl.string(Chunk388032.t.BKIKqx),
        value: Chunk981631.ipw.SMALL
      }],
      className: Chunk607547.select,
      onChange: e => b.Z.setAvatarSizeMode(e),
      value: require
    }), (0, Chunk54381.jsx)(Chunk481060.q4e, {
      label: Chunk388032.intl.string(Chunk388032.t.J0dpcB),
      options: [{
        label: Chunk388032.intl.string(Chunk388032.t.nBmDrT),
        value: Chunk981631.wC$.ALWAYS
      }, {
        label: Chunk388032.intl.string(Chunk388032.t["2OvIZY"]),
        value: Chunk981631.wC$.ONLY_WHILE_SPEAKING
      }, {
        label: Chunk388032.intl.string(Chunk388032.t.ekjlPL),
        value: Chunk981631.wC$.NEVER
      }],
      className: Chunk607547.select,
      onChange: e => b.Z.setDisplayNameMode(e),
      value: Chunk120356
    }), (0, Chunk54381.jsx)(Chunk481060.f6W, {
      theme: Chunk660216,
      children: e => {
        var t, i;
        return (0, r.jsxs)("div", {
          className: o()(eg.widgetContainer, e),
          children: [(0, r.jsx)("div", {
            className: eg.voiceWidgetContainer,
            children: (0, r.jsx)(Y.kI, {
              id: "voice-widget",
              title: em.intl.string(em.t.KNJ6Vq),
              channel: eq(),
              overlayVoiceStates: p,
              displayNameMode: a,
              displayUserMode: s,
              avatarSizeMode: n,
              widget: ef.Odu.VOICE,
              anchorLeft: true,
              application: null,
              stream: null,
              streamApplication: null,
              streamMetadata: null,
              locked: false,
              pinned: false,
              isSettingsPreview: true,
              isPreviewingInGame: false,
              maxDisplayedVoiceStates: d
            })
          }), (0, r.jsxs)("div", {
            className: eg.widgetHeaderContainer,
            children: [(0, r.jsx)(W.PI, {
              children: em.intl.string(em.t.KNJ6Vq)
            }), (0, r.jsx)(W.ls, {}), (0, r.jsx)(W.RT, {
              id: null != (t = null == u ? true : u.id) ? t : "voice-widget",
              pinned: null != (i = null == u ? true : u.pinned) && i
            })]
          })]
        })
      }
    }), (0, Chunk54381.jsx)(Chunk481060.q4e, {
      label: Chunk388032.intl.string(Chunk388032.t.swsWWC),
      options: [{
        label: Chunk388032.intl.string(Chunk388032.t.nBmDrT),
        value: Chunk981631.OYC.ALWAYS
      }, {
        label: Chunk388032.intl.string(Chunk388032.t["2OvIZY"]),
        value: Chunk981631.OYC.ONLY_WHILE_SPEAKING
      }],
      className: Chunk607547.select,
      onChange: e => b.Z.setDisplayUserMode(e),
      value: Chunk348327
    }), (0, Chunk54381.jsx)("div", {
      className: Chunk607547.sliderContainer,
      children: (0, Chunk54381.jsx)(Chunk481060.iRW, {
        label: Chunk388032.intl.string(Chunk388032.t["X/Uyzc"]),
        initialValue: Chunk392711,
        onValueRender: e => e < eR ? em.intl.string(em.t.nrUzFL) : "".concat(Math.floor(e)),
        minValue: eR - 1,
        maxValue: eP,
        onValueChange: Chunk224706,
        markers: eD,
        barStyles: {
          background: Chunk481060.TVs.colors.BACKGROUND_MOD_STRONG.css
        },
        fillStyles: {
          background: Chunk481060.TVs.colors.BG_BRAND.css
        },
        onMarkerRender: e => e < eR ? em.intl.string(em.t.nrUzFL) : "".concat(Math.floor(e))
      })
    })]
  })
}

function eQ() {
  let [e, t] = (0, Chunk243778.US)([Chunk704215.z.OVERLAY_OOP_SETTINGS_NUX], true, true), n = () => {
    exports(Chunk921944.L.DISMISS)
  };
  return ((0, Chunk493773.ZP)(() => () => {
    exports(Chunk921944.L.AUTO_DISMISS)
  }), module !== Chunk704215.z.OVERLAY_OOP_SETTINGS_NUX) ? null : (0, Chunk54381.jsxs)("div", {
    className: Chunk607547.overlaySettingsNux,
    children: [(0, Chunk54381.jsx)("div", {
      children: (0, Chunk54381.jsx)("img", {
        src: Chunk131970.Z,
        alt: Chunk388032.intl.string(Chunk388032.t.mdXZh1),
        className: Chunk607547.nuxFirstImage
      })
    }), (0, Chunk54381.jsx)("div", {
      children: (0, Chunk54381.jsxs)("div", {
        className: Chunk607547.mainTitleContainer,
        children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
          variant: "heading-xl/medium",
          color: "header-primary",
          children: Chunk388032.intl.string(Chunk388032.t.jzjJQg)
        }), (0, Chunk54381.jsx)(Chunk481060.Text, {
          variant: "text-md/normal",
          color: "text-muted",
          children: Chunk388032.intl.string(Chunk388032.t["5dOfxb"])
        })]
      })
    }), (0, Chunk54381.jsx)("div", {
      children: (0, Chunk54381.jsx)("img", {
        src: Chunk730462.Z,
        alt: Chunk388032.intl.string(Chunk388032.t.mdXZh1),
        className: Chunk607547.nuxUserSettingsImage
      })
    }), (0, Chunk54381.jsx)("div", {
      "data-button-hoisted-classname-wrapper": true,
      className: Chunk607547.closeCircleButton,
      children: (0, Chunk54381.jsx)(Chunk481060.Button, {
        variant: "primary",
        text: Chunk388032.intl.string(Chunk388032.t.Q26diF),
        onClick: () => require()
      })
    }), (0, Chunk54381.jsx)("div", {
      className: Chunk607547.nuxDivider
    })]
  })
}

function eJ(e) {
  let {
    runningGame: t,
    runningGameApplication: n
  } = e, a = null == n ? true : n.id, o = (0, _.e7)([G.Z], () => G.Z.isLimitedInteractionOverrideEnabled(a), [a]), s = i.useMemo(() => null != t && (0, U.H8)(t.pid), [t]), l = (0, k.Z)({
    location: "overlay_user_settings"
  }), {
    disableClickableRegions: c,
    shouldShowKeybindIndicators: u
  } = (0, _.cj)([ea.default], () => ({
    disableClickableRegions: ea.default.disableClickableRegions,
    shouldShowKeybindIndicators: ea.default.showKeybindIndicators
  }));

  function d() {
    b.Z.setDisableClickableRegions(!c)
  }

  function f(e) {
    null != n && (0, F.rI)(n.id, e)
  }
  return (0, r.jsxs)("div", {
    className: eg.overlayEnabledSettingsContainer,
    children: [(0, r.jsx)(eH, {}), l && (0, r.jsx)(h.rsf, {
      label: em.intl.string(em.t.XZTl9r),
      checked: u,
      onChange: e => b.Z.setShowKeybindIndicators(e)
    }), null != a && (0, r.jsxs)("div", {
      children: [(0, r.jsxs)("div", {
        className: eg.limitedInteractionOverrideContainer,
        children: [(0, r.jsx)(h.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          children: em.intl.string(em.t.wgVQND)
        }), (0, r.jsx)(h.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: em.intl.string(em.t["5SsyF5"])
        })]
      }), (0, r.jsx)(h.rsf, {
        checked: o || s,
        disabled: s,
        onChange: e => f(e)
      })]
    }), (0, r.jsxs)("div", {
      children: [(0, r.jsxs)("div", {
        className: eg.limitedInteractionOverrideContainer,
        children: [(0, r.jsx)(h.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          children: em.intl.string(em.t["+eFXxq"])
        }), (0, r.jsx)(h.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: em.intl.string(em.t.kivMAp)
        })]
      }), (0, r.jsx)(h.rsf, {
        checked: !c,
        onChange: d
      })]
    })]
  })
}

function e$(e) {
  let {
    className: t,
    showHeader: n
  } = e, {
    runningGame: i,
    runningGameApplication: a
  } = (0, N.Z)(), o = true, s = (0, _.e7)([en.default], () => en.default.getCurrentUser());
  return ((0, v.ZP)(() => {
    if (el.isPlatformEmbedded) return (0, R.Ky)(), R.P7
  }), ew(), null == s) ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(ed.Z, {
      title: em.intl.string(em.t["9cb1Uz"]),
      children: [o ? (0, r.jsx)(eQ, {}) : null, (0, r.jsxs)("div", {
        className: eg.overlayEnabledSettingsContainer,
        children: [(0, r.jsx)(eU, {
          runningGame: i,
          runningGameApplication: a
        }), (0, r.jsx)(eF, {}), (0, r.jsx)(eZ, {}), (0, r.jsx)(eV, {})]
      }), (0, r.jsx)("div", {
        className: eg.settingsDivider
      })]
    }), (0, r.jsxs)("div", {
      children: [(0, r.jsx)(eJ, {
        runningGame: i,
        runningGameApplication: a
      }), (0, r.jsx)("div", {
        className: eg.settingsDivider
      })]
    }), (0, r.jsxs)(h.gNt, {
      label: em.intl.string(em.t.r1TZfh),
      children: [(0, r.jsx)(eX, {}), (0, r.jsx)("div", {
        className: eg.settingsDivider
      })]
    }), (0, r.jsx)(eW, {})]
  })
}