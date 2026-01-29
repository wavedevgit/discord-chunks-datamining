/** Chunk was on 32502 **/
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
let C = {
    enabled: true,
    combosEnabled: true,
    screenshakeEnabled: false,
    confettiEnabled: false
  },
  v = (0, Chunk735438.range)(0, 11),
  y = (0, Chunk735438.range)(0, 2.25, .25),
  T = (0, Chunk735438.range)(1, 11),
  _ = (0, Chunk735438.range)(1, 26);

function N(e) {
  let {
    disabled: t,
    locations: n,
    settingsLocations: l,
    onChange: s
  } = e, r = n.map(e => (0, i.jsx)(c.dOG, {
    label: e.title,
    description: e.description,
    checked: l[e.location],
    disabled: t,
    onChange: t => {
      var n, i;
      return s((n = function(e) {
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
      }({}, l), i = i = {
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
    label: S.intl.string(S.t.bWVN1D),
    children: r
  })
}

function I(e) {
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
    updateSettings: l
  } = e, s = (0, r.bG)([d.A], () => d.A.useReducedMotion);
  return (0, i.jsx)(c.dOG, {
    label: S.intl.string(S.t.vuiXm9),
    description: S.intl.string(S.t.KuYbWN),
    checked: t,
    onChange: e => {
      e || (0, p._)(m.sn.DISABLE_POGGERMODE), e && (!n || s) ? (0, o.A)({
        title: s ? S.intl.string(S.t["FxT+p0"]) : S.intl.string(S.t.TAZ4F9),
        subtitle: s ? S.intl.string(S.t.gmixrx) : S.intl.string(S.t.jN3t3K),
        confirmText: S.intl.string(S.t.JFfins),
        onConfirm: () => l(s ? C : {
          enabled: true,
          warningSeen: true
        })
      }) : l({
        enabled: e
      })
    }
  })
}

function R(e) {
  let {
    settings: {
      enabled: t,
      confettiEnabled: n,
      confettiCount: l,
      confettiSize: s,
      confettiEnabledLocations: r
    },
    updateSettings: a
  } = e, o = !t || !n;
  return (0, i.jsxs)(c.nVY, {
    label: S.intl.string(S.t.mqxwJO),
    children: [(0, i.jsx)(c.dOG, {
      label: S.intl.string(S.t.s0KCgF),
      description: S.intl.string(S.t.O1Vflg),
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
        children: S.intl.string(S.t.vd0D81)
      }), (0, i.jsx)(I, {
        children: S.intl.string(S.t.a18Sug)
      }), (0, i.jsx)(c.Apm, {
        disabled: o,
        markers: T,
        stickToMarkers: true,
        minValue: T[0],
        maxValue: T[T.length - 1],
        initialValue: l,
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
        children: S.intl.string(S.t.sPO3ij)
      }), (0, i.jsx)(I, {
        children: S.intl.string(S.t.xoldVn)
      }), (0, i.jsx)(c.Apm, {
        disabled: o,
        markers: _,
        stickToMarkers: true,
        minValue: _[0],
        maxValue: _[_.length - 1],
        initialValue: s,
        onValueChange: e => a({
          confettiSize: e
        }, 0),
        onValueRender: e => "".concat(e)
      })]
    }), (0, i.jsx)(N, {
      disabled: o,
      locations: [{
        location: E.k.CHAT_INPUT,
        title: S.intl.string(S.t.elTtyz),
        description: S.intl.string(S.t.HtKfMi)
      }, {
        location: E.k.REACTION,
        title: S.intl.string(S.t.Ik4VIa),
        description: S.intl.string(S.t.y4rqK0)
      }, {
        location: E.k.MEMBER_USER,
        title: S.intl.string(S.t.ZXBlAn),
        description: S.intl.string(S.t["m9RD+c"])
      }, {
        location: E.k.CALL_TILE,
        title: S.intl.string(S.t.V66giQ),
        description: S.intl.string(S.t.fiHV7u)
      }],
      settingsLocations: r,
      onChange: e => a({
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
      comboSoundsEnabled: l,
      combosRequiredCount: s
    },
    updateSettings: r
  } = e, a = !t || !n;
  return (0, i.jsxs)(c.nVY, {
    label: S.intl.string(S.t.Xz0ole),
    children: [(0, i.jsx)(c.dOG, {
      label: S.intl.string(S.t.o3iV7B),
      description: S.intl.string(S.t["31Z8Ee"]),
      checked: n,
      disabled: !t,
      onChange: e => r({
        combosEnabled: e
      })
    }), (0, i.jsx)(c.dOG, {
      label: S.intl.string(S.t["Ax+IoW"]),
      description: S.intl.string(S.t["9rgQEr"]),
      checked: l,
      disabled: !t,
      onChange: e => r({
        comboSoundsEnabled: e
      })
    }), (0, i.jsxs)("div", {
      children: [(0, i.jsx)(c.Text, {
        variant: "text-md/semibold",
        color: a ? "text-muted" : "text-strong",
        className: f.KF,
        children: S.intl.string(S.t.L0oQuh)
      }), (0, i.jsx)(I, {
        children: S.intl.string(S.t["/OOFpL"])
      }), (0, i.jsx)(c.Apm, {
        disabled: a,
        markers: v,
        stickToMarkers: true,
        minValue: v[0],
        maxValue: v[v.length - 1],
        initialValue: s,
        onValueChange: e => r({
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
      shakeIntensity: l,
      screenshakeEnabledLocations: s
    },
    updateSettings: a
  } = e, o = (0, r.bG)([d.A], () => d.A.useReducedMotion), u = !t || !n || o;
  return (0, i.jsxs)(c.nVY, {
    label: S.intl.string(S.t.wVS5Sd),
    children: [(0, i.jsx)(c.dOG, {
      label: S.intl.string(S.t.N004zO),
      description: o ? S.intl.string(S.t.GckHGw) : S.intl.string(S.t.Qq5W3v),
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
        children: S.intl.string(S.t.UxnnC4)
      }), (0, i.jsx)(I, {
        children: S.intl.string(S.t.CEOEOb)
      }), (0, i.jsx)(c.Apm, {
        disabled: u,
        markers: y,
        equidistant: true,
        stickToMarkers: true,
        minValue: y[0],
        maxValue: y[y.length - 1],
        initialValue: l,
        onValueChange: e => {
          var t;
          null != (t = {
            shakeIntensity: e
          }).shakeIntensity && t.shakeIntensity > l && (0, p._)(m.sn.MORE), a(t, 1)
        },
        onMarkerRender: e => e === y[y.length - 1] ? S.intl.string(S.t["4rbMWc"]) : "".concat(100 * e, "%")
      })]
    }), (0, i.jsx)(N, {
      disabled: u,
      locations: [{
        location: E.uD.CHAT_INPUT,
        title: S.intl.string(S.t.vUcvPP),
        description: S.intl.string(S.t.y00OrF)
      }, {
        location: E.uD.VOICE_USER,
        title: S.intl.string(S.t.TcRO54),
        description: S.intl.string(S.t.YJCxVY)
      }, {
        location: E.uD.MENTION,
        title: S.intl.string(S.t.oW4shO),
        description: S.intl.string(S.t["mqfw/H"])
      }],
      settingsLocations: s,
      onChange: e => a({
        screenshakeEnabledLocations: e
      }, 1)
    })]
  })
}

function D(e) {
  let {
    updateSettings: t
  } = e;
  return (0, i.jsx)(c.nVY, {
    label: S.intl.string(S.t.EuXv2q),
    children: (0, i.jsxs)(c.BJc, {
      gap: 16,
      children: [(0, i.jsx)("div", {
        children: S.intl.string(S.t["1SLnki"])
      }), (0, i.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: f.hw,
        children: (0, i.jsx)(c.Button, {
          variant: "primary",
          size: "sm",
          text: S.intl.string(S.t.qz65yY),
          onClick: () => {
            t({
              enabled: false,
              settingsVisible: false
            }), (0, g.default)()
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
        children: S.intl.string(S.t["6jI0hd"])
      }), (0, i.jsx)(c.Text, {
        variant: "text-md/normal",
        color: "text-default",
        children: S.intl.string(S.t.GuUItX)
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
  } = e, s = (0, r.cf)([b.A], () => b.A.getState()), [a, o] = l.useState({
    x: 0,
    y: 0
  }), d = (0, O.A)();

  function u(e, t, n, i) {
    return (null != t ? t : e) && (null != i ? i : n)
  }
  let g = (e, t) => {
      var i, l;
      if (e.enabled && false === s.enabled && (n(true), (0, h.Ak)("poggermode_enabled"), (0, x.fO)({
          duration: 2e3,
          intensity: null != (i = e.shakeIntensity) ? i : s.shakeIntensity
        })), (0, A.O9)(e), null == t) return;
      let r = u(s.confettiEnabled, e.confettiEnabled, s.enabled, e.enabled);
      0 === t && r && d.fire(a.x, a.y, {
        settings: e
      });
      let o = u(s.screenshakeEnabled, e.screenshakeEnabled, s.enabled, e.enabled);
      1 === t && o && (0, x.fO)({
        duration: 1e3,
        intensity: null != (l = e.shakeIntensity) ? l : s.shakeIntensity
      })
    },
    p = e => {
      o({
        x: e.clientX,
        y: e.clientY
      })
    };
  return l.useEffect(() => (window.addEventListener("mousemove", p), () => window.removeEventListener("mousemove", p)), []), (0, i.jsxs)(c.BJc, {
    gap: 24,
    children: [(0, i.jsx)(P, {
      settings: s,
      updateSettings: g
    }), (0, i.jsx)(k, {
      onChangePage: t
    }), (0, i.jsx)(L, {
      settings: s,
      updateSettings: g
    }), (0, i.jsx)(G, {
      settings: s,
      updateSettings: g
    }), (0, i.jsx)(R, {
      settings: s,
      updateSettings: g
    }), (0, i.jsx)(D, {
      updateSettings: g
    })]
  })
}
let M = e => 0 === e ? u.f.LEFT : u.f.RIGHT;

function U() {
  let [e, t] = l.useState(0), [n, s] = l.useState(M(e)), [a, o] = l.useState(false), h = (0, r.bG)([d.A], () => d.A.useReducedMotion), g = a && !h;
  return l.useEffect(() => {
    let t = setTimeout(() => {
      s(M(e))
    }, 500);
    return () => clearTimeout(t)
  }, [e]), l.useEffect(() => {
    Math.random() > .99 && (0, p._)(m.sn.VISITOR_100)
  }, []), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(u.A, {
      className: f.l3,
      step: e,
      direction: n,
      children: ((e, t, n) => {
        let l = e => () => {
          t(e)
        };
        switch (e) {
          case 0:
            return (0, i.jsx)(V, {
              onChangePage: l(1),
              setShowEnableAnimation: n
            });
          case 1:
            return (0, i.jsx)(j.A, {
              onBackClick: l(0)
            });
          default:
            return null
        }
      })(e, t, o)
    }), (0, i.jsx)("div", {
      className: g ? f.Sr : f.IP,
      children: (0, i.jsx)(c.akl, {
        className: f.gT,
        importData: w,
        shouldAnimate: g,
        autoplay: false,
        resetOnPlay: true,
        loop: false,
        onComplete: () => o(false)
      })
    })]
  })
}