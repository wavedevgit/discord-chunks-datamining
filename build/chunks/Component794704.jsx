/** Chunk was on web.js **/
/** chunk id: 794704, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => eX
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
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk987650 = require("./987650.js"),
  Chunk501787 = require("./501787.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk607547 = require("./607547.js"),
  Chunk704437 = require("./704437.js"),
  Chunk494139 = require("./494139.js");

function em(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function eg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      em(e, t, n[t])
    })
  }
  return e
}

function eE(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function eb(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : eE(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function ey(e, t) {
  if (null == e) return {};
  var n, r, i = eO(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function eO(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let ev = eP(null),
  eI = 20,
  eT = 16,
  eS = 1,
  eA = "voice-widget-display-users",
  eC = 25,
  eN = [0, 5, 10, 15, 20, 25];

function eR() {
  let e = eP(ev);
  f().isEqual(module, ev) || (Chunk626135.default.track(Chunk981631.rMx.OVERLAY_SETTINGS_UPDATED, module), ev = module)
}

function eP(e) {
  var t;
  let n = en.default.getNotificationPositionMode(),
    r = n !== el._vf.DISABLED,
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

function ew(e) {
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
      className: e_.formItemTitle,
      id: a,
      children: n
    }), (0, r.jsx)("div", {
      className: o()(e_.rowContainer, i),
      children: t
    })]
  })
}

function eD(e) {
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
    className: o()(e_.groupContainer, f),
    children: [(0, r.jsxs)(m.kL8, {
      "aria-label": d,
      onClick: u,
      children: [null != t && (0, r.jsx)("div", {
        className: e_.groupHeader,
        children: t
      }), (0, r.jsxs)("div", {
        className: e_.groupContent,
        children: [null != n && (0, r.jsx)("div", {
          className: e_.groupIcon,
          children: n
        }), (0, r.jsxs)("div", {
          className: e_.groupMainContent,
          children: [(0, r.jsx)(m.Text, {
            variant: "text-md/medium",
            color: "header-primary",
            className: e_.groupTitle,
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
          className: e_.groupAction,
          children: s
        })]
      })]
    }), (0, r.jsx)("div", {
      className: e_.groupWarning,
      children: c
    })]
  })
}

function ex(e) {
  var {
    children: t,
    className: n,
    onExpand: a
  } = e, s = ey(e, ["children", "className", "onExpand"]);
  let [l, c] = i.useState(false), u = e => {
    c(e), null == a || a(e)
  };
  return (0, r.jsx)(m.zF9, {
    className: e_.collapseable,
    collapsibleContent: (0, r.jsx)("div", {
      className: e_.groupCollapsedContainer,
      children: t
    }),
    children: e => {
      let {
        onClick: t
      } = e;
      return (0, r.jsx)(eD, eb(eg({}, s), {
        onClick: e => {
          u(!l), null == t || t(e)
        },
        className: o()(e_.mainCollapseableContainer, n),
        action: (0, r.jsxs)("div", {
          className: e_.groupCollapsedAction,
          children: [s.action, l ? (0, r.jsx)(m.CJ0, {
            size: "custom",
            width: eI,
            height: eI,
            color: "var(--interactive-active)"
          }) : (0, r.jsx)(m.Fbu, {
            size: "custom",
            width: eI,
            height: eI,
            color: "var(--interactive-active)"
          })]
        })
      }))
    }
  })
}
let eL = new Set([Chunk837268.mM.INITIALIZING, Chunk837268.mM.WAITING_FOR_SCREEN_TYPE_RESOLUTION, Chunk837268.mM.WAITING_FOR_MODULE_TRACKING, Chunk837268.mM.WAITING_FOR_OVERLAY_OPEN, Chunk837268.mM.WAITING_FOR_POPOUT_OPEN, Chunk837268.mM.WAITING_FOR_MODULE_POPOUT_CAPTURE, Chunk837268.mM.WAITING_FOR_REACT_INITIALIZATION]),
  ej = e => {
    e.preventDefault(), e.stopPropagation()
  };

function ek(e) {
  var t, n, a;
  let {
    runningGame: o,
    runningGameApplication: s
  } = e, c = null == o ? true : o.pid, u = (0, _.e7)([M.default], () => null == o || null == c ? null : M.default.getTrackedGameByPid(c), [o, c], l()), {
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
    } = (0, _.cj)([M.default], () => M.default.getGlobalEnabledStatus()),
    k = (e, t, n) => {
      var r, i, a;
      if (ej(n), null == o) return;
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
      if (ej(n), null == o) return;
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
    z = (null == u ? true : u.state) != null && eL.has(u.state) && !Y,
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
          return [ef.intl.format(ef.t.hFVBIi, {
            overlayMethod: ef.intl.string(ef.t.a3eXS0),
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
          return [ef.intl.format(ef.t.hFVBIi, {
            overlayMethod: ef.intl.string(ef.t["506AbW"]),
            overlayMethodHook: t
          }), null];
        case K && $:
          function n() {
            var e, t;
            switch (true) {
              case (null == u ? true : u.fullscreenType) !== v.Jx.BORDERLESS_FULLSCREEN:
                return ef.intl.string(ef.t.mJmbeH);
              case R:
                return ef.intl.string(ef.t.C7bLTU);
              case !(null != (e = null == u ? true : u.oopEnabled) && e):
                return ef.intl.string(ef.t.WiY24u);
              case !j:
                return ef.intl.string(ef.t.cAFVsL);
              case !(null != (t = null == u ? true : u.supportsOutOfProcess) && t):
                return ef.intl.string(ef.t.XcGEcn);
              default:
                return ef.intl.string(ef.t.bJXH2t)
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
          return [ef.intl.format(ef.t.hFVBIi, {
            overlayMethod: ef.intl.string(ef.t.bvlpDQ),
            overlayMethodHook: i
          }), n()];
        case ee:
          return [ef.intl.string(ef.t.OFC2a2), null];
        case B:
          return [ef.intl.string(ef.t.m7X4a2), null];
        case F:
          return [ef.intl.string(ef.t["9DUS5u"]), null];
        case et:
          return [ef.intl.string(ef.t.nQ9EdH), null];
        case V:
        case H:
          return [ef.intl.string(ef.t.VWUn0d), null];
        case z:
          if (q) return [ef.intl.string(ef.t["s8+CFh"]), null];
          if ($) return [ef.intl.string(ef.t.JEEdqq), null];
          if (Q) return [ef.intl.string(ef.t.pzBMwc), null];
          return [ef.intl.string(ef.t["2Xhy9v"]), null];
        case null == u:
          return [ef.intl.string(ef.t.vwHPRk), null];
        default:
          return [ef.intl.string(ef.t.ONovPz), null]
      }
    })();
  (0, I.ZP)(() => {
    g.Z.getDetectableGames()
  });
  let [ei, ea] = i.useMemo(() => z ? ["text-muted", m.TVs.colors.TEXT_MUTED.css] : K && Q ? ["text-feedback-warning", m.TVs.colors.TEXT_FEEDBACK_WARNING.css] : K && q ? ["text-feedback-positive", m.TVs.colors.TEXT_FEEDBACK_POSITIVE.css] : K && $ ? ["text-primary", m.TVs.colors.TEXT_PRIMARY.css] : ["interactive-normal", m.TVs.colors.INTERACTIVE_NORMAL.css], [z, K, Q, q, $]);
  return null == o ? null : (0, r.jsxs)(ex, {
    onExpand: A,
    className: S ? e_.expandedContainer : true,
    title: (0, r.jsxs)(r.Fragment, {
      children: [null != (a = null != (n = null != (t = null == s ? true : s.name) ? t : null == p ? true : p.name) ? n : null == o ? true : o.gameName) ? a : "", null != p && p.verified ? (0, r.jsx)(m.ua7, {
        text: ef.intl.string(ef.t["4PJP5u"]),
        children: e => (0, r.jsx)(w.Z, eb(eg({
          size: eT,
          color: m.TVs.colors.BG_BRAND.css
        }, e), {
          children: (0, r.jsx)(m.kmB, {
            size: "custom",
            width: eT,
            height: eT,
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
        className: e_.playingDot
      }), (0, r.jsx)(m.Text, {
        variant: "text-xs/semibold",
        color: ei,
        children: ef.intl.string(ef.t.CDOx39)
      })]
    }),
    icon: (0, r.jsx)(P.Z, {
      game: s,
      pid: null == o ? true : o.pid,
      size: P.A.MEDIUM
    }),
    "aria-label": ef.intl.string(ef.t["87O5GB"]),
    action: (0, r.jsx)(m.P3F, {
      onClick: e => ej(e),
      children: (0, r.jsx)(h.T2, {
        checked: E && j || O && x,
        disabled: B,
        onChange: (e, t) => {
          G(e, U(e, E && j || O && x), t)
        }
      })
    }),
    warning: (0, r.jsx)(W.Z, {
      className: e_.systemServiceWarning,
      game: o
    }),
    children: [(0, r.jsx)(eD, {
      title: ef.intl.string(ef.t["7BlVIi"]),
      description: ef.intl.string(ef.t.ndgADA),
      hint: j ? true : ef.intl.string(ef.t.cAFVsL),
      "aria-label": ef.intl.string(ef.t["7BlVIi"]),
      action: (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(h.T2, {
          checked: E && j,
          disabled: R,
          onChange: (e, t) => {
            e && !j ? k(e, D.AE.OOP, t) : k(e, D.AE.OOP_GAME, t)
          }
        }), (0, r.jsx)("div", {
          className: e_.emptySpacer
        })]
      })
    }), (0, r.jsx)(eD, {
      title: ef.intl.string(ef.t.BfFpW1),
      description: ef.intl.string(ef.t.OzInYm),
      hint: x ? true : ef.intl.string(ef.t["3sYHXl"]),
      "aria-label": ef.intl.string(ef.t.BfFpW1),
      action: (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(h.T2, {
          checked: O && x,
          disabled: N,
          onChange: (e, t) => {
            e && !x ? k(e, D.AE.LEGACY, t) : k(e, D.AE.LEGACY_GAME, t)
          }
        }), (0, r.jsx)("div", {
          className: e_.emptySpacer
        })]
      })
    })]
  })
}

function eM(e) {
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

function eU(e) {
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
    if (ej(n), m(e), s(e, u, d), r) {
      var i, a;
      (0, Z.l)(l, null != (a = null != (i = u.id) ? i : null == t ? true : t.id) ? a : null)
    }
  };
  return (0, r.jsx)(eD, {
    title: t.name,
    icon: (0, r.jsx)(eM, {
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
        className: e_.emptySpacer
      })]
    })
  })
}

function eG() {
  let [e, t] = Chunk647438.useState(false), {
    legacyEnabled: n,
    oopEnabled: a
  } = (0, Chunk442837.cj)([Chunk371651.default], () => Chunk371651.default.getGlobalEnabledStatus()), o = (0, Chunk442837.Wu)([Chunk594190.ZP], () => Chunk594190.ZP.getGamesSeen(true)).filter(e => !(0, Y.le)(e)), s = (0, Chunk835473.Z)(o.map(e => e.id)), l = !(0, Chunk145597.supportsLegacy)(), c = (e, t) => {
    var r, i;
    ej(t), y.Z.setEnabled(e, a);
    let o = null != (i = null == (r = C.ZP.getCurrentGameForAnalytics()) ? true : r.id) ? i : null;
    (0, D.ou)(e, D.AE.LEGACY, o), !e && n && (0, Z.l)(D.AE.LEGACY, o)
  }, u = (e, t, n) => {
    let {
      enabledOOP: r
    } = n;
    g.Z.toggleOverlay(t, e, r)
  }, d = Chunk647438.useMemo(() => (0, Chunk145597.supportsLegacy)() ? l ? Chunk388032.intl.string(Chunk388032.t.r9jEV1) : Chunk388032.intl.string(Chunk388032.t.OzInYm) : Chunk388032.intl.string(Chunk388032.t["8Ox6/P"]), [l]);
  return 0 === o.length ? (0, Chunk951288.jsx)(eD, {
    title: Chunk388032.intl.string(Chunk388032.t.BfFpW1),
    description: Chunk392711,
    "aria-label": Chunk388032.intl.string(Chunk388032.t.BfFpW1),
    className: Chunk607547.standaloneContainer,
    action: (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [(0, Chunk951288.jsx)(Chunk755721.T2, {
        checked: require,
        disabled: l,
        onChange: (e, t) => c(e, t)
      }), Chunk987650.iP && (0, Chunk951288.jsx)("div", {
        className: Chunk607547.emptySpacer
      })]
    })
  }) : (0, Chunk951288.jsxs)(ex, {
    onExpand: exports,
    className: module ? Chunk607547.expandedContainer : true,
    title: Chunk388032.intl.string(Chunk388032.t.BfFpW1),
    description: Chunk392711,
    "aria-label": Chunk388032.intl.string(Chunk388032.t.BfFpW1),
    action: (0, Chunk951288.jsx)(Chunk481060.P3F, {
      onClick: e => ej(e),
      children: (0, Chunk951288.jsx)(Chunk755721.T2, {
        checked: require,
        disabled: l,
        onChange: (e, t) => c(e, t)
      })
    }),
    children: [(0, Chunk951288.jsx)("div", {
      className: Chunk607547.subtitleContainer,
      children: (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-xs/semibold",
        color: "text-muted",
        children: Chunk388032.intl.string(Chunk388032.t.FzoWRk)
      })
    }), (0, Chunk951288.jsx)(Chunk481060.zJl, {
      className: Chunk607547.scroller,
      children: o.map((e, t) => (0, r.jsx)(eU, {
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
        ariaLabel: ef.intl.format(ef.t.hvPYsL, {
          gameName: e.name
        }).toString()
      }, e.id))
    })]
  })
}

function eB() {
  let [e, t] = Chunk647438.useState(false), {
    oopEnabled: n,
    legacyEnabled: a
  } = (0, Chunk442837.cj)([Chunk371651.default], () => Chunk371651.default.getGlobalEnabledStatus()), o = !(0, Chunk145597.supportsOutOfProcess)(), s = (0, Chunk442837.Wu)([Chunk594190.ZP], () => Chunk594190.ZP.getGamesSeen(true)).filter(e => !(0, Y.le)(e)), l = (0, Chunk835473.Z)(Chunk348327.map(e => e.id)), c = (e, t) => {
    var r, i;
    ej(t);
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
  return 0 === Chunk348327.length ? (0, Chunk951288.jsx)(eD, {
    title: Chunk388032.intl.string(Chunk388032.t["7BlVIi"]),
    description: Chunk392711,
    "aria-label": Chunk388032.intl.string(Chunk388032.t["7BlVIi"]),
    className: Chunk607547.standaloneContainer,
    action: (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [(0, Chunk951288.jsx)(Chunk755721.T2, {
        checked: require,
        disabled: o,
        onChange: (e, t) => c(e, t)
      }), Chunk987650.iP && (0, Chunk951288.jsx)("div", {
        className: Chunk607547.emptySpacer
      })]
    })
  }) : (0, Chunk951288.jsxs)(ex, {
    onExpand: exports,
    className: module ? Chunk607547.expandedContainer : true,
    title: Chunk388032.intl.string(Chunk388032.t["7BlVIi"]),
    description: Chunk392711,
    "aria-label": Chunk388032.intl.string(Chunk388032.t["7BlVIi"]),
    action: (0, Chunk951288.jsx)(Chunk481060.P3F, {
      onClick: e => ej(e),
      children: (0, Chunk951288.jsx)(Chunk755721.T2, {
        checked: require,
        disabled: o,
        onChange: (e, t) => c(e, t)
      })
    }),
    children: [(0, Chunk951288.jsx)("div", {
      className: Chunk607547.subtitleContainer,
      children: (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-xs/semibold",
        color: "text-muted",
        children: Chunk388032.intl.string(Chunk388032.t.FzoWRk)
      })
    }), (0, Chunk951288.jsx)(Chunk481060.zJl, {
      className: Chunk607547.scroller,
      children: Chunk348327.map((e, t) => (0, r.jsx)(eU, {
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
        ariaLabel: ef.intl.format(ef.t.nByTd3, {
          gameName: e.name
        }).toString()
      }, e.id))
    })]
  })
}

function eZ() {
  var e;
  let t = (0, Chunk442837.e7)([Chunk556296.ZP], () => Chunk556296.ZP.getOverlayKeybind()),
    n = !(0, Chunk145597.supportsLegacy)(),
    i = !(0, Chunk145597.supportsOutOfProcess)(),
    [a, o] = (0, Chunk442837.Wu)([Chunk594190.ZP], () => [Chunk594190.ZP.canShowAdminWarning, Chunk594190.ZP.getVisibleGame()], []),
    s = null != o && o.elevated && Chunk120356,
    l = !(0, Chunk556296.I1)(null != (e = null == exports ? true : exports.shortcut) ? module : []);

  function c(e) {
    u()(null != t, "Keybind should never be undefined"), E.Z.setKeybind(eb(eg({}, t), {
      shortcut: e
    }))
  }
  return (0, Chunk951288.jsx)(ew, {
    children: (0, Chunk951288.jsx)("div", {
      className: Chunk607547.keybindMainContainer,
      children: (0, Chunk951288.jsxs)("div", {
        className: Chunk607547.keybindContainer,
        children: [(0, Chunk951288.jsxs)("div", {
          className: Chunk607547.keybindHeaderContainer,
          children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
            variant: "text-md/semibold",
            color: "header-primary",
            children: Chunk388032.intl.string(Chunk388032.t.VsAZcH)
          }), Chunk348327 && (0, Chunk951288.jsx)(Chunk481060.Text, {
            variant: "text-xs/normal",
            color: "text-feedback-warning",
            className: Chunk607547.keybindAdminWarning,
            children: Chunk388032.intl.string(Chunk388032.t.NsowVV)
          }), l && (0, Chunk951288.jsx)(Chunk481060.Text, {
            variant: "text-xs/normal",
            color: "text-feedback-warning",
            className: Chunk607547.keybindAdminWarning,
            children: Chunk388032.intl.string(Chunk388032.t.UNoTw8)
          })]
        }), (0, Chunk951288.jsx)("div", {
          className: Chunk607547.keybindRecorderContainer,
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
let eF = (e, t, n) => [{
  title: ef.t.eVE4LS,
  description: ef.t["72WNqq"],
  disabledSetting: x.OverlayNotificationDisabledSetting.TEXT_CHAT
}, {
  title: ef.t.hqsZJS,
  description: ef.t.kHjdqa,
  disabledSetting: x.OverlayNotificationDisabledSetting.GO_LIVE_NUDGE
}, e && {
  title: ef.t.sop3rq,
  description: ef.t.pjgffX,
  disabledSetting: x.OverlayNotificationDisabledSetting.GAME_ACTIVITY
}, t && {
  title: ef.t["2QVhbW"],
  description: ef.t.wQ4ilJ,
  disabledSetting: x.OverlayNotificationDisabledSetting.NOW_PLAYING
}, n && {
  title: ef.t["5/21FR"],
  description: ef.t.EIzwfH,
  disabledSetting: x.OverlayNotificationDisabledSetting.FRIEND_STREAM_WATCH_NUDGE
}].filter(e => false !== e).filter(Boolean);

function eV() {
  let {
    allowActivityWidget: e,
    allowNowPlaying: t
  } = (0, Chunk32300.o4)("user_settings"), {
    enabled: n
  } = (0, Chunk32300.aq)("OverlayV3StreamWatchNudge"), i = eF(module, exports, require), a = e => t => {
    y.Z.setNotificationDisabledSetting(e, !t)
  }, o = (0, Chunk442837.e7)([Chunk624864.Z], () => Chunk624864.Z.getDisabledNotifications());
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk607547.notificationSettingsContainer,
    children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
      variant: "heading-md/semibold",
      color: "header-primary",
      children: Chunk388032.intl.string(Chunk388032.t.xOE5bG)
    }), Chunk647438.map(e => (0, r.jsxs)(ew, {
      className: e_.notificationItem,
      children: [(0, r.jsxs)("div", {
        className: e_.notificationDescriptionContainer,
        children: [(0, r.jsx)(m.Text, {
          variant: "text-sm/semibold",
          color: "header-primary",
          children: ef.intl.string(e.title)
        }), (0, r.jsx)(m.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: ef.intl.string(e.description)
        })]
      }), (0, r.jsx)(m.j7V, {
        value: !o.has(e.disabledSetting),
        onChange: a(e.disabledSetting),
        hideBorder: true
      })]
    }, e.disabledSetting))]
  })
}

function eH(e) {
  let t = eY(e.username);
  return t.user = e, t
}

function eY(e) {
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

function eW() {
  return (0, Chunk131704.kt)({
    id: "123",
    name: "Test Channel",
    type: Chunk981631.d4z.GUILD_VOICE,
    guild_id: "456"
  })
}

function eK() {
  var e, t;
  let {
    avatarSizeMode: n,
    displayNameMode: a,
    displayUserMode: s
  } = (0, Chunk442837.cj)([Chunk237997.default], () => ({
    avatarSizeMode: Chunk237997.default.getAvatarSizeMode(),
    displayNameMode: Chunk237997.default.getDisplayNameMode(),
    displayUserMode: Chunk237997.default.getDisplayUserMode()
  })), l = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser()), [c] = Chunk647438.useState(() => [eY(Chunk388032.intl.string(Chunk388032.t.C0ZDvr), true, false), eY(Chunk388032.intl.string(Chunk388032.t.iOtj8P), false, false, true), eY(Chunk388032.intl.string(Chunk388032.t["0oqNgI"]), false, true)]), u = (0, Chunk442837.e7)([Chunk610394.ZP, Chunk355863.Z], () => {
    let e = Chunk610394.ZP.getWidgetByType(Chunk981631.Odu.VOICE_V3);
    if (null == module) return null;
    let t = Chunk355863.Z.getWidget(module.id);
    return null != exports && (0, Chunk340101.Aw)(exports) ? exports : null
  }), d = null != (t = null == u || null == (e = u.meta) ? true : module.voiceStatesMaxShown) ? exports : Chunk501787.At, f = [null != l ? eH(l) : null, ...Chunk512722].filter(Chunk823379.lm), p = [new Map(f.map(e => [e.user.id, e])), f.map(e => e.user.id)];

  function h(e) {
    null != u && (e < eS ? (0, b.zG)(u.id, {
      voiceStatesMaxShown: ed.Og
    }) : (0, b.zG)(u.id, {
      voiceStatesMaxShown: Math.floor(e)
    }))
  }
  let g = Chunk981631.BRd.MIDNIGHT;
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk607547.voiceSettingsContainer,
    children: [(0, Chunk951288.jsx)(ew, {
      title: Chunk388032.intl.string(Chunk388032.t.dnvZSk),
      children: (0, Chunk951288.jsx)(Chunk481060.q4e, {
        options: [{
          label: Chunk388032.intl.string(Chunk388032.t.YcOxtr),
          value: Chunk981631.ipw.LARGE
        }, {
          label: Chunk388032.intl.string(Chunk388032.t.BKIKq6),
          value: Chunk981631.ipw.SMALL
        }],
        className: Chunk607547.select,
        onChange: e => y.Z.setAvatarSizeMode(e),
        value: require
      })
    }), (0, Chunk951288.jsx)(ew, {
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
        className: Chunk607547.select,
        onChange: e => y.Z.setDisplayNameMode(e),
        value: Chunk120356
      })
    }), (0, Chunk951288.jsx)(Chunk481060.f6W, {
      theme: Chunk224706,
      children: e => {
        var t, i;
        return (0, r.jsxs)("div", {
          className: o()(e_.widgetContainer, e),
          children: [(0, r.jsx)("div", {
            className: e_.voiceWidgetContainer,
            children: (0, r.jsx)(V.kI, {
              id: "voice-widget",
              title: ef.intl.string(ef.t.KNJ6Vl),
              channel: eW(),
              overlayVoiceStates: p,
              displayNameMode: a,
              displayUserMode: s,
              avatarSizeMode: n,
              widget: el.Odu.VOICE,
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
            className: e_.widgetHeaderContainer,
            children: [(0, r.jsx)(H.PI, {
              children: ef.intl.string(ef.t.KNJ6Vl)
            }), (0, r.jsx)(H.ls, {}), (0, r.jsx)(H.RT, {
              id: null != (t = null == u ? true : u.id) ? t : "voice-widget",
              pinned: null != (i = null == u ? true : u.pinned) && i
            })]
          })]
        })
      }
    }), (0, Chunk951288.jsx)(ew, {
      title: Chunk388032.intl.string(Chunk388032.t.swsWWF),
      children: (0, Chunk951288.jsx)(Chunk481060.q4e, {
        options: [{
          label: Chunk388032.intl.string(Chunk388032.t.nBmDra),
          value: Chunk981631.OYC.ALWAYS
        }, {
          label: Chunk388032.intl.string(Chunk388032.t["2OvIZW"]),
          value: Chunk981631.OYC.ONLY_WHILE_SPEAKING
        }],
        className: Chunk607547.select,
        onChange: e => y.Z.setDisplayUserMode(e),
        value: Chunk348327
      })
    }), (0, Chunk951288.jsx)(ew, {
      title: Chunk388032.intl.string(Chunk388032.t["X/Uyzc"]),
      titleId: eA,
      children: (0, Chunk951288.jsx)("div", {
        className: Chunk607547.sliderContainer,
        children: (0, Chunk951288.jsx)(Chunk481060.iRW, {
          initialValue: Chunk392711,
          onValueRender: e => e < eS ? ef.intl.string(ef.t.nrUzFB) : "".concat(Math.floor(e)),
          minValue: eS - 1,
          maxValue: eC,
          onValueChange: Chunk755721,
          markers: eN,
          barStyles: {
            background: Chunk481060.TVs.colors.BACKGROUND_MOD_STRONG.css
          },
          fillStyles: {
            background: Chunk481060.TVs.colors.BG_BRAND.css
          },
          "aria-labelledby": eA,
          onMarkerRender: e => e < eS ? ef.intl.string(ef.t.nrUzFB) : "".concat(Math.floor(e))
        })
      })
    })]
  })
}

function ez() {
  let [e, t] = (0, Chunk243778.US)([Chunk704215.z.OVERLAY_OOP_SETTINGS_NUX], true, true), n = () => {
    exports(Chunk921944.L.DISMISS)
  };
  return ((0, Chunk493773.ZP)(() => () => {
    exports(Chunk921944.L.AUTO_DISMISS)
  }), module !== Chunk704215.z.OVERLAY_OOP_SETTINGS_NUX) ? null : (0, Chunk951288.jsxs)("div", {
    className: Chunk607547.overlaySettingsNux,
    children: [(0, Chunk951288.jsx)("div", {
      children: (0, Chunk951288.jsx)("img", {
        src: Chunk704437.Z,
        alt: Chunk388032.intl.string(Chunk388032.t.mdXZh4),
        className: Chunk607547.nuxFirstImage
      })
    }), (0, Chunk951288.jsx)("div", {
      children: (0, Chunk951288.jsxs)("div", {
        className: Chunk607547.mainTitleContainer,
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
        src: Chunk494139.Z,
        alt: Chunk388032.intl.string(Chunk388032.t.mdXZh4),
        className: Chunk607547.nuxUserSettingsImage
      })
    }), (0, Chunk951288.jsx)("div", {
      "data-button-hoisted-classname-wrapper": true,
      className: Chunk607547.closeCircleButton,
      children: (0, Chunk951288.jsx)(Chunk481060.zxk, {
        variant: "primary",
        text: Chunk388032.intl.string(Chunk388032.t.Q26diI),
        onClick: () => require()
      })
    }), (0, Chunk951288.jsx)("div", {
      className: Chunk607547.nuxDivider
    })]
  })
}

function eq(e) {
  let {
    runningGame: t,
    runningGameApplication: n
  } = e, a = null == n ? true : n.id, o = (0, _.e7)([G.Z], () => G.Z.isLimitedInteractionOverrideEnabled(a), [a]), s = i.useMemo(() => null != t && (0, U.H8)(t.pid), [t]), l = (0, k.Z)({
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
    className: e_.overlayEnabledSettingsContainer,
    children: [(0, r.jsx)(eZ, {}), l && (0, r.jsx)(ew, {
      children: (0, r.jsx)(m.j7V, {
        value: u,
        onChange: e => y.Z.setShowKeybindIndicators(e),
        hideBorder: true,
        children: ef.intl.string(ef.t.XZTl9v)
      })
    }), null != a && (0, r.jsxs)(ew, {
      children: [(0, r.jsxs)("div", {
        className: e_.limitedInteractionOverrideContainer,
        children: [(0, r.jsx)(m.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          children: ef.intl.string(ef.t.wgVQND)
        }), (0, r.jsx)(m.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: ef.intl.string(ef.t["5SsyFx"])
        })]
      }), (0, r.jsx)(m.j7V, {
        value: o || s,
        disabled: s,
        onChange: e => f(e),
        hideBorder: true
      })]
    }), (0, r.jsxs)(ew, {
      children: [(0, r.jsxs)("div", {
        className: e_.limitedInteractionOverrideContainer,
        children: [(0, r.jsx)(m.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          children: ef.intl.string(ef.t["+eFXxs"])
        }), (0, r.jsx)(m.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: ef.intl.string(ef.t.kivMAg)
        })]
      }), (0, r.jsx)(m.j7V, {
        value: !c,
        onChange: d,
        hideBorder: true
      })]
    })]
  })
}

function eX(e) {
  let {
    className: t,
    showHeader: n
  } = e, {
    runningGame: i,
    runningGameApplication: a
  } = (0, N.Z)(), o = (0, j.o4)("user_settings").overlayV3UI, s = (0, _.e7)([$.default], () => $.default.getCurrentUser());
  return ((0, I.ZP)(() => {
    if (ea.isPlatformEmbedded) return (0, R.Ky)(), R.P7
  }), eR(), null == s) ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(m.hjN, {
      tag: m.RB0.H1,
      title: ef.intl.string(ef.t["9cb1U1"]),
      children: [o ? (0, r.jsx)(ez, {}) : null, (0, r.jsxs)("div", {
        className: e_.overlayEnabledSettingsContainer,
        children: [(0, r.jsx)(ek, {
          runningGame: i,
          runningGameApplication: a
        }), (0, r.jsx)(eB, {}), (0, r.jsx)(eG, {})]
      }), (0, r.jsx)("div", {
        className: e_.settingsDivider
      })]
    }), (0, r.jsxs)(m.hjN, {
      children: [(0, r.jsx)(eq, {
        runningGame: i,
        runningGameApplication: a
      }), (0, r.jsx)("div", {
        className: e_.settingsDivider
      })]
    }), (0, r.jsxs)(m.hjN, {
      title: ef.intl.string(ef.t.r1TZfn),
      children: [(0, r.jsx)(eK, {}), (0, r.jsx)("div", {
        className: e_.settingsDivider
      })]
    }), (0, r.jsx)(m.hjN, {
      children: (0, r.jsx)(eV, {})
    })]
  })
}