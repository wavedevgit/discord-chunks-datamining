/** Chunk was on 20447 **/
n.d(t, {
  Z: () => H
}), n(266796), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(392711),
  a = n(442837),
  o = n(692547),
  l = n(481060),
  c = n(37234),
  d = n(607070),
  u = n(578361),
  m = n(460181),
  g = n(585483),
  p = n(57562),
  h = n(955204),
  f = n(64078),
  N = n(351780),
  b = n(954794),
  x = n(112843),
  _ = n(524484),
  E = n(981631),
  j = n(388032),
  O = n(259622);

function C(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r
    })
  }
  return e
}

function S(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let v = {
    enabled: !0,
    combosEnabled: !0,
    screenshakeEnabled: !1,
    confettiEnabled: !1
  },
  T = (0, s.range)(0, 11),
  I = (0, s.range)(0, 2.25, .25),
  y = (0, s.range)(1, 11),
  A = (0, s.range)(1, 26),
  P = () => [{
    location: _.Hn.CHAT_INPUT,
    title: j.NW.string(j.t.elTty8),
    description: j.NW.string(j.t.HtKfMj)
  }, {
    location: _.Hn.REACTION,
    title: j.NW.string(j.t.Ik4VIS),
    description: j.NW.string(j.t.y4rqKy)
  }, {
    location: _.Hn.MEMBER_USER,
    title: j.NW.string(j.t.ZXBlAg),
    description: j.NW.string(j.t["m9RD+f"])
  }, {
    location: _.Hn.CALL_TILE,
    title: j.NW.string(j.t.V66giY),
    description: j.NW.string(j.t.fiHV7u)
  }],
  R = () => [{
    location: _.oZ.CHAT_INPUT,
    title: j.NW.string(j.t.vUcvPD),
    description: j.NW.string(j.t.y00OrK)
  }, {
    location: _.oZ.VOICE_USER,
    title: j.NW.string(j.t["TcRO5+"]),
    description: j.NW.string(j.t.YJCxVV)
  }, {
    location: _.oZ.MENTION,
    title: j.NW.string(j.t.oW4shI),
    description: j.NW.string(j.t["mqfw/P"])
  }];

function D(e) {
  let {
    disabled: t,
    locations: n,
    settingsLocations: i,
    onChange: s
  } = e, a = n.map(e => (0, r.jsx)(l.j7V, {
    disabled: t,
    value: i[e.location],
    note: e.description,
    onChange: t => s(S(C({}, i), {
      [e.location]: t
    })),
    children: e.title
  }, e.location));
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(l.vwX, {
      children: j.NW.string(j.t.bWVN1N)
    }), a]
  })
}

function Z(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)(l.Text, {
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
    updateSettings: i
  } = e, s = (0, a.e7)([d.Z], () => d.Z.useReducedMotion);
  return (0, r.jsx)(l.j7V, {
    value: t,
    note: j.NW.string(j.t.KuYbWF),
    onChange: e => {
      e || (0, p.T)(h.hn.DISABLE_POGGERMODE), e && (!n || s) ? (0, l.h7j)(e => (0, r.jsx)(l.ConfirmModal, S(C({
        header: s ? j.NW.string(j.t["FxT+p6"]) : j.NW.string(j.t.TAZ4Fx),
        confirmText: j.NW.string(j.t.JFfinp),
        cancelText: j.NW.string(j.t["ETE/oK"]),
        onConfirm: () => i(s ? v : {
          enabled: !0,
          warningSeen: !0
        })
      }, e), {
        children: (0, r.jsx)(l.Text, {
          variant: "text-md/normal",
          children: s ? j.NW.string(j.t.gmixr6) : j.NW.string(j.t.jN3t3N)
        })
      }))) : i({
        enabled: e
      })
    },
    children: j.NW.string(j.t.vuiXm5)
  })
}

function k(e) {
  let {
    settings: {
      enabled: t,
      confettiEnabled: n,
      confettiCount: i,
      confettiSize: s,
      confettiEnabledLocations: a
    },
    updateSettings: o
  } = e, c = !t || !n;
  return (0, r.jsxs)(l.hjN, {
    tag: l.RB0.H1,
    title: j.NW.string(j.t.mqxwJC),
    children: [(0, r.jsx)(l.j7V, {
      disabled: !t,
      value: n,
      note: j.NW.string(j.t.O1Vflp),
      onChange: e => o({
        confettiEnabled: e
      }, 0),
      children: j.NW.string(j.t.s0KCgI)
    }), (0, r.jsxs)(l.xJW, {
      disabled: c,
      title: j.NW.string(j.t["vd0D8/"]),
      className: O.formItem,
      children: [(0, r.jsx)(Z, {
        children: j.NW.string(j.t.a18Sur)
      }), (0, r.jsx)(l.iRW, {
        disabled: c,
        markers: y,
        stickToMarkers: !0,
        minValue: y[0],
        maxValue: y[y.length - 1],
        initialValue: i,
        onValueChange: e => o({
          confettiCount: e
        }, 0),
        onValueRender: e => "".concat(e)
      })]
    }), (0, r.jsxs)(l.xJW, {
      disabled: c,
      title: j.NW.string(j.t.sPO3io),
      className: O.formItem,
      children: [(0, r.jsx)(Z, {
        children: j.NW.string(j.t.xoldVl)
      }), (0, r.jsx)(l.iRW, {
        disabled: c,
        markers: A,
        stickToMarkers: !0,
        minValue: A[0],
        maxValue: A[A.length - 1],
        initialValue: s,
        onValueChange: e => o({
          confettiSize: e
        }, 0),
        onValueRender: e => "".concat(e)
      })]
    }), (0, r.jsx)(D, {
      disabled: c,
      locations: P(),
      settingsLocations: a,
      onChange: e => o({
        confettiEnabledLocations: e
      }, 0)
    })]
  })
}

function W(e) {
  let {
    settings: {
      enabled: t,
      combosEnabled: n,
      comboSoundsEnabled: i,
      combosRequiredCount: s
    },
    updateSettings: a
  } = e, o = !t || !n;
  return (0, r.jsxs)(l.hjN, {
    tag: l.RB0.H1,
    title: j.NW.string(j.t.Xz0olZ),
    children: [(0, r.jsx)(l.j7V, {
      disabled: !t,
      value: n,
      note: j.NW.string(j.t["31Z8ER"]),
      onChange: e => a({
        combosEnabled: e
      }),
      children: j.NW.string(j.t.o3iV7O)
    }), (0, r.jsx)(l.j7V, {
      disabled: !t,
      value: i,
      note: j.NW.string(j.t["9rgQEh"]),
      onChange: e => a({
        comboSoundsEnabled: e
      }),
      children: j.NW.string(j.t["Ax+Ioa"])
    }), (0, r.jsxs)(l.xJW, {
      disabled: o,
      title: j.NW.string(j.t.L0oQur),
      className: O.formItem,
      children: [(0, r.jsx)(Z, {
        children: j.NW.string(j.t["/OOFpK"])
      }), (0, r.jsx)(l.iRW, {
        disabled: o,
        markers: T,
        stickToMarkers: !0,
        minValue: T[0],
        maxValue: T[T.length - 1],
        initialValue: s,
        onValueChange: e => a({
          combosRequiredCount: e
        }),
        onValueRender: e => "".concat(e)
      })]
    }), (0, r.jsx)(l.$i$, {
      className: O.divider
    })]
  })
}

function L(e) {
  let {
    settings: {
      enabled: t,
      screenshakeEnabled: n,
      shakeIntensity: i,
      screenshakeEnabledLocations: s
    },
    updateSettings: o
  } = e, c = (0, a.e7)([d.Z], () => d.Z.useReducedMotion), u = !t || !n || c, m = (e, t) => {
    null != e.shakeIntensity && e.shakeIntensity > i && (0, p.T)(h.hn.MORE), o(e, t)
  };
  return (0, r.jsxs)(l.hjN, {
    tag: l.RB0.H1,
    title: j.NW.string(j.t.wVS5SU),
    children: [(0, r.jsx)(l.j7V, {
      disabled: !t || c,
      tooltipNote: c ? j.NW.string(j.t.GckHGx) : null,
      value: n && !c,
      note: j.NW.string(j.t.Qq5W3t),
      onChange: e => o({
        screenshakeEnabled: e
      }, 1),
      children: j.NW.string(j.t.N004zM)
    }), (0, r.jsxs)(l.xJW, {
      disabled: u,
      title: j.NW.string(j.t.UxnnCw),
      className: O.formItem,
      children: [(0, r.jsx)(Z, {
        children: j.NW.string(j.t.CEOEOT)
      }), (0, r.jsx)(l.iRW, {
        disabled: u,
        markers: I,
        equidistant: !0,
        stickToMarkers: !0,
        minValue: I[0],
        maxValue: I[I.length - 1],
        initialValue: i,
        onValueChange: e => m({
          shakeIntensity: e
        }, 1),
        onMarkerRender: e => e === I[I.length - 1] ? j.NW.string(j.t["4rbMWV"]) : "".concat(100 * e, "%")
      })]
    }), (0, r.jsx)(D, {
      disabled: u,
      locations: R(),
      settingsLocations: s,
      onChange: e => o({
        screenshakeEnabledLocations: e
      }, 1)
    })]
  })
}

function B(e) {
  let {
    updateSettings: t
  } = e;
  return (0, r.jsx)(l.hjN, {
    tag: l.RB0.H1,
    title: j.NW.string(j.t.EuXv2t),
    children: (0, r.jsxs)(l.xJW, {
      className: O.formItem,
      children: [(0, r.jsx)(l.R94, {
        className: O.formItem,
        children: j.NW.string(j.t["1SLnkp"])
      }), (0, r.jsx)(l.zxk, {
        className: O.hideButton,
        size: l.zxk.Sizes.SMALL,
        onClick: () => {
          t({
            enabled: !1,
            settingsVisible: !1
          }), (0, c.xf)()
        },
        children: j.NW.string(j.t.qz65yc)
      })]
    })
  })
}

function M(e) {
  let {
    onChangePage: t
  } = e;
  return (0, r.jsxs)(l.hjN, {
    children: [(0, r.jsxs)(l.P3F, {
      onClick: () => t(1),
      className: O.achievementContainer,
      children: [(0, r.jsx)("div", {
        className: O.achievementIconContainer,
        children: (0, r.jsx)(l.rm8, {
          size: "md",
          color: o.Z.unsafe_rawColors.ORANGE_345.css
        })
      }), (0, r.jsxs)("div", {
        className: O.achievementTextContainer,
        children: [(0, r.jsx)(l.X6q, {
          variant: "heading-md/semibold",
          color: "header-primary",
          children: j.NW.string(j.t["6jI0hY"])
        }), (0, r.jsx)(l.Text, {
          variant: "text-md/normal",
          color: "header-secondary",
          children: j.NW.string(j.t.GuUItb)
        })]
      }), (0, r.jsx)(l.Fbu, {
        size: "custom",
        color: "currentColor",
        width: 16,
        className: O.rightCaretIcon
      })]
    }), (0, r.jsx)(l.$i$, {
      className: O.divider
    })]
  })
}
let U = () => n.e("68170").then(n.t.bind(n, 205663, 19)).then(e => {
  let {
    default: t
  } = e;
  return t
});

function V(e) {
  let {
    onChangePage: t,
    setShowEnableAnimation: n
  } = e, s = (0, a.cj)([N.Z], () => N.Z.getState()), [o, c] = i.useState({
    x: 0,
    y: 0
  }), d = (0, x.Z)();

  function u(e, t, n, r) {
    return (null != t ? t : e) && (null != r ? r : n)
  }
  let p = e => {
      if (e.enabled && !1 === s.enabled) {
        var t;
        n(!0), (0, m.GN)("poggermode_enabled"), g.S.dispatch(E.CkL.SHAKE_APP, {
          duration: 2e3,
          intensity: null !== (t = e.shakeIntensity) && void 0 !== t ? t : s.shakeIntensity
        })
      }
    },
    h = (e, t) => {
      if (p(e), (0, f.AI)(e), null == t) return;
      let n = u(s.confettiEnabled, e.confettiEnabled, s.enabled, e.enabled);
      0 === t && n && d.fire(o.x, o.y, {
        settings: e
      });
      let r = u(s.screenshakeEnabled, e.screenshakeEnabled, s.enabled, e.enabled);
      if (1 === t && r) {
        var i;
        g.S.dispatch(E.CkL.SHAKE_APP, {
          duration: 1e3,
          intensity: null !== (i = e.shakeIntensity) && void 0 !== i ? i : s.shakeIntensity
        })
      }
    },
    b = e => {
      c({
        x: e.clientX,
        y: e.clientY
      })
    };
  return i.useEffect(() => (window.addEventListener("mousemove", b), () => window.removeEventListener("mousemove", b)), []), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(l.X6q, {
      variant: "heading-lg/semibold",
      className: O.title,
      children: j.NW.string(j.t.AtCukJ)
    }), (0, r.jsx)(w, {
      settings: s,
      updateSettings: h
    }), (0, r.jsx)(M, {
      onChangePage: t
    }), (0, r.jsx)(W, {
      settings: s,
      updateSettings: h
    }), (0, r.jsx)(L, {
      settings: s,
      updateSettings: h
    }), (0, r.jsx)(k, {
      settings: s,
      updateSettings: h
    }), (0, r.jsx)(B, {
      updateSettings: h
    })]
  })
}
let G = (e, t, n) => {
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
        return (0, r.jsx)(b.Z, {
          onBackClick: i(0)
        });
      default:
        return null
    }
  },
  F = e => 0 === e ? u.n.LEFT : u.n.RIGHT;

function H() {
  let [e, t] = i.useState(0), [n, s] = i.useState(F(e)), [o, c] = i.useState(!1), m = (0, a.e7)([d.Z], () => d.Z.useReducedMotion), g = o && !m;
  return i.useEffect(() => {
    let t = setTimeout(() => {
      s(F(e))
    }, 500);
    return () => clearTimeout(t)
  }, [e]), i.useEffect(() => {
    Math.random() > .99 && (0, p.T)(h.hn.VISITOR_100)
  }, []), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(u.Z, {
      className: O.slideAnimator,
      step: e,
      direction: n,
      children: G(e, t, c)
    }), (0, r.jsx)("div", {
      className: g ? O.enableAnimationOverlayVisible : O.enableAnimationOverlayHidden,
      children: (0, r.jsx)(l.Fmz, {
        className: O.enableAnimation,
        importData: U,
        shouldAnimate: g,
        autoplay: !1,
        resetOnPlay: !0,
        loop: !1,
        onComplete: () => c(!1)
      })
    })]
  })
}