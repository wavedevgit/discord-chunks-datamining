/** Chunk was on web.js **/
/** chunk id: 794704, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => e1
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
  Chunk199849 = require("./199849.jsx"),
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
  eR = 16,
  ew = 1,
  eD = 25,
  ex = [0, 5, 10, 15, 20, 25];

function eL() {
  let e = ej(eN);
  f().isEqual(module, eN) || (Chunk626135.default.track(Chunk981631.rMx.OVERLAY_SETTINGS_UPDATED, module), eN = module)
}

function ej(e) {
  var t;
  let n = es.default.getNotificationPositionMode(),
    r = n !== e_._vf.DISABLED,
    i = ea.ZP.getOverlayKeybind(),
    a = ea.ZP.getOverlayChatKeybind();
  return {
    enabled: eo.default.enabled,
    notifications_enabled: r,
    notifications_position: r ? n : null,
    text_notifications_mode: F.Z.isNotificationDisabled(eh.n0.TextChat) ? "DISABLED" : "ENABLED",
    hotkey: null != i ? (0, ed.BB)(i.shortcut) : null,
    text_activation_hotkey: null != a ? (0, ed.BB)(a.shortcut) : null,
    text_opacity_slider: es.default.getTextWidgetOpacity(),
    old_enabled: null != (t = null == e ? true : e.enabled) ? t : eo.default.enabled
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
    children: [(0, r.jsxs)(g.kL8, {
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
          children: [(0, r.jsx)(g.Text, {
            variant: "text-md/medium",
            color: "text-strong",
            className: eb.groupTitle,
            children: i
          }), null != a && (0, r.jsx)(g.Text, {
            variant: "text-sm/normal",
            color: "text-subtle",
            children: a
          }), null != l && (0, r.jsx)(g.Text, {
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
  return (0, r.jsx)(g.zF9, {
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
          children: [s.action, l ? (0, r.jsx)(g.CJ0, {
            size: "custom",
            width: eP,
            height: eP,
            color: "var(--interactive-text-active)"
          }) : (0, r.jsx)(g.Fbu, {
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

function eZ(e) {
  var t, n, a;
  let {
    runningGame: o,
    runningGameApplication: s
  } = e, c = null == o ? true : o.pid, u = (0, p.e7)([G.default], () => null == o || null == c ? null : G.default.getTrackedGameByPid(c), [o, c], l()), {
    enabledLegacy: d,
    enabledOOP: f
  } = (0, p.cj)([et.Z, er.Z], () => {
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
    return (0, P.b6)(o, false, [et.Z, er.Z])
  }, [o, u]), _ = (0, p.e7)([P.ZP, et.Z, er.Z], () => null == o ? null : (0, P.FZ)(o, P.ZP, et.Z, er.Z), [o], l()), [m, b] = i.useState(f), [y, v] = i.useState(d), [T, C] = i.useState(false);
  i.useEffect(() => {
    b(f), v(d)
  }, [f, d]);
  let A = !(0, ef.supportsLegacy)(),
    N = !(0, ef.supportsOutOfProcess)(),
    {
      legacyEnabled: R,
      oopEnabled: w
    } = (0, p.cj)([G.default], () => G.default.getGlobalEnabledStatus()),
    j = (e, t) => {
      var n, r, i;
      if (null == o) return;
      let a = false,
        s = false;
      switch (t) {
        case L.OverlayToggledClientSettingType.LEGACY_GAME:
          v(e), E.Z.toggleOverlay(o, e, m), a = !e && y;
          break;
        case L.OverlayToggledClientSettingType.OOP_GAME:
          b(e), E.Z.toggleOverlay(o, y, e), s = !e && m;
          break;
        case L.OverlayToggledClientSettingType.LEGACY:
          O.Z.setEnabled(e, w), (0, L.ou)(e, L.OverlayToggledClientSettingType.LEGACY, null != (n = o.id) ? n : null);
          break;
        case L.OverlayToggledClientSettingType.OOP:
          O.Z.setEnabled(R, e), (0, L.ou)(e, L.OverlayToggledClientSettingType.OOP, null != (r = o.id) ? r : null)
      }(a || s) && (0, V.l)(a ? L.OverlayToggledClientSettingType.LEGACY_GAME : L.OverlayToggledClientSettingType.OOP_GAME, null != (i = o.id) ? i : null)
    },
    k = (e, t) => {
      let n = !t && e,
        r = !w && m,
        i = !R && y,
        a = !m && w,
        o = !y && R;
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
          E.Z.toggleOverlay(o, e, e), v(e), b(e), n = !e && y, r = !e && m;
          break;
        case "global":
          O.Z.setEnabled(e, e), n = !e && R, r = !e && w;
          break;
        case "both":
          O.Z.setEnabled(e, e), E.Z.toggleOverlay(o, e, e), v(e), b(e), n = !e && R || !e && y, r = !e && w || !e && m
      }
      let i = null;
      if (n ? i = "game" === t ? L.OverlayToggledClientSettingType.LEGACY_GAME : L.OverlayToggledClientSettingType.LEGACY : r && (i = "game" === t ? L.OverlayToggledClientSettingType.OOP_GAME : L.OverlayToggledClientSettingType.OOP), null != i) {
        var a;
        (0, V.l)(i, null != (a = o.id) ? a : null)
      }
    },
    Z = A && N,
    F = !R && !w,
    B = !m && !R && y && !A,
    H = !y && !w && m && !N,
    Y = (null == u ? true : u.overlayMethod) === M.gl.Disabled,
    W = (null == u ? true : u.state) === M.mM.OVERLAY_RENDERING && !Y,
    K = (null == u ? true : u.state) != null && eU.has(u.state) && !Y,
    z = (null == u ? true : u.overlayMethod) === M.gl.OutOfProcess,
    q = (null == u ? true : u.overlayMethod) === M.gl.OutOfProcessLimitedInteraction,
    Q = (null == u ? true : u.overlayMethod) === M.gl.Hook,
    J = (null == u ? true : u.state) === M.mM.OVERLAY_CRASHED || (null == u ? true : u.state) === M.mM.OVERLAY_CRASHED_DISABLED,
    $ = !m && !y,
    [ee, en] = (() => {
      switch (true) {
        case W && z:
          function e(e, t) {
            return (0, r.jsx)(g.Text, {
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
            return (0, r.jsx)(g.Text, {
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
        case W && Q:
          function n() {
            var e, t;
            switch (true) {
              case (null == u ? true : u.fullscreenType) !== S.Jx.BORDERLESS_FULLSCREEN:
                return eE.intl.string(eE.t.mJmbeC);
              case N:
                return eE.intl.string(eE.t.C7bLTQ);
              case !(null != (e = null == u ? true : u.oopEnabled) && e):
                return eE.intl.string(eE.t.WiY24u);
              case !w:
                return eE.intl.string(eE.t.cAFVsL);
              case !(null != (t = null == u ? true : u.supportsOutOfProcess) && t):
                return eE.intl.string(eE.t.XcGEcs);
              default:
                return eE.intl.string(eE.t.bJXH2v)
            }
          }

          function i(e, t) {
            return (0, r.jsx)(g.Text, {
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
        case B:
        case H:
          return [eE.intl.string(eE.t.VWUn0a), null];
        case K:
          if (z) return [eE.intl.string(eE.t["s8+CFq"]), null];
          if (Q) return [eE.intl.string(eE.t.JEEdqt), null];
          if (q) return [eE.intl.string(eE.t.pzBMwY), null];
          return [eE.intl.string(eE.t["2Xhy9k"]), null];
        case null == u:
          return [eE.intl.string(eE.t.vwHPRi), null];
        case Y: {
          let e = (null == u ? true : u.fullscreenType) === S.Jx.FULLSCREEN ? eE.intl.string(eE.t.mJmbeC) : null;
          return [eE.intl.string(eE.t.VPW4XY), e]
        }
        default:
          return [eE.intl.string(eE.t.ONovP5), null]
      }
    })();
  (0, I.ZP)(() => {
    E.Z.getDetectableGames()
  });
  let [ei, ea] = i.useMemo(() => K ? ["text-muted", g.TVs.colors.TEXT_MUTED.css] : W && q ? ["text-feedback-warning", g.TVs.colors.TEXT_FEEDBACK_WARNING.css] : W && z ? ["text-feedback-positive", g.TVs.colors.TEXT_FEEDBACK_POSITIVE.css] : W && Q ? ["text-strong", g.TVs.colors.TEXT_STRONG.css] : ["interactive-text-default", g.TVs.colors.INTERACTIVE_TEXT_DEFAULT.css], [K, W, q, z, Q]);
  return null == o ? null : (0, r.jsxs)(ek, {
    onExpand: C,
    className: T ? eb.expandedContainer : true,
    title: (0, r.jsxs)(r.Fragment, {
      children: [null != (a = null != (n = null != (t = null == s ? true : s.name) ? t : null == _ ? true : _.name) ? n : null == o ? true : o.gameName) ? a : "", null != _ && _.verified ? (0, r.jsx)(h.u, {
        text: eE.intl.string(eE.t["4PJP5p"]),
        children: (0, r.jsx)(x.Z, {
          size: eR,
          color: g.TVs.colors.BACKGROUND_BRAND.css,
          children: (0, r.jsx)(g.kmB, {
            size: "custom",
            width: eR,
            height: eR,
            color: g.TVs.colors.WHITE.css
          })
        })
      }) : null]
    }),
    description: ee,
    hint: null != en ? en : true,
    header: (0, r.jsxs)(r.Fragment, {
      children: [W || K ? (0, r.jsx)(g.pzj, {
        size: "xxs",
        color: ea
      }) : (0, r.jsx)("div", {
        className: eb.playingDot
      }), (0, r.jsx)(g.Text, {
        variant: "text-xs/semibold",
        color: ei,
        children: eE.intl.string(eE.t.CDOx3w)
      })]
    }),
    icon: (0, r.jsx)(D.Z, {
      game: s,
      pid: null == o ? true : o.pid,
      size: D.A.MEDIUM
    }),
    "aria-label": eE.intl.string(eE.t["87O5GC"]),
    action: (0, r.jsx)(g.P3F, {
      onClick: e => eG(e),
      children: (0, r.jsx)(g.rsf, {
        checked: m && w || y && R,
        disabled: Z,
        onChange: e => {
          U(e, k(e, m && w || y && R))
        }
      })
    }),
    warning: (0, r.jsx)(X.Z, {
      className: eb.systemServiceWarning,
      game: o
    }),
    children: [(0, r.jsx)(eM, {
      title: eE.intl.string(eE.t["7BlVIs"]),
      description: eE.intl.string(eE.t.ndgADE),
      hint: w ? true : eE.intl.string(eE.t.cAFVsL),
      "aria-label": eE.intl.string(eE.t["7BlVIs"]),
      action: (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(g.rsf, {
          checked: m && w,
          disabled: N,
          onChange: e => {
            e && !w ? j(e, L.OverlayToggledClientSettingType.OOP) : j(e, L.OverlayToggledClientSettingType.OOP_GAME)
          }
        }), (0, r.jsx)("div", {
          className: eb.emptySpacer
        })]
      })
    }), (0, r.jsx)(eM, {
      title: eE.intl.string(eE.t.BfFpW1),
      description: eE.intl.string(eE.t.OzInYk),
      hint: R ? true : eE.intl.string(eE.t["3sYHXm"]),
      "aria-label": eE.intl.string(eE.t.BfFpW1),
      action: (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(g.rsf, {
          checked: y && R,
          disabled: A,
          onChange: e => {
            e && !R ? j(e, L.OverlayToggledClientSettingType.LEGACY) : j(e, L.OverlayToggledClientSettingType.LEGACY_GAME)
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
  } = e, a = i.useMemo(() => null == t ? null : "pid" in t ? t.pid : null, [t]), o = (0, p.e7)([C.Z], () => null != n ? n : C.Z.getApplication(null == t ? true : t.id), [n, t]);
  return (0, r.jsx)(D.Z, {
    game: o,
    pid: a,
    size: D.A.SMALL
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
  } = e, u = (0, p.cj)([P.ZP, et.Z, er.Z], () => (0, P.FZ)(t, P.ZP, et.Z, er.Z)), d = (0, p.cj)([et.Z, er.Z], () => (0, P.b6)(t, false, [et.Z, er.Z]), [t]), f = o(d), [_, m] = i.useState(f);
  i.useEffect(() => {
    m(f)
  }, [f]);
  let h = e => {
    let n = !e && _;
    if (m(e), s(e, u, d), n) {
      var r, i;
      (0, V.l)(l, null != (i = null != (r = u.id) ? r : null == t ? true : t.id) ? i : null)
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
      children: [(0, r.jsx)(g.rsf, {
        checked: _,
        disabled: a,
        onChange: e => h(e)
      }), (0, r.jsx)("div", {
        className: eb.emptySpacer
      })]
    })
  })
}

function eV() {
  let [e, t] = Chunk473749.useState(false), {
    legacyEnabled: n,
    oopEnabled: a
  } = (0, Chunk442837.cj)([Chunk371651.default], () => Chunk371651.default.getGlobalEnabledStatus()), o = (0, Chunk442837.Wu)([Chunk594190.ZP], () => Chunk594190.ZP.getGamesSeen(true)).filter(e => !(0, q.le)(e)), s = (0, Chunk835473.Z)(o.map(e => e.id)), l = !(0, Chunk145597.supportsLegacy)(), c = e => {
    var t, r;
    O.Z.setEnabled(e, a);
    let i = null != (r = null == (t = P.ZP.getCurrentGameForAnalytics()) ? true : t.id) ? r : null;
    (0, L.ou)(e, L.OverlayToggledClientSettingType.LEGACY, i), !e && n && (0, V.l)(L.OverlayToggledClientSettingType.LEGACY, i)
  }, u = (e, t, n) => {
    let {
      enabledOOP: r
    } = n;
    E.Z.toggleOverlay(t, e, r)
  }, d = Chunk473749.useMemo(() => (0, Chunk145597.supportsLegacy)() ? l ? Chunk388032.intl.string(Chunk388032.t.r9jEVw) : Chunk388032.intl.string(Chunk388032.t.OzInYk) : Chunk388032.intl.string(Chunk388032.t["8Ox6/E"]), [l]);
  return 0 === o.length ? (0, Chunk54381.jsx)(eM, {
    title: Chunk388032.intl.string(Chunk388032.t.BfFpW1),
    description: Chunk392711,
    "aria-label": Chunk388032.intl.string(Chunk388032.t.BfFpW1),
    className: Chunk677677.standaloneContainer,
    action: (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
      children: [(0, Chunk54381.jsx)(Chunk481060.rsf, {
        checked: require,
        disabled: l,
        onChange: e => c(e)
      }), Chunk987650.iP && (0, Chunk54381.jsx)("div", {
        className: Chunk677677.emptySpacer
      })]
    })
  }) : (0, Chunk54381.jsxs)(ek, {
    onExpand: exports,
    className: module ? Chunk677677.expandedContainer : true,
    title: Chunk388032.intl.string(Chunk388032.t.BfFpW1),
    description: Chunk392711,
    "aria-label": Chunk388032.intl.string(Chunk388032.t.BfFpW1),
    action: (0, Chunk54381.jsx)(Chunk481060.P3F, {
      onClick: e => eG(e),
      children: (0, Chunk54381.jsx)(Chunk481060.rsf, {
        checked: require,
        disabled: l,
        onChange: e => c(e)
      })
    }),
    children: [(0, Chunk54381.jsx)("div", {
      className: Chunk677677.subtitleContainer,
      children: (0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "text-xs/semibold",
        color: "text-muted",
        children: Chunk388032.intl.string(Chunk388032.t.FzoWRo)
      })
    }), (0, Chunk54381.jsx)(Chunk481060.zJl, {
      className: Chunk677677.scroller,
      children: o.map((e, t) => (0, r.jsx)(eB, {
        rawGame: e,
        clientSettingType: L.OverlayToggledClientSettingType.LEGACY_GAME,
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
  let [e, t] = Chunk473749.useState(false), {
    oopEnabled: n,
    legacyEnabled: a
  } = (0, Chunk442837.cj)([Chunk371651.default], () => Chunk371651.default.getGlobalEnabledStatus()), o = !(0, Chunk145597.supportsOutOfProcess)(), s = (0, Chunk442837.Wu)([Chunk594190.ZP], () => Chunk594190.ZP.getGamesSeen(true)).filter(e => !(0, q.le)(e)), l = (0, Chunk835473.Z)(Chunk348327.map(e => e.id)), c = e => {
    var t, r;
    let i = !e && n;
    O.Z.setEnabled(a, e);
    let o = null != (r = null == (t = P.ZP.getCurrentGameForAnalytics()) ? true : t.id) ? r : null;
    (0, L.ou)(e, L.OverlayToggledClientSettingType.OOP, o), i && (0, V.l)(L.OverlayToggledClientSettingType.OOP, o)
  }, u = (e, t, n) => {
    let {
      enabledLegacy: r
    } = n;
    E.Z.toggleOverlay(t, e, r)
  }, d = Chunk473749.useMemo(() => Chunk987650.iP ? o ? Chunk388032.intl.string(Chunk388032.t.C7bLTQ) : Chunk388032.intl.string(Chunk388032.t.ndgADE) : Chunk388032.intl.string(Chunk388032.t.m7X4az), [o]);
  return 0 === Chunk348327.length ? (0, Chunk54381.jsx)(eM, {
    title: Chunk388032.intl.string(Chunk388032.t["7BlVIs"]),
    description: Chunk392711,
    "aria-label": Chunk388032.intl.string(Chunk388032.t["7BlVIs"]),
    className: Chunk677677.standaloneContainer,
    action: (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
      children: [(0, Chunk54381.jsx)(Chunk481060.rsf, {
        checked: require,
        disabled: o,
        onChange: e => c(e)
      }), Chunk987650.iP && (0, Chunk54381.jsx)("div", {
        className: Chunk677677.emptySpacer
      })]
    })
  }) : (0, Chunk54381.jsxs)(ek, {
    onExpand: exports,
    className: module ? Chunk677677.expandedContainer : true,
    title: Chunk388032.intl.string(Chunk388032.t["7BlVIs"]),
    description: Chunk392711,
    "aria-label": Chunk388032.intl.string(Chunk388032.t["7BlVIs"]),
    action: (0, Chunk54381.jsx)(Chunk481060.P3F, {
      onClick: e => eG(e),
      children: (0, Chunk54381.jsx)(Chunk481060.rsf, {
        checked: require,
        disabled: o,
        onChange: e => c(e)
      })
    }),
    children: [(0, Chunk54381.jsx)("div", {
      className: Chunk677677.subtitleContainer,
      children: (0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "text-xs/semibold",
        color: "text-muted",
        children: Chunk388032.intl.string(Chunk388032.t.FzoWRo)
      })
    }), (0, Chunk54381.jsx)(Chunk481060.zJl, {
      className: Chunk677677.scroller,
      children: Chunk348327.map((e, t) => (0, r.jsx)(eB, {
        rawGame: e,
        clientSettingType: L.OverlayToggledClientSettingType.OOP_GAME,
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
  return (0, Chunk32300.T_)(Chunk100527.Z.USER_SETTINGS) ? (0, Chunk54381.jsx)(eM, {
    title: Chunk388032.intl.string(Chunk388032.t["z4/l+V"]),
    description: Chunk388032.intl.string(Chunk388032.t["3aZq/0"]),
    action: (0, Chunk54381.jsx)(Chunk481060.Button, {
      variant: "primary",
      text: Chunk388032.intl.string(Chunk388032.t.s2nVhG),
      onClick: () => {
        (0, Chunk398269.N)(Chunk100527.Z.USER_SETTINGS, Chunk981631.IlC.APP)
      }
    }),
    "aria-label": Chunk388032.intl.string(Chunk388032.t["z4/l+V"])
  }) : null
}

function eW() {
  var e;
  let t = (0, Chunk442837.e7)([Chunk556296.ZP], () => Chunk556296.ZP.getOverlayKeybind()),
    n = !(0, Chunk145597.supportsLegacy)(),
    i = !(0, Chunk145597.supportsOutOfProcess)(),
    [a, o] = (0, Chunk442837.Wu)([Chunk594190.ZP], () => [Chunk594190.ZP.canShowAdminWarning, Chunk594190.ZP.getVisibleGame()], []),
    s = (0, Chunk865066.hi)(),
    l = null != o && o.elevated && Chunk120356 && !Chunk348327,
    c = !(0, Chunk556296.I1)(null != (e = null == exports ? true : exports.shortcut) ? module : []);

  function d(e) {
    u()(null != t, "Keybind should never be undefined"), b.Z.setKeybind(eT(eS({}, t), {
      shortcut: e
    }))
  }
  return (0, Chunk54381.jsx)("div", {
    className: Chunk677677.keybindMainContainer,
    children: (0, Chunk54381.jsxs)("div", {
      className: Chunk677677.keybindContainer,
      children: [(0, Chunk54381.jsxs)("div", {
        className: Chunk677677.keybindHeaderContainer,
        children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
          variant: "text-md/semibold",
          color: "text-strong",
          children: Chunk388032.intl.string(Chunk388032.t.VsAZcC)
        }), l && (0, Chunk54381.jsx)(Chunk481060.Text, {
          variant: "text-xs/normal",
          color: "text-feedback-warning",
          className: Chunk677677.keybindAdminWarning,
          children: Chunk388032.intl.string(Chunk388032.t.NsowVa)
        }), Chunk512722 && (0, Chunk54381.jsx)(Chunk481060.Text, {
          variant: "text-xs/normal",
          color: "text-feedback-warning",
          className: Chunk677677.keybindAdminWarning,
          children: Chunk388032.intl.string(Chunk388032.t["UNoTw/"])
        })]
      }), (0, Chunk54381.jsx)("div", {
        className: Chunk677677.keybindRecorderContainer,
        children: (0, Chunk54381.jsx)(Chunk825209.Z, {
          disabled: require && Chunk473749,
          defaultValue: null != exports ? exports.shortcut : [],
          onChange: Chunk392711
        })
      })]
    })
  })
}
let eK = e => [{
  title: eE.t.eVE4LX,
  description: eE.t["72WNqk"],
  disabledSetting: j.i.TEXT_CHAT
}, {
  title: eE.t.oifnSh,
  description: eE.t.bgU5r0,
  disabledSetting: j.i.WELCOME_GENERAL
}, {
  title: eE.t.hqsZJW,
  description: eE.t.kHjdqc,
  disabledSetting: j.i.GO_LIVE_NUDGE
}, {
  title: eE.t.sop3rn,
  description: eE.t.pjgffc,
  disabledSetting: j.i.GAME_ACTIVITY
}, {
  title: eE.t["2QVhbb"],
  description: eE.t.wQ4ilB,
  disabledSetting: j.i.NOW_PLAYING
}, e && {
  title: eE.t["5/21FT"],
  description: eE.t.EIzwfA,
  disabledSetting: j.i.FRIEND_STREAM_WATCH_NUDGE
}].filter(e => false !== e).filter(Boolean);

function ez() {
  let {
    enabled: e
  } = (0, Chunk32300.aq)("OverlayV3StreamWatchNudge"), t = eK(module), n = e => t => {
    O.Z.setNotificationDisabledSetting(e, !t)
  }, i = (0, Chunk442837.e7)([Chunk624864.Z], () => Chunk624864.Z.getDisabledNotifications());
  return (0, Chunk54381.jsxs)("div", {
    className: Chunk677677.notificationSettingsContainer,
    children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
      variant: "heading-md/semibold",
      color: "text-strong",
      children: Chunk388032.intl.string(Chunk388032.t.xOE5bA)
    }), exports.map(e => (0, r.jsxs)("div", {
      className: eb.notificationItem,
      children: [(0, r.jsxs)("div", {
        className: eb.notificationDescriptionContainer,
        children: [(0, r.jsx)(g.Text, {
          variant: "text-sm/semibold",
          color: "text-strong",
          children: eE.intl.string(e.title)
        }), (0, r.jsx)(g.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: eE.intl.string(e.description)
        })]
      }), (0, r.jsx)(g.rsf, {
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
    voiceState: new ee.Z({
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
    user: new $.Z({
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
  return (0, Chunk131704.createChannelRecord)({
    id: "123",
    name: "Test Channel",
    type: Chunk981631.d4z.GUILD_VOICE,
    guild_id: "456"
  })
}

function eJ() {
  var e, t;
  let {
    avatarSizeMode: n,
    displayNameMode: a,
    displayUserMode: s
  } = (0, Chunk442837.cj)([Chunk237997.default], () => ({
    avatarSizeMode: Chunk237997.default.getAvatarSizeMode(),
    displayNameMode: Chunk237997.default.getDisplayNameMode(),
    displayUserMode: Chunk237997.default.getDisplayUserMode()
  })), l = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser()), [c] = Chunk473749.useState(() => [eQ(Chunk388032.intl.string(Chunk388032.t.C0ZDvo), true, false), eQ(Chunk388032.intl.string(Chunk388032.t.iOtj8E), false, false, true), eQ(Chunk388032.intl.string(Chunk388032.t["0oqNgL"]), false, true)]), u = (0, Chunk442837.e7)([Chunk610394.Z, Chunk355863.Z], () => {
    let e = Chunk610394.Z.getWidgetByType(Chunk981631.Odu.VOICE_V3);
    if (null == module) return null;
    let t = Chunk355863.Z.getWidget(module.id);
    return null != exports && (0, Chunk340101.Aw)(exports) ? exports : null
  }), d = null != (t = null == u || null == (e = u.meta) ? true : module.voiceStatesMaxShown) ? exports : Chunk501787.At, f = [null != l ? eq(l) : null, ...Chunk512722].filter(Chunk823379.lm), _ = [new Map(f.map(e => [e.user.id, e])), f.map(e => e.user.id)];

  function h(e) {
    null != u && (e < ew ? (0, y.zG)(u.id, {
      voiceStatesMaxShown: eg.Og
    }) : (0, y.zG)(u.id, {
      voiceStatesMaxShown: Math.floor(e)
    }))
  }
  let E = Chunk981631.BRd.MIDNIGHT;
  return (0, Chunk54381.jsxs)("div", {
    className: Chunk677677.voiceSettingsContainer,
    children: [(0, Chunk54381.jsx)(Chunk199849.y6, {
      label: Chunk388032.intl.string(Chunk388032.t.dnvZSg),
      options: [{
        label: Chunk388032.intl.string(Chunk388032.t.YcOxtr),
        value: Chunk981631.ipw.LARGE
      }, {
        label: Chunk388032.intl.string(Chunk388032.t.BKIKqx),
        value: Chunk981631.ipw.SMALL
      }],
      className: Chunk677677.select,
      onChange: e => O.Z.setAvatarSizeMode(e),
      value: require
    }), (0, Chunk54381.jsx)(Chunk199849.y6, {
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
      className: Chunk677677.select,
      onChange: e => O.Z.setDisplayNameMode(e),
      value: Chunk120356
    }), (0, Chunk54381.jsx)(Chunk481060.f6W, {
      theme: Chunk224706,
      children: e => {
        var t, i;
        return (0, r.jsxs)("div", {
          className: o()(eb.widgetContainer, e),
          children: [(0, r.jsx)("div", {
            className: eb.voiceWidgetContainer,
            children: (0, r.jsx)(K.kI, {
              id: "voice-widget",
              title: eE.intl.string(eE.t.KNJ6Vq),
              channel: eX(),
              overlayVoiceStates: _,
              displayNameMode: a,
              displayUserMode: s,
              avatarSizeMode: n,
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
              maxDisplayedVoiceStates: d
            })
          }), (0, r.jsxs)("div", {
            className: eb.widgetHeaderContainer,
            children: [(0, r.jsx)(z.PI, {
              children: eE.intl.string(eE.t.KNJ6Vq)
            }), (0, r.jsx)(z.ls, {}), (0, r.jsx)(z.RT, {
              id: null != (t = null == u ? true : u.id) ? t : "voice-widget",
              pinned: null != (i = null == u ? true : u.pinned) && i
            })]
          })]
        })
      }
    }), (0, Chunk54381.jsx)(Chunk199849.y6, {
      label: Chunk388032.intl.string(Chunk388032.t.swsWWC),
      options: [{
        label: Chunk388032.intl.string(Chunk388032.t.nBmDrT),
        value: Chunk981631.OYC.ALWAYS
      }, {
        label: Chunk388032.intl.string(Chunk388032.t["2OvIZY"]),
        value: Chunk981631.OYC.ONLY_WHILE_SPEAKING
      }],
      className: Chunk677677.select,
      onChange: e => O.Z.setDisplayUserMode(e),
      value: Chunk348327
    }), (0, Chunk54381.jsx)("div", {
      className: Chunk677677.sliderContainer,
      children: (0, Chunk54381.jsx)(Chunk481060.iRW, {
        label: Chunk388032.intl.string(Chunk388032.t["X/Uyzc"]),
        initialValue: Chunk392711,
        onValueRender: e => e < ew ? eE.intl.string(eE.t.nrUzFL) : "".concat(Math.floor(e)),
        minValue: ew - 1,
        maxValue: eD,
        onValueChange: Chunk28664,
        markers: ex,
        barStyles: {
          background: Chunk481060.TVs.colors.BACKGROUND_MOD_STRONG.css
        },
        fillStyles: {
          background: Chunk481060.TVs.colors.BACKGROUND_BRAND.css
        },
        onMarkerRender: e => e < ew ? eE.intl.string(eE.t.nrUzFL) : "".concat(Math.floor(e))
      })
    })]
  })
}

function e$() {
  let [e, t] = (0, Chunk243778.US)([Chunk704215.z.OVERLAY_OOP_SETTINGS_NUX], true, true), n = () => {
    exports(Chunk921944.L.DISMISS)
  };
  return ((0, Chunk493773.ZP)(() => () => {
    exports(Chunk921944.L.AUTO_DISMISS)
  }), module !== Chunk704215.z.OVERLAY_OOP_SETTINGS_NUX) ? null : (0, Chunk54381.jsxs)("div", {
    className: Chunk677677.overlaySettingsNux,
    children: [(0, Chunk54381.jsx)("div", {
      children: (0, Chunk54381.jsx)("img", {
        src: Chunk704437.Z,
        alt: Chunk388032.intl.string(Chunk388032.t.mdXZh1),
        className: Chunk677677.nuxFirstImage
      })
    }), (0, Chunk54381.jsx)("div", {
      children: (0, Chunk54381.jsxs)("div", {
        className: Chunk677677.mainTitleContainer,
        children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
          variant: "heading-xl/medium",
          color: "text-strong",
          children: Chunk388032.intl.string(Chunk388032.t.jzjJQg)
        }), (0, Chunk54381.jsx)(Chunk481060.Text, {
          variant: "text-md/normal",
          color: "text-muted",
          children: Chunk388032.intl.string(Chunk388032.t["5dOfxb"])
        })]
      })
    }), (0, Chunk54381.jsx)("div", {
      children: (0, Chunk54381.jsx)("img", {
        src: Chunk494139.Z,
        alt: Chunk388032.intl.string(Chunk388032.t.mdXZh1),
        className: Chunk677677.nuxUserSettingsImage
      })
    }), (0, Chunk54381.jsx)("div", {
      "data-button-hoisted-classname-wrapper": true,
      className: Chunk677677.closeCircleButton,
      children: (0, Chunk54381.jsx)(Chunk481060.Button, {
        variant: "primary",
        text: Chunk388032.intl.string(Chunk388032.t.Q26diF),
        onClick: () => require()
      })
    }), (0, Chunk54381.jsx)("div", {
      className: Chunk677677.nuxDivider
    })]
  })
}

function e0(e) {
  let {
    runningGame: t,
    runningGameApplication: n
  } = e, a = null == n ? true : n.id, o = (0, p.e7)([F.Z], () => F.Z.isLimitedInteractionOverrideEnabled(a), [a]), s = i.useMemo(() => null != t && (0, Z.H8)(t.pid), [t]), l = (0, U.Z)({
    location: "overlay_user_settings"
  }), {
    disableClickableRegions: c,
    shouldShowKeybindIndicators: u
  } = (0, p.cj)([es.default], () => ({
    disableClickableRegions: es.default.disableClickableRegions,
    shouldShowKeybindIndicators: es.default.showKeybindIndicators
  }));

  function d() {
    O.Z.setDisableClickableRegions(!c)
  }

  function f(e) {
    null != n && (0, H.rI)(n.id, e)
  }
  return (0, r.jsxs)("div", {
    className: eb.overlayEnabledSettingsContainer,
    children: [(0, r.jsx)(eW, {}), l && (0, r.jsx)(g.rsf, {
      label: eE.intl.string(eE.t.XZTl9r),
      checked: u,
      onChange: e => O.Z.setShowKeybindIndicators(e)
    }), null != a && (0, r.jsxs)("div", {
      children: [(0, r.jsxs)("div", {
        className: eb.limitedInteractionOverrideContainer,
        children: [(0, r.jsx)(g.Text, {
          variant: "text-md/semibold",
          color: "text-strong",
          children: eE.intl.string(eE.t.wgVQND)
        }), (0, r.jsx)(g.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: eE.intl.string(eE.t["5SsyF5"])
        })]
      }), (0, r.jsx)(g.rsf, {
        checked: o || s,
        disabled: s,
        onChange: e => f(e)
      })]
    }), (0, r.jsxs)("div", {
      children: [(0, r.jsxs)("div", {
        className: eb.limitedInteractionOverrideContainer,
        children: [(0, r.jsx)(g.Text, {
          variant: "text-md/semibold",
          color: "text-strong",
          children: eE.intl.string(eE.t["+eFXxq"])
        }), (0, r.jsx)(g.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: eE.intl.string(eE.t.kivMAp)
        })]
      }), (0, r.jsx)(g.rsf, {
        checked: !c,
        onChange: d
      })]
    })]
  })
}

function e1(e) {
  let {
    className: t,
    showHeader: n
  } = e, {
    runningGame: i,
    runningGameApplication: a
  } = (0, R.Z)(), o = true, s = (0, p.e7)([ei.default], () => ei.default.getCurrentUser());
  return ((0, I.ZP)(() => {
    if (eu.isPlatformEmbedded) return (0, w.Ky)(), w.P7
  }), eL(), null == s) ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(ep.Z, {
      title: eE.intl.string(eE.t["9cb1Uz"]),
      children: [o ? (0, r.jsx)(e$, {}) : null, (0, r.jsxs)("div", {
        className: eb.overlayEnabledSettingsContainer,
        children: [(0, r.jsx)(eZ, {
          runningGame: i,
          runningGameApplication: a
        }), (0, r.jsx)(eH, {}), (0, r.jsx)(eV, {}), (0, r.jsx)(eY, {})]
      }), (0, r.jsx)("div", {
        className: eb.settingsDivider
      })]
    }), (0, r.jsxs)("div", {
      children: [(0, r.jsx)(e0, {
        runningGame: i,
        runningGameApplication: a
      }), (0, r.jsx)("div", {
        className: eb.settingsDivider
      })]
    }), (0, r.jsxs)(g.gNt, {
      label: eE.intl.string(eE.t.r1TZfh),
      children: [(0, r.jsx)(eJ, {}), (0, r.jsx)("div", {
        className: eb.settingsDivider
      })]
    }), (0, r.jsx)(ez, {})]
  })
}