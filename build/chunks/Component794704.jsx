/** Chunk was on web.js **/
/** chunk id: 794704, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => eQ
}), require("./953529.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk224706 = require("./224706.js"),
  Chunk660216 = require("./660216.js"),
  Chunk765250 = require("./765250.js"),
  Chunk13245 = require("./13245.js"),
  Chunk825209 = require("./825209.jsx"),
  Chunk593472 = require("./593472.js"),
  Chunk493773 = require("./493773.js"),
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
  Chunk340101 = require("./340101.js"),
  Chunk243487 = require("./243487.jsx"),
  Chunk430561 = require("./430561.jsx"),
  Chunk509003 = require("./509003.js"),
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
  Chunk289726 = require("./289726.js"),
  Chunk131970 = require("./131970.js"),
  Chunk730462 = require("./730462.js");

function eg(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function eE(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      eg(e, t, n[t])
    })
  }
  return e
}

function eb(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function ey(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : eb(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function eO(e, t) {
  if (null == e) return {};
  var n, r, i = ev(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function ev(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let eI = ew(null),
  eT = 20,
  eS = 16,
  eA = 1,
  eC = "voice-widget-display-users",
  eN = 25,
  eR = [0, 5, 10, 15, 20, 25];

function eP() {
  let e = ew(eI);
  f().isEqual(module, eI) || (Chunk626135.default.track(Chunk981631.rMx.OVERLAY_SETTINGS_UPDATED, module), eI = module)
}

function ew(e) {
  var t;
  let n = en.default.getNotificationPositionMode(),
    r = n !== ec._vf.DISABLED,
    i = ee.ZP.getOverlayKeybind(),
    a = ee.ZP.getOverlayChatKeybind();
  return {
    enabled: et.default.enabled,
    notifications_enabled: r,
    notifications_position: r ? n : null,
    text_notifications_mode: G.Z.isNotificationDisabled(x.OverlayNotificationDisabledSetting.TEXT_CHAT) ? "DISABLED" : "ENABLED",
    hotkey: null != i ? (0, eo.BB)(i.shortcut) : null,
    text_activation_hotkey: null != a ? (0, eo.BB)(a.shortcut) : null,
    text_opacity_slider: en.default.getTextWidgetOpacity(),
    old_enabled: null != (t = null == e ? true : e.enabled) ? t : et.default.enabled
  }
}

function eD(e) {
  let {
    children: t,
    title: n,
    className: i,
    titleId: a
  } = e;
  return (0, r.jsxs)(m.xJW, {
    children: [null != n && (0, r.jsx)(m.Text, {
      variant: "text-sm/medium",
      color: "text-muted",
      className: ep.formItemTitle,
      id: a,
      children: n
    }), (0, r.jsx)("div", {
      className: o()(ep.rowContainer, i),
      children: t
    })]
  })
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
    className: o()(ep.groupContainer, f),
    children: [(0, r.jsxs)(m.kL8, {
      "aria-label": d,
      onClick: u,
      children: [null != t && (0, r.jsx)("div", {
        className: ep.groupHeader,
        children: t
      }), (0, r.jsxs)("div", {
        className: ep.groupContent,
        children: [null != n && (0, r.jsx)("div", {
          className: ep.groupIcon,
          children: n
        }), (0, r.jsxs)("div", {
          className: ep.groupMainContent,
          children: [(0, r.jsx)(m.Text, {
            variant: "text-md/medium",
            color: "header-primary",
            className: ep.groupTitle,
            children: i
          }), null != a && (0, r.jsx)(m.Text, {
            variant: "text-sm/normal",
            color: "text-secondary",
            children: a
          }), null != l && (0, r.jsx)(m.Text, {
            variant: "text-xxs/medium",
            color: "text-muted",
            children: l
          })]
        }), (0, r.jsx)("div", {
          className: ep.groupAction,
          children: s
        })]
      })]
    }), (0, r.jsx)("div", {
      className: ep.groupWarning,
      children: c
    })]
  })
}

function eL(e) {
  var {
    children: t,
    className: n,
    onExpand: a
  } = e, s = eO(e, ["children", "className", "onExpand"]);
  let [l, c] = i.useState(false), u = e => {
    c(e), null == a || a(e)
  };
  return (0, r.jsx)(m.zF9, {
    className: ep.collapseable,
    collapsibleContent: (0, r.jsx)("div", {
      className: ep.groupCollapsedContainer,
      children: t
    }),
    children: e => {
      let {
        onClick: t
      } = e;
      return (0, r.jsx)(ex, ey(eE({}, s), {
        onClick: e => {
          u(!l), null == t || t(e)
        },
        className: o()(ep.mainCollapseableContainer, n),
        action: (0, r.jsxs)("div", {
          className: ep.groupCollapsedAction,
          children: [s.action, l ? (0, r.jsx)(m.CJ0, {
            size: "custom",
            width: eT,
            height: eT,
            color: "var(--interactive-active)"
          }) : (0, r.jsx)(m.Fbu, {
            size: "custom",
            width: eT,
            height: eT,
            color: "var(--interactive-active)"
          })]
        })
      }))
    }
  })
}
let ej = new Set([Chunk837268.mM.INITIALIZING, Chunk837268.mM.WAITING_FOR_SCREEN_TYPE_RESOLUTION, Chunk837268.mM.WAITING_FOR_MODULE_TRACKING, Chunk837268.mM.WAITING_FOR_OVERLAY_OPEN, Chunk837268.mM.WAITING_FOR_POPOUT_OPEN, Chunk837268.mM.WAITING_FOR_MODULE_POPOUT_CAPTURE, Chunk837268.mM.WAITING_FOR_REACT_INITIALIZATION, Chunk837268.mM.WAITING_FOR_PID_FOCUS]),
  eM = e => {
    e.preventDefault(), e.stopPropagation()
  };

function ek(e) {
  var t, n, a;
  let {
    runningGame: o,
    runningGameApplication: s
  } = e, c = null == o ? true : o.pid, u = (0, _.e7)([k.default], () => null == o || null == c ? null : k.default.getTrackedGameByPid(c), [o, c], l()), {
    enabledLegacy: d,
    enabledOOP: f
  } = (0, _.cj)([X.Z, J.Z], () => {
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
    return (0, C.b6)(o, false, [X.Z, J.Z])
  }, [o, u]), p = (0, _.e7)([C.ZP, X.Z, J.Z], () => null == o ? null : (0, C.FZ)(o, C.ZP, X.Z, J.Z), [o], l()), [E, b] = i.useState(f), [O, T] = i.useState(d), [S, A] = i.useState(false);
  i.useEffect(() => {
    b(f), T(d)
  }, [f, d]);
  let N = !(0, es.supportsLegacy)(),
    R = !(0, es.supportsOutOfProcess)(),
    {
      legacyEnabled: x,
      oopEnabled: j
    } = (0, _.cj)([k.default], () => k.default.getGlobalEnabledStatus()),
    M = (e, t, n) => {
      var r, i, a;
      if (eM(n), null == o) return;
      let s = false,
        l = false;
      switch (t) {
        case D.AE.LEGACY_GAME:
          T(e), g.Z.toggleOverlay(o, e, E), s = !e && O;
          break;
        case D.AE.OOP_GAME:
          b(e), g.Z.toggleOverlay(o, O, e), l = !e && E;
          break;
        case D.AE.LEGACY:
          y.Z.setEnabled(e, j), (0, D.ou)(e, D.AE.LEGACY, null != (r = o.id) ? r : null);
          break;
        case D.AE.OOP:
          y.Z.setEnabled(x, e), (0, D.ou)(e, D.AE.OOP, null != (i = o.id) ? i : null)
      }(s || l) && (0, Z.l)(s ? D.AE.LEGACY_GAME : D.AE.OOP_GAME, null != (a = o.id) ? a : null)
    },
    U = (e, t) => {
      let n = !t && e,
        r = !j && E,
        i = !x && O,
        a = !E && j,
        o = !O && x;
      switch (true) {
        case n && (r || i) && (a || o):
          return "both";
        case n && (r || i):
          return "global";
        default:
          return "game"
      }
    },
    G = (e, t, n) => {
      if (eM(n), null == o) return;
      let r = false,
        i = false;
      switch (t) {
        case "game":
          g.Z.toggleOverlay(o, e, e), T(e), b(e), r = !e && O, i = !e && E;
          break;
        case "global":
          y.Z.setEnabled(e, e), r = !e && x, i = !e && j;
          break;
        case "both":
          y.Z.setEnabled(e, e), g.Z.toggleOverlay(o, e, e), T(e), b(e), r = !e && x || !e && O, i = !e && j || !e && E
      }
      let a = null;
      if (r ? a = "game" === t ? D.AE.LEGACY_GAME : D.AE.LEGACY : i && (a = "game" === t ? D.AE.OOP_GAME : D.AE.OOP), null != a) {
        var s;
        (0, Z.l)(a, null != (s = o.id) ? s : null)
      }
    },
    B = N && R,
    F = !x && !j,
    V = !E && !x && O && !N,
    H = !O && !j && E && !R,
    Y = (null == u ? true : u.overlayMethod) === L.gl.Disabled,
    K = (null == u ? true : u.state) === L.mM.OVERLAY_RENDERING && !Y,
    z = (null == u ? true : u.state) != null && ej.has(u.state) && !Y,
    q = (null == u ? true : u.overlayMethod) === L.gl.OutOfProcess,
    Q = (null == u ? true : u.overlayMethod) === L.gl.OutOfProcessLimitedInteraction,
    $ = (null == u ? true : u.overlayMethod) === L.gl.Hook,
    ee = (null == u ? true : u.state) === L.mM.OVERLAY_CRASHED || (null == u ? true : u.state) === L.mM.OVERLAY_CRASHED_DISABLED,
    et = !E && !O,
    [en, er] = (() => {
      switch (true) {
        case K && q:
          function e(e, t) {
            return (0, r.jsx)(m.Text, {
              tag: "span",
              variant: "text-sm/medium",
              color: "text-feedback-positive",
              children: e
            }, t)
          }
          return [e_.intl.format(e_.t.hFVBIi, {
            overlayMethod: e_.intl.string(e_.t.a3eXS0),
            overlayMethodHook: e
          }), null];
        case K && Q:
          function t(e, t) {
            return (0, r.jsx)(m.Text, {
              tag: "span",
              variant: "text-sm/medium",
              color: "text-feedback-warning",
              children: e
            }, t)
          }
          return [e_.intl.format(e_.t.hFVBIi, {
            overlayMethod: e_.intl.string(e_.t["506AbW"]),
            overlayMethodHook: t
          }), null];
        case K && $:
          function n() {
            var e, t;
            switch (true) {
              case (null == u ? true : u.fullscreenType) !== v.Jx.BORDERLESS_FULLSCREEN:
                return e_.intl.string(e_.t.mJmbeH);
              case R:
                return e_.intl.string(e_.t.C7bLTU);
              case !(null != (e = null == u ? true : u.oopEnabled) && e):
                return e_.intl.string(e_.t.WiY24u);
              case !j:
                return e_.intl.string(e_.t.cAFVsL);
              case !(null != (t = null == u ? true : u.supportsOutOfProcess) && t):
                return e_.intl.string(e_.t.XcGEcn);
              default:
                return e_.intl.string(e_.t.bJXH2t)
            }
          }

          function i(e, t) {
            return (0, r.jsx)(m.Text, {
              tag: "span",
              variant: "text-sm/medium",
              color: "text-primary",
              children: e
            }, t)
          }
          return [e_.intl.format(e_.t.hFVBIi, {
            overlayMethod: e_.intl.string(e_.t.bvlpDQ),
            overlayMethodHook: i
          }), n()];
        case ee:
          return [e_.intl.string(e_.t.OFC2a2), null];
        case B:
          return [e_.intl.string(e_.t.m7X4a2), null];
        case F:
          return [e_.intl.string(e_.t["9DUS5u"]), null];
        case et:
          return [e_.intl.string(e_.t.nQ9EdH), null];
        case V:
        case H:
          return [e_.intl.string(e_.t.VWUn0d), null];
        case z:
          if (q) return [e_.intl.string(e_.t["s8+CFh"]), null];
          if ($) return [e_.intl.string(e_.t.JEEdqq), null];
          if (Q) return [e_.intl.string(e_.t.pzBMwc), null];
          return [e_.intl.string(e_.t["2Xhy9v"]), null];
        case null == u:
          return [e_.intl.string(e_.t.vwHPRk), null];
        default:
          return [e_.intl.string(e_.t.ONovPz), null]
      }
    })();
  (0, I.ZP)(() => {
    g.Z.getDetectableGames()
  });
  let [ei, ea] = i.useMemo(() => z ? ["text-muted", m.TVs.colors.TEXT_MUTED.css] : K && Q ? ["text-feedback-warning", m.TVs.colors.TEXT_FEEDBACK_WARNING.css] : K && q ? ["text-feedback-positive", m.TVs.colors.TEXT_FEEDBACK_POSITIVE.css] : K && $ ? ["text-primary", m.TVs.colors.TEXT_PRIMARY.css] : ["interactive-normal", m.TVs.colors.INTERACTIVE_NORMAL.css], [z, K, Q, q, $]);
  return null == o ? null : (0, r.jsxs)(eL, {
    onExpand: A,
    className: S ? ep.expandedContainer : true,
    title: (0, r.jsxs)(r.Fragment, {
      children: [null != (a = null != (n = null != (t = null == s ? true : s.name) ? t : null == p ? true : p.name) ? n : null == o ? true : o.gameName) ? a : "", null != p && p.verified ? (0, r.jsx)(m.ua7, {
        text: e_.intl.string(e_.t["4PJP5u"]),
        children: e => (0, r.jsx)(w.Z, ey(eE({
          size: eS,
          color: m.TVs.colors.BG_BRAND.css
        }, e), {
          children: (0, r.jsx)(m.kmB, {
            size: "custom",
            width: eS,
            height: eS,
            color: m.TVs.colors.WHITE.css
          })
        }))
      }) : null]
    }),
    description: en,
    hint: null != er ? er : true,
    header: (0, r.jsxs)(r.Fragment, {
      children: [K || z ? (0, r.jsx)(m.pzj, {
        size: "xxs",
        color: ea
      }) : (0, r.jsx)("div", {
        className: ep.playingDot
      }), (0, r.jsx)(m.Text, {
        variant: "text-xs/semibold",
        color: ei,
        children: e_.intl.string(e_.t.CDOx39)
      })]
    }),
    icon: (0, r.jsx)(P.Z, {
      game: s,
      pid: null == o ? true : o.pid,
      size: P.A.MEDIUM
    }),
    "aria-label": e_.intl.string(e_.t["87O5GB"]),
    action: (0, r.jsx)(m.P3F, {
      onClick: e => eM(e),
      children: (0, r.jsx)(h.T2, {
        checked: E && j || O && x,
        disabled: B,
        onChange: (e, t) => {
          G(e, U(e, E && j || O && x), t)
        }
      })
    }),
    warning: (0, r.jsx)(W.Z, {
      className: ep.systemServiceWarning,
      game: o
    }),
    children: [(0, r.jsx)(ex, {
      title: e_.intl.string(e_.t["7BlVIi"]),
      description: e_.intl.string(e_.t.ndgADA),
      hint: j ? true : e_.intl.string(e_.t.cAFVsL),
      "aria-label": e_.intl.string(e_.t["7BlVIi"]),
      action: (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(h.T2, {
          checked: E && j,
          disabled: R,
          onChange: (e, t) => {
            e && !j ? M(e, D.AE.OOP, t) : M(e, D.AE.OOP_GAME, t)
          }
        }), (0, r.jsx)("div", {
          className: ep.emptySpacer
        })]
      })
    }), (0, r.jsx)(ex, {
      title: e_.intl.string(e_.t.BfFpW1),
      description: e_.intl.string(e_.t.OzInYm),
      hint: x ? true : e_.intl.string(e_.t["3sYHXl"]),
      "aria-label": e_.intl.string(e_.t.BfFpW1),
      action: (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(h.T2, {
          checked: O && x,
          disabled: N,
          onChange: (e, t) => {
            e && !x ? M(e, D.AE.LEGACY, t) : M(e, D.AE.LEGACY_GAME, t)
          }
        }), (0, r.jsx)("div", {
          className: ep.emptySpacer
        })]
      })
    })]
  })
}

function eU(e) {
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

function eG(e) {
  let {
    rawGame: t,
    gameApplication: n,
    supportDisabled: a,
    getEnabledFromStatus: o,
    onChange: s,
    clientSettingType: l,
    ariaLabel: c
  } = e, u = (0, _.cj)([C.ZP, X.Z, J.Z], () => (0, C.FZ)(t, C.ZP, X.Z, J.Z)), d = (0, _.cj)([X.Z, J.Z], () => (0, C.b6)(t, false, [X.Z, J.Z]), [t]), f = o(d), [p, m] = i.useState(f);
  i.useEffect(() => {
    m(f)
  }, [f]);
  let g = (e, n) => {
    let r = !e && p;
    if (eM(n), m(e), s(e, u, d), r) {
      var i, a;
      (0, Z.l)(l, null != (a = null != (i = u.id) ? i : null == t ? true : t.id) ? a : null)
    }
  };
  return (0, r.jsx)(ex, {
    title: t.name,
    icon: (0, r.jsx)(eU, {
      game: u,
      gameApplication: n
    }),
    "aria-label": c,
    action: (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(h.T2, {
        checked: p,
        disabled: a,
        onChange: (e, t) => g(e, t)
      }), (0, r.jsx)("div", {
        className: ep.emptySpacer
      })]
    })
  })
}

function eB() {
  let [e, t] = Chunk647438.useState(false), {
    legacyEnabled: n,
    oopEnabled: a
  } = (0, Chunk442837.cj)([Chunk371651.default], () => Chunk371651.default.getGlobalEnabledStatus()), o = (0, Chunk442837.Wu)([Chunk594190.ZP], () => Chunk594190.ZP.getGamesSeen(true)).filter(e => !(0, Y.le)(e)), s = (0, Chunk835473.Z)(o.map(e => e.id)), l = !(0, Chunk145597.supportsLegacy)(), c = (e, t) => {
    var r, i;
    eM(t), y.Z.setEnabled(e, a);
    let o = null != (i = null == (r = C.ZP.getCurrentGameForAnalytics()) ? true : r.id) ? i : null;
    (0, D.ou)(e, D.AE.LEGACY, o), !e && n && (0, Z.l)(D.AE.LEGACY, o)
  }, u = (e, t, n) => {
    let {
      enabledOOP: r
    } = n;
    g.Z.toggleOverlay(t, e, r)
  }, d = Chunk647438.useMemo(() => (0, Chunk145597.supportsLegacy)() ? l ? Chunk388032.intl.string(Chunk388032.t.r9jEV1) : Chunk388032.intl.string(Chunk388032.t.OzInYm) : Chunk388032.intl.string(Chunk388032.t["8Ox6/P"]), [l]);
  return 0 === o.length ? (0, Chunk951288.jsx)(ex, {
    title: Chunk388032.intl.string(Chunk388032.t.BfFpW1),
    description: Chunk392711,
    "aria-label": Chunk388032.intl.string(Chunk388032.t.BfFpW1),
    className: Chunk289726.standaloneContainer,
    action: (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [(0, Chunk951288.jsx)(Chunk755721.T2, {
        checked: require,
        disabled: l,
        onChange: (e, t) => c(e, t)
      }), Chunk987650.iP && (0, Chunk951288.jsx)("div", {
        className: Chunk289726.emptySpacer
      })]
    })
  }) : (0, Chunk951288.jsxs)(eL, {
    onExpand: exports,
    className: module ? Chunk289726.expandedContainer : true,
    title: Chunk388032.intl.string(Chunk388032.t.BfFpW1),
    description: Chunk392711,
    "aria-label": Chunk388032.intl.string(Chunk388032.t.BfFpW1),
    action: (0, Chunk951288.jsx)(Chunk481060.P3F, {
      onClick: e => eM(e),
      children: (0, Chunk951288.jsx)(Chunk755721.T2, {
        checked: require,
        disabled: l,
        onChange: (e, t) => c(e, t)
      })
    }),
    children: [(0, Chunk951288.jsx)("div", {
      className: Chunk289726.subtitleContainer,
      children: (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-xs/semibold",
        color: "text-muted",
        children: Chunk388032.intl.string(Chunk388032.t.FzoWRk)
      })
    }), (0, Chunk951288.jsx)(Chunk481060.zJl, {
      className: Chunk289726.scroller,
      children: o.map((e, t) => (0, r.jsx)(eG, {
        rawGame: e,
        clientSettingType: D.AE.LEGACY_GAME,
        supportDisabled: l,
        gameApplication: s[t],
        getEnabledFromStatus: e => {
          let {
            enabledLegacy: t
          } = e;
          return t
        },
        onChange: u,
        ariaLabel: e_.intl.format(e_.t.hvPYsL, {
          gameName: e.name
        }).toString()
      }, e.id))
    })]
  })
}

function eZ() {
  let [e, t] = Chunk647438.useState(false), {
    oopEnabled: n,
    legacyEnabled: a
  } = (0, Chunk442837.cj)([Chunk371651.default], () => Chunk371651.default.getGlobalEnabledStatus()), o = !(0, Chunk145597.supportsOutOfProcess)(), s = (0, Chunk442837.Wu)([Chunk594190.ZP], () => Chunk594190.ZP.getGamesSeen(true)).filter(e => !(0, Y.le)(e)), l = (0, Chunk835473.Z)(Chunk348327.map(e => e.id)), c = (e, t) => {
    var r, i;
    eM(t);
    let o = !e && n;
    y.Z.setEnabled(a, e);
    let s = null != (i = null == (r = C.ZP.getCurrentGameForAnalytics()) ? true : r.id) ? i : null;
    (0, D.ou)(e, D.AE.OOP, s), o && (0, Z.l)(D.AE.OOP, s)
  }, u = (e, t, n) => {
    let {
      enabledLegacy: r
    } = n;
    g.Z.toggleOverlay(t, e, r)
  }, d = Chunk647438.useMemo(() => Chunk987650.iP ? o ? Chunk388032.intl.string(Chunk388032.t.C7bLTU) : Chunk388032.intl.string(Chunk388032.t.ndgADA) : Chunk388032.intl.string(Chunk388032.t.m7X4a2), [o]);
  return 0 === Chunk348327.length ? (0, Chunk951288.jsx)(ex, {
    title: Chunk388032.intl.string(Chunk388032.t["7BlVIi"]),
    description: Chunk392711,
    "aria-label": Chunk388032.intl.string(Chunk388032.t["7BlVIi"]),
    className: Chunk289726.standaloneContainer,
    action: (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [(0, Chunk951288.jsx)(Chunk755721.T2, {
        checked: require,
        disabled: o,
        onChange: (e, t) => c(e, t)
      }), Chunk987650.iP && (0, Chunk951288.jsx)("div", {
        className: Chunk289726.emptySpacer
      })]
    })
  }) : (0, Chunk951288.jsxs)(eL, {
    onExpand: exports,
    className: module ? Chunk289726.expandedContainer : true,
    title: Chunk388032.intl.string(Chunk388032.t["7BlVIi"]),
    description: Chunk392711,
    "aria-label": Chunk388032.intl.string(Chunk388032.t["7BlVIi"]),
    action: (0, Chunk951288.jsx)(Chunk481060.P3F, {
      onClick: e => eM(e),
      children: (0, Chunk951288.jsx)(Chunk755721.T2, {
        checked: require,
        disabled: o,
        onChange: (e, t) => c(e, t)
      })
    }),
    children: [(0, Chunk951288.jsx)("div", {
      className: Chunk289726.subtitleContainer,
      children: (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-xs/semibold",
        color: "text-muted",
        children: Chunk388032.intl.string(Chunk388032.t.FzoWRk)
      })
    }), (0, Chunk951288.jsx)(Chunk481060.zJl, {
      className: Chunk289726.scroller,
      children: Chunk348327.map((e, t) => (0, r.jsx)(eG, {
        rawGame: e,
        clientSettingType: D.AE.OOP_GAME,
        gameApplication: l[t],
        supportDisabled: o,
        getEnabledFromStatus: e => {
          let {
            enabledOOP: t
          } = e;
          return t
        },
        onChange: u,
        ariaLabel: e_.intl.format(e_.t.nByTd3, {
          gameName: e.name
        }).toString()
      }, e.id))
    })]
  })
}

function eF() {
  var e;
  let t = (0, Chunk442837.e7)([Chunk556296.ZP], () => Chunk556296.ZP.getOverlayKeybind()),
    n = !(0, Chunk145597.supportsLegacy)(),
    i = !(0, Chunk145597.supportsOutOfProcess)(),
    [a, o] = (0, Chunk442837.Wu)([Chunk594190.ZP], () => [Chunk594190.ZP.canShowAdminWarning, Chunk594190.ZP.getVisibleGame()], []),
    s = null != o && o.elevated && Chunk120356,
    l = !(0, Chunk556296.I1)(null != (e = null == exports ? true : exports.shortcut) ? module : []);

  function c(e) {
    u()(null != t, "Keybind should never be undefined"), E.Z.setKeybind(ey(eE({}, t), {
      shortcut: e
    }))
  }
  return (0, Chunk951288.jsx)(eD, {
    children: (0, Chunk951288.jsx)("div", {
      className: Chunk289726.keybindMainContainer,
      children: (0, Chunk951288.jsxs)("div", {
        className: Chunk289726.keybindContainer,
        children: [(0, Chunk951288.jsxs)("div", {
          className: Chunk289726.keybindHeaderContainer,
          children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
            variant: "text-md/semibold",
            color: "header-primary",
            children: Chunk388032.intl.string(Chunk388032.t.VsAZcH)
          }), Chunk348327 && (0, Chunk951288.jsx)(Chunk481060.Text, {
            variant: "text-xs/normal",
            color: "text-feedback-warning",
            className: Chunk289726.keybindAdminWarning,
            children: Chunk388032.intl.string(Chunk388032.t.NsowVV)
          }), l && (0, Chunk951288.jsx)(Chunk481060.Text, {
            variant: "text-xs/normal",
            color: "text-feedback-warning",
            className: Chunk289726.keybindAdminWarning,
            children: Chunk388032.intl.string(Chunk388032.t.UNoTw8)
          })]
        }), (0, Chunk951288.jsx)("div", {
          className: Chunk289726.keybindRecorderContainer,
          children: (0, Chunk951288.jsx)(Chunk825209.Z, {
            disabled: require && Chunk647438,
            defaultValue: null != exports ? exports.shortcut : [],
            onChange: Chunk512722
          })
        })]
      })
    })
  })
}
let eV = (e, t, n) => [{
  title: e_.t.eVE4LS,
  description: e_.t["72WNqq"],
  disabledSetting: x.OverlayNotificationDisabledSetting.TEXT_CHAT
}, {
  title: e_.t.hqsZJS,
  description: e_.t.kHjdqa,
  disabledSetting: x.OverlayNotificationDisabledSetting.GO_LIVE_NUDGE
}, e && {
  title: e_.t.sop3rq,
  description: e_.t.pjgffX,
  disabledSetting: x.OverlayNotificationDisabledSetting.GAME_ACTIVITY
}, t && {
  title: e_.t["2QVhbW"],
  description: e_.t.wQ4ilJ,
  disabledSetting: x.OverlayNotificationDisabledSetting.NOW_PLAYING
}, n && {
  title: e_.t["5/21FR"],
  description: e_.t.EIzwfH,
  disabledSetting: x.OverlayNotificationDisabledSetting.FRIEND_STREAM_WATCH_NUDGE
}].filter(e => false !== e).filter(Boolean);

function eH() {
  let {
    allowActivityWidget: e,
    allowNowPlaying: t
  } = (0, Chunk32300.o4)("user_settings"), {
    enabled: n
  } = (0, Chunk32300.aq)("OverlayV3StreamWatchNudge"), i = eV(module, exports, require), a = e => t => {
    y.Z.setNotificationDisabledSetting(e, !t)
  }, o = (0, Chunk442837.e7)([Chunk624864.Z], () => Chunk624864.Z.getDisabledNotifications());
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk289726.notificationSettingsContainer,
    children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
      variant: "heading-md/semibold",
      color: "header-primary",
      children: Chunk388032.intl.string(Chunk388032.t.xOE5bG)
    }), Chunk647438.map(e => (0, r.jsxs)(eD, {
      className: ep.notificationItem,
      children: [(0, r.jsxs)("div", {
        className: ep.notificationDescriptionContainer,
        children: [(0, r.jsx)(m.Text, {
          variant: "text-sm/semibold",
          color: "header-primary",
          children: e_.intl.string(e.title)
        }), (0, r.jsx)(m.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: e_.intl.string(e.description)
        })]
      }), (0, r.jsx)(m.j7V, {
        value: !o.has(e.disabledSetting),
        onChange: a(e.disabledSetting),
        hideBorder: true
      })]
    }, e.disabledSetting))]
  })
}

function eY(e) {
  let t = eW(e.username);
  return t.user = e, t
}

function eW(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    n = arguments.length > 2 && true !== arguments[2] && arguments[2],
    r = arguments.length > 3 && true !== arguments[3] && arguments[3],
    i = "456" + Math.floor(1e6 * Math.random());
  return {
    voiceState: new q.Z({
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
    user: new z.Z({
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

function eK() {
  return (0, Chunk131704.kt)({
    id: "123",
    name: "Test Channel",
    type: Chunk981631.d4z.GUILD_VOICE,
    guild_id: "456"
  })
}

function ez() {
  var e, t;
  let {
    avatarSizeMode: n,
    displayNameMode: a,
    displayUserMode: s
  } = (0, Chunk442837.cj)([Chunk237997.default], () => ({
    avatarSizeMode: Chunk237997.default.getAvatarSizeMode(),
    displayNameMode: Chunk237997.default.getDisplayNameMode(),
    displayUserMode: Chunk237997.default.getDisplayUserMode()
  })), l = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser()), [c] = Chunk647438.useState(() => [eW(Chunk388032.intl.string(Chunk388032.t.C0ZDvr), true, false), eW(Chunk388032.intl.string(Chunk388032.t.iOtj8P), false, false, true), eW(Chunk388032.intl.string(Chunk388032.t["0oqNgI"]), false, true)]), u = (0, Chunk442837.e7)([Chunk610394.ZP, Chunk355863.Z], () => {
    let e = Chunk610394.ZP.getWidgetByType(Chunk981631.Odu.VOICE_V3);
    if (null == module) return null;
    let t = Chunk355863.Z.getWidget(module.id);
    return null != exports && (0, Chunk340101.Aw)(exports) ? exports : null
  }), d = null != (t = null == u || null == (e = u.meta) ? true : module.voiceStatesMaxShown) ? exports : Chunk501787.At, f = [null != l ? eY(l) : null, ...Chunk512722].filter(Chunk823379.lm), p = [new Map(f.map(e => [e.user.id, e])), f.map(e => e.user.id)];

  function h(e) {
    null != u && (e < eA ? (0, b.zG)(u.id, {
      voiceStatesMaxShown: ef.Og
    }) : (0, b.zG)(u.id, {
      voiceStatesMaxShown: Math.floor(e)
    }))
  }
  let g = Chunk981631.BRd.MIDNIGHT;
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk289726.voiceSettingsContainer,
    children: [(0, Chunk951288.jsx)(eD, {
      title: Chunk388032.intl.string(Chunk388032.t.dnvZSk),
      children: (0, Chunk951288.jsx)(Chunk481060.q4e, {
        options: [{
          label: Chunk388032.intl.string(Chunk388032.t.YcOxtr),
          value: Chunk981631.ipw.LARGE
        }, {
          label: Chunk388032.intl.string(Chunk388032.t.BKIKq6),
          value: Chunk981631.ipw.SMALL
        }],
        className: Chunk289726.select,
        onChange: e => y.Z.setAvatarSizeMode(e),
        value: require
      })
    }), (0, Chunk951288.jsx)(eD, {
      title: Chunk388032.intl.string(Chunk388032.t.J0dpcH),
      children: (0, Chunk951288.jsx)(Chunk481060.q4e, {
        options: [{
          label: Chunk388032.intl.string(Chunk388032.t.nBmDra),
          value: Chunk981631.wC$.ALWAYS
        }, {
          label: Chunk388032.intl.string(Chunk388032.t["2OvIZW"]),
          value: Chunk981631.wC$.ONLY_WHILE_SPEAKING
        }, {
          label: Chunk388032.intl.string(Chunk388032.t.ekjlPD),
          value: Chunk981631.wC$.NEVER
        }],
        className: Chunk289726.select,
        onChange: e => y.Z.setDisplayNameMode(e),
        value: Chunk120356
      })
    }), (0, Chunk951288.jsx)(Chunk481060.f6W, {
      theme: Chunk224706,
      children: e => {
        var t, i;
        return (0, r.jsxs)("div", {
          className: o()(ep.widgetContainer, e),
          children: [(0, r.jsx)("div", {
            className: ep.voiceWidgetContainer,
            children: (0, r.jsx)(V.kI, {
              id: "voice-widget",
              title: e_.intl.string(e_.t.KNJ6Vl),
              channel: eK(),
              overlayVoiceStates: p,
              displayNameMode: a,
              displayUserMode: s,
              avatarSizeMode: n,
              widget: ec.Odu.VOICE,
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
            className: ep.widgetHeaderContainer,
            children: [(0, r.jsx)(H.PI, {
              children: e_.intl.string(e_.t.KNJ6Vl)
            }), (0, r.jsx)(H.ls, {}), (0, r.jsx)(H.RT, {
              id: null != (t = null == u ? true : u.id) ? t : "voice-widget",
              pinned: null != (i = null == u ? true : u.pinned) && i
            })]
          })]
        })
      }
    }), (0, Chunk951288.jsx)(eD, {
      title: Chunk388032.intl.string(Chunk388032.t.swsWWF),
      children: (0, Chunk951288.jsx)(Chunk481060.q4e, {
        options: [{
          label: Chunk388032.intl.string(Chunk388032.t.nBmDra),
          value: Chunk981631.OYC.ALWAYS
        }, {
          label: Chunk388032.intl.string(Chunk388032.t["2OvIZW"]),
          value: Chunk981631.OYC.ONLY_WHILE_SPEAKING
        }],
        className: Chunk289726.select,
        onChange: e => y.Z.setDisplayUserMode(e),
        value: Chunk348327
      })
    }), (0, Chunk951288.jsx)(eD, {
      title: Chunk388032.intl.string(Chunk388032.t["X/Uyzc"]),
      titleId: eC,
      children: (0, Chunk951288.jsx)("div", {
        className: Chunk289726.sliderContainer,
        children: (0, Chunk951288.jsx)(Chunk481060.iRW, {
          initialValue: Chunk392711,
          onValueRender: e => e < eA ? e_.intl.string(e_.t.nrUzFB) : "".concat(Math.floor(e)),
          minValue: eA - 1,
          maxValue: eN,
          onValueChange: Chunk755721,
          markers: eR,
          barStyles: {
            background: Chunk481060.TVs.colors.BACKGROUND_MOD_STRONG.css
          },
          fillStyles: {
            background: Chunk481060.TVs.colors.BG_BRAND.css
          },
          "aria-labelledby": eC,
          onMarkerRender: e => e < eA ? e_.intl.string(e_.t.nrUzFB) : "".concat(Math.floor(e))
        })
      })
    })]
  })
}

function eq() {
  let [e, t] = (0, Chunk243778.US)([Chunk704215.z.OVERLAY_OOP_SETTINGS_NUX], true, true), n = () => {
    exports(Chunk921944.L.DISMISS)
  };
  return ((0, Chunk493773.ZP)(() => () => {
    exports(Chunk921944.L.AUTO_DISMISS)
  }), module !== Chunk704215.z.OVERLAY_OOP_SETTINGS_NUX) ? null : (0, Chunk951288.jsxs)("div", {
    className: Chunk289726.overlaySettingsNux,
    children: [(0, Chunk951288.jsx)("div", {
      children: (0, Chunk951288.jsx)("img", {
        src: Chunk131970.Z,
        alt: Chunk388032.intl.string(Chunk388032.t.mdXZh4),
        className: Chunk289726.nuxFirstImage
      })
    }), (0, Chunk951288.jsx)("div", {
      children: (0, Chunk951288.jsxs)("div", {
        className: Chunk289726.mainTitleContainer,
        children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
          variant: "heading-xl/medium",
          color: "header-primary",
          children: Chunk388032.intl.string(Chunk388032.t.jzjJQk)
        }), (0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-md/normal",
          color: "text-muted",
          children: Chunk388032.intl.string(Chunk388032.t["5dOfxc"])
        })]
      })
    }), (0, Chunk951288.jsx)("div", {
      children: (0, Chunk951288.jsx)("img", {
        src: Chunk730462.Z,
        alt: Chunk388032.intl.string(Chunk388032.t.mdXZh4),
        className: Chunk289726.nuxUserSettingsImage
      })
    }), (0, Chunk951288.jsx)("div", {
      "data-button-hoisted-classname-wrapper": true,
      className: Chunk289726.closeCircleButton,
      children: (0, Chunk951288.jsx)(Chunk481060.zxk, {
        variant: "primary",
        text: Chunk388032.intl.string(Chunk388032.t.Q26diI),
        onClick: () => require()
      })
    }), (0, Chunk951288.jsx)("div", {
      className: Chunk289726.nuxDivider
    })]
  })
}

function eX(e) {
  let {
    runningGame: t,
    runningGameApplication: n
  } = e, a = null == n ? true : n.id, o = (0, _.e7)([G.Z], () => G.Z.isLimitedInteractionOverrideEnabled(a), [a]), s = i.useMemo(() => null != t && (0, U.H8)(t.pid), [t]), l = (0, M.Z)({
    location: "overlay_user_settings"
  }), {
    disableClickableRegions: c,
    shouldShowKeybindIndicators: u
  } = (0, _.cj)([en.default], () => ({
    disableClickableRegions: en.default.disableClickableRegions,
    shouldShowKeybindIndicators: en.default.showKeybindIndicators
  }));

  function d() {
    y.Z.setDisableClickableRegions(!c)
  }

  function f(e) {
    null != n && y.Z.setLimitedInteractionOverride(n.id, e)
  }
  return (0, r.jsxs)("div", {
    className: ep.overlayEnabledSettingsContainer,
    children: [(0, r.jsx)(eF, {}), l && (0, r.jsx)(eD, {
      children: (0, r.jsx)(m.j7V, {
        value: u,
        onChange: e => y.Z.setShowKeybindIndicators(e),
        hideBorder: true,
        children: e_.intl.string(e_.t.XZTl9v)
      })
    }), null != a && (0, r.jsxs)(eD, {
      children: [(0, r.jsxs)("div", {
        className: ep.limitedInteractionOverrideContainer,
        children: [(0, r.jsx)(m.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          children: e_.intl.string(e_.t.wgVQND)
        }), (0, r.jsx)(m.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: e_.intl.string(e_.t["5SsyFx"])
        })]
      }), (0, r.jsx)(m.j7V, {
        value: o || s,
        disabled: s,
        onChange: e => f(e),
        hideBorder: true
      })]
    }), (0, r.jsxs)(eD, {
      children: [(0, r.jsxs)("div", {
        className: ep.limitedInteractionOverrideContainer,
        children: [(0, r.jsx)(m.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          children: e_.intl.string(e_.t["+eFXxs"])
        }), (0, r.jsx)(m.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: e_.intl.string(e_.t.kivMAg)
        })]
      }), (0, r.jsx)(m.j7V, {
        value: !c,
        onChange: d,
        hideBorder: true
      })]
    })]
  })
}

function eQ(e) {
  let {
    className: t,
    showHeader: n
  } = e, {
    runningGame: i,
    runningGameApplication: a
  } = (0, N.Z)(), o = (0, j.o4)("user_settings").overlayV3UI, s = (0, _.e7)([$.default], () => $.default.getCurrentUser());
  return ((0, I.ZP)(() => {
    if (ea.isPlatformEmbedded) return (0, R.Ky)(), R.P7
  }), eP(), null == s) ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(el.Z, {
      title: e_.intl.string(e_.t["9cb1U1"]),
      children: [o ? (0, r.jsx)(eq, {}) : null, (0, r.jsxs)("div", {
        className: ep.overlayEnabledSettingsContainer,
        children: [(0, r.jsx)(ek, {
          runningGame: i,
          runningGameApplication: a
        }), (0, r.jsx)(eZ, {}), (0, r.jsx)(eB, {})]
      }), (0, r.jsx)("div", {
        className: ep.settingsDivider
      })]
    }), (0, r.jsxs)(m.hjN, {
      children: [(0, r.jsx)(eX, {
        runningGame: i,
        runningGameApplication: a
      }), (0, r.jsx)("div", {
        className: ep.settingsDivider
      })]
    }), (0, r.jsxs)(m.hjN, {
      title: e_.intl.string(e_.t.r1TZfn),
      children: [(0, r.jsx)(ez, {}), (0, r.jsx)("div", {
        className: ep.settingsDivider
      })]
    }), (0, r.jsx)(m.hjN, {
      children: (0, r.jsx)(eH, {})
    })]
  })
}