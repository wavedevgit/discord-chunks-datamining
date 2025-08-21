/** Chunk was on web.js **/
/** chunk id: 794704, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => ez
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
  Chunk131970 = require("./131970.js"),
  Chunk730462 = require("./730462.js");

function ep(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function eh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      ep(e, t, n[t])
    })
  }
  return e
}

function em(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function eg(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : em(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function eE(e, t) {
  if (null == e) return {};
  var n, r, i = eb(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function eb(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let ey = eN(null),
  eO = 20,
  ev = 16,
  eI = 1,
  eT = "voice-widget-display-users",
  eS = 25,
  eA = [0, 5, 10, 15, 20, 25];

function eC() {
  let e = eN(ey);
  f().isEqual(module, ey) || (Chunk626135.default.track(Chunk981631.rMx.OVERLAY_SETTINGS_UPDATED, module), ey = module)
}

function eN(e) {
  var t;
  let n = ee.default.getNotificationPositionMode(),
    r = n !== eo._vf.DISABLED,
    i = J.ZP.getOverlayKeybind(),
    a = J.ZP.getOverlayChatKeybind();
  return {
    enabled: $.default.enabled,
    notifications_enabled: r,
    notifications_position: r ? n : null,
    text_notifications_mode: U.Z.isNotificationDisabled(D.OverlayNotificationDisabledSetting.TEXT_CHAT) ? "DISABLED" : "ENABLED",
    hotkey: null != i ? (0, ei.BB)(i.shortcut) : null,
    text_activation_hotkey: null != a ? (0, ei.BB)(a.shortcut) : null,
    text_opacity_slider: ee.default.getTextWidgetOpacity(),
    old_enabled: null != (t = null == e ? true : e.enabled) ? t : $.default.enabled
  }
}

function eR(e) {
  let {
    children: t,
    title: n,
    className: i,
    titleId: a
  } = e;
  return (0, r.jsxs)(h.xJW, {
    children: [null != n && (0, r.jsx)(h.Text, {
      variant: "text-sm/medium",
      color: "text-muted",
      className: ed.formItemTitle,
      id: a,
      children: n
    }), (0, r.jsx)("div", {
      className: o()(ed.rowContainer, i),
      children: t
    })]
  })
}

function eP(e) {
  let {
    header: t,
    icon: n,
    title: i,
    description: a,
    action: s,
    hint: l,
    onClick: c,
    "aria-label": u,
    className: d
  } = e;
  return (0, r.jsxs)(h.kL8, {
    "aria-label": u,
    onClick: c,
    className: o()(ed.groupContainer, d),
    children: [null != t && (0, r.jsx)("div", {
      className: ed.groupHeader,
      children: t
    }), (0, r.jsxs)("div", {
      className: ed.groupContent,
      children: [null != n && (0, r.jsx)("div", {
        className: ed.groupIcon,
        children: n
      }), (0, r.jsxs)("div", {
        className: ed.groupMainContent,
        children: [(0, r.jsx)(h.Text, {
          variant: "text-md/medium",
          color: "header-primary",
          className: ed.groupTitle,
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
        className: ed.groupAction,
        children: s
      })]
    })]
  })
}

function ew(e) {
  var {
    children: t,
    className: n,
    onExpand: a
  } = e, s = eE(e, ["children", "className", "onExpand"]);
  let [l, c] = i.useState(false), u = e => {
    c(e), null == a || a(e)
  };
  return (0, r.jsx)(h.zF9, {
    className: ed.collapseable,
    collapsibleContent: (0, r.jsx)("div", {
      className: ed.groupCollapsedContainer,
      children: t
    }),
    children: e => {
      let {
        onClick: t
      } = e;
      return (0, r.jsx)(eP, eg(eh({}, s), {
        onClick: e => {
          u(!l), null == t || t(e)
        },
        className: o()(ed.mainCollapseableContainer, n),
        action: (0, r.jsxs)("div", {
          className: ed.groupCollapsedAction,
          children: [s.action, l ? (0, r.jsx)(h.CJ0, {
            size: "custom",
            width: eO,
            height: eO,
            color: "var(--interactive-active)"
          }) : (0, r.jsx)(h.Fbu, {
            size: "custom",
            width: eO,
            height: eO,
            color: "var(--interactive-active)"
          })]
        })
      }))
    }
  })
}
let eD = new Set([Chunk837268.mM.INITIALIZING, Chunk837268.mM.WAITING_FOR_SCREEN_TYPE_RESOLUTION, Chunk837268.mM.WAITING_FOR_MODULE_TRACKING, Chunk837268.mM.WAITING_FOR_OVERLAY_OPEN]),
  ex = e => {
    e.preventDefault(), e.stopPropagation()
  };

function eL(e) {
  var t, n, a;
  let {
    runningGame: o,
    runningGameApplication: s
  } = e, c = null == o ? true : o.pid, u = (0, _.e7)([M.default], () => null == o || null == c ? null : M.default.getTrackedGameByPid(c), [o, c], l()), {
    enabledLegacy: d,
    enabledOOP: f
  } = (0, _.cj)([z.Z, X.Z], () => {
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
    return (0, A.b6)(o, false, [z.Z, X.Z])
  }, [o, u]), p = (0, _.e7)([A.ZP, z.Z, X.Z], () => null == o ? null : (0, A.FZ)(o, A.ZP, z.Z, X.Z), [o], l()), [g, E] = i.useState(f), [y, I] = i.useState(d), [T, S] = i.useState(false);
  i.useEffect(() => {
    E(f), I(d)
  }, [f, d]);
  let C = !(0, ea.supportsLegacy)(),
    N = !(0, ea.supportsOutOfProcess)(),
    {
      legacyEnabled: D,
      oopEnabled: L
    } = (0, _.cj)([M.default], () => M.default.getGlobalEnabledStatus()),
    j = (e, t, n) => {
      var r, i, a;
      if (ex(n), null == o) return;
      let s = false,
        l = false;
      switch (t) {
        case w.AE.LEGACY_GAME:
          I(e), m.Z.toggleOverlay(o, e, g), s = !e && y;
          break;
        case w.AE.OOP_GAME:
          E(e), m.Z.toggleOverlay(o, y, e), l = !e && g;
          break;
        case w.AE.LEGACY:
          b.Z.setEnabled(e, L), (0, w.ou)(e, w.AE.LEGACY, null != (r = o.id) ? r : null);
          break;
        case w.AE.OOP:
          b.Z.setEnabled(D, e), (0, w.ou)(e, w.AE.OOP, null != (i = o.id) ? i : null)
      }(s || l) && (0, B.l)(s ? w.AE.LEGACY_GAME : w.AE.OOP_GAME, null != (a = o.id) ? a : null)
    },
    k = (e, t) => {
      let n = !t && e,
        r = !L && g,
        i = !D && y,
        a = !g && L,
        o = !y && D;
      switch (true) {
        case n && (r || i) && (a || o):
          return "both";
        case n && (r || i):
          return "global";
        default:
          return "game"
      }
    },
    U = (e, t, n) => {
      if (ex(n), null == o) return;
      let r = false,
        i = false;
      switch (t) {
        case "game":
          m.Z.toggleOverlay(o, e, e), I(e), E(e), r = !e && y, i = !e && g;
          break;
        case "global":
          b.Z.setEnabled(e, e), r = !e && D, i = !e && L;
          break;
        case "both":
          b.Z.setEnabled(e, e), m.Z.toggleOverlay(o, e, e), I(e), E(e), r = !e && D || !e && y, i = !e && L || !e && g
      }
      let a = null;
      if (r ? a = "game" === t ? w.AE.LEGACY_GAME : w.AE.LEGACY : i && (a = "game" === t ? w.AE.OOP_GAME : w.AE.OOP), null != a) {
        var s;
        (0, B.l)(a, null != (s = o.id) ? s : null)
      }
    },
    G = C && N,
    Z = !D && !L,
    V = !g && !D && y && !C,
    F = !y && !L && g && !N,
    H = (null == u ? true : u.overlayMethod) === x.gl.Disabled,
    Y = (null == u ? true : u.state) === x.mM.OVERLAY_RENDERING && !H,
    W = (null == u ? true : u.state) != null && eD.has(u.state) && !H,
    K = (null == u ? true : u.overlayMethod) === x.gl.OutOfProcess,
    q = (null == u ? true : u.overlayMethod) === x.gl.OutOfProcessLimitedInteraction,
    Q = (null == u ? true : u.overlayMethod) === x.gl.Hook,
    J = (null == u ? true : u.state) === x.mM.OVERLAY_CRASHED || (null == u ? true : u.state) === x.mM.OVERLAY_CRASHED_DISABLED,
    $ = !g && !y,
    [ee, et] = (() => {
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
          return [eu.intl.format(eu.t.hFVBIi, {
            overlayMethod: eu.intl.string(eu.t.a3eXS0),
            overlayMethodHook: e
          }), null];
        case Y && q:
          function t(e, t) {
            return (0, r.jsx)(h.Text, {
              tag: "span",
              variant: "text-sm/medium",
              color: "text-feedback-warning",
              children: e
            }, t)
          }
          return [eu.intl.format(eu.t.hFVBIi, {
            overlayMethod: eu.intl.string(eu.t["506AbW"]),
            overlayMethodHook: t
          }), null];
        case Y && Q:
          function n() {
            var e, t;
            switch (true) {
              case (null == u ? true : u.fullscreenType) !== O.Jx.BORDERLESS_FULLSCREEN:
                return eu.intl.string(eu.t.mJmbeH);
              case N:
                return eu.intl.string(eu.t.C7bLTU);
              case !(null != (e = null == u ? true : u.oopEnabled) && e):
                return eu.intl.string(eu.t.WiY24u);
              case !L:
                return eu.intl.string(eu.t.cAFVsL);
              case !(null != (t = null == u ? true : u.supportsOutOfProcess) && t):
                return eu.intl.string(eu.t.XcGEcn);
              default:
                return eu.intl.string(eu.t.bJXH2t)
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
          return [eu.intl.format(eu.t.hFVBIi, {
            overlayMethod: eu.intl.string(eu.t.bvlpDQ),
            overlayMethodHook: i
          }), n()];
        case J:
          return [eu.intl.string(eu.t.OFC2a2), null];
        case G:
          return [eu.intl.string(eu.t.m7X4a2), null];
        case Z:
          return [eu.intl.string(eu.t["9DUS5u"]), null];
        case $:
          return [eu.intl.string(eu.t.nQ9EdH), null];
        case V:
        case F:
          return [eu.intl.string(eu.t.VWUn0d), null];
        case W:
          if (K) return [eu.intl.string(eu.t["s8+CFh"]), null];
          if (Q) return [eu.intl.string(eu.t.JEEdqq), null];
          if (q) return [eu.intl.string(eu.t.pzBMwc), null];
          return [eu.intl.string(eu.t["2Xhy9v"]), null];
        case null == u:
          return [eu.intl.string(eu.t.vwHPRk), null];
        default:
          return [eu.intl.string(eu.t.ONovPz), null]
      }
    })();
  (0, v.ZP)(() => {
    m.Z.getDetectableGames()
  });
  let [en, er] = i.useMemo(() => W ? ["text-muted", h.TVs.colors.TEXT_MUTED.css] : Y && q ? ["text-feedback-warning", h.TVs.colors.TEXT_FEEDBACK_WARNING.css] : Y && K ? ["text-feedback-positive", h.TVs.colors.TEXT_FEEDBACK_POSITIVE.css] : Y && Q ? ["text-primary", h.TVs.colors.TEXT_PRIMARY.css] : ["interactive-normal", h.TVs.colors.INTERACTIVE_NORMAL.css], [W, Y, q, K, Q]);
  return null == o ? null : (0, r.jsxs)(ew, {
    onExpand: S,
    className: T ? ed.expandedContainer : true,
    title: (0, r.jsxs)(r.Fragment, {
      children: [null != (a = null != (n = null != (t = null == s ? true : s.name) ? t : null == p ? true : p.name) ? n : null == o ? true : o.gameName) ? a : "", null != p && p.verified ? (0, r.jsx)(h.ua7, {
        text: eu.intl.string(eu.t["4PJP5u"]),
        children: e => (0, r.jsx)(P.Z, eg(eh({
          size: ev,
          color: h.TVs.colors.BG_BRAND.css
        }, e), {
          children: (0, r.jsx)(h.kmB, {
            size: "custom",
            width: ev,
            height: ev,
            color: h.TVs.colors.WHITE.css
          })
        }))
      }) : null]
    }),
    description: ee,
    hint: null != et ? et : true,
    header: (0, r.jsxs)(r.Fragment, {
      children: [Y || W ? (0, r.jsx)(h.pzj, {
        size: "xxs",
        color: er
      }) : (0, r.jsx)("div", {
        className: ed.playingDot
      }), (0, r.jsx)(h.Text, {
        variant: "text-xs/semibold",
        color: en,
        children: eu.intl.string(eu.t.CDOx39)
      })]
    }),
    icon: (0, r.jsx)(R.Z, {
      game: s,
      pid: null == o ? true : o.pid,
      size: R.Z.Sizes.MEDIUM
    }),
    "aria-label": eu.intl.string(eu.t["87O5GB"]),
    action: (0, r.jsx)(h.P3F, {
      onClick: e => ex(e),
      children: (0, r.jsx)(h.rsf, {
        checked: g && L || y && D,
        disabled: G,
        onChange: (e, t) => {
          U(e, k(e, g && L || y && D), t)
        }
      })
    }),
    children: [(0, r.jsx)(eP, {
      title: eu.intl.string(eu.t["7BlVIi"]),
      description: eu.intl.string(eu.t.ndgADA),
      hint: L ? true : eu.intl.string(eu.t.cAFVsL),
      "aria-label": eu.intl.string(eu.t["7BlVIi"]),
      action: (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(h.rsf, {
          checked: g && L,
          disabled: N,
          onChange: (e, t) => {
            e && !L ? j(e, w.AE.OOP, t) : j(e, w.AE.OOP_GAME, t)
          }
        }), (0, r.jsx)("div", {
          className: ed.emptySpacer
        })]
      })
    }), (0, r.jsx)(eP, {
      title: eu.intl.string(eu.t.BfFpW1),
      description: eu.intl.string(eu.t.OzInYm),
      hint: D ? true : eu.intl.string(eu.t["3sYHXl"]),
      "aria-label": eu.intl.string(eu.t.BfFpW1),
      action: (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(h.rsf, {
          checked: y && D,
          disabled: C,
          onChange: (e, t) => {
            e && !D ? j(e, w.AE.LEGACY, t) : j(e, w.AE.LEGACY_GAME, t)
          }
        }), (0, r.jsx)("div", {
          className: ed.emptySpacer
        })]
      })
    })]
  })
}

function ej(e) {
  let {
    game: t,
    gameApplication: n
  } = e, a = i.useMemo(() => null == t ? null : "pid" in t ? t.pid : null, [t]), o = (0, _.e7)([I.Z], () => null != n ? n : I.Z.getApplication(null == t ? true : t.id), [n, t]);
  return (0, r.jsx)(R.Z, {
    game: o,
    pid: a,
    size: R.Z.Sizes.SMALL
  })
}

function eM(e) {
  let {
    rawGame: t,
    gameApplication: n,
    supportDisabled: a,
    getEnabledFromStatus: o,
    onChange: s,
    clientSettingType: l,
    ariaLabel: c
  } = e, u = (0, _.cj)([A.ZP, z.Z, X.Z], () => (0, A.FZ)(t, A.ZP, z.Z, X.Z)), d = (0, _.cj)([z.Z, X.Z], () => (0, A.b6)(t, false, [z.Z, X.Z]), [t]), f = o(d), [p, m] = i.useState(f);
  i.useEffect(() => {
    m(f)
  }, [f]);
  let g = (e, n) => {
    let r = !e && p;
    if (ex(n), m(e), s(e, u, d), r) {
      var i, a;
      (0, B.l)(l, null != (a = null != (i = u.id) ? i : null == t ? true : t.id) ? a : null)
    }
  };
  return (0, r.jsx)(eP, {
    title: t.name,
    icon: (0, r.jsx)(ej, {
      game: u,
      gameApplication: n
    }),
    "aria-label": c,
    action: (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(h.rsf, {
        checked: p,
        disabled: a,
        onChange: (e, t) => g(e, t)
      }), (0, r.jsx)("div", {
        className: ed.emptySpacer
      })]
    })
  })
}

function ek() {
  let [e, t] = Chunk647438.useState(false), {
    legacyEnabled: n,
    oopEnabled: a
  } = (0, Chunk442837.cj)([Chunk371651.default], () => Chunk371651.default.getGlobalEnabledStatus()), o = (0, Chunk442837.Wu)([Chunk594190.ZP], () => Chunk594190.ZP.getGamesSeen(true)).filter(e => !(0, H.le)(e)), s = (0, Chunk835473.Z)(o.map(e => e.id)), l = !(0, Chunk145597.supportsLegacy)(), c = (e, t) => {
    var r, i;
    ex(t), b.Z.setEnabled(e, a);
    let o = null != (i = null == (r = A.ZP.getCurrentGameForAnalytics()) ? true : r.id) ? i : null;
    (0, w.ou)(e, w.AE.LEGACY, o), !e && n && (0, B.l)(w.AE.LEGACY, o)
  }, u = (e, t, n) => {
    let {
      enabledOOP: r
    } = n;
    m.Z.toggleOverlay(t, e, r)
  }, d = Chunk647438.useMemo(() => (0, Chunk145597.supportsLegacy)() ? l ? Chunk388032.intl.string(Chunk388032.t.r9jEV1) : Chunk388032.intl.string(Chunk388032.t.OzInYm) : Chunk388032.intl.string(Chunk388032.t["8Ox6/P"]), [l]);
  return 0 === o.length ? (0, Chunk951288.jsx)(eP, {
    title: Chunk388032.intl.string(Chunk388032.t.BfFpW1),
    description: Chunk392711,
    "aria-label": Chunk388032.intl.string(Chunk388032.t.BfFpW1),
    className: Chunk607547.standaloneContainer,
    action: (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [(0, Chunk951288.jsx)(Chunk481060.rsf, {
        checked: require,
        disabled: l,
        onChange: (e, t) => c(e, t)
      }), Chunk987650.iP && (0, Chunk951288.jsx)("div", {
        className: Chunk607547.emptySpacer
      })]
    })
  }) : (0, Chunk951288.jsxs)(ew, {
    onExpand: exports,
    className: module ? Chunk607547.expandedContainer : true,
    title: Chunk388032.intl.string(Chunk388032.t.BfFpW1),
    description: Chunk392711,
    "aria-label": Chunk388032.intl.string(Chunk388032.t.BfFpW1),
    action: (0, Chunk951288.jsx)(Chunk481060.P3F, {
      onClick: e => ex(e),
      children: (0, Chunk951288.jsx)(Chunk481060.rsf, {
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
      children: o.map((e, t) => (0, r.jsx)(eM, {
        rawGame: e,
        clientSettingType: w.AE.LEGACY_GAME,
        supportDisabled: l,
        gameApplication: s[t],
        getEnabledFromStatus: e => {
          let {
            enabledLegacy: t
          } = e;
          return t
        },
        onChange: u,
        ariaLabel: eu.intl.format(eu.t.hvPYsL, {
          gameName: e.name
        }).toString()
      }, e.id))
    })]
  })
}

function eU() {
  let [e, t] = Chunk647438.useState(false), {
    oopEnabled: n,
    legacyEnabled: a
  } = (0, Chunk442837.cj)([Chunk371651.default], () => Chunk371651.default.getGlobalEnabledStatus()), o = !(0, Chunk145597.supportsOutOfProcess)(), s = (0, Chunk442837.Wu)([Chunk594190.ZP], () => Chunk594190.ZP.getGamesSeen(true)).filter(e => !(0, H.le)(e)), l = (0, Chunk835473.Z)(Chunk348327.map(e => e.id)), c = (e, t) => {
    var r, i;
    ex(t);
    let o = !e && n;
    b.Z.setEnabled(a, e);
    let s = null != (i = null == (r = A.ZP.getCurrentGameForAnalytics()) ? true : r.id) ? i : null;
    (0, w.ou)(e, w.AE.OOP, s), o && (0, B.l)(w.AE.OOP, s)
  }, u = (e, t, n) => {
    let {
      enabledLegacy: r
    } = n;
    m.Z.toggleOverlay(t, e, r)
  }, d = Chunk647438.useMemo(() => Chunk987650.iP ? o ? Chunk388032.intl.string(Chunk388032.t.C7bLTU) : Chunk388032.intl.string(Chunk388032.t.ndgADA) : Chunk388032.intl.string(Chunk388032.t.m7X4a2), [o]);
  return 0 === Chunk348327.length ? (0, Chunk951288.jsx)(eP, {
    title: Chunk388032.intl.string(Chunk388032.t["7BlVIi"]),
    description: Chunk392711,
    "aria-label": Chunk388032.intl.string(Chunk388032.t["7BlVIi"]),
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
  }) : (0, Chunk951288.jsxs)(ew, {
    onExpand: exports,
    className: module ? Chunk607547.expandedContainer : true,
    title: Chunk388032.intl.string(Chunk388032.t["7BlVIi"]),
    description: Chunk392711,
    "aria-label": Chunk388032.intl.string(Chunk388032.t["7BlVIi"]),
    action: (0, Chunk951288.jsx)(Chunk481060.P3F, {
      onClick: e => ex(e),
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
      children: Chunk348327.map((e, t) => (0, r.jsx)(eM, {
        rawGame: e,
        clientSettingType: w.AE.OOP_GAME,
        gameApplication: l[t],
        supportDisabled: o,
        getEnabledFromStatus: e => {
          let {
            enabledOOP: t
          } = e;
          return t
        },
        onChange: u,
        ariaLabel: eu.intl.format(eu.t.nByTd3, {
          gameName: e.name
        }).toString()
      }, e.id))
    })]
  })
}

function eG() {
  var e;
  let t = (0, Chunk442837.e7)([Chunk556296.ZP], () => Chunk556296.ZP.getOverlayKeybind()),
    n = !(0, Chunk145597.supportsLegacy)(),
    i = !(0, Chunk145597.supportsOutOfProcess)(),
    [a, o] = (0, Chunk442837.Wu)([Chunk594190.ZP], () => [Chunk594190.ZP.canShowAdminWarning, Chunk594190.ZP.getVisibleGame()], []),
    s = null != o && o.elevated && Chunk120356,
    l = !(0, Chunk556296.I1)(null != (e = null == exports ? true : exports.shortcut) ? module : []);

  function c(e) {
    u()(null != t, "Keybind should never be undefined"), g.Z.setKeybind(eg(eh({}, t), {
      shortcut: e
    }))
  }
  return (0, Chunk951288.jsx)(eR, {
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
let eB = (e, t) => [{
  title: eu.t.eVE4LS,
  description: eu.t["72WNqq"],
  disabledSetting: D.OverlayNotificationDisabledSetting.TEXT_CHAT
}, {
  title: eu.t.hqsZJS,
  description: eu.t.kHjdqa,
  disabledSetting: D.OverlayNotificationDisabledSetting.GO_LIVE_NUDGE
}, e && {
  title: eu.t.sop3rq,
  description: eu.t.pjgffX,
  disabledSetting: D.OverlayNotificationDisabledSetting.GAME_ACTIVITY
}, t && {
  title: eu.t["2QVhbW"],
  description: eu.t.wQ4ilJ,
  disabledSetting: D.OverlayNotificationDisabledSetting.NOW_PLAYING
}].filter(e => false !== e).filter(Boolean);

function eZ() {
  let {
    allowActivityWidget: e,
    allowNowPlaying: t
  } = (0, Chunk32300.o4)("user_settings"), n = eB(module, exports), i = e => t => {
    b.Z.setNotificationDisabledSetting(e, !t)
  }, a = (0, Chunk442837.e7)([Chunk624864.Z], () => Chunk624864.Z.getDisabledNotifications());
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk607547.notificationSettingsContainer,
    children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
      variant: "heading-md/semibold",
      color: "header-primary",
      children: Chunk388032.intl.string(Chunk388032.t.xOE5bG)
    }), require.map(e => (0, r.jsxs)(eR, {
      className: ed.notificationItem,
      children: [(0, r.jsxs)("div", {
        className: ed.notificationDescriptionContainer,
        children: [(0, r.jsx)(h.Text, {
          variant: "text-sm/semibold",
          color: "header-primary",
          children: eu.intl.string(e.title)
        }), (0, r.jsx)(h.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: eu.intl.string(e.description)
        })]
      }), (0, r.jsx)(h.j7V, {
        value: !a.has(e.disabledSetting),
        onChange: i(e.disabledSetting),
        hideBorder: true
      })]
    }, e.disabledSetting))]
  })
}

function eV(e) {
  let t = eF(e.username);
  return t.user = e, t
}

function eF(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    n = arguments.length > 2 && true !== arguments[2] && arguments[2],
    r = arguments.length > 3 && true !== arguments[3] && arguments[3],
    i = "456" + Math.floor(1e6 * Math.random());
  return {
    voiceState: new K.Z({
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
    user: new W.Z({
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

function eH() {
  return (0, Chunk131704.kt)({
    id: "123",
    name: "Test Channel",
    type: Chunk981631.d4z.GUILD_VOICE,
    guild_id: "456"
  })
}

function eY() {
  var e, t;
  let {
    avatarSizeMode: n,
    displayNameMode: a,
    displayUserMode: s
  } = (0, Chunk442837.cj)([Chunk237997.default], () => ({
    avatarSizeMode: Chunk237997.default.getAvatarSizeMode(),
    displayNameMode: Chunk237997.default.getDisplayNameMode(),
    displayUserMode: Chunk237997.default.getDisplayUserMode()
  })), l = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser()), [c] = Chunk647438.useState(() => [eF(Chunk388032.intl.string(Chunk388032.t.C0ZDvr), true, false), eF(Chunk388032.intl.string(Chunk388032.t.iOtj8P), false, false, true), eF(Chunk388032.intl.string(Chunk388032.t["0oqNgI"]), false, true)]), u = (0, Chunk442837.e7)([Chunk610394.ZP, Chunk355863.Z], () => {
    let e = Chunk610394.ZP.getWidgetByType(Chunk981631.Odu.VOICE_V3);
    if (null == module) return null;
    let t = Chunk355863.Z.getWidget(module.id);
    return null != exports && (0, Chunk340101.Aw)(exports) ? exports : null
  }), d = null != (t = null == u || null == (e = u.meta) ? true : module.voiceStatesMaxShown) ? exports : Chunk501787.At, f = [null != l ? eV(l) : null, ...Chunk512722].filter(Chunk823379.lm), p = [new Map(f.map(e => [e.user.id, e])), f.map(e => e.user.id)];

  function m(e) {
    null != u && (e < eI ? (0, E.zG)(u.id, {
      voiceStatesMaxShown: ec.Og
    }) : (0, E.zG)(u.id, {
      voiceStatesMaxShown: Math.floor(e)
    }))
  }
  let g = Chunk981631.BRd.MIDNIGHT;
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk607547.voiceSettingsContainer,
    children: [(0, Chunk951288.jsx)(eR, {
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
        onChange: e => b.Z.setAvatarSizeMode(e),
        value: require
      })
    }), (0, Chunk951288.jsx)(eR, {
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
        onChange: e => b.Z.setDisplayNameMode(e),
        value: Chunk120356
      })
    }), (0, Chunk951288.jsx)(Chunk481060.f6W, {
      theme: Chunk660216,
      children: e => {
        var t, i;
        return (0, r.jsxs)("div", {
          className: o()(ed.widgetContainer, e),
          children: [(0, r.jsx)("div", {
            className: ed.voiceWidgetContainer,
            children: (0, r.jsx)(V.kI, {
              id: "voice-widget",
              title: eu.intl.string(eu.t.KNJ6Vl),
              channel: eH(),
              overlayVoiceStates: p,
              displayNameMode: a,
              displayUserMode: s,
              avatarSizeMode: n,
              widget: eo.Odu.VOICE,
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
            className: ed.widgetHeaderContainer,
            children: [(0, r.jsx)(F.PI, {
              children: eu.intl.string(eu.t.KNJ6Vl)
            }), (0, r.jsx)(F.ls, {}), (0, r.jsx)(F.RT, {
              id: null != (t = null == u ? true : u.id) ? t : "voice-widget",
              pinned: null != (i = null == u ? true : u.pinned) && i
            })]
          })]
        })
      }
    }), (0, Chunk951288.jsx)(eR, {
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
        onChange: e => b.Z.setDisplayUserMode(e),
        value: Chunk348327
      })
    }), (0, Chunk951288.jsx)(eR, {
      title: Chunk388032.intl.string(Chunk388032.t["X/Uyzc"]),
      titleId: eT,
      children: (0, Chunk951288.jsx)("div", {
        className: Chunk607547.sliderContainer,
        children: (0, Chunk951288.jsx)(Chunk481060.iRW, {
          initialValue: Chunk392711,
          onValueRender: e => e < eI ? eu.intl.string(eu.t.nrUzFB) : "".concat(Math.floor(e)),
          minValue: eI - 1,
          maxValue: eS,
          onValueChange: Chunk224706,
          markers: eA,
          barStyles: {
            background: Chunk481060.TVs.colors.BACKGROUND_MOD_STRONG.css
          },
          fillStyles: {
            background: Chunk481060.TVs.colors.BG_BRAND.css
          },
          "aria-labelledby": eT,
          onMarkerRender: e => e < eI ? eu.intl.string(eu.t.nrUzFB) : "".concat(Math.floor(e))
        })
      })
    })]
  })
}

function eW() {
  let [e, t] = (0, Chunk243778.US)([Chunk704215.z.OVERLAY_OOP_SETTINGS_NUX], true, true), n = () => {
    exports(Chunk921944.L.DISMISS)
  };
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
        onClick: () => require()
      })
    }), (0, Chunk951288.jsx)("div", {
      className: Chunk607547.nuxDivider
    })]
  })
}

function eK(e) {
  let {
    runningGame: t,
    runningGameApplication: n
  } = e, a = null == n ? true : n.id, o = (0, _.e7)([U.Z], () => U.Z.isLimitedInteractionOverrideEnabled(a), [a]), s = i.useMemo(() => null != t && (0, k.H8)(t.pid), [t]), l = (0, j.Z)({
    location: "overlay_user_settings"
  }), {
    disableClickableRegions: c,
    shouldShowKeybindIndicators: u
  } = (0, _.cj)([ee.default], () => ({
    disableClickableRegions: ee.default.disableClickableRegions,
    shouldShowKeybindIndicators: ee.default.showKeybindIndicators
  }));

  function d() {
    b.Z.setDisableClickableRegions(!c)
  }

  function f(e) {
    null != n && b.Z.setLimitedInteractionOverride(n.id, e)
  }
  return (0, r.jsxs)("div", {
    className: ed.overlayEnabledSettingsContainer,
    children: [(0, r.jsx)(eG, {}), l && (0, r.jsx)(eR, {
      children: (0, r.jsx)(h.j7V, {
        value: u,
        onChange: e => b.Z.setShowKeybindIndicators(e),
        hideBorder: true,
        children: eu.intl.string(eu.t.XZTl9v)
      })
    }), null != a && (0, r.jsxs)(eR, {
      children: [(0, r.jsxs)("div", {
        className: ed.limitedInteractionOverrideContainer,
        children: [(0, r.jsx)(h.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          children: eu.intl.string(eu.t.wgVQND)
        }), (0, r.jsx)(h.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: eu.intl.string(eu.t["5SsyFx"])
        })]
      }), (0, r.jsx)(h.j7V, {
        value: o || s,
        disabled: s,
        onChange: e => f(e),
        hideBorder: true
      })]
    }), (0, r.jsxs)(eR, {
      children: [(0, r.jsxs)("div", {
        className: ed.limitedInteractionOverrideContainer,
        children: [(0, r.jsx)(h.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          children: eu.intl.string(eu.t["+eFXxs"])
        }), (0, r.jsx)(h.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: eu.intl.string(eu.t.kivMAg)
        })]
      }), (0, r.jsx)(h.j7V, {
        value: !c,
        onChange: d,
        hideBorder: true
      })]
    })]
  })
}

function ez(e) {
  let {
    className: t,
    showHeader: n
  } = e, {
    runningGame: i,
    runningGameApplication: a
  } = (0, C.Z)(), o = (0, L.o4)("user_settings").overlayV3UI, s = (0, _.e7)([Q.default], () => Q.default.getCurrentUser());
  return ((0, v.ZP)(() => {
    if (er.isPlatformEmbedded) return (0, N.Ky)(), N.P7
  }), eC(), null == s) ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(h.hjN, {
      tag: h.RB0.H1,
      title: eu.intl.string(eu.t["9cb1U1"]),
      children: [o ? (0, r.jsx)(eW, {}) : null, (0, r.jsxs)("div", {
        className: ed.overlayEnabledSettingsContainer,
        children: [(0, r.jsx)(eL, {
          runningGame: i,
          runningGameApplication: a
        }), (0, r.jsx)(eU, {}), (0, r.jsx)(ek, {})]
      }), (0, r.jsx)("div", {
        className: ed.settingsDivider
      })]
    }), (0, r.jsxs)(h.hjN, {
      children: [(0, r.jsx)(eK, {
        runningGame: i,
        runningGameApplication: a
      }), (0, r.jsx)("div", {
        className: ed.settingsDivider
      })]
    }), (0, r.jsxs)(h.hjN, {
      title: eu.intl.string(eu.t.r1TZfn),
      children: [(0, r.jsx)(eY, {}), (0, r.jsx)("div", {
        className: ed.settingsDivider
      })]
    }), (0, r.jsx)(h.hjN, {
      children: (0, r.jsx)(eZ, {})
    })]
  })
}