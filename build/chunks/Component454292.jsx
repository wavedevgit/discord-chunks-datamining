/** Chunk was on web.js **/
/** chunk id: 454292, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => q
}), require("./228524.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  Chunk311907 = require("./311907.js"),
  Chunk827734 = require("./827734.js"),
  Chunk314116 = require("./314116.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk725951 = require("./725951.jsx"),
  Chunk400492 = require("./400492.js"),
  Chunk12901 = require("./12901.js"),
  Chunk115063 = require("./115063.js"),
  Chunk414736 = require("./414736.jsx"),
  Chunk927018 = require("./927018.js"),
  Chunk928830 = require("./928830.js"),
  Chunk3137 = require("./3137.js"),
  Chunk301656 = require("./301656.jsx"),
  Chunk224964 = require("./224964.js"),
  Chunk31408 = require("./31408.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk829054 = require("./829054.js");

function I(e, t, n) {
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
      I(e, t, n[t])
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

function C(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : T(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let N = {
    enabled: true,
    combosEnabled: true,
    screenshakeEnabled: false,
    confettiEnabled: false
  },
  R = (0, Chunk735438.range)(0, 11),
  w = (0, Chunk735438.range)(0, 2.25, .25),
  P = (0, Chunk735438.range)(1, 11),
  D = (0, Chunk735438.range)(1, 26),
  x = () => [{
    location: O.k.CHAT_INPUT,
    title: v.intl.string(v.t.elTtyz),
    description: v.intl.string(v.t.HtKfMi)
  }, {
    location: O.k.REACTION,
    title: v.intl.string(v.t.Ik4VIa),
    description: v.intl.string(v.t.y4rqK0)
  }, {
    location: O.k.MEMBER_USER,
    title: v.intl.string(v.t.ZXBlAn),
    description: v.intl.string(v.t["m9RD+c"])
  }, {
    location: O.k.CALL_TILE,
    title: v.intl.string(v.t.V66giQ),
    description: v.intl.string(v.t.fiHV7u)
  }],
  L = () => [{
    location: O.uD.CHAT_INPUT,
    title: v.intl.string(v.t.vUcvPP),
    description: v.intl.string(v.t.y00OrF)
  }, {
    location: O.uD.VOICE_USER,
    title: v.intl.string(v.t.TcRO54),
    description: v.intl.string(v.t.YJCxVY)
  }, {
    location: O.uD.MENTION,
    title: v.intl.string(v.t.oW4shO),
    description: v.intl.string(v.t["mqfw/H"])
  }];

function j(e) {
  let {
    disabled: t,
    locations: n,
    settingsLocations: i,
    onChange: a
  } = e, s = n.map(e => (0, r.jsx)(c.dOG, {
    label: e.title,
    description: e.description,
    checked: i[e.location],
    disabled: t,
    onChange: t => a(C(S({}, i), {
      [e.location]: t
    }))
  }, e.location));
  return (0, r.jsx)(c.nVY, {
    label: v.intl.string(v.t.bWVN1D),
    children: s
  })
}

function M(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)(c.Text, {
    className: A.iF,
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
  } = e, a = (0, s.bG)([u.A], () => u.A.useReducedMotion), o = e => {
    e || (0, h._)(m.sn.DISABLE_POGGERMODE), e && (!n || a) ? (0, l.A)({
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
  return (0, r.jsx)(c.dOG, {
    label: v.intl.string(v.t.vuiXm9),
    description: v.intl.string(v.t.KuYbWN),
    checked: t,
    onChange: o
  })
}

function U(e) {
  let {
    settings: {
      enabled: t,
      confettiEnabled: n,
      confettiCount: i,
      confettiSize: a,
      confettiEnabledLocations: s
    },
    updateSettings: o
  } = e, l = !t || !n;
  return (0, r.jsxs)(c.nVY, {
    label: v.intl.string(v.t.mqxwJO),
    children: [(0, r.jsx)(c.dOG, {
      label: v.intl.string(v.t.s0KCgF),
      description: v.intl.string(v.t.O1Vflg),
      checked: n,
      disabled: !t,
      onChange: e => o({
        confettiEnabled: e
      }, 0)
    }), (0, r.jsxs)("div", {
      children: [(0, r.jsx)(c.Text, {
        variant: "text-md/semibold",
        color: l ? "text-muted" : "text-strong",
        className: A.KF,
        children: v.intl.string(v.t.vd0D81)
      }), (0, r.jsx)(M, {
        children: v.intl.string(v.t.a18Sug)
      }), (0, r.jsx)(c.Apm, {
        disabled: l,
        markers: P,
        stickToMarkers: true,
        minValue: P[0],
        maxValue: P[P.length - 1],
        initialValue: i,
        onValueChange: e => o({
          confettiCount: e
        }, 0),
        onValueRender: e => "".concat(e)
      })]
    }), (0, r.jsxs)("div", {
      children: [(0, r.jsx)(c.Text, {
        variant: "text-md/semibold",
        color: l ? "text-muted" : "text-strong",
        className: A.KF,
        children: v.intl.string(v.t.sPO3ij)
      }), (0, r.jsx)(M, {
        children: v.intl.string(v.t.xoldVn)
      }), (0, r.jsx)(c.Apm, {
        disabled: l,
        markers: D,
        stickToMarkers: true,
        minValue: D[0],
        maxValue: D[D.length - 1],
        initialValue: a,
        onValueChange: e => o({
          confettiSize: e
        }, 0),
        onValueRender: e => "".concat(e)
      })]
    }), (0, r.jsx)(j, {
      disabled: l,
      locations: x(),
      settingsLocations: s,
      onChange: e => o({
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
    updateSettings: s
  } = e, o = !t || !n;
  return (0, r.jsxs)(c.nVY, {
    label: v.intl.string(v.t.Xz0ole),
    children: [(0, r.jsx)(c.dOG, {
      label: v.intl.string(v.t.o3iV7B),
      description: v.intl.string(v.t["31Z8Ee"]),
      checked: n,
      disabled: !t,
      onChange: e => s({
        combosEnabled: e
      })
    }), (0, r.jsx)(c.dOG, {
      label: v.intl.string(v.t["Ax+IoW"]),
      description: v.intl.string(v.t["9rgQEr"]),
      checked: i,
      disabled: !t,
      onChange: e => s({
        comboSoundsEnabled: e
      })
    }), (0, r.jsxs)("div", {
      children: [(0, r.jsx)(c.Text, {
        variant: "text-md/semibold",
        color: o ? "text-muted" : "text-strong",
        className: A.KF,
        children: v.intl.string(v.t.L0oQuh)
      }), (0, r.jsx)(M, {
        children: v.intl.string(v.t["/OOFpL"])
      }), (0, r.jsx)(c.Apm, {
        disabled: o,
        markers: R,
        stickToMarkers: true,
        minValue: R[0],
        maxValue: R[R.length - 1],
        initialValue: a,
        onValueChange: e => s({
          combosRequiredCount: e
        }),
        onValueRender: e => "".concat(e)
      })]
    })]
  })
}

function V(e) {
  let {
    settings: {
      enabled: t,
      screenshakeEnabled: n,
      shakeIntensity: i,
      screenshakeEnabledLocations: a
    },
    updateSettings: o
  } = e, l = (0, s.bG)([u.A], () => u.A.useReducedMotion), d = !t || !n || l, f = (e, t) => {
    null != e.shakeIntensity && e.shakeIntensity > i && (0, h._)(m.sn.MORE), o(e, t)
  };
  return (0, r.jsxs)(c.nVY, {
    label: v.intl.string(v.t.wVS5Sd),
    children: [(0, r.jsx)(c.dOG, {
      label: v.intl.string(v.t.N004zO),
      description: l ? v.intl.string(v.t.GckHGw) : v.intl.string(v.t.Qq5W3v),
      checked: n && !l,
      disabled: !t || l,
      onChange: e => o({
        screenshakeEnabled: e
      }, 1)
    }), (0, r.jsxs)("div", {
      children: [(0, r.jsx)(c.Text, {
        variant: "text-md/semibold",
        color: d ? "text-muted" : "text-strong",
        className: A.KF,
        children: v.intl.string(v.t.UxnnC4)
      }), (0, r.jsx)(M, {
        children: v.intl.string(v.t.CEOEOb)
      }), (0, r.jsx)(c.Apm, {
        disabled: d,
        markers: w,
        equidistant: true,
        stickToMarkers: true,
        minValue: w[0],
        maxValue: w[w.length - 1],
        initialValue: i,
        onValueChange: e => f({
          shakeIntensity: e
        }, 1),
        onMarkerRender: e => e === w[w.length - 1] ? v.intl.string(v.t["4rbMWc"]) : "".concat(100 * e, "%")
      })]
    }), (0, r.jsx)(j, {
      disabled: d,
      locations: L(),
      settingsLocations: a,
      onChange: e => o({
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
  return (0, r.jsx)(c.nVY, {
    label: v.intl.string(v.t.EuXv2q),
    children: (0, r.jsxs)(c.BJc, {
      gap: 16,
      children: [(0, r.jsx)("div", {
        children: v.intl.string(v.t["1SLnki"])
      }), (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: A.hw,
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
  return (0, r.jsxs)(c.DUT, {
    onClick: n,
    className: A.Tq,
    children: [(0, r.jsx)("div", {
      className: A.w1,
      children: (0, r.jsx)(c.OR, {
        size: "md",
        color: o.A.unsafe_rawColors.ORANGE_345.css
      })
    }), (0, r.jsxs)("div", {
      className: A.qL,
      children: [(0, r.jsx)(c.Heading, {
        variant: "heading-md/semibold",
        color: "text-strong",
        children: v.intl.string(v.t["6jI0hd"])
      }), (0, r.jsx)(c.Text, {
        variant: "text-md/normal",
        color: "text-default",
        children: v.intl.string(v.t.GuUItX)
      })]
    }), (0, r.jsx)(c._BQ, {
      size: "custom",
      color: "currentColor",
      width: 16,
      className: A.nT
    })]
  })
}
let H = () => n.e("4660").then(n.t.bind(n, 662336, 19)).then(e => {
  let {
    default: t
  } = e;
  return t
});

function Y(e) {
  let {
    onChangePage: t,
    setShowEnableAnimation: n
  } = e, a = (0, s.cf)([E.A], () => E.A.getState()), [o, l] = i.useState({
    x: 0,
    y: 0
  }), u = (0, b.A)();

  function d(e, t, n, r) {
    let i = null != r ? r : n;
    return (null != t ? t : e) && i
  }
  let p = e => {
      if (e.enabled && false === a.enabled) {
        var t;
        n(true), (0, f.Ak)("poggermode_enabled"), (0, _.fO)({
          duration: 2e3,
          intensity: null != (t = e.shakeIntensity) ? t : a.shakeIntensity
        })
      }
    },
    h = (e, t) => {
      if (p(e), (0, g.O9)(e), null == t) return;
      let n = 0 === t,
        r = d(a.confettiEnabled, e.confettiEnabled, a.enabled, e.enabled);
      n && r && u.fire(o.x, o.y, {
        settings: e
      });
      let i = 1 === t,
        s = d(a.screenshakeEnabled, e.screenshakeEnabled, a.enabled, e.enabled);
      if (i && s) {
        var l;
        (0, _.fO)({
          duration: 1e3,
          intensity: null != (l = e.shakeIntensity) ? l : a.shakeIntensity
        })
      }
    },
    m = e => {
      l({
        x: e.clientX,
        y: e.clientY
      })
    };
  return i.useEffect(() => (window.addEventListener("mousemove", m), () => window.removeEventListener("mousemove", m)), []), (0, r.jsxs)(c.BJc, {
    gap: 24,
    children: [(0, r.jsx)(k, {
      settings: a,
      updateSettings: h
    }), (0, r.jsx)(B, {
      onChangePage: t
    }), (0, r.jsx)(G, {
      settings: a,
      updateSettings: h
    }), (0, r.jsx)(V, {
      settings: a,
      updateSettings: h
    }), (0, r.jsx)(U, {
      settings: a,
      updateSettings: h
    }), (0, r.jsx)(F, {
      updateSettings: h
    })]
  })
}
let W = (e, t, n) => {
    let i = e => () => {
      t(e)
    };
    switch (e) {
      case 0:
        return (0, r.jsx)(Y, {
          onChangePage: i(1),
          setShowEnableAnimation: n
        });
      case 1:
        return (0, r.jsx)(y.A, {
          onBackClick: i(0)
        });
      default:
        return null
    }
  },
  K = 500,
  z = e => 0 === e ? d.f.LEFT : d.f.RIGHT;

function q() {
  let [e, t] = i.useState(0), [n, a] = i.useState(z(e)), [o, l] = i.useState(false), f = (0, s.bG)([u.A], () => u.A.useReducedMotion), p = o && !f;
  return i.useEffect(() => {
    let t = setTimeout(() => {
      a(z(e))
    }, K);
    return () => clearTimeout(t)
  }, [e]), i.useEffect(() => {
    Math.random() > .99 && (0, h._)(m.sn.VISITOR_100)
  }, []), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(d.A, {
      className: A.l3,
      step: e,
      direction: n,
      children: W(e, t, l)
    }), (0, r.jsx)("div", {
      className: p ? A.Sr : A.IP,
      children: (0, r.jsx)(c.akl, {
        className: A.gT,
        importData: H,
        shouldAnimate: p,
        autoplay: false,
        resetOnPlay: true,
        loop: false,
        onComplete: () => l(false)
      })
    })]
  })
}