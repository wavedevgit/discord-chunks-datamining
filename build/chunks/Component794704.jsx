/** Chunk was on web.js **/
/** chunk id: 794704, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => eq
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
let eI = eP(null),
  eT = 20,
  eS = 16,
  eA = 1,
  eC = 25,
  eN = [0, 5, 10, 15, 20, 25];

function eR() {
  let e = eP(eI);
  f().isEqual(module, eI) || (Chunk626135.default.track(Chunk981631.rMx.OVERLAY_SETTINGS_UPDATED, module), eI = module)
}

function eP(e) {
  var t;
  let n = en.default.getNotificationPositionMode(),
    r = n !== ec._vf.DISABLED,
    i = ee.ZP.getOverlayKeybind(),
    a = ee.ZP.getOverlayChatKeybind();
  return {
    enabled: et.default.enabled,
    notifications_enabled: r,
    notifications_position: r ? n : null,
    text_notifications_mode: U.Z.isNotificationDisabled(ed.n0.TextChat) ? "DISABLED" : "ENABLED",
    hotkey: null != i ? (0, eo.BB)(i.shortcut) : null,
    text_activation_hotkey: null != a ? (0, eo.BB)(a.shortcut) : null,
    text_opacity_slider: en.default.getTextWidgetOpacity(),
    old_enabled: null != (t = null == e ? true : e.enabled) ? t : et.default.enabled
  }
}

function ew(e) {
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
    children: [(0, r.jsxs)(h.kL8, {
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
          children: [(0, r.jsx)(h.Text, {
            variant: "text-md/medium",
            color: "header-primary",
            className: ep.groupTitle,
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

function eD(e) {
  var {
    children: t,
    className: n,
    onExpand: a
  } = e, s = eO(e, ["children", "className", "onExpand"]);
  let [l, c] = i.useState(false), u = e => {
    c(e), null == a || a(e)
  };
  return (0, r.jsx)(h.zF9, {
    className: ep.collapseable,
    collapsibleContent: (0, r.jsx)("div", {
      className: ep.groupCollapsedContainer,
      children: t
    }),
    children: e => {
      let {
        onClick: t
      } = e;
      return (0, r.jsx)(ew, ey(eE({}, s), {
        onClick: e => {
          u(!l), null == t || t(e)
        },
        className: o()(ep.mainCollapseableContainer, n),
        action: (0, r.jsxs)("div", {
          className: ep.groupCollapsedAction,
          children: [s.action, l ? (0, r.jsx)(h.CJ0, {
            size: "custom",
            width: eT,
            height: eT,
            color: "var(--interactive-active)"
          }) : (0, r.jsx)(h.Fbu, {
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
let eL = new Set([Chunk837268.mM.INITIALIZING, Chunk837268.mM.WAITING_FOR_SCREEN_TYPE_RESOLUTION, Chunk837268.mM.WAITING_FOR_MODULE_TRACKING, Chunk837268.mM.WAITING_FOR_OVERLAY_OPEN, Chunk837268.mM.WAITING_FOR_POPOUT_OPEN, Chunk837268.mM.WAITING_FOR_MODULE_POPOUT_CAPTURE, Chunk837268.mM.WAITING_FOR_REACT_INITIALIZATION, Chunk837268.mM.WAITING_FOR_PID_FOCUS]),
  ex = e => {
    e.preventDefault(), e.stopPropagation()
  };

function eM(e) {
  var t, n, a;
  let {
    runningGame: o,
    runningGameApplication: s
  } = e, c = null == o ? true : o.pid, u = (0, _.e7)([j.default], () => null == o || null == c ? null : j.default.getTrackedGameByPid(c), [o, c], l()), {
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
    return (0, A.b6)(o, false, [X.Z, J.Z])
  }, [o, u]), p = (0, _.e7)([A.ZP, X.Z, J.Z], () => null == o ? null : (0, A.FZ)(o, A.ZP, X.Z, J.Z), [o], l()), [g, E] = i.useState(f), [y, I] = i.useState(d), [T, S] = i.useState(false);
  i.useEffect(() => {
    E(f), I(d)
  }, [f, d]);
  let C = !(0, es.supportsLegacy)(),
    N = !(0, es.supportsOutOfProcess)(),
    {
      legacyEnabled: D,
      oopEnabled: x
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
          b.Z.setEnabled(e, x), (0, w.ou)(e, w.OverlayToggledClientSettingType.LEGACY, null != (n = o.id) ? n : null);
          break;
        case w.OverlayToggledClientSettingType.OOP:
          b.Z.setEnabled(D, e), (0, w.ou)(e, w.OverlayToggledClientSettingType.OOP, null != (r = o.id) ? r : null)
      }(a || s) && (0, B.l)(a ? w.OverlayToggledClientSettingType.LEGACY_GAME : w.OverlayToggledClientSettingType.OOP_GAME, null != (i = o.id) ? i : null)
    },
    k = (e, t) => {
      let n = !t && e,
        r = !x && g,
        i = !D && y,
        a = !g && x,
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
    U = (e, t) => {
      if (null == o) return;
      let n = false,
        r = false;
      switch (t) {
        case "game":
          m.Z.toggleOverlay(o, e, e), I(e), E(e), n = !e && y, r = !e && g;
          break;
        case "global":
          b.Z.setEnabled(e, e), n = !e && D, r = !e && x;
          break;
        case "both":
          b.Z.setEnabled(e, e), m.Z.toggleOverlay(o, e, e), I(e), E(e), n = !e && D || !e && y, r = !e && x || !e && g
      }
      let i = null;
      if (n ? i = "game" === t ? w.OverlayToggledClientSettingType.LEGACY_GAME : w.OverlayToggledClientSettingType.LEGACY : r && (i = "game" === t ? w.OverlayToggledClientSettingType.OOP_GAME : w.OverlayToggledClientSettingType.OOP), null != i) {
        var a;
        (0, B.l)(i, null != (a = o.id) ? a : null)
      }
    },
    G = C && N,
    Z = !D && !x,
    F = !g && !D && y && !C,
    V = !y && !x && g && !N,
    H = (null == u ? true : u.overlayMethod) === L.gl.Disabled,
    Y = (null == u ? true : u.state) === L.mM.OVERLAY_RENDERING && !H,
    K = (null == u ? true : u.state) != null && eL.has(u.state) && !H,
    z = (null == u ? true : u.overlayMethod) === L.gl.OutOfProcess,
    q = (null == u ? true : u.overlayMethod) === L.gl.OutOfProcessLimitedInteraction,
    Q = (null == u ? true : u.overlayMethod) === L.gl.Hook,
    $ = (null == u ? true : u.state) === L.mM.OVERLAY_CRASHED || (null == u ? true : u.state) === L.mM.OVERLAY_CRASHED_DISABLED,
    ee = !g && !y,
    [et, en] = (() => {
      switch (true) {
        case Y && z:
          function e(e, t) {
            return (0, r.jsx)(h.Text, {
              tag: "span",
              variant: "text-sm/medium",
              color: "text-feedback-positive",
              children: e
            }, t)
          }
          return [e_.intl.format(e_.t.hFVBIg, {
            overlayMethod: e_.intl.string(e_.t.a3eXSw),
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
          return [e_.intl.format(e_.t.hFVBIg, {
            overlayMethod: e_.intl.string(e_.t["506Aba"]),
            overlayMethodHook: t
          }), null];
        case Y && Q:
          function n() {
            var e, t;
            switch (true) {
              case (null == u ? true : u.fullscreenType) !== O.Jx.BORDERLESS_FULLSCREEN:
                return e_.intl.string(e_.t.mJmbeC);
              case N:
                return e_.intl.string(e_.t.C7bLTQ);
              case !(null != (e = null == u ? true : u.oopEnabled) && e):
                return e_.intl.string(e_.t.WiY24u);
              case !x:
                return e_.intl.string(e_.t.cAFVsL);
              case !(null != (t = null == u ? true : u.supportsOutOfProcess) && t):
                return e_.intl.string(e_.t.XcGEcs);
              default:
                return e_.intl.string(e_.t.bJXH2v)
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
          return [e_.intl.format(e_.t.hFVBIg, {
            overlayMethod: e_.intl.string(e_.t.bvlpDR),
            overlayMethodHook: i
          }), n()];
        case $:
          return [e_.intl.string(e_.t.OFC2aw), null];
        case G:
          return [e_.intl.string(e_.t.m7X4az), null];
        case Z:
          return [e_.intl.string(e_.t["9DUS5l"]), null];
        case ee:
          return [e_.intl.string(e_.t.nQ9EdJ), null];
        case F:
        case V:
          return [e_.intl.string(e_.t.VWUn0a), null];
        case K:
          if (z) return [e_.intl.string(e_.t["s8+CFq"]), null];
          if (Q) return [e_.intl.string(e_.t.JEEdqt), null];
          if (q) return [e_.intl.string(e_.t.pzBMwY), null];
          return [e_.intl.string(e_.t["2Xhy9k"]), null];
        case null == u:
          return [e_.intl.string(e_.t.vwHPRi), null];
        default:
          return [e_.intl.string(e_.t.ONovP5), null]
      }
    })();
  (0, v.ZP)(() => {
    m.Z.getDetectableGames()
  });
  let [er, ei] = i.useMemo(() => K ? ["text-muted", h.TVs.colors.TEXT_MUTED.css] : Y && q ? ["text-feedback-warning", h.TVs.colors.TEXT_FEEDBACK_WARNING.css] : Y && z ? ["text-feedback-positive", h.TVs.colors.TEXT_FEEDBACK_POSITIVE.css] : Y && Q ? ["text-primary", h.TVs.colors.TEXT_PRIMARY.css] : ["interactive-normal", h.TVs.colors.INTERACTIVE_NORMAL.css], [K, Y, q, z, Q]);
  return null == o ? null : (0, r.jsxs)(eD, {
    onExpand: S,
    className: T ? ep.expandedContainer : true,
    title: (0, r.jsxs)(r.Fragment, {
      children: [null != (a = null != (n = null != (t = null == s ? true : s.name) ? t : null == p ? true : p.name) ? n : null == o ? true : o.gameName) ? a : "", null != p && p.verified ? (0, r.jsx)(h.aML, {
        "data-migration-pending": true,
        text: e_.intl.string(e_.t["4PJP5p"]),
        children: e => (0, r.jsx)(P.Z, ey(eE({
          size: eS,
          color: h.TVs.colors.BG_BRAND.css
        }, e), {
          children: (0, r.jsx)(h.kmB, {
            size: "custom",
            width: eS,
            height: eS,
            color: h.TVs.colors.WHITE.css
          })
        }))
      }) : null]
    }),
    description: et,
    hint: null != en ? en : true,
    header: (0, r.jsxs)(r.Fragment, {
      children: [Y || K ? (0, r.jsx)(h.pzj, {
        size: "xxs",
        color: ei
      }) : (0, r.jsx)("div", {
        className: ep.playingDot
      }), (0, r.jsx)(h.Text, {
        variant: "text-xs/semibold",
        color: er,
        children: e_.intl.string(e_.t.CDOx3w)
      })]
    }),
    icon: (0, r.jsx)(R.Z, {
      game: s,
      pid: null == o ? true : o.pid,
      size: R.A.MEDIUM
    }),
    "aria-label": e_.intl.string(e_.t["87O5GC"]),
    action: (0, r.jsx)(h.P3F, {
      onClick: e => ex(e),
      children: (0, r.jsx)(h.rsf, {
        checked: g && x || y && D,
        disabled: G,
        onChange: e => {
          U(e, k(e, g && x || y && D))
        }
      })
    }),
    warning: (0, r.jsx)(W.Z, {
      className: ep.systemServiceWarning,
      game: o
    }),
    children: [(0, r.jsx)(ew, {
      title: e_.intl.string(e_.t["7BlVIs"]),
      description: e_.intl.string(e_.t.ndgADE),
      hint: x ? true : e_.intl.string(e_.t.cAFVsL),
      "aria-label": e_.intl.string(e_.t["7BlVIs"]),
      action: (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(h.rsf, {
          checked: g && x,
          disabled: N,
          onChange: e => {
            e && !x ? M(e, w.OverlayToggledClientSettingType.OOP) : M(e, w.OverlayToggledClientSettingType.OOP_GAME)
          }
        }), (0, r.jsx)("div", {
          className: ep.emptySpacer
        })]
      })
    }), (0, r.jsx)(ew, {
      title: e_.intl.string(e_.t.BfFpW1),
      description: e_.intl.string(e_.t.OzInYk),
      hint: D ? true : e_.intl.string(e_.t["3sYHXm"]),
      "aria-label": e_.intl.string(e_.t.BfFpW1),
      action: (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(h.rsf, {
          checked: y && D,
          disabled: C,
          onChange: e => {
            e && !D ? M(e, w.OverlayToggledClientSettingType.LEGACY) : M(e, w.OverlayToggledClientSettingType.LEGACY_GAME)
          }
        }), (0, r.jsx)("div", {
          className: ep.emptySpacer
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
    size: R.A.SMALL
  })
}

function ek(e) {
  let {
    rawGame: t,
    gameApplication: n,
    supportDisabled: a,
    getEnabledFromStatus: o,
    onChange: s,
    clientSettingType: l,
    ariaLabel: c
  } = e, u = (0, _.cj)([A.ZP, X.Z, J.Z], () => (0, A.FZ)(t, A.ZP, X.Z, J.Z)), d = (0, _.cj)([X.Z, J.Z], () => (0, A.b6)(t, false, [X.Z, J.Z]), [t]), f = o(d), [p, m] = i.useState(f);
  i.useEffect(() => {
    m(f)
  }, [f]);
  let g = e => {
    let n = !e && p;
    if (m(e), s(e, u, d), n) {
      var r, i;
      (0, B.l)(l, null != (i = null != (r = u.id) ? r : null == t ? true : t.id) ? i : null)
    }
  };
  return (0, r.jsx)(ew, {
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
        onChange: e => g(e)
      }), (0, r.jsx)("div", {
        className: ep.emptySpacer
      })]
    })
  })
}

function eU() {
  let [e, t] = Chunk647438.useState(false), {
    legacyEnabled: n,
    oopEnabled: a
  } = (0, Chunk442837.cj)([Chunk371651.default], () => Chunk371651.default.getGlobalEnabledStatus()), o = (0, Chunk442837.Wu)([Chunk594190.ZP], () => Chunk594190.ZP.getGamesSeen(true)).filter(e => !(0, H.le)(e)), s = (0, Chunk835473.Z)(o.map(e => e.id)), l = !(0, Chunk145597.supportsLegacy)(), c = e => {
    var t, r;
    b.Z.setEnabled(e, a);
    let i = null != (r = null == (t = A.ZP.getCurrentGameForAnalytics()) ? true : t.id) ? r : null;
    (0, w.ou)(e, w.OverlayToggledClientSettingType.LEGACY, i), !e && n && (0, B.l)(w.OverlayToggledClientSettingType.LEGACY, i)
  }, u = (e, t, n) => {
    let {
      enabledOOP: r
    } = n;
    m.Z.toggleOverlay(t, e, r)
  }, d = Chunk647438.useMemo(() => (0, Chunk145597.supportsLegacy)() ? l ? Chunk388032.intl.string(Chunk388032.t.r9jEVw) : Chunk388032.intl.string(Chunk388032.t.OzInYk) : Chunk388032.intl.string(Chunk388032.t["8Ox6/E"]), [l]);
  return 0 === o.length ? (0, Chunk951288.jsx)(ew, {
    title: Chunk388032.intl.string(Chunk388032.t.BfFpW1),
    description: Chunk392711,
    "aria-label": Chunk388032.intl.string(Chunk388032.t.BfFpW1),
    className: Chunk607547.standaloneContainer,
    action: (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [(0, Chunk951288.jsx)(Chunk481060.rsf, {
        checked: require,
        disabled: l,
        onChange: e => c(e)
      }), Chunk987650.iP && (0, Chunk951288.jsx)("div", {
        className: Chunk607547.emptySpacer
      })]
    })
  }) : (0, Chunk951288.jsxs)(eD, {
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
        onChange: e => c(e)
      })
    }),
    children: [(0, Chunk951288.jsx)("div", {
      className: Chunk607547.subtitleContainer,
      children: (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-xs/semibold",
        color: "text-muted",
        children: Chunk388032.intl.string(Chunk388032.t.FzoWRo)
      })
    }), (0, Chunk951288.jsx)(Chunk481060.zJl, {
      className: Chunk607547.scroller,
      children: o.map((e, t) => (0, r.jsx)(ek, {
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
        ariaLabel: e_.intl.format(e_.t.hvPYsF, {
          gameName: e.name
        }).toString()
      }, e.id))
    })]
  })
}

function eG() {
  let [e, t] = Chunk647438.useState(false), {
    oopEnabled: n,
    legacyEnabled: a
  } = (0, Chunk442837.cj)([Chunk371651.default], () => Chunk371651.default.getGlobalEnabledStatus()), o = !(0, Chunk145597.supportsOutOfProcess)(), s = (0, Chunk442837.Wu)([Chunk594190.ZP], () => Chunk594190.ZP.getGamesSeen(true)).filter(e => !(0, H.le)(e)), l = (0, Chunk835473.Z)(Chunk348327.map(e => e.id)), c = e => {
    var t, r;
    let i = !e && n;
    b.Z.setEnabled(a, e);
    let o = null != (r = null == (t = A.ZP.getCurrentGameForAnalytics()) ? true : t.id) ? r : null;
    (0, w.ou)(e, w.OverlayToggledClientSettingType.OOP, o), i && (0, B.l)(w.OverlayToggledClientSettingType.OOP, o)
  }, u = (e, t, n) => {
    let {
      enabledLegacy: r
    } = n;
    m.Z.toggleOverlay(t, e, r)
  }, d = Chunk647438.useMemo(() => Chunk987650.iP ? o ? Chunk388032.intl.string(Chunk388032.t.C7bLTQ) : Chunk388032.intl.string(Chunk388032.t.ndgADE) : Chunk388032.intl.string(Chunk388032.t.m7X4az), [o]);
  return 0 === Chunk348327.length ? (0, Chunk951288.jsx)(ew, {
    title: Chunk388032.intl.string(Chunk388032.t["7BlVIs"]),
    description: Chunk392711,
    "aria-label": Chunk388032.intl.string(Chunk388032.t["7BlVIs"]),
    className: Chunk607547.standaloneContainer,
    action: (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [(0, Chunk951288.jsx)(Chunk481060.rsf, {
        checked: require,
        disabled: o,
        onChange: e => c(e)
      }), Chunk987650.iP && (0, Chunk951288.jsx)("div", {
        className: Chunk607547.emptySpacer
      })]
    })
  }) : (0, Chunk951288.jsxs)(eD, {
    onExpand: exports,
    className: module ? Chunk607547.expandedContainer : true,
    title: Chunk388032.intl.string(Chunk388032.t["7BlVIs"]),
    description: Chunk392711,
    "aria-label": Chunk388032.intl.string(Chunk388032.t["7BlVIs"]),
    action: (0, Chunk951288.jsx)(Chunk481060.P3F, {
      onClick: e => ex(e),
      children: (0, Chunk951288.jsx)(Chunk481060.rsf, {
        checked: require,
        disabled: o,
        onChange: e => c(e)
      })
    }),
    children: [(0, Chunk951288.jsx)("div", {
      className: Chunk607547.subtitleContainer,
      children: (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-xs/semibold",
        color: "text-muted",
        children: Chunk388032.intl.string(Chunk388032.t.FzoWRo)
      })
    }), (0, Chunk951288.jsx)(Chunk481060.zJl, {
      className: Chunk607547.scroller,
      children: Chunk348327.map((e, t) => (0, r.jsx)(ek, {
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
        ariaLabel: e_.intl.format(e_.t.nByTd3, {
          gameName: e.name
        }).toString()
      }, e.id))
    })]
  })
}

function eB() {
  var e;
  let t = (0, Chunk442837.e7)([Chunk556296.ZP], () => Chunk556296.ZP.getOverlayKeybind()),
    n = !(0, Chunk145597.supportsLegacy)(),
    i = !(0, Chunk145597.supportsOutOfProcess)(),
    [a, o] = (0, Chunk442837.Wu)([Chunk594190.ZP], () => [Chunk594190.ZP.canShowAdminWarning, Chunk594190.ZP.getVisibleGame()], []),
    s = (0, Chunk865066.hi)(),
    l = null != o && o.elevated && Chunk120356 && !Chunk348327,
    c = !(0, Chunk556296.I1)(null != (e = null == exports ? true : exports.shortcut) ? module : []);

  function d(e) {
    u()(null != t, "Keybind should never be undefined"), g.Z.setKeybind(ey(eE({}, t), {
      shortcut: e
    }))
  }
  return (0, Chunk951288.jsx)("div", {
    className: Chunk607547.keybindMainContainer,
    children: (0, Chunk951288.jsxs)("div", {
      className: Chunk607547.keybindContainer,
      children: [(0, Chunk951288.jsxs)("div", {
        className: Chunk607547.keybindHeaderContainer,
        children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          children: Chunk388032.intl.string(Chunk388032.t.VsAZcC)
        }), l && (0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-xs/normal",
          color: "text-feedback-warning",
          className: Chunk607547.keybindAdminWarning,
          children: Chunk388032.intl.string(Chunk388032.t.NsowVa)
        }), Chunk512722 && (0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-xs/normal",
          color: "text-feedback-warning",
          className: Chunk607547.keybindAdminWarning,
          children: Chunk388032.intl.string(Chunk388032.t["UNoTw/"])
        })]
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk607547.keybindRecorderContainer,
        children: (0, Chunk951288.jsx)(Chunk825209.Z, {
          disabled: require && Chunk647438,
          defaultValue: null != exports ? exports.shortcut : [],
          onChange: Chunk392711
        })
      })]
    })
  })
}
let eZ = (e, t, n) => [{
  title: e_.t.eVE4LX,
  description: e_.t["72WNqk"],
  disabledSetting: D.i.TEXT_CHAT
}, {
  title: e_.t.oifnSh,
  description: e_.t.bgU5r0,
  disabledSetting: D.i.WELCOME_GENERAL
}, {
  title: e_.t.hqsZJW,
  description: e_.t.kHjdqc,
  disabledSetting: D.i.GO_LIVE_NUDGE
}, e && {
  title: e_.t.sop3rn,
  description: e_.t.pjgffc,
  disabledSetting: D.i.GAME_ACTIVITY
}, t && {
  title: e_.t["2QVhbb"],
  description: e_.t.wQ4ilB,
  disabledSetting: D.i.NOW_PLAYING
}, n && {
  title: e_.t["5/21FT"],
  description: e_.t.EIzwfA,
  disabledSetting: D.i.FRIEND_STREAM_WATCH_NUDGE
}].filter(e => false !== e).filter(Boolean);

function eF() {
  let {
    allowActivityWidget: e,
    allowNowPlaying: t
  } = (0, Chunk32300.o4)("user_settings"), {
    enabled: n
  } = (0, Chunk32300.aq)("OverlayV3StreamWatchNudge"), i = eZ(module, exports, require), a = e => t => {
    b.Z.setNotificationDisabledSetting(e, !t)
  }, o = (0, Chunk442837.e7)([Chunk624864.Z], () => Chunk624864.Z.getDisabledNotifications());
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk607547.notificationSettingsContainer,
    children: [(0, Chunk951288.jsx)(Chunk481060.Heading, {
      variant: "heading-md/semibold",
      color: "header-primary",
      children: Chunk388032.intl.string(Chunk388032.t.xOE5bA)
    }), Chunk647438.map(e => (0, r.jsxs)("div", {
      className: ep.notificationItem,
      children: [(0, r.jsxs)("div", {
        className: ep.notificationDescriptionContainer,
        children: [(0, r.jsx)(h.Text, {
          variant: "text-sm/semibold",
          color: "header-primary",
          children: e_.intl.string(e.title)
        }), (0, r.jsx)(h.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: e_.intl.string(e.description)
        })]
      }), (0, r.jsx)(h.rsf, {
        checked: !o.has(e.disabledSetting),
        onChange: a(e.disabledSetting)
      })]
    }, e.disabledSetting))]
  })
}

function eV(e) {
  let t = eH(e.username);
  return t.user = e, t
}

function eH(e) {
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
    user: new z.default({
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

function eY() {
  return (0, Chunk131704.createChannelRecord)({
    id: "123",
    name: "Test Channel",
    type: Chunk981631.d4z.GUILD_VOICE,
    guild_id: "456"
  })
}

function eW() {
  var e, t;
  let {
    avatarSizeMode: n,
    displayNameMode: a,
    displayUserMode: s
  } = (0, Chunk442837.cj)([Chunk237997.default], () => ({
    avatarSizeMode: Chunk237997.default.getAvatarSizeMode(),
    displayNameMode: Chunk237997.default.getDisplayNameMode(),
    displayUserMode: Chunk237997.default.getDisplayUserMode()
  })), l = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser()), [c] = Chunk647438.useState(() => [eH(Chunk388032.intl.string(Chunk388032.t.C0ZDvo), true, false), eH(Chunk388032.intl.string(Chunk388032.t.iOtj8E), false, false, true), eH(Chunk388032.intl.string(Chunk388032.t["0oqNgL"]), false, true)]), u = (0, Chunk442837.e7)([Chunk610394.ZP, Chunk355863.Z], () => {
    let e = Chunk610394.ZP.getWidgetByType(Chunk981631.Odu.VOICE_V3);
    if (null == module) return null;
    let t = Chunk355863.Z.getWidget(module.id);
    return null != exports && (0, Chunk340101.Aw)(exports) ? exports : null
  }), d = null != (t = null == u || null == (e = u.meta) ? true : module.voiceStatesMaxShown) ? exports : Chunk501787.At, f = [null != l ? eV(l) : null, ...Chunk512722].filter(Chunk823379.lm), p = [new Map(f.map(e => [e.user.id, e])), f.map(e => e.user.id)];

  function m(e) {
    null != u && (e < eA ? (0, E.zG)(u.id, {
      voiceStatesMaxShown: ef.Og
    }) : (0, E.zG)(u.id, {
      voiceStatesMaxShown: Math.floor(e)
    }))
  }
  let g = Chunk981631.BRd.MIDNIGHT;
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk607547.voiceSettingsContainer,
    children: [(0, Chunk951288.jsx)(Chunk481060.q4e, {
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
    }), (0, Chunk951288.jsx)(Chunk481060.q4e, {
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
    }), (0, Chunk951288.jsx)(Chunk481060.f6W, {
      theme: Chunk660216,
      children: e => {
        var t, i;
        return (0, r.jsxs)("div", {
          className: o()(ep.widgetContainer, e),
          children: [(0, r.jsx)("div", {
            className: ep.voiceWidgetContainer,
            children: (0, r.jsx)(F.kI, {
              id: "voice-widget",
              title: e_.intl.string(e_.t.KNJ6Vq),
              channel: eY(),
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
            children: [(0, r.jsx)(V.PI, {
              children: e_.intl.string(e_.t.KNJ6Vq)
            }), (0, r.jsx)(V.ls, {}), (0, r.jsx)(V.RT, {
              id: null != (t = null == u ? true : u.id) ? t : "voice-widget",
              pinned: null != (i = null == u ? true : u.pinned) && i
            })]
          })]
        })
      }
    }), (0, Chunk951288.jsx)(Chunk481060.q4e, {
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
    }), (0, Chunk951288.jsx)("div", {
      className: Chunk607547.sliderContainer,
      children: (0, Chunk951288.jsx)(Chunk481060.iRW, {
        label: Chunk388032.intl.string(Chunk388032.t["X/Uyzc"]),
        initialValue: Chunk392711,
        onValueRender: e => e < eA ? e_.intl.string(e_.t.nrUzFL) : "".concat(Math.floor(e)),
        minValue: eA - 1,
        maxValue: eC,
        onValueChange: Chunk224706,
        markers: eN,
        barStyles: {
          background: Chunk481060.TVs.colors.BACKGROUND_MOD_STRONG.css
        },
        fillStyles: {
          background: Chunk481060.TVs.colors.BG_BRAND.css
        },
        onMarkerRender: e => e < eA ? e_.intl.string(e_.t.nrUzFL) : "".concat(Math.floor(e))
      })
    })]
  })
}

function eK() {
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
        alt: Chunk388032.intl.string(Chunk388032.t.mdXZh1),
        className: Chunk607547.nuxFirstImage
      })
    }), (0, Chunk951288.jsx)("div", {
      children: (0, Chunk951288.jsxs)("div", {
        className: Chunk607547.mainTitleContainer,
        children: [(0, Chunk951288.jsx)(Chunk481060.Heading, {
          variant: "heading-xl/medium",
          color: "header-primary",
          children: Chunk388032.intl.string(Chunk388032.t.jzjJQg)
        }), (0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-md/normal",
          color: "text-muted",
          children: Chunk388032.intl.string(Chunk388032.t["5dOfxb"])
        })]
      })
    }), (0, Chunk951288.jsx)("div", {
      children: (0, Chunk951288.jsx)("img", {
        src: Chunk730462.Z,
        alt: Chunk388032.intl.string(Chunk388032.t.mdXZh1),
        className: Chunk607547.nuxUserSettingsImage
      })
    }), (0, Chunk951288.jsx)("div", {
      "data-button-hoisted-classname-wrapper": true,
      className: Chunk607547.closeCircleButton,
      children: (0, Chunk951288.jsx)(Chunk481060.Button, {
        variant: "primary",
        text: Chunk388032.intl.string(Chunk388032.t.Q26diF),
        onClick: () => require()
      })
    }), (0, Chunk951288.jsx)("div", {
      className: Chunk607547.nuxDivider
    })]
  })
}

function ez(e) {
  let {
    runningGame: t,
    runningGameApplication: n
  } = e, a = null == n ? true : n.id, o = (0, _.e7)([U.Z], () => U.Z.isLimitedInteractionOverrideEnabled(a), [a]), s = i.useMemo(() => null != t && (0, k.H8)(t.pid), [t]), l = (0, M.Z)({
    location: "overlay_user_settings"
  }), {
    disableClickableRegions: c,
    shouldShowKeybindIndicators: u
  } = (0, _.cj)([en.default], () => ({
    disableClickableRegions: en.default.disableClickableRegions,
    shouldShowKeybindIndicators: en.default.showKeybindIndicators
  }));

  function d() {
    b.Z.setDisableClickableRegions(!c)
  }

  function f(e) {
    null != n && b.Z.setLimitedInteractionOverride(n.id, e)
  }
  return (0, r.jsxs)("div", {
    className: ep.overlayEnabledSettingsContainer,
    children: [(0, r.jsx)(eB, {}), l && (0, r.jsx)(h.rsf, {
      label: e_.intl.string(e_.t.XZTl9r),
      checked: u,
      onChange: e => b.Z.setShowKeybindIndicators(e)
    }), null != a && (0, r.jsxs)("div", {
      children: [(0, r.jsxs)("div", {
        className: ep.limitedInteractionOverrideContainer,
        children: [(0, r.jsx)(h.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          children: e_.intl.string(e_.t.wgVQND)
        }), (0, r.jsx)(h.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: e_.intl.string(e_.t["5SsyF5"])
        })]
      }), (0, r.jsx)(h.rsf, {
        checked: o || s,
        disabled: s,
        onChange: e => f(e)
      })]
    }), (0, r.jsxs)("div", {
      children: [(0, r.jsxs)("div", {
        className: ep.limitedInteractionOverrideContainer,
        children: [(0, r.jsx)(h.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          children: e_.intl.string(e_.t["+eFXxq"])
        }), (0, r.jsx)(h.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: e_.intl.string(e_.t.kivMAp)
        })]
      }), (0, r.jsx)(h.rsf, {
        checked: !c,
        onChange: d
      })]
    })]
  })
}

function eq(e) {
  let {
    className: t,
    showHeader: n
  } = e, {
    runningGame: i,
    runningGameApplication: a
  } = (0, C.Z)(), o = (0, x.o4)("user_settings").overlayV3UI, s = (0, _.e7)([$.default], () => $.default.getCurrentUser());
  return ((0, v.ZP)(() => {
    if (ea.isPlatformEmbedded) return (0, N.Ky)(), N.P7
  }), eR(), null == s) ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(el.Z, {
      title: e_.intl.string(e_.t["9cb1Uz"]),
      children: [o ? (0, r.jsx)(eK, {}) : null, (0, r.jsxs)("div", {
        className: ep.overlayEnabledSettingsContainer,
        children: [(0, r.jsx)(eM, {
          runningGame: i,
          runningGameApplication: a
        }), (0, r.jsx)(eG, {}), (0, r.jsx)(eU, {})]
      }), (0, r.jsx)("div", {
        className: ep.settingsDivider
      })]
    }), (0, r.jsxs)("div", {
      children: [(0, r.jsx)(ez, {
        runningGame: i,
        runningGameApplication: a
      }), (0, r.jsx)("div", {
        className: ep.settingsDivider
      })]
    }), (0, r.jsxs)(h.gNt, {
      label: e_.intl.string(e_.t.r1TZfh),
      children: [(0, r.jsx)(eW, {}), (0, r.jsx)("div", {
        className: ep.settingsDivider
      })]
    }), (0, r.jsx)(eF, {})]
  })
}