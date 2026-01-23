/** Chunk was on web.js **/
/** chunk id: 531502, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => z
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  s = require.n(Chunk735438),
  Chunk108531 = require("./108531.js"),
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

function M(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function k(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      M(e, t, n[t])
    })
  }
  return e
}
let U = {
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
  G = {
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
  V = 429 / 462,
  F = 200;

function B(e) {
  var t;
  let {
    step: n,
    onNext: a
  } = e, {
    powerLevel: u = 0,
    powerLevelPercentile: f = 0,
    cardId: _ = 0
  } = (0, c.bG)([v.A], () => v.A.getCheckpointData()), h = (0, c.bG)([E.default], () => E.default.getCurrentUser()), m = (0, i.useContext)(O.P), g = (0, I.A)((0, d.rdh)(m.primaryColor).hex()), y = (0, b.j5)(g), T = (0, c.bG)([p.A], () => p.A.useReducedMotion), C = (0, i.useRef)(null), [N, R] = (0, i.useState)(true), M = (0, i.useMemo)(() => n <= P.Wf.END_REWARD ? 1 : n === P.Wf.END_CLAIM ? 2 : 3, [n]), k = (0, i.useMemo)(() => s().throttle(() => {
    null != C.current && R(C.current.clientWidth)
  }, F), []), B = (0, i.useCallback)(() => n <= P.Wf.END_REWARD ? "100%" : n === P.Wf.END_CLAIM ? "50%" : "30%", [n]), H = (0, l.zhh)({
    onChange: k,
    to: {
      width: B()
    }
  }), Y = (0, l.zhh)({
    to: {
      width: n === P.Wf.END_SUMMARY ? "140%" : "100%",
      height: null != N ? N * V : true,
      left: n === P.Wf.END_SUMMARY ? "40px" : "0px"
    }
  }), W = (0, l.zhh)({
    to: {
      opacity: +(n !== P.Wf.END_SUMMARY),
      transform: n === P.Wf.END_SUMMARY ? "translate3d(0, -200px, 0)" : "translate3d(0, 0px, 0)"
    }
  });
  return (0, i.useEffect)(() => (k(), window.addEventListener("resize", k), () => {
    window.removeEventListener("resize", k), k.cancel()
  }), [k]), (0, r.jsxs)(o.animated.div, {
    className: j.UO,
    style: H,
    children: [(0, r.jsx)(o.animated.div, {
      style: W,
      children: (0, r.jsxs)("div", {
        className: j.Qs,
        children: [(0, r.jsxs)("div", {
          className: L.DD,
          children: [(0, r.jsx)(l.MZT, {
            size: "refresh_sm",
            color: g,
            colorClass: L.d7,
            className: L.gr
          }), (0, r.jsx)(w.A, {
            variant: "eyebrow",
            className: L.UP,
            children: x.intl.string(D.default.ir6nEQ)
          })]
        }), (0, r.jsx)(w.A, {
          variant: "display-lg",
          className: j.Vy,
          children: "DECO"
        })]
      })
    }), (0, r.jsx)(o.animated.div, {
      ref: C,
      className: j.Zl,
      style: Y,
      children: (0, r.jsx)(l.hW8, {
        fit: "contain",
        dataBinding: {
          "id#": null != (t = null == h ? true : h.id.substring(0, 4)) ? t : "0000",
          LVL: "".concat(Math.round(u)),
          Outof: "".concat(_, "/10"),
          PersonaName: P.J4[_],
          AnimationState: M,
          FillColor: {
            r: y.r,
            g: y.g,
            b: y.b,
            a: 255 * y.a
          },
          PowerMeter: (0, A._V)(f),
          Icon: G[_],
          Illustration: U[_],
          reducedMotion: T
        },
        withReducedMotion: "play"
      }, "rive")
    }), n <= P.Wf.END_REWARD && (0, r.jsx)("div", {
      className: j.Qs,
      children: (0, r.jsx)(S.A, {
        onClick: a,
        muteSound: true,
        children: (0, r.jsx)(w.A, {
          variant: "eyebrow",
          className: j.HL,
          children: x.intl.string(x.t.dcztdU)
        })
      })
    })]
  })
}

function H() {
  let e = (0, c.bG)([E.default], () => E.default.getCurrentUser()),
    {
      avatarDecoration: t
    } = (0, c.bG)([v.A], () => v.A.getCheckpointData());
  return (0, r.jsxs)("div", {
    className: j.ZG,
    children: [(0, r.jsx)(w.A, {
      variant: "eyebrow",
      children: x.intl.string(D.default["4R3VzK"])
    }), (0, r.jsx)(w.A, {
      variant: "heading-lg/medium",
      className: j.$2,
      children: x.intl.string(D.default["94azAy"])
    }), null != e && (0, r.jsx)(_.A, {
      user: e,
      guildId: null,
      avatarDecorationOverride: t
    }), (0, r.jsx)(T.A, {
      className: j.Hk
    }), (0, r.jsx)(w.A, {
      variant: "heading-sm/medium",
      children: x.intl.format(x.t.eZSTa5, {
        date: new Date("2026-01-15").toLocaleDateString(x.intl.currentLocale, {
          month: "long",
          day: "numeric",
          year: "numeric",
          timeZone: "UTC"
        })
      })
    })]
  })
}

function Y(e) {
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
      numEmojisSent: s,
      emojis: o
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
      applications: _
    } = {
      applications: []
    }
  } = (0, c.bG)([v.A], () => v.A.getCheckpointData()), E = (0, c.bG)([p.A], () => p.A.useReducedMotion), b = o.length > 0 ? o[0] : null, O = d.length > 0 ? d[0].guild : null, I = _.length > 0 ? _[0].game : null, {
    unit: S,
    duration: T
  } = (0, A.oO)(a), C = (0, c.bG)([g.A], () => g.A.getGuild(null == O ? true : O.id)), N = null != I && null != I.icon ? y.Ay.getApplicationIconURL({
    id: I.id,
    icon: I.icon
  }) : null, P = (0, R.HL)(), M = (0, i.useMemo)(() => [{
    icon: l.oyn,
    title: x.intl.string(D.default.wWKySP),
    content: (0, r.jsx)(w.A, {
      variant: "heading-xxl/medium",
      className: L.sH,
      children: n
    })
  }, {
    icon: l.cNw,
    title: S === u.pJ.HOURS ? x.intl.formatToPlainString(D.default.Xu0QsX, {
      numHours: T
    }) : x.intl.string(D.default.RmVTph),
    content: (0, r.jsx)(w.A, {
      variant: "heading-xxl/medium",
      className: L.sH,
      children: T
    })
  }, {
    icon: l.nm2,
    title: x.intl.string(D.default.zcbFu1),
    content: (0, r.jsx)(w.A, {
      variant: "heading-xxl/medium",
      className: L.sH,
      children: s
    })
  }, {
    icon: l.Gg5,
    title: x.intl.string(D.default["3sARW7"]),
    content: (0, r.jsxs)("div", {
      className: L.DD,
      children: [null != b ? (0, r.jsxs)("div", {
        className: L.DD,
        children: [(0, r.jsx)(f.A, {
          emojiName: null == b.id ? b.name : "",
          emojiId: b.id,
          animated: !E && b.animated,
          className: j.Gl
        }), (0, r.jsx)(w.A, {
          variant: "text-md/medium",
          children: null == b.id ? h.Ay.convertSurrogateToName(b.name) : ":".concat(b.name, ":")
        })]
      }) : (0, r.jsx)(l._7Z, {
        color: t,
        size: "md",
        className: j.Gl
      }), null == b && (0, r.jsx)(w.A, {
        variant: "text-md/medium",
        children: x.intl.string(x.t.PoWNfe)
      })]
    })
  }, {
    icon: l._xR,
    title: x.intl.string(D.default.RbT4Zq),
    content: (0, r.jsxs)("div", {
      className: L.DD,
      children: [null != N ? (0, r.jsx)("img", {
        src: N,
        alt: "",
        className: j.Gl
      }) : (0, r.jsx)(l._7Z, {
        color: t,
        size: "md",
        className: j.Gl
      }), (0, r.jsx)(w.A, {
        variant: "text-md/medium",
        children: null != I ? I.name : x.intl.string(x.t.PoWNfe)
      })]
    })
  }, {
    icon: l.RR9,
    title: x.intl.string(D.default["8XPMJj"]),
    content: (0, r.jsxs)("div", {
      className: L.DD,
      children: [null != C ? (0, r.jsx)(m.A, {
        guild: C,
        className: j.Gl
      }) : (0, r.jsx)(l._7Z, {
        color: t,
        size: "md",
        className: j.Gl
      }), (0, r.jsx)(w.A, {
        variant: "text-md/medium",
        children: null != C ? C.name : x.intl.string(x.t.PoWNfe)
      })]
    })
  }], [n, T, S, s, b, E, t, N, I, C]);
  return (0, r.jsx)(R.gy.Provider, {
    value: P,
    children: (0, r.jsx)("div", {
      className: j.Fo,
      children: (0, r.jsxs)("div", {
        className: j.pv,
        children: [(0, r.jsxs)("div", {
          className: L.DD,
          children: [(0, r.jsx)(l.MZT, {
            size: "refresh_sm",
            color: t,
            colorClass: L.d7,
            className: L.gr
          }), (0, r.jsx)(w.A, {
            variant: "eyebrow",
            className: L.UP,
            children: x.intl.string(D.default.ir6nEQ)
          })]
        }), (0, r.jsx)(w.A, {
          variant: "display-lg",
          className: j.Vy,
          children: x.intl.string(D.default.y4M1na)
        }), (0, r.jsx)("div", {
          className: j.M1,
          children: M.map((e, t) => (0, r.jsx)(K, k({}, e), t))
        })]
      })
    })
  })
}

function W(e) {
  let {
    step: t
  } = e, n = (0, i.useContext)(O.P), a = (0, d.rdh)(n.primaryColor).hex(), s = (0, d.rdh)(n.backgroundOverlayColor).hex();
  return (0, r.jsx)("div", {
    className: t === P.Wf.END_CLAIM ? j.Ly : j.jK,
    style: {
      backgroundColor: s
    },
    children: (0, r.jsxs)(N.Ay, {
      activeSlide: t,
      children: [(0, r.jsx)(d.q7S, {
        id: P.Wf.END_CLAIM,
        children: (0, r.jsx)(H, {})
      }), (0, r.jsx)(d.q7S, {
        id: P.Wf.END_SUMMARY,
        children: (0, r.jsx)(Y, {
          primaryColor: a
        })
      })]
    })
  })
}

function K(e) {
  let {
    icon: t,
    title: n,
    content: a
  } = e, s = (0, i.useContext)(O.P), o = (0, d.rdh)(s.primaryColor).hex(), l = (0, R.vy)(), c = (0, R.vy)();
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(R.vw, {
      spring: l,
      className: j.NX,
      children: (0, r.jsxs)("div", {
        className: L.DD,
        children: [(0, r.jsx)(t, {
          size: "refresh_sm",
          color: o,
          colorClass: L.d7,
          className: L.gr
        }), (0, r.jsx)(w.A, {
          variant: "eyebrow",
          className: L.UP,
          children: n
        })]
      })
    }), (0, r.jsx)(R.vw, {
      spring: c,
      children: a
    })]
  })
}

function z(e) {
  let {
    step: t,
    onNext: n
  } = e;
  return (0, r.jsxs)(C.A, {
    noPadding: true,
    centered: false,
    className: j.kL,
    children: [(0, r.jsx)(B, {
      step: t,
      onNext: n
    }), (0, r.jsx)(W, {
      step: t
    })]
  })
}