/** Chunk was on 82575 **/
/** chunk id: 790076, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => eW,
  DA: () => eC,
  F: () => eF,
  F1: () => ew,
  G6: () => ev,
  Gj: () => ek,
  Gk: () => eV,
  PP: () => eT,
  VQ: () => eY,
  fE: () => eL,
  nR: () => eG,
  ze: () => eM
}), require("./228524.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
  Chunk812729 = require("./812729.js"),
  o = require.n(Chunk812729),
  Chunk284009 = require("./284009.js"),
  d = require.n(Chunk284009),
  Chunk735438 = require("./735438.js"),
  g = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk554146 = require("./554146.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk544420 = require("./544420.js"),
  Chunk97260 = require("./97260.js"),
  Chunk391973 = require("./391973.js"),
  Chunk684013 = require("./684013.js"),
  Chunk117178 = require("./117178.jsx"),
  Chunk56562 = require("./56562.js"),
  Chunk964486 = require("./964486.js"),
  Chunk793574 = require("./793574.js"),
  Chunk587895 = require("./587895.js"),
  Chunk429913 = require("./429913.js"),
  Chunk379848 = require("./379848.jsx"),
  Chunk15285 = require("./15285.js"),
  Chunk286237 = require("./286237.js"),
  Chunk843402 = require("./843402.js"),
  Chunk769015 = require("./769015.jsx"),
  Chunk496885 = require("./496885.jsx"),
  Chunk810412 = require("./810412.js"),
  Chunk93465 = require("./93465.js"),
  Chunk41984 = require("./41984.js"),
  Chunk589051 = require("./589051.js"),
  Chunk994322 = require("./994322.js"),
  Chunk833551 = require("./833551.js"),
  Chunk515183 = require("./515183.js"),
  Chunk592598 = require("./592598.js"),
  Chunk395011 = require("./395011.js"),
  Chunk663677 = require("./663677.jsx"),
  Chunk682763 = require("./682763.js"),
  Chunk237984 = require("./237984.jsx"),
  Chunk897720 = require("./897720.js"),
  Chunk393172 = require("./393172.jsx"),
  Chunk968898 = require("./968898.jsx"),
  Chunk847521 = require("./847521.js"),
  Chunk942405 = require("./942405.js"),
  Chunk824189 = require("./824189.jsx"),
  Chunk95701 = require("./95701.js"),
  Chunk427157 = require("./427157.js"),
  Chunk288737 = require("./288737.js"),
  Chunk760751 = require("./760751.js"),
  Chunk555528 = require("./555528.js"),
  Chunk189081 = require("./189081.js"),
  Chunk287809 = require("./287809.js"),
  Chunk532624 = require("./532624.js"),
  Chunk242286 = require("./242286.js"),
  Chunk256415 = require("./256415.js"),
  Chunk954571 = require("./954571.js"),
  Chunk403362 = require("./403362.js"),
  Chunk723702 = require("./723702.js"),
  Chunk350535 = require("./350535.js"),
  Chunk9302 = require("./9302.js"),
  Chunk780964 = require("./780964.js"),
  Chunk790174 = require("./790174.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk49999 = require("./49999.js"),
  Chunk672396 = require("./672396.js");
require("./392164.js");
var Chunk985018 = require("./985018.jsx"),
  Chunk202942 = require("./202942.js"),
  Chunk130324 = require("./130324.js"),
  Chunk966040 = require("./966040.js");

function eS(e) {
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

function eE(e, t) {
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
let ef = ey(null),
  ev = 1,
  eT = 25,
  eC = [0, 5, 10, 15, 20, 25];

function ey(e) {
  var t;
  let n = er.default.getNotificationPositionMode(),
    i = n !== ex.G6Q.DISABLED,
    s = es.Ay.getOverlayKeybind(),
    l = es.Ay.getOverlayChatKeybind();
  return {
    enabled: el.default.enabled,
    notifications_enabled: i,
    notifications_position: i ? n : null,
    text_notifications_mode: U.A.isNotificationDisabled(eA.KS.TextChat) ? "DISABLED" : "ENABLED",
    hotkey: null != s ? (0, ed.dI)(s.shortcut) : null,
    text_activation_hotkey: null != l ? (0, ed.dI)(l.shortcut) : null,
    text_opacity_slider: er.default.getTextWidgetOpacity(),
    old_enabled: null != (t = null == e ? true : e.enabled) ? t : el.default.enabled
  }
}

function eN(e) {
  let {
    header: t,
    icon: n,
    title: s,
    description: l,
    action: a,
    hint: o,
    warning: c,
    onClick: d,
    "aria-label": u,
    className: g
  } = e;
  return (0, i.jsxs)("div", {
    className: r()(ej.HS, g),
    children: [(0, i.jsxs)(A.sqX, {
      "aria-label": u,
      onClick: d,
      children: [null != t && (0, i.jsx)("div", {
        className: ej.x_,
        children: t
      }), (0, i.jsxs)("div", {
        className: ej.rN,
        children: [null != n && (0, i.jsx)("div", {
          className: ej.$t,
          children: n
        }), (0, i.jsxs)("div", {
          className: ej.c8,
          children: [(0, i.jsx)(A.Text, {
            variant: "text-md/medium",
            color: "text-strong",
            className: ej.SZ,
            children: s
          }), null != l && (0, i.jsx)(A.Text, {
            variant: "text-sm/normal",
            color: "text-subtle",
            children: l
          }), null != o && (0, i.jsx)(A.Text, {
            variant: "text-xxs/medium",
            color: "text-muted",
            children: o
          })]
        }), (0, i.jsx)("div", {
          className: ej.a$,
          children: a
        })]
      })]
    }), (0, i.jsx)("div", {
      className: ej.Om,
      children: c
    })]
  })
}

function eI(e) {
  let {
    children: t,
    className: n,
    onExpand: l
  } = e, a = function(e, t) {
    if (null == e) return {};
    var n, i, s, l = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (s = 0, n = Reflect.ownKeys(e); s < n.length; s++) i = n[s], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (l[i] = e[i]);
      return l
    }
    if (l = function(e, t) {
        if (null == e) return {};
        var n, i, s = {},
          l = Object.getOwnPropertyNames(e);
        for (i = 0; i < l.length; i++) n = l[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]);
        return s
      }(e, t), Object.getOwnPropertySymbols)
      for (s = 0, n = Object.getOwnPropertySymbols(e); s < n.length; s++) i = n[s], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (l[i] = e[i]);
    return l
  }(e, ["children", "className", "onExpand"]), [o, c] = s.useState(false);
  return (0, i.jsx)(A.Nt8, {
    className: ej.uR,
    collapsibleContent: (0, i.jsx)("div", {
      className: ej.oV,
      children: t
    }),
    children: e => {
      let {
        onClick: t
      } = e;
      return (0, i.jsx)(eN, eE(eS({}, a), {
        onClick: e => {
          var n;
          c(n = !o), null == l || l(n), null == t || t(e)
        },
        className: r()(ej.AC, n),
        action: (0, i.jsxs)("div", {
          className: ej.rc,
          children: [a.action, o ? (0, i.jsx)(A.abt, {
            size: "custom",
            width: 20,
            height: 20,
            color: "var(--interactive-text-active)"
          }) : (0, i.jsx)(A._BQ, {
            size: "custom",
            width: 20,
            height: 20,
            color: "var(--interactive-text-active)"
          })]
        })
      }))
    }
  })
}
let e_ = new Set([Chunk41984.AR.INITIALIZING, Chunk41984.AR.WAITING_FOR_SCREEN_TYPE_RESOLUTION, Chunk41984.AR.WAITING_FOR_MODULE_TRACKING, Chunk41984.AR.WAITING_FOR_OVERLAY_OPEN, Chunk41984.AR.WAITING_FOR_POPOUT_OPEN, Chunk41984.AR.WAITING_FOR_MODULE_POPOUT_CAPTURE, Chunk41984.AR.WAITING_FOR_REACT_INITIALIZATION, Chunk41984.AR.WAITING_FOR_PID_FOCUS, Chunk41984.AR.WAITING_FOR_SUCCESSFUL_SHOW]),
  eP = e => {
    e.preventDefault(), e.stopPropagation()
  };

function eG() {
  var e, t, n;
  let {
    runningGame: l,
    runningGameApplication: r
  } = (0, I.A)(), a = null == l ? true : l.pid, c = (0, h.bG)([V.default], () => null == l || null == a ? null : V.default.getTrackedGameByPid(a), [l, a], o()), {
    enabledLegacy: d,
    enabledOOP: u
  } = (0, h.cf)([ee.A, en.A], () => {
    if (null == l && null == c) return {
      enabledLegacy: false,
      enabledOOP: false
    };
    if (null == l) {
      var e, t;
      return {
        enabledLegacy: null != (e = null == c ? true : c.legacyEnabled) && e,
        enabledOOP: null != (t = null == c ? true : c.oopEnabled) && t
      }
    }
    return (0, N.hw)(l, false, [ee.A, en.A])
  }, [l, c]), g = (0, h.bG)([N.Ay, ee.A, en.A], () => null == l ? null : (0, N.xU)(l, N.Ay, ee.A, en.A), [l], o()), [x, j] = s.useState(u), [b, S] = s.useState(d), [v, T] = s.useState(false);
  s.useEffect(() => {
    j(u), S(d)
  }, [u, d]);
  let C = !(0, eu.supportsLegacy)(),
    y = !(0, eu.supportsOutOfProcess)(),
    {
      legacyEnabled: _,
      oopEnabled: D
    } = (0, h.cf)([V.default], () => V.default.getGlobalEnabledStatus()),
    k = (e, t) => {
      var n, i, s;
      if (null == l) return;
      let r = false,
        a = false;
      switch (t) {
        case R.OverlayToggledClientSettingType.LEGACY_GAME:
          S(e), m.A.toggleOverlay(l, e, x), r = !e && b;
          break;
        case R.OverlayToggledClientSettingType.OOP_GAME:
          j(e), m.A.toggleOverlay(l, b, e), a = !e && x;
          break;
        case R.OverlayToggledClientSettingType.LEGACY:
          O.A.setEnabled(e, D), (0, R.Q3)(e, R.OverlayToggledClientSettingType.LEGACY, null != (n = l.id) ? n : null);
          break;
        case R.OverlayToggledClientSettingType.OOP:
          O.A.setEnabled(_, e), (0, R.Q3)(e, R.OverlayToggledClientSettingType.OOP, null != (i = l.id) ? i : null)
      }(r || a) && (0, Y.L)(r ? R.OverlayToggledClientSettingType.LEGACY_GAME : R.OverlayToggledClientSettingType.OOP_GAME, null != (s = l.id) ? s : null)
    },
    w = C && y,
    M = !_ && !D,
    U = !x && !_ && b && !C,
    H = !b && !D && x && !y,
    B = (null == c ? true : c.overlayMethod) === L.Ue.Disabled,
    F = (null == c ? true : c.state) === L.AR.OVERLAY_RENDERING && !B,
    z = (null == c ? true : c.state) != null && e_.has(c.state) && !B,
    W = (null == c ? true : c.overlayMethod) === L.Ue.OutOfProcess,
    K = (null == c ? true : c.overlayMethod) === L.Ue.OutOfProcessLimitedInteraction,
    J = (null == c ? true : c.overlayMethod) === L.Ue.Hook,
    Q = (null == c ? true : c.state) === L.AR.OVERLAY_CRASHED || (null == c ? true : c.state) === L.AR.OVERLAY_CRASHED_DISABLED,
    q = !x && !b,
    [Z, $] = (() => {
      switch (true) {
        case F && W:
          return [em.intl.format(em.t.hFVBIg, {
            overlayMethod: em.intl.string(em.t.a3eXSw),
            overlayMethodHook: function(e, t) {
              return (0, i.jsx)(A.Text, {
                tag: "span",
                variant: "text-sm/medium",
                color: "text-feedback-positive",
                children: e
              }, t)
            }
          }), null];
        case F && K:
          return [em.intl.format(em.t.hFVBIg, {
            overlayMethod: em.intl.string(em.t["506Aba"]),
            overlayMethodHook: function(e, t) {
              return (0, i.jsx)(A.Text, {
                tag: "span",
                variant: "text-sm/medium",
                color: "text-feedback-warning",
                children: e
              }, t)
            }
          }), null];
        case F && J:
          return [em.intl.format(em.t.hFVBIg, {
            overlayMethod: em.intl.string(em.t.bvlpDR),
            overlayMethodHook: function(e, t) {
              return (0, i.jsx)(A.Text, {
                tag: "span",
                variant: "text-sm/medium",
                color: "text-strong",
                children: e
              }, t)
            }
          }), function() {
            var e, t;
            switch (true) {
              case (null == c ? true : c.fullscreenType) !== E.aI.BORDERLESS_FULLSCREEN:
                return em.intl.string(em.t.mJmbeC);
              case y:
                return em.intl.string(em.t.C7bLTQ);
              case !(null != (e = null == c ? true : c.oopEnabled) && e):
                return em.intl.string(em.t.WiY24u);
              case !D:
                return em.intl.string(em.t.cAFVsL);
              case !(null != (t = null == c ? true : c.supportsOutOfProcess) && t):
                return em.intl.string(em.t.XcGEcs);
              default:
                return em.intl.string(em.t.bJXH2v)
            }
          }()];
        case Q:
          return [em.intl.string(em.t.OFC2aw), null];
        case w:
          return [em.intl.string(em.t.m7X4az), null];
        case M:
          return [em.intl.string(em.t["9DUS5l"]), null];
        case q:
          return [em.intl.string(em.t.nQ9EdJ), null];
        case U:
        case H:
          return [em.intl.string(em.t.VWUn0a), null];
        case z:
          if (W) return [em.intl.string(em.t["s8+CFq"]), null];
          if (J) return [em.intl.string(em.t.JEEdqt), null];
          if (K) return [em.intl.string(em.t.pzBMwY), null];
          return [em.intl.string(em.t["2Xhy9k"]), null];
        case null == c:
          return [em.intl.string(em.t.vwHPRi), null];
        case B: {
          let e = (null == c ? true : c.fullscreenType) === E.aI.FULLSCREEN ? em.intl.string(em.t.mJmbeC) : null;
          return [em.intl.string(em.t.VPW4XY), e]
        }
        default:
          return [em.intl.string(em.t.ONovP5), null]
      }
    })();
  (0, f.Ay)(() => {
    m.A.getDetectableGames()
  });
  let [et, ei] = s.useMemo(() => z ? ["text-muted", A.LU0.colors.TEXT_MUTED.css] : F && K ? ["text-feedback-warning", A.LU0.colors.TEXT_FEEDBACK_WARNING.css] : F && W ? ["text-feedback-positive", A.LU0.colors.TEXT_FEEDBACK_POSITIVE.css] : F && J ? ["text-strong", A.LU0.colors.TEXT_STRONG.css] : ["interactive-text-default", A.LU0.colors.INTERACTIVE_TEXT_DEFAULT.css], [z, F, K, W, J]);
  return null == l ? null : (0, i.jsxs)(eI, {
    onExpand: T,
    className: v ? ej.tx : true,
    title: (0, i.jsxs)(i.Fragment, {
      children: [null != (e = null != (t = null != (n = null == r ? true : r.name) ? n : null == g ? true : g.name) ? t : null == l ? true : l.gameName) ? e : "", null != g && g.verified ? (0, i.jsx)(p.m, {
        text: em.intl.string(em.t["4PJP5p"]),
        children: (0, i.jsx)(G.A, {
          size: 16,
          color: A.LU0.colors.BACKGROUND_BRAND.css,
          children: (0, i.jsx)(A.Uzd, {
            size: "custom",
            width: 16,
            height: 16,
            color: A.LU0.colors.WHITE.css
          })
        })
      }) : null]
    }),
    description: Z,
    hint: null != $ ? $ : true,
    header: (0, i.jsxs)(i.Fragment, {
      children: [F || z ? (0, i.jsx)(A.kN9, {
        size: "xxs",
        color: ei
      }) : (0, i.jsx)("div", {
        className: ej.W4
      }), (0, i.jsx)(A.Text, {
        variant: "text-xs/semibold",
        color: et,
        children: em.intl.string(em.t.CDOx3w)
      })]
    }),
    icon: (0, i.jsx)(P.A, {
      game: r,
      pid: null == l ? true : l.pid,
      size: P.M.MEDIUM
    }),
    "aria-label": em.intl.string(em.t["87O5GC"]),
    action: (0, i.jsx)(A.DUT, {
      onClick: e => eP(e),
      children: (0, i.jsx)(A.dOG, {
        checked: x && D || b && _,
        disabled: w,
        onChange: e => {
          ((e, t) => {
            if (null == l) return;
            let n = false,
              i = false;
            switch (t) {
              case "game":
                m.A.toggleOverlay(l, e, e), S(e), j(e), n = !e && b, i = !e && x;
                break;
              case "global":
                O.A.setEnabled(e, e), n = !e && _, i = !e && D;
                break;
              case "both":
                O.A.setEnabled(e, e), m.A.toggleOverlay(l, e, e), S(e), j(e), n = !e && _ || !e && b, i = !e && D || !e && x
            }
            let s = null;
            if (n ? s = "game" === t ? R.OverlayToggledClientSettingType.LEGACY_GAME : R.OverlayToggledClientSettingType.LEGACY : i && (s = "game" === t ? R.OverlayToggledClientSettingType.OOP_GAME : R.OverlayToggledClientSettingType.OOP), null != s) {
              var r;
              (0, Y.L)(s, null != (r = l.id) ? r : null)
            }
          })(e, ((e, t) => {
            let n = !t && e,
              i = !D && x,
              s = !_ && b,
              l = !x && D,
              r = !b && _;
            switch (true) {
              case n && (i || s) && (l || r):
                return "both";
              case n && (i || s):
                return "global";
              default:
                return "game"
            }
          })(e, x && D || b && _))
        }
      })
    }),
    warning: (0, i.jsx)(X.A, {
      className: ej.Hh,
      game: l
    }),
    children: [(0, i.jsx)(eN, {
      title: em.intl.string(em.t["7BlVIs"]),
      description: em.intl.string(em.t.ndgADE),
      hint: D ? true : em.intl.string(em.t.cAFVsL),
      "aria-label": em.intl.string(em.t["7BlVIs"]),
      action: (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(A.dOG, {
          checked: x && D,
          disabled: y,
          onChange: e => {
            e && !D ? k(e, R.OverlayToggledClientSettingType.OOP) : k(e, R.OverlayToggledClientSettingType.OOP_GAME)
          }
        }), (0, i.jsx)("div", {
          className: ej.Kz
        })]
      })
    }), (0, i.jsx)(eN, {
      title: em.intl.string(em.t.BfFpW1),
      description: em.intl.string(em.t.OzInYk),
      hint: _ ? true : em.intl.string(em.t["3sYHXm"]),
      "aria-label": em.intl.string(em.t.BfFpW1),
      action: (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(A.dOG, {
          checked: b && _,
          disabled: C,
          onChange: e => {
            e && !_ ? k(e, R.OverlayToggledClientSettingType.LEGACY) : k(e, R.OverlayToggledClientSettingType.LEGACY_GAME)
          }
        }), (0, i.jsx)("div", {
          className: ej.Kz
        })]
      })
    })]
  })
}

function eR(e) {
  let {
    game: t,
    gameApplication: n
  } = e, l = s.useMemo(() => null == t ? null : "pid" in t ? t.pid : null, [t]), r = (0, h.bG)([T.A], () => null != n ? n : T.A.getApplication(null == t ? true : t.id), [n, t]);
  return (0, i.jsx)(P.A, {
    game: r,
    pid: l,
    size: P.M.SMALL
  })
}

function eD(e) {
  let {
    rawGame: t,
    gameApplication: n,
    supportDisabled: l,
    getEnabledFromStatus: r,
    onChange: a,
    clientSettingType: o,
    ariaLabel: c
  } = e, d = (0, h.cf)([N.Ay, ee.A, en.A], () => (0, N.xU)(t, N.Ay, ee.A, en.A)), u = (0, h.cf)([ee.A, en.A], () => (0, N.hw)(t, false, [ee.A, en.A]), [t]), g = r(u), [x, p] = s.useState(g);
  return s.useEffect(() => {
    p(g)
  }, [g]), (0, i.jsx)(eN, {
    title: t.name,
    icon: (0, i.jsx)(eR, {
      game: d,
      gameApplication: n
    }),
    "aria-label": c,
    action: (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(A.dOG, {
        checked: x,
        disabled: l,
        onChange: e => (e => {
          let n = !e && x;
          if (p(e), a(e, d, u), n) {
            var i, s;
            (0, Y.L)(o, null != (i = null != (s = d.id) ? s : null == t ? true : t.id) ? i : null)
          }
        })(e)
      }), (0, i.jsx)("div", {
        className: ej.Kz
      })]
    })
  })
}

function eL() {
  let [e, t] = s.useState(false), {
    legacyEnabled: n,
    oopEnabled: l
  } = (0, h.cf)([V.default], () => V.default.getGlobalEnabledStatus()), r = (0, h.yK)([N.Ay], () => N.Ay.getGamesSeen(true)).filter(e => !(0, J.n1)(e)), a = (0, C.A)(r.map(e => e.id)), o = !(0, eu.supportsLegacy)(), c = e => {
    var t, i;
    O.A.setEnabled(e, l);
    let s = null != (t = null == (i = N.Ay.getCurrentGameForAnalytics()) ? true : i.id) ? t : null;
    (0, R.Q3)(e, R.OverlayToggledClientSettingType.LEGACY, s), !e && n && (0, Y.L)(R.OverlayToggledClientSettingType.LEGACY, s)
  }, d = (e, t, n) => {
    let {
      enabledOOP: i
    } = n;
    m.A.toggleOverlay(t, e, i)
  }, u = s.useMemo(() => (0, eu.supportsLegacy)() ? o ? em.intl.string(em.t.r9jEVw) : em.intl.string(em.t.OzInYk) : em.intl.string(em.t["8Ox6/E"]), [o]);
  return 0 === r.length ? (0, i.jsx)(eN, {
    title: em.intl.string(em.t.BfFpW1),
    description: u,
    "aria-label": em.intl.string(em.t.BfFpW1),
    className: ej.dA,
    action: (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(A.dOG, {
        checked: n,
        disabled: o,
        onChange: e => c(e)
      }), eA.OX && (0, i.jsx)("div", {
        className: ej.Kz
      })]
    })
  }) : (0, i.jsxs)(eI, {
    onExpand: t,
    className: e ? ej.tx : true,
    title: em.intl.string(em.t.BfFpW1),
    description: u,
    "aria-label": em.intl.string(em.t.BfFpW1),
    action: (0, i.jsx)(A.DUT, {
      onClick: e => eP(e),
      children: (0, i.jsx)(A.dOG, {
        checked: n,
        disabled: o,
        onChange: e => c(e)
      })
    }),
    children: [(0, i.jsx)("div", {
      className: ej.SC,
      children: (0, i.jsx)(A.Text, {
        variant: "text-xs/semibold",
        color: "text-muted",
        children: em.intl.string(em.t.FzoWRo)
      })
    }), (0, i.jsx)(A.IpV, {
      className: ej.XG,
      children: r.map((e, t) => (0, i.jsx)(eD, {
        rawGame: e,
        clientSettingType: R.OverlayToggledClientSettingType.LEGACY_GAME,
        supportDisabled: o,
        gameApplication: a[t],
        getEnabledFromStatus: e => {
          let {
            enabledLegacy: t
          } = e;
          return t
        },
        onChange: d,
        ariaLabel: em.intl.format(em.t.hvPYsF, {
          gameName: e.name
        }).toString()
      }, e.id))
    })]
  })
}

function ek() {
  let [e, t] = s.useState(false), {
    oopEnabled: n,
    legacyEnabled: l
  } = (0, h.cf)([V.default], () => V.default.getGlobalEnabledStatus()), r = !(0, eu.supportsOutOfProcess)(), a = (0, h.yK)([N.Ay], () => N.Ay.getGamesSeen(true)).filter(e => !(0, J.n1)(e)), o = (0, C.A)(a.map(e => e.id)), c = e => {
    var t, i;
    let s = !e && n;
    O.A.setEnabled(l, e);
    let r = null != (t = null == (i = N.Ay.getCurrentGameForAnalytics()) ? true : i.id) ? t : null;
    (0, R.Q3)(e, R.OverlayToggledClientSettingType.OOP, r), s && (0, Y.L)(R.OverlayToggledClientSettingType.OOP, r)
  }, d = (e, t, n) => {
    let {
      enabledLegacy: i
    } = n;
    m.A.toggleOverlay(t, e, i)
  }, u = s.useMemo(() => eA.OX ? r ? em.intl.string(em.t.C7bLTQ) : em.intl.string(em.t.ndgADE) : em.intl.string(em.t.m7X4az), [r]);
  return 0 === a.length ? (0, i.jsx)(eN, {
    title: em.intl.string(em.t["7BlVIs"]),
    description: u,
    "aria-label": em.intl.string(em.t["7BlVIs"]),
    className: ej.dA,
    action: (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(A.dOG, {
        checked: n,
        disabled: r,
        onChange: e => c(e)
      }), eA.OX && (0, i.jsx)("div", {
        className: ej.Kz
      })]
    })
  }) : (0, i.jsxs)(eI, {
    onExpand: t,
    className: e ? ej.tx : true,
    title: em.intl.string(em.t["7BlVIs"]),
    description: u,
    "aria-label": em.intl.string(em.t["7BlVIs"]),
    action: (0, i.jsx)(A.DUT, {
      onClick: e => eP(e),
      children: (0, i.jsx)(A.dOG, {
        checked: n,
        disabled: r,
        onChange: e => c(e)
      })
    }),
    children: [(0, i.jsx)("div", {
      className: ej.SC,
      children: (0, i.jsx)(A.Text, {
        variant: "text-xs/semibold",
        color: "text-muted",
        children: em.intl.string(em.t.FzoWRo)
      })
    }), (0, i.jsx)(A.IpV, {
      className: ej.XG,
      children: a.map((e, t) => (0, i.jsx)(eD, {
        rawGame: e,
        clientSettingType: R.OverlayToggledClientSettingType.OOP_GAME,
        gameApplication: o[t],
        supportDisabled: r,
        getEnabledFromStatus: e => {
          let {
            enabledOOP: t
          } = e;
          return t
        },
        onChange: d,
        ariaLabel: em.intl.format(em.t.nByTd3, {
          gameName: e.name
        }).toString()
      }, e.id))
    })]
  })
}

function ew() {
  return (0, k.X4)(v.A.USER_SETTINGS) ? (0, i.jsx)(eN, {
    title: em.intl.string(em.t["z4/l+V"]),
    description: em.intl.string(em.t["3aZq/0"]),
    action: (0, i.jsx)(A.Button, {
      variant: "primary",
      text: em.intl.string(em.t.s2nVhG),
      onClick: () => {
        (0, F.b)(v.A.USER_SETTINGS, ex.BRT.APP)
      }
    }),
    "aria-label": em.intl.string(em.t["z4/l+V"])
  }) : null
}

function eV(e) {
  var t;
  let {
    isLegacySettings: n = false
  } = e, s = (0, h.bG)([es.Ay], () => es.Ay.getOverlayKeybind()), l = !(0, eu.supportsLegacy)(), r = !(0, eu.supportsOutOfProcess)(), [a, o] = (0, h.yK)([N.Ay], () => [N.Ay.canShowAdminWarning, N.Ay.getVisibleGame()], []), c = (0, Q.NP)(), u = null != o && o.elevated && a && !c, g = !(0, es.DV)(null != (t = null == s ? true : s.shortcut) ? t : []);
  return (0, i.jsx)("div", {
    className: ej.hc,
    children: (0, i.jsxs)("div", {
      className: ej.eH,
      children: [(0, i.jsxs)("div", {
        className: ej.Bu,
        children: [(0, i.jsx)(A.Text, {
          variant: n ? "text-md/semibold" : "text-md/medium",
          color: "text-strong",
          children: em.intl.string(em.t.VsAZcC)
        }), u && (0, i.jsx)(A.Text, {
          variant: "text-xs/normal",
          color: "text-feedback-warning",
          className: ej.y7,
          children: em.intl.string(em.t.NsowVa)
        }), g && (0, i.jsx)(A.Text, {
          variant: "text-xs/normal",
          color: "text-feedback-warning",
          className: ej.y7,
          children: em.intl.string(em.t["UNoTw/"])
        })]
      }), (0, i.jsx)("div", {
        className: ej.IH,
        children: (0, i.jsx)(S.A, {
          disabled: l && r,
          defaultValue: null != s ? s.shortcut : [],
          onChange: function(e) {
            d()(null != s, "Keybind should never be undefined"), j.A.setKeybind(eE(eS({}, s), {
              shortcut: e
            }))
          }
        })
      })]
    })
  })
}

function eM(e) {
  return [{
    title: em.t.eVE4LX,
    description: em.t["72WNqk"],
    disabledSetting: D.M.TEXT_CHAT,
    key: eg.X.OVERLAY_NOTIFICATIONS_TEXT_CHAT
  }, {
    title: em.t.oifnSh,
    description: em.t.bgU5r0,
    disabledSetting: D.M.WELCOME_GENERAL,
    key: eg.X.OVERLAY_NOTIFICATIONS_WELCOME
  }, {
    title: em.t.hqsZJW,
    description: em.t.kHjdqc,
    disabledSetting: D.M.GO_LIVE_NUDGE,
    key: eg.X.OVERLAY_NOTIFICATIONS_GO_LIVE
  }, {
    title: em.t.sop3rn,
    description: em.t.pjgffc,
    disabledSetting: D.M.GAME_ACTIVITY,
    key: eg.X.OVERLAY_NOTIFICATIONS_GAME_ACTIVITY
  }, {
    title: em.t["2QVhbb"],
    description: em.t.wQ4ilB,
    disabledSetting: D.M.NOW_PLAYING,
    key: eg.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING
  }, e && {
    title: em.t["5/21FT"],
    description: em.t.EIzwfA,
    disabledSetting: D.M.FRIEND_STREAM_WATCH_NUDGE,
    key: eg.X.OVERLAY_NOTIFICATIONS_FRIEND_STREAM_WATCH,
    usePredicate: () => {
      let {
        enabled: e
      } = (0, k.QC)("OverlayV3StreamWatchNudge");
      return e
    }
  }].filter(e => false !== e).filter(Boolean)
}

function eU() {
  let {
    enabled: e
  } = (0, k.QC)("OverlayV3StreamWatchNudge"), t = eM(e), n = (0, h.bG)([U.A], () => U.A.getDisabledNotifications());
  return (0, i.jsxs)("div", {
    className: ej.AO,
    children: [(0, i.jsx)(A.Heading, {
      variant: "heading-md/semibold",
      color: "text-strong",
      children: em.intl.string(em.t.xOE5bA)
    }), t.map(e => {
      let t;
      return (0, i.jsxs)("div", {
        className: ej.vx,
        children: [(0, i.jsxs)("div", {
          className: ej.LS,
          children: [(0, i.jsx)(A.Text, {
            variant: "text-sm/semibold",
            color: "text-strong",
            children: em.intl.string(e.title)
          }), (0, i.jsx)(A.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: em.intl.string(e.description)
          })]
        }), (0, i.jsx)(A.dOG, {
          checked: !n.has(e.disabledSetting),
          onChange: (t = e.disabledSetting, e => {
            O.A.setNotificationDisabledSetting(t, !e)
          })
        })]
      }, e.disabledSetting)
    })]
  })
}

function eH(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    n = arguments.length > 2 && true !== arguments[2] && arguments[2],
    i = arguments.length > 3 && true !== arguments[3] && arguments[3],
    s = "456" + Math.floor(1e6 * Math.random());
  return {
    voiceState: new $.A({
      channelId: "123",
      userId: s,
      sessionId: "789",
      mute: t,
      deaf: n,
      selfMute: false,
      selfDeaf: false,
      selfVideo: false,
      selfStream: false,
      discoverable: i
    }),
    user: new Z.A({
      id: s,
      username: e
    }),
    member: {
      nick: e,
      userId: s,
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

function eY(e) {
  var t, n;
  let l, {
      isLegacySettings: a = false
    } = e,
    o = (0, h.bG)([ei.default], () => ei.default.getCurrentUser()),
    {
      avatarSizeMode: c,
      displayNameMode: d,
      displayUserMode: u
    } = (0, h.cf)([er.default], () => ({
      avatarSizeMode: er.default.getAvatarSizeMode(),
      displayNameMode: er.default.getDisplayNameMode(),
      displayUserMode: er.default.getDisplayUserMode()
    })),
    [g] = s.useState(() => [eH(em.intl.string(em.t.C0ZDvo), true, false), eH(em.intl.string(em.t.iOtj8E), false, false, true), eH(em.intl.string(em.t["0oqNgL"]), false, true)]),
    x = (0, h.bG)([H.A, et.A], () => {
      let e = H.A.getWidgetByType(ex.uss.VOICE_V3);
      if (null == e) return null;
      let t = et.A.getWidget(e.id);
      return null != t && (0, z.ZO)(t) ? t : null
    }),
    p = null != (t = null == x || null == (n = x.meta) ? true : n.voiceStatesMaxShown) ? t : 8,
    m = [null != o ? ((l = eH(o.username)).user = o, l) : null, ...g].filter(eo.Vq),
    j = [new Map(m.map(e => [e.user.id, e])), m.map(e => e.user.id)],
    b = (0, i.jsx)(A.NPJ, {
      theme: ex.NJ8.MIDNIGHT,
      children: e => {
        var t, n;
        return (0, i.jsxs)("div", {
          className: r()(ej.Y5, e),
          children: [(0, i.jsx)("div", {
            className: ej.kJ,
            children: (0, i.jsx)(W.DH, {
              id: "voice-widget",
              title: em.intl.string(em.t.KNJ6Vq),
              channel: (0, q.createChannelRecord)({
                id: "123",
                name: "Test Channel",
                type: ex.rbe.GUILD_VOICE,
                guild_id: "456"
              }),
              overlayVoiceStates: j,
              displayNameMode: d,
              displayUserMode: u,
              avatarSizeMode: c,
              widget: ex.uss.VOICE,
              anchorLeft: true,
              application: null,
              stream: null,
              streamApplication: null,
              streamMetadata: null,
              locked: false,
              pinned: false,
              isSettingsPreview: true,
              isPreviewingInGame: false,
              maxDisplayedVoiceStates: p
            })
          }), (0, i.jsxs)("div", {
            className: ej.R$,
            children: [(0, i.jsx)(K.Pl, {
              children: em.intl.string(em.t.KNJ6Vq)
            }), (0, i.jsx)(K.CS, {}), (0, i.jsx)(K.O0, {
              id: null != (t = null == x ? true : x.id) ? t : "voice-widget",
              pinned: null != (n = null == x ? true : x.pinned) && n
            })]
          })]
        })
      }
    });
  return a ? b : (0, i.jsx)("div", {
    className: ej.F9,
    children: b
  })
}

function eB() {
  var e, t;
  let {
    avatarSizeMode: n,
    displayNameMode: s,
    displayUserMode: l
  } = (0, h.cf)([er.default], () => ({
    avatarSizeMode: er.default.getAvatarSizeMode(),
    displayNameMode: er.default.getDisplayNameMode(),
    displayUserMode: er.default.getDisplayUserMode()
  })), r = (0, h.bG)([H.A, et.A], () => {
    let e = H.A.getWidgetByType(ex.uss.VOICE_V3);
    if (null == e) return null;
    let t = et.A.getWidget(e.id);
    return null != t && (0, z.ZO)(t) ? t : null
  }), a = null != (e = null == r || null == (t = r.meta) ? true : t.voiceStatesMaxShown) ? e : 8;
  return (0, i.jsxs)("div", {
    className: ej.ri,
    children: [(0, i.jsx)(A.l6P, {
      label: em.intl.string(em.t.dnvZSg),
      options: [{
        id: "large",
        label: em.intl.string(em.t.YcOxtr),
        value: ex.OSZ.LARGE
      }, {
        id: "small",
        label: em.intl.string(em.t.BKIKqx),
        value: ex.OSZ.SMALL
      }],
      onSelectionChange: O.A.setAvatarSizeMode,
      value: n,
      selectionMode: "single",
      fullWidth: true
    }), (0, i.jsx)(A.l6P, {
      label: em.intl.string(em.t.J0dpcB),
      options: [{
        id: "always",
        label: em.intl.string(em.t.nBmDrT),
        value: ex.pwA.ALWAYS
      }, {
        id: "only-while-speaking",
        label: em.intl.string(em.t["2OvIZY"]),
        value: ex.pwA.ONLY_WHILE_SPEAKING
      }, {
        id: "never",
        label: em.intl.string(em.t.ekjlPL),
        value: ex.pwA.NEVER
      }],
      onSelectionChange: O.A.setDisplayNameMode,
      value: s,
      selectionMode: "single",
      fullWidth: true
    }), (0, i.jsx)(eY, {
      isLegacySettings: true
    }), (0, i.jsx)(A.l6P, {
      label: em.intl.string(em.t.swsWWC),
      options: [{
        id: "always",
        label: em.intl.string(em.t.nBmDrT),
        value: ex.f5z.ALWAYS
      }, {
        id: "only-while-speaking",
        label: em.intl.string(em.t["2OvIZY"]),
        value: ex.f5z.ONLY_WHILE_SPEAKING
      }],
      onSelectionChange: O.A.setDisplayUserMode,
      value: l,
      selectionMode: "single",
      fullWidth: true
    }), (0, i.jsx)("div", {
      className: ej.xJ,
      children: (0, i.jsx)(A.Apm, {
        label: em.intl.string(em.t["X/Uyzc"]),
        initialValue: a,
        onValueRender: e => e < ev ? em.intl.string(em.t.nrUzFL) : "".concat(Math.floor(e)),
        minValue: ev - 1,
        maxValue: eT,
        onValueChange: function(e) {
          null != r && (e < ev ? (0, b.cC)(r.id, {
            voiceStatesMaxShown: false
          }) : (0, b.cC)(r.id, {
            voiceStatesMaxShown: Math.floor(e)
          }))
        },
        markers: eC,
        barStyles: {
          background: A.LU0.colors.BACKGROUND_MOD_STRONG.css
        },
        fillStyles: {
          background: A.LU0.colors.BACKGROUND_BRAND.css
        },
        onMarkerRender: e => e < ev ? em.intl.string(em.t.nrUzFL) : "".concat(Math.floor(e))
      })
    })]
  })
}

function eF(e) {
  let {
    showDivider: t = false
  } = e, [n, s] = (0, y.kn)([x.M.OVERLAY_OOP_SETTINGS_NUX], true, true);
  return ((0, f.Ay)(() => () => {
    s(ep.i.AUTO_DISMISS)
  }), n !== x.M.OVERLAY_OOP_SETTINGS_NUX) ? null : (0, i.jsxs)("div", {
    className: ej.xC,
    children: [(0, i.jsx)("div", {
      children: (0, i.jsx)("img", {
        src: eb.A,
        alt: em.intl.string(em.t.mdXZh1),
        className: ej.tl
      })
    }), (0, i.jsx)("div", {
      children: (0, i.jsxs)("div", {
        className: ej.vJ,
        children: [(0, i.jsx)(A.Heading, {
          variant: "heading-xl/medium",
          color: "text-strong",
          children: em.intl.string(em.t.jzjJQg)
        }), (0, i.jsx)(A.Text, {
          variant: "text-md/normal",
          color: "text-muted",
          children: em.intl.string(em.t["5dOfxb"])
        })]
      })
    }), (0, i.jsx)("div", {
      children: (0, i.jsx)("img", {
        src: eO.A,
        alt: em.intl.string(em.t.mdXZh1),
        className: ej.lh
      })
    }), (0, i.jsx)("div", {
      "data-button-hoisted-classname-wrapper": true,
      className: ej.VV,
      children: (0, i.jsx)(A.Button, {
        variant: "primary",
        text: em.intl.string(em.t.Q26diF),
        onClick: () => void s(ep.i.DISMISS)
      })
    }), t ? (0, i.jsx)("div", {
      className: ej.$x
    }) : null]
  })
}

function ez(e) {
  let {
    runningGame: t,
    runningGameApplication: n
  } = e, l = null == n ? true : n.id, r = (0, h.bG)([U.A], () => U.A.isLimitedInteractionOverrideEnabled(l), [l]), a = s.useMemo(() => null != t && (0, M.qJ)(t.pid), [t]), o = (0, w.A)({
    location: "overlay_user_settings"
  }), {
    disableClickableRegions: c,
    shouldShowKeybindIndicators: d
  } = (0, h.cf)([er.default], () => ({
    disableClickableRegions: er.default.disableClickableRegions,
    shouldShowKeybindIndicators: er.default.showKeybindIndicators
  }));
  return (0, i.jsxs)("div", {
    className: ej.U$,
    children: [(0, i.jsx)(eV, {
      isLegacySettings: true
    }), o && (0, i.jsx)(A.dOG, {
      label: em.intl.string(em.t.XZTl9r),
      checked: d,
      onChange: e => O.A.setShowKeybindIndicators(e)
    }), null != l && (0, i.jsxs)("div", {
      children: [(0, i.jsxs)("div", {
        className: ej.yB,
        children: [(0, i.jsx)(A.Text, {
          variant: "text-md/semibold",
          color: "text-strong",
          children: em.intl.string(em.t.wgVQND)
        }), (0, i.jsx)(A.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: em.intl.string(em.t["5SsyF5"])
        })]
      }), (0, i.jsx)(A.dOG, {
        checked: r || a,
        disabled: a,
        onChange: e => {
          null != n && (0, B.x8)(n.id, e)
        }
      })]
    }), (0, i.jsxs)("div", {
      children: [(0, i.jsxs)("div", {
        className: ej.yB,
        children: [(0, i.jsx)(A.Text, {
          variant: "text-md/semibold",
          color: "text-strong",
          children: em.intl.string(em.t["+eFXxq"])
        }), (0, i.jsx)(A.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: em.intl.string(em.t.kivMAp)
        })]
      }), (0, i.jsx)(A.dOG, {
        checked: !c,
        onChange: function() {
          O.A.setDisableClickableRegions(!c)
        }
      })]
    })]
  })
}

function eW() {
  let e, {
      runningGame: t,
      runningGameApplication: n
    } = (0, I.A)(),
    s = (0, h.bG)([ei.default], () => ei.default.getCurrentUser());
  return (0, f.Ay)(() => {
    if (ec.isPlatformEmbedded) return (0, _.a2)(), _.e0
  }), (e = ey(ef), g().isEqual(e, ef) || (ea.default.track(ex.HAw.OVERLAY_SETTINGS_UPDATED, e), ef = e), null == s) ? null : (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)(eh.A, {
      title: em.intl.string(em.t["9cb1Uz"]),
      children: [(0, i.jsx)(eF, {
        showDivider: true
      }), (0, i.jsxs)("div", {
        className: ej.U$,
        children: [(0, i.jsx)(eG, {}), (0, i.jsx)(ek, {}), (0, i.jsx)(eL, {}), (0, i.jsx)(ew, {})]
      }), (0, i.jsx)("div", {
        className: ej.Ri
      })]
    }), (0, i.jsxs)("div", {
      children: [(0, i.jsx)(ez, {
        runningGame: t,
        runningGameApplication: n
      }), (0, i.jsx)("div", {
        className: ej.Ri
      })]
    }), (0, i.jsxs)(A.D0$, {
      label: em.intl.string(em.t.r1TZfh),
      children: [(0, i.jsx)(eB, {}), (0, i.jsx)("div", {
        className: ej.Ri
      })]
    }), (0, i.jsx)(eU, {})]
  })
}