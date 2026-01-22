/** Chunk was on web.js **/
/** chunk id: 790076, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => e1,
  DA: () => eD,
  F: () => eJ,
  F1: () => eY,
  G6: () => ew,
  Gj: () => eH,
  Gk: () => eW,
  PP: () => eP,
  VQ: () => eQ,
  fE: () => eB,
  nR: () => eG,
  ze: () => eK
}), require("./228524.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk812729 = require("./812729.js"),
  l = require.n(Chunk812729),
  Chunk284009 = require("./284009.js"),
  u = require.n(Chunk284009),
  Chunk735438 = require("./735438.js"),
  f = require.n(Chunk735438),
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

function eO(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function eA(e) {
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

function eS(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ev(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function eI(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = eT(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function eT(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let eC = eL(null),
  eN = 20,
  eR = 16,
  ew = 1,
  eP = 25,
  eD = [0, 5, 10, 15, 20, 25];

function ex() {
  let e = eL(eC);
  f().isEqual(e, eC) || (eo.default.track(e_.HAw.OVERLAY_SETTINGS_UPDATED, e), eC = e)
}

function eL(e) {
  var t;
  let n = es.default.getNotificationPositionMode(),
    r = n !== e_.G6Q.DISABLED,
    i = ei.Ay.getOverlayKeybind(),
    a = ei.Ay.getOverlayChatKeybind();
  return {
    enabled: ea.default.enabled,
    notifications_enabled: r,
    notifications_position: r ? n : null,
    text_notifications_mode: V.A.isNotificationDisabled(em.KS.TextChat) ? "DISABLED" : "ENABLED",
    hotkey: null != i ? (0, eu.dI)(i.shortcut) : null,
    text_activation_hotkey: null != a ? (0, eu.dI)(a.shortcut) : null,
    text_opacity_slider: es.default.getTextWidgetOpacity(),
    old_enabled: null != (t = null == e ? true : e.enabled) ? t : ea.default.enabled
  }
}

function ej(e) {
  let {
    header: t,
    icon: n,
    title: i,
    description: a,
    action: o,
    hint: l,
    warning: c,
    onClick: u,
    "aria-label": d,
    className: f
  } = e;
  return (0, r.jsxs)("div", {
    className: s()(eE.HS, f),
    children: [(0, r.jsxs)(m.sqX, {
      "aria-label": d,
      onClick: u,
      children: [null != t && (0, r.jsx)("div", {
        className: eE.x_,
        children: t
      }), (0, r.jsxs)("div", {
        className: eE.rN,
        children: [null != n && (0, r.jsx)("div", {
          className: eE.$t,
          children: n
        }), (0, r.jsxs)("div", {
          className: eE.c8,
          children: [(0, r.jsx)(m.Text, {
            variant: "text-md/medium",
            color: "text-strong",
            className: eE.SZ,
            children: i
          }), null != a && (0, r.jsx)(m.Text, {
            variant: "text-sm/normal",
            color: "text-subtle",
            children: a
          }), null != l && (0, r.jsx)(m.Text, {
            variant: "text-xxs/medium",
            color: "text-muted",
            children: l
          })]
        }), (0, r.jsx)("div", {
          className: eE.a$,
          children: o
        })]
      })]
    }), (0, r.jsx)("div", {
      className: eE.Om,
      children: c
    })]
  })
}

function eM(e) {
  let {
    children: t,
    className: n,
    onExpand: a
  } = e, o = eI(e, ["children", "className", "onExpand"]), [l, c] = i.useState(false), u = e => {
    c(e), null == a || a(e)
  };
  return (0, r.jsx)(m.Nt8, {
    className: eE.uR,
    collapsibleContent: (0, r.jsx)("div", {
      className: eE.oV,
      children: t
    }),
    children: e => {
      let {
        onClick: t
      } = e;
      return (0, r.jsx)(ej, eS(eA({}, o), {
        onClick: e => {
          u(!l), null == t || t(e)
        },
        className: s()(eE.AC, n),
        action: (0, r.jsxs)("div", {
          className: eE.rc,
          children: [o.action, l ? (0, r.jsx)(m.abt, {
            size: "custom",
            width: eN,
            height: eN,
            color: "var(--interactive-text-active)"
          }) : (0, r.jsx)(m._BQ, {
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
let ek = new Set([Chunk41984.AR.INITIALIZING, Chunk41984.AR.WAITING_FOR_SCREEN_TYPE_RESOLUTION, Chunk41984.AR.WAITING_FOR_MODULE_TRACKING, Chunk41984.AR.WAITING_FOR_OVERLAY_OPEN, Chunk41984.AR.WAITING_FOR_POPOUT_OPEN, Chunk41984.AR.WAITING_FOR_MODULE_POPOUT_CAPTURE, Chunk41984.AR.WAITING_FOR_REACT_INITIALIZATION, Chunk41984.AR.WAITING_FOR_PID_FOCUS, Chunk41984.AR.WAITING_FOR_SUCCESSFUL_SHOW]),
  eU = e => {
    e.preventDefault(), e.stopPropagation()
  };

function eG() {
  var e, t, n;
  let {
    runningGame: a,
    runningGameApplication: s
  } = (0, R.A)(), o = null == a ? true : a.pid, c = (0, p.bG)([U.default], () => null == a || null == o ? null : U.default.getTrackedGameByPid(o), [a, o], l()), {
    enabledLegacy: u,
    enabledOOP: d
  } = (0, p.cf)([ee.A, en.A], () => {
    if (null == a && null == c) return {
      enabledLegacy: false,
      enabledOOP: false
    };
    if (null == a) {
      var e, t;
      return {
        enabledLegacy: null != (e = null == c ? true : c.legacyEnabled) && e,
        enabledOOP: null != (t = null == c ? true : c.oopEnabled) && t
      }
    }
    return (0, N.hw)(a, false, [ee.A, en.A])
  }, [a, c]), f = (0, p.bG)([N.Ay, ee.A, en.A], () => null == a ? null : (0, N.xU)(a, N.Ay, ee.A, en.A), [a], l()), [_, E] = i.useState(d), [b, O] = i.useState(u), [S, I] = i.useState(false);
  i.useEffect(() => {
    E(d), O(u)
  }, [d, u]);
  let T = !(0, ed.supportsLegacy)(),
    C = !(0, ed.supportsOutOfProcess)(),
    {
      legacyEnabled: w,
      oopEnabled: L
    } = (0, p.cf)([U.default], () => U.default.getGlobalEnabledStatus()),
    M = (e, t) => {
      var n, r, i;
      if (null == a) return;
      let s = false,
        o = false;
      switch (t) {
        case x.OverlayToggledClientSettingType.LEGACY_GAME:
          O(e), g.A.toggleOverlay(a, e, _), s = !e && b;
          break;
        case x.OverlayToggledClientSettingType.OOP_GAME:
          E(e), g.A.toggleOverlay(a, b, e), o = !e && _;
          break;
        case x.OverlayToggledClientSettingType.LEGACY:
          y.A.setEnabled(e, L), (0, x.Q3)(e, x.OverlayToggledClientSettingType.LEGACY, null != (n = a.id) ? n : null);
          break;
        case x.OverlayToggledClientSettingType.OOP:
          y.A.setEnabled(w, e), (0, x.Q3)(e, x.OverlayToggledClientSettingType.OOP, null != (r = a.id) ? r : null)
      }(s || o) && (0, B.L)(s ? x.OverlayToggledClientSettingType.LEGACY_GAME : x.OverlayToggledClientSettingType.OOP_GAME, null != (i = a.id) ? i : null)
    },
    k = (e, t) => {
      let n = !t && e,
        r = !L && _,
        i = !w && b,
        a = !_ && L,
        s = !b && w;
      switch (true) {
        case n && (r || i) && (a || s):
          return "both";
        case n && (r || i):
          return "global";
        default:
          return "game"
      }
    },
    G = (e, t) => {
      if (null == a) return;
      let n = false,
        r = false;
      switch (t) {
        case "game":
          g.A.toggleOverlay(a, e, e), O(e), E(e), n = !e && b, r = !e && _;
          break;
        case "global":
          y.A.setEnabled(e, e), n = !e && w, r = !e && L;
          break;
        case "both":
          y.A.setEnabled(e, e), g.A.toggleOverlay(a, e, e), O(e), E(e), n = !e && w || !e && b, r = !e && L || !e && _
      }
      let i = null;
      if (n ? i = "game" === t ? x.OverlayToggledClientSettingType.LEGACY_GAME : x.OverlayToggledClientSettingType.LEGACY : r && (i = "game" === t ? x.OverlayToggledClientSettingType.OOP_GAME : x.OverlayToggledClientSettingType.OOP), null != i) {
        var s;
        (0, B.L)(i, null != (s = a.id) ? s : null)
      }
    },
    V = T && C,
    F = !w && !L,
    H = !_ && !w && b && !T,
    Y = !b && !L && _ && !C,
    W = (null == c ? true : c.overlayMethod) === j.Ue.Disabled,
    K = (null == c ? true : c.state) === j.AR.OVERLAY_RENDERING && !W,
    z = (null == c ? true : c.state) != null && ek.has(c.state) && !W,
    q = (null == c ? true : c.overlayMethod) === j.Ue.OutOfProcess,
    X = (null == c ? true : c.overlayMethod) === j.Ue.OutOfProcessLimitedInteraction,
    Q = (null == c ? true : c.overlayMethod) === j.Ue.Hook,
    $ = (null == c ? true : c.state) === j.AR.OVERLAY_CRASHED || (null == c ? true : c.state) === j.AR.OVERLAY_CRASHED_DISABLED,
    J = !_ && !b,
    [et, er] = (() => {
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
          return [eg.intl.format(eg.t.hFVBIg, {
            overlayMethod: eg.intl.string(eg.t.a3eXSw),
            overlayMethodHook: e
          }), null];
        case K && X:
          function t(e, t) {
            return (0, r.jsx)(m.Text, {
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
        case K && Q:
          function n() {
            var e, t;
            switch (true) {
              case (null == c ? true : c.fullscreenType) !== A.aI.BORDERLESS_FULLSCREEN:
                return eg.intl.string(eg.t.mJmbeC);
              case C:
                return eg.intl.string(eg.t.C7bLTQ);
              case !(null != (e = null == c ? true : c.oopEnabled) && e):
                return eg.intl.string(eg.t.WiY24u);
              case !L:
                return eg.intl.string(eg.t.cAFVsL);
              case !(null != (t = null == c ? true : c.supportsOutOfProcess) && t):
                return eg.intl.string(eg.t.XcGEcs);
              default:
                return eg.intl.string(eg.t.bJXH2v)
            }
          }

          function i(e, t) {
            return (0, r.jsx)(m.Text, {
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
        case $:
          return [eg.intl.string(eg.t.OFC2aw), null];
        case V:
          return [eg.intl.string(eg.t.m7X4az), null];
        case F:
          return [eg.intl.string(eg.t["9DUS5l"]), null];
        case J:
          return [eg.intl.string(eg.t.nQ9EdJ), null];
        case H:
        case Y:
          return [eg.intl.string(eg.t.VWUn0a), null];
        case z:
          if (q) return [eg.intl.string(eg.t["s8+CFq"]), null];
          if (Q) return [eg.intl.string(eg.t.JEEdqt), null];
          if (X) return [eg.intl.string(eg.t.pzBMwY), null];
          return [eg.intl.string(eg.t["2Xhy9k"]), null];
        case null == c:
          return [eg.intl.string(eg.t.vwHPRi), null];
        case W: {
          let e = (null == c ? true : c.fullscreenType) === A.aI.FULLSCREEN ? eg.intl.string(eg.t.mJmbeC) : null;
          return [eg.intl.string(eg.t.VPW4XY), e]
        }
        default:
          return [eg.intl.string(eg.t.ONovP5), null]
      }
    })();
  (0, v.Ay)(() => {
    g.A.getDetectableGames()
  });
  let [ei, ea] = i.useMemo(() => z ? ["text-muted", m.LU0.colors.TEXT_MUTED.css] : K && X ? ["text-feedback-warning", m.LU0.colors.TEXT_FEEDBACK_WARNING.css] : K && q ? ["text-feedback-positive", m.LU0.colors.TEXT_FEEDBACK_POSITIVE.css] : K && Q ? ["text-strong", m.LU0.colors.TEXT_STRONG.css] : ["interactive-text-default", m.LU0.colors.INTERACTIVE_TEXT_DEFAULT.css], [z, K, X, q, Q]);
  return null == a ? null : (0, r.jsxs)(eM, {
    onExpand: I,
    className: S ? eE.tx : true,
    title: (0, r.jsxs)(r.Fragment, {
      children: [null != (e = null != (t = null != (n = null == s ? true : s.name) ? n : null == f ? true : f.name) ? t : null == a ? true : a.gameName) ? e : "", null != f && f.verified ? (0, r.jsx)(h.m, {
        text: eg.intl.string(eg.t["4PJP5p"]),
        children: (0, r.jsx)(D.A, {
          size: eR,
          color: m.LU0.colors.BACKGROUND_BRAND.css,
          children: (0, r.jsx)(m.Uzd, {
            size: "custom",
            width: eR,
            height: eR,
            color: m.LU0.colors.WHITE.css
          })
        })
      }) : null]
    }),
    description: et,
    hint: null != er ? er : true,
    header: (0, r.jsxs)(r.Fragment, {
      children: [K || z ? (0, r.jsx)(m.kN9, {
        size: "xxs",
        color: ea
      }) : (0, r.jsx)("div", {
        className: eE.W4
      }), (0, r.jsx)(m.Text, {
        variant: "text-xs/semibold",
        color: ei,
        children: eg.intl.string(eg.t.CDOx3w)
      })]
    }),
    icon: (0, r.jsx)(P.A, {
      game: s,
      pid: null == a ? true : a.pid,
      size: P.M.MEDIUM
    }),
    "aria-label": eg.intl.string(eg.t["87O5GC"]),
    action: (0, r.jsx)(m.DUT, {
      onClick: e => eU(e),
      children: (0, r.jsx)(m.dOG, {
        checked: _ && L || b && w,
        disabled: V,
        onChange: e => {
          G(e, k(e, _ && L || b && w))
        }
      })
    }),
    warning: (0, r.jsx)(Z.A, {
      className: eE.Hh,
      game: a
    }),
    children: [(0, r.jsx)(ej, {
      title: eg.intl.string(eg.t["7BlVIs"]),
      description: eg.intl.string(eg.t.ndgADE),
      hint: L ? true : eg.intl.string(eg.t.cAFVsL),
      "aria-label": eg.intl.string(eg.t["7BlVIs"]),
      action: (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(m.dOG, {
          checked: _ && L,
          disabled: C,
          onChange: e => {
            e && !L ? M(e, x.OverlayToggledClientSettingType.OOP) : M(e, x.OverlayToggledClientSettingType.OOP_GAME)
          }
        }), (0, r.jsx)("div", {
          className: eE.Kz
        })]
      })
    }), (0, r.jsx)(ej, {
      title: eg.intl.string(eg.t.BfFpW1),
      description: eg.intl.string(eg.t.OzInYk),
      hint: w ? true : eg.intl.string(eg.t["3sYHXm"]),
      "aria-label": eg.intl.string(eg.t.BfFpW1),
      action: (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(m.dOG, {
          checked: b && w,
          disabled: T,
          onChange: e => {
            e && !w ? M(e, x.OverlayToggledClientSettingType.LEGACY) : M(e, x.OverlayToggledClientSettingType.LEGACY_GAME)
          }
        }), (0, r.jsx)("div", {
          className: eE.Kz
        })]
      })
    })]
  })
}

function eV(e) {
  let {
    game: t,
    gameApplication: n
  } = e, a = i.useMemo(() => null == t ? null : "pid" in t ? t.pid : null, [t]), s = (0, p.bG)([I.A], () => null != n ? n : I.A.getApplication(null == t ? true : t.id), [n, t]);
  return (0, r.jsx)(P.A, {
    game: s,
    pid: a,
    size: P.M.SMALL
  })
}

function eF(e) {
  let {
    rawGame: t,
    gameApplication: n,
    supportDisabled: a,
    getEnabledFromStatus: s,
    onChange: o,
    clientSettingType: l,
    ariaLabel: c
  } = e, u = (0, p.cf)([N.Ay, ee.A, en.A], () => (0, N.xU)(t, N.Ay, ee.A, en.A)), d = (0, p.cf)([ee.A, en.A], () => (0, N.hw)(t, false, [ee.A, en.A]), [t]), f = s(d), [_, h] = i.useState(f);
  i.useEffect(() => {
    h(f)
  }, [f]);
  let g = e => {
    let n = !e && _;
    if (h(e), o(e, u, d), n) {
      var r, i;
      (0, B.L)(l, null != (r = null != (i = u.id) ? i : null == t ? true : t.id) ? r : null)
    }
  };
  return (0, r.jsx)(ej, {
    title: t.name,
    icon: (0, r.jsx)(eV, {
      game: u,
      gameApplication: n
    }),
    "aria-label": c,
    action: (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(m.dOG, {
        checked: _,
        disabled: a,
        onChange: e => g(e)
      }), (0, r.jsx)("div", {
        className: eE.Kz
      })]
    })
  })
}

function eB() {
  let [e, t] = i.useState(false), {
    legacyEnabled: n,
    oopEnabled: a
  } = (0, p.cf)([U.default], () => U.default.getGlobalEnabledStatus()), s = (0, p.yK)([N.Ay], () => N.Ay.getGamesSeen(true)).filter(e => !(0, q.n1)(e)), o = (0, T.A)(s.map(e => e.id)), l = !(0, ed.supportsLegacy)(), c = e => {
    var t, r;
    y.A.setEnabled(e, a);
    let i = null != (t = null == (r = N.Ay.getCurrentGameForAnalytics()) ? true : r.id) ? t : null;
    (0, x.Q3)(e, x.OverlayToggledClientSettingType.LEGACY, i), !e && n && (0, B.L)(x.OverlayToggledClientSettingType.LEGACY, i)
  }, u = (e, t, n) => {
    let {
      enabledOOP: r
    } = n;
    g.A.toggleOverlay(t, e, r)
  }, d = i.useMemo(() => (0, ed.supportsLegacy)() ? l ? eg.intl.string(eg.t.r9jEVw) : eg.intl.string(eg.t.OzInYk) : eg.intl.string(eg.t["8Ox6/E"]), [l]);
  return 0 === s.length ? (0, r.jsx)(ej, {
    title: eg.intl.string(eg.t.BfFpW1),
    description: d,
    "aria-label": eg.intl.string(eg.t.BfFpW1),
    className: eE.dA,
    action: (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(m.dOG, {
        checked: n,
        disabled: l,
        onChange: e => c(e)
      }), em.OX && (0, r.jsx)("div", {
        className: eE.Kz
      })]
    })
  }) : (0, r.jsxs)(eM, {
    onExpand: t,
    className: e ? eE.tx : true,
    title: eg.intl.string(eg.t.BfFpW1),
    description: d,
    "aria-label": eg.intl.string(eg.t.BfFpW1),
    action: (0, r.jsx)(m.DUT, {
      onClick: e => eU(e),
      children: (0, r.jsx)(m.dOG, {
        checked: n,
        disabled: l,
        onChange: e => c(e)
      })
    }),
    children: [(0, r.jsx)("div", {
      className: eE.SC,
      children: (0, r.jsx)(m.Text, {
        variant: "text-xs/semibold",
        color: "text-muted",
        children: eg.intl.string(eg.t.FzoWRo)
      })
    }), (0, r.jsx)(m.IpV, {
      className: eE.XG,
      children: s.map((e, t) => (0, r.jsx)(eF, {
        rawGame: e,
        clientSettingType: x.OverlayToggledClientSettingType.LEGACY_GAME,
        supportDisabled: l,
        gameApplication: o[t],
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

function eH() {
  let [e, t] = i.useState(false), {
    oopEnabled: n,
    legacyEnabled: a
  } = (0, p.cf)([U.default], () => U.default.getGlobalEnabledStatus()), s = !(0, ed.supportsOutOfProcess)(), o = (0, p.yK)([N.Ay], () => N.Ay.getGamesSeen(true)).filter(e => !(0, q.n1)(e)), l = (0, T.A)(o.map(e => e.id)), c = e => {
    var t, r;
    let i = !e && n;
    y.A.setEnabled(a, e);
    let s = null != (t = null == (r = N.Ay.getCurrentGameForAnalytics()) ? true : r.id) ? t : null;
    (0, x.Q3)(e, x.OverlayToggledClientSettingType.OOP, s), i && (0, B.L)(x.OverlayToggledClientSettingType.OOP, s)
  }, u = (e, t, n) => {
    let {
      enabledLegacy: r
    } = n;
    g.A.toggleOverlay(t, e, r)
  }, d = i.useMemo(() => em.OX ? s ? eg.intl.string(eg.t.C7bLTQ) : eg.intl.string(eg.t.ndgADE) : eg.intl.string(eg.t.m7X4az), [s]);
  return 0 === o.length ? (0, r.jsx)(ej, {
    title: eg.intl.string(eg.t["7BlVIs"]),
    description: d,
    "aria-label": eg.intl.string(eg.t["7BlVIs"]),
    className: eE.dA,
    action: (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(m.dOG, {
        checked: n,
        disabled: s,
        onChange: e => c(e)
      }), em.OX && (0, r.jsx)("div", {
        className: eE.Kz
      })]
    })
  }) : (0, r.jsxs)(eM, {
    onExpand: t,
    className: e ? eE.tx : true,
    title: eg.intl.string(eg.t["7BlVIs"]),
    description: d,
    "aria-label": eg.intl.string(eg.t["7BlVIs"]),
    action: (0, r.jsx)(m.DUT, {
      onClick: e => eU(e),
      children: (0, r.jsx)(m.dOG, {
        checked: n,
        disabled: s,
        onChange: e => c(e)
      })
    }),
    children: [(0, r.jsx)("div", {
      className: eE.SC,
      children: (0, r.jsx)(m.Text, {
        variant: "text-xs/semibold",
        color: "text-muted",
        children: eg.intl.string(eg.t.FzoWRo)
      })
    }), (0, r.jsx)(m.IpV, {
      className: eE.XG,
      children: o.map((e, t) => (0, r.jsx)(eF, {
        rawGame: e,
        clientSettingType: x.OverlayToggledClientSettingType.OOP_GAME,
        gameApplication: l[t],
        supportDisabled: s,
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

function eY() {
  return (0, M.X4)(S.A.USER_SETTINGS) ? (0, r.jsx)(ej, {
    title: eg.intl.string(eg.t["z4/l+V"]),
    description: eg.intl.string(eg.t["3aZq/0"]),
    action: (0, r.jsx)(m.Button, {
      variant: "primary",
      text: eg.intl.string(eg.t.s2nVhG),
      onClick: () => {
        (0, Y.b)(S.A.USER_SETTINGS, e_.BRT.APP)
      }
    }),
    "aria-label": eg.intl.string(eg.t["z4/l+V"])
  }) : null
}

function eW(e) {
  var t;
  let {
    isLegacySettings: n = false
  } = e, i = (0, p.bG)([ei.Ay], () => ei.Ay.getOverlayKeybind()), a = !(0, ed.supportsLegacy)(), s = !(0, ed.supportsOutOfProcess)(), [o, l] = (0, p.yK)([N.Ay], () => [N.Ay.canShowAdminWarning, N.Ay.getVisibleGame()], []), c = (0, X.NP)(), d = null != l && l.elevated && o && !c, f = !(0, ei.DV)(null != (t = null == i ? true : i.shortcut) ? t : []);

  function _(e) {
    u()(null != i, "Keybind should never be undefined"), E.A.setKeybind(eS(eA({}, i), {
      shortcut: e
    }))
  }
  return (0, r.jsx)("div", {
    className: eE.hc,
    children: (0, r.jsxs)("div", {
      className: eE.eH,
      children: [(0, r.jsxs)("div", {
        className: eE.Bu,
        children: [(0, r.jsx)(m.Text, {
          variant: n ? "text-md/semibold" : "text-md/medium",
          color: "text-strong",
          children: eg.intl.string(eg.t.VsAZcC)
        }), d && (0, r.jsx)(m.Text, {
          variant: "text-xs/normal",
          color: "text-feedback-warning",
          className: eE.y7,
          children: eg.intl.string(eg.t.NsowVa)
        }), f && (0, r.jsx)(m.Text, {
          variant: "text-xs/normal",
          color: "text-feedback-warning",
          className: eE.y7,
          children: eg.intl.string(eg.t["UNoTw/"])
        })]
      }), (0, r.jsx)("div", {
        className: eE.IH,
        children: (0, r.jsx)(O.A, {
          disabled: a && s,
          defaultValue: null != i ? i.shortcut : [],
          onChange: _
        })
      })]
    })
  })
}

function eK(e) {
  return [{
    title: eg.t.eVE4LX,
    description: eg.t["72WNqk"],
    disabledSetting: L.M.TEXT_CHAT,
    key: ef.X.OVERLAY_NOTIFICATIONS_TEXT_CHAT
  }, {
    title: eg.t.oifnSh,
    description: eg.t.bgU5r0,
    disabledSetting: L.M.WELCOME_GENERAL,
    key: ef.X.OVERLAY_NOTIFICATIONS_WELCOME
  }, {
    title: eg.t.hqsZJW,
    description: eg.t.kHjdqc,
    disabledSetting: L.M.GO_LIVE_NUDGE,
    key: ef.X.OVERLAY_NOTIFICATIONS_GO_LIVE
  }, {
    title: eg.t.sop3rn,
    description: eg.t.pjgffc,
    disabledSetting: L.M.GAME_ACTIVITY,
    key: ef.X.OVERLAY_NOTIFICATIONS_GAME_ACTIVITY
  }, {
    title: eg.t["2QVhbb"],
    description: eg.t.wQ4ilB,
    disabledSetting: L.M.NOW_PLAYING,
    key: ef.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING
  }, e && {
    title: eg.t["5/21FT"],
    description: eg.t.EIzwfA,
    disabledSetting: L.M.FRIEND_STREAM_WATCH_NUDGE,
    key: ef.X.OVERLAY_NOTIFICATIONS_FRIEND_STREAM_WATCH,
    usePredicate: () => {
      let {
        enabled: e
      } = (0, M.QC)("OverlayV3StreamWatchNudge");
      return e
    }
  }].filter(e => false !== e).filter(Boolean)
}

function ez() {
  let {
    enabled: e
  } = (0, M.QC)("OverlayV3StreamWatchNudge"), t = eK(e), n = e => t => {
    y.A.setNotificationDisabledSetting(e, !t)
  }, i = (0, p.bG)([V.A], () => V.A.getDisabledNotifications());
  return (0, r.jsxs)("div", {
    className: eE.AO,
    children: [(0, r.jsx)(m.Heading, {
      variant: "heading-md/semibold",
      color: "text-strong",
      children: eg.intl.string(eg.t.xOE5bA)
    }), t.map(e => (0, r.jsxs)("div", {
      className: eE.vx,
      children: [(0, r.jsxs)("div", {
        className: eE.LS,
        children: [(0, r.jsx)(m.Text, {
          variant: "text-sm/semibold",
          color: "text-strong",
          children: eg.intl.string(e.title)
        }), (0, r.jsx)(m.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: eg.intl.string(e.description)
        })]
      }), (0, r.jsx)(m.dOG, {
        checked: !i.has(e.disabledSetting),
        onChange: n(e.disabledSetting)
      })]
    }, e.disabledSetting))]
  })
}

function eq(e) {
  let t = eX(e.username);
  return t.user = e, t
}

function eX(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    n = arguments.length > 2 && true !== arguments[2] && arguments[2],
    r = arguments.length > 3 && true !== arguments[3] && arguments[3],
    i = "456" + Math.floor(1e6 * Math.random());
  return {
    voiceState: new J.A({
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
    user: new $.A({
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

function eZ() {
  return (0, Q.createChannelRecord)({
    id: "123",
    name: "Test Channel",
    type: e_.rbe.GUILD_VOICE,
    guild_id: "456"
  })
}

function eQ(e) {
  var t, n;
  let {
    isLegacySettings: a = false
  } = e, o = (0, p.bG)([er.default], () => er.default.getCurrentUser()), {
    avatarSizeMode: l,
    displayNameMode: c,
    displayUserMode: u
  } = (0, p.cf)([es.default], () => ({
    avatarSizeMode: es.default.getAvatarSizeMode(),
    displayNameMode: es.default.getDisplayNameMode(),
    displayUserMode: es.default.getDisplayUserMode()
  })), [d] = i.useState(() => [eX(eg.intl.string(eg.t.C0ZDvo), true, false), eX(eg.intl.string(eg.t.iOtj8E), false, false, true), eX(eg.intl.string(eg.t["0oqNgL"]), false, true)]), f = (0, p.bG)([F.A, et.A], () => {
    let e = F.A.getWidgetByType(e_.uss.VOICE_V3);
    if (null == e) return null;
    let t = et.A.getWidget(e.id);
    return null != t && (0, W.ZO)(t) ? t : null
  }), _ = null != (t = null == f || null == (n = f.meta) ? true : n.voiceStatesMaxShown) ? t : 8, h = [null != o ? eq(o) : null, ...d].filter(el.Vq), g = [new Map(h.map(e => [e.user.id, e])), h.map(e => e.user.id)], E = (0, r.jsx)(m.NPJ, {
    theme: e_.NJ8.MIDNIGHT,
    children: e => {
      var t, n;
      return (0, r.jsxs)("div", {
        className: s()(eE.Y5, e),
        children: [(0, r.jsx)("div", {
          className: eE.kJ,
          children: (0, r.jsx)(K.DH, {
            id: "voice-widget",
            title: eg.intl.string(eg.t.KNJ6Vq),
            channel: eZ(),
            overlayVoiceStates: g,
            displayNameMode: c,
            displayUserMode: u,
            avatarSizeMode: l,
            widget: e_.uss.VOICE,
            anchorLeft: true,
            application: null,
            stream: null,
            streamApplication: null,
            streamMetadata: null,
            locked: false,
            pinned: false,
            isSettingsPreview: true,
            isPreviewingInGame: false,
            maxDisplayedVoiceStates: _
          })
        }), (0, r.jsxs)("div", {
          className: eE.R$,
          children: [(0, r.jsx)(z.Pl, {
            children: eg.intl.string(eg.t.KNJ6Vq)
          }), (0, r.jsx)(z.CS, {}), (0, r.jsx)(z.O0, {
            id: null != (t = null == f ? true : f.id) ? t : "voice-widget",
            pinned: null != (n = null == f ? true : f.pinned) && n
          })]
        })]
      })
    }
  });
  return a ? E : (0, r.jsx)("div", {
    className: eE.F9,
    children: E
  })
}

function e$() {
  var e, t;
  let {
    avatarSizeMode: n,
    displayNameMode: i,
    displayUserMode: a
  } = (0, p.cf)([es.default], () => ({
    avatarSizeMode: es.default.getAvatarSizeMode(),
    displayNameMode: es.default.getDisplayNameMode(),
    displayUserMode: es.default.getDisplayUserMode()
  })), s = (0, p.bG)([F.A, et.A], () => {
    let e = F.A.getWidgetByType(e_.uss.VOICE_V3);
    if (null == e) return null;
    let t = et.A.getWidget(e.id);
    return null != t && (0, W.ZO)(t) ? t : null
  }), o = null != (e = null == s || null == (t = s.meta) ? true : t.voiceStatesMaxShown) ? e : 8;

  function l(e) {
    null != s && (e < ew ? (0, b.cC)(s.id, {
      voiceStatesMaxShown: false
    }) : (0, b.cC)(s.id, {
      voiceStatesMaxShown: Math.floor(e)
    }))
  }
  return (0, r.jsxs)("div", {
    className: eE.ri,
    children: [(0, r.jsx)(m.l6P, {
      label: eg.intl.string(eg.t.dnvZSg),
      options: [{
        id: "large",
        label: eg.intl.string(eg.t.YcOxtr),
        value: e_.OSZ.LARGE
      }, {
        id: "small",
        label: eg.intl.string(eg.t.BKIKqx),
        value: e_.OSZ.SMALL
      }],
      onSelectionChange: y.A.setAvatarSizeMode,
      value: n,
      selectionMode: "single",
      fullWidth: true
    }), (0, r.jsx)(m.l6P, {
      label: eg.intl.string(eg.t.J0dpcB),
      options: [{
        id: "always",
        label: eg.intl.string(eg.t.nBmDrT),
        value: e_.pwA.ALWAYS
      }, {
        id: "only-while-speaking",
        label: eg.intl.string(eg.t["2OvIZY"]),
        value: e_.pwA.ONLY_WHILE_SPEAKING
      }, {
        id: "never",
        label: eg.intl.string(eg.t.ekjlPL),
        value: e_.pwA.NEVER
      }],
      onSelectionChange: y.A.setDisplayNameMode,
      value: i,
      selectionMode: "single",
      fullWidth: true
    }), (0, r.jsx)(eQ, {
      isLegacySettings: true
    }), (0, r.jsx)(m.l6P, {
      label: eg.intl.string(eg.t.swsWWC),
      options: [{
        id: "always",
        label: eg.intl.string(eg.t.nBmDrT),
        value: e_.f5z.ALWAYS
      }, {
        id: "only-while-speaking",
        label: eg.intl.string(eg.t["2OvIZY"]),
        value: e_.f5z.ONLY_WHILE_SPEAKING
      }],
      onSelectionChange: y.A.setDisplayUserMode,
      value: a,
      selectionMode: "single",
      fullWidth: true
    }), (0, r.jsx)("div", {
      className: eE.xJ,
      children: (0, r.jsx)(m.Apm, {
        label: eg.intl.string(eg.t["X/Uyzc"]),
        initialValue: o,
        onValueRender: e => e < ew ? eg.intl.string(eg.t.nrUzFL) : "".concat(Math.floor(e)),
        minValue: ew - 1,
        maxValue: eP,
        onValueChange: l,
        markers: eD,
        barStyles: {
          background: m.LU0.colors.BACKGROUND_MOD_STRONG.css
        },
        fillStyles: {
          background: m.LU0.colors.BACKGROUND_BRAND.css
        },
        onMarkerRender: e => e < ew ? eg.intl.string(eg.t.nrUzFL) : "".concat(Math.floor(e))
      })
    })]
  })
}

function eJ(e) {
  let {
    showDivider: t = false
  } = e, [n, i] = (0, C.kn)([_.M.OVERLAY_OOP_SETTINGS_NUX], true, true), a = () => {
    i(eh.i.DISMISS)
  };
  return ((0, v.Ay)(() => () => {
    i(eh.i.AUTO_DISMISS)
  }), n !== _.M.OVERLAY_OOP_SETTINGS_NUX) ? null : (0, r.jsxs)("div", {
    className: eE.xC,
    children: [(0, r.jsx)("div", {
      children: (0, r.jsx)("img", {
        src: eb.A,
        alt: eg.intl.string(eg.t.mdXZh1),
        className: eE.tl
      })
    }), (0, r.jsx)("div", {
      children: (0, r.jsxs)("div", {
        className: eE.vJ,
        children: [(0, r.jsx)(m.Heading, {
          variant: "heading-xl/medium",
          color: "text-strong",
          children: eg.intl.string(eg.t.jzjJQg)
        }), (0, r.jsx)(m.Text, {
          variant: "text-md/normal",
          color: "text-muted",
          children: eg.intl.string(eg.t["5dOfxb"])
        })]
      })
    }), (0, r.jsx)("div", {
      children: (0, r.jsx)("img", {
        src: ey.A,
        alt: eg.intl.string(eg.t.mdXZh1),
        className: eE.lh
      })
    }), (0, r.jsx)("div", {
      "data-button-hoisted-classname-wrapper": true,
      className: eE.VV,
      children: (0, r.jsx)(m.Button, {
        variant: "primary",
        text: eg.intl.string(eg.t.Q26diF),
        onClick: () => a()
      })
    }), t ? (0, r.jsx)("div", {
      className: eE.$x
    }) : null]
  })
}

function e0(e) {
  let {
    runningGame: t,
    runningGameApplication: n
  } = e, a = null == n ? true : n.id, s = (0, p.bG)([V.A], () => V.A.isLimitedInteractionOverrideEnabled(a), [a]), o = i.useMemo(() => null != t && (0, G.qJ)(t.pid), [t]), l = (0, k.A)({
    location: "overlay_user_settings"
  }), {
    disableClickableRegions: c,
    shouldShowKeybindIndicators: u
  } = (0, p.cf)([es.default], () => ({
    disableClickableRegions: es.default.disableClickableRegions,
    shouldShowKeybindIndicators: es.default.showKeybindIndicators
  }));

  function d() {
    y.A.setDisableClickableRegions(!c)
  }

  function f(e) {
    null != n && (0, H.x8)(n.id, e)
  }
  return (0, r.jsxs)("div", {
    className: eE.U$,
    children: [(0, r.jsx)(eW, {
      isLegacySettings: true
    }), l && (0, r.jsx)(m.dOG, {
      label: eg.intl.string(eg.t.XZTl9r),
      checked: u,
      onChange: e => y.A.setShowKeybindIndicators(e)
    }), null != a && (0, r.jsxs)("div", {
      children: [(0, r.jsxs)("div", {
        className: eE.yB,
        children: [(0, r.jsx)(m.Text, {
          variant: "text-md/semibold",
          color: "text-strong",
          children: eg.intl.string(eg.t.wgVQND)
        }), (0, r.jsx)(m.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: eg.intl.string(eg.t["5SsyF5"])
        })]
      }), (0, r.jsx)(m.dOG, {
        checked: s || o,
        disabled: o,
        onChange: e => f(e)
      })]
    }), (0, r.jsxs)("div", {
      children: [(0, r.jsxs)("div", {
        className: eE.yB,
        children: [(0, r.jsx)(m.Text, {
          variant: "text-md/semibold",
          color: "text-strong",
          children: eg.intl.string(eg.t["+eFXxq"])
        }), (0, r.jsx)(m.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: eg.intl.string(eg.t.kivMAp)
        })]
      }), (0, r.jsx)(m.dOG, {
        checked: !c,
        onChange: d
      })]
    })]
  })
}

function e1() {
  let {
    runningGame: e,
    runningGameApplication: t
  } = (0, R.A)(), n = (0, p.bG)([er.default], () => er.default.getCurrentUser());
  return ((0, v.Ay)(() => {
    if (ec.isPlatformEmbedded) return (0, w.a2)(), w.e0
  }), ex(), null == n) ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(ep.A, {
      title: eg.intl.string(eg.t["9cb1Uz"]),
      children: [(0, r.jsx)(eJ, {
        showDivider: true
      }), (0, r.jsxs)("div", {
        className: eE.U$,
        children: [(0, r.jsx)(eG, {}), (0, r.jsx)(eH, {}), (0, r.jsx)(eB, {}), (0, r.jsx)(eY, {})]
      }), (0, r.jsx)("div", {
        className: eE.Ri
      })]
    }), (0, r.jsxs)("div", {
      children: [(0, r.jsx)(e0, {
        runningGame: e,
        runningGameApplication: t
      }), (0, r.jsx)("div", {
        className: eE.Ri
      })]
    }), (0, r.jsxs)(m.D0$, {
      label: eg.intl.string(eg.t.r1TZfh),
      children: [(0, r.jsx)(e$, {}), (0, r.jsx)("div", {
        className: eE.Ri
      })]
    }), (0, r.jsx)(ez, {})]
  })
}