/** Chunk was on 20941 **/
/** chunk id: 531502, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => W
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  i = require.n(Chunk735438),
  Chunk970984 = require("./970984.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk499979 = require("./499979.js"),
  Chunk397927 = require("./397927.js"),
  Chunk565645 = require("./565645.jsx"),
  Chunk775602 = require("./775602.js"),
  Chunk291661 = require("./291661.jsx"),
  Chunk7584 = require("./7584.js"),
  Chunk263063 = require("./263063.jsx"),
  Chunk71393 = require("./71393.js"),
  Chunk287809 = require("./287809.js"),
  Chunk486020 = require("./486020.js"),
  Chunk998304 = require("./998304.js"),
  Chunk854987 = require("./854987.js"),
  Chunk719718 = require("./719718.js"),
  Chunk57882 = require("./57882.js"),
  Chunk40333 = require("./40333.js"),
  Chunk612082 = require("./612082.jsx"),
  Chunk46192 = require("./46192.jsx"),
  Chunk573138 = require("./573138.jsx"),
  Chunk182417 = require("./182417.jsx"),
  Chunk877272 = require("./877272.jsx"),
  Chunk398225 = require("./398225.jsx"),
  Chunk532294 = require("./532294.js"),
  Chunk622865 = require("./622865.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk308021 = require("./308021.js"),
  Chunk597260 = require("./597260.js");
let k = {
    [Chunk532294.c8.ZERO]: "Bonsai",
    [Chunk532294.c8.ONE]: "Donut",
    [Chunk532294.c8.TWO]: "Capybara",
    [Chunk532294.c8.THREE]: "Disco",
    [Chunk532294.c8.FOUR]: "Origami",
    [Chunk532294.c8.FIVE]: "Snail",
    [Chunk532294.c8.SIX]: "Duck",
    [Chunk532294.c8.SEVEN]: "Banana",
    [Chunk532294.c8.EIGHT]: "Cat",
    [Chunk532294.c8.NINE]: "Cassette"
  },
  M = {
    [Chunk532294.c8.ZERO]: "Bonsai Icon",
    [Chunk532294.c8.ONE]: "Donut Icon",
    [Chunk532294.c8.TWO]: "Capybara Icon",
    [Chunk532294.c8.THREE]: "Disco Icon",
    [Chunk532294.c8.FOUR]: "Origami Icon",
    [Chunk532294.c8.FIVE]: "Snail Icon",
    [Chunk532294.c8.SIX]: "Duck Icon",
    [Chunk532294.c8.SEVEN]: "Banana Icon",
    [Chunk532294.c8.EIGHT]: "Cat Icon",
    [Chunk532294.c8.NINE]: "Cassette Icon"
  },
  H = 429 / 462;

function U(e) {
  var t;
  let {
    step: n,
    onNext: a
  } = e, {
    powerLevel: u = 0,
    powerLevelPercentile: m = 0,
    cardId: p = 0
  } = (0, c.bG)([C.A], () => C.A.getCheckpointData()), h = (0, c.bG)([x.default], () => x.default.getCurrentUser()), b = (0, l.useContext)(j.P), g = (0, A.A)((0, d.rdh)(b.primaryColor).hex()), y = (0, v.j5)(g), E = (0, c.bG)([f.A], () => f.A.useReducedMotion), S = (0, l.useRef)(null), [N, P] = (0, l.useState)(true), U = (0, l.useMemo)(() => n <= w.Wf.END_REWARD ? 1 : n === w.Wf.END_CLAIM ? 2 : 3, [n]), F = (0, l.useMemo)(() => i().throttle(() => {
    null != S.current && P(S.current.clientWidth)
  }, 200), []), G = (0, l.useCallback)(() => n <= w.Wf.END_REWARD ? "100%" : n === w.Wf.END_CLAIM ? "50%" : "30%", [n]), V = (0, o.zhh)({
    onChange: F,
    to: {
      width: G()
    }
  }), B = (0, o.zhh)({
    to: {
      width: n === w.Wf.END_SUMMARY ? "140%" : "100%",
      height: null != N ? N * H : true,
      left: n === w.Wf.END_SUMMARY ? "40px" : "0px"
    }
  }), W = (0, o.zhh)({
    to: {
      opacity: +(n !== w.Wf.END_SUMMARY),
      transform: n === w.Wf.END_SUMMARY ? "translate3d(0, -200px, 0)" : "translate3d(0, 0px, 0)"
    }
  });
  return (0, l.useEffect)(() => (F(), window.addEventListener("resize", F), () => {
    window.removeEventListener("resize", F), F.cancel()
  }), [F]), (0, r.jsxs)(s.animated.div, {
    className: D.UO,
    style: V,
    children: [(0, r.jsx)(s.animated.div, {
      style: W,
      children: (0, r.jsxs)("div", {
        className: D.Qs,
        children: [(0, r.jsxs)("div", {
          className: L.DD,
          children: [(0, r.jsx)(o.MZT, {
            size: "refresh_sm",
            color: g,
            colorClass: L.d7,
            className: L.gr
          }), (0, r.jsx)(I.A, {
            variant: "eyebrow",
            className: L.UP,
            children: R.intl.string(T.default.ir6nEQ)
          })]
        }), (0, r.jsx)(I.A, {
          variant: "display-lg",
          className: D.Vy,
          children: "DECO"
        })]
      })
    }), (0, r.jsx)(s.animated.div, {
      ref: S,
      className: D.Zl,
      style: B,
      children: (0, r.jsx)(o.hW8, {
        fit: "contain",
        dataBinding: {
          "id#": null != (t = null == h ? true : h.id.substring(0, 4)) ? t : "0000",
          LVL: "".concat(Math.round(u)),
          Outof: "".concat(p, "/10"),
          PersonaName: w.J4[p],
          AnimationState: U,
          FillColor: {
            r: y.r,
            g: y.g,
            b: y.b,
            a: 255 * y.a
          },
          PowerMeter: (0, _._V)(m),
          Icon: M[p],
          Illustration: k[p],
          reducedMotion: E
        },
        withReducedMotion: "play"
      }, "rive")
    }), n <= w.Wf.END_REWARD && (0, r.jsx)("div", {
      className: D.Qs,
      children: (0, r.jsx)(O.A, {
        onClick: a,
        muteSound: true,
        children: (0, r.jsx)(I.A, {
          variant: "eyebrow",
          className: D.HL,
          children: R.intl.string(R.t.dcztdU)
        })
      })
    })]
  })
}

function F() {
  let e = (0, c.bG)([x.default], () => x.default.getCurrentUser()),
    {
      avatarDecoration: t
    } = (0, c.bG)([C.A], () => C.A.getCheckpointData());
  return (0, r.jsxs)("div", {
    className: D.ZG,
    children: [(0, r.jsx)(I.A, {
      variant: "eyebrow",
      children: R.intl.string(T.default["4R3VzK"])
    }), (0, r.jsx)(I.A, {
      variant: "heading-lg/medium",
      className: D.$2,
      children: R.intl.string(T.default["94azAy"])
    }), null != e && (0, r.jsx)(p.A, {
      user: e,
      guildId: null,
      avatarDecorationOverride: t
    }), (0, r.jsx)(E.A, {
      className: D.Hk
    }), (0, r.jsx)(I.A, {
      variant: "heading-sm/medium",
      children: R.intl.format(R.t.eZSTa5, {
        date: new Date("2026-01-15").toLocaleDateString(R.intl.currentLocale, {
          month: "long",
          day: "numeric",
          year: "numeric",
          timeZone: "UTC"
        })
      })
    })]
  })
}

function G(e) {
  let {
    primaryColor: t
  } = e, {
    messages: {
      numMessagesSent: n
    } = {
      numMessagesSent: 0
    },
    voice: {
      totalVoiceMinutes: a
    } = {
      totalVoiceMinutes: 0
    },
    emojis: {
      numEmojisSent: i,
      emojis: s
    } = {
      numEmojisSent: 0,
      emojis: []
    },
    guilds: {
      guilds: d
    } = {
      guilds: []
    },
    applications: {
      applications: p
    } = {
      applications: []
    }
  } = (0, c.bG)([C.A], () => C.A.getCheckpointData()), x = (0, c.bG)([f.A], () => f.A.useReducedMotion), v = s.length > 0 ? s[0] : null, j = d.length > 0 ? d[0].guild : null, A = p.length > 0 ? p[0].game : null, {
    unit: O,
    duration: E
  } = (0, _.oO)(a), S = (0, c.bG)([g.A], () => g.A.getGuild(null == j ? true : j.id)), N = null != A && null != A.icon ? y.Ay.getApplicationIconURL({
    id: A.id,
    icon: A.icon
  }) : null, w = (0, P.HL)(), k = (0, l.useMemo)(() => [{
    icon: o.oyn,
    title: R.intl.string(T.default.wWKySP),
    content: (0, r.jsx)(I.A, {
      variant: "heading-xxl/medium",
      className: L.sH,
      children: n
    })
  }, {
    icon: o.cNw,
    title: O === u.pJ.HOURS ? R.intl.formatToPlainString(T.default.Xu0QsX, {
      numHours: E
    }) : R.intl.string(T.default.RmVTph),
    content: (0, r.jsx)(I.A, {
      variant: "heading-xxl/medium",
      className: L.sH,
      children: E
    })
  }, {
    icon: o.nm2,
    title: R.intl.string(T.default.zcbFu1),
    content: (0, r.jsx)(I.A, {
      variant: "heading-xxl/medium",
      className: L.sH,
      children: i
    })
  }, {
    icon: o.Gg5,
    title: R.intl.string(T.default["3sARW7"]),
    content: (0, r.jsxs)("div", {
      className: L.DD,
      children: [null != v ? (0, r.jsxs)("div", {
        className: L.DD,
        children: [(0, r.jsx)(m.A, {
          emojiName: null == v.id ? v.name : "",
          emojiId: v.id,
          animated: !x && v.animated,
          className: D.Gl
        }), (0, r.jsx)(I.A, {
          variant: "text-md/medium",
          children: null == v.id ? h.Ay.convertSurrogateToName(v.name) : ":".concat(v.name, ":")
        })]
      }) : (0, r.jsx)(o._7Z, {
        color: t,
        size: "md",
        className: D.Gl
      }), null == v && (0, r.jsx)(I.A, {
        variant: "text-md/medium",
        children: R.intl.string(R.t.PoWNfe)
      })]
    })
  }, {
    icon: o._xR,
    title: R.intl.string(T.default.RbT4Zq),
    content: (0, r.jsxs)("div", {
      className: L.DD,
      children: [null != N ? (0, r.jsx)("img", {
        src: N,
        alt: "",
        className: D.Gl
      }) : (0, r.jsx)(o._7Z, {
        color: t,
        size: "md",
        className: D.Gl
      }), (0, r.jsx)(I.A, {
        variant: "text-md/medium",
        children: null != A ? A.name : R.intl.string(R.t.PoWNfe)
      })]
    })
  }, {
    icon: o.RR9,
    title: R.intl.string(T.default["8XPMJj"]),
    content: (0, r.jsxs)("div", {
      className: L.DD,
      children: [null != S ? (0, r.jsx)(b.A, {
        guild: S,
        className: D.Gl
      }) : (0, r.jsx)(o._7Z, {
        color: t,
        size: "md",
        className: D.Gl
      }), (0, r.jsx)(I.A, {
        variant: "text-md/medium",
        children: null != S ? S.name : R.intl.string(R.t.PoWNfe)
      })]
    })
  }], [n, E, O, i, v, x, t, N, A, S]);
  return (0, r.jsx)(P.gy.Provider, {
    value: w,
    children: (0, r.jsx)("div", {
      className: D.Fo,
      children: (0, r.jsxs)("div", {
        className: D.pv,
        children: [(0, r.jsxs)("div", {
          className: L.DD,
          children: [(0, r.jsx)(o.MZT, {
            size: "refresh_sm",
            color: t,
            colorClass: L.d7,
            className: L.gr
          }), (0, r.jsx)(I.A, {
            variant: "eyebrow",
            className: L.UP,
            children: R.intl.string(T.default.ir6nEQ)
          })]
        }), (0, r.jsx)(I.A, {
          variant: "display-lg",
          className: D.Vy,
          children: R.intl.string(T.default.y4M1na)
        }), (0, r.jsx)("div", {
          className: D.M1,
          children: k.map((e, t) => (0, r.jsx)(B, function(e) {
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
          }({}, e), t))
        })]
      })
    })
  })
}

function V(e) {
  let {
    step: t
  } = e, n = (0, l.useContext)(j.P), a = (0, d.rdh)(n.primaryColor).hex(), i = (0, d.rdh)(n.backgroundOverlayColor).hex();
  return (0, r.jsx)("div", {
    className: t === w.Wf.END_CLAIM ? D.Ly : D.jK,
    style: {
      backgroundColor: i
    },
    children: (0, r.jsxs)(N.Ay, {
      activeSlide: t,
      children: [(0, r.jsx)(d.q7S, {
        id: w.Wf.END_CLAIM,
        children: (0, r.jsx)(F, {})
      }), (0, r.jsx)(d.q7S, {
        id: w.Wf.END_SUMMARY,
        children: (0, r.jsx)(G, {
          primaryColor: a
        })
      })]
    })
  })
}

function B(e) {
  let {
    icon: t,
    title: n,
    content: a
  } = e, i = (0, l.useContext)(j.P), s = (0, d.rdh)(i.primaryColor).hex(), o = (0, P.vy)(), c = (0, P.vy)();
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(P.vw, {
      spring: o,
      className: D.NX,
      children: (0, r.jsxs)("div", {
        className: L.DD,
        children: [(0, r.jsx)(t, {
          size: "refresh_sm",
          color: s,
          colorClass: L.d7,
          className: L.gr
        }), (0, r.jsx)(I.A, {
          variant: "eyebrow",
          className: L.UP,
          children: n
        })]
      })
    }), (0, r.jsx)(P.vw, {
      spring: c,
      children: a
    })]
  })
}

function W(e) {
  let {
    step: t,
    onNext: n
  } = e;
  return (0, r.jsxs)(S.A, {
    noPadding: true,
    centered: false,
    className: D.kL,
    children: [(0, r.jsx)(U, {
      step: t,
      onNext: n
    }), (0, r.jsx)(V, {
      step: t
    })]
  })
}