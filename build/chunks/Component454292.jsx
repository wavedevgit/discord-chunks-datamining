/** Chunk was on 42402 **/
/** chunk id: 454292, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => V
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
  E = (0, Chunk735438.range)(0, 11),
  C = (0, Chunk735438.range)(0, 2.25, .25),
  S = (0, Chunk735438.range)(1, 11),
  I = (0, Chunk735438.range)(1, 26);

function N(e) {
  let {
    disabled: t,
    locations: n,
    settingsLocations: l,
    onChange: i
  } = e, s = n.map(e => (0, r.jsx)(c.dOG, {
    label: e.title,
    description: e.description,
    checked: l[e.location],
    disabled: t,
    onChange: t => {
      var n, r;
      return i((n = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = r
          })
        }
        return e
      }({}, l), r = r = {
        [e.location]: t
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(r)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
      }), n))
    }
  }, e.location));
  return (0, r.jsx)(c.nVY, {
    label: x.intl.string(x.t.bWVN1D),
    children: s
  })
}

function T(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)(c.Text, {
    className: _.iF,
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
  } = e, i = (0, s.bG)([u.A], () => u.A.useReducedMotion);
  return (0, r.jsx)(c.dOG, {
    label: x.intl.string(x.t.vuiXm9),
    description: x.intl.string(x.t.KuYbWN),
    checked: t,
    onChange: e => {
      e || (0, f._)(m.sn.DISABLE_POGGERMODE), e && (!n || i) ? (0, o.A)({
        title: i ? x.intl.string(x.t["FxT+p0"]) : x.intl.string(x.t.TAZ4F9),
        subtitle: i ? x.intl.string(x.t.gmixrx) : x.intl.string(x.t.jN3t3K),
        confirmText: x.intl.string(x.t.JFfins),
        onConfirm: () => l(i ? v : {
          enabled: true,
          warningSeen: true
        })
      }) : l({
        enabled: e
      })
    }
  })
}

function w(e) {
  let {
    settings: {
      enabled: t,
      confettiEnabled: n,
      confettiCount: l,
      confettiSize: i,
      confettiEnabledLocations: s
    },
    updateSettings: a
  } = e, o = !t || !n;
  return (0, r.jsxs)(c.nVY, {
    label: x.intl.string(x.t.mqxwJO),
    children: [(0, r.jsx)(c.dOG, {
      label: x.intl.string(x.t.s0KCgF),
      description: x.intl.string(x.t.O1Vflg),
      checked: n,
      disabled: !t,
      onChange: e => a({
        confettiEnabled: e
      }, 0)
    }), (0, r.jsxs)("div", {
      children: [(0, r.jsx)(c.Text, {
        variant: "text-md/semibold",
        color: o ? "text-muted" : "text-strong",
        className: _.KF,
        children: x.intl.string(x.t.vd0D81)
      }), (0, r.jsx)(T, {
        children: x.intl.string(x.t.a18Sug)
      }), (0, r.jsx)(c.Apm, {
        disabled: o,
        markers: S,
        stickToMarkers: true,
        minValue: S[0],
        maxValue: S[S.length - 1],
        initialValue: l,
        onValueChange: e => a({
          confettiCount: e
        }, 0),
        onValueRender: e => "".concat(e)
      })]
    }), (0, r.jsxs)("div", {
      children: [(0, r.jsx)(c.Text, {
        variant: "text-md/semibold",
        color: o ? "text-muted" : "text-strong",
        className: _.KF,
        children: x.intl.string(x.t.sPO3ij)
      }), (0, r.jsx)(T, {
        children: x.intl.string(x.t.xoldVn)
      }), (0, r.jsx)(c.Apm, {
        disabled: o,
        markers: I,
        stickToMarkers: true,
        minValue: I[0],
        maxValue: I[I.length - 1],
        initialValue: i,
        onValueChange: e => a({
          confettiSize: e
        }, 0),
        onValueRender: e => "".concat(e)
      })]
    }), (0, r.jsx)(N, {
      disabled: o,
      locations: [{
        location: j.k.CHAT_INPUT,
        title: x.intl.string(x.t.elTtyz),
        description: x.intl.string(x.t.HtKfMi)
      }, {
        location: j.k.REACTION,
        title: x.intl.string(x.t.Ik4VIa),
        description: x.intl.string(x.t.y4rqK0)
      }, {
        location: j.k.MEMBER_USER,
        title: x.intl.string(x.t.ZXBlAn),
        description: x.intl.string(x.t["m9RD+c"])
      }, {
        location: j.k.CALL_TILE,
        title: x.intl.string(x.t.V66giQ),
        description: x.intl.string(x.t.fiHV7u)
      }],
      settingsLocations: s,
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
      comboSoundsEnabled: l,
      combosRequiredCount: i
    },
    updateSettings: s
  } = e, a = !t || !n;
  return (0, r.jsxs)(c.nVY, {
    label: x.intl.string(x.t.Xz0ole),
    children: [(0, r.jsx)(c.dOG, {
      label: x.intl.string(x.t.o3iV7B),
      description: x.intl.string(x.t["31Z8Ee"]),
      checked: n,
      disabled: !t,
      onChange: e => s({
        combosEnabled: e
      })
    }), (0, r.jsx)(c.dOG, {
      label: x.intl.string(x.t["Ax+IoW"]),
      description: x.intl.string(x.t["9rgQEr"]),
      checked: l,
      disabled: !t,
      onChange: e => s({
        comboSoundsEnabled: e
      })
    }), (0, r.jsxs)("div", {
      children: [(0, r.jsx)(c.Text, {
        variant: "text-md/semibold",
        color: a ? "text-muted" : "text-strong",
        className: _.KF,
        children: x.intl.string(x.t.L0oQuh)
      }), (0, r.jsx)(T, {
        children: x.intl.string(x.t["/OOFpL"])
      }), (0, r.jsx)(c.Apm, {
        disabled: a,
        markers: E,
        stickToMarkers: true,
        minValue: E[0],
        maxValue: E[E.length - 1],
        initialValue: i,
        onValueChange: e => s({
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
      shakeIntensity: l,
      screenshakeEnabledLocations: i
    },
    updateSettings: a
  } = e, o = (0, s.bG)([u.A], () => u.A.useReducedMotion), d = !t || !n || o;
  return (0, r.jsxs)(c.nVY, {
    label: x.intl.string(x.t.wVS5Sd),
    children: [(0, r.jsx)(c.dOG, {
      label: x.intl.string(x.t.N004zO),
      description: o ? x.intl.string(x.t.GckHGw) : x.intl.string(x.t.Qq5W3v),
      checked: n && !o,
      disabled: !t || o,
      onChange: e => a({
        screenshakeEnabled: e
      }, 1)
    }), (0, r.jsxs)("div", {
      children: [(0, r.jsx)(c.Text, {
        variant: "text-md/semibold",
        color: d ? "text-muted" : "text-strong",
        className: _.KF,
        children: x.intl.string(x.t.UxnnC4)
      }), (0, r.jsx)(T, {
        children: x.intl.string(x.t.CEOEOb)
      }), (0, r.jsx)(c.Apm, {
        disabled: d,
        markers: C,
        equidistant: true,
        stickToMarkers: true,
        minValue: C[0],
        maxValue: C[C.length - 1],
        initialValue: l,
        onValueChange: e => {
          var t;
          null != (t = {
            shakeIntensity: e
          }).shakeIntensity && t.shakeIntensity > l && (0, f._)(m.sn.MORE), a(t, 1)
        },
        onMarkerRender: e => e === C[C.length - 1] ? x.intl.string(x.t["4rbMWc"]) : "".concat(100 * e, "%")
      })]
    }), (0, r.jsx)(N, {
      disabled: d,
      locations: [{
        location: j.uD.CHAT_INPUT,
        title: x.intl.string(x.t.vUcvPP),
        description: x.intl.string(x.t.y00OrF)
      }, {
        location: j.uD.VOICE_USER,
        title: x.intl.string(x.t.TcRO54),
        description: x.intl.string(x.t.YJCxVY)
      }, {
        location: j.uD.MENTION,
        title: x.intl.string(x.t.oW4shO),
        description: x.intl.string(x.t["mqfw/H"])
      }],
      settingsLocations: i,
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
  return (0, r.jsx)(c.nVY, {
    label: x.intl.string(x.t.EuXv2q),
    children: (0, r.jsxs)(c.BJc, {
      gap: 16,
      children: [(0, r.jsx)("div", {
        children: x.intl.string(x.t["1SLnki"])
      }), (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: _.hw,
        children: (0, r.jsx)(c.Button, {
          variant: "primary",
          size: "sm",
          text: x.intl.string(x.t.qz65yY),
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

function M(e) {
  let {
    onChangePage: t
  } = e;
  return (0, r.jsxs)(c.DUT, {
    onClick: () => t(1),
    className: _.Tq,
    children: [(0, r.jsx)("div", {
      className: _.w1,
      children: (0, r.jsx)(c.OR, {
        size: "md",
        color: a.A.unsafe_rawColors.ORANGE_345.css
      })
    }), (0, r.jsxs)("div", {
      className: _.qL,
      children: [(0, r.jsx)(c.Heading, {
        variant: "heading-md/semibold",
        color: "text-strong",
        children: x.intl.string(x.t["6jI0hd"])
      }), (0, r.jsx)(c.Text, {
        variant: "text-md/normal",
        color: "text-default",
        children: x.intl.string(x.t.GuUItX)
      })]
    }), (0, r.jsx)(c._BQ, {
      size: "custom",
      color: "currentColor",
      width: 16,
      className: _.nT
    })]
  })
}
let G = () => n.e("4660").then(n.t.bind(n, 662336, 19)).then(e => {
  let {
    default: t
  } = e;
  return t
});

function k(e) {
  let {
    onChangePage: t,
    setShowEnableAnimation: n
  } = e, i = (0, s.cf)([A.A], () => A.A.getState()), [a, o] = l.useState({
    x: 0,
    y: 0
  }), u = (0, O.A)();

  function d(e, t, n, r) {
    return (null != t ? t : e) && (null != r ? r : n)
  }
  let h = (e, t) => {
      var r, l;
      if (e.enabled && false === i.enabled && (n(true), (0, p.Ak)("poggermode_enabled"), (0, g.fO)({
          duration: 2e3,
          intensity: null != (r = e.shakeIntensity) ? r : i.shakeIntensity
        })), (0, b.O9)(e), null == t) return;
      let s = d(i.confettiEnabled, e.confettiEnabled, i.enabled, e.enabled);
      0 === t && s && u.fire(a.x, a.y, {
        settings: e
      });
      let o = d(i.screenshakeEnabled, e.screenshakeEnabled, i.enabled, e.enabled);
      1 === t && o && (0, g.fO)({
        duration: 1e3,
        intensity: null != (l = e.shakeIntensity) ? l : i.shakeIntensity
      })
    },
    f = e => {
      o({
        x: e.clientX,
        y: e.clientY
      })
    };
  return l.useEffect(() => (window.addEventListener("mousemove", f), () => window.removeEventListener("mousemove", f)), []), (0, r.jsxs)(c.BJc, {
    gap: 24,
    children: [(0, r.jsx)(P, {
      settings: i,
      updateSettings: h
    }), (0, r.jsx)(M, {
      onChangePage: t
    }), (0, r.jsx)(R, {
      settings: i,
      updateSettings: h
    }), (0, r.jsx)(D, {
      settings: i,
      updateSettings: h
    }), (0, r.jsx)(w, {
      settings: i,
      updateSettings: h
    }), (0, r.jsx)(L, {
      updateSettings: h
    })]
  })
}
let U = e => 0 === e ? d.f.LEFT : d.f.RIGHT;

function V() {
  let [e, t] = l.useState(0), [n, i] = l.useState(U(e)), [a, o] = l.useState(false), p = (0, s.bG)([u.A], () => u.A.useReducedMotion), h = a && !p;
  return l.useEffect(() => {
    let t = setTimeout(() => {
      i(U(e))
    }, 500);
    return () => clearTimeout(t)
  }, [e]), l.useEffect(() => {
    Math.random() > .99 && (0, f._)(m.sn.VISITOR_100)
  }, []), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(d.A, {
      className: _.l3,
      step: e,
      direction: n,
      children: ((e, t, n) => {
        let l = e => () => {
          t(e)
        };
        switch (e) {
          case 0:
            return (0, r.jsx)(k, {
              onChangePage: l(1),
              setShowEnableAnimation: n
            });
          case 1:
            return (0, r.jsx)(y.A, {
              onBackClick: l(0)
            });
          default:
            return null
        }
      })(e, t, o)
    }), (0, r.jsx)("div", {
      className: h ? _.Sr : _.IP,
      children: (0, r.jsx)(c.akl, {
        className: _.gT,
        importData: G,
        shouldAnimate: h,
        autoplay: false,
        resetOnPlay: true,
        loop: false,
        onComplete: () => o(false)
      })
    })]
  })
}