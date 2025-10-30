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
  Chunk932404 = require("./932404.js"),
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
  Chunk289726 = require("./289726.js"),
  Chunk131970 = require("./131970.js"),
  Chunk730462 = require("./730462.js");

function eE(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function eb(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      eE(e, t, n[t])
    })
  }
  return e
}

function ey(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function eO(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ey(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function ev(e, t) {
  if (null == e) return {};
  var n, r, i = eI(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function eI(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let eT = ew(null),
  eS = 20,
  eA = 16,
  eC = 1,
  eN = 25,
  eR = [0, 5, 10, 15, 20, 25];

function eP() {
  let e = ew(eT);
  f().isEqual(module, eT) || (Chunk626135.default.track(Chunk981631.rMx.OVERLAY_SETTINGS_UPDATED, module), eT = module)
}

function ew(e) {
  var t;
  let n = er.default.getNotificationPositionMode(),
    r = n !== eu._vf.DISABLED,
    i = et.ZP.getOverlayKeybind(),
    a = et.ZP.getOverlayChatKeybind();
  return {
    enabled: en.default.enabled,
    notifications_enabled: r,
    notifications_position: r ? n : null,
    text_notifications_mode: U.Z.isNotificationDisabled(ef.n0.TextChat) ? "DISABLED" : "ENABLED",
    hotkey: null != i ? (0, es.BB)(i.shortcut) : null,
    text_activation_hotkey: null != a ? (0, es.BB)(a.shortcut) : null,
    text_opacity_slider: er.default.getTextWidgetOpacity(),
    old_enabled: null != (t = null == e ? true : e.enabled) ? t : en.default.enabled
  }
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
    className: o()(eh.groupContainer, f),
    children: [(0, r.jsxs)(h.kL8, {
      "aria-label": d,
      onClick: u,
      children: [null != t && (0, r.jsx)("div", {
        className: eh.groupHeader,
        children: t
      }), (0, r.jsxs)("div", {
        className: eh.groupContent,
        children: [null != n && (0, r.jsx)("div", {
          className: eh.groupIcon,
          children: n
        }), (0, r.jsxs)("div", {
          className: eh.groupMainContent,
          children: [(0, r.jsx)(h.Text, {
            variant: "text-md/medium",
            color: "header-primary",
            className: eh.groupTitle,
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
          className: eh.groupAction,
          children: s
        })]
      })]
    }), (0, r.jsx)("div", {
      className: eh.groupWarning,
      children: c
    })]
  })
}

function ex(e) {
  var {
    children: t,
    className: n,
    onExpand: a
  } = e, s = ev(e, ["children", "className", "onExpand"]);
  let [l, c] = i.useState(false), u = e => {
    c(e), null == a || a(e)
  };
  return (0, r.jsx)(h.zF9, {
    className: eh.collapseable,
    collapsibleContent: (0, r.jsx)("div", {
      className: eh.groupCollapsedContainer,
      children: t
    }),
    children: e => {
      let {
        onClick: t
      } = e;
      return (0, r.jsx)(eD, eO(eb({}, s), {
        onClick: e => {
          u(!l), null == t || t(e)
        },
        className: o()(eh.mainCollapseableContainer, n),
        action: (0, r.jsxs)("div", {
          className: eh.groupCollapsedAction,
          children: [s.action, l ? (0, r.jsx)(h.CJ0, {
            size: "custom",
            width: eS,
            height: eS,
            color: "var(--interactive-active)"
          }) : (0, r.jsx)(h.Fbu, {
            size: "custom",
            width: eS,
            height: eS,
            color: "var(--interactive-active)"
          })]
        })
      }))
    }
  })
}
let eL = new Set([Chunk837268.mM.INITIALIZING, Chunk837268.mM.WAITING_FOR_SCREEN_TYPE_RESOLUTION, Chunk837268.mM.WAITING_FOR_MODULE_TRACKING, Chunk837268.mM.WAITING_FOR_OVERLAY_OPEN, Chunk837268.mM.WAITING_FOR_POPOUT_OPEN, Chunk837268.mM.WAITING_FOR_MODULE_POPOUT_CAPTURE, Chunk837268.mM.WAITING_FOR_REACT_INITIALIZATION, Chunk837268.mM.WAITING_FOR_PID_FOCUS]),
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
  } = (0, _.cj)([Q.Z, $.Z], () => {
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
    return (0, A.b6)(o, false, [Q.Z, $.Z])
  }, [o, u]), p = (0, _.e7)([A.ZP, Q.Z, $.Z], () => null == o ? null : (0, A.FZ)(o, A.ZP, Q.Z, $.Z), [o], l()), [g, E] = i.useState(f), [y, I] = i.useState(d), [T, S] = i.useState(false);
  i.useEffect(() => {
    E(f), I(d)
  }, [f, d]);
  let C = !(0, el.supportsLegacy)(),
    N = !(0, el.supportsOutOfProcess)(),
    {
      legacyEnabled: D,
      oopEnabled: L
    } = (0, _.cj)([k.default], () => k.default.getGlobalEnabledStatus()),
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
          b.Z.setEnabled(e, L), (0, w.ou)(e, w.OverlayToggledClientSettingType.LEGACY, null != (n = o.id) ? n : null);
          break;
        case w.OverlayToggledClientSettingType.OOP:
          b.Z.setEnabled(D, e), (0, w.ou)(e, w.OverlayToggledClientSettingType.OOP, null != (r = o.id) ? r : null)
      }(a || s) && (0, B.l)(a ? w.OverlayToggledClientSettingType.LEGACY_GAME : w.OverlayToggledClientSettingType.OOP_GAME, null != (i = o.id) ? i : null)
    },
    j = (e, t) => {
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
    U = (e, t) => {
      if (null == o) return;
      let n = false,
        r = false;
      switch (t) {
        case "game":
          m.Z.toggleOverlay(o, e, e), I(e), E(e), n = !e && y, r = !e && g;
          break;
        case "global":
          b.Z.setEnabled(e, e), n = !e && D, r = !e && L;
          break;
        case "both":
          b.Z.setEnabled(e, e), m.Z.toggleOverlay(o, e, e), I(e), E(e), n = !e && D || !e && y, r = !e && L || !e && g
      }
      let i = null;
      if (n ? i = "game" === t ? w.OverlayToggledClientSettingType.LEGACY_GAME : w.OverlayToggledClientSettingType.LEGACY : r && (i = "game" === t ? w.OverlayToggledClientSettingType.OOP_GAME : w.OverlayToggledClientSettingType.OOP), null != i) {
        var a;
        (0, B.l)(i, null != (a = o.id) ? a : null)
      }
    },
    G = C && N,
    Z = !D && !L,
    F = !g && !D && y && !C,
    V = !y && !L && g && !N,
    H = (null == u ? true : u.overlayMethod) === x.gl.Disabled,
    Y = (null == u ? true : u.state) === x.mM.OVERLAY_RENDERING && !H,
    W = (null == u ? true : u.state) != null && eL.has(u.state) && !H,
    z = (null == u ? true : u.overlayMethod) === x.gl.OutOfProcess,
    q = (null == u ? true : u.overlayMethod) === x.gl.OutOfProcessLimitedInteraction,
    X = (null == u ? true : u.overlayMethod) === x.gl.Hook,
    J = (null == u ? true : u.state) === x.mM.OVERLAY_CRASHED || (null == u ? true : u.state) === x.mM.OVERLAY_CRASHED_DISABLED,
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
          return [ep.intl.format(ep.t.hFVBIg, {
            overlayMethod: ep.intl.string(ep.t.a3eXSw),
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
          return [ep.intl.format(ep.t.hFVBIg, {
            overlayMethod: ep.intl.string(ep.t["506Aba"]),
            overlayMethodHook: t
          }), null];
        case Y && X:
          function n() {
            var e, t;
            switch (true) {
              case (null == u ? true : u.fullscreenType) !== O.Jx.BORDERLESS_FULLSCREEN:
                return ep.intl.string(ep.t.mJmbeC);
              case N:
                return ep.intl.string(ep.t.C7bLTQ);
              case !(null != (e = null == u ? true : u.oopEnabled) && e):
                return ep.intl.string(ep.t.WiY24u);
              case !L:
                return ep.intl.string(ep.t.cAFVsL);
              case !(null != (t = null == u ? true : u.supportsOutOfProcess) && t):
                return ep.intl.string(ep.t.XcGEcs);
              default:
                return ep.intl.string(ep.t.bJXH2v)
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
          return [ep.intl.format(ep.t.hFVBIg, {
            overlayMethod: ep.intl.string(ep.t.bvlpDR),
            overlayMethodHook: i
          }), n()];
        case J:
          return [ep.intl.string(ep.t.OFC2aw), null];
        case G:
          return [ep.intl.string(ep.t.m7X4az), null];
        case Z:
          return [ep.intl.string(ep.t["9DUS5l"]), null];
        case ee:
          return [ep.intl.string(ep.t.nQ9EdJ), null];
        case F:
        case V:
          return [ep.intl.string(ep.t.VWUn0a), null];
        case W:
          if (z) return [ep.intl.string(ep.t["s8+CFq"]), null];
          if (X) return [ep.intl.string(ep.t.JEEdqt), null];
          if (q) return [ep.intl.string(ep.t.pzBMwY), null];
          return [ep.intl.string(ep.t["2Xhy9k"]), null];
        case null == u:
          return [ep.intl.string(ep.t.vwHPRi), null];
        case H: {
          let e = (null == u ? true : u.fullscreenType) === O.Jx.FULLSCREEN ? ep.intl.string(ep.t.mJmbeC) : null;
          return [ep.intl.string(ep.t.VPW4XY), e]
        }
        default:
          return [ep.intl.string(ep.t.ONovP5), null]
      }
    })();
  (0, v.ZP)(() => {
    m.Z.getDetectableGames()
  });
  let [er, ei] = i.useMemo(() => W ? ["text-muted", h.TVs.colors.TEXT_MUTED.css] : Y && q ? ["text-feedback-warning", h.TVs.colors.TEXT_FEEDBACK_WARNING.css] : Y && z ? ["text-feedback-positive", h.TVs.colors.TEXT_FEEDBACK_POSITIVE.css] : Y && X ? ["text-primary", h.TVs.colors.TEXT_PRIMARY.css] : ["interactive-normal", h.TVs.colors.INTERACTIVE_NORMAL.css], [W, Y, q, z, X]);
  return null == o ? null : (0, r.jsxs)(ex, {
    onExpand: S,
    className: T ? eh.expandedContainer : true,
    title: (0, r.jsxs)(r.Fragment, {
      children: [null != (a = null != (n = null != (t = null == s ? true : s.name) ? t : null == p ? true : p.name) ? n : null == o ? true : o.gameName) ? a : "", null != p && p.verified ? (0, r.jsx)(h.aML, {
        "data-migration-pending": true,
        text: ep.intl.string(ep.t["4PJP5p"]),
        children: e => (0, r.jsx)(P.Z, eO(eb({
          size: eA,
          color: h.TVs.colors.BG_BRAND.css
        }, e), {
          children: (0, r.jsx)(h.kmB, {
            size: "custom",
            width: eA,
            height: eA,
            color: h.TVs.colors.WHITE.css
          })
        }))
      }) : null]
    }),
    description: et,
    hint: null != en ? en : true,
    header: (0, r.jsxs)(r.Fragment, {
      children: [Y || W ? (0, r.jsx)(h.pzj, {
        size: "xxs",
        color: ei
      }) : (0, r.jsx)("div", {
        className: eh.playingDot
      }), (0, r.jsx)(h.Text, {
        variant: "text-xs/semibold",
        color: er,
        children: ep.intl.string(ep.t.CDOx3w)
      })]
    }),
    icon: (0, r.jsx)(R.Z, {
      game: s,
      pid: null == o ? true : o.pid,
      size: R.A.MEDIUM
    }),
    "aria-label": ep.intl.string(ep.t["87O5GC"]),
    action: (0, r.jsx)(h.P3F, {
      onClick: e => eM(e),
      children: (0, r.jsx)(h.rsf, {
        checked: g && L || y && D,
        disabled: G,
        onChange: e => {
          U(e, j(e, g && L || y && D))
        }
      })
    }),
    warning: (0, r.jsx)(K.Z, {
      className: eh.systemServiceWarning,
      game: o
    }),
    children: [(0, r.jsx)(eD, {
      title: ep.intl.string(ep.t["7BlVIs"]),
      description: ep.intl.string(ep.t.ndgADE),
      hint: L ? true : ep.intl.string(ep.t.cAFVsL),
      "aria-label": ep.intl.string(ep.t["7BlVIs"]),
      action: (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(h.rsf, {
          checked: g && L,
          disabled: N,
          onChange: e => {
            e && !L ? M(e, w.OverlayToggledClientSettingType.OOP) : M(e, w.OverlayToggledClientSettingType.OOP_GAME)
          }
        }), (0, r.jsx)("div", {
          className: eh.emptySpacer
        })]
      })
    }), (0, r.jsx)(eD, {
      title: ep.intl.string(ep.t.BfFpW1),
      description: ep.intl.string(ep.t.OzInYk),
      hint: D ? true : ep.intl.string(ep.t["3sYHXm"]),
      "aria-label": ep.intl.string(ep.t.BfFpW1),
      action: (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(h.rsf, {
          checked: y && D,
          disabled: C,
          onChange: e => {
            e && !D ? M(e, w.OverlayToggledClientSettingType.LEGACY) : M(e, w.OverlayToggledClientSettingType.LEGACY_GAME)
          }
        }), (0, r.jsx)("div", {
          className: eh.emptySpacer
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

function eU(e) {
  let {
    rawGame: t,
    gameApplication: n,
    supportDisabled: a,
    getEnabledFromStatus: o,
    onChange: s,
    clientSettingType: l,
    ariaLabel: c
  } = e, u = (0, _.cj)([A.ZP, Q.Z, $.Z], () => (0, A.FZ)(t, A.ZP, Q.Z, $.Z)), d = (0, _.cj)([Q.Z, $.Z], () => (0, A.b6)(t, false, [Q.Z, $.Z]), [t]), f = o(d), [p, m] = i.useState(f);
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
  return (0, r.jsx)(eD, {
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
        className: eh.emptySpacer
      })]
    })
  })
}

function eG() {
  let [e, t] = Chunk647438.useState(false), {
    legacyEnabled: n,
    oopEnabled: a
  } = (0, Chunk442837.cj)([Chunk371651.default], () => Chunk371651.default.getGlobalEnabledStatus()), o = (0, Chunk442837.Wu)([Chunk594190.ZP], () => Chunk594190.ZP.getGamesSeen(true)).filter(e => !(0, Y.le)(e)), s = (0, Chunk835473.Z)(o.map(e => e.id)), l = !(0, Chunk145597.supportsLegacy)(), c = e => {
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
  return 0 === o.length ? (0, Chunk951288.jsx)(eD, {
    title: Chunk388032.intl.string(Chunk388032.t.BfFpW1),
    description: Chunk392711,
    "aria-label": Chunk388032.intl.string(Chunk388032.t.BfFpW1),
    className: Chunk289726.standaloneContainer,
    action: (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [(0, Chunk951288.jsx)(Chunk481060.rsf, {
        checked: require,
        disabled: l,
        onChange: e => c(e)
      }), Chunk987650.iP && (0, Chunk951288.jsx)("div", {
        className: Chunk289726.emptySpacer
      })]
    })
  }) : (0, Chunk951288.jsxs)(ex, {
    onExpand: exports,
    className: module ? Chunk289726.expandedContainer : true,
    title: Chunk388032.intl.string(Chunk388032.t.BfFpW1),
    description: Chunk392711,
    "aria-label": Chunk388032.intl.string(Chunk388032.t.BfFpW1),
    action: (0, Chunk951288.jsx)(Chunk481060.P3F, {
      onClick: e => eM(e),
      children: (0, Chunk951288.jsx)(Chunk481060.rsf, {
        checked: require,
        disabled: l,
        onChange: e => c(e)
      })
    }),
    children: [(0, Chunk951288.jsx)("div", {
      className: Chunk289726.subtitleContainer,
      children: (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-xs/semibold",
        color: "text-muted",
        children: Chunk388032.intl.string(Chunk388032.t.FzoWRo)
      })
    }), (0, Chunk951288.jsx)(Chunk481060.zJl, {
      className: Chunk289726.scroller,
      children: o.map((e, t) => (0, r.jsx)(eU, {
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
        ariaLabel: ep.intl.format(ep.t.hvPYsF, {
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
  } = (0, Chunk442837.cj)([Chunk371651.default], () => Chunk371651.default.getGlobalEnabledStatus()), o = !(0, Chunk145597.supportsOutOfProcess)(), s = (0, Chunk442837.Wu)([Chunk594190.ZP], () => Chunk594190.ZP.getGamesSeen(true)).filter(e => !(0, Y.le)(e)), l = (0, Chunk835473.Z)(Chunk348327.map(e => e.id)), c = e => {
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
  return 0 === Chunk348327.length ? (0, Chunk951288.jsx)(eD, {
    title: Chunk388032.intl.string(Chunk388032.t["7BlVIs"]),
    description: Chunk392711,
    "aria-label": Chunk388032.intl.string(Chunk388032.t["7BlVIs"]),
    className: Chunk289726.standaloneContainer,
    action: (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [(0, Chunk951288.jsx)(Chunk481060.rsf, {
        checked: require,
        disabled: o,
        onChange: e => c(e)
      }), Chunk987650.iP && (0, Chunk951288.jsx)("div", {
        className: Chunk289726.emptySpacer
      })]
    })
  }) : (0, Chunk951288.jsxs)(ex, {
    onExpand: exports,
    className: module ? Chunk289726.expandedContainer : true,
    title: Chunk388032.intl.string(Chunk388032.t["7BlVIs"]),
    description: Chunk392711,
    "aria-label": Chunk388032.intl.string(Chunk388032.t["7BlVIs"]),
    action: (0, Chunk951288.jsx)(Chunk481060.P3F, {
      onClick: e => eM(e),
      children: (0, Chunk951288.jsx)(Chunk481060.rsf, {
        checked: require,
        disabled: o,
        onChange: e => c(e)
      })
    }),
    children: [(0, Chunk951288.jsx)("div", {
      className: Chunk289726.subtitleContainer,
      children: (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-xs/semibold",
        color: "text-muted",
        children: Chunk388032.intl.string(Chunk388032.t.FzoWRo)
      })
    }), (0, Chunk951288.jsx)(Chunk481060.zJl, {
      className: Chunk289726.scroller,
      children: Chunk348327.map((e, t) => (0, r.jsx)(eU, {
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
        ariaLabel: ep.intl.format(ep.t.nByTd3, {
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
    s = (0, Chunk865066.hi)(),
    l = null != o && o.elevated && Chunk120356 && !Chunk348327,
    c = !(0, Chunk556296.I1)(null != (e = null == exports ? true : exports.shortcut) ? module : []);

  function d(e) {
    u()(null != t, "Keybind should never be undefined"), g.Z.setKeybind(eO(eb({}, t), {
      shortcut: e
    }))
  }
  return (0, Chunk951288.jsx)("div", {
    className: Chunk289726.keybindMainContainer,
    children: (0, Chunk951288.jsxs)("div", {
      className: Chunk289726.keybindContainer,
      children: [(0, Chunk951288.jsxs)("div", {
        className: Chunk289726.keybindHeaderContainer,
        children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          children: Chunk388032.intl.string(Chunk388032.t.VsAZcC)
        }), l && (0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-xs/normal",
          color: "text-feedback-warning",
          className: Chunk289726.keybindAdminWarning,
          children: Chunk388032.intl.string(Chunk388032.t.NsowVa)
        }), Chunk512722 && (0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-xs/normal",
          color: "text-feedback-warning",
          className: Chunk289726.keybindAdminWarning,
          children: Chunk388032.intl.string(Chunk388032.t["UNoTw/"])
        })]
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk289726.keybindRecorderContainer,
        children: (0, Chunk951288.jsx)(Chunk825209.Z, {
          disabled: require && Chunk647438,
          defaultValue: null != exports ? exports.shortcut : [],
          onChange: Chunk392711
        })
      })]
    })
  })
}
let eF = (e, t, n) => [{
  title: ep.t.eVE4LX,
  description: ep.t["72WNqk"],
  disabledSetting: D.i.TEXT_CHAT
}, {
  title: ep.t.oifnSh,
  description: ep.t.bgU5r0,
  disabledSetting: D.i.WELCOME_GENERAL
}, {
  title: ep.t.hqsZJW,
  description: ep.t.kHjdqc,
  disabledSetting: D.i.GO_LIVE_NUDGE
}, e && {
  title: ep.t.sop3rn,
  description: ep.t.pjgffc,
  disabledSetting: D.i.GAME_ACTIVITY
}, t && {
  title: ep.t["2QVhbb"],
  description: ep.t.wQ4ilB,
  disabledSetting: D.i.NOW_PLAYING
}, n && {
  title: ep.t["5/21FT"],
  description: ep.t.EIzwfA,
  disabledSetting: D.i.FRIEND_STREAM_WATCH_NUDGE
}].filter(e => false !== e).filter(Boolean);

function eV() {
  let {
    allowActivityWidget: e,
    allowNowPlaying: t
  } = (0, Chunk32300.o4)("user_settings"), {
    enabled: n
  } = (0, Chunk32300.aq)("OverlayV3StreamWatchNudge"), i = eF(module, exports, require), a = e => t => {
    b.Z.setNotificationDisabledSetting(e, !t)
  }, o = (0, Chunk442837.e7)([Chunk624864.Z], () => Chunk624864.Z.getDisabledNotifications());
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk289726.notificationSettingsContainer,
    children: [(0, Chunk951288.jsx)(Chunk481060.Heading, {
      variant: "heading-md/semibold",
      color: "header-primary",
      children: Chunk388032.intl.string(Chunk388032.t.xOE5bA)
    }), Chunk647438.map(e => (0, r.jsxs)("div", {
      className: eh.notificationItem,
      children: [(0, r.jsxs)("div", {
        className: eh.notificationDescriptionContainer,
        children: [(0, r.jsx)(h.Text, {
          variant: "text-sm/semibold",
          color: "header-primary",
          children: ep.intl.string(e.title)
        }), (0, r.jsx)(h.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: ep.intl.string(e.description)
        })]
      }), (0, r.jsx)(h.rsf, {
        checked: !o.has(e.disabledSetting),
        onChange: a(e.disabledSetting)
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
    voiceState: new X.Z({
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
    user: new q.Z({
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
  return (0, Chunk131704.createChannelRecord)({
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
  })), l = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser()), [c] = Chunk647438.useState(() => [eY(Chunk388032.intl.string(Chunk388032.t.C0ZDvo), true, false), eY(Chunk388032.intl.string(Chunk388032.t.iOtj8E), false, false, true), eY(Chunk388032.intl.string(Chunk388032.t["0oqNgL"]), false, true)]), u = (0, Chunk442837.e7)([Chunk610394.Z, Chunk355863.Z], () => {
    let e = Chunk610394.Z.getWidgetByType(Chunk981631.Odu.VOICE_V3);
    if (null == module) return null;
    let t = Chunk355863.Z.getWidget(module.id);
    return null != exports && (0, Chunk340101.Aw)(exports) ? exports : null
  }), d = null != (t = null == u || null == (e = u.meta) ? true : module.voiceStatesMaxShown) ? exports : Chunk501787.At, f = [null != l ? eH(l) : null, ...Chunk512722].filter(Chunk823379.lm), p = [new Map(f.map(e => [e.user.id, e])), f.map(e => e.user.id)];

  function m(e) {
    null != u && (e < eC ? (0, E.zG)(u.id, {
      voiceStatesMaxShown: e_.Og
    }) : (0, E.zG)(u.id, {
      voiceStatesMaxShown: Math.floor(e)
    }))
  }
  let g = Chunk981631.BRd.MIDNIGHT;
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk289726.voiceSettingsContainer,
    children: [(0, Chunk951288.jsx)(Chunk481060.q4e, {
      label: Chunk388032.intl.string(Chunk388032.t.dnvZSg),
      options: [{
        label: Chunk388032.intl.string(Chunk388032.t.YcOxtr),
        value: Chunk981631.ipw.LARGE
      }, {
        label: Chunk388032.intl.string(Chunk388032.t.BKIKqx),
        value: Chunk981631.ipw.SMALL
      }],
      className: Chunk289726.select,
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
      className: Chunk289726.select,
      onChange: e => b.Z.setDisplayNameMode(e),
      value: Chunk120356
    }), (0, Chunk951288.jsx)(Chunk481060.f6W, {
      theme: Chunk660216,
      children: e => {
        var t, i;
        return (0, r.jsxs)("div", {
          className: o()(eh.widgetContainer, e),
          children: [(0, r.jsx)("div", {
            className: eh.voiceWidgetContainer,
            children: (0, r.jsx)(V.kI, {
              id: "voice-widget",
              title: ep.intl.string(ep.t.KNJ6Vq),
              channel: eW(),
              overlayVoiceStates: p,
              displayNameMode: a,
              displayUserMode: s,
              avatarSizeMode: n,
              widget: eu.Odu.VOICE,
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
            className: eh.widgetHeaderContainer,
            children: [(0, r.jsx)(H.PI, {
              children: ep.intl.string(ep.t.KNJ6Vq)
            }), (0, r.jsx)(H.ls, {}), (0, r.jsx)(H.RT, {
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
      className: Chunk289726.select,
      onChange: e => b.Z.setDisplayUserMode(e),
      value: Chunk348327
    }), (0, Chunk951288.jsx)("div", {
      className: Chunk289726.sliderContainer,
      children: (0, Chunk951288.jsx)(Chunk481060.iRW, {
        label: Chunk388032.intl.string(Chunk388032.t["X/Uyzc"]),
        initialValue: Chunk392711,
        onValueRender: e => e < eC ? ep.intl.string(ep.t.nrUzFL) : "".concat(Math.floor(e)),
        minValue: eC - 1,
        maxValue: eN,
        onValueChange: Chunk224706,
        markers: eR,
        barStyles: {
          background: Chunk481060.TVs.colors.BACKGROUND_MOD_STRONG.css
        },
        fillStyles: {
          background: Chunk481060.TVs.colors.BG_BRAND.css
        },
        onMarkerRender: e => e < eC ? ep.intl.string(ep.t.nrUzFL) : "".concat(Math.floor(e))
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
    className: Chunk289726.overlaySettingsNux,
    children: [(0, Chunk951288.jsx)("div", {
      children: (0, Chunk951288.jsx)("img", {
        src: Chunk131970.Z,
        alt: Chunk388032.intl.string(Chunk388032.t.mdXZh1),
        className: Chunk289726.nuxFirstImage
      })
    }), (0, Chunk951288.jsx)("div", {
      children: (0, Chunk951288.jsxs)("div", {
        className: Chunk289726.mainTitleContainer,
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
        className: Chunk289726.nuxUserSettingsImage
      })
    }), (0, Chunk951288.jsx)("div", {
      "data-button-hoisted-classname-wrapper": true,
      className: Chunk289726.closeCircleButton,
      children: (0, Chunk951288.jsx)(Chunk481060.Button, {
        variant: "primary",
        text: Chunk388032.intl.string(Chunk388032.t.Q26diF),
        onClick: () => require()
      })
    }), (0, Chunk951288.jsx)("div", {
      className: Chunk289726.nuxDivider
    })]
  })
}

function eq(e) {
  let {
    runningGame: t,
    runningGameApplication: n
  } = e, a = null == n ? true : n.id, o = (0, _.e7)([U.Z], () => U.Z.isLimitedInteractionOverrideEnabled(a), [a]), s = i.useMemo(() => null != t && (0, j.H8)(t.pid), [t]), l = (0, M.Z)({
    location: "overlay_user_settings"
  }), {
    disableClickableRegions: c,
    shouldShowKeybindIndicators: u
  } = (0, _.cj)([er.default], () => ({
    disableClickableRegions: er.default.disableClickableRegions,
    shouldShowKeybindIndicators: er.default.showKeybindIndicators
  }));

  function d() {
    b.Z.setDisableClickableRegions(!c)
  }

  function f(e) {
    null != n && (0, Z.rI)(n.id, e)
  }
  return (0, r.jsxs)("div", {
    className: eh.overlayEnabledSettingsContainer,
    children: [(0, r.jsx)(eZ, {}), l && (0, r.jsx)(h.rsf, {
      label: ep.intl.string(ep.t.XZTl9r),
      checked: u,
      onChange: e => b.Z.setShowKeybindIndicators(e)
    }), null != a && (0, r.jsxs)("div", {
      children: [(0, r.jsxs)("div", {
        className: eh.limitedInteractionOverrideContainer,
        children: [(0, r.jsx)(h.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          children: ep.intl.string(ep.t.wgVQND)
        }), (0, r.jsx)(h.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: ep.intl.string(ep.t["5SsyF5"])
        })]
      }), (0, r.jsx)(h.rsf, {
        checked: o || s,
        disabled: s,
        onChange: e => f(e)
      })]
    }), (0, r.jsxs)("div", {
      children: [(0, r.jsxs)("div", {
        className: eh.limitedInteractionOverrideContainer,
        children: [(0, r.jsx)(h.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          children: ep.intl.string(ep.t["+eFXxq"])
        }), (0, r.jsx)(h.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: ep.intl.string(ep.t.kivMAp)
        })]
      }), (0, r.jsx)(h.rsf, {
        checked: !c,
        onChange: d
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
  } = (0, C.Z)(), o = (0, L.o4)("user_settings").overlayV3UI, s = (0, _.e7)([ee.default], () => ee.default.getCurrentUser());
  return ((0, v.ZP)(() => {
    if (eo.isPlatformEmbedded) return (0, N.Ky)(), N.P7
  }), eP(), null == s) ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(ec.Z, {
      title: ep.intl.string(ep.t["9cb1Uz"]),
      children: [o ? (0, r.jsx)(ez, {}) : null, (0, r.jsxs)("div", {
        className: eh.overlayEnabledSettingsContainer,
        children: [(0, r.jsx)(ek, {
          runningGame: i,
          runningGameApplication: a
        }), (0, r.jsx)(eB, {}), (0, r.jsx)(eG, {})]
      }), (0, r.jsx)("div", {
        className: eh.settingsDivider
      })]
    }), (0, r.jsxs)("div", {
      children: [(0, r.jsx)(eq, {
        runningGame: i,
        runningGameApplication: a
      }), (0, r.jsx)("div", {
        className: eh.settingsDivider
      })]
    }), (0, r.jsxs)(h.gNt, {
      label: ep.intl.string(ep.t.r1TZfh),
      children: [(0, r.jsx)(eK, {}), (0, r.jsx)("div", {
        className: eh.settingsDivider
      })]
    }), (0, r.jsx)(eV, {})]
  })
}