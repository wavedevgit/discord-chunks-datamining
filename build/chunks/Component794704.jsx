/** Chunk was on 66181 **/
/** chunk id: 794704, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => ek
}), require("./953529.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk348327 = require("./348327.js"),
  o = require.n(Chunk348327),
  Chunk512722 = require("./512722.js"),
  d = require.n(Chunk512722),
  Chunk392711 = require("./392711.js"),
  m = require.n(Chunk392711),
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
  Chunk812206 = require("./812206.js"),
  Chunk835473 = require("./835473.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk594190 = require("./594190.js"),
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
  Chunk131704 = require("./131704.js"),
  Chunk598077 = require("./598077.js"),
  Chunk189786 = require("./189786.js"),
  Chunk199902 = require("./199902.js"),
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
  Chunk131970 = require("./131970.js"),
  Chunk730462 = require("./730462.js");

function eg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function eh(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let ef = e_(null),
  eb = "voice-widget-display-users",
  ex = [0, 5, 10, 15, 20, 25];

function e_(e) {
  var t;
  let n = ee.default.getNotificationPositionMode(),
    i = n !== ea._vf.DISABLED,
    r = Q.ZP.getOverlayKeybind(),
    s = Q.ZP.getOverlayChatKeybind();
  return {
    enabled: $.default.enabled,
    notifications_enabled: i,
    notifications_position: i ? n : null,
    text_notifications_mode: L.Z.isNotificationDisabled(P.OverlayNotificationDisabledSetting.TEXT_CHAT) ? "DISABLED" : "ENABLED",
    hotkey: null != r ? (0, er.BB)(r.shortcut) : null,
    text_activation_hotkey: null != s ? (0, er.BB)(s.shortcut) : null,
    text_opacity_slider: ee.default.getTextWidgetOpacity(),
    old_enabled: null != (t = null == e ? true : e.enabled) ? t : $.default.enabled
  }
}

function ej(e) {
  let {
    children: t,
    title: n,
    className: r,
    titleId: s
  } = e;
  return (0, i.jsxs)(h.xJW, {
    children: [null != n && (0, i.jsx)(h.Text, {
      variant: "text-sm/medium",
      color: "text-muted",
      className: eu.formItemTitle,
      id: s,
      children: n
    }), (0, i.jsx)("div", {
      className: a()(eu.rowContainer, r),
      children: t
    })]
  })
}

function eE(e) {
  let {
    header: t,
    icon: n,
    title: r,
    description: s,
    action: l,
    hint: o,
    onClick: c,
    "aria-label": d,
    className: u
  } = e;
  return (0, i.jsxs)(h.kL8, {
    "aria-label": d,
    onClick: c,
    className: a()(eu.groupContainer, u),
    children: [null != t && (0, i.jsx)("div", {
      className: eu.groupHeader,
      children: t
    }), (0, i.jsxs)("div", {
      className: eu.groupContent,
      children: [null != n && (0, i.jsx)("div", {
        className: eu.groupIcon,
        children: n
      }), (0, i.jsxs)("div", {
        className: eu.groupMainContent,
        children: [(0, i.jsx)(h.Text, {
          variant: "text-md/medium",
          color: "header-primary",
          className: eu.groupTitle,
          children: r
        }), null != s && (0, i.jsx)(h.Text, {
          variant: "text-sm/normal",
          color: "text-secondary",
          children: s
        }), null != o && (0, i.jsx)(h.Text, {
          variant: "text-xxs/medium",
          color: "text-muted",
          children: o
        })]
      }), (0, i.jsx)("div", {
        className: eu.groupAction,
        children: l
      })]
    })]
  })
}

function eC(e) {
  var {
    children: t,
    className: n,
    onExpand: s
  } = e, l = function(e, t) {
    if (null == e) return {};
    var n, i, r = function(e, t) {
      if (null == e) return {};
      var n, i, r = {},
        s = Object.keys(e);
      for (i = 0; i < s.length; i++) n = s[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
      return r
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var s = Object.getOwnPropertySymbols(e);
      for (i = 0; i < s.length; i++) n = s[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
  }(e, ["children", "className", "onExpand"]);
  let [o, c] = r.useState(false);
  return (0, i.jsx)(h.zF9, {
    className: eu.collapseable,
    collapsibleContent: (0, i.jsx)("div", {
      className: eu.groupCollapsedContainer,
      children: t
    }),
    children: e => {
      let {
        onClick: t
      } = e;
      return (0, i.jsx)(eE, eh(eg({}, l), {
        onClick: e => {
          var n;
          c(n = !o), null == s || s(n), null == t || t(e)
        },
        className: a()(eu.mainCollapseableContainer, n),
        action: (0, i.jsxs)("div", {
          className: eu.groupCollapsedAction,
          children: [l.action, o ? (0, i.jsx)(h.CJ0, {
            size: "custom",
            width: 20,
            height: 20,
            color: "var(--interactive-active)"
          }) : (0, i.jsx)(h.Fbu, {
            size: "custom",
            width: 20,
            height: 20,
            color: "var(--interactive-active)"
          })]
        })
      }))
    }
  })
}
let eO = new Set([Chunk837268.mM.INITIALIZING, Chunk837268.mM.WAITING_FOR_SCREEN_TYPE_RESOLUTION, Chunk837268.mM.WAITING_FOR_MODULE_TRACKING, Chunk837268.mM.WAITING_FOR_OVERLAY_OPEN]),
  ev = e => {
    e.preventDefault(), e.stopPropagation()
  };

function eS(e) {
  var t, n, s;
  let {
    runningGame: a,
    runningGameApplication: l
  } = e, c = null == a ? true : a.pid, d = (0, p.e7)([w.default], () => null == a || null == c ? null : w.default.getTrackedGameByPid(c), [a, c], o()), {
    enabledLegacy: u,
    enabledOOP: m
  } = (0, p.cj)([K.Z, X.Z], () => {
    if (null == a && null == d) return {
      enabledLegacy: false,
      enabledOOP: false
    };
    if (null == a) {
      var e, t;
      return {
        enabledLegacy: null != (e = null == d ? true : d.legacyEnabled) && e,
        enabledOOP: null != (t = null == d ? true : d.oopEnabled) && t
      }
    }
    return (0, T.b6)(a, false, [K.Z, X.Z])
  }, [a, d]), g = (0, p.e7)([T.ZP, K.Z, X.Z], () => null == a ? null : (0, T.FZ)(a, T.ZP, K.Z, X.Z), [a], o()), [b, x] = r.useState(m), [j, O] = r.useState(u), [v, S] = r.useState(false);
  r.useEffect(() => {
    x(m), O(u)
  }, [m, u]);
  let N = !(0, es.supportsLegacy)(),
    P = !(0, es.supportsOutOfProcess)(),
    {
      legacyEnabled: D,
      oopEnabled: Z
    } = (0, p.cj)([w.default], () => w.default.getGlobalEnabledStatus()),
    k = (e, t, n) => {
      var i, r, s;
      if (ev(n), null == a) return;
      let l = false,
        o = false;
      switch (t) {
        case A.AE.LEGACY_GAME:
          O(e), f.Z.toggleOverlay(a, e, b), l = !e && j;
          break;
        case A.AE.OOP_GAME:
          x(e), f.Z.toggleOverlay(a, j, e), o = !e && b;
          break;
        case A.AE.LEGACY:
          _.Z.setEnabled(e, Z), (0, A.ou)(e, A.AE.LEGACY, null != (i = a.id) ? i : null);
          break;
        case A.AE.OOP:
          _.Z.setEnabled(D, e), (0, A.ou)(e, A.AE.OOP, null != (r = a.id) ? r : null)
      }(l || o) && (0, M.l)(l ? A.AE.LEGACY_GAME : A.AE.OOP_GAME, null != (s = a.id) ? s : null)
    },
    L = N && P,
    B = !D && !Z,
    U = !b && !D && j && !N,
    V = !j && !Z && b && !P,
    G = (null == d ? true : d.overlayMethod) === R.gl.Disabled,
    F = (null == d ? true : d.state) === R.mM.OVERLAY_RENDERING && !G,
    H = (null == d ? true : d.state) != null && eO.has(d.state) && !G,
    z = (null == d ? true : d.overlayMethod) === R.gl.OutOfProcess,
    W = (null == d ? true : d.overlayMethod) === R.gl.OutOfProcessLimitedInteraction,
    Y = (null == d ? true : d.overlayMethod) === R.gl.Hook,
    q = (null == d ? true : d.state) === R.mM.OVERLAY_CRASHED || (null == d ? true : d.state) === R.mM.OVERLAY_CRASHED_DISABLED,
    J = !b && !j,
    [Q, $] = (() => {
      switch (true) {
        case F && z:
          return [ed.intl.format(ed.t.hFVBIi, {
            overlayMethod: ed.intl.string(ed.t.a3eXS0),
            overlayMethodHook: function(e, t) {
              return (0, i.jsx)(h.Text, {
                tag: "span",
                variant: "text-sm/medium",
                color: "text-feedback-positive",
                children: e
              }, t)
            }
          }), null];
        case F && W:
          return [ed.intl.format(ed.t.hFVBIi, {
            overlayMethod: ed.intl.string(ed.t["506AbW"]),
            overlayMethodHook: function(e, t) {
              return (0, i.jsx)(h.Text, {
                tag: "span",
                variant: "text-sm/medium",
                color: "text-feedback-warning",
                children: e
              }, t)
            }
          }), null];
        case F && Y:
          return [ed.intl.format(ed.t.hFVBIi, {
            overlayMethod: ed.intl.string(ed.t.bvlpDQ),
            overlayMethodHook: function(e, t) {
              return (0, i.jsx)(h.Text, {
                tag: "span",
                variant: "text-sm/medium",
                color: "text-primary",
                children: e
              }, t)
            }
          }), function() {
            var e, t;
            switch (true) {
              case (null == d ? true : d.fullscreenType) !== E.Jx.BORDERLESS_FULLSCREEN:
                return ed.intl.string(ed.t.mJmbeH);
              case P:
                return ed.intl.string(ed.t.C7bLTU);
              case !(null != (e = null == d ? true : d.oopEnabled) && e):
                return ed.intl.string(ed.t.WiY24u);
              case !Z:
                return ed.intl.string(ed.t.cAFVsL);
              case !(null != (t = null == d ? true : d.supportsOutOfProcess) && t):
                return ed.intl.string(ed.t.XcGEcn);
              default:
                return ed.intl.string(ed.t.bJXH2t)
            }
          }()];
        case q:
          return [ed.intl.string(ed.t.OFC2a2), null];
        case L:
          return [ed.intl.string(ed.t.m7X4a2), null];
        case B:
          return [ed.intl.string(ed.t["9DUS5u"]), null];
        case J:
          return [ed.intl.string(ed.t.nQ9EdH), null];
        case U:
        case V:
          return [ed.intl.string(ed.t.VWUn0d), null];
        case H:
          if (z) return [ed.intl.string(ed.t["s8+CFh"]), null];
          if (Y) return [ed.intl.string(ed.t.JEEdqq), null];
          if (W) return [ed.intl.string(ed.t.pzBMwc), null];
          return [ed.intl.string(ed.t["2Xhy9v"]), null];
        case null == d:
          return [ed.intl.string(ed.t.vwHPRk), null];
        default:
          return [ed.intl.string(ed.t.ONovPz), null]
      }
    })();
  (0, C.ZP)(() => {
    f.Z.getDetectableGames()
  });
  let [ee, et] = r.useMemo(() => H ? ["text-muted", h.TVs.colors.TEXT_MUTED.css] : F && W ? ["text-feedback-warning", h.TVs.colors.TEXT_FEEDBACK_WARNING.css] : F && z ? ["text-feedback-positive", h.TVs.colors.TEXT_FEEDBACK_POSITIVE.css] : F && Y ? ["text-primary", h.TVs.colors.TEXT_PRIMARY.css] : ["interactive-normal", h.TVs.colors.INTERACTIVE_NORMAL.css], [H, F, W, z, Y]);
  return null == a ? null : (0, i.jsxs)(eC, {
    onExpand: S,
    className: v ? eu.expandedContainer : true,
    title: (0, i.jsxs)(i.Fragment, {
      children: [null != (s = null != (n = null != (t = null == l ? true : l.name) ? t : null == g ? true : g.name) ? n : null == a ? true : a.gameName) ? s : "", null != g && g.verified ? (0, i.jsx)(h.ua7, {
        text: ed.intl.string(ed.t["4PJP5u"]),
        children: e => (0, i.jsx)(y.Z, eh(eg({
          size: 16,
          color: h.TVs.colors.BG_BRAND.css
        }, e), {
          children: (0, i.jsx)(h.kmB, {
            size: "custom",
            width: 16,
            height: 16,
            color: h.TVs.colors.WHITE.css
          })
        }))
      }) : null]
    }),
    description: Q,
    hint: null != $ ? $ : true,
    header: (0, i.jsxs)(i.Fragment, {
      children: [F || H ? (0, i.jsx)(h.pzj, {
        size: "xxs",
        color: et
      }) : (0, i.jsx)("div", {
        className: eu.playingDot
      }), (0, i.jsx)(h.Text, {
        variant: "text-xs/semibold",
        color: ee,
        children: ed.intl.string(ed.t.CDOx39)
      })]
    }),
    icon: (0, i.jsx)(I.Z, {
      game: l,
      pid: null == a ? true : a.pid,
      size: I.Z.Sizes.MEDIUM
    }),
    "aria-label": ed.intl.string(ed.t["87O5GB"]),
    action: (0, i.jsx)(h.P3F, {
      onClick: e => ev(e),
      children: (0, i.jsx)(h.rsf, {
        checked: b && Z || j && D,
        disabled: L,
        onChange: (e, t) => {
          ((e, t, n) => {
            if (ev(n), null == a) return;
            let i = false,
              r = false;
            switch (t) {
              case "game":
                f.Z.toggleOverlay(a, e, e), O(e), x(e), i = !e && j, r = !e && b;
                break;
              case "global":
                _.Z.setEnabled(e, e), i = !e && D, r = !e && Z;
                break;
              case "both":
                _.Z.setEnabled(e, e), f.Z.toggleOverlay(a, e, e), O(e), x(e), i = !e && D || !e && j, r = !e && Z || !e && b
            }
            let s = null;
            if (i ? s = "game" === t ? A.AE.LEGACY_GAME : A.AE.LEGACY : r && (s = "game" === t ? A.AE.OOP_GAME : A.AE.OOP), null != s) {
              var l;
              (0, M.l)(s, null != (l = a.id) ? l : null)
            }
          })(e, ((e, t) => {
            let n = !t && e,
              i = !Z && b,
              r = !D && j,
              s = !b && Z,
              a = !j && D;
            switch (true) {
              case n && (i || r) && (s || a):
                return "both";
              case n && (i || r):
                return "global";
              default:
                return "game"
            }
          })(e, b && Z || j && D), t)
        }
      })
    }),
    children: [(0, i.jsx)(eE, {
      title: ed.intl.string(ed.t["7BlVIi"]),
      description: ed.intl.string(ed.t.ndgADA),
      hint: Z ? true : ed.intl.string(ed.t.cAFVsL),
      "aria-label": ed.intl.string(ed.t["7BlVIi"]),
      action: (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(h.rsf, {
          checked: b && Z,
          disabled: P,
          onChange: (e, t) => {
            e && !Z ? k(e, A.AE.OOP, t) : k(e, A.AE.OOP_GAME, t)
          }
        }), (0, i.jsx)("div", {
          className: eu.emptySpacer
        })]
      })
    }), (0, i.jsx)(eE, {
      title: ed.intl.string(ed.t.BfFpW1),
      description: ed.intl.string(ed.t.OzInYm),
      hint: D ? true : ed.intl.string(ed.t["3sYHXl"]),
      "aria-label": ed.intl.string(ed.t.BfFpW1),
      action: (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(h.rsf, {
          checked: j && D,
          disabled: N,
          onChange: (e, t) => {
            e && !D ? k(e, A.AE.LEGACY, t) : k(e, A.AE.LEGACY_GAME, t)
          }
        }), (0, i.jsx)("div", {
          className: eu.emptySpacer
        })]
      })
    })]
  })
}

function eT(e) {
  let {
    game: t,
    gameApplication: n
  } = e, s = r.useMemo(() => null == t ? null : "pid" in t ? t.pid : null, [t]), a = (0, p.e7)([O.Z], () => null != n ? n : O.Z.getApplication(null == t ? true : t.id), [n, t]);
  return (0, i.jsx)(I.Z, {
    game: a,
    pid: s,
    size: I.Z.Sizes.SMALL
  })
}

function eN(e) {
  let {
    rawGame: t,
    gameApplication: n,
    supportDisabled: s,
    getEnabledFromStatus: a,
    onChange: l,
    clientSettingType: o,
    ariaLabel: c
  } = e, d = (0, p.cj)([T.ZP, K.Z, X.Z], () => (0, T.FZ)(t, T.ZP, K.Z, X.Z)), u = (0, p.cj)([K.Z, X.Z], () => (0, T.b6)(t, false, [K.Z, X.Z]), [t]), m = a(u), [g, f] = r.useState(m);
  return r.useEffect(() => {
    f(m)
  }, [m]), (0, i.jsx)(eE, {
    title: t.name,
    icon: (0, i.jsx)(eT, {
      game: d,
      gameApplication: n
    }),
    "aria-label": c,
    action: (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(h.rsf, {
        checked: g,
        disabled: s,
        onChange: (e, n) => ((e, n) => {
          let i = !e && g;
          if (ev(n), f(e), l(e, d, u), i) {
            var r, s;
            (0, M.l)(o, null != (s = null != (r = d.id) ? r : null == t ? true : t.id) ? s : null)
          }
        })(e, n)
      }), (0, i.jsx)("div", {
        className: eu.emptySpacer
      })]
    })
  })
}

function eI() {
  let [e, t] = Chunk647438.useState(false), {
    legacyEnabled: n,
    oopEnabled: s
  } = (0, Chunk442837.cj)([Chunk371651.default], () => Chunk371651.default.getGlobalEnabledStatus()), a = (0, Chunk442837.Wu)([Chunk594190.ZP], () => Chunk594190.ZP.getGamesSeen(true)).filter(e => !(0, F.le)(e)), l = (0, Chunk835473.Z)(a.map(e => e.id)), o = !(0, Chunk145597.supportsLegacy)(), c = (e, t) => {
    var i, r;
    ev(t), _.Z.setEnabled(e, s);
    let a = null != (r = null == (i = T.ZP.getCurrentGameForAnalytics()) ? true : i.id) ? r : null;
    (0, A.ou)(e, A.AE.LEGACY, a), !e && n && (0, M.l)(A.AE.LEGACY, a)
  }, d = (e, t, n) => {
    let {
      enabledOOP: i
    } = n;
    f.Z.toggleOverlay(t, e, i)
  }, u = Chunk647438.useMemo(() => (0, Chunk145597.supportsLegacy)() ? o ? Chunk388032.intl.string(Chunk388032.t.r9jEV1) : Chunk388032.intl.string(Chunk388032.t.OzInYm) : Chunk388032.intl.string(Chunk388032.t["8Ox6/P"]), [o]);
  return 0 === a.length ? (0, Chunk951288.jsx)(eE, {
    title: Chunk388032.intl.string(Chunk388032.t.BfFpW1),
    description: Chunk392711,
    "aria-label": Chunk388032.intl.string(Chunk388032.t.BfFpW1),
    className: Chunk607547.standaloneContainer,
    action: (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [(0, Chunk951288.jsx)(Chunk481060.rsf, {
        checked: require,
        disabled: o,
        onChange: (e, t) => c(e, t)
      }), Chunk987650.iP && (0, Chunk951288.jsx)("div", {
        className: Chunk607547.emptySpacer
      })]
    })
  }) : (0, Chunk951288.jsxs)(eC, {
    onExpand: exports,
    className: module ? Chunk607547.expandedContainer : true,
    title: Chunk388032.intl.string(Chunk388032.t.BfFpW1),
    description: Chunk392711,
    "aria-label": Chunk388032.intl.string(Chunk388032.t.BfFpW1),
    action: (0, Chunk951288.jsx)(Chunk481060.P3F, {
      onClick: e => ev(e),
      children: (0, Chunk951288.jsx)(Chunk481060.rsf, {
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
      children: a.map((e, t) => (0, i.jsx)(eN, {
        rawGame: e,
        clientSettingType: A.AE.LEGACY_GAME,
        supportDisabled: o,
        gameApplication: l[t],
        getEnabledFromStatus: e => {
          let {
            enabledLegacy: t
          } = e;
          return t
        },
        onChange: d,
        ariaLabel: ed.intl.format(ed.t.hvPYsL, {
          gameName: e.name
        }).toString()
      }, e.id))
    })]
  })
}

function ey() {
  let [e, t] = Chunk647438.useState(false), {
    oopEnabled: n,
    legacyEnabled: s
  } = (0, Chunk442837.cj)([Chunk371651.default], () => Chunk371651.default.getGlobalEnabledStatus()), a = !(0, Chunk145597.supportsOutOfProcess)(), l = (0, Chunk442837.Wu)([Chunk594190.ZP], () => Chunk594190.ZP.getGamesSeen(true)).filter(e => !(0, F.le)(e)), o = (0, Chunk835473.Z)(Chunk348327.map(e => e.id)), c = (e, t) => {
    var i, r;
    ev(t);
    let a = !e && n;
    _.Z.setEnabled(s, e);
    let l = null != (r = null == (i = T.ZP.getCurrentGameForAnalytics()) ? true : i.id) ? r : null;
    (0, A.ou)(e, A.AE.OOP, l), a && (0, M.l)(A.AE.OOP, l)
  }, d = (e, t, n) => {
    let {
      enabledLegacy: i
    } = n;
    f.Z.toggleOverlay(t, e, i)
  }, u = Chunk647438.useMemo(() => Chunk987650.iP ? a ? Chunk388032.intl.string(Chunk388032.t.C7bLTU) : Chunk388032.intl.string(Chunk388032.t.ndgADA) : Chunk388032.intl.string(Chunk388032.t.m7X4a2), [a]);
  return 0 === Chunk348327.length ? (0, Chunk951288.jsx)(eE, {
    title: Chunk388032.intl.string(Chunk388032.t["7BlVIi"]),
    description: Chunk392711,
    "aria-label": Chunk388032.intl.string(Chunk388032.t["7BlVIi"]),
    className: Chunk607547.standaloneContainer,
    action: (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [(0, Chunk951288.jsx)(Chunk481060.rsf, {
        checked: require,
        disabled: a,
        onChange: (e, t) => c(e, t)
      }), Chunk987650.iP && (0, Chunk951288.jsx)("div", {
        className: Chunk607547.emptySpacer
      })]
    })
  }) : (0, Chunk951288.jsxs)(eC, {
    onExpand: exports,
    className: module ? Chunk607547.expandedContainer : true,
    title: Chunk388032.intl.string(Chunk388032.t["7BlVIi"]),
    description: Chunk392711,
    "aria-label": Chunk388032.intl.string(Chunk388032.t["7BlVIi"]),
    action: (0, Chunk951288.jsx)(Chunk481060.P3F, {
      onClick: e => ev(e),
      children: (0, Chunk951288.jsx)(Chunk481060.rsf, {
        checked: require,
        disabled: a,
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
      children: Chunk348327.map((e, t) => (0, i.jsx)(eN, {
        rawGame: e,
        clientSettingType: A.AE.OOP_GAME,
        gameApplication: o[t],
        supportDisabled: a,
        getEnabledFromStatus: e => {
          let {
            enabledOOP: t
          } = e;
          return t
        },
        onChange: d,
        ariaLabel: ed.intl.format(ed.t.nByTd3, {
          gameName: e.name
        }).toString()
      }, e.id))
    })]
  })
}

function eA() {
  var e;
  let t = (0, Chunk442837.e7)([Chunk556296.ZP], () => Chunk556296.ZP.getOverlayKeybind()),
    n = !(0, Chunk145597.supportsLegacy)(),
    r = !(0, Chunk145597.supportsOutOfProcess)(),
    [s, a] = (0, Chunk442837.Wu)([Chunk594190.ZP], () => [Chunk594190.ZP.canShowAdminWarning, Chunk594190.ZP.getVisibleGame()], []),
    l = null != a && a.elevated && Chunk120356,
    o = !(0, Chunk556296.I1)(null != (e = null == exports ? true : exports.shortcut) ? module : []);
  return (0, Chunk951288.jsx)(ej, {
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
          }), o && (0, Chunk951288.jsx)(Chunk481060.Text, {
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
            onChange: function(e) {
              d()(null != t, "Keybind should never be undefined"), b.Z.setKeybind(eh(eg({}, t), {
                shortcut: e
              }))
            }
          })
        })]
      })
    })
  })
}

function eP() {
  let {
    allowActivityWidget: e,
    allowNowPlaying: t
  } = (0, Chunk32300.o4)("user_settings"), n = [{
    title: Chunk388032.t.eVE4LS,
    description: Chunk388032.t["72WNqq"],
    disabledSetting: Chunk486016.OverlayNotificationDisabledSetting.TEXT_CHAT
  }, {
    title: Chunk388032.t.hqsZJS,
    description: Chunk388032.t.kHjdqa,
    disabledSetting: Chunk486016.OverlayNotificationDisabledSetting.GO_LIVE_NUDGE
  }, module && {
    title: Chunk388032.t.sop3rq,
    description: Chunk388032.t.pjgffX,
    disabledSetting: Chunk486016.OverlayNotificationDisabledSetting.GAME_ACTIVITY
  }, exports && {
    title: Chunk388032.t["2QVhbW"],
    description: Chunk388032.t.wQ4ilJ,
    disabledSetting: Chunk486016.OverlayNotificationDisabledSetting.NOW_PLAYING
  }].filter(e => false !== e).filter(Boolean), r = (0, Chunk442837.e7)([Chunk624864.Z], () => Chunk624864.Z.getDisabledNotifications());
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk607547.notificationSettingsContainer,
    children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
      variant: "heading-md/semibold",
      color: "header-primary",
      children: Chunk388032.intl.string(Chunk388032.t.xOE5bG)
    }), require.map(e => {
      let t;
      return (0, i.jsxs)(ej, {
        className: eu.notificationItem,
        children: [(0, i.jsxs)("div", {
          className: eu.notificationDescriptionContainer,
          children: [(0, i.jsx)(h.Text, {
            variant: "text-sm/semibold",
            color: "header-primary",
            children: ed.intl.string(e.title)
          }), (0, i.jsx)(h.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: ed.intl.string(e.description)
          })]
        }), (0, i.jsx)(h.j7V, {
          value: !r.has(e.disabledSetting),
          onChange: (t = e.disabledSetting, e => {
            _.Z.setNotificationDisabledSetting(t, !e)
          }),
          hideBorder: true
        })]
      }, e.disabledSetting)
    })]
  })
}

function eR(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    n = arguments.length > 2 && true !== arguments[2] && arguments[2],
    i = arguments.length > 3 && true !== arguments[3] && arguments[3],
    r = "456" + Math.floor(1e6 * Math.random());
  return {
    voiceState: new W.Z({
      channelId: "123",
      userId: r,
      sessionId: "789",
      mute: t,
      deaf: n,
      selfMute: false,
      selfDeaf: false,
      selfVideo: false,
      selfStream: false,
      discoverable: i
    }),
    user: new z.Z({
      id: r,
      username: e
    }),
    member: {
      nick: e,
      userId: r,
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

function eD() {
  var e, t;
  let {
    avatarSizeMode: n,
    displayNameMode: s,
    displayUserMode: l
  } = (0, Chunk442837.cj)([Chunk237997.default], () => ({
    avatarSizeMode: Chunk237997.default.getAvatarSizeMode(),
    displayNameMode: Chunk237997.default.getDisplayNameMode(),
    displayUserMode: Chunk237997.default.getDisplayUserMode()
  })), o = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser()), [c] = Chunk647438.useState(() => [eR(Chunk388032.intl.string(Chunk388032.t.C0ZDvr), true, false), eR(Chunk388032.intl.string(Chunk388032.t.iOtj8P), false, false, true), eR(Chunk388032.intl.string(Chunk388032.t["0oqNgI"]), false, true)]), d = (0, Chunk442837.e7)([Chunk610394.ZP, Chunk355863.Z], () => {
    let e = Chunk610394.ZP.getWidgetByType(Chunk981631.Odu.VOICE_V3);
    if (null == module) return null;
    let t = Chunk355863.Z.getWidget(module.id);
    return null != exports && (0, Chunk340101.Aw)(exports) ? exports : null
  }), u = null != (t = null == d || null == (e = d.meta) ? true : module.voiceStatesMaxShown) ? exports : Chunk501787.At, m = [null != o ? function(e) {
    let t = eR(e.username);
    return t.user = e, t
  }(o) : null, ...Chunk512722].filter(Chunk823379.lm), g = [new Map(m.map(e => [e.user.id, e])), m.map(e => e.user.id)], f = Chunk981631.BRd.MIDNIGHT;
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk607547.voiceSettingsContainer,
    children: [(0, Chunk951288.jsx)(ej, {
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
        onChange: e => _.Z.setAvatarSizeMode(e),
        value: require
      })
    }), (0, Chunk951288.jsx)(ej, {
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
        onChange: e => _.Z.setDisplayNameMode(e),
        value: Chunk120356
      })
    }), (0, Chunk951288.jsx)(Chunk481060.f6W, {
      theme: Chunk224706,
      children: e => {
        var t, r;
        return (0, i.jsxs)("div", {
          className: a()(eu.widgetContainer, e),
          children: [(0, i.jsx)("div", {
            className: eu.voiceWidgetContainer,
            children: (0, i.jsx)(V.kI, {
              id: "voice-widget",
              title: ed.intl.string(ed.t.KNJ6Vl),
              channel: (0, H.kt)({
                id: "123",
                name: "Test Channel",
                type: ea.d4z.GUILD_VOICE,
                guild_id: "456"
              }),
              overlayVoiceStates: g,
              displayNameMode: s,
              displayUserMode: l,
              avatarSizeMode: n,
              widget: ea.Odu.VOICE,
              anchorLeft: true,
              application: null,
              stream: null,
              streamApplication: null,
              streamMetadata: null,
              locked: false,
              pinned: false,
              isSettingsPreview: true,
              isPreviewingInGame: false,
              maxDisplayedVoiceStates: u
            })
          }), (0, i.jsxs)("div", {
            className: eu.widgetHeaderContainer,
            children: [(0, i.jsx)(G.PI, {
              children: ed.intl.string(ed.t.KNJ6Vl)
            }), (0, i.jsx)(G.ls, {}), (0, i.jsx)(G.RT, {
              id: null != (t = null == d ? true : d.id) ? t : "voice-widget",
              pinned: null != (r = null == d ? true : d.pinned) && r
            })]
          })]
        })
      }
    }), (0, Chunk951288.jsx)(ej, {
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
        onChange: e => _.Z.setDisplayUserMode(e),
        value: Chunk348327
      })
    }), (0, Chunk951288.jsx)(ej, {
      title: Chunk388032.intl.string(Chunk388032.t["X/Uyzc"]),
      titleId: eb,
      children: (0, Chunk951288.jsx)("div", {
        className: Chunk607547.sliderContainer,
        children: (0, Chunk951288.jsx)(Chunk481060.iRW, {
          initialValue: Chunk392711,
          onValueRender: e => e < 1 ? ed.intl.string(ed.t.nrUzFB) : "".concat(Math.floor(e)),
          minValue: 0,
          maxValue: 25,
          onValueChange: function(e) {
            null != d && (e < 1 ? (0, x.zG)(d.id, {
              voiceStatesMaxShown: ec.Og
            }) : (0, x.zG)(d.id, {
              voiceStatesMaxShown: Math.floor(e)
            }))
          },
          markers: ex,
          barStyles: {
            background: Chunk481060.TVs.colors.BACKGROUND_MOD_STRONG.css
          },
          fillStyles: {
            background: Chunk481060.TVs.colors.BG_BRAND.css
          },
          "aria-labelledby": eb,
          onMarkerRender: e => e < 1 ? ed.intl.string(ed.t.nrUzFB) : "".concat(Math.floor(e))
        })
      })
    })]
  })
}

function eZ() {
  let [e, t] = (0, Chunk243778.US)([Chunk704215.z.OVERLAY_OOP_SETTINGS_NUX], true, true);
  return ((0, Chunk493773.ZP)(() => () => {
    exports(Chunk921944.L.AUTO_DISMISS)
  }), module !== Chunk704215.z.OVERLAY_OOP_SETTINGS_NUX) ? null : (0, Chunk951288.jsxs)("div", {
    className: Chunk607547.overlaySettingsNux,
    children: [(0, Chunk951288.jsx)("div", {
      children: (0, Chunk951288.jsx)("img", {
        src: Chunk131970.Z,
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
        src: Chunk730462.Z,
        alt: Chunk388032.intl.string(Chunk388032.t.mdXZh4),
        className: Chunk607547.nuxUserSettingsImage
      })
    }), (0, Chunk951288.jsx)("div", {
      "data-button-hoisted-classname-wrapper": true,
      className: Chunk607547.closeCircleButton,
      children: (0, Chunk951288.jsx)(Chunk481060.zxk, {
        variant: "primary",
        text: Chunk388032.intl.string(Chunk388032.t.Q26diI),
        onClick: () => void exports(Chunk921944.L.DISMISS)
      })
    }), (0, Chunk951288.jsx)("div", {
      className: Chunk607547.nuxDivider
    })]
  })
}

function ew(e) {
  let {
    runningGame: t,
    runningGameApplication: n
  } = e, s = null == n ? true : n.id, a = (0, p.e7)([L.Z], () => L.Z.isLimitedInteractionOverrideEnabled(s), [s]), l = r.useMemo(() => null != t && (0, k.H8)(t.pid), [t]), o = (0, Z.Z)({
    location: "overlay_user_settings"
  }), {
    disableClickableRegions: c,
    shouldShowKeybindIndicators: d
  } = (0, p.cj)([ee.default], () => ({
    disableClickableRegions: ee.default.disableClickableRegions,
    shouldShowKeybindIndicators: ee.default.showKeybindIndicators
  }));
  return (0, i.jsxs)("div", {
    className: eu.overlayEnabledSettingsContainer,
    children: [(0, i.jsx)(eA, {}), o && (0, i.jsx)(ej, {
      children: (0, i.jsx)(h.j7V, {
        value: d,
        onChange: e => _.Z.setShowKeybindIndicators(e),
        hideBorder: true,
        children: ed.intl.string(ed.t.XZTl9v)
      })
    }), null != s && (0, i.jsxs)(ej, {
      children: [(0, i.jsxs)("div", {
        className: eu.limitedInteractionOverrideContainer,
        children: [(0, i.jsx)(h.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          children: ed.intl.string(ed.t.wgVQND)
        }), (0, i.jsx)(h.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: ed.intl.string(ed.t["5SsyFx"])
        })]
      }), (0, i.jsx)(h.j7V, {
        value: a || l,
        disabled: l,
        onChange: e => {
          null != n && _.Z.setLimitedInteractionOverride(n.id, e)
        },
        hideBorder: true
      })]
    }), (0, i.jsxs)(ej, {
      children: [(0, i.jsxs)("div", {
        className: eu.limitedInteractionOverrideContainer,
        children: [(0, i.jsx)(h.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          children: ed.intl.string(ed.t["+eFXxs"])
        }), (0, i.jsx)(h.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: ed.intl.string(ed.t.kivMAg)
        })]
      }), (0, i.jsx)(h.j7V, {
        value: !c,
        onChange: function() {
          _.Z.setDisableClickableRegions(!c)
        },
        hideBorder: true
      })]
    })]
  })
}

function ek(e) {
  let {
    className: t,
    showHeader: n
  } = e, {
    runningGame: r,
    runningGameApplication: s
  } = function() {
    let e = (0, p.e7)([Y.Z], () => Y.Z.getStreamerActiveStreamMetadata()),
      t = (0, p.e7)([T.ZP], () => {
        let e = T.ZP.getVisibleGame();
        return null != e ? T.ZP.getGameOrTransformedSubgameForPID(e.pid) : null
      }, [], o()),
      [n] = (0, v.Z)([null != e && null != e.id ? e.id : null != t && null != t.id ? t.id : true]);
    return {
      runningGame: t,
      runningGameApplication: n
    }
  }(), a = (0, D.o4)("user_settings").overlayV3UI, l = (0, p.e7)([J.default], () => J.default.getCurrentUser());
  (0, C.ZP)(() => {
    if (ei.isPlatformEmbedded) return (0, N.Ky)(), N.P7
  });
  let c = e_(ef);
  return (m().isEqual(c, ef) || (et.default.track(ea.rMx.OVERLAY_SETTINGS_UPDATED, c), ef = c), null == l) ? null : (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)(h.hjN, {
      tag: h.RB0.H1,
      title: ed.intl.string(ed.t["9cb1U1"]),
      children: [a ? (0, i.jsx)(eZ, {}) : null, (0, i.jsxs)("div", {
        className: eu.overlayEnabledSettingsContainer,
        children: [(0, i.jsx)(eS, {
          runningGame: r,
          runningGameApplication: s
        }), (0, i.jsx)(ey, {}), (0, i.jsx)(eI, {})]
      }), (0, i.jsx)("div", {
        className: eu.settingsDivider
      })]
    }), (0, i.jsxs)(h.hjN, {
      children: [(0, i.jsx)(ew, {
        runningGame: r,
        runningGameApplication: s
      }), (0, i.jsx)("div", {
        className: eu.settingsDivider
      })]
    }), (0, i.jsxs)(h.hjN, {
      title: ed.intl.string(ed.t.r1TZfn),
      children: [(0, i.jsx)(eD, {}), (0, i.jsx)("div", {
        className: eu.settingsDivider
      })]
    }), (0, i.jsx)(h.hjN, {
      children: (0, i.jsx)(eP, {})
    })]
  })
}