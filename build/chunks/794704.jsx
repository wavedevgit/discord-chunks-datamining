/** Chunk was on 75708 **/
/** chunk id: 794704, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => ek
}), require("./953529.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk825209 = require("./825209.js"),
  Chunk593472 = require("./593472.js"),
  Chunk493773 = require("./493773.js"),
  Chunk812206 = require("./812206.js"),
  Chunk835473 = require("./835473.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk594190 = require("./594190.js"),
  Chunk320724 = require("./320724.js"),
  Chunk925329 = require("./925329.js"),
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
  Chunk957148 = require("./957148.js"),
  Chunk340101 = require("./340101.js"),
  Chunk243487 = require("./243487.jsx"),
  Chunk430561 = require("./430561.jsx"),
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
  Chunk91481 = require("./91481.js"),
  Chunk131970 = require("./131970.js"),
  Chunk730462 = require("./730462.js");

function ep(e) {
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

function eg(e, t) {
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
let eh = ex(null),
  ef = "voice-widget-display-users",
  eb = [0, 5, 10, 15, 20, 25];

function ex(e) {
  var t;
  let n = $.default.getNotificationPositionMode(),
    i = n !== es._vf.DISABLED,
    r = J.ZP.getOverlayKeybind(),
    s = J.ZP.getOverlayChatKeybind();
  return {
    enabled: Q.default.enabled,
    notifications_enabled: i,
    notifications_position: i ? n : null,
    text_notifications_mode: L.Z.isNotificationDisabled(P.OverlayNotificationDisabledSetting.TEXT_CHAT) ? "DISABLED" : "ENABLED",
    hotkey: null != r ? (0, ei.BB)(r.shortcut) : null,
    text_activation_hotkey: null != s ? (0, ei.BB)(s.shortcut) : null,
    text_opacity_slider: $.default.getTextWidgetOpacity(),
    old_enabled: null != (t = null == e ? true : e.enabled) ? t : Q.default.enabled
  }
}

function e_(e) {
  let {
    children: t,
    title: n,
    className: r,
    titleId: s
  } = e;
  return <h.xJW>{null != n && <h.Text variant={"text-sm/medium"} color={"text-muted"} className={ed.formItemTitle} id={s}>{n}</h.Text>}{<div className={a()(ed.rowContainer, r)}>{t}</div>}</h.xJW>
}

function ej(e) {
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
  return <h.kL8 aria-label={d} onClick={c} className={a()(ed.groupContainer, u)}>{null != t && <div className={ed.groupHeader}>{t}</div>}{<div className={ed.groupContent}>{null != n && <div className={ed.groupIcon}>{n}</div>}{<div className={ed.groupMainContent}>{<h.Text variant={"text-md/medium"} color={"header-primary"} className={ed.groupTitle}>{r}</h.Text>}{null != s && <h.Text variant={"text-sm/normal"} color={"text-secondary"}>{s}</h.Text>}{null != o && <h.Text variant={"text-xxs/medium"} color={"text-muted"}>{o}</h.Text>}</div>}{<div className={ed.groupAction}>{l}</div>}</div>}</h.kL8>
}

function eE(e) {
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
  let [o, c] = r.useState(false), d = e => {
    c(e), null == s || s(e)
  };
  return <h.zF9 className={ed.collapseable} collapsibleContent={(0, i.jsx)("div", {
      className: ed.groupCollapsedContainer,
      children: t
    })}>{e => {
      let {
        onClick: t
      } = e;
      return (0, i.jsx)(ej, eg(ep({}, l), {
        onClick: e => {
          d(!o), null == t || t(e)
        },
        className: a()(ed.mainCollapseableContainer, n),
        action: (0, i.jsxs)("div", {
          className: ed.groupCollapsedAction,
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
    }}</h.zF9>
}
let eC = new Set([Chunk837268.mM.INITIALIZING, Chunk837268.mM.WAITING_FOR_SCREEN_TYPE_RESOLUTION, Chunk837268.mM.WAITING_FOR_MODULE_TRACKING, Chunk837268.mM.WAITING_FOR_OVERLAY_OPEN]),
  eO = e => {
    e.preventDefault(), e.stopPropagation()
  };

function ev(e) {
  var t, n, s;
  let {
    runningGame: a,
    runningGameApplication: l
  } = e, c = null == a ? true : a.pid, d = (0, p.e7)([w.default], () => null == a || null == c ? null : w.default.getTrackedGameByPid(c), [a, c], o()), {
    enabledLegacy: u,
    enabledOOP: m
  } = (0, p.cj)([Y.Z, q.Z], () => {
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
    return (0, T.b6)(a, false, [Y.Z, q.Z])
  }, [a, d]), g = (0, p.e7)([T.ZP, Y.Z, q.Z], () => null == a ? null : (0, T.FZ)(a, T.ZP, Y.Z, q.Z), [a], o()), [b, x] = r.useState(m), [j, O] = r.useState(u), [v, S] = r.useState(false);
  r.useEffect(() => {
    x(m), O(u)
  }, [m, u]);
  let I = !(0, er.supportsLegacy)(),
    P = !(0, er.supportsOutOfProcess)(),
    {
      legacyEnabled: D,
      oopEnabled: Z
    } = (0, p.cj)([w.default], () => w.default.getGlobalEnabledStatus()),
    k = (e, t, n) => {
      var i, r, s;
      if (eO(n), null == a) return;
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
      }(l || o) && (0, B.l)(l ? A.AE.LEGACY_GAME : A.AE.OOP_GAME, null != (s = a.id) ? s : null)
    },
    L = (e, t) => {
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
    },
    M = (e, t, n) => {
      if (eO(n), null == a) return;
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
        (0, B.l)(s, null != (l = a.id) ? l : null)
      }
    },
    U = I && P,
    V = !D && !Z,
    G = !b && !D && j && !I,
    F = !j && !Z && b && !P,
    H = (null == d ? true : d.overlayMethod) === R.gl.Disabled,
    z = (null == d ? true : d.state) === R.mM.OVERLAY_RENDERING && !H,
    W = (null == d ? true : d.state) != null && eC.has(d.state) && !H,
    K = (null == d ? true : d.overlayMethod) === R.gl.OutOfProcess,
    X = (null == d ? true : d.overlayMethod) === R.gl.OutOfProcessLimitedInteraction,
    J = (null == d ? true : d.overlayMethod) === R.gl.Hook,
    Q = (null == d ? true : d.state) === R.mM.OVERLAY_CRASHED || (null == d ? true : d.state) === R.mM.OVERLAY_CRASHED_DISABLED,
    $ = !b && !j,
    [ee, et] = (() => {
      switch (true) {
        case z && K:
          return [ec.intl.format(ec.t.hFVBIi, {
            overlayMethod: ec.intl.string(ec.t.a3eXS0),
            overlayMethodHook: function(e, t) {
              return <h.Text tag={"span"} variant={"text-sm/medium"} color={"text-feedback-positive"}>{e}</h.Text>
            }
          }), null];
        case z && X:
          return [ec.intl.format(ec.t.hFVBIi, {
            overlayMethod: ec.intl.string(ec.t["506AbW"]),
            overlayMethodHook: function(e, t) {
              return <h.Text tag={"span"} variant={"text-sm/medium"} color={"text-feedback-warning"}>{e}</h.Text>
            }
          }), null];
        case z && J:
          return [ec.intl.format(ec.t.hFVBIi, {
            overlayMethod: ec.intl.string(ec.t.bvlpDQ),
            overlayMethodHook: function(e, t) {
              return <h.Text tag={"span"} variant={"text-sm/medium"} color={"text-primary"}>{e}</h.Text>
            }
          }), function() {
            var e, t;
            switch (true) {
              case (null == d ? true : d.fullscreenType) !== E.Jx.BORDERLESS_FULLSCREEN:
                return ec.intl.string(ec.t.mJmbeH);
              case P:
                return ec.intl.string(ec.t.C7bLTU);
              case !(null != (e = null == d ? true : d.oopEnabled) && e):
                return ec.intl.string(ec.t.WiY24u);
              case !Z:
                return ec.intl.string(ec.t.cAFVsL);
              case !(null != (t = null == d ? true : d.supportsOutOfProcess) && t):
                return ec.intl.string(ec.t.XcGEcn);
              default:
                return ec.intl.string(ec.t.bJXH2t)
            }
          }()];
        case Q:
          return [ec.intl.string(ec.t.OFC2a2), null];
        case U:
          return [ec.intl.string(ec.t.m7X4a2), null];
        case V:
          return [ec.intl.string(ec.t["9DUS5u"]), null];
        case $:
          return [ec.intl.string(ec.t.nQ9EdH), null];
        case G:
        case F:
          return [ec.intl.string(ec.t.VWUn0d), null];
        case W:
          if (K) return [ec.intl.string(ec.t["s8+CFh"]), null];
          if (J) return [ec.intl.string(ec.t.JEEdqq), null];
          if (X) return [ec.intl.string(ec.t.pzBMwc), null];
          return [ec.intl.string(ec.t["2Xhy9v"]), null];
        case null == d:
          return [ec.intl.string(ec.t.vwHPRk), null];
        default:
          return [ec.intl.string(ec.t.ONovPz), null]
      }
    })();
  (0, C.ZP)(() => {
    f.Z.getDetectableGames()
  });
  let [en, ei] = r.useMemo(() => W ? ["text-muted", h.TVs.colors.TEXT_MUTED.css] : z && X ? ["text-feedback-warning", h.TVs.colors.TEXT_FEEDBACK_WARNING.css] : z && K ? ["text-feedback-positive", h.TVs.colors.TEXT_FEEDBACK_POSITIVE.css] : z && J ? ["text-primary", h.TVs.colors.TEXT_PRIMARY.css] : ["interactive-normal", h.TVs.colors.INTERACTIVE_NORMAL.css], [W, z, X, K, J]);
  return null == a ? null : <eE onExpand={S} className={v ? ed.expandedContainer : true} title={(0, i.jsxs)(i.Fragment, {
      children: [null != (s = null != (n = null != (t = null == l ? true : l.name) ? t : null == g ? true : g.name) ? n : null == a ? true : a.gameName) ? s : "", null != g && g.verified ? (0, i.jsx)(h.ua7, {
        text: ec.intl.string(ec.t["4PJP5u"]),
        children: e => (0, i.jsx)(y.Z, eg(ep({
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
    })} description={ee} hint={null != et ? et : true} header={(0, i.jsxs)(i.Fragment, {
      children: [z || W ? (0, i.jsx)(h.pzj, {
        size: "xxs",
        color: ei
      }) : (0, i.jsx)("div", {
        className: ed.playingDot
      }), (0, i.jsx)(h.Text, {
        variant: "text-xs/semibold",
        color: en,
        children: ec.intl.string(ec.t.CDOx39)
      })]
    })} icon={(0, i.jsx)(N.Z, {
      game: l,
      pid: null == a ? true : a.pid,
      size: N.Z.Sizes.MEDIUM
    })} aria-label={ec.intl.string(ec.t["87O5GB"])} action={(0, i.jsx)(h.P3F, {
      onClick: e => eO(e),
      children: (0, i.jsx)(h.rsf, {
        checked: b && Z || j && D,
        disabled: U,
        onChange: (e, t) => {
          M(e, L(e, b && Z || j && D), t)
        }
      })
    })}>{<ej title={ec.intl.string(ec.t["7BlVIi"])} description={ec.intl.string(ec.t.ndgADA)} hint={Z ? true : ec.intl.string(ec.t.cAFVsL)} aria-label={ec.intl.string(ec.t["7BlVIi"])} action={(0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(h.rsf, {
          checked: b && Z,
          disabled: P,
          onChange: (e, t) => {
            e && !Z ? k(e, A.AE.OOP, t) : k(e, A.AE.OOP_GAME, t)
          }
        }), (0, i.jsx)("div", {
          className: ed.emptySpacer
        })]
      })} />}{<ej title={ec.intl.string(ec.t.BfFpW1)} description={ec.intl.string(ec.t.OzInYm)} hint={D ? true : ec.intl.string(ec.t["3sYHXl"])} aria-label={ec.intl.string(ec.t.BfFpW1)} action={(0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(h.rsf, {
          checked: j && D,
          disabled: I,
          onChange: (e, t) => {
            e && !D ? k(e, A.AE.LEGACY, t) : k(e, A.AE.LEGACY_GAME, t)
          }
        }), (0, i.jsx)("div", {
          className: ed.emptySpacer
        })]
      })} />}</eE>
}

function eS(e) {
  let {
    game: t,
    gameApplication: n
  } = e, s = r.useMemo(() => null == t ? null : "pid" in t ? t.pid : null, [t]), a = (0, p.e7)([O.Z], () => null != n ? n : O.Z.getApplication(null == t ? true : t.id), [n, t]);
  return <N.Z game={a} pid={s} size={N.Z.Sizes.SMALL} />
}

function eT(e) {
  let {
    rawGame: t,
    gameApplication: n,
    supportDisabled: s,
    getEnabledFromStatus: a,
    onChange: l,
    clientSettingType: o,
    ariaLabel: c
  } = e, d = (0, p.cj)([T.ZP, Y.Z, q.Z], () => (0, T.FZ)(t, T.ZP, Y.Z, q.Z)), u = (0, p.cj)([Y.Z, q.Z], () => (0, T.b6)(t, false, [Y.Z, q.Z]), [t]), m = a(u), [g, f] = r.useState(m);
  r.useEffect(() => {
    f(m)
  }, [m]);
  let b = (e, n) => {
    let i = !e && g;
    if (eO(n), f(e), l(e, d, u), i) {
      var r, s;
      (0, B.l)(o, null != (s = null != (r = d.id) ? r : null == t ? true : t.id) ? s : null)
    }
  };
  return <ej title={t.name} icon={(0, i.jsx)(eS, {
      game: d,
      gameApplication: n
    })} aria-label={c} action={(0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(h.rsf, {
        checked: g,
        disabled: s,
        onChange: (e, t) => b(e, t)
      }), (0, i.jsx)("div", {
        className: ed.emptySpacer
      })]
    })} />
}

function eI() {
  let [e, t] = Chunk73800.useState(false), {
    legacyEnabled: n,
    oopEnabled: s
  } = (0, Chunk442837.cj)([Chunk371651.default], () => Chunk371651.default.getGlobalEnabledStatus()), a = (0, Chunk442837.Wu)([Chunk594190.ZP], () => Chunk594190.ZP.getGamesSeen(true)), l = (0, Chunk835473.Z)(a.map(e => e.id)), o = !(0, Chunk145597.supportsLegacy)(), c = (e, t) => {
    var i, r;
    eO(t), _.Z.setEnabled(e, s);
    let a = null != (r = null == (i = T.ZP.getCurrentGameForAnalytics()) ? true : i.id) ? r : null;
    (0, A.ou)(e, A.AE.LEGACY, a), !e && n && (0, B.l)(A.AE.LEGACY, a)
  }, d = (e, t, n) => {
    let {
      enabledOOP: i
    } = n;
    f.Z.toggleOverlay(t, e, i)
  }, u = Chunk73800.useMemo(() => (0, Chunk145597.supportsLegacy)() ? o ? Chunk388032.intl.string(Chunk388032.t.r9jEV1) : Chunk388032.intl.string(Chunk388032.t.OzInYm) : Chunk388032.intl.string(Chunk388032.t["8Ox6/P"]), [o]);
  return 0 === a.length ? <ej title={Chunk388032.intl.string(Chunk388032.t.BfFpW1)} description={Chunk392711} aria-label={Chunk388032.intl.string(Chunk388032.t.BfFpW1)} className={Chunk91481.standaloneContainer} action={(0, Chunk255367.jsxs)(Chunk255367.Fragment, {
      children: [(0, Chunk255367.jsx)(Chunk481060.rsf, {
        checked: require,
        disabled: o,
        onChange: (e, t) => c(e, t)
      }), Chunk987650.iP && (0, Chunk255367.jsx)("div", {
        className: Chunk91481.emptySpacer
      })]
    })} /> : <eE onExpand={exports} className={module ? Chunk91481.expandedContainer : true} title={Chunk388032.intl.string(Chunk388032.t.BfFpW1)} description={Chunk392711} aria-label={Chunk388032.intl.string(Chunk388032.t.BfFpW1)} action={(0, Chunk255367.jsx)(Chunk481060.P3F, {
      onClick: e => eO(e),
      children: (0, Chunk255367.jsx)(Chunk481060.rsf, {
        checked: require,
        disabled: o,
        onChange: (e, t) => c(e, t)
      })
    })}>{<div className={Chunk91481.subtitleContainer}><Chunk481060.Text variant={"text-xs/semibold"} color={"text-muted"}>{Chunk388032.intl.string(Chunk388032.t.FzoWRk)}</Chunk481060.Text></div>}{<Chunk481060.zJl className={Chunk91481.scroller}>{a.map((e, t) => (0, i.jsx)(eT, {
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
        ariaLabel: ec.intl.format(ec.t.hvPYsL, {
          gameName: e.name
        }).toString()
      }, e.id))}</Chunk481060.zJl>}</eE>
}

function eN() {
  let [e, t] = Chunk73800.useState(false), {
    oopEnabled: n,
    legacyEnabled: s
  } = (0, Chunk442837.cj)([Chunk371651.default], () => Chunk371651.default.getGlobalEnabledStatus()), a = !(0, Chunk145597.supportsOutOfProcess)(), l = (0, Chunk442837.Wu)([Chunk594190.ZP], () => Chunk594190.ZP.getGamesSeen(true)), o = (0, Chunk835473.Z)(Chunk348327.map(e => e.id)), c = (e, t) => {
    var i, r;
    eO(t);
    let a = !e && n;
    _.Z.setEnabled(s, e);
    let l = null != (r = null == (i = T.ZP.getCurrentGameForAnalytics()) ? true : i.id) ? r : null;
    (0, A.ou)(e, A.AE.OOP, l), a && (0, B.l)(A.AE.OOP, l)
  }, d = (e, t, n) => {
    let {
      enabledLegacy: i
    } = n;
    f.Z.toggleOverlay(t, e, i)
  }, u = Chunk73800.useMemo(() => Chunk987650.iP ? a ? Chunk388032.intl.string(Chunk388032.t.C7bLTU) : Chunk388032.intl.string(Chunk388032.t.ndgADA) : Chunk388032.intl.string(Chunk388032.t.m7X4a2), [a]);
  return 0 === Chunk348327.length ? <ej title={Chunk388032.intl.string(Chunk388032.t["7BlVIi"])} description={Chunk392711} aria-label={Chunk388032.intl.string(Chunk388032.t["7BlVIi"])} className={Chunk91481.standaloneContainer} action={(0, Chunk255367.jsxs)(Chunk255367.Fragment, {
      children: [(0, Chunk255367.jsx)(Chunk481060.rsf, {
        checked: require,
        disabled: a,
        onChange: (e, t) => c(e, t)
      }), Chunk987650.iP && (0, Chunk255367.jsx)("div", {
        className: Chunk91481.emptySpacer
      })]
    })} /> : <eE onExpand={exports} className={module ? Chunk91481.expandedContainer : true} title={Chunk388032.intl.string(Chunk388032.t["7BlVIi"])} description={Chunk392711} aria-label={Chunk388032.intl.string(Chunk388032.t["7BlVIi"])} action={(0, Chunk255367.jsx)(Chunk481060.P3F, {
      onClick: e => eO(e),
      children: (0, Chunk255367.jsx)(Chunk481060.rsf, {
        checked: require,
        disabled: a,
        onChange: (e, t) => c(e, t)
      })
    })}>{<div className={Chunk91481.subtitleContainer}><Chunk481060.Text variant={"text-xs/semibold"} color={"text-muted"}>{Chunk388032.intl.string(Chunk388032.t.FzoWRk)}</Chunk481060.Text></div>}{<Chunk481060.zJl className={Chunk91481.scroller}>{Chunk348327.map((e, t) => (0, i.jsx)(eT, {
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
        ariaLabel: ec.intl.format(ec.t.nByTd3, {
          gameName: e.name
        }).toString()
      }, e.id))}</Chunk481060.zJl>}</eE>
}

function ey() {
  var e;
  let t = (0, Chunk442837.e7)([Chunk556296.ZP], () => Chunk556296.ZP.getOverlayKeybind()),
    n = !(0, Chunk145597.supportsLegacy)(),
    r = !(0, Chunk145597.supportsOutOfProcess)(),
    [s, a] = (0, Chunk442837.Wu)([Chunk594190.ZP], () => [Chunk594190.ZP.canShowAdminWarning, Chunk594190.ZP.getVisibleGame()], []),
    l = null != a && a.elevated && Chunk120356,
    o = !(0, Chunk556296.I1)(null != (e = null == exports ? true : exports.shortcut) ? module : []);
  return <e_><div className={Chunk91481.keybindMainContainer}><div className={Chunk91481.keybindContainer}>{<div className={Chunk91481.keybindHeaderContainer}>{<Chunk481060.Text variant={"text-md/semibold"} color={"header-primary"}>{Chunk388032.intl.string(Chunk388032.t.VsAZcH)}</Chunk481060.Text>}{Chunk348327 && <Chunk481060.Text variant={"text-xs/normal"} color={"text-feedback-warning"} className={Chunk91481.keybindAdminWarning}>{Chunk388032.intl.string(Chunk388032.t.NsowVV)}</Chunk481060.Text>}{o && <Chunk481060.Text variant={"text-xs/normal"} color={"text-feedback-warning"} className={Chunk91481.keybindAdminWarning}>{Chunk388032.intl.string(Chunk388032.t.UNoTw8)}</Chunk481060.Text>}</div>}{<div className={Chunk91481.keybindRecorderContainer}><Chunk825209.Z disabled={require && Chunk73800} defaultValue={null != exports ? exports.shortcut : []} onChange={function(e) {
              d()(null != t, "Keybind should never be undefined"), b.Z.setKeybind(eg(ep({}, t), {
                shortcut: e
              }))
            }} /></div>}</div></div></e_>
}
let eA = (e, t) => [{
  title: ec.t.eVE4LS,
  description: ec.t["72WNqq"],
  disabledSetting: P.OverlayNotificationDisabledSetting.TEXT_CHAT
}, {
  title: ec.t.hqsZJS,
  description: ec.t.kHjdqa,
  disabledSetting: P.OverlayNotificationDisabledSetting.GO_LIVE_NUDGE
}, e && {
  title: ec.t.sop3rq,
  description: ec.t.pjgffX,
  disabledSetting: P.OverlayNotificationDisabledSetting.GAME_ACTIVITY
}, t && {
  title: ec.t["2QVhbW"],
  description: ec.t.wQ4ilJ,
  disabledSetting: P.OverlayNotificationDisabledSetting.NOW_PLAYING
}].filter(e => false !== e).filter(Boolean);

function eP() {
  let {
    allowActivityWidget: e,
    allowNowPlaying: t
  } = (0, Chunk32300.o4)("user_settings"), n = eA(module, exports), r = e => t => {
    _.Z.setNotificationDisabledSetting(e, !t)
  }, s = (0, Chunk442837.e7)([Chunk624864.Z], () => Chunk624864.Z.getDisabledNotifications());
  return <div className={Chunk91481.notificationSettingsContainer}>{<Chunk481060.X6q variant={"heading-md/semibold"} color={"header-primary"}>{Chunk388032.intl.string(Chunk388032.t.xOE5bG)}</Chunk481060.X6q>}{require.map(e => <e_ className={ed.notificationItem}>{<div className={ed.notificationDescriptionContainer}>{<h.Text variant={"text-sm/semibold"} color={"header-primary"}>{ec.intl.string(e.title)}</h.Text>}{<h.Text variant={"text-xs/normal"} color={"text-muted"}>{ec.intl.string(e.description)}</h.Text>}</div>}{<h.j7V value={!s.has(e.disabledSetting)} onChange={r(e.disabledSetting)} hideBorder={true} />}</e_>)}</div>
}

function eR(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    n = arguments.length > 2 && true !== arguments[2] && arguments[2],
    i = arguments.length > 3 && true !== arguments[3] && arguments[3],
    r = "456" + Math.floor(1e6 * Math.random());
  return {
    voiceState: new z.Z({
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
    user: new H.Z({
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
  })), o = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser()), [c] = Chunk73800.useState(() => [eR(Chunk388032.intl.string(Chunk388032.t.C0ZDvr), true, false), eR(Chunk388032.intl.string(Chunk388032.t.iOtj8P), false, false, true), eR(Chunk388032.intl.string(Chunk388032.t["0oqNgI"]), false, true)]), d = (0, Chunk442837.e7)([Chunk610394.ZP, Chunk355863.Z], () => {
    let e = Chunk610394.ZP.getWidgetByType(Chunk981631.Odu.VOICE_V3);
    if (null == module) return null;
    let t = Chunk355863.Z.getWidget(module.id);
    return null != exports && (0, Chunk340101.Aw)(exports) ? exports : null
  }), u = null != (t = null == d || null == (e = d.meta) ? true : module.voiceStatesMaxShown) ? exports : Chunk501787.At, m = [null != o ? function(e) {
    let t = eR(e.username);
    return t.user = e, t
  }(o) : null, ...Chunk512722].filter(Chunk823379.lm), g = [new Map(m.map(e => [e.user.id, e])), m.map(e => e.user.id)], f = Chunk981631.BRd.MIDNIGHT;
  return <div className={Chunk91481.voiceSettingsContainer}>{<e_ title={Chunk388032.intl.string(Chunk388032.t.dnvZSk)}><Chunk481060.q4e options={[{
          label: Chunk388032.intl.string(Chunk388032.t.YcOxtr),
          value: Chunk981631.ipw.LARGE
        }, {
          label: Chunk388032.intl.string(Chunk388032.t.BKIKq6),
          value: Chunk981631.ipw.SMALL
        }]} className={Chunk91481.select} onChange={e => _.Z.setAvatarSizeMode(e)} value={require} /></e_>}{<e_ title={Chunk388032.intl.string(Chunk388032.t.J0dpcH)}><Chunk481060.q4e options={[{
          label: Chunk388032.intl.string(Chunk388032.t.nBmDra),
          value: Chunk981631.wC$.ALWAYS
        }, {
          label: Chunk388032.intl.string(Chunk388032.t["2OvIZW"]),
          value: Chunk981631.wC$.ONLY_WHILE_SPEAKING
        }, {
          label: Chunk388032.intl.string(Chunk388032.t.ekjlPD),
          value: Chunk981631.wC$.NEVER
        }]} className={Chunk91481.select} onChange={e => _.Z.setDisplayNameMode(e)} value={Chunk120356} /></e_>}{<Chunk481060.f6W theme={Chunk224706}>{e => {
        var t, r;
        return (0, i.jsxs)("div", {
          className: a()(ed.widgetContainer, e),
          children: [(0, i.jsx)("div", {
            className: ed.voiceWidgetContainer,
            children: (0, i.jsx)(V.kI, {
              id: "voice-widget",
              title: ec.intl.string(ec.t.KNJ6Vl),
              channel: (0, F.kt)({
                id: "123",
                name: "Test Channel",
                type: es.d4z.GUILD_VOICE,
                guild_id: "456"
              }),
              overlayVoiceStates: g,
              displayNameMode: s,
              displayUserMode: l,
              avatarSizeMode: n,
              widget: es.Odu.VOICE,
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
            className: ed.widgetHeaderContainer,
            children: [(0, i.jsx)(G.PI, {
              children: ec.intl.string(ec.t.KNJ6Vl)
            }), (0, i.jsx)(G.ls, {}), (0, i.jsx)(G.RT, {
              id: null != (t = null == d ? true : d.id) ? t : "voice-widget",
              pinned: null != (r = null == d ? true : d.pinned) && r
            })]
          })]
        })
      }}</Chunk481060.f6W>}{<e_ title={Chunk388032.intl.string(Chunk388032.t.swsWWF)}><Chunk481060.q4e options={[{
          label: Chunk388032.intl.string(Chunk388032.t.nBmDra),
          value: Chunk981631.OYC.ALWAYS
        }, {
          label: Chunk388032.intl.string(Chunk388032.t["2OvIZW"]),
          value: Chunk981631.OYC.ONLY_WHILE_SPEAKING
        }]} className={Chunk91481.select} onChange={e => _.Z.setDisplayUserMode(e)} value={Chunk348327} /></e_>}{<e_ title={Chunk388032.intl.string(Chunk388032.t["X/Uyzc"])} titleId={ef}><div className={Chunk91481.sliderContainer}><Chunk481060.iRW initialValue={Chunk392711} onValueRender={e => e < 1 ? ec.intl.string(ec.t.nrUzFB) : "".concat(Math.floor(e))} minValue={0} maxValue={25} onValueChange={function(e) {
            null != d && (e < 1 ? (0, x.zG)(d.id, {
              voiceStatesMaxShown: eo.Og
            }) : (0, x.zG)(d.id, {
              voiceStatesMaxShown: Math.floor(e)
            }))
          }} markers={eb} barStyles={{
            background: Chunk481060.TVs.colors.BACKGROUND_MOD_STRONG.css
          }} fillStyles={{
            background: Chunk481060.TVs.colors.BG_BRAND.css
          }} aria-labelledby={ef} onMarkerRender={e => e < 1 ? ec.intl.string(ec.t.nrUzFB) : "".concat(Math.floor(e))} /></div></e_>}</div>
}

function eZ() {
  let [e, t] = (0, Chunk243778.US)([Chunk704215.z.OVERLAY_OOP_SETTINGS_NUX], true, true), n = () => {
    exports(Chunk921944.L.DISMISS)
  };
  return ((0, Chunk493773.ZP)(() => () => {
    exports(Chunk921944.L.AUTO_DISMISS)
  }), module !== Chunk704215.z.OVERLAY_OOP_SETTINGS_NUX) ? null : <div className={Chunk91481.overlaySettingsNux}>{<div><img src={Chunk131970.Z} alt={Chunk388032.intl.string(Chunk388032.t.mdXZh4)} className={Chunk91481.nuxFirstImage} /></div>}{<div><div className={Chunk91481.mainTitleContainer}>{<Chunk481060.X6q variant={"heading-xl/medium"} color={"header-primary"}>{Chunk388032.intl.string(Chunk388032.t.jzjJQk)}</Chunk481060.X6q>}{<Chunk481060.Text variant={"text-md/normal"} color={"text-muted"}>{Chunk388032.intl.string(Chunk388032.t["5dOfxc"])}</Chunk481060.Text>}</div></div>}{<div><img src={Chunk730462.Z} alt={Chunk388032.intl.string(Chunk388032.t.mdXZh4)} className={Chunk91481.nuxUserSettingsImage} /></div>}{<div data-button-hoisted-classname-wrapper={true} className={Chunk91481.closeCircleButton}><Chunk481060.zxk variant={"primary"} text={Chunk388032.intl.string(Chunk388032.t.Q26diI)} onClick={() => require()} /></div>}{<div className={Chunk91481.nuxDivider} />}</div>
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
  } = (0, p.cj)([$.default], () => ({
    disableClickableRegions: $.default.disableClickableRegions,
    shouldShowKeybindIndicators: $.default.showKeybindIndicators
  }));
  return <div className={ed.overlayEnabledSettingsContainer}>{<ey />}{o && <e_><h.j7V value={d} onChange={e => _.Z.setShowKeybindIndicators(e)} hideBorder={true}>{ec.intl.string(ec.t.XZTl9v)}</h.j7V></e_>}{null != s && <e_>{<div className={ed.limitedInteractionOverrideContainer}>{<h.Text variant={"text-md/semibold"} color={"header-primary"}>{ec.intl.string(ec.t.wgVQND)}</h.Text>}{<h.Text variant={"text-xs/normal"} color={"text-muted"}>{ec.intl.string(ec.t["5SsyFx"])}</h.Text>}</div>}{<h.j7V value={a || l} disabled={l} onChange={e => {
          null != n && _.Z.setLimitedInteractionOverride(n.id, e)
        }} hideBorder={true} />}</e_>}{<e_>{<div className={ed.limitedInteractionOverrideContainer}>{<h.Text variant={"text-md/semibold"} color={"header-primary"}>{ec.intl.string(ec.t["+eFXxs"])}</h.Text>}{<h.Text variant={"text-xs/normal"} color={"text-muted"}>{ec.intl.string(ec.t.kivMAg)}</h.Text>}</div>}{<h.j7V value={!c} onChange={function() {
          _.Z.setDisableClickableRegions(!c)
        }} hideBorder={true} />}</e_>}</div>
}

function ek(e) {
  let {
    className: t,
    showHeader: n
  } = e, {
    runningGame: r,
    runningGameApplication: s
  } = function() {
    let e = (0, p.e7)([W.Z], () => W.Z.getStreamerActiveStreamMetadata()),
      t = (0, p.e7)([T.ZP], () => {
        let e = T.ZP.getVisibleGame();
        return null == e ? null : e
      }, [], o()),
      [n] = (0, v.Z)([null != e && null != e.id ? e.id : null != t && null != t.id ? t.id : true]);
    return {
      runningGame: t,
      runningGameApplication: n
    }
  }(), a = (0, D.o4)("user_settings").overlayV3UI, l = (0, p.e7)([X.default], () => X.default.getCurrentUser());
  (0, C.ZP)(() => {
    if (en.isPlatformEmbedded) return (0, I.Ky)(), I.P7
  });
  let c = ex(eh);
  return (m().isEqual(c, eh) || (ee.default.track(es.rMx.OVERLAY_SETTINGS_UPDATED, c), eh = c), null == l) ? null : <i.Fragment>{<h.hjN tag={h.RB0.H1} title={ec.intl.string(ec.t["9cb1U1"])}>{a ? <eZ /> : null}{<div className={ed.overlayEnabledSettingsContainer}>{<ev runningGame={r} runningGameApplication={s} />}{<eN />}{<eI />}</div>}{<div className={ed.settingsDivider} />}</h.hjN>}{<h.hjN>{<ew runningGame={r} runningGameApplication={s} />}{<div className={ed.settingsDivider} />}</h.hjN>}{<h.hjN title={ec.intl.string(ec.t.r1TZfn)}>{<eD />}{<div className={ed.settingsDivider} />}</h.hjN>}{<h.hjN><eP /></h.hjN>}</i.Fragment>
}