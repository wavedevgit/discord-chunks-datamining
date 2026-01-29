/** Chunk was on 32502 **/
/** chunk id: 790076, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => eK,
  DA: () => ey,
  F: () => eF,
  F1: () => ew,
  G6: () => eC,
  Gj: () => ek,
  Gk: () => eV,
  PP: () => ev,
  VQ: () => eB,
  fE: () => eD,
  nR: () => eR,
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
  h = require.n(Chunk735438),
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

function eE(e) {
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

function eS(e, t) {
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
let ef = eT(null),
  eC = 1,
  ev = 25,
  ey = [0, 5, 10, 15, 20, 25];

function eT(e) {
  var t;
  let n = er.default.getNotificationPositionMode(),
    i = n !== ex.G6Q.DISABLED,
    l = el.Ay.getOverlayKeybind(),
    s = el.Ay.getOverlayChatKeybind();
  return {
    enabled: es.default.enabled,
    notifications_enabled: i,
    notifications_position: i ? n : null,
    text_notifications_mode: U.A.isNotificationDisabled(em.KS.TextChat) ? "DISABLED" : "ENABLED",
    hotkey: null != l ? (0, ed.dI)(l.shortcut) : null,
    text_activation_hotkey: null != s ? (0, ed.dI)(s.shortcut) : null,
    text_opacity_slider: er.default.getTextWidgetOpacity(),
    old_enabled: null != (t = null == e ? true : e.enabled) ? t : es.default.enabled
  }
}

function e_(e) {
  let {
    header: t,
    icon: n,
    title: l,
    description: s,
    action: a,
    hint: o,
    warning: c,
    onClick: d,
    "aria-label": u,
    className: h
  } = e;
  return (0, i.jsxs)("div", {
    className: r()(eb.HS, h),
    children: [(0, i.jsxs)(m.sqX, {
      "aria-label": u,
      onClick: d,
      children: [null != t && (0, i.jsx)("div", {
        className: eb.x_,
        children: t
      }), (0, i.jsxs)("div", {
        className: eb.rN,
        children: [null != n && (0, i.jsx)("div", {
          className: eb.$t,
          children: n
        }), (0, i.jsxs)("div", {
          className: eb.c8,
          children: [(0, i.jsx)(m.Text, {
            variant: "text-md/medium",
            color: "text-strong",
            className: eb.SZ,
            children: l
          }), null != s && (0, i.jsx)(m.Text, {
            variant: "text-sm/normal",
            color: "text-subtle",
            children: s
          }), null != o && (0, i.jsx)(m.Text, {
            variant: "text-xxs/medium",
            color: "text-muted",
            children: o
          })]
        }), (0, i.jsx)("div", {
          className: eb.a$,
          children: a
        })]
      })]
    }), (0, i.jsx)("div", {
      className: eb.Om,
      children: c
    })]
  })
}

function eN(e) {
  let {
    children: t,
    className: n,
    onExpand: s
  } = e, a = function(e, t) {
    if (null == e) return {};
    var n, i, l, s = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) i = n[l], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (s[i] = e[i]);
      return s
    }
    if (s = function(e, t) {
        if (null == e) return {};
        var n, i, l = {},
          s = Object.getOwnPropertyNames(e);
        for (i = 0; i < s.length; i++) n = s[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
        return l
      }(e, t), Object.getOwnPropertySymbols)
      for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) i = n[l], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (s[i] = e[i]);
    return s
  }(e, ["children", "className", "onExpand"]), [o, c] = l.useState(false);
  return (0, i.jsx)(m.Nt8, {
    className: eb.uR,
    collapsibleContent: (0, i.jsx)("div", {
      className: eb.oV,
      children: t
    }),
    children: e => {
      let {
        onClick: t
      } = e;
      return (0, i.jsx)(e_, eS(eE({}, a), {
        onClick: e => {
          var n;
          c(n = !o), null == s || s(n), null == t || t(e)
        },
        className: r()(eb.AC, n),
        action: (0, i.jsxs)("div", {
          className: eb.rc,
          children: [a.action, o ? (0, i.jsx)(m.abt, {
            size: "custom",
            width: 20,
            height: 20,
            color: "var(--interactive-text-active)"
          }) : (0, i.jsx)(m._BQ, {
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
let eI = new Set([Chunk41984.AR.INITIALIZING, Chunk41984.AR.WAITING_FOR_SCREEN_TYPE_RESOLUTION, Chunk41984.AR.WAITING_FOR_MODULE_TRACKING, Chunk41984.AR.WAITING_FOR_OVERLAY_OPEN, Chunk41984.AR.WAITING_FOR_POPOUT_OPEN, Chunk41984.AR.WAITING_FOR_MODULE_POPOUT_CAPTURE, Chunk41984.AR.WAITING_FOR_REACT_INITIALIZATION, Chunk41984.AR.WAITING_FOR_PID_FOCUS, Chunk41984.AR.WAITING_FOR_SUCCESSFUL_SHOW]),
  eP = e => {
    e.preventDefault(), e.stopPropagation()
  };

function eR() {
  var e, t, n;
  let {
    runningGame: s,
    runningGameApplication: r
  } = (0, N.A)(), a = null == s ? true : s.pid, c = (0, g.bG)([V.default], () => null == s || null == a ? null : V.default.getTrackedGameByPid(a), [s, a], o()), {
    enabledLegacy: d,
    enabledOOP: u
  } = (0, g.cf)([ee.A, en.A], () => {
    if (null == s && null == c) return {
      enabledLegacy: false,
      enabledOOP: false
    };
    if (null == s) {
      var e, t;
      return {
        enabledLegacy: null != (e = null == c ? true : c.legacyEnabled) && e,
        enabledOOP: null != (t = null == c ? true : c.oopEnabled) && t
      }
    }
    return (0, _.hw)(s, false, [ee.A, en.A])
  }, [s, c]), h = (0, g.bG)([_.Ay, ee.A, en.A], () => null == s ? null : (0, _.xU)(s, _.Ay, ee.A, en.A), [s], o()), [x, b] = l.useState(u), [j, E] = l.useState(d), [C, v] = l.useState(false);
  l.useEffect(() => {
    b(u), E(d)
  }, [u, d]);
  let y = !(0, eu.supportsLegacy)(),
    T = !(0, eu.supportsOutOfProcess)(),
    {
      legacyEnabled: I,
      oopEnabled: G
    } = (0, g.cf)([V.default], () => V.default.getGlobalEnabledStatus()),
    k = (e, t) => {
      var n, i, l;
      if (null == s) return;
      let r = false,
        a = false;
      switch (t) {
        case L.OverlayToggledClientSettingType.LEGACY_GAME:
          E(e), A.A.toggleOverlay(s, e, x), r = !e && j;
          break;
        case L.OverlayToggledClientSettingType.OOP_GAME:
          b(e), A.A.toggleOverlay(s, j, e), a = !e && x;
          break;
        case L.OverlayToggledClientSettingType.LEGACY:
          O.A.setEnabled(e, G), (0, L.Q3)(e, L.OverlayToggledClientSettingType.LEGACY, null != (n = s.id) ? n : null);
          break;
        case L.OverlayToggledClientSettingType.OOP:
          O.A.setEnabled(I, e), (0, L.Q3)(e, L.OverlayToggledClientSettingType.OOP, null != (i = s.id) ? i : null)
      }(r || a) && (0, B.L)(r ? L.OverlayToggledClientSettingType.LEGACY_GAME : L.OverlayToggledClientSettingType.OOP_GAME, null != (l = s.id) ? l : null)
    },
    w = y && T,
    M = !I && !G,
    U = !x && !I && j && !y,
    H = !j && !G && x && !T,
    Y = (null == c ? true : c.overlayMethod) === D.Ue.Disabled,
    F = (null == c ? true : c.state) === D.AR.OVERLAY_RENDERING && !Y,
    z = (null == c ? true : c.state) != null && eI.has(c.state) && !Y,
    K = (null == c ? true : c.overlayMethod) === D.Ue.OutOfProcess,
    W = (null == c ? true : c.overlayMethod) === D.Ue.OutOfProcessLimitedInteraction,
    J = (null == c ? true : c.overlayMethod) === D.Ue.Hook,
    Q = (null == c ? true : c.state) === D.AR.OVERLAY_CRASHED || (null == c ? true : c.state) === D.AR.OVERLAY_CRASHED_DISABLED,
    X = !x && !j,
    [q, $] = (() => {
      switch (true) {
        case F && K:
          return [eA.intl.format(eA.t.hFVBIg, {
            overlayMethod: eA.intl.string(eA.t.a3eXSw),
            overlayMethodHook: function(e, t) {
              return (0, i.jsx)(m.Text, {
                tag: "span",
                variant: "text-sm/medium",
                color: "text-feedback-positive",
                children: e
              }, t)
            }
          }), null];
        case F && W:
          return [eA.intl.format(eA.t.hFVBIg, {
            overlayMethod: eA.intl.string(eA.t["506Aba"]),
            overlayMethodHook: function(e, t) {
              return (0, i.jsx)(m.Text, {
                tag: "span",
                variant: "text-sm/medium",
                color: "text-feedback-warning",
                children: e
              }, t)
            }
          }), null];
        case F && J:
          return [eA.intl.format(eA.t.hFVBIg, {
            overlayMethod: eA.intl.string(eA.t.bvlpDR),
            overlayMethodHook: function(e, t) {
              return (0, i.jsx)(m.Text, {
                tag: "span",
                variant: "text-sm/medium",
                color: "text-strong",
                children: e
              }, t)
            }
          }), function() {
            var e, t;
            switch (true) {
              case (null == c ? true : c.fullscreenType) !== S.aI.BORDERLESS_FULLSCREEN:
                return eA.intl.string(eA.t.mJmbeC);
              case T:
                return eA.intl.string(eA.t.C7bLTQ);
              case !(null != (e = null == c ? true : c.oopEnabled) && e):
                return eA.intl.string(eA.t.WiY24u);
              case !G:
                return eA.intl.string(eA.t.cAFVsL);
              case !(null != (t = null == c ? true : c.supportsOutOfProcess) && t):
                return eA.intl.string(eA.t.XcGEcs);
              default:
                return eA.intl.string(eA.t.bJXH2v)
            }
          }()];
        case Q:
          return [eA.intl.string(eA.t.OFC2aw), null];
        case w:
          return [eA.intl.string(eA.t.m7X4az), null];
        case M:
          return [eA.intl.string(eA.t["9DUS5l"]), null];
        case X:
          return [eA.intl.string(eA.t.nQ9EdJ), null];
        case U:
        case H:
          return [eA.intl.string(eA.t.VWUn0a), null];
        case z:
          if (K) return [eA.intl.string(eA.t["s8+CFq"]), null];
          if (J) return [eA.intl.string(eA.t.JEEdqt), null];
          if (W) return [eA.intl.string(eA.t.pzBMwY), null];
          return [eA.intl.string(eA.t["2Xhy9k"]), null];
        case null == c:
          return [eA.intl.string(eA.t.vwHPRi), null];
        case Y: {
          let e = (null == c ? true : c.fullscreenType) === S.aI.FULLSCREEN ? eA.intl.string(eA.t.mJmbeC) : null;
          return [eA.intl.string(eA.t.VPW4XY), e]
        }
        default:
          return [eA.intl.string(eA.t.ONovP5), null]
      }
    })();
  (0, f.Ay)(() => {
    A.A.getDetectableGames()
  });
  let [et, ei] = l.useMemo(() => z ? ["text-muted", m.LU0.colors.TEXT_MUTED.css] : F && W ? ["text-feedback-warning", m.LU0.colors.TEXT_FEEDBACK_WARNING.css] : F && K ? ["text-feedback-positive", m.LU0.colors.TEXT_FEEDBACK_POSITIVE.css] : F && J ? ["text-strong", m.LU0.colors.TEXT_STRONG.css] : ["interactive-text-default", m.LU0.colors.INTERACTIVE_TEXT_DEFAULT.css], [z, F, W, K, J]);
  return null == s ? null : (0, i.jsxs)(eN, {
    onExpand: v,
    className: C ? eb.tx : true,
    title: (0, i.jsxs)(i.Fragment, {
      children: [null != (e = null != (t = null != (n = null == r ? true : r.name) ? n : null == h ? true : h.name) ? t : null == s ? true : s.gameName) ? e : "", null != h && h.verified ? (0, i.jsx)(p.m, {
        text: eA.intl.string(eA.t["4PJP5p"]),
        children: (0, i.jsx)(R.A, {
          size: 16,
          color: m.LU0.colors.BACKGROUND_BRAND.css,
          children: (0, i.jsx)(m.Uzd, {
            size: "custom",
            width: 16,
            height: 16,
            color: m.LU0.colors.WHITE.css
          })
        })
      }) : null]
    }),
    description: q,
    hint: null != $ ? $ : true,
    header: (0, i.jsxs)(i.Fragment, {
      children: [F || z ? (0, i.jsx)(m.kN9, {
        size: "xxs",
        color: ei
      }) : (0, i.jsx)("div", {
        className: eb.W4
      }), (0, i.jsx)(m.Text, {
        variant: "text-xs/semibold",
        color: et,
        children: eA.intl.string(eA.t.CDOx3w)
      })]
    }),
    icon: (0, i.jsx)(P.A, {
      game: r,
      pid: null == s ? true : s.pid,
      size: P.M.MEDIUM
    }),
    "aria-label": eA.intl.string(eA.t["87O5GC"]),
    action: (0, i.jsx)(m.DUT, {
      onClick: e => eP(e),
      children: (0, i.jsx)(m.dOG, {
        checked: x && G || j && I,
        disabled: w,
        onChange: e => {
          ((e, t) => {
            if (null == s) return;
            let n = false,
              i = false;
            switch (t) {
              case "game":
                A.A.toggleOverlay(s, e, e), E(e), b(e), n = !e && j, i = !e && x;
                break;
              case "global":
                O.A.setEnabled(e, e), n = !e && I, i = !e && G;
                break;
              case "both":
                O.A.setEnabled(e, e), A.A.toggleOverlay(s, e, e), E(e), b(e), n = !e && I || !e && j, i = !e && G || !e && x
            }
            let l = null;
            if (n ? l = "game" === t ? L.OverlayToggledClientSettingType.LEGACY_GAME : L.OverlayToggledClientSettingType.LEGACY : i && (l = "game" === t ? L.OverlayToggledClientSettingType.OOP_GAME : L.OverlayToggledClientSettingType.OOP), null != l) {
              var r;
              (0, B.L)(l, null != (r = s.id) ? r : null)
            }
          })(e, ((e, t) => {
            let n = !t && e,
              i = !G && x,
              l = !I && j,
              s = !x && G,
              r = !j && I;
            switch (true) {
              case n && (i || l) && (s || r):
                return "both";
              case n && (i || l):
                return "global";
              default:
                return "game"
            }
          })(e, x && G || j && I))
        }
      })
    }),
    warning: (0, i.jsx)(Z.A, {
      className: eb.Hh,
      game: s
    }),
    children: [(0, i.jsx)(e_, {
      title: eA.intl.string(eA.t["7BlVIs"]),
      description: eA.intl.string(eA.t.ndgADE),
      hint: G ? true : eA.intl.string(eA.t.cAFVsL),
      "aria-label": eA.intl.string(eA.t["7BlVIs"]),
      action: (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(m.dOG, {
          checked: x && G,
          disabled: T,
          onChange: e => {
            e && !G ? k(e, L.OverlayToggledClientSettingType.OOP) : k(e, L.OverlayToggledClientSettingType.OOP_GAME)
          }
        }), (0, i.jsx)("div", {
          className: eb.Kz
        })]
      })
    }), (0, i.jsx)(e_, {
      title: eA.intl.string(eA.t.BfFpW1),
      description: eA.intl.string(eA.t.OzInYk),
      hint: I ? true : eA.intl.string(eA.t["3sYHXm"]),
      "aria-label": eA.intl.string(eA.t.BfFpW1),
      action: (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(m.dOG, {
          checked: j && I,
          disabled: y,
          onChange: e => {
            e && !I ? k(e, L.OverlayToggledClientSettingType.LEGACY) : k(e, L.OverlayToggledClientSettingType.LEGACY_GAME)
          }
        }), (0, i.jsx)("div", {
          className: eb.Kz
        })]
      })
    })]
  })
}

function eL(e) {
  let {
    game: t,
    gameApplication: n
  } = e, s = l.useMemo(() => null == t ? null : "pid" in t ? t.pid : null, [t]), r = (0, g.bG)([v.A], () => null != n ? n : v.A.getApplication(null == t ? true : t.id), [n, t]);
  return (0, i.jsx)(P.A, {
    game: r,
    pid: s,
    size: P.M.SMALL
  })
}

function eG(e) {
  let {
    rawGame: t,
    gameApplication: n,
    supportDisabled: s,
    getEnabledFromStatus: r,
    onChange: a,
    clientSettingType: o,
    ariaLabel: c
  } = e, d = (0, g.cf)([_.Ay, ee.A, en.A], () => (0, _.xU)(t, _.Ay, ee.A, en.A)), u = (0, g.cf)([ee.A, en.A], () => (0, _.hw)(t, false, [ee.A, en.A]), [t]), h = r(u), [x, p] = l.useState(h);
  return l.useEffect(() => {
    p(h)
  }, [h]), (0, i.jsx)(e_, {
    title: t.name,
    icon: (0, i.jsx)(eL, {
      game: d,
      gameApplication: n
    }),
    "aria-label": c,
    action: (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(m.dOG, {
        checked: x,
        disabled: s,
        onChange: e => (e => {
          let n = !e && x;
          if (p(e), a(e, d, u), n) {
            var i, l;
            (0, B.L)(o, null != (i = null != (l = d.id) ? l : null == t ? true : t.id) ? i : null)
          }
        })(e)
      }), (0, i.jsx)("div", {
        className: eb.Kz
      })]
    })
  })
}

function eD() {
  let [e, t] = l.useState(false), {
    legacyEnabled: n,
    oopEnabled: s
  } = (0, g.cf)([V.default], () => V.default.getGlobalEnabledStatus()), r = (0, g.yK)([_.Ay], () => _.Ay.getGamesSeen(true)).filter(e => !(0, J.n1)(e)), a = (0, y.A)(r.map(e => e.id)), o = !(0, eu.supportsLegacy)(), c = e => {
    var t, i;
    O.A.setEnabled(e, s);
    let l = null != (t = null == (i = _.Ay.getCurrentGameForAnalytics()) ? true : i.id) ? t : null;
    (0, L.Q3)(e, L.OverlayToggledClientSettingType.LEGACY, l), !e && n && (0, B.L)(L.OverlayToggledClientSettingType.LEGACY, l)
  }, d = (e, t, n) => {
    let {
      enabledOOP: i
    } = n;
    A.A.toggleOverlay(t, e, i)
  }, u = l.useMemo(() => (0, eu.supportsLegacy)() ? o ? eA.intl.string(eA.t.r9jEVw) : eA.intl.string(eA.t.OzInYk) : eA.intl.string(eA.t["8Ox6/E"]), [o]);
  return 0 === r.length ? (0, i.jsx)(e_, {
    title: eA.intl.string(eA.t.BfFpW1),
    description: u,
    "aria-label": eA.intl.string(eA.t.BfFpW1),
    className: eb.dA,
    action: (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(m.dOG, {
        checked: n,
        disabled: o,
        onChange: e => c(e)
      }), em.OX && (0, i.jsx)("div", {
        className: eb.Kz
      })]
    })
  }) : (0, i.jsxs)(eN, {
    onExpand: t,
    className: e ? eb.tx : true,
    title: eA.intl.string(eA.t.BfFpW1),
    description: u,
    "aria-label": eA.intl.string(eA.t.BfFpW1),
    action: (0, i.jsx)(m.DUT, {
      onClick: e => eP(e),
      children: (0, i.jsx)(m.dOG, {
        checked: n,
        disabled: o,
        onChange: e => c(e)
      })
    }),
    children: [(0, i.jsx)("div", {
      className: eb.SC,
      children: (0, i.jsx)(m.Text, {
        variant: "text-xs/semibold",
        color: "text-muted",
        children: eA.intl.string(eA.t.FzoWRo)
      })
    }), (0, i.jsx)(m.IpV, {
      className: eb.XG,
      children: r.map((e, t) => (0, i.jsx)(eG, {
        rawGame: e,
        clientSettingType: L.OverlayToggledClientSettingType.LEGACY_GAME,
        supportDisabled: o,
        gameApplication: a[t],
        getEnabledFromStatus: e => {
          let {
            enabledLegacy: t
          } = e;
          return t
        },
        onChange: d,
        ariaLabel: eA.intl.format(eA.t.hvPYsF, {
          gameName: e.name
        }).toString()
      }, e.id))
    })]
  })
}

function ek() {
  let [e, t] = l.useState(false), {
    oopEnabled: n,
    legacyEnabled: s
  } = (0, g.cf)([V.default], () => V.default.getGlobalEnabledStatus()), r = !(0, eu.supportsOutOfProcess)(), a = (0, g.yK)([_.Ay], () => _.Ay.getGamesSeen(true)).filter(e => !(0, J.n1)(e)), o = (0, y.A)(a.map(e => e.id)), c = e => {
    var t, i;
    let l = !e && n;
    O.A.setEnabled(s, e);
    let r = null != (t = null == (i = _.Ay.getCurrentGameForAnalytics()) ? true : i.id) ? t : null;
    (0, L.Q3)(e, L.OverlayToggledClientSettingType.OOP, r), l && (0, B.L)(L.OverlayToggledClientSettingType.OOP, r)
  }, d = (e, t, n) => {
    let {
      enabledLegacy: i
    } = n;
    A.A.toggleOverlay(t, e, i)
  }, u = l.useMemo(() => em.OX ? r ? eA.intl.string(eA.t.C7bLTQ) : eA.intl.string(eA.t.ndgADE) : eA.intl.string(eA.t.m7X4az), [r]);
  return 0 === a.length ? (0, i.jsx)(e_, {
    title: eA.intl.string(eA.t["7BlVIs"]),
    description: u,
    "aria-label": eA.intl.string(eA.t["7BlVIs"]),
    className: eb.dA,
    action: (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(m.dOG, {
        checked: n,
        disabled: r,
        onChange: e => c(e)
      }), em.OX && (0, i.jsx)("div", {
        className: eb.Kz
      })]
    })
  }) : (0, i.jsxs)(eN, {
    onExpand: t,
    className: e ? eb.tx : true,
    title: eA.intl.string(eA.t["7BlVIs"]),
    description: u,
    "aria-label": eA.intl.string(eA.t["7BlVIs"]),
    action: (0, i.jsx)(m.DUT, {
      onClick: e => eP(e),
      children: (0, i.jsx)(m.dOG, {
        checked: n,
        disabled: r,
        onChange: e => c(e)
      })
    }),
    children: [(0, i.jsx)("div", {
      className: eb.SC,
      children: (0, i.jsx)(m.Text, {
        variant: "text-xs/semibold",
        color: "text-muted",
        children: eA.intl.string(eA.t.FzoWRo)
      })
    }), (0, i.jsx)(m.IpV, {
      className: eb.XG,
      children: a.map((e, t) => (0, i.jsx)(eG, {
        rawGame: e,
        clientSettingType: L.OverlayToggledClientSettingType.OOP_GAME,
        gameApplication: o[t],
        supportDisabled: r,
        getEnabledFromStatus: e => {
          let {
            enabledOOP: t
          } = e;
          return t
        },
        onChange: d,
        ariaLabel: eA.intl.format(eA.t.nByTd3, {
          gameName: e.name
        }).toString()
      }, e.id))
    })]
  })
}

function ew() {
  return (0, k.X4)(C.A.USER_SETTINGS) ? (0, i.jsx)(e_, {
    title: eA.intl.string(eA.t["z4/l+V"]),
    description: eA.intl.string(eA.t["3aZq/0"]),
    action: (0, i.jsx)(m.Button, {
      variant: "primary",
      text: eA.intl.string(eA.t.s2nVhG),
      onClick: () => {
        (0, F.b)(C.A.USER_SETTINGS, ex.BRT.APP)
      }
    }),
    "aria-label": eA.intl.string(eA.t["z4/l+V"])
  }) : null
}

function eV(e) {
  var t;
  let {
    isLegacySettings: n = false
  } = e, l = (0, g.bG)([el.Ay], () => el.Ay.getOverlayKeybind()), s = !(0, eu.supportsLegacy)(), r = !(0, eu.supportsOutOfProcess)(), [a, o] = (0, g.yK)([_.Ay], () => [_.Ay.canShowAdminWarning, _.Ay.getVisibleGame()], []), c = (0, Q.NP)(), u = null != o && o.elevated && a && !c, h = !(0, el.DV)(null != (t = null == l ? true : l.shortcut) ? t : []);
  return (0, i.jsx)("div", {
    className: eb.hc,
    children: (0, i.jsxs)("div", {
      className: eb.eH,
      children: [(0, i.jsxs)("div", {
        className: eb.Bu,
        children: [(0, i.jsx)(m.Text, {
          variant: n ? "text-md/semibold" : "text-md/medium",
          color: "text-strong",
          children: eA.intl.string(eA.t.VsAZcC)
        }), u && (0, i.jsx)(m.Text, {
          variant: "text-xs/normal",
          color: "text-feedback-warning",
          className: eb.y7,
          children: eA.intl.string(eA.t.NsowVa)
        }), h && (0, i.jsx)(m.Text, {
          variant: "text-xs/normal",
          color: "text-feedback-warning",
          className: eb.y7,
          children: eA.intl.string(eA.t["UNoTw/"])
        })]
      }), (0, i.jsx)("div", {
        className: eb.IH,
        children: (0, i.jsx)(E.A, {
          disabled: s && r,
          defaultValue: null != l ? l.shortcut : [],
          onChange: function(e) {
            d()(null != l, "Keybind should never be undefined"), b.A.setKeybind(eS(eE({}, l), {
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
    title: eA.t.eVE4LX,
    description: eA.t["72WNqk"],
    disabledSetting: G.M.TEXT_CHAT,
    key: eh.X.OVERLAY_NOTIFICATIONS_TEXT_CHAT
  }, {
    title: eA.t.oifnSh,
    description: eA.t.bgU5r0,
    disabledSetting: G.M.WELCOME_GENERAL,
    key: eh.X.OVERLAY_NOTIFICATIONS_WELCOME
  }, {
    title: eA.t.hqsZJW,
    description: eA.t.kHjdqc,
    disabledSetting: G.M.GO_LIVE_NUDGE,
    key: eh.X.OVERLAY_NOTIFICATIONS_GO_LIVE
  }, {
    title: eA.t.sop3rn,
    description: eA.t.pjgffc,
    disabledSetting: G.M.GAME_ACTIVITY,
    key: eh.X.OVERLAY_NOTIFICATIONS_GAME_ACTIVITY
  }, {
    title: eA.t["2QVhbb"],
    description: eA.t.wQ4ilB,
    disabledSetting: G.M.NOW_PLAYING,
    key: eh.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING
  }, e && {
    title: eA.t["5/21FT"],
    description: eA.t.EIzwfA,
    disabledSetting: G.M.FRIEND_STREAM_WATCH_NUDGE,
    key: eh.X.OVERLAY_NOTIFICATIONS_FRIEND_STREAM_WATCH,
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
  } = (0, k.QC)("OverlayV3StreamWatchNudge"), t = eM(e), n = (0, g.bG)([U.A], () => U.A.getDisabledNotifications());
  return (0, i.jsxs)("div", {
    className: eb.AO,
    children: [(0, i.jsx)(m.Heading, {
      variant: "heading-md/semibold",
      color: "text-strong",
      children: eA.intl.string(eA.t.xOE5bA)
    }), t.map(e => {
      let t;
      return (0, i.jsxs)("div", {
        className: eb.vx,
        children: [(0, i.jsxs)("div", {
          className: eb.LS,
          children: [(0, i.jsx)(m.Text, {
            variant: "text-sm/semibold",
            color: "text-strong",
            children: eA.intl.string(e.title)
          }), (0, i.jsx)(m.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: eA.intl.string(e.description)
          })]
        }), (0, i.jsx)(m.dOG, {
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
    l = "456" + Math.floor(1e6 * Math.random());
  return {
    voiceState: new $.A({
      channelId: "123",
      userId: l,
      sessionId: "789",
      mute: t,
      deaf: n,
      selfMute: false,
      selfDeaf: false,
      selfVideo: false,
      selfStream: false,
      discoverable: i
    }),
    user: new q.A({
      id: l,
      username: e
    }),
    member: {
      nick: e,
      userId: l,
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

function eB(e) {
  var t, n;
  let s, {
      isLegacySettings: a = false
    } = e,
    o = (0, g.bG)([ei.default], () => ei.default.getCurrentUser()),
    {
      avatarSizeMode: c,
      displayNameMode: d,
      displayUserMode: u
    } = (0, g.cf)([er.default], () => ({
      avatarSizeMode: er.default.getAvatarSizeMode(),
      displayNameMode: er.default.getDisplayNameMode(),
      displayUserMode: er.default.getDisplayUserMode()
    })),
    [h] = l.useState(() => [eH(eA.intl.string(eA.t.C0ZDvo), true, false), eH(eA.intl.string(eA.t.iOtj8E), false, false, true), eH(eA.intl.string(eA.t["0oqNgL"]), false, true)]),
    x = (0, g.bG)([H.A, et.A], () => {
      let e = H.A.getWidgetByType(ex.uss.VOICE_V3);
      if (null == e) return null;
      let t = et.A.getWidget(e.id);
      return null != t && (0, z.ZO)(t) ? t : null
    }),
    p = null != (t = null == x || null == (n = x.meta) ? true : n.voiceStatesMaxShown) ? t : 8,
    A = [null != o ? ((s = eH(o.username)).user = o, s) : null, ...h].filter(eo.Vq),
    b = [new Map(A.map(e => [e.user.id, e])), A.map(e => e.user.id)],
    j = (0, i.jsx)(m.NPJ, {
      theme: ex.NJ8.MIDNIGHT,
      children: e => {
        var t, n;
        return (0, i.jsxs)("div", {
          className: r()(eb.Y5, e),
          children: [(0, i.jsx)("div", {
            className: eb.kJ,
            children: (0, i.jsx)(K.DH, {
              id: "voice-widget",
              title: eA.intl.string(eA.t.KNJ6Vq),
              channel: (0, X.createChannelRecord)({
                id: "123",
                name: "Test Channel",
                type: ex.rbe.GUILD_VOICE,
                guild_id: "456"
              }),
              overlayVoiceStates: b,
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
            className: eb.R$,
            children: [(0, i.jsx)(W.Pl, {
              children: eA.intl.string(eA.t.KNJ6Vq)
            }), (0, i.jsx)(W.CS, {}), (0, i.jsx)(W.O0, {
              id: null != (t = null == x ? true : x.id) ? t : "voice-widget",
              pinned: null != (n = null == x ? true : x.pinned) && n
            })]
          })]
        })
      }
    });
  return a ? j : (0, i.jsx)("div", {
    className: eb.F9,
    children: j
  })
}

function eY() {
  var e, t;
  let {
    avatarSizeMode: n,
    displayNameMode: l,
    displayUserMode: s
  } = (0, g.cf)([er.default], () => ({
    avatarSizeMode: er.default.getAvatarSizeMode(),
    displayNameMode: er.default.getDisplayNameMode(),
    displayUserMode: er.default.getDisplayUserMode()
  })), r = (0, g.bG)([H.A, et.A], () => {
    let e = H.A.getWidgetByType(ex.uss.VOICE_V3);
    if (null == e) return null;
    let t = et.A.getWidget(e.id);
    return null != t && (0, z.ZO)(t) ? t : null
  }), a = null != (e = null == r || null == (t = r.meta) ? true : t.voiceStatesMaxShown) ? e : 8;
  return (0, i.jsxs)("div", {
    className: eb.ri,
    children: [(0, i.jsx)(m.l6P, {
      label: eA.intl.string(eA.t.dnvZSg),
      options: [{
        id: "large",
        label: eA.intl.string(eA.t.YcOxtr),
        value: ex.OSZ.LARGE
      }, {
        id: "small",
        label: eA.intl.string(eA.t.BKIKqx),
        value: ex.OSZ.SMALL
      }],
      onSelectionChange: O.A.setAvatarSizeMode,
      value: n,
      selectionMode: "single",
      fullWidth: true
    }), (0, i.jsx)(m.l6P, {
      label: eA.intl.string(eA.t.J0dpcB),
      options: [{
        id: "always",
        label: eA.intl.string(eA.t.nBmDrT),
        value: ex.pwA.ALWAYS
      }, {
        id: "only-while-speaking",
        label: eA.intl.string(eA.t["2OvIZY"]),
        value: ex.pwA.ONLY_WHILE_SPEAKING
      }, {
        id: "never",
        label: eA.intl.string(eA.t.ekjlPL),
        value: ex.pwA.NEVER
      }],
      onSelectionChange: O.A.setDisplayNameMode,
      value: l,
      selectionMode: "single",
      fullWidth: true
    }), (0, i.jsx)(eB, {
      isLegacySettings: true
    }), (0, i.jsx)(m.l6P, {
      label: eA.intl.string(eA.t.swsWWC),
      options: [{
        id: "always",
        label: eA.intl.string(eA.t.nBmDrT),
        value: ex.f5z.ALWAYS
      }, {
        id: "only-while-speaking",
        label: eA.intl.string(eA.t["2OvIZY"]),
        value: ex.f5z.ONLY_WHILE_SPEAKING
      }],
      onSelectionChange: O.A.setDisplayUserMode,
      value: s,
      selectionMode: "single",
      fullWidth: true
    }), (0, i.jsx)("div", {
      className: eb.xJ,
      children: (0, i.jsx)(m.Apm, {
        label: eA.intl.string(eA.t["X/Uyzc"]),
        initialValue: a,
        onValueRender: e => e < eC ? eA.intl.string(eA.t.nrUzFL) : "".concat(Math.floor(e)),
        minValue: eC - 1,
        maxValue: ev,
        onValueChange: function(e) {
          null != r && (e < eC ? (0, j.cC)(r.id, {
            voiceStatesMaxShown: false
          }) : (0, j.cC)(r.id, {
            voiceStatesMaxShown: Math.floor(e)
          }))
        },
        markers: ey,
        barStyles: {
          background: m.LU0.colors.BACKGROUND_MOD_STRONG.css
        },
        fillStyles: {
          background: m.LU0.colors.BACKGROUND_BRAND.css
        },
        onMarkerRender: e => e < eC ? eA.intl.string(eA.t.nrUzFL) : "".concat(Math.floor(e))
      })
    })]
  })
}

function eF(e) {
  let {
    showDivider: t = false
  } = e, [n, l] = (0, T.kn)([x.M.OVERLAY_OOP_SETTINGS_NUX], true, true);
  return ((0, f.Ay)(() => () => {
    l(ep.i.AUTO_DISMISS)
  }), n !== x.M.OVERLAY_OOP_SETTINGS_NUX) ? null : (0, i.jsxs)("div", {
    className: eb.xC,
    children: [(0, i.jsx)("div", {
      children: (0, i.jsx)("img", {
        src: ej.A,
        alt: eA.intl.string(eA.t.mdXZh1),
        className: eb.tl
      })
    }), (0, i.jsx)("div", {
      children: (0, i.jsxs)("div", {
        className: eb.vJ,
        children: [(0, i.jsx)(m.Heading, {
          variant: "heading-xl/medium",
          color: "text-strong",
          children: eA.intl.string(eA.t.jzjJQg)
        }), (0, i.jsx)(m.Text, {
          variant: "text-md/normal",
          color: "text-muted",
          children: eA.intl.string(eA.t["5dOfxb"])
        })]
      })
    }), (0, i.jsx)("div", {
      children: (0, i.jsx)("img", {
        src: eO.A,
        alt: eA.intl.string(eA.t.mdXZh1),
        className: eb.lh
      })
    }), (0, i.jsx)("div", {
      "data-button-hoisted-classname-wrapper": true,
      className: eb.VV,
      children: (0, i.jsx)(m.Button, {
        variant: "primary",
        text: eA.intl.string(eA.t.Q26diF),
        onClick: () => void l(ep.i.DISMISS)
      })
    }), t ? (0, i.jsx)("div", {
      className: eb.$x
    }) : null]
  })
}

function ez(e) {
  let {
    runningGame: t,
    runningGameApplication: n
  } = e, s = null == n ? true : n.id, r = (0, g.bG)([U.A], () => U.A.isLimitedInteractionOverrideEnabled(s), [s]), a = l.useMemo(() => null != t && (0, M.qJ)(t.pid), [t]), o = (0, w.A)({
    location: "overlay_user_settings"
  }), {
    disableClickableRegions: c,
    shouldShowKeybindIndicators: d
  } = (0, g.cf)([er.default], () => ({
    disableClickableRegions: er.default.disableClickableRegions,
    shouldShowKeybindIndicators: er.default.showKeybindIndicators
  }));
  return (0, i.jsxs)("div", {
    className: eb.U$,
    children: [(0, i.jsx)(eV, {
      isLegacySettings: true
    }), o && (0, i.jsx)(m.dOG, {
      label: eA.intl.string(eA.t.XZTl9r),
      checked: d,
      onChange: e => O.A.setShowKeybindIndicators(e)
    }), null != s && (0, i.jsxs)("div", {
      children: [(0, i.jsxs)("div", {
        className: eb.yB,
        children: [(0, i.jsx)(m.Text, {
          variant: "text-md/semibold",
          color: "text-strong",
          children: eA.intl.string(eA.t.wgVQND)
        }), (0, i.jsx)(m.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: eA.intl.string(eA.t["5SsyF5"])
        })]
      }), (0, i.jsx)(m.dOG, {
        checked: r || a,
        disabled: a,
        onChange: e => {
          null != n && (0, Y.x8)(n.id, e)
        }
      })]
    }), (0, i.jsxs)("div", {
      children: [(0, i.jsxs)("div", {
        className: eb.yB,
        children: [(0, i.jsx)(m.Text, {
          variant: "text-md/semibold",
          color: "text-strong",
          children: eA.intl.string(eA.t["+eFXxq"])
        }), (0, i.jsx)(m.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: eA.intl.string(eA.t.kivMAp)
        })]
      }), (0, i.jsx)(m.dOG, {
        checked: !c,
        onChange: function() {
          O.A.setDisableClickableRegions(!c)
        }
      })]
    })]
  })
}

function eK() {
  let e, {
      runningGame: t,
      runningGameApplication: n
    } = (0, N.A)(),
    l = (0, g.bG)([ei.default], () => ei.default.getCurrentUser());
  return (0, f.Ay)(() => {
    if (ec.isPlatformEmbedded) return (0, I.a2)(), I.e0
  }), (e = eT(ef), h().isEqual(e, ef) || (ea.default.track(ex.HAw.OVERLAY_SETTINGS_UPDATED, e), ef = e), null == l) ? null : (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)(eg.A, {
      title: eA.intl.string(eA.t["9cb1Uz"]),
      children: [(0, i.jsx)(eF, {
        showDivider: true
      }), (0, i.jsxs)("div", {
        className: eb.U$,
        children: [(0, i.jsx)(eR, {}), (0, i.jsx)(ek, {}), (0, i.jsx)(eD, {}), (0, i.jsx)(ew, {})]
      }), (0, i.jsx)("div", {
        className: eb.Ri
      })]
    }), (0, i.jsxs)("div", {
      children: [(0, i.jsx)(ez, {
        runningGame: t,
        runningGameApplication: n
      }), (0, i.jsx)("div", {
        className: eb.Ri
      })]
    }), (0, i.jsxs)(m.D0$, {
      label: eA.intl.string(eA.t.r1TZfh),
      children: [(0, i.jsx)(eY, {}), (0, i.jsx)("div", {
        className: eb.Ri
      })]
    }), (0, i.jsx)(eU, {})]
  })
}