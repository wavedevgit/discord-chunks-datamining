/** Chunk was on web.js **/
/** chunk id: 794704, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => e0
}), require("./953529.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk348327 = require("./348327.js"),
  l = require.n(Chunk348327),
  Chunk512722 = require("./512722.js"),
  u = require.n(Chunk512722),
  Chunk392711 = require("./392711.js"),
  f = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk199849 = require("./199849.jsx"),
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

function eO(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function ev(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      eO(e, t, n[t])
    })
  }
  return e
}

function eS(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : eS(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function eT(e, t) {
  if (null == e) return {};
  var n, r, i = eC(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function eC(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let eA = eL(null),
  eN = 20,
  eP = 16,
  eR = 1,
  ew = 25,
  eD = [0, 5, 10, 15, 20, 25];

function ex() {
  let e = eL(eA);
  f().isEqual(module, eA) || (Chunk626135.default.track(Chunk981631.rMx.OVERLAY_SETTINGS_UPDATED, module), eA = module)
}

function eL(e) {
  var t;
  let n = ea.default.getNotificationPositionMode(),
    r = n !== ep._vf.DISABLED,
    i = ei.ZP.getOverlayKeybind(),
    o = ei.ZP.getOverlayChatKeybind();
  return {
    enabled: eo.default.enabled,
    notifications_enabled: r,
    notifications_position: r ? n : null,
    text_notifications_mode: Z.Z.isNotificationDisabled(em.n0.TextChat) ? "DISABLED" : "ENABLED",
    hotkey: null != i ? (0, eu.BB)(i.shortcut) : null,
    text_activation_hotkey: null != o ? (0, eu.BB)(o.shortcut) : null,
    text_opacity_slider: ea.default.getTextWidgetOpacity(),
    old_enabled: null != (t = null == e ? true : e.enabled) ? t : eo.default.enabled
  }
}

function ej(e) {
  let {
    header: t,
    icon: n,
    title: i,
    description: o,
    action: s,
    hint: l,
    warning: c,
    onClick: u,
    "aria-label": d,
    className: f
  } = e;
  return (0, r.jsxs)("div", {
    className: a()(eE.groupContainer, f),
    children: [(0, r.jsxs)(h.kL8, {
      "aria-label": d,
      onClick: u,
      children: [null != t && (0, r.jsx)("div", {
        className: eE.groupHeader,
        children: t
      }), (0, r.jsxs)("div", {
        className: eE.groupContent,
        children: [null != n && (0, r.jsx)("div", {
          className: eE.groupIcon,
          children: n
        }), (0, r.jsxs)("div", {
          className: eE.groupMainContent,
          children: [(0, r.jsx)(h.Text, {
            variant: "text-md/medium",
            color: "text-strong",
            className: eE.groupTitle,
            children: i
          }), null != o && (0, r.jsx)(h.Text, {
            variant: "text-sm/normal",
            color: "text-subtle",
            children: o
          }), null != l && (0, r.jsx)(h.Text, {
            variant: "text-xxs/medium",
            color: "text-muted",
            children: l
          })]
        }), (0, r.jsx)("div", {
          className: eE.groupAction,
          children: s
        })]
      })]
    }), (0, r.jsx)("div", {
      className: eE.groupWarning,
      children: c
    })]
  })
}

function eM(e) {
  var {
    children: t,
    className: n,
    onExpand: o
  } = e, s = eT(e, ["children", "className", "onExpand"]);
  let [l, c] = i.useState(false), u = e => {
    c(e), null == o || o(e)
  };
  return (0, r.jsx)(h.zF9, {
    className: eE.collapseable,
    collapsibleContent: (0, r.jsx)("div", {
      className: eE.groupCollapsedContainer,
      children: t
    }),
    children: e => {
      let {
        onClick: t
      } = e;
      return (0, r.jsx)(ej, eI(ev({}, s), {
        onClick: e => {
          u(!l), null == t || t(e)
        },
        className: a()(eE.mainCollapseableContainer, n),
        action: (0, r.jsxs)("div", {
          className: eE.groupCollapsedAction,
          children: [s.action, l ? (0, r.jsx)(h.CJ0, {
            size: "custom",
            width: eN,
            height: eN,
            color: "var(--interactive-text-active)"
          }) : (0, r.jsx)(h.Fbu, {
            size: "custom",
            width: eN,
            height: eN,
            color: "var(--interactive-text-active)"
          })]
        })
      }))
    }
  })
}
let ek = new Set([Chunk837268.mM.INITIALIZING, Chunk837268.mM.WAITING_FOR_SCREEN_TYPE_RESOLUTION, Chunk837268.mM.WAITING_FOR_MODULE_TRACKING, Chunk837268.mM.WAITING_FOR_OVERLAY_OPEN, Chunk837268.mM.WAITING_FOR_POPOUT_OPEN, Chunk837268.mM.WAITING_FOR_MODULE_POPOUT_CAPTURE, Chunk837268.mM.WAITING_FOR_REACT_INITIALIZATION, Chunk837268.mM.WAITING_FOR_PID_FOCUS, Chunk837268.mM.WAITING_FOR_SUCCESSFUL_SHOW]),
  eU = e => {
    e.preventDefault(), e.stopPropagation()
  };

function eG(e) {
  var t, n, o;
  let {
    runningGame: a,
    runningGameApplication: s
  } = e, c = null == a ? true : a.pid, u = (0, p.e7)([U.default], () => null == a || null == c ? null : U.default.getTrackedGameByPid(c), [a, c], l()), {
    enabledLegacy: d,
    enabledOOP: f
  } = (0, p.cj)([ee.Z, en.Z], () => {
    if (null == a && null == u) return {
      enabledLegacy: false,
      enabledOOP: false
    };
    if (null == a) {
      var e, t;
      return {
        enabledLegacy: null != (e = null == u ? true : u.legacyEnabled) && e,
        enabledOOP: null != (t = null == u ? true : u.oopEnabled) && t
      }
    }
    return (0, N.b6)(a, false, [ee.Z, en.Z])
  }, [a, u]), _ = (0, p.e7)([N.ZP, ee.Z, en.Z], () => null == a ? null : (0, N.FZ)(a, N.ZP, ee.Z, en.Z), [a], l()), [m, E] = i.useState(f), [b, O] = i.useState(d), [I, T] = i.useState(false);
  i.useEffect(() => {
    E(f), O(d)
  }, [f, d]);
  let C = !(0, ed.supportsLegacy)(),
    A = !(0, ed.supportsOutOfProcess)(),
    {
      legacyEnabled: P,
      oopEnabled: R
    } = (0, p.cj)([U.default], () => U.default.getGlobalEnabledStatus()),
    L = (e, t) => {
      var n, r, i;
      if (null == a) return;
      let o = false,
        s = false;
      switch (t) {
        case x.OverlayToggledClientSettingType.LEGACY_GAME:
          O(e), g.Z.toggleOverlay(a, e, m), o = !e && b;
          break;
        case x.OverlayToggledClientSettingType.OOP_GAME:
          E(e), g.Z.toggleOverlay(a, b, e), s = !e && m;
          break;
        case x.OverlayToggledClientSettingType.LEGACY:
          y.Z.setEnabled(e, R), (0, x.ou)(e, x.OverlayToggledClientSettingType.LEGACY, null != (n = a.id) ? n : null);
          break;
        case x.OverlayToggledClientSettingType.OOP:
          y.Z.setEnabled(P, e), (0, x.ou)(e, x.OverlayToggledClientSettingType.OOP, null != (r = a.id) ? r : null)
      }(o || s) && (0, B.l)(o ? x.OverlayToggledClientSettingType.LEGACY_GAME : x.OverlayToggledClientSettingType.OOP_GAME, null != (i = a.id) ? i : null)
    },
    M = (e, t) => {
      let n = !t && e,
        r = !R && m,
        i = !P && b,
        o = !m && R,
        a = !b && P;
      switch (true) {
        case n && (r || i) && (o || a):
          return "both";
        case n && (r || i):
          return "global";
        default:
          return "game"
      }
    },
    k = (e, t) => {
      if (null == a) return;
      let n = false,
        r = false;
      switch (t) {
        case "game":
          g.Z.toggleOverlay(a, e, e), O(e), E(e), n = !e && b, r = !e && m;
          break;
        case "global":
          y.Z.setEnabled(e, e), n = !e && P, r = !e && R;
          break;
        case "both":
          y.Z.setEnabled(e, e), g.Z.toggleOverlay(a, e, e), O(e), E(e), n = !e && P || !e && b, r = !e && R || !e && m
      }
      let i = null;
      if (n ? i = "game" === t ? x.OverlayToggledClientSettingType.LEGACY_GAME : x.OverlayToggledClientSettingType.LEGACY : r && (i = "game" === t ? x.OverlayToggledClientSettingType.OOP_GAME : x.OverlayToggledClientSettingType.OOP), null != i) {
        var o;
        (0, B.l)(i, null != (o = a.id) ? o : null)
      }
    },
    G = C && A,
    Z = !P && !R,
    F = !m && !P && b && !C,
    V = !b && !R && m && !A,
    H = (null == u ? true : u.overlayMethod) === j.gl.Disabled,
    Y = (null == u ? true : u.state) === j.mM.OVERLAY_RENDERING && !H,
    W = (null == u ? true : u.state) != null && ek.has(u.state) && !H,
    K = (null == u ? true : u.overlayMethod) === j.gl.OutOfProcess,
    z = (null == u ? true : u.overlayMethod) === j.gl.OutOfProcessLimitedInteraction,
    q = (null == u ? true : u.overlayMethod) === j.gl.Hook,
    X = (null == u ? true : u.state) === j.mM.OVERLAY_CRASHED || (null == u ? true : u.state) === j.mM.OVERLAY_CRASHED_DISABLED,
    J = !m && !b,
    [$, et] = (() => {
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
          return [eg.intl.format(eg.t.hFVBIg, {
            overlayMethod: eg.intl.string(eg.t.a3eXSw),
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
          return [eg.intl.format(eg.t.hFVBIg, {
            overlayMethod: eg.intl.string(eg.t["506Aba"]),
            overlayMethodHook: t
          }), null];
        case Y && q:
          function n() {
            var e, t;
            switch (true) {
              case (null == u ? true : u.fullscreenType) !== v.Jx.BORDERLESS_FULLSCREEN:
                return eg.intl.string(eg.t.mJmbeC);
              case A:
                return eg.intl.string(eg.t.C7bLTQ);
              case !(null != (e = null == u ? true : u.oopEnabled) && e):
                return eg.intl.string(eg.t.WiY24u);
              case !R:
                return eg.intl.string(eg.t.cAFVsL);
              case !(null != (t = null == u ? true : u.supportsOutOfProcess) && t):
                return eg.intl.string(eg.t.XcGEcs);
              default:
                return eg.intl.string(eg.t.bJXH2v)
            }
          }

          function i(e, t) {
            return (0, r.jsx)(h.Text, {
              tag: "span",
              variant: "text-sm/medium",
              color: "text-strong",
              children: e
            }, t)
          }
          return [eg.intl.format(eg.t.hFVBIg, {
            overlayMethod: eg.intl.string(eg.t.bvlpDR),
            overlayMethodHook: i
          }), n()];
        case X:
          return [eg.intl.string(eg.t.OFC2aw), null];
        case G:
          return [eg.intl.string(eg.t.m7X4az), null];
        case Z:
          return [eg.intl.string(eg.t["9DUS5l"]), null];
        case J:
          return [eg.intl.string(eg.t.nQ9EdJ), null];
        case F:
        case V:
          return [eg.intl.string(eg.t.VWUn0a), null];
        case W:
          if (K) return [eg.intl.string(eg.t["s8+CFq"]), null];
          if (q) return [eg.intl.string(eg.t.JEEdqt), null];
          if (z) return [eg.intl.string(eg.t.pzBMwY), null];
          return [eg.intl.string(eg.t["2Xhy9k"]), null];
        case null == u:
          return [eg.intl.string(eg.t.vwHPRi), null];
        case H: {
          let e = (null == u ? true : u.fullscreenType) === v.Jx.FULLSCREEN ? eg.intl.string(eg.t.mJmbeC) : null;
          return [eg.intl.string(eg.t.VPW4XY), e]
        }
        default:
          return [eg.intl.string(eg.t.ONovP5), null]
      }
    })();
  (0, S.ZP)(() => {
    g.Z.getDetectableGames()
  });
  let [er, ei] = i.useMemo(() => W ? ["text-muted", h.TVs.colors.TEXT_MUTED.css] : Y && z ? ["text-feedback-warning", h.TVs.colors.TEXT_FEEDBACK_WARNING.css] : Y && K ? ["text-feedback-positive", h.TVs.colors.TEXT_FEEDBACK_POSITIVE.css] : Y && q ? ["text-strong", h.TVs.colors.TEXT_STRONG.css] : ["interactive-text-default", h.TVs.colors.INTERACTIVE_TEXT_DEFAULT.css], [W, Y, z, K, q]);
  return null == a ? null : (0, r.jsxs)(eM, {
    onExpand: T,
    className: I ? eE.expandedContainer : true,
    title: (0, r.jsxs)(r.Fragment, {
      children: [null != (o = null != (n = null != (t = null == s ? true : s.name) ? t : null == _ ? true : _.name) ? n : null == a ? true : a.gameName) ? o : "", null != _ && _.verified ? (0, r.jsx)(h.aML, {
        "data-migration-pending": true,
        text: eg.intl.string(eg.t["4PJP5p"]),
        children: e => (0, r.jsx)(D.Z, eI(ev({
          size: eP,
          color: h.TVs.colors.BACKGROUND_BRAND.css
        }, e), {
          children: (0, r.jsx)(h.kmB, {
            size: "custom",
            width: eP,
            height: eP,
            color: h.TVs.colors.WHITE.css
          })
        }))
      }) : null]
    }),
    description: $,
    hint: null != et ? et : true,
    header: (0, r.jsxs)(r.Fragment, {
      children: [Y || W ? (0, r.jsx)(h.pzj, {
        size: "xxs",
        color: ei
      }) : (0, r.jsx)("div", {
        className: eE.playingDot
      }), (0, r.jsx)(h.Text, {
        variant: "text-xs/semibold",
        color: er,
        children: eg.intl.string(eg.t.CDOx3w)
      })]
    }),
    icon: (0, r.jsx)(w.Z, {
      game: s,
      pid: null == a ? true : a.pid,
      size: w.A.MEDIUM
    }),
    "aria-label": eg.intl.string(eg.t["87O5GC"]),
    action: (0, r.jsx)(h.P3F, {
      onClick: e => eU(e),
      children: (0, r.jsx)(h.rsf, {
        checked: m && R || b && P,
        disabled: G,
        onChange: e => {
          k(e, M(e, m && R || b && P))
        }
      })
    }),
    warning: (0, r.jsx)(Q.Z, {
      className: eE.systemServiceWarning,
      game: a
    }),
    children: [(0, r.jsx)(ej, {
      title: eg.intl.string(eg.t["7BlVIs"]),
      description: eg.intl.string(eg.t.ndgADE),
      hint: R ? true : eg.intl.string(eg.t.cAFVsL),
      "aria-label": eg.intl.string(eg.t["7BlVIs"]),
      action: (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(h.rsf, {
          checked: m && R,
          disabled: A,
          onChange: e => {
            e && !R ? L(e, x.OverlayToggledClientSettingType.OOP) : L(e, x.OverlayToggledClientSettingType.OOP_GAME)
          }
        }), (0, r.jsx)("div", {
          className: eE.emptySpacer
        })]
      })
    }), (0, r.jsx)(ej, {
      title: eg.intl.string(eg.t.BfFpW1),
      description: eg.intl.string(eg.t.OzInYk),
      hint: P ? true : eg.intl.string(eg.t["3sYHXm"]),
      "aria-label": eg.intl.string(eg.t.BfFpW1),
      action: (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(h.rsf, {
          checked: b && P,
          disabled: C,
          onChange: e => {
            e && !P ? L(e, x.OverlayToggledClientSettingType.LEGACY) : L(e, x.OverlayToggledClientSettingType.LEGACY_GAME)
          }
        }), (0, r.jsx)("div", {
          className: eE.emptySpacer
        })]
      })
    })]
  })
}

function eZ(e) {
  let {
    game: t,
    gameApplication: n
  } = e, o = i.useMemo(() => null == t ? null : "pid" in t ? t.pid : null, [t]), a = (0, p.e7)([T.Z], () => null != n ? n : T.Z.getApplication(null == t ? true : t.id), [n, t]);
  return (0, r.jsx)(w.Z, {
    game: a,
    pid: o,
    size: w.A.SMALL
  })
}

function eF(e) {
  let {
    rawGame: t,
    gameApplication: n,
    supportDisabled: o,
    getEnabledFromStatus: a,
    onChange: s,
    clientSettingType: l,
    ariaLabel: c
  } = e, u = (0, p.cj)([N.ZP, ee.Z, en.Z], () => (0, N.FZ)(t, N.ZP, ee.Z, en.Z)), d = (0, p.cj)([ee.Z, en.Z], () => (0, N.b6)(t, false, [ee.Z, en.Z]), [t]), f = a(d), [_, m] = i.useState(f);
  i.useEffect(() => {
    m(f)
  }, [f]);
  let g = e => {
    let n = !e && _;
    if (m(e), s(e, u, d), n) {
      var r, i;
      (0, B.l)(l, null != (i = null != (r = u.id) ? r : null == t ? true : t.id) ? i : null)
    }
  };
  return (0, r.jsx)(ej, {
    title: t.name,
    icon: (0, r.jsx)(eZ, {
      game: u,
      gameApplication: n
    }),
    "aria-label": c,
    action: (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(h.rsf, {
        checked: _,
        disabled: o,
        onChange: e => g(e)
      }), (0, r.jsx)("div", {
        className: eE.emptySpacer
      })]
    })
  })
}

function eB() {
  let [e, t] = Chunk473749.useState(false), {
    legacyEnabled: n,
    oopEnabled: o
  } = (0, Chunk442837.cj)([Chunk371651.default], () => Chunk371651.default.getGlobalEnabledStatus()), a = (0, Chunk442837.Wu)([Chunk594190.ZP], () => Chunk594190.ZP.getGamesSeen(true)).filter(e => !(0, z.le)(e)), s = (0, Chunk835473.Z)(a.map(e => e.id)), l = !(0, Chunk145597.supportsLegacy)(), c = e => {
    var t, r;
    y.Z.setEnabled(e, o);
    let i = null != (r = null == (t = N.ZP.getCurrentGameForAnalytics()) ? true : t.id) ? r : null;
    (0, x.ou)(e, x.OverlayToggledClientSettingType.LEGACY, i), !e && n && (0, B.l)(x.OverlayToggledClientSettingType.LEGACY, i)
  }, u = (e, t, n) => {
    let {
      enabledOOP: r
    } = n;
    g.Z.toggleOverlay(t, e, r)
  }, d = Chunk473749.useMemo(() => (0, Chunk145597.supportsLegacy)() ? l ? Chunk388032.intl.string(Chunk388032.t.r9jEVw) : Chunk388032.intl.string(Chunk388032.t.OzInYk) : Chunk388032.intl.string(Chunk388032.t["8Ox6/E"]), [l]);
  return 0 === a.length ? (0, Chunk54381.jsx)(ej, {
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
      onClick: e => eU(e),
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
      children: a.map((e, t) => (0, r.jsx)(eF, {
        rawGame: e,
        clientSettingType: x.OverlayToggledClientSettingType.LEGACY_GAME,
        supportDisabled: l,
        gameApplication: s[t],
        getEnabledFromStatus: e => {
          let {
            enabledLegacy: t
          } = e;
          return t
        },
        onChange: u,
        ariaLabel: eg.intl.format(eg.t.hvPYsF, {
          gameName: e.name
        }).toString()
      }, e.id))
    })]
  })
}

function eV() {
  let [e, t] = Chunk473749.useState(false), {
    oopEnabled: n,
    legacyEnabled: o
  } = (0, Chunk442837.cj)([Chunk371651.default], () => Chunk371651.default.getGlobalEnabledStatus()), a = !(0, Chunk145597.supportsOutOfProcess)(), s = (0, Chunk442837.Wu)([Chunk594190.ZP], () => Chunk594190.ZP.getGamesSeen(true)).filter(e => !(0, z.le)(e)), l = (0, Chunk835473.Z)(Chunk348327.map(e => e.id)), c = e => {
    var t, r;
    let i = !e && n;
    y.Z.setEnabled(o, e);
    let a = null != (r = null == (t = N.ZP.getCurrentGameForAnalytics()) ? true : t.id) ? r : null;
    (0, x.ou)(e, x.OverlayToggledClientSettingType.OOP, a), i && (0, B.l)(x.OverlayToggledClientSettingType.OOP, a)
  }, u = (e, t, n) => {
    let {
      enabledLegacy: r
    } = n;
    g.Z.toggleOverlay(t, e, r)
  }, d = Chunk473749.useMemo(() => Chunk987650.iP ? a ? Chunk388032.intl.string(Chunk388032.t.C7bLTQ) : Chunk388032.intl.string(Chunk388032.t.ndgADE) : Chunk388032.intl.string(Chunk388032.t.m7X4az), [a]);
  return 0 === Chunk348327.length ? (0, Chunk54381.jsx)(ej, {
    title: Chunk388032.intl.string(Chunk388032.t["7BlVIs"]),
    description: Chunk392711,
    "aria-label": Chunk388032.intl.string(Chunk388032.t["7BlVIs"]),
    className: Chunk607547.standaloneContainer,
    action: (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
      children: [(0, Chunk54381.jsx)(Chunk481060.rsf, {
        checked: require,
        disabled: a,
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
      onClick: e => eU(e),
      children: (0, Chunk54381.jsx)(Chunk481060.rsf, {
        checked: require,
        disabled: a,
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
      children: Chunk348327.map((e, t) => (0, r.jsx)(eF, {
        rawGame: e,
        clientSettingType: x.OverlayToggledClientSettingType.OOP_GAME,
        gameApplication: l[t],
        supportDisabled: a,
        getEnabledFromStatus: e => {
          let {
            enabledOOP: t
          } = e;
          return t
        },
        onChange: u,
        ariaLabel: eg.intl.format(eg.t.nByTd3, {
          gameName: e.name
        }).toString()
      }, e.id))
    })]
  })
}

function eH() {
  return (0, Chunk32300.T_)(Chunk100527.Z.USER_SETTINGS) ? (0, Chunk54381.jsx)(ej, {
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

function eY() {
  var e;
  let t = (0, Chunk442837.e7)([Chunk556296.ZP], () => Chunk556296.ZP.getOverlayKeybind()),
    n = !(0, Chunk145597.supportsLegacy)(),
    i = !(0, Chunk145597.supportsOutOfProcess)(),
    [o, a] = (0, Chunk442837.Wu)([Chunk594190.ZP], () => [Chunk594190.ZP.canShowAdminWarning, Chunk594190.ZP.getVisibleGame()], []),
    s = (0, Chunk865066.hi)(),
    l = null != a && a.elevated && Chunk120356 && !Chunk348327,
    c = !(0, Chunk556296.I1)(null != (e = null == exports ? true : exports.shortcut) ? module : []);

  function d(e) {
    u()(null != t, "Keybind should never be undefined"), E.Z.setKeybind(eI(ev({}, t), {
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
          color: "text-strong",
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
let eW = e => [{
  title: eg.t.eVE4LX,
  description: eg.t["72WNqk"],
  disabledSetting: L.i.TEXT_CHAT
}, {
  title: eg.t.oifnSh,
  description: eg.t.bgU5r0,
  disabledSetting: L.i.WELCOME_GENERAL
}, {
  title: eg.t.hqsZJW,
  description: eg.t.kHjdqc,
  disabledSetting: L.i.GO_LIVE_NUDGE
}, {
  title: eg.t.sop3rn,
  description: eg.t.pjgffc,
  disabledSetting: L.i.GAME_ACTIVITY
}, {
  title: eg.t["2QVhbb"],
  description: eg.t.wQ4ilB,
  disabledSetting: L.i.NOW_PLAYING
}, e && {
  title: eg.t["5/21FT"],
  description: eg.t.EIzwfA,
  disabledSetting: L.i.FRIEND_STREAM_WATCH_NUDGE
}].filter(e => false !== e).filter(Boolean);

function eK() {
  let {
    enabled: e
  } = (0, Chunk32300.aq)("OverlayV3StreamWatchNudge"), t = eW(module), n = e => t => {
    y.Z.setNotificationDisabledSetting(e, !t)
  }, i = (0, Chunk442837.e7)([Chunk624864.Z], () => Chunk624864.Z.getDisabledNotifications());
  return (0, Chunk54381.jsxs)("div", {
    className: Chunk607547.notificationSettingsContainer,
    children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
      variant: "heading-md/semibold",
      color: "text-strong",
      children: Chunk388032.intl.string(Chunk388032.t.xOE5bA)
    }), exports.map(e => (0, r.jsxs)("div", {
      className: eE.notificationItem,
      children: [(0, r.jsxs)("div", {
        className: eE.notificationDescriptionContainer,
        children: [(0, r.jsx)(h.Text, {
          variant: "text-sm/semibold",
          color: "text-strong",
          children: eg.intl.string(e.title)
        }), (0, r.jsx)(h.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: eg.intl.string(e.description)
        })]
      }), (0, r.jsx)(h.rsf, {
        checked: !i.has(e.disabledSetting),
        onChange: n(e.disabledSetting)
      })]
    }, e.disabledSetting))]
  })
}

function ez(e) {
  let t = eq(e.username);
  return t.user = e, t
}

function eq(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    n = arguments.length > 2 && true !== arguments[2] && arguments[2],
    r = arguments.length > 3 && true !== arguments[3] && arguments[3],
    i = "456" + Math.floor(1e6 * Math.random());
  return {
    voiceState: new $.Z({
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
    user: new J.Z({
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

function eQ() {
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
    displayNameMode: o,
    displayUserMode: s
  } = (0, Chunk442837.cj)([Chunk237997.default], () => ({
    avatarSizeMode: Chunk237997.default.getAvatarSizeMode(),
    displayNameMode: Chunk237997.default.getDisplayNameMode(),
    displayUserMode: Chunk237997.default.getDisplayUserMode()
  })), l = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser()), [c] = Chunk473749.useState(() => [eq(Chunk388032.intl.string(Chunk388032.t.C0ZDvo), true, false), eq(Chunk388032.intl.string(Chunk388032.t.iOtj8E), false, false, true), eq(Chunk388032.intl.string(Chunk388032.t["0oqNgL"]), false, true)]), u = (0, Chunk442837.e7)([Chunk610394.Z, Chunk355863.Z], () => {
    let e = Chunk610394.Z.getWidgetByType(Chunk981631.Odu.VOICE_V3);
    if (null == module) return null;
    let t = Chunk355863.Z.getWidget(module.id);
    return null != exports && (0, Chunk340101.Aw)(exports) ? exports : null
  }), d = null != (t = null == u || null == (e = u.meta) ? true : module.voiceStatesMaxShown) ? exports : Chunk501787.At, f = [null != l ? ez(l) : null, ...Chunk512722].filter(Chunk823379.lm), _ = [new Map(f.map(e => [e.user.id, e])), f.map(e => e.user.id)];

  function g(e) {
    null != u && (e < eR ? (0, b.zG)(u.id, {
      voiceStatesMaxShown: eh.Og
    }) : (0, b.zG)(u.id, {
      voiceStatesMaxShown: Math.floor(e)
    }))
  }
  let E = Chunk981631.BRd.MIDNIGHT;
  return (0, Chunk54381.jsxs)("div", {
    className: Chunk607547.voiceSettingsContainer,
    children: [(0, Chunk54381.jsx)(Chunk199849.y6, {
      label: Chunk388032.intl.string(Chunk388032.t.dnvZSg),
      options: [{
        label: Chunk388032.intl.string(Chunk388032.t.YcOxtr),
        value: Chunk981631.ipw.LARGE
      }, {
        label: Chunk388032.intl.string(Chunk388032.t.BKIKqx),
        value: Chunk981631.ipw.SMALL
      }],
      className: Chunk607547.select,
      onChange: e => y.Z.setAvatarSizeMode(e),
      value: require
    }), (0, Chunk54381.jsx)(Chunk199849.y6, {
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
      onChange: e => y.Z.setDisplayNameMode(e),
      value: Chunk120356
    }), (0, Chunk54381.jsx)(Chunk481060.f6W, {
      theme: Chunk660216,
      children: e => {
        var t, i;
        return (0, r.jsxs)("div", {
          className: a()(eE.widgetContainer, e),
          children: [(0, r.jsx)("div", {
            className: eE.voiceWidgetContainer,
            children: (0, r.jsx)(W.kI, {
              id: "voice-widget",
              title: eg.intl.string(eg.t.KNJ6Vq),
              channel: eQ(),
              overlayVoiceStates: _,
              displayNameMode: o,
              displayUserMode: s,
              avatarSizeMode: n,
              widget: ep.Odu.VOICE,
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
            className: eE.widgetHeaderContainer,
            children: [(0, r.jsx)(K.PI, {
              children: eg.intl.string(eg.t.KNJ6Vq)
            }), (0, r.jsx)(K.ls, {}), (0, r.jsx)(K.RT, {
              id: null != (t = null == u ? true : u.id) ? t : "voice-widget",
              pinned: null != (i = null == u ? true : u.pinned) && i
            })]
          })]
        })
      }
    }), (0, Chunk54381.jsx)(Chunk199849.y6, {
      label: Chunk388032.intl.string(Chunk388032.t.swsWWC),
      options: [{
        label: Chunk388032.intl.string(Chunk388032.t.nBmDrT),
        value: Chunk981631.OYC.ALWAYS
      }, {
        label: Chunk388032.intl.string(Chunk388032.t["2OvIZY"]),
        value: Chunk981631.OYC.ONLY_WHILE_SPEAKING
      }],
      className: Chunk607547.select,
      onChange: e => y.Z.setDisplayUserMode(e),
      value: Chunk348327
    }), (0, Chunk54381.jsx)("div", {
      className: Chunk607547.sliderContainer,
      children: (0, Chunk54381.jsx)(Chunk481060.iRW, {
        label: Chunk388032.intl.string(Chunk388032.t["X/Uyzc"]),
        initialValue: Chunk392711,
        onValueRender: e => e < eR ? eg.intl.string(eg.t.nrUzFL) : "".concat(Math.floor(e)),
        minValue: eR - 1,
        maxValue: ew,
        onValueChange: Chunk224706,
        markers: eD,
        barStyles: {
          background: Chunk481060.TVs.colors.BACKGROUND_MOD_STRONG.css
        },
        fillStyles: {
          background: Chunk481060.TVs.colors.BACKGROUND_BRAND.css
        },
        onMarkerRender: e => e < eR ? eg.intl.string(eg.t.nrUzFL) : "".concat(Math.floor(e))
      })
    })]
  })
}

function eJ() {
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
          color: "text-strong",
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

function e$(e) {
  let {
    runningGame: t,
    runningGameApplication: n
  } = e, o = null == n ? true : n.id, a = (0, p.e7)([Z.Z], () => Z.Z.isLimitedInteractionOverrideEnabled(o), [o]), s = i.useMemo(() => null != t && (0, G.H8)(t.pid), [t]), l = (0, k.Z)({
    location: "overlay_user_settings"
  }), {
    disableClickableRegions: c,
    shouldShowKeybindIndicators: u
  } = (0, p.cj)([ea.default], () => ({
    disableClickableRegions: ea.default.disableClickableRegions,
    shouldShowKeybindIndicators: ea.default.showKeybindIndicators
  }));

  function d() {
    y.Z.setDisableClickableRegions(!c)
  }

  function f(e) {
    null != n && (0, V.rI)(n.id, e)
  }
  return (0, r.jsxs)("div", {
    className: eE.overlayEnabledSettingsContainer,
    children: [(0, r.jsx)(eY, {}), l && (0, r.jsx)(h.rsf, {
      label: eg.intl.string(eg.t.XZTl9r),
      checked: u,
      onChange: e => y.Z.setShowKeybindIndicators(e)
    }), null != o && (0, r.jsxs)("div", {
      children: [(0, r.jsxs)("div", {
        className: eE.limitedInteractionOverrideContainer,
        children: [(0, r.jsx)(h.Text, {
          variant: "text-md/semibold",
          color: "text-strong",
          children: eg.intl.string(eg.t.wgVQND)
        }), (0, r.jsx)(h.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: eg.intl.string(eg.t["5SsyF5"])
        })]
      }), (0, r.jsx)(h.rsf, {
        checked: a || s,
        disabled: s,
        onChange: e => f(e)
      })]
    }), (0, r.jsxs)("div", {
      children: [(0, r.jsxs)("div", {
        className: eE.limitedInteractionOverrideContainer,
        children: [(0, r.jsx)(h.Text, {
          variant: "text-md/semibold",
          color: "text-strong",
          children: eg.intl.string(eg.t["+eFXxq"])
        }), (0, r.jsx)(h.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: eg.intl.string(eg.t.kivMAp)
        })]
      }), (0, r.jsx)(h.rsf, {
        checked: !c,
        onChange: d
      })]
    })]
  })
}

function e0(e) {
  let {
    className: t,
    showHeader: n
  } = e, {
    runningGame: i,
    runningGameApplication: o
  } = (0, P.Z)(), a = true, s = (0, p.e7)([er.default], () => er.default.getCurrentUser());
  return ((0, S.ZP)(() => {
    if (ec.isPlatformEmbedded) return (0, R.Ky)(), R.P7
  }), ex(), null == s) ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(ef.Z, {
      title: eg.intl.string(eg.t["9cb1Uz"]),
      children: [a ? (0, r.jsx)(eJ, {}) : null, (0, r.jsxs)("div", {
        className: eE.overlayEnabledSettingsContainer,
        children: [(0, r.jsx)(eG, {
          runningGame: i,
          runningGameApplication: o
        }), (0, r.jsx)(eV, {}), (0, r.jsx)(eB, {}), (0, r.jsx)(eH, {})]
      }), (0, r.jsx)("div", {
        className: eE.settingsDivider
      })]
    }), (0, r.jsxs)("div", {
      children: [(0, r.jsx)(e$, {
        runningGame: i,
        runningGameApplication: o
      }), (0, r.jsx)("div", {
        className: eE.settingsDivider
      })]
    }), (0, r.jsxs)(h.gNt, {
      label: eg.intl.string(eg.t.r1TZfh),
      children: [(0, r.jsx)(eX, {}), (0, r.jsx)("div", {
        className: eE.settingsDivider
      })]
    }), (0, r.jsx)(eK, {})]
  })
}