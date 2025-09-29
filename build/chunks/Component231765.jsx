/** Chunk was on web.js **/
/** chunk id: 231765, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => z
}), require("./953529.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk578361 = require("./578361.jsx"),
  Chunk460181 = require("./460181.js"),
  Chunk342386 = require("./342386.js"),
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
  Chunk892879 = require("./892879.js");

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function S(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      T(e, t, n[t])
    })
  }
  return e
}

function A(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function C(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : A(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let N = {
    enabled: true,
    combosEnabled: true,
    screenshakeEnabled: false,
    confettiEnabled: false
  },
  R = (0, Chunk392711.range)(0, 11),
  P = (0, Chunk392711.range)(0, 2.25, .25),
  w = (0, Chunk392711.range)(1, 11),
  D = (0, Chunk392711.range)(1, 26),
  L = () => [{
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
  x = () => [{
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

function j(e) {
  let {
    disabled: t,
    locations: n,
    settingsLocations: i,
    onChange: a
  } = e, o = n.map(e => (0, r.jsx)(l.j7V, {
    disabled: t,
    value: i[e.location],
    note: e.description,
    onChange: t => a(C(S({}, i), {
      [e.location]: t
    })),
    children: e.title
  }, e.location));
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(l.vwX, {
      children: v.intl.string(v.t.bWVN1N)
    }), o]
  })
}

function M(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)(l.Text, {
    className: I.sliderDescription,
    variant: "text-sm/normal",
    color: "header-secondary",
    children: t
  })
}

function k(e) {
  let {
    settings: {
      enabled: t,
      warningSeen: n
    },
    updateSettings: i
  } = e, a = (0, o.e7)([c.Z], () => c.Z.useReducedMotion), s = e => {
    e || (0, p.T)(h.hn.DISABLE_POGGERMODE), e && (!n || a) ? (0, l.h7j)(e => (0, r.jsx)(l.ConfirmModal, C(S({
      header: a ? v.intl.string(v.t["FxT+p6"]) : v.intl.string(v.t.TAZ4Fx),
      confirmText: v.intl.string(v.t.JFfinp),
      cancelText: v.intl.string(v.t["ETE/oK"]),
      onConfirm: () => i(a ? N : {
        enabled: true,
        warningSeen: true
      })
    }, e), {
      children: (0, r.jsx)(l.Text, {
        variant: "text-md/normal",
        children: a ? v.intl.string(v.t.gmixr6) : v.intl.string(v.t.jN3t3N)
      })
    }))) : i({
      enabled: e
    })
  };
  return (0, r.jsx)(l.j7V, {
    value: t,
    note: v.intl.string(v.t.KuYbWF),
    onChange: s,
    children: v.intl.string(v.t.vuiXm5)
  })
}

function U(e) {
  let {
    settings: {
      enabled: t,
      confettiEnabled: n,
      confettiCount: i,
      confettiSize: a,
      confettiEnabledLocations: o
    },
    updateSettings: s
  } = e, c = !t || !n;
  return (0, r.jsxs)(l.hjN, {
    tag: l.RB0.H1,
    title: v.intl.string(v.t.mqxwJC),
    children: [(0, r.jsx)(l.j7V, {
      disabled: !t,
      value: n,
      note: v.intl.string(v.t.O1Vflp),
      onChange: e => s({
        confettiEnabled: e
      }, 0),
      children: v.intl.string(v.t.s0KCgI)
    }), (0, r.jsxs)(l.xJW, {
      disabled: c,
      title: v.intl.string(v.t["vd0D8/"]),
      className: I.formItem,
      children: [(0, r.jsx)(M, {
        children: v.intl.string(v.t.a18Sur)
      }), (0, r.jsx)(l.iRW, {
        disabled: c,
        markers: w,
        stickToMarkers: true,
        minValue: w[0],
        maxValue: w[w.length - 1],
        initialValue: i,
        onValueChange: e => s({
          confettiCount: e
        }, 0),
        onValueRender: e => "".concat(e)
      })]
    }), (0, r.jsxs)(l.xJW, {
      disabled: c,
      title: v.intl.string(v.t.sPO3io),
      className: I.formItem,
      children: [(0, r.jsx)(M, {
        children: v.intl.string(v.t.xoldVl)
      }), (0, r.jsx)(l.iRW, {
        disabled: c,
        markers: D,
        stickToMarkers: true,
        minValue: D[0],
        maxValue: D[D.length - 1],
        initialValue: a,
        onValueChange: e => s({
          confettiSize: e
        }, 0),
        onValueRender: e => "".concat(e)
      })]
    }), (0, r.jsx)(j, {
      disabled: c,
      locations: L(),
      settingsLocations: o,
      onChange: e => s({
        confettiEnabledLocations: e
      }, 0)
    })]
  })
}

function G(e) {
  let {
    settings: {
      enabled: t,
      combosEnabled: n,
      comboSoundsEnabled: i,
      combosRequiredCount: a
    },
    updateSettings: o
  } = e, s = !t || !n;
  return (0, r.jsxs)(l.hjN, {
    tag: l.RB0.H1,
    title: v.intl.string(v.t.Xz0olZ),
    children: [(0, r.jsx)(l.j7V, {
      disabled: !t,
      value: n,
      note: v.intl.string(v.t["31Z8ER"]),
      onChange: e => o({
        combosEnabled: e
      }),
      children: v.intl.string(v.t.o3iV7O)
    }), (0, r.jsx)(l.j7V, {
      disabled: !t,
      value: i,
      note: v.intl.string(v.t["9rgQEh"]),
      onChange: e => o({
        comboSoundsEnabled: e
      }),
      children: v.intl.string(v.t["Ax+Ioa"])
    }), (0, r.jsxs)(l.xJW, {
      disabled: s,
      title: v.intl.string(v.t.L0oQur),
      className: I.formItem,
      children: [(0, r.jsx)(M, {
        children: v.intl.string(v.t["/OOFpK"])
      }), (0, r.jsx)(l.iRW, {
        disabled: s,
        markers: R,
        stickToMarkers: true,
        minValue: R[0],
        maxValue: R[R.length - 1],
        initialValue: a,
        onValueChange: e => o({
          combosRequiredCount: e
        }),
        onValueRender: e => "".concat(e)
      })]
    }), (0, r.jsx)(l.$i$, {
      className: I.divider
    })]
  })
}

function B(e) {
  let {
    settings: {
      enabled: t,
      screenshakeEnabled: n,
      shakeIntensity: i,
      screenshakeEnabledLocations: a
    },
    updateSettings: s
  } = e, u = (0, o.e7)([c.Z], () => c.Z.useReducedMotion), d = !t || !n || u, f = (e, t) => {
    null != e.shakeIntensity && e.shakeIntensity > i && (0, p.T)(h.hn.MORE), s(e, t)
  };
  return (0, r.jsxs)(l.hjN, {
    tag: l.RB0.H1,
    title: v.intl.string(v.t.wVS5SU),
    children: [(0, r.jsx)(l.j7V, {
      disabled: !t || u,
      tooltipNote: u ? v.intl.string(v.t.GckHGx) : null,
      value: n && !u,
      note: v.intl.string(v.t.Qq5W3t),
      onChange: e => s({
        screenshakeEnabled: e
      }, 1),
      children: v.intl.string(v.t.N004zM)
    }), (0, r.jsxs)(l.xJW, {
      disabled: d,
      title: v.intl.string(v.t.UxnnCw),
      className: I.formItem,
      children: [(0, r.jsx)(M, {
        children: v.intl.string(v.t.CEOEOT)
      }), (0, r.jsx)(l.iRW, {
        disabled: d,
        markers: P,
        equidistant: true,
        stickToMarkers: true,
        minValue: P[0],
        maxValue: P[P.length - 1],
        initialValue: i,
        onValueChange: e => f({
          shakeIntensity: e
        }, 1),
        onMarkerRender: e => e === P[P.length - 1] ? v.intl.string(v.t["4rbMWV"]) : "".concat(100 * e, "%")
      })]
    }), (0, r.jsx)(j, {
      disabled: d,
      locations: x(),
      settingsLocations: a,
      onChange: e => s({
        screenshakeEnabledLocations: e
      }, 1)
    })]
  })
}

function Z(e) {
  let {
    updateSettings: t
  } = e, n = () => {
    t({
      enabled: false,
      settingsVisible: false
    }), (0, f.default)()
  };
  return (0, r.jsx)(l.hjN, {
    tag: l.RB0.H1,
    title: v.intl.string(v.t.EuXv2t),
    children: (0, r.jsxs)("div", {
      className: I.formItem,
      children: [(0, r.jsx)(l.R94, {
        className: I.formItem,
        children: v.intl.string(v.t["1SLnkp"])
      }), (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: I.hideButton,
        children: (0, r.jsx)(l.zxk, {
          variant: "primary",
          size: "sm",
          text: v.intl.string(v.t.qz65yc),
          onClick: n
        })
      })]
    })
  })
}

function F(e) {
  let {
    onChangePage: t
  } = e, n = () => t(1);
  return (0, r.jsxs)(l.hjN, {
    children: [(0, r.jsxs)(l.P3F, {
      onClick: n,
      className: I.achievementContainer,
      children: [(0, r.jsx)("div", {
        className: I.achievementIconContainer,
        children: (0, r.jsx)(l.rm8, {
          size: "md",
          color: s.Z.unsafe_rawColors.ORANGE_345.css
        })
      }), (0, r.jsxs)("div", {
        className: I.achievementTextContainer,
        children: [(0, r.jsx)(l.X6q, {
          variant: "heading-md/semibold",
          color: "header-primary",
          children: v.intl.string(v.t["6jI0hY"])
        }), (0, r.jsx)(l.Text, {
          variant: "text-md/normal",
          color: "header-secondary",
          children: v.intl.string(v.t.GuUItb)
        })]
      }), (0, r.jsx)(l.Fbu, {
        size: "custom",
        color: "currentColor",
        width: 16,
        className: I.rightCaretIcon
      })]
    }), (0, r.jsx)(l.$i$, {
      className: I.divider
    })]
  })
}
let V = () => require.e("68170").then(require.t.bind(require, 205663, 19)).then(e => {
  let {
    default: t
  } = e;
  return t
});

function H(e) {
  let {
    onChangePage: t,
    setShowEnableAnimation: n
  } = e, a = (0, o.cj)([g.Z], () => g.Z.getState()), [s, c] = i.useState({
    x: 0,
    y: 0
  }), u = (0, b.Z)();

  function f(e, t, n, r) {
    let i = null != r ? r : n;
    return (null != t ? t : e) && i
  }
  let p = e => {
      if (e.enabled && false === a.enabled) {
        var t;
        n(true), (0, d.GN)("poggermode_enabled"), _.S.dispatch(O.CkL.SHAKE_APP, {
          duration: 2e3,
          intensity: null != (t = e.shakeIntensity) ? t : a.shakeIntensity
        })
      }
    },
    h = (e, t) => {
      if (p(e), (0, m.AI)(e), null == t) return;
      let n = 0 === t,
        r = f(a.confettiEnabled, e.confettiEnabled, a.enabled, e.enabled);
      n && r && u.fire(s.x, s.y, {
        settings: e
      });
      let i = 1 === t,
        o = f(a.screenshakeEnabled, e.screenshakeEnabled, a.enabled, e.enabled);
      if (i && o) {
        var l;
        _.S.dispatch(O.CkL.SHAKE_APP, {
          duration: 1e3,
          intensity: null != (l = e.shakeIntensity) ? l : a.shakeIntensity
        })
      }
    },
    E = e => {
      c({
        x: e.clientX,
        y: e.clientY
      })
    };
  return i.useEffect(() => (window.addEventListener("mousemove", E), () => window.removeEventListener("mousemove", E)), []), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(l.X6q, {
      variant: "heading-lg/semibold",
      className: I.title,
      children: v.intl.string(v.t.AtCukJ)
    }), (0, r.jsx)(k, {
      settings: a,
      updateSettings: h
    }), (0, r.jsx)(F, {
      onChangePage: t
    }), (0, r.jsx)(G, {
      settings: a,
      updateSettings: h
    }), (0, r.jsx)(B, {
      settings: a,
      updateSettings: h
    }), (0, r.jsx)(U, {
      settings: a,
      updateSettings: h
    }), (0, r.jsx)(Z, {
      updateSettings: h
    })]
  })
}
let Y = (e, t, n) => {
    let i = e => () => {
      t(e)
    };
    switch (e) {
      case 0:
        return (0, r.jsx)(H, {
          onChangePage: i(1),
          setShowEnableAnimation: n
        });
      case 1:
        return (0, r.jsx)(E.Z, {
          onBackClick: i(0)
        });
      default:
        return null
    }
  },
  W = 500,
  K = e => 0 === e ? u.n.LEFT : u.n.RIGHT;

function z() {
  let [e, t] = Chunk647438.useState(0), [n, a] = Chunk647438.useState(K(module)), [s, d] = Chunk647438.useState(false), f = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.useReducedMotion), _ = Chunk692547 && !Chunk342386;
  return Chunk647438.useEffect(() => {
    let t = setTimeout(() => {
      Chunk392711(K(module))
    }, W);
    return () => clearTimeout(exports)
  }, [module]), Chunk647438.useEffect(() => {
    Math.random() > .99 && (0, Chunk57562.T)(Chunk955204.hn.VISITOR_100)
  }, []), (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
    children: [(0, Chunk951288.jsx)(Chunk578361.Z, {
      className: Chunk892879.slideAnimator,
      step: module,
      direction: require,
      children: Y(module, exports, Chunk460181)
    }), (0, Chunk951288.jsx)("div", {
      className: Chunk585483 ? Chunk892879.enableAnimationOverlayVisible : Chunk892879.enableAnimationOverlayHidden,
      children: (0, Chunk951288.jsx)(Chunk481060.Fmz, {
        className: Chunk892879.enableAnimation,
        importData: V,
        shouldAnimate: Chunk585483,
        autoplay: false,
        resetOnPlay: true,
        loop: false,
        onComplete: () => Chunk460181(false)
      })
    })]
  })
}