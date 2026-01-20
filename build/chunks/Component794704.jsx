/** Chunk was on web.js **/
/** chunk id: 794704, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $4: () => eJ,
  BP: () => eY,
  Hm: () => e0,
  IM: () => eD,
  NN: () => eZ,
  SP: () => eW,
  Wb: () => eK,
  Wn: () => eH,
  ZP: () => e3,
  o3: () => eR,
  oo: () => ex,
  sI: () => eV
}), require("./953529.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk224706 = require("./224706.js"),
  Chunk660216 = require("./660216.js"),
  Chunk765250 = require("./765250.js"),
  Chunk13245 = require("./13245.js"),
  Chunk825209 = require("./825209.jsx"),
  Chunk593472 = require("./593472.js"),
  Chunk493773 = require("./493773.js"),
  Chunk100527 = require("./100527.js"),
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
  Chunk398269 = require("./398269.jsx"),
  Chunk340101 = require("./340101.js"),
  Chunk243487 = require("./243487.jsx"),
  Chunk430561 = require("./430561.jsx"),
  Chunk509003 = require("./509003.js"),
  Chunk865066 = require("./865066.js"),
  Chunk894300 = require("./894300.jsx"),
  Chunk131704 = require("./131704.js"),
  Chunk598077 = require("./598077.js"),
  Chunk189786 = require("./189786.js"),
  Chunk404577 = require("./404577.js"),
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
  Chunk313789 = require("./313789.js"),
  Chunk273313 = require("./273313.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk987650 = require("./987650.js"),
  Chunk501787 = require("./501787.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk677677 = require("./677677.js"),
  Chunk704437 = require("./704437.js"),
  Chunk494139 = require("./494139.js");

function ev(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function eS(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      ev(e, t, n[t])
    })
  }
  return e
}

function eI(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function eT(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : eI(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function eC(e, t) {
  if (null == e) return {};
  var n, r, i = eA(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function eA(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let eN = ej(null),
  eP = 20,
  ew = 16,
  eR = 1,
  eD = 25,
  ex = [0, 5, 10, 15, 20, 25];

function eL() {
  let e = ej(eN);
  f().isEqual(e, eN) || (es.default.track(e_.rMx.OVERLAY_SETTINGS_UPDATED, e), eN = e)
}

function ej(e) {
  var t;
  let n = eo.default.getNotificationPositionMode(),
    r = n !== e_._vf.DISABLED,
    i = ei.ZP.getOverlayKeybind(),
    a = ei.ZP.getOverlayChatKeybind();
  return {
    enabled: ea.default.enabled,
    notifications_enabled: r,
    notifications_position: r ? n : null,
    text_notifications_mode: Z.Z.isNotificationDisabled(em.n0.TextChat) ? "DISABLED" : "ENABLED",
    hotkey: null != i ? (0, eu.BB)(i.shortcut) : null,
    text_activation_hotkey: null != a ? (0, eu.BB)(a.shortcut) : null,
    text_opacity_slider: eo.default.getTextWidgetOpacity(),
    old_enabled: null != (t = null == e ? true : e.enabled) ? t : ea.default.enabled
  }
}

function eM(e) {
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
    className: o()(eb.groupContainer, f),
    children: [(0, r.jsxs)(m.kL8, {
      "aria-label": d,
      onClick: u,
      children: [null != t && (0, r.jsx)("div", {
        className: eb.groupHeader,
        children: t
      }), (0, r.jsxs)("div", {
        className: eb.groupContent,
        children: [null != n && (0, r.jsx)("div", {
          className: eb.groupIcon,
          children: n
        }), (0, r.jsxs)("div", {
          className: eb.groupMainContent,
          children: [(0, r.jsx)(m.Text, {
            variant: "text-md/medium",
            color: "text-strong",
            className: eb.groupTitle,
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
          className: eb.groupAction,
          children: s
        })]
      })]
    }), (0, r.jsx)("div", {
      className: eb.groupWarning,
      children: c
    })]
  })
}

function ek(e) {
  var {
    children: t,
    className: n,
    onExpand: a
  } = e, s = eC(e, ["children", "className", "onExpand"]);
  let [l, c] = i.useState(false), u = e => {
    c(e), null == a || a(e)
  };
  return (0, r.jsx)(m.zF9, {
    className: eb.collapseable,
    collapsibleContent: (0, r.jsx)("div", {
      className: eb.groupCollapsedContainer,
      children: t
    }),
    children: e => {
      let {
        onClick: t
      } = e;
      return (0, r.jsx)(eM, eT(eS({}, s), {
        onClick: e => {
          u(!l), null == t || t(e)
        },
        className: o()(eb.mainCollapseableContainer, n),
        action: (0, r.jsxs)("div", {
          className: eb.groupCollapsedAction,
          children: [s.action, l ? (0, r.jsx)(m.CJ0, {
            size: "custom",
            width: eP,
            height: eP,
            color: "var(--interactive-text-active)"
          }) : (0, r.jsx)(m.Fbu, {
            size: "custom",
            width: eP,
            height: eP,
            color: "var(--interactive-text-active)"
          })]
        })
      }))
    }
  })
}
let eU = new Set([Chunk837268.mM.INITIALIZING, Chunk837268.mM.WAITING_FOR_SCREEN_TYPE_RESOLUTION, Chunk837268.mM.WAITING_FOR_MODULE_TRACKING, Chunk837268.mM.WAITING_FOR_OVERLAY_OPEN, Chunk837268.mM.WAITING_FOR_POPOUT_OPEN, Chunk837268.mM.WAITING_FOR_MODULE_POPOUT_CAPTURE, Chunk837268.mM.WAITING_FOR_REACT_INITIALIZATION, Chunk837268.mM.WAITING_FOR_PID_FOCUS, Chunk837268.mM.WAITING_FOR_SUCCESSFUL_SHOW]),
  eG = e => {
    e.preventDefault(), e.stopPropagation()
  };

function eZ() {
  var e, t, n;
  let {
    runningGame: a,
    runningGameApplication: o
  } = (0, P.Z)(), s = null == a ? true : a.pid, c = (0, p.e7)([U.default], () => null == a || null == s ? null : U.default.getTrackedGameByPid(s), [a, s], l()), {
    enabledLegacy: u,
    enabledOOP: d
  } = (0, p.cj)([ee.Z, en.Z], () => {
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
    return (0, N.b6)(a, false, [ee.Z, en.Z])
  }, [a, c]), f = (0, p.e7)([N.ZP, ee.Z, en.Z], () => null == a ? null : (0, N.FZ)(a, N.ZP, ee.Z, en.Z), [a], l()), [_, E] = i.useState(d), [b, O] = i.useState(u), [I, T] = i.useState(false);
  i.useEffect(() => {
    E(d), O(u)
  }, [d, u]);
  let C = !(0, ed.supportsLegacy)(),
    A = !(0, ed.supportsOutOfProcess)(),
    {
      legacyEnabled: w,
      oopEnabled: L
    } = (0, p.cj)([U.default], () => U.default.getGlobalEnabledStatus()),
    M = (e, t) => {
      var n, r, i;
      if (null == a) return;
      let o = false,
        s = false;
      switch (t) {
        case x.OverlayToggledClientSettingType.LEGACY_GAME:
          O(e), g.Z.toggleOverlay(a, e, _), o = !e && b;
          break;
        case x.OverlayToggledClientSettingType.OOP_GAME:
          E(e), g.Z.toggleOverlay(a, b, e), s = !e && _;
          break;
        case x.OverlayToggledClientSettingType.LEGACY:
          y.Z.setEnabled(e, L), (0, x.ou)(e, x.OverlayToggledClientSettingType.LEGACY, null != (n = a.id) ? n : null);
          break;
        case x.OverlayToggledClientSettingType.OOP:
          y.Z.setEnabled(w, e), (0, x.ou)(e, x.OverlayToggledClientSettingType.OOP, null != (r = a.id) ? r : null)
      }(o || s) && (0, B.l)(o ? x.OverlayToggledClientSettingType.LEGACY_GAME : x.OverlayToggledClientSettingType.OOP_GAME, null != (i = a.id) ? i : null)
    },
    k = (e, t) => {
      let n = !t && e,
        r = !L && _,
        i = !w && b,
        a = !_ && L,
        o = !b && w;
      switch (true) {
        case n && (r || i) && (a || o):
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
          g.Z.toggleOverlay(a, e, e), O(e), E(e), n = !e && b, r = !e && _;
          break;
        case "global":
          y.Z.setEnabled(e, e), n = !e && w, r = !e && L;
          break;
        case "both":
          y.Z.setEnabled(e, e), g.Z.toggleOverlay(a, e, e), O(e), E(e), n = !e && w || !e && b, r = !e && L || !e && _
      }
      let i = null;
      if (n ? i = "game" === t ? x.OverlayToggledClientSettingType.LEGACY_GAME : x.OverlayToggledClientSettingType.LEGACY : r && (i = "game" === t ? x.OverlayToggledClientSettingType.OOP_GAME : x.OverlayToggledClientSettingType.OOP), null != i) {
        var o;
        (0, B.l)(i, null != (o = a.id) ? o : null)
      }
    },
    Z = C && A,
    F = !w && !L,
    V = !_ && !w && b && !C,
    H = !b && !L && _ && !A,
    Y = (null == c ? true : c.overlayMethod) === j.gl.Disabled,
    W = (null == c ? true : c.state) === j.mM.OVERLAY_RENDERING && !Y,
    K = (null == c ? true : c.state) != null && eU.has(c.state) && !Y,
    z = (null == c ? true : c.overlayMethod) === j.gl.OutOfProcess,
    q = (null == c ? true : c.overlayMethod) === j.gl.OutOfProcessLimitedInteraction,
    X = (null == c ? true : c.overlayMethod) === j.gl.Hook,
    J = (null == c ? true : c.state) === j.mM.OVERLAY_CRASHED || (null == c ? true : c.state) === j.mM.OVERLAY_CRASHED_DISABLED,
    $ = !_ && !b,
    [et, er] = (() => {
      switch (true) {
        case W && z:
          function e(e, t) {
            return (0, r.jsx)(m.Text, {
              tag: "span",
              variant: "text-sm/medium",
              color: "text-feedback-positive",
              children: e
            }, t)
          }
          return [eE.intl.format(eE.t.hFVBIg, {
            overlayMethod: eE.intl.string(eE.t.a3eXSw),
            overlayMethodHook: e
          }), null];
        case W && q:
          function t(e, t) {
            return (0, r.jsx)(m.Text, {
              tag: "span",
              variant: "text-sm/medium",
              color: "text-feedback-warning",
              children: e
            }, t)
          }
          return [eE.intl.format(eE.t.hFVBIg, {
            overlayMethod: eE.intl.string(eE.t["506Aba"]),
            overlayMethodHook: t
          }), null];
        case W && X:
          function n() {
            var e, t;
            switch (true) {
              case (null == c ? true : c.fullscreenType) !== v.Jx.BORDERLESS_FULLSCREEN:
                return eE.intl.string(eE.t.mJmbeC);
              case A:
                return eE.intl.string(eE.t.C7bLTQ);
              case !(null != (e = null == c ? true : c.oopEnabled) && e):
                return eE.intl.string(eE.t.WiY24u);
              case !L:
                return eE.intl.string(eE.t.cAFVsL);
              case !(null != (t = null == c ? true : c.supportsOutOfProcess) && t):
                return eE.intl.string(eE.t.XcGEcs);
              default:
                return eE.intl.string(eE.t.bJXH2v)
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
          return [eE.intl.format(eE.t.hFVBIg, {
            overlayMethod: eE.intl.string(eE.t.bvlpDR),
            overlayMethodHook: i
          }), n()];
        case J:
          return [eE.intl.string(eE.t.OFC2aw), null];
        case Z:
          return [eE.intl.string(eE.t.m7X4az), null];
        case F:
          return [eE.intl.string(eE.t["9DUS5l"]), null];
        case $:
          return [eE.intl.string(eE.t.nQ9EdJ), null];
        case V:
        case H:
          return [eE.intl.string(eE.t.VWUn0a), null];
        case K:
          if (z) return [eE.intl.string(eE.t["s8+CFq"]), null];
          if (X) return [eE.intl.string(eE.t.JEEdqt), null];
          if (q) return [eE.intl.string(eE.t.pzBMwY), null];
          return [eE.intl.string(eE.t["2Xhy9k"]), null];
        case null == c:
          return [eE.intl.string(eE.t.vwHPRi), null];
        case Y: {
          let e = (null == c ? true : c.fullscreenType) === v.Jx.FULLSCREEN ? eE.intl.string(eE.t.mJmbeC) : null;
          return [eE.intl.string(eE.t.VPW4XY), e]
        }
        default:
          return [eE.intl.string(eE.t.ONovP5), null]
      }
    })();
  (0, S.ZP)(() => {
    g.Z.getDetectableGames()
  });
  let [ei, ea] = i.useMemo(() => K ? ["text-muted", m.TVs.colors.TEXT_MUTED.css] : W && q ? ["text-feedback-warning", m.TVs.colors.TEXT_FEEDBACK_WARNING.css] : W && z ? ["text-feedback-positive", m.TVs.colors.TEXT_FEEDBACK_POSITIVE.css] : W && X ? ["text-strong", m.TVs.colors.TEXT_STRONG.css] : ["interactive-text-default", m.TVs.colors.INTERACTIVE_TEXT_DEFAULT.css], [K, W, q, z, X]);
  return null == a ? null : (0, r.jsxs)(ek, {
    onExpand: T,
    className: I ? eb.expandedContainer : true,
    title: (0, r.jsxs)(r.Fragment, {
      children: [null != (n = null != (t = null != (e = null == o ? true : o.name) ? e : null == f ? true : f.name) ? t : null == a ? true : a.gameName) ? n : "", null != f && f.verified ? (0, r.jsx)(h.u, {
        text: eE.intl.string(eE.t["4PJP5p"]),
        children: (0, r.jsx)(D.Z, {
          size: ew,
          color: m.TVs.colors.BACKGROUND_BRAND.css,
          children: (0, r.jsx)(m.kmB, {
            size: "custom",
            width: ew,
            height: ew,
            color: m.TVs.colors.WHITE.css
          })
        })
      }) : null]
    }),
    description: et,
    hint: null != er ? er : true,
    header: (0, r.jsxs)(r.Fragment, {
      children: [W || K ? (0, r.jsx)(m.pzj, {
        size: "xxs",
        color: ea
      }) : (0, r.jsx)("div", {
        className: eb.playingDot
      }), (0, r.jsx)(m.Text, {
        variant: "text-xs/semibold",
        color: ei,
        children: eE.intl.string(eE.t.CDOx3w)
      })]
    }),
    icon: (0, r.jsx)(R.Z, {
      game: o,
      pid: null == a ? true : a.pid,
      size: R.A.MEDIUM
    }),
    "aria-label": eE.intl.string(eE.t["87O5GC"]),
    action: (0, r.jsx)(m.P3F, {
      onClick: e => eG(e),
      children: (0, r.jsx)(m.rsf, {
        checked: _ && L || b && w,
        disabled: Z,
        onChange: e => {
          G(e, k(e, _ && L || b && w))
        }
      })
    }),
    warning: (0, r.jsx)(Q.Z, {
      className: eb.systemServiceWarning,
      game: a
    }),
    children: [(0, r.jsx)(eM, {
      title: eE.intl.string(eE.t["7BlVIs"]),
      description: eE.intl.string(eE.t.ndgADE),
      hint: L ? true : eE.intl.string(eE.t.cAFVsL),
      "aria-label": eE.intl.string(eE.t["7BlVIs"]),
      action: (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(m.rsf, {
          checked: _ && L,
          disabled: A,
          onChange: e => {
            e && !L ? M(e, x.OverlayToggledClientSettingType.OOP) : M(e, x.OverlayToggledClientSettingType.OOP_GAME)
          }
        }), (0, r.jsx)("div", {
          className: eb.emptySpacer
        })]
      })
    }), (0, r.jsx)(eM, {
      title: eE.intl.string(eE.t.BfFpW1),
      description: eE.intl.string(eE.t.OzInYk),
      hint: w ? true : eE.intl.string(eE.t["3sYHXm"]),
      "aria-label": eE.intl.string(eE.t.BfFpW1),
      action: (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(m.rsf, {
          checked: b && w,
          disabled: C,
          onChange: e => {
            e && !w ? M(e, x.OverlayToggledClientSettingType.LEGACY) : M(e, x.OverlayToggledClientSettingType.LEGACY_GAME)
          }
        }), (0, r.jsx)("div", {
          className: eb.emptySpacer
        })]
      })
    })]
  })
}

function eF(e) {
  let {
    game: t,
    gameApplication: n
  } = e, a = i.useMemo(() => null == t ? null : "pid" in t ? t.pid : null, [t]), o = (0, p.e7)([T.Z], () => null != n ? n : T.Z.getApplication(null == t ? true : t.id), [n, t]);
  return (0, r.jsx)(R.Z, {
    game: o,
    pid: a,
    size: R.A.SMALL
  })
}

function eB(e) {
  let {
    rawGame: t,
    gameApplication: n,
    supportDisabled: a,
    getEnabledFromStatus: o,
    onChange: s,
    clientSettingType: l,
    ariaLabel: c
  } = e, u = (0, p.cj)([N.ZP, ee.Z, en.Z], () => (0, N.FZ)(t, N.ZP, ee.Z, en.Z)), d = (0, p.cj)([ee.Z, en.Z], () => (0, N.b6)(t, false, [ee.Z, en.Z]), [t]), f = o(d), [_, h] = i.useState(f);
  i.useEffect(() => {
    h(f)
  }, [f]);
  let g = e => {
    let n = !e && _;
    if (h(e), s(e, u, d), n) {
      var r, i;
      (0, B.l)(l, null != (i = null != (r = u.id) ? r : null == t ? true : t.id) ? i : null)
    }
  };
  return (0, r.jsx)(eM, {
    title: t.name,
    icon: (0, r.jsx)(eF, {
      game: u,
      gameApplication: n
    }),
    "aria-label": c,
    action: (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(m.rsf, {
        checked: _,
        disabled: a,
        onChange: e => g(e)
      }), (0, r.jsx)("div", {
        className: eb.emptySpacer
      })]
    })
  })
}

function eV() {
  let [e, t] = i.useState(false), {
    legacyEnabled: n,
    oopEnabled: a
  } = (0, p.cj)([U.default], () => U.default.getGlobalEnabledStatus()), o = (0, p.Wu)([N.ZP], () => N.ZP.getGamesSeen(true)).filter(e => !(0, z.le)(e)), s = (0, C.Z)(o.map(e => e.id)), l = !(0, ed.supportsLegacy)(), c = e => {
    var t, r;
    y.Z.setEnabled(e, a);
    let i = null != (r = null == (t = N.ZP.getCurrentGameForAnalytics()) ? true : t.id) ? r : null;
    (0, x.ou)(e, x.OverlayToggledClientSettingType.LEGACY, i), !e && n && (0, B.l)(x.OverlayToggledClientSettingType.LEGACY, i)
  }, u = (e, t, n) => {
    let {
      enabledOOP: r
    } = n;
    g.Z.toggleOverlay(t, e, r)
  }, d = i.useMemo(() => (0, ed.supportsLegacy)() ? l ? eE.intl.string(eE.t.r9jEVw) : eE.intl.string(eE.t.OzInYk) : eE.intl.string(eE.t["8Ox6/E"]), [l]);
  return 0 === o.length ? (0, r.jsx)(eM, {
    title: eE.intl.string(eE.t.BfFpW1),
    description: d,
    "aria-label": eE.intl.string(eE.t.BfFpW1),
    className: eb.standaloneContainer,
    action: (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(m.rsf, {
        checked: n,
        disabled: l,
        onChange: e => c(e)
      }), em.iP && (0, r.jsx)("div", {
        className: eb.emptySpacer
      })]
    })
  }) : (0, r.jsxs)(ek, {
    onExpand: t,
    className: e ? eb.expandedContainer : true,
    title: eE.intl.string(eE.t.BfFpW1),
    description: d,
    "aria-label": eE.intl.string(eE.t.BfFpW1),
    action: (0, r.jsx)(m.P3F, {
      onClick: e => eG(e),
      children: (0, r.jsx)(m.rsf, {
        checked: n,
        disabled: l,
        onChange: e => c(e)
      })
    }),
    children: [(0, r.jsx)("div", {
      className: eb.subtitleContainer,
      children: (0, r.jsx)(m.Text, {
        variant: "text-xs/semibold",
        color: "text-muted",
        children: eE.intl.string(eE.t.FzoWRo)
      })
    }), (0, r.jsx)(m.zJl, {
      className: eb.scroller,
      children: o.map((e, t) => (0, r.jsx)(eB, {
        rawGame: e,
        clientSettingType: x.OverlayToggledClientSettingType.LEGACY_GAME,
        supportDisabled: l,
        gameApplication: s[t],
        getEnabledFromStatus: e => {
          let {
            enabledLegacy: t
          } = e;
          return t
        },
        onChange: u,
        ariaLabel: eE.intl.format(eE.t.hvPYsF, {
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
  } = (0, p.cj)([U.default], () => U.default.getGlobalEnabledStatus()), o = !(0, ed.supportsOutOfProcess)(), s = (0, p.Wu)([N.ZP], () => N.ZP.getGamesSeen(true)).filter(e => !(0, z.le)(e)), l = (0, C.Z)(s.map(e => e.id)), c = e => {
    var t, r;
    let i = !e && n;
    y.Z.setEnabled(a, e);
    let o = null != (r = null == (t = N.ZP.getCurrentGameForAnalytics()) ? true : t.id) ? r : null;
    (0, x.ou)(e, x.OverlayToggledClientSettingType.OOP, o), i && (0, B.l)(x.OverlayToggledClientSettingType.OOP, o)
  }, u = (e, t, n) => {
    let {
      enabledLegacy: r
    } = n;
    g.Z.toggleOverlay(t, e, r)
  }, d = i.useMemo(() => em.iP ? o ? eE.intl.string(eE.t.C7bLTQ) : eE.intl.string(eE.t.ndgADE) : eE.intl.string(eE.t.m7X4az), [o]);
  return 0 === s.length ? (0, r.jsx)(eM, {
    title: eE.intl.string(eE.t["7BlVIs"]),
    description: d,
    "aria-label": eE.intl.string(eE.t["7BlVIs"]),
    className: eb.standaloneContainer,
    action: (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(m.rsf, {
        checked: n,
        disabled: o,
        onChange: e => c(e)
      }), em.iP && (0, r.jsx)("div", {
        className: eb.emptySpacer
      })]
    })
  }) : (0, r.jsxs)(ek, {
    onExpand: t,
    className: e ? eb.expandedContainer : true,
    title: eE.intl.string(eE.t["7BlVIs"]),
    description: d,
    "aria-label": eE.intl.string(eE.t["7BlVIs"]),
    action: (0, r.jsx)(m.P3F, {
      onClick: e => eG(e),
      children: (0, r.jsx)(m.rsf, {
        checked: n,
        disabled: o,
        onChange: e => c(e)
      })
    }),
    children: [(0, r.jsx)("div", {
      className: eb.subtitleContainer,
      children: (0, r.jsx)(m.Text, {
        variant: "text-xs/semibold",
        color: "text-muted",
        children: eE.intl.string(eE.t.FzoWRo)
      })
    }), (0, r.jsx)(m.zJl, {
      className: eb.scroller,
      children: s.map((e, t) => (0, r.jsx)(eB, {
        rawGame: e,
        clientSettingType: x.OverlayToggledClientSettingType.OOP_GAME,
        gameApplication: l[t],
        supportDisabled: o,
        getEnabledFromStatus: e => {
          let {
            enabledOOP: t
          } = e;
          return t
        },
        onChange: u,
        ariaLabel: eE.intl.format(eE.t.nByTd3, {
          gameName: e.name
        }).toString()
      }, e.id))
    })]
  })
}

function eY() {
  return (0, M.T_)(I.Z.USER_SETTINGS) ? (0, r.jsx)(eM, {
    title: eE.intl.string(eE.t["z4/l+V"]),
    description: eE.intl.string(eE.t["3aZq/0"]),
    action: (0, r.jsx)(m.Button, {
      variant: "primary",
      text: eE.intl.string(eE.t.s2nVhG),
      onClick: () => {
        (0, H.N)(I.Z.USER_SETTINGS, e_.IlC.APP)
      }
    }),
    "aria-label": eE.intl.string(eE.t["z4/l+V"])
  }) : null
}

function eW(e) {
  var t;
  let {
    isLegacySettings: n = false
  } = e, i = (0, p.e7)([ei.ZP], () => ei.ZP.getOverlayKeybind()), a = !(0, ed.supportsLegacy)(), o = !(0, ed.supportsOutOfProcess)(), [s, l] = (0, p.Wu)([N.ZP], () => [N.ZP.canShowAdminWarning, N.ZP.getVisibleGame()], []), c = (0, q.hi)(), d = null != l && l.elevated && s && !c, f = !(0, ei.I1)(null != (t = null == i ? true : i.shortcut) ? t : []);

  function _(e) {
    u()(null != i, "Keybind should never be undefined"), E.Z.setKeybind(eT(eS({}, i), {
      shortcut: e
    }))
  }
  return (0, r.jsx)("div", {
    className: eb.keybindMainContainer,
    children: (0, r.jsxs)("div", {
      className: eb.keybindContainer,
      children: [(0, r.jsxs)("div", {
        className: eb.keybindHeaderContainer,
        children: [(0, r.jsx)(m.Text, {
          variant: n ? "text-md/semibold" : "text-md/medium",
          color: "text-strong",
          children: eE.intl.string(eE.t.VsAZcC)
        }), d && (0, r.jsx)(m.Text, {
          variant: "text-xs/normal",
          color: "text-feedback-warning",
          className: eb.keybindAdminWarning,
          children: eE.intl.string(eE.t.NsowVa)
        }), f && (0, r.jsx)(m.Text, {
          variant: "text-xs/normal",
          color: "text-feedback-warning",
          className: eb.keybindAdminWarning,
          children: eE.intl.string(eE.t["UNoTw/"])
        })]
      }), (0, r.jsx)("div", {
        className: eb.keybindRecorderContainer,
        children: (0, r.jsx)(O.Z, {
          disabled: a && o,
          defaultValue: null != i ? i.shortcut : [],
          onChange: _
        })
      })]
    })
  })
}

function eK(e) {
  return [{
    title: eE.t.eVE4LX,
    description: eE.t["72WNqk"],
    disabledSetting: L.i.TEXT_CHAT,
    key: ef.n.OVERLAY_NOTIFICATIONS_TEXT_CHAT
  }, {
    title: eE.t.oifnSh,
    description: eE.t.bgU5r0,
    disabledSetting: L.i.WELCOME_GENERAL,
    key: ef.n.OVERLAY_NOTIFICATIONS_WELCOME
  }, {
    title: eE.t.hqsZJW,
    description: eE.t.kHjdqc,
    disabledSetting: L.i.GO_LIVE_NUDGE,
    key: ef.n.OVERLAY_NOTIFICATIONS_GO_LIVE
  }, {
    title: eE.t.sop3rn,
    description: eE.t.pjgffc,
    disabledSetting: L.i.GAME_ACTIVITY,
    key: ef.n.OVERLAY_NOTIFICATIONS_GAME_ACTIVITY
  }, {
    title: eE.t["2QVhbb"],
    description: eE.t.wQ4ilB,
    disabledSetting: L.i.NOW_PLAYING,
    key: ef.n.OVERLAY_NOTIFICATIONS_NOW_PLAYING
  }, e && {
    title: eE.t["5/21FT"],
    description: eE.t.EIzwfA,
    disabledSetting: L.i.FRIEND_STREAM_WATCH_NUDGE,
    key: ef.n.OVERLAY_NOTIFICATIONS_FRIEND_STREAM_WATCH,
    usePredicate: () => {
      let {
        enabled: e
      } = (0, M.aq)("OverlayV3StreamWatchNudge");
      return e
    }
  }].filter(e => false !== e).filter(Boolean)
}

function ez() {
  let {
    enabled: e
  } = (0, M.aq)("OverlayV3StreamWatchNudge"), t = eK(e), n = e => t => {
    y.Z.setNotificationDisabledSetting(e, !t)
  }, i = (0, p.e7)([Z.Z], () => Z.Z.getDisabledNotifications());
  return (0, r.jsxs)("div", {
    className: eb.notificationSettingsContainer,
    children: [(0, r.jsx)(m.Heading, {
      variant: "heading-md/semibold",
      color: "text-strong",
      children: eE.intl.string(eE.t.xOE5bA)
    }), t.map(e => (0, r.jsxs)("div", {
      className: eb.notificationItem,
      children: [(0, r.jsxs)("div", {
        className: eb.notificationDescriptionContainer,
        children: [(0, r.jsx)(m.Text, {
          variant: "text-sm/semibold",
          color: "text-strong",
          children: eE.intl.string(e.title)
        }), (0, r.jsx)(m.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: eE.intl.string(e.description)
        })]
      }), (0, r.jsx)(m.rsf, {
        checked: !i.has(e.disabledSetting),
        onChange: n(e.disabledSetting)
      })]
    }, e.disabledSetting))]
  })
}

function eq(e) {
  let t = eQ(e.username);
  return t.user = e, t
}

function eQ(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    n = arguments.length > 2 && true !== arguments[2] && arguments[2],
    r = arguments.length > 3 && true !== arguments[3] && arguments[3],
    i = "456" + Math.floor(1e6 * Math.random());
  return {
    voiceState: new $.Z({
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
    user: new J.Z({
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

function eX() {
  return (0, X.createChannelRecord)({
    id: "123",
    name: "Test Channel",
    type: e_.d4z.GUILD_VOICE,
    guild_id: "456"
  })
}

function eJ(e) {
  var t, n;
  let {
    isLegacySettings: a = false
  } = e, s = (0, p.e7)([er.default], () => er.default.getCurrentUser()), {
    avatarSizeMode: l,
    displayNameMode: c,
    displayUserMode: u
  } = (0, p.cj)([eo.default], () => ({
    avatarSizeMode: eo.default.getAvatarSizeMode(),
    displayNameMode: eo.default.getDisplayNameMode(),
    displayUserMode: eo.default.getDisplayUserMode()
  })), [d] = i.useState(() => [eQ(eE.intl.string(eE.t.C0ZDvo), true, false), eQ(eE.intl.string(eE.t.iOtj8E), false, false, true), eQ(eE.intl.string(eE.t["0oqNgL"]), false, true)]), f = (0, p.e7)([F.Z, et.Z], () => {
    let e = F.Z.getWidgetByType(e_.Odu.VOICE_V3);
    if (null == e) return null;
    let t = et.Z.getWidget(e.id);
    return null != t && (0, Y.Aw)(t) ? t : null
  }), _ = null != (n = null == f || null == (t = f.meta) ? true : t.voiceStatesMaxShown) ? n : eg.At, h = [null != s ? eq(s) : null, ...d].filter(el.lm), g = [new Map(h.map(e => [e.user.id, e])), h.map(e => e.user.id)], E = (0, r.jsx)(m.f6W, {
    theme: e_.BRd.MIDNIGHT,
    children: e => {
      var t, n;
      return (0, r.jsxs)("div", {
        className: o()(eb.widgetContainer, e),
        children: [(0, r.jsx)("div", {
          className: eb.voiceWidgetContainer,
          children: (0, r.jsx)(W.kI, {
            id: "voice-widget",
            title: eE.intl.string(eE.t.KNJ6Vq),
            channel: eX(),
            overlayVoiceStates: g,
            displayNameMode: c,
            displayUserMode: u,
            avatarSizeMode: l,
            widget: e_.Odu.VOICE,
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
          className: eb.widgetHeaderContainer,
          children: [(0, r.jsx)(K.PI, {
            children: eE.intl.string(eE.t.KNJ6Vq)
          }), (0, r.jsx)(K.ls, {}), (0, r.jsx)(K.RT, {
            id: null != (t = null == f ? true : f.id) ? t : "voice-widget",
            pinned: null != (n = null == f ? true : f.pinned) && n
          })]
        })]
      })
    }
  });
  return a ? E : (0, r.jsx)("div", {
    className: eb.widgetSettingsContainer,
    children: E
  })
}

function e$() {
  var e, t;
  let {
    avatarSizeMode: n,
    displayNameMode: i,
    displayUserMode: a
  } = (0, p.cj)([eo.default], () => ({
    avatarSizeMode: eo.default.getAvatarSizeMode(),
    displayNameMode: eo.default.getDisplayNameMode(),
    displayUserMode: eo.default.getDisplayUserMode()
  })), o = (0, p.e7)([F.Z, et.Z], () => {
    let e = F.Z.getWidgetByType(e_.Odu.VOICE_V3);
    if (null == e) return null;
    let t = et.Z.getWidget(e.id);
    return null != t && (0, Y.Aw)(t) ? t : null
  }), s = null != (t = null == o || null == (e = o.meta) ? true : e.voiceStatesMaxShown) ? t : eg.At;

  function l(e) {
    null != o && (e < eR ? (0, b.zG)(o.id, {
      voiceStatesMaxShown: eg.Og
    }) : (0, b.zG)(o.id, {
      voiceStatesMaxShown: Math.floor(e)
    }))
  }
  return (0, r.jsxs)("div", {
    className: eb.voiceSettingsContainer,
    children: [(0, r.jsx)(m.PhF, {
      label: eE.intl.string(eE.t.dnvZSg),
      options: [{
        id: "large",
        label: eE.intl.string(eE.t.YcOxtr),
        value: e_.ipw.LARGE
      }, {
        id: "small",
        label: eE.intl.string(eE.t.BKIKqx),
        value: e_.ipw.SMALL
      }],
      onSelectionChange: y.Z.setAvatarSizeMode,
      value: n,
      selectionMode: "single",
      fullWidth: true
    }), (0, r.jsx)(m.PhF, {
      label: eE.intl.string(eE.t.J0dpcB),
      options: [{
        id: "always",
        label: eE.intl.string(eE.t.nBmDrT),
        value: e_.wC$.ALWAYS
      }, {
        id: "only-while-speaking",
        label: eE.intl.string(eE.t["2OvIZY"]),
        value: e_.wC$.ONLY_WHILE_SPEAKING
      }, {
        id: "never",
        label: eE.intl.string(eE.t.ekjlPL),
        value: e_.wC$.NEVER
      }],
      onSelectionChange: y.Z.setDisplayNameMode,
      value: i,
      selectionMode: "single",
      fullWidth: true
    }), (0, r.jsx)(eJ, {
      isLegacySettings: true
    }), (0, r.jsx)(m.PhF, {
      label: eE.intl.string(eE.t.swsWWC),
      options: [{
        id: "always",
        label: eE.intl.string(eE.t.nBmDrT),
        value: e_.OYC.ALWAYS
      }, {
        id: "only-while-speaking",
        label: eE.intl.string(eE.t["2OvIZY"]),
        value: e_.OYC.ONLY_WHILE_SPEAKING
      }],
      onSelectionChange: y.Z.setDisplayUserMode,
      value: a,
      selectionMode: "single",
      fullWidth: true
    }), (0, r.jsx)("div", {
      className: eb.sliderContainer,
      children: (0, r.jsx)(m.iRW, {
        label: eE.intl.string(eE.t["X/Uyzc"]),
        initialValue: s,
        onValueRender: e => e < eR ? eE.intl.string(eE.t.nrUzFL) : "".concat(Math.floor(e)),
        minValue: eR - 1,
        maxValue: eD,
        onValueChange: l,
        markers: ex,
        barStyles: {
          background: m.TVs.colors.BACKGROUND_MOD_STRONG.css
        },
        fillStyles: {
          background: m.TVs.colors.BACKGROUND_BRAND.css
        },
        onMarkerRender: e => e < eR ? eE.intl.string(eE.t.nrUzFL) : "".concat(Math.floor(e))
      })
    })]
  })
}

function e0(e) {
  let {
    showDivider: t = false
  } = e, [n, i] = (0, A.US)([_.z.OVERLAY_OOP_SETTINGS_NUX], true, true), a = () => {
    i(eh.L.DISMISS)
  };
  return ((0, S.ZP)(() => () => {
    i(eh.L.AUTO_DISMISS)
  }), n !== _.z.OVERLAY_OOP_SETTINGS_NUX) ? null : (0, r.jsxs)("div", {
    className: eb.overlaySettingsNux,
    children: [(0, r.jsx)("div", {
      children: (0, r.jsx)("img", {
        src: ey.Z,
        alt: eE.intl.string(eE.t.mdXZh1),
        className: eb.nuxFirstImage
      })
    }), (0, r.jsx)("div", {
      children: (0, r.jsxs)("div", {
        className: eb.mainTitleContainer,
        children: [(0, r.jsx)(m.Heading, {
          variant: "heading-xl/medium",
          color: "text-strong",
          children: eE.intl.string(eE.t.jzjJQg)
        }), (0, r.jsx)(m.Text, {
          variant: "text-md/normal",
          color: "text-muted",
          children: eE.intl.string(eE.t["5dOfxb"])
        })]
      })
    }), (0, r.jsx)("div", {
      children: (0, r.jsx)("img", {
        src: eO.Z,
        alt: eE.intl.string(eE.t.mdXZh1),
        className: eb.nuxUserSettingsImage
      })
    }), (0, r.jsx)("div", {
      "data-button-hoisted-classname-wrapper": true,
      className: eb.closeCircleButton,
      children: (0, r.jsx)(m.Button, {
        variant: "primary",
        text: eE.intl.string(eE.t.Q26diF),
        onClick: () => a()
      })
    }), t ? (0, r.jsx)("div", {
      className: eb.nuxDivider
    }) : null]
  })
}

function e1(e) {
  let {
    runningGame: t,
    runningGameApplication: n
  } = e, a = null == n ? true : n.id, o = (0, p.e7)([Z.Z], () => Z.Z.isLimitedInteractionOverrideEnabled(a), [a]), s = i.useMemo(() => null != t && (0, G.H8)(t.pid), [t]), l = (0, k.Z)({
    location: "overlay_user_settings"
  }), {
    disableClickableRegions: c,
    shouldShowKeybindIndicators: u
  } = (0, p.cj)([eo.default], () => ({
    disableClickableRegions: eo.default.disableClickableRegions,
    shouldShowKeybindIndicators: eo.default.showKeybindIndicators
  }));

  function d() {
    y.Z.setDisableClickableRegions(!c)
  }

  function f(e) {
    null != n && (0, V.rI)(n.id, e)
  }
  return (0, r.jsxs)("div", {
    className: eb.overlayEnabledSettingsContainer,
    children: [(0, r.jsx)(eW, {
      isLegacySettings: true
    }), l && (0, r.jsx)(m.rsf, {
      label: eE.intl.string(eE.t.XZTl9r),
      checked: u,
      onChange: e => y.Z.setShowKeybindIndicators(e)
    }), null != a && (0, r.jsxs)("div", {
      children: [(0, r.jsxs)("div", {
        className: eb.limitedInteractionOverrideContainer,
        children: [(0, r.jsx)(m.Text, {
          variant: "text-md/semibold",
          color: "text-strong",
          children: eE.intl.string(eE.t.wgVQND)
        }), (0, r.jsx)(m.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: eE.intl.string(eE.t["5SsyF5"])
        })]
      }), (0, r.jsx)(m.rsf, {
        checked: o || s,
        disabled: s,
        onChange: e => f(e)
      })]
    }), (0, r.jsxs)("div", {
      children: [(0, r.jsxs)("div", {
        className: eb.limitedInteractionOverrideContainer,
        children: [(0, r.jsx)(m.Text, {
          variant: "text-md/semibold",
          color: "text-strong",
          children: eE.intl.string(eE.t["+eFXxq"])
        }), (0, r.jsx)(m.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: eE.intl.string(eE.t.kivMAp)
        })]
      }), (0, r.jsx)(m.rsf, {
        checked: !c,
        onChange: d
      })]
    })]
  })
}

function e3() {
  let {
    runningGame: e,
    runningGameApplication: t
  } = (0, P.Z)(), n = (0, p.e7)([er.default], () => er.default.getCurrentUser());
  return ((0, S.ZP)(() => {
    if (ec.isPlatformEmbedded) return (0, w.Ky)(), w.P7
  }), eL(), null == n) ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(ep.Z, {
      title: eE.intl.string(eE.t["9cb1Uz"]),
      children: [(0, r.jsx)(e0, {
        showDivider: true
      }), (0, r.jsxs)("div", {
        className: eb.overlayEnabledSettingsContainer,
        children: [(0, r.jsx)(eZ, {}), (0, r.jsx)(eH, {}), (0, r.jsx)(eV, {}), (0, r.jsx)(eY, {})]
      }), (0, r.jsx)("div", {
        className: eb.settingsDivider
      })]
    }), (0, r.jsxs)("div", {
      children: [(0, r.jsx)(e1, {
        runningGame: e,
        runningGameApplication: t
      }), (0, r.jsx)("div", {
        className: eb.settingsDivider
      })]
    }), (0, r.jsxs)(m.gNt, {
      label: eE.intl.string(eE.t.r1TZfh),
      children: [(0, r.jsx)(e$, {}), (0, r.jsx)("div", {
        className: eb.settingsDivider
      })]
    }), (0, r.jsx)(ez, {})]
  })
}