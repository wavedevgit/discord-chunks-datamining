/** Chunk was on web.js **/
/** chunk id: 231765, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => z
}), require("./953529.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk248514 = require("./248514.jsx"),
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
  Chunk5791 = require("./5791.js");

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function T(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      I(e, t, n[t])
    })
  }
  return e
}

function C(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : C(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let N = {
    enabled: true,
    combosEnabled: true,
    screenshakeEnabled: false,
    confettiEnabled: false
  },
  P = (0, Chunk392711.range)(0, 11),
  R = (0, Chunk392711.range)(0, 2.25, .25),
  w = (0, Chunk392711.range)(1, 11),
  D = (0, Chunk392711.range)(1, 26),
  x = () => [{
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
  L = () => [{
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

function j(e) {
  let {
    disabled: t,
    locations: n,
    settingsLocations: i,
    onChange: a
  } = e, o = n.map(e => (0, r.jsx)(c.rsf, {
    label: e.title,
    description: e.description,
    checked: i[e.location],
    disabled: t,
    onChange: t => a(A(T({}, i), {
      [e.location]: t
    }))
  }, e.location));
  return (0, r.jsx)(c.C3N, {
    label: v.intl.string(v.t.bWVN1D),
    children: o
  })
}

function M(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)(c.Text, {
    className: S.sliderDescription,
    variant: "text-sm/normal",
    color: "text-default",
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
  } = e, a = (0, o.e7)([u.Z], () => u.Z.useReducedMotion), s = e => {
    e || (0, m.T)(h.hn.DISABLE_POGGERMODE), e && (!n || a) ? (0, l.Z)({
      title: a ? v.intl.string(v.t["FxT+p0"]) : v.intl.string(v.t.TAZ4F9),
      subtitle: a ? v.intl.string(v.t.gmixrx) : v.intl.string(v.t.jN3t3K),
      confirmText: v.intl.string(v.t.JFfins),
      onConfirm: () => i(a ? N : {
        enabled: true,
        warningSeen: true
      })
    }) : i({
      enabled: e
    })
  };
  return (0, r.jsx)(c.rsf, {
    label: v.intl.string(v.t.vuiXm9),
    description: v.intl.string(v.t.KuYbWN),
    checked: t,
    onChange: s
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
  } = e, l = !t || !n;
  return (0, r.jsxs)(c.C3N, {
    label: v.intl.string(v.t.mqxwJO),
    children: [(0, r.jsx)(c.rsf, {
      label: v.intl.string(v.t.s0KCgF),
      description: v.intl.string(v.t.O1Vflg),
      checked: n,
      disabled: !t,
      onChange: e => s({
        confettiEnabled: e
      }, 0)
    }), (0, r.jsxs)("div", {
      children: [(0, r.jsx)(c.Text, {
        variant: "text-md/semibold",
        color: l ? "text-muted" : "text-strong",
        className: S.sliderLabel,
        children: v.intl.string(v.t.vd0D81)
      }), (0, r.jsx)(M, {
        children: v.intl.string(v.t.a18Sug)
      }), (0, r.jsx)(c.iRW, {
        disabled: l,
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
    }), (0, r.jsxs)("div", {
      children: [(0, r.jsx)(c.Text, {
        variant: "text-md/semibold",
        color: l ? "text-muted" : "text-strong",
        className: S.sliderLabel,
        children: v.intl.string(v.t.sPO3ij)
      }), (0, r.jsx)(M, {
        children: v.intl.string(v.t.xoldVn)
      }), (0, r.jsx)(c.iRW, {
        disabled: l,
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
      disabled: l,
      locations: x(),
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
  return (0, r.jsxs)(c.C3N, {
    label: v.intl.string(v.t.Xz0ole),
    children: [(0, r.jsx)(c.rsf, {
      label: v.intl.string(v.t.o3iV7B),
      description: v.intl.string(v.t["31Z8Ee"]),
      checked: n,
      disabled: !t,
      onChange: e => o({
        combosEnabled: e
      })
    }), (0, r.jsx)(c.rsf, {
      label: v.intl.string(v.t["Ax+IoW"]),
      description: v.intl.string(v.t["9rgQEr"]),
      checked: i,
      disabled: !t,
      onChange: e => o({
        comboSoundsEnabled: e
      })
    }), (0, r.jsxs)("div", {
      children: [(0, r.jsx)(c.Text, {
        variant: "text-md/semibold",
        color: s ? "text-muted" : "text-strong",
        className: S.sliderLabel,
        children: v.intl.string(v.t.L0oQuh)
      }), (0, r.jsx)(M, {
        children: v.intl.string(v.t["/OOFpL"])
      }), (0, r.jsx)(c.iRW, {
        disabled: s,
        markers: P,
        stickToMarkers: true,
        minValue: P[0],
        maxValue: P[P.length - 1],
        initialValue: a,
        onValueChange: e => o({
          combosRequiredCount: e
        }),
        onValueRender: e => "".concat(e)
      })]
    })]
  })
}

function Z(e) {
  let {
    settings: {
      enabled: t,
      screenshakeEnabled: n,
      shakeIntensity: i,
      screenshakeEnabledLocations: a
    },
    updateSettings: s
  } = e, l = (0, o.e7)([u.Z], () => u.Z.useReducedMotion), d = !t || !n || l, f = (e, t) => {
    null != e.shakeIntensity && e.shakeIntensity > i && (0, m.T)(h.hn.MORE), s(e, t)
  };
  return (0, r.jsxs)(c.C3N, {
    label: v.intl.string(v.t.wVS5Sd),
    children: [(0, r.jsx)(c.rsf, {
      label: v.intl.string(v.t.N004zO),
      description: l ? v.intl.string(v.t.GckHGw) : v.intl.string(v.t.Qq5W3v),
      checked: n && !l,
      disabled: !t || l,
      onChange: e => s({
        screenshakeEnabled: e
      }, 1)
    }), (0, r.jsxs)("div", {
      children: [(0, r.jsx)(c.Text, {
        variant: "text-md/semibold",
        color: d ? "text-muted" : "text-strong",
        className: S.sliderLabel,
        children: v.intl.string(v.t.UxnnC4)
      }), (0, r.jsx)(M, {
        children: v.intl.string(v.t.CEOEOb)
      }), (0, r.jsx)(c.iRW, {
        disabled: d,
        markers: R,
        equidistant: true,
        stickToMarkers: true,
        minValue: R[0],
        maxValue: R[R.length - 1],
        initialValue: i,
        onValueChange: e => f({
          shakeIntensity: e
        }, 1),
        onMarkerRender: e => e === R[R.length - 1] ? v.intl.string(v.t["4rbMWc"]) : "".concat(100 * e, "%")
      })]
    }), (0, r.jsx)(j, {
      disabled: d,
      locations: L(),
      settingsLocations: a,
      onChange: e => s({
        screenshakeEnabledLocations: e
      }, 1)
    })]
  })
}

function F(e) {
  let {
    updateSettings: t
  } = e, n = () => {
    t({
      enabled: false,
      settingsVisible: false
    }), (0, p.default)()
  };
  return (0, r.jsx)(c.C3N, {
    label: v.intl.string(v.t.EuXv2q),
    children: (0, r.jsxs)(c.Kqy, {
      gap: 16,
      children: [(0, r.jsx)("div", {
        children: v.intl.string(v.t["1SLnki"])
      }), (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: S.hideButton,
        children: (0, r.jsx)(c.Button, {
          variant: "primary",
          size: "sm",
          text: v.intl.string(v.t.qz65yY),
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
  return (0, r.jsxs)(c.P3F, {
    onClick: n,
    className: S.achievementContainer,
    children: [(0, r.jsx)("div", {
      className: S.achievementIconContainer,
      children: (0, r.jsx)(c.rm8, {
        size: "md",
        color: s.Z.unsafe_rawColors.ORANGE_345.css
      })
    }), (0, r.jsxs)("div", {
      className: S.achievementTextContainer,
      children: [(0, r.jsx)(c.Heading, {
        variant: "heading-md/semibold",
        color: "text-strong",
        children: v.intl.string(v.t["6jI0hd"])
      }), (0, r.jsx)(c.Text, {
        variant: "text-md/normal",
        color: "text-default",
        children: v.intl.string(v.t.GuUItX)
      })]
    }), (0, r.jsx)(c.Fbu, {
      size: "custom",
      color: "currentColor",
      width: 16,
      className: S.rightCaretIcon
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
  } = e, a = (0, o.cj)([E.Z], () => E.Z.getState()), [s, l] = i.useState({
    x: 0,
    y: 0
  }), u = (0, y.Z)();

  function d(e, t, n, r) {
    let i = null != r ? r : n;
    return (null != t ? t : e) && i
  }
  let p = e => {
      if (e.enabled && false === a.enabled) {
        var t;
        n(true), (0, f.GN)("poggermode_enabled"), (0, _.Aj)({
          duration: 2e3,
          intensity: null != (t = e.shakeIntensity) ? t : a.shakeIntensity
        })
      }
    },
    m = (e, t) => {
      if (p(e), (0, g.AI)(e), null == t) return;
      let n = 0 === t,
        r = d(a.confettiEnabled, e.confettiEnabled, a.enabled, e.enabled);
      n && r && u.fire(s.x, s.y, {
        settings: e
      });
      let i = 1 === t,
        o = d(a.screenshakeEnabled, e.screenshakeEnabled, a.enabled, e.enabled);
      if (i && o) {
        var l;
        (0, _.Aj)({
          duration: 1e3,
          intensity: null != (l = e.shakeIntensity) ? l : a.shakeIntensity
        })
      }
    },
    h = e => {
      l({
        x: e.clientX,
        y: e.clientY
      })
    };
  return i.useEffect(() => (window.addEventListener("mousemove", h), () => window.removeEventListener("mousemove", h)), []), (0, r.jsxs)(c.Kqy, {
    gap: 24,
    children: [(0, r.jsx)(k, {
      settings: a,
      updateSettings: m
    }), (0, r.jsx)(B, {
      onChangePage: t
    }), (0, r.jsx)(G, {
      settings: a,
      updateSettings: m
    }), (0, r.jsx)(Z, {
      settings: a,
      updateSettings: m
    }), (0, r.jsx)(U, {
      settings: a,
      updateSettings: m
    }), (0, r.jsx)(F, {
      updateSettings: m
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
        return (0, r.jsx)(b.Z, {
          onBackClick: i(0)
        });
      default:
        return null
    }
  },
  W = 500,
  K = e => 0 === e ? d.n.LEFT : d.n.RIGHT;

function z() {
  let [e, t] = Chunk473749.useState(0), [n, a] = Chunk473749.useState(K(module)), [s, l] = Chunk473749.useState(false), f = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.useReducedMotion), p = Chunk692547 && !Chunk460181;
  return Chunk473749.useEffect(() => {
    let t = setTimeout(() => {
      Chunk392711(K(module))
    }, W);
    return () => clearTimeout(exports)
  }, [module]), Chunk473749.useEffect(() => {
    Math.random() > .99 && (0, Chunk57562.T)(Chunk955204.hn.VISITOR_100)
  }, []), (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
    children: [(0, Chunk54381.jsx)(Chunk578361.Z, {
      className: Chunk5791.slideAnimator,
      step: module,
      direction: require,
      children: Y(module, exports, Chunk248514)
    }), (0, Chunk54381.jsx)("div", {
      className: Chunk342386 ? Chunk5791.enableAnimationOverlayVisible : Chunk5791.enableAnimationOverlayHidden,
      children: (0, Chunk54381.jsx)(Chunk481060.Fmz, {
        className: Chunk5791.enableAnimation,
        importData: V,
        shouldAnimate: Chunk342386,
        autoplay: false,
        resetOnPlay: true,
        loop: false,
        onComplete: () => Chunk248514(false)
      })
    })]
  })
}