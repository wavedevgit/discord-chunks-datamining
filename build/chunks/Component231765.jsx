/** Chunk was on 20501 **/
/** chunk id: 231765, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => z
}), require("./953529.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk392711 = require("./392711.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk37234 = require("./37234.js"),
  Chunk607070 = require("./607070.js"),
  Chunk578361 = require("./578361.jsx"),
  Chunk460181 = require("./460181.js"),
  Chunk585483 = require("./585483.js"),
  Chunk57562 = require("./57562.jsx"),
  Chunk955204 = require("./955204.js"),
  Chunk64078 = require("./64078.js"),
  Chunk351780 = require("./351780.js"),
  Chunk954794 = require("./954794.jsx"),
  Chunk112843 = require("./112843.js"),
  Chunk524484 = require("./524484.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk899955 = require("./899955.js");

function v(e) {
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

function S(e, t) {
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
let T = {
    enabled: true,
    combosEnabled: true,
    screenshakeEnabled: false,
    confettiEnabled: false
  },
  I = (0, Chunk392711.range)(0, 11),
  N = (0, Chunk392711.range)(0, 2.25, .25),
  y = (0, Chunk392711.range)(1, 11),
  A = (0, Chunk392711.range)(1, 26),
  P = () => [{
    location: Chunk524484.Hn.CHAT_INPUT,
    title: Chunk388032.intl.string(Chunk388032.t.elTty8),
    description: Chunk388032.intl.string(Chunk388032.t.HtKfMj)
  }, {
    location: Chunk524484.Hn.REACTION,
    title: Chunk388032.intl.string(Chunk388032.t.Ik4VIS),
    description: Chunk388032.intl.string(Chunk388032.t.y4rqKy)
  }, {
    location: Chunk524484.Hn.MEMBER_USER,
    title: Chunk388032.intl.string(Chunk388032.t.ZXBlAg),
    description: Chunk388032.intl.string(Chunk388032.t["m9RD+f"])
  }, {
    location: Chunk524484.Hn.CALL_TILE,
    title: Chunk388032.intl.string(Chunk388032.t.V66giY),
    description: Chunk388032.intl.string(Chunk388032.t.fiHV7u)
  }],
  R = () => [{
    location: Chunk524484.oZ.CHAT_INPUT,
    title: Chunk388032.intl.string(Chunk388032.t.vUcvPD),
    description: Chunk388032.intl.string(Chunk388032.t.y00OrK)
  }, {
    location: Chunk524484.oZ.VOICE_USER,
    title: Chunk388032.intl.string(Chunk388032.t["TcRO5+"]),
    description: Chunk388032.intl.string(Chunk388032.t.YJCxVV)
  }, {
    location: Chunk524484.oZ.MENTION,
    title: Chunk388032.intl.string(Chunk388032.t.oW4shI),
    description: Chunk388032.intl.string(Chunk388032.t["mqfw/P"])
  }];

function D(e) {
  let {
    disabled: t,
    locations: n,
    settingsLocations: r,
    onChange: s
  } = e, a = n.map(e => (0, i.jsx)(o.j7V, {
    disabled: t,
    value: r[e.location],
    note: e.description,
    onChange: t => s(S(v({}, r), {
      [e.location]: t
    })),
    children: e.title
  }, e.location));
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(o.vwX, {
      children: C.intl.string(C.t.bWVN1N)
    }), a]
  })
}

function Z(e) {
  let {
    children: t
  } = e;
  return (0, i.jsx)(o.Text, {
    className: O.sliderDescription,
    variant: "text-sm/normal",
    color: "header-secondary",
    children: t
  })
}

function w(e) {
  let {
    settings: {
      enabled: t,
      warningSeen: n
    },
    updateSettings: r
  } = e, s = (0, a.e7)([d.Z], () => d.Z.useReducedMotion);
  return (0, i.jsx)(o.j7V, {
    value: t,
    note: C.intl.string(C.t.KuYbWF),
    onChange: e => {
      e || (0, g.T)(h.hn.DISABLE_POGGERMODE), e && (!n || s) ? (0, o.h7j)(e => (0, i.jsx)(o.ConfirmModal, S(v({
        header: s ? C.intl.string(C.t["FxT+p6"]) : C.intl.string(C.t.TAZ4Fx),
        confirmText: C.intl.string(C.t.JFfinp),
        cancelText: C.intl.string(C.t["ETE/oK"]),
        onConfirm: () => r(s ? T : {
          enabled: true,
          warningSeen: true
        })
      }, e), {
        children: (0, i.jsx)(o.Text, {
          variant: "text-md/normal",
          children: s ? C.intl.string(C.t.gmixr6) : C.intl.string(C.t.jN3t3N)
        })
      }))) : r({
        enabled: e
      })
    },
    children: C.intl.string(C.t.vuiXm5)
  })
}

function k(e) {
  let {
    settings: {
      enabled: t,
      confettiEnabled: n,
      confettiCount: r,
      confettiSize: s,
      confettiEnabledLocations: a
    },
    updateSettings: l
  } = e, c = !t || !n;
  return (0, i.jsxs)(o.hjN, {
    tag: o.RB0.H1,
    title: C.intl.string(C.t.mqxwJC),
    children: [(0, i.jsx)(o.j7V, {
      disabled: !t,
      value: n,
      note: C.intl.string(C.t.O1Vflp),
      onChange: e => l({
        confettiEnabled: e
      }, 0),
      children: C.intl.string(C.t.s0KCgI)
    }), (0, i.jsxs)(o.xJW, {
      disabled: c,
      title: C.intl.string(C.t["vd0D8/"]),
      className: O.formItem,
      children: [(0, i.jsx)(Z, {
        children: C.intl.string(C.t.a18Sur)
      }), (0, i.jsx)(o.iRW, {
        disabled: c,
        markers: y,
        stickToMarkers: true,
        minValue: y[0],
        maxValue: y[y.length - 1],
        initialValue: r,
        onValueChange: e => l({
          confettiCount: e
        }, 0),
        onValueRender: e => "".concat(e)
      })]
    }), (0, i.jsxs)(o.xJW, {
      disabled: c,
      title: C.intl.string(C.t.sPO3io),
      className: O.formItem,
      children: [(0, i.jsx)(Z, {
        children: C.intl.string(C.t.xoldVl)
      }), (0, i.jsx)(o.iRW, {
        disabled: c,
        markers: A,
        stickToMarkers: true,
        minValue: A[0],
        maxValue: A[A.length - 1],
        initialValue: s,
        onValueChange: e => l({
          confettiSize: e
        }, 0),
        onValueRender: e => "".concat(e)
      })]
    }), (0, i.jsx)(D, {
      disabled: c,
      locations: P(),
      settingsLocations: a,
      onChange: e => l({
        confettiEnabledLocations: e
      }, 0)
    })]
  })
}

function L(e) {
  let {
    settings: {
      enabled: t,
      combosEnabled: n,
      comboSoundsEnabled: r,
      combosRequiredCount: s
    },
    updateSettings: a
  } = e, l = !t || !n;
  return (0, i.jsxs)(o.hjN, {
    tag: o.RB0.H1,
    title: C.intl.string(C.t.Xz0olZ),
    children: [(0, i.jsx)(o.j7V, {
      disabled: !t,
      value: n,
      note: C.intl.string(C.t["31Z8ER"]),
      onChange: e => a({
        combosEnabled: e
      }),
      children: C.intl.string(C.t.o3iV7O)
    }), (0, i.jsx)(o.j7V, {
      disabled: !t,
      value: r,
      note: C.intl.string(C.t["9rgQEh"]),
      onChange: e => a({
        comboSoundsEnabled: e
      }),
      children: C.intl.string(C.t["Ax+Ioa"])
    }), (0, i.jsxs)(o.xJW, {
      disabled: l,
      title: C.intl.string(C.t.L0oQur),
      className: O.formItem,
      children: [(0, i.jsx)(Z, {
        children: C.intl.string(C.t["/OOFpK"])
      }), (0, i.jsx)(o.iRW, {
        disabled: l,
        markers: I,
        stickToMarkers: true,
        minValue: I[0],
        maxValue: I[I.length - 1],
        initialValue: s,
        onValueChange: e => a({
          combosRequiredCount: e
        }),
        onValueRender: e => "".concat(e)
      })]
    }), (0, i.jsx)(o.$i$, {
      className: O.divider
    })]
  })
}

function M(e) {
  let {
    settings: {
      enabled: t,
      screenshakeEnabled: n,
      shakeIntensity: r,
      screenshakeEnabledLocations: s
    },
    updateSettings: l
  } = e, c = (0, a.e7)([d.Z], () => d.Z.useReducedMotion), u = !t || !n || c, m = (e, t) => {
    null != e.shakeIntensity && e.shakeIntensity > r && (0, g.T)(h.hn.MORE), l(e, t)
  };
  return (0, i.jsxs)(o.hjN, {
    tag: o.RB0.H1,
    title: C.intl.string(C.t.wVS5SU),
    children: [(0, i.jsx)(o.j7V, {
      disabled: !t || c,
      tooltipNote: c ? C.intl.string(C.t.GckHGx) : null,
      value: n && !c,
      note: C.intl.string(C.t.Qq5W3t),
      onChange: e => l({
        screenshakeEnabled: e
      }, 1),
      children: C.intl.string(C.t.N004zM)
    }), (0, i.jsxs)(o.xJW, {
      disabled: u,
      title: C.intl.string(C.t.UxnnCw),
      className: O.formItem,
      children: [(0, i.jsx)(Z, {
        children: C.intl.string(C.t.CEOEOT)
      }), (0, i.jsx)(o.iRW, {
        disabled: u,
        markers: N,
        equidistant: true,
        stickToMarkers: true,
        minValue: N[0],
        maxValue: N[N.length - 1],
        initialValue: r,
        onValueChange: e => m({
          shakeIntensity: e
        }, 1),
        onMarkerRender: e => e === N[N.length - 1] ? C.intl.string(C.t["4rbMWV"]) : "".concat(100 * e, "%")
      })]
    }), (0, i.jsx)(D, {
      disabled: u,
      locations: R(),
      settingsLocations: s,
      onChange: e => l({
        screenshakeEnabledLocations: e
      }, 1)
    })]
  })
}

function B(e) {
  let {
    updateSettings: t
  } = e;
  return (0, i.jsx)(o.hjN, {
    tag: o.RB0.H1,
    title: C.intl.string(C.t.EuXv2t),
    children: (0, i.jsxs)(o.xJW, {
      className: O.formItem,
      children: [(0, i.jsx)(o.R94, {
        className: O.formItem,
        children: C.intl.string(C.t["1SLnkp"])
      }), (0, i.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: O.hideButton,
        children: (0, i.jsx)(o.zxk, {
          variant: "primary",
          size: "sm",
          text: C.intl.string(C.t.qz65yc),
          onClick: () => {
            t({
              enabled: false,
              settingsVisible: false
            }), (0, c.xf)()
          }
        })
      })]
    })
  })
}

function U(e) {
  let {
    onChangePage: t
  } = e;
  return (0, i.jsxs)(o.hjN, {
    children: [(0, i.jsxs)(o.P3F, {
      onClick: () => t(1),
      className: O.achievementContainer,
      children: [(0, i.jsx)("div", {
        className: O.achievementIconContainer,
        children: (0, i.jsx)(o.rm8, {
          size: "md",
          color: l.Z.unsafe_rawColors.ORANGE_345.css
        })
      }), (0, i.jsxs)("div", {
        className: O.achievementTextContainer,
        children: [(0, i.jsx)(o.X6q, {
          variant: "heading-md/semibold",
          color: "header-primary",
          children: C.intl.string(C.t["6jI0hY"])
        }), (0, i.jsx)(o.Text, {
          variant: "text-md/normal",
          color: "header-secondary",
          children: C.intl.string(C.t.GuUItb)
        })]
      }), (0, i.jsx)(o.Fbu, {
        size: "custom",
        color: "currentColor",
        width: 16,
        className: O.rightCaretIcon
      })]
    }), (0, i.jsx)(o.$i$, {
      className: O.divider
    })]
  })
}
let V = () => require.e("68170").then(require.t.bind(require, 205663, 19)).then(e => {
  let {
    default: t
  } = e;
  return t
});

function G(e) {
  let {
    onChangePage: t,
    setShowEnableAnimation: n
  } = e, s = (0, a.cj)([b.Z], () => b.Z.getState()), [l, c] = r.useState({
    x: 0,
    y: 0
  }), d = (0, _.Z)();

  function u(e, t, n, i) {
    return (null != t ? t : e) && (null != i ? i : n)
  }
  let g = e => {
      if (e.enabled && false === s.enabled) {
        var t;
        n(true), (0, m.GN)("poggermode_enabled"), p.S.dispatch(E.CkL.SHAKE_APP, {
          duration: 2e3,
          intensity: null != (t = e.shakeIntensity) ? t : s.shakeIntensity
        })
      }
    },
    h = (e, t) => {
      if (g(e), (0, f.AI)(e), null == t) return;
      let n = u(s.confettiEnabled, e.confettiEnabled, s.enabled, e.enabled);
      0 === t && n && d.fire(l.x, l.y, {
        settings: e
      });
      let i = u(s.screenshakeEnabled, e.screenshakeEnabled, s.enabled, e.enabled);
      if (1 === t && i) {
        var r;
        p.S.dispatch(E.CkL.SHAKE_APP, {
          duration: 1e3,
          intensity: null != (r = e.shakeIntensity) ? r : s.shakeIntensity
        })
      }
    },
    x = e => {
      c({
        x: e.clientX,
        y: e.clientY
      })
    };
  return r.useEffect(() => (window.addEventListener("mousemove", x), () => window.removeEventListener("mousemove", x)), []), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(o.X6q, {
      variant: "heading-lg/semibold",
      className: O.title,
      children: C.intl.string(C.t.AtCukJ)
    }), (0, i.jsx)(w, {
      settings: s,
      updateSettings: h
    }), (0, i.jsx)(U, {
      onChangePage: t
    }), (0, i.jsx)(L, {
      settings: s,
      updateSettings: h
    }), (0, i.jsx)(M, {
      settings: s,
      updateSettings: h
    }), (0, i.jsx)(k, {
      settings: s,
      updateSettings: h
    }), (0, i.jsx)(B, {
      updateSettings: h
    })]
  })
}
let F = (e, t, n) => {
    let r = e => () => {
      t(e)
    };
    switch (e) {
      case 0:
        return (0, i.jsx)(G, {
          onChangePage: r(1),
          setShowEnableAnimation: n
        });
      case 1:
        return (0, i.jsx)(x.Z, {
          onBackClick: r(0)
        });
      default:
        return null
    }
  },
  H = e => 0 === e ? u.n.LEFT : u.n.RIGHT;

function z() {
  let [e, t] = Chunk73800.useState(0), [n, s] = Chunk73800.useState(H(module)), [l, c] = Chunk73800.useState(false), m = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.useReducedMotion), p = Chunk692547 && !Chunk460181;
  return Chunk73800.useEffect(() => {
    let t = setTimeout(() => {
      Chunk392711(H(module))
    }, 500);
    return () => clearTimeout(exports)
  }, [module]), Chunk73800.useEffect(() => {
    Math.random() > .99 && (0, Chunk57562.T)(Chunk955204.hn.VISITOR_100)
  }, []), (0, Chunk255367.jsxs)(Chunk255367.Fragment, {
    children: [(0, Chunk255367.jsx)(Chunk578361.Z, {
      className: Chunk899955.slideAnimator,
      step: module,
      direction: require,
      children: F(module, exports, Chunk37234)
    }), (0, Chunk255367.jsx)("div", {
      className: Chunk585483 ? Chunk899955.enableAnimationOverlayVisible : Chunk899955.enableAnimationOverlayHidden,
      children: (0, Chunk255367.jsx)(Chunk481060.Fmz, {
        className: Chunk899955.enableAnimation,
        importData: V,
        shouldAnimate: Chunk585483,
        autoplay: false,
        resetOnPlay: true,
        loop: false,
        onComplete: () => Chunk37234(false)
      })
    })]
  })
}