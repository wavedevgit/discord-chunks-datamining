/** Chunk was on web.js **/
/** chunk id: 231765, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => K
}), require("./953529.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk578361 = require("./578361.jsx"),
  Chunk460181 = require("./460181.js"),
  Chunk342386 = require("./342386.js"),
  Chunk88658 = require("./88658.js"),
  Chunk57562 = require("./57562.jsx"),
  Chunk955204 = require("./955204.js"),
  Chunk64078 = require("./64078.js"),
  Chunk351780 = require("./351780.js"),
  Chunk954794 = require("./954794.jsx"),
  Chunk112843 = require("./112843.js"),
  Chunk524484 = require("./524484.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk749714 = require("./749714.js");

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      S(e, t, n[t])
    })
  }
  return e
}

function T(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function A(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : T(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let C = {
    enabled: true,
    combosEnabled: true,
    screenshakeEnabled: false,
    confettiEnabled: false
  },
  N = (0, Chunk392711.range)(0, 11),
  P = (0, Chunk392711.range)(0, 2.25, .25),
  R = (0, Chunk392711.range)(1, 11),
  w = (0, Chunk392711.range)(1, 26),
  D = () => [{
    location: Chunk524484.Hn.CHAT_INPUT,
    title: Chunk388032.intl.string(Chunk388032.t.elTtyz),
    description: Chunk388032.intl.string(Chunk388032.t.HtKfMi)
  }, {
    location: Chunk524484.Hn.REACTION,
    title: Chunk388032.intl.string(Chunk388032.t.Ik4VIa),
    description: Chunk388032.intl.string(Chunk388032.t.y4rqK0)
  }, {
    location: Chunk524484.Hn.MEMBER_USER,
    title: Chunk388032.intl.string(Chunk388032.t.ZXBlAn),
    description: Chunk388032.intl.string(Chunk388032.t["m9RD+c"])
  }, {
    location: Chunk524484.Hn.CALL_TILE,
    title: Chunk388032.intl.string(Chunk388032.t.V66giQ),
    description: Chunk388032.intl.string(Chunk388032.t.fiHV7u)
  }],
  x = () => [{
    location: Chunk524484.oZ.CHAT_INPUT,
    title: Chunk388032.intl.string(Chunk388032.t.vUcvPP),
    description: Chunk388032.intl.string(Chunk388032.t.y00OrF)
  }, {
    location: Chunk524484.oZ.VOICE_USER,
    title: Chunk388032.intl.string(Chunk388032.t.TcRO54),
    description: Chunk388032.intl.string(Chunk388032.t.YJCxVY)
  }, {
    location: Chunk524484.oZ.MENTION,
    title: Chunk388032.intl.string(Chunk388032.t.oW4shO),
    description: Chunk388032.intl.string(Chunk388032.t["mqfw/H"])
  }];

function L(e) {
  let {
    disabled: t,
    locations: n,
    settingsLocations: i,
    onChange: a
  } = e, o = n.map(e => (0, r.jsx)(l.rsf, {
    label: e.title,
    description: e.description,
    checked: i[e.location],
    disabled: t,
    onChange: t => a(A(I({}, i), {
      [e.location]: t
    }))
  }, e.location));
  return (0, r.jsx)(l.C3N, {
    label: O.intl.string(O.t.bWVN1D),
    children: o
  })
}

function j(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)(l.Text, {
    className: v.sliderDescription,
    variant: "text-sm/normal",
    color: "header-secondary",
    children: t
  })
}

function M(e) {
  let {
    settings: {
      enabled: t,
      warningSeen: n
    },
    updateSettings: i
  } = e, a = (0, o.e7)([c.Z], () => c.Z.useReducedMotion), s = e => {
    e || (0, _.T)(m.hn.DISABLE_POGGERMODE), e && (!n || a) ? (0, l.h7j)(e => (0, r.jsx)(l.ConfirmModal, A(I({
      header: a ? O.intl.string(O.t["FxT+p0"]) : O.intl.string(O.t.TAZ4F9),
      confirmText: O.intl.string(O.t.JFfins),
      cancelText: O.intl.string(O.t["ETE/oC"]),
      onConfirm: () => i(a ? C : {
        enabled: true,
        warningSeen: true
      })
    }, e), {
      children: (0, r.jsx)(l.Text, {
        variant: "text-md/normal",
        children: a ? O.intl.string(O.t.gmixrx) : O.intl.string(O.t.jN3t3K)
      })
    }))) : i({
      enabled: e
    })
  };
  return (0, r.jsx)(l.rsf, {
    label: O.intl.string(O.t.vuiXm9),
    description: O.intl.string(O.t.KuYbWN),
    checked: t,
    onChange: s
  })
}

function k(e) {
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
  return (0, r.jsxs)(l.C3N, {
    label: O.intl.string(O.t.mqxwJO),
    children: [(0, r.jsx)(l.rsf, {
      label: O.intl.string(O.t.s0KCgF),
      description: O.intl.string(O.t.O1Vflg),
      checked: n,
      disabled: !t,
      onChange: e => s({
        confettiEnabled: e
      }, 0)
    }), (0, r.jsxs)("div", {
      children: [(0, r.jsx)(l.Text, {
        variant: "text-md/semibold",
        color: c ? "text-muted" : "header-primary",
        className: v.sliderLabel,
        children: O.intl.string(O.t.vd0D81)
      }), (0, r.jsx)(j, {
        children: O.intl.string(O.t.a18Sug)
      }), (0, r.jsx)(l.iRW, {
        disabled: c,
        markers: R,
        stickToMarkers: true,
        minValue: R[0],
        maxValue: R[R.length - 1],
        initialValue: i,
        onValueChange: e => s({
          confettiCount: e
        }, 0),
        onValueRender: e => "".concat(e)
      })]
    }), (0, r.jsxs)("div", {
      children: [(0, r.jsx)(l.Text, {
        variant: "text-md/semibold",
        color: c ? "text-muted" : "header-primary",
        className: v.sliderLabel,
        children: O.intl.string(O.t.sPO3ij)
      }), (0, r.jsx)(j, {
        children: O.intl.string(O.t.xoldVn)
      }), (0, r.jsx)(l.iRW, {
        disabled: c,
        markers: w,
        stickToMarkers: true,
        minValue: w[0],
        maxValue: w[w.length - 1],
        initialValue: a,
        onValueChange: e => s({
          confettiSize: e
        }, 0),
        onValueRender: e => "".concat(e)
      })]
    }), (0, r.jsx)(L, {
      disabled: c,
      locations: D(),
      settingsLocations: o,
      onChange: e => s({
        confettiEnabledLocations: e
      }, 0)
    })]
  })
}

function U(e) {
  let {
    settings: {
      enabled: t,
      combosEnabled: n,
      comboSoundsEnabled: i,
      combosRequiredCount: a
    },
    updateSettings: o
  } = e, s = !t || !n;
  return (0, r.jsxs)(l.C3N, {
    label: O.intl.string(O.t.Xz0ole),
    children: [(0, r.jsx)(l.rsf, {
      label: O.intl.string(O.t.o3iV7B),
      description: O.intl.string(O.t["31Z8Ee"]),
      checked: n,
      disabled: !t,
      onChange: e => o({
        combosEnabled: e
      })
    }), (0, r.jsx)(l.rsf, {
      label: O.intl.string(O.t["Ax+IoW"]),
      description: O.intl.string(O.t["9rgQEr"]),
      checked: i,
      disabled: !t,
      onChange: e => o({
        comboSoundsEnabled: e
      })
    }), (0, r.jsxs)("div", {
      children: [(0, r.jsx)(l.Text, {
        variant: "text-md/semibold",
        color: s ? "text-muted" : "header-primary",
        className: v.sliderLabel,
        children: O.intl.string(O.t.L0oQuh)
      }), (0, r.jsx)(j, {
        children: O.intl.string(O.t["/OOFpL"])
      }), (0, r.jsx)(l.iRW, {
        disabled: s,
        markers: N,
        stickToMarkers: true,
        minValue: N[0],
        maxValue: N[N.length - 1],
        initialValue: a,
        onValueChange: e => o({
          combosRequiredCount: e
        }),
        onValueRender: e => "".concat(e)
      })]
    })]
  })
}

function G(e) {
  let {
    settings: {
      enabled: t,
      screenshakeEnabled: n,
      shakeIntensity: i,
      screenshakeEnabledLocations: a
    },
    updateSettings: s
  } = e, u = (0, o.e7)([c.Z], () => c.Z.useReducedMotion), d = !t || !n || u, f = (e, t) => {
    null != e.shakeIntensity && e.shakeIntensity > i && (0, _.T)(m.hn.MORE), s(e, t)
  };
  return (0, r.jsxs)(l.C3N, {
    label: O.intl.string(O.t.wVS5Sd),
    children: [(0, r.jsx)(l.rsf, {
      label: O.intl.string(O.t.N004zO),
      description: u ? O.intl.string(O.t.GckHGw) : O.intl.string(O.t.Qq5W3v),
      checked: n && !u,
      disabled: !t || u,
      onChange: e => s({
        screenshakeEnabled: e
      }, 1)
    }), (0, r.jsxs)("div", {
      children: [(0, r.jsx)(l.Text, {
        variant: "text-md/semibold",
        color: d ? "text-muted" : "header-primary",
        className: v.sliderLabel,
        children: O.intl.string(O.t.UxnnC4)
      }), (0, r.jsx)(j, {
        children: O.intl.string(O.t.CEOEOb)
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
        onMarkerRender: e => e === P[P.length - 1] ? O.intl.string(O.t["4rbMWc"]) : "".concat(100 * e, "%")
      })]
    }), (0, r.jsx)(L, {
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
  return (0, r.jsx)(l.C3N, {
    label: O.intl.string(O.t.EuXv2q),
    children: (0, r.jsxs)(l.Kqy, {
      gap: 16,
      children: [(0, r.jsx)("div", {
        children: O.intl.string(O.t["1SLnki"])
      }), (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: v.hideButton,
        children: (0, r.jsx)(l.Button, {
          variant: "primary",
          size: "sm",
          text: O.intl.string(O.t.qz65yY),
          onClick: n
        })
      })]
    })
  })
}

function B(e) {
  let {
    onChangePage: t
  } = e, n = () => t(1);
  return (0, r.jsxs)(l.P3F, {
    onClick: n,
    className: v.achievementContainer,
    children: [(0, r.jsx)("div", {
      className: v.achievementIconContainer,
      children: (0, r.jsx)(l.rm8, {
        size: "md",
        color: s.Z.unsafe_rawColors.ORANGE_345.css
      })
    }), (0, r.jsxs)("div", {
      className: v.achievementTextContainer,
      children: [(0, r.jsx)(l.Heading, {
        variant: "heading-md/semibold",
        color: "header-primary",
        children: O.intl.string(O.t["6jI0hd"])
      }), (0, r.jsx)(l.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        children: O.intl.string(O.t.GuUItX)
      })]
    }), (0, r.jsx)(l.Fbu, {
      size: "custom",
      color: "currentColor",
      width: 16,
      className: v.rightCaretIcon
    })]
  })
}
let F = () => require.e("68170").then(require.t.bind(require, 205663, 19)).then(e => {
  let {
    default: t
  } = e;
  return t
});

function V(e) {
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
  let _ = e => {
      if (e.enabled && false === a.enabled) {
        var t;
        n(true), (0, d.GN)("poggermode_enabled"), (0, p.Aj)({
          duration: 2e3,
          intensity: null != (t = e.shakeIntensity) ? t : a.shakeIntensity
        })
      }
    },
    m = (e, t) => {
      if (_(e), (0, h.AI)(e), null == t) return;
      let n = 0 === t,
        r = f(a.confettiEnabled, e.confettiEnabled, a.enabled, e.enabled);
      n && r && u.fire(s.x, s.y, {
        settings: e
      });
      let i = 1 === t,
        o = f(a.screenshakeEnabled, e.screenshakeEnabled, a.enabled, e.enabled);
      if (i && o) {
        var l;
        (0, p.Aj)({
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
  return i.useEffect(() => (window.addEventListener("mousemove", E), () => window.removeEventListener("mousemove", E)), []), (0, r.jsxs)(l.Kqy, {
    gap: 24,
    children: [(0, r.jsx)(l.Heading, {
      variant: "heading-lg/semibold",
      children: O.intl.string(O.t.AtCukI)
    }), (0, r.jsx)(M, {
      settings: a,
      updateSettings: m
    }), (0, r.jsx)(B, {
      onChangePage: t
    }), (0, r.jsx)(U, {
      settings: a,
      updateSettings: m
    }), (0, r.jsx)(G, {
      settings: a,
      updateSettings: m
    }), (0, r.jsx)(k, {
      settings: a,
      updateSettings: m
    }), (0, r.jsx)(Z, {
      updateSettings: m
    })]
  })
}
let H = (e, t, n) => {
    let i = e => () => {
      t(e)
    };
    switch (e) {
      case 0:
        return (0, r.jsx)(V, {
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
  Y = 500,
  W = e => 0 === e ? u.n.LEFT : u.n.RIGHT;

function K() {
  let [e, t] = Chunk473749.useState(0), [n, a] = Chunk473749.useState(W(module)), [s, d] = Chunk473749.useState(false), f = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.useReducedMotion), p = Chunk692547 && !Chunk342386;
  return Chunk473749.useEffect(() => {
    let t = setTimeout(() => {
      Chunk392711(W(module))
    }, Y);
    return () => clearTimeout(exports)
  }, [module]), Chunk473749.useEffect(() => {
    Math.random() > .99 && (0, Chunk57562.T)(Chunk955204.hn.VISITOR_100)
  }, []), (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
    children: [(0, Chunk54381.jsx)(Chunk578361.Z, {
      className: Chunk749714.slideAnimator,
      step: module,
      direction: require,
      children: H(module, exports, Chunk460181)
    }), (0, Chunk54381.jsx)("div", {
      className: Chunk88658 ? Chunk749714.enableAnimationOverlayVisible : Chunk749714.enableAnimationOverlayHidden,
      children: (0, Chunk54381.jsx)(Chunk481060.Fmz, {
        className: Chunk749714.enableAnimation,
        importData: F,
        shouldAnimate: Chunk88658,
        autoplay: false,
        resetOnPlay: true,
        loop: false,
        onComplete: () => Chunk460181(false)
      })
    })]
  })
}