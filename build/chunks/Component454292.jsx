/** Chunk was on 82575 **/
/** chunk id: 454292, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => U
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
let v = {
    enabled: true,
    combosEnabled: true,
    screenshakeEnabled: false,
    confettiEnabled: false
  },
  T = (0, Chunk735438.range)(0, 11),
  C = (0, Chunk735438.range)(0, 2.25, .25),
  y = (0, Chunk735438.range)(1, 11),
  N = (0, Chunk735438.range)(1, 26);

function I(e) {
  let {
    disabled: t,
    locations: n,
    settingsLocations: s,
    onChange: l
  } = e, r = n.map(e => (0, i.jsx)(c.dOG, {
    label: e.title,
    description: e.description,
    checked: s[e.location],
    disabled: t,
    onChange: t => {
      var n, i;
      return l((n = function(e) {
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
      }({}, s), i = i = {
        [e.location]: t
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          n.push.apply(n, i)
        }
        return n
      })(Object(i)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
      }), n))
    }
  }, e.location));
  return (0, i.jsx)(c.nVY, {
    label: E.intl.string(E.t.bWVN1D),
    children: r
  })
}

function _(e) {
  let {
    children: t
  } = e;
  return (0, i.jsx)(c.Text, {
    className: f.iF,
    variant: "text-sm/normal",
    color: "text-default",
    children: t
  })
}

function P(e) {
  let {
    settings: {
      enabled: t,
      warningSeen: n
    },
    updateSettings: s
  } = e, l = (0, r.bG)([d.A], () => d.A.useReducedMotion);
  return (0, i.jsx)(c.dOG, {
    label: E.intl.string(E.t.vuiXm9),
    description: E.intl.string(E.t.KuYbWN),
    checked: t,
    onChange: e => {
      e || (0, p._)(A.sn.DISABLE_POGGERMODE), e && (!n || l) ? (0, o.A)({
        title: l ? E.intl.string(E.t["FxT+p0"]) : E.intl.string(E.t.TAZ4F9),
        subtitle: l ? E.intl.string(E.t.gmixrx) : E.intl.string(E.t.jN3t3K),
        confirmText: E.intl.string(E.t.JFfins),
        onConfirm: () => s(l ? v : {
          enabled: true,
          warningSeen: true
        })
      }) : s({
        enabled: e
      })
    }
  })
}

function G(e) {
  let {
    settings: {
      enabled: t,
      confettiEnabled: n,
      confettiCount: s,
      confettiSize: l,
      confettiEnabledLocations: r
    },
    updateSettings: a
  } = e, o = !t || !n;
  return (0, i.jsxs)(c.nVY, {
    label: E.intl.string(E.t.mqxwJO),
    children: [(0, i.jsx)(c.dOG, {
      label: E.intl.string(E.t.s0KCgF),
      description: E.intl.string(E.t.O1Vflg),
      checked: n,
      disabled: !t,
      onChange: e => a({
        confettiEnabled: e
      }, 0)
    }), (0, i.jsxs)("div", {
      children: [(0, i.jsx)(c.Text, {
        variant: "text-md/semibold",
        color: o ? "text-muted" : "text-strong",
        className: f.KF,
        children: E.intl.string(E.t.vd0D81)
      }), (0, i.jsx)(_, {
        children: E.intl.string(E.t.a18Sug)
      }), (0, i.jsx)(c.Apm, {
        disabled: o,
        markers: y,
        stickToMarkers: true,
        minValue: y[0],
        maxValue: y[y.length - 1],
        initialValue: s,
        onValueChange: e => a({
          confettiCount: e
        }, 0),
        onValueRender: e => "".concat(e)
      })]
    }), (0, i.jsxs)("div", {
      children: [(0, i.jsx)(c.Text, {
        variant: "text-md/semibold",
        color: o ? "text-muted" : "text-strong",
        className: f.KF,
        children: E.intl.string(E.t.sPO3ij)
      }), (0, i.jsx)(_, {
        children: E.intl.string(E.t.xoldVn)
      }), (0, i.jsx)(c.Apm, {
        disabled: o,
        markers: N,
        stickToMarkers: true,
        minValue: N[0],
        maxValue: N[N.length - 1],
        initialValue: l,
        onValueChange: e => a({
          confettiSize: e
        }, 0),
        onValueRender: e => "".concat(e)
      })]
    }), (0, i.jsx)(I, {
      disabled: o,
      locations: [{
        location: S.k.CHAT_INPUT,
        title: E.intl.string(E.t.elTtyz),
        description: E.intl.string(E.t.HtKfMi)
      }, {
        location: S.k.REACTION,
        title: E.intl.string(E.t.Ik4VIa),
        description: E.intl.string(E.t.y4rqK0)
      }, {
        location: S.k.MEMBER_USER,
        title: E.intl.string(E.t.ZXBlAn),
        description: E.intl.string(E.t["m9RD+c"])
      }, {
        location: S.k.CALL_TILE,
        title: E.intl.string(E.t.V66giQ),
        description: E.intl.string(E.t.fiHV7u)
      }],
      settingsLocations: r,
      onChange: e => a({
        confettiEnabledLocations: e
      }, 0)
    })]
  })
}

function R(e) {
  let {
    settings: {
      enabled: t,
      combosEnabled: n,
      comboSoundsEnabled: s,
      combosRequiredCount: l
    },
    updateSettings: r
  } = e, a = !t || !n;
  return (0, i.jsxs)(c.nVY, {
    label: E.intl.string(E.t.Xz0ole),
    children: [(0, i.jsx)(c.dOG, {
      label: E.intl.string(E.t.o3iV7B),
      description: E.intl.string(E.t["31Z8Ee"]),
      checked: n,
      disabled: !t,
      onChange: e => r({
        combosEnabled: e
      })
    }), (0, i.jsx)(c.dOG, {
      label: E.intl.string(E.t["Ax+IoW"]),
      description: E.intl.string(E.t["9rgQEr"]),
      checked: s,
      disabled: !t,
      onChange: e => r({
        comboSoundsEnabled: e
      })
    }), (0, i.jsxs)("div", {
      children: [(0, i.jsx)(c.Text, {
        variant: "text-md/semibold",
        color: a ? "text-muted" : "text-strong",
        className: f.KF,
        children: E.intl.string(E.t.L0oQuh)
      }), (0, i.jsx)(_, {
        children: E.intl.string(E.t["/OOFpL"])
      }), (0, i.jsx)(c.Apm, {
        disabled: a,
        markers: T,
        stickToMarkers: true,
        minValue: T[0],
        maxValue: T[T.length - 1],
        initialValue: l,
        onValueChange: e => r({
          combosRequiredCount: e
        }),
        onValueRender: e => "".concat(e)
      })]
    })]
  })
}

function D(e) {
  let {
    settings: {
      enabled: t,
      screenshakeEnabled: n,
      shakeIntensity: s,
      screenshakeEnabledLocations: l
    },
    updateSettings: a
  } = e, o = (0, r.bG)([d.A], () => d.A.useReducedMotion), u = !t || !n || o;
  return (0, i.jsxs)(c.nVY, {
    label: E.intl.string(E.t.wVS5Sd),
    children: [(0, i.jsx)(c.dOG, {
      label: E.intl.string(E.t.N004zO),
      description: o ? E.intl.string(E.t.GckHGw) : E.intl.string(E.t.Qq5W3v),
      checked: n && !o,
      disabled: !t || o,
      onChange: e => a({
        screenshakeEnabled: e
      }, 1)
    }), (0, i.jsxs)("div", {
      children: [(0, i.jsx)(c.Text, {
        variant: "text-md/semibold",
        color: u ? "text-muted" : "text-strong",
        className: f.KF,
        children: E.intl.string(E.t.UxnnC4)
      }), (0, i.jsx)(_, {
        children: E.intl.string(E.t.CEOEOb)
      }), (0, i.jsx)(c.Apm, {
        disabled: u,
        markers: C,
        equidistant: true,
        stickToMarkers: true,
        minValue: C[0],
        maxValue: C[C.length - 1],
        initialValue: s,
        onValueChange: e => {
          var t;
          null != (t = {
            shakeIntensity: e
          }).shakeIntensity && t.shakeIntensity > s && (0, p._)(A.sn.MORE), a(t, 1)
        },
        onMarkerRender: e => e === C[C.length - 1] ? E.intl.string(E.t["4rbMWc"]) : "".concat(100 * e, "%")
      })]
    }), (0, i.jsx)(I, {
      disabled: u,
      locations: [{
        location: S.uD.CHAT_INPUT,
        title: E.intl.string(E.t.vUcvPP),
        description: E.intl.string(E.t.y00OrF)
      }, {
        location: S.uD.VOICE_USER,
        title: E.intl.string(E.t.TcRO54),
        description: E.intl.string(E.t.YJCxVY)
      }, {
        location: S.uD.MENTION,
        title: E.intl.string(E.t.oW4shO),
        description: E.intl.string(E.t["mqfw/H"])
      }],
      settingsLocations: l,
      onChange: e => a({
        screenshakeEnabledLocations: e
      }, 1)
    })]
  })
}

function L(e) {
  let {
    updateSettings: t
  } = e;
  return (0, i.jsx)(c.nVY, {
    label: E.intl.string(E.t.EuXv2q),
    children: (0, i.jsxs)(c.BJc, {
      gap: 16,
      children: [(0, i.jsx)("div", {
        children: E.intl.string(E.t["1SLnki"])
      }), (0, i.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: f.hw,
        children: (0, i.jsx)(c.Button, {
          variant: "primary",
          size: "sm",
          text: E.intl.string(E.t.qz65yY),
          onClick: () => {
            t({
              enabled: false,
              settingsVisible: false
            }), (0, h.default)()
          }
        })
      })]
    })
  })
}

function k(e) {
  let {
    onChangePage: t
  } = e;
  return (0, i.jsxs)(c.DUT, {
    onClick: () => t(1),
    className: f.Tq,
    children: [(0, i.jsx)("div", {
      className: f.w1,
      children: (0, i.jsx)(c.OR, {
        size: "md",
        color: a.A.unsafe_rawColors.ORANGE_345.css
      })
    }), (0, i.jsxs)("div", {
      className: f.qL,
      children: [(0, i.jsx)(c.Heading, {
        variant: "heading-md/semibold",
        color: "text-strong",
        children: E.intl.string(E.t["6jI0hd"])
      }), (0, i.jsx)(c.Text, {
        variant: "text-md/normal",
        color: "text-default",
        children: E.intl.string(E.t.GuUItX)
      })]
    }), (0, i.jsx)(c._BQ, {
      size: "custom",
      color: "currentColor",
      width: 16,
      className: f.nT
    })]
  })
}
let w = () => n.e("4660").then(n.t.bind(n, 662336, 19)).then(e => {
  let {
    default: t
  } = e;
  return t
});

function V(e) {
  let {
    onChangePage: t,
    setShowEnableAnimation: n
  } = e, l = (0, r.cf)([j.A], () => j.A.getState()), [a, o] = s.useState({
    x: 0,
    y: 0
  }), d = (0, O.A)();

  function u(e, t, n, i) {
    return (null != t ? t : e) && (null != i ? i : n)
  }
  let h = (e, t) => {
      var i, s;
      if (e.enabled && false === l.enabled && (n(true), (0, g.Ak)("poggermode_enabled"), (0, x.fO)({
          duration: 2e3,
          intensity: null != (i = e.shakeIntensity) ? i : l.shakeIntensity
        })), (0, m.O9)(e), null == t) return;
      let r = u(l.confettiEnabled, e.confettiEnabled, l.enabled, e.enabled);
      0 === t && r && d.fire(a.x, a.y, {
        settings: e
      });
      let o = u(l.screenshakeEnabled, e.screenshakeEnabled, l.enabled, e.enabled);
      1 === t && o && (0, x.fO)({
        duration: 1e3,
        intensity: null != (s = e.shakeIntensity) ? s : l.shakeIntensity
      })
    },
    p = e => {
      o({
        x: e.clientX,
        y: e.clientY
      })
    };
  return s.useEffect(() => (window.addEventListener("mousemove", p), () => window.removeEventListener("mousemove", p)), []), (0, i.jsxs)(c.BJc, {
    gap: 24,
    children: [(0, i.jsx)(P, {
      settings: l,
      updateSettings: h
    }), (0, i.jsx)(k, {
      onChangePage: t
    }), (0, i.jsx)(R, {
      settings: l,
      updateSettings: h
    }), (0, i.jsx)(D, {
      settings: l,
      updateSettings: h
    }), (0, i.jsx)(G, {
      settings: l,
      updateSettings: h
    }), (0, i.jsx)(L, {
      updateSettings: h
    })]
  })
}
let M = e => 0 === e ? u.f.LEFT : u.f.RIGHT;

function U() {
  let [e, t] = s.useState(0), [n, l] = s.useState(M(e)), [a, o] = s.useState(false), g = (0, r.bG)([d.A], () => d.A.useReducedMotion), h = a && !g;
  return s.useEffect(() => {
    let t = setTimeout(() => {
      l(M(e))
    }, 500);
    return () => clearTimeout(t)
  }, [e]), s.useEffect(() => {
    Math.random() > .99 && (0, p._)(A.sn.VISITOR_100)
  }, []), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(u.A, {
      className: f.l3,
      step: e,
      direction: n,
      children: ((e, t, n) => {
        let s = e => () => {
          t(e)
        };
        switch (e) {
          case 0:
            return (0, i.jsx)(V, {
              onChangePage: s(1),
              setShowEnableAnimation: n
            });
          case 1:
            return (0, i.jsx)(b.A, {
              onBackClick: s(0)
            });
          default:
            return null
        }
      })(e, t, o)
    }), (0, i.jsx)("div", {
      className: h ? f.Sr : f.IP,
      children: (0, i.jsx)(c.akl, {
        className: f.gT,
        importData: w,
        shouldAnimate: h,
        autoplay: false,
        resetOnPlay: true,
        loop: false,
        onComplete: () => o(false)
      })
    })]
  })
}