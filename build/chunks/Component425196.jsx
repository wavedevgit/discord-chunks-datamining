/** Chunk was on web.js **/
/** chunk id: 425196, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => K
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk81239 = require("./81239.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk379649 = require("./379649.js"),
  Chunk481060 = require("./481060.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk607070 = require("./607070.js"),
  Chunk204418 = require("./204418.jsx"),
  Chunk633302 = require("./633302.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk768581 = require("./768581.js"),
  Chunk302221 = require("./302221.js"),
  Chunk324060 = require("./324060.js"),
  Chunk5888 = require("./5888.js"),
  Chunk26118 = require("./26118.js"),
  Chunk482617 = require("./482617.js"),
  Chunk639949 = require("./639949.jsx"),
  Chunk829468 = require("./829468.jsx"),
  Chunk198358 = require("./198358.jsx"),
  Chunk225055 = require("./225055.jsx"),
  Chunk391876 = require("./391876.jsx"),
  Chunk883166 = require("./883166.jsx"),
  Chunk612776 = require("./612776.js"),
  Chunk638398 = require("./638398.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk554445 = require("./554445.js"),
  Chunk187842 = require("./187842.js");

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
    [Chunk612776._n.ZERO]: "Bonsai",
    [Chunk612776._n.ONE]: "Donut",
    [Chunk612776._n.TWO]: "Capybara",
    [Chunk612776._n.THREE]: "Disco",
    [Chunk612776._n.FOUR]: "Origami",
    [Chunk612776._n.FIVE]: "Snail",
    [Chunk612776._n.SIX]: "Duck",
    [Chunk612776._n.SEVEN]: "Banana",
    [Chunk612776._n.EIGHT]: "Cat",
    [Chunk612776._n.NINE]: "Cassette"
  },
  G = {
    [Chunk612776._n.ZERO]: "Bonsai Icon",
    [Chunk612776._n.ONE]: "Donut Icon",
    [Chunk612776._n.TWO]: "Capybara Icon",
    [Chunk612776._n.THREE]: "Disco Icon",
    [Chunk612776._n.FOUR]: "Origami Icon",
    [Chunk612776._n.FIVE]: "Snail Icon",
    [Chunk612776._n.SIX]: "Duck Icon",
    [Chunk612776._n.SEVEN]: "Banana Icon",
    [Chunk612776._n.EIGHT]: "Cat Icon",
    [Chunk612776._n.NINE]: "Cassette Icon"
  },
  Z = 429 / 462,
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
  } = (0, c.e7)([v.Z], () => v.Z.getCheckpointData()), h = (0, c.e7)([E.default], () => E.default.getCurrentUser()), m = (0, i.useContext)(O.Q), g = (0, I.Z)((0, d.dQu)(m.primaryColor).hex()), b = (0, y.a7)(g), C = (0, c.e7)([p.Z], () => p.Z.useReducedMotion), A = (0, i.useRef)(null), [N, w] = (0, i.useState)(true), M = (0, i.useMemo)(() => n <= R.ij.END_REWARD ? 1 : n === R.ij.END_CLAIM ? 2 : 3, [n]), k = (0, i.useMemo)(() => o().throttle(() => {
    null != A.current && w(A.current.clientWidth)
  }, F), []), B = (0, i.useCallback)(() => n <= R.ij.END_REWARD ? "100%" : n === R.ij.END_CLAIM ? "50%" : "30%", [n]), V = (0, l.q_F)({
    onChange: k,
    to: {
      width: B()
    }
  }), H = (0, l.q_F)({
    to: {
      width: n === R.ij.END_SUMMARY ? "140%" : "100%",
      height: null != N ? N * Z : true,
      left: n === R.ij.END_SUMMARY ? "40px" : "0px"
    }
  }), Y = (0, l.q_F)({
    to: {
      opacity: +(n !== R.ij.END_SUMMARY),
      transform: n === R.ij.END_SUMMARY ? "translate3d(0, -200px, 0)" : "translate3d(0, 0px, 0)"
    }
  });
  return (0, i.useEffect)(() => (k(), window.addEventListener("resize", k), () => {
    window.removeEventListener("resize", k), k.cancel()
  }), [k]), (0, r.jsxs)(s.animated.div, {
    className: j.cardSection,
    style: V,
    children: [(0, r.jsx)(s.animated.div, {
      style: Y,
      children: (0, r.jsxs)("div", {
        className: j.content,
        children: [(0, r.jsxs)("div", {
          className: L.title,
          children: [(0, r.jsx)(l.d5i, {
            size: "refresh_sm",
            color: g,
            colorClass: L.iconColor,
            className: L.titleIcon
          }), (0, r.jsx)(P.Z, {
            variant: "eyebrow",
            className: L.eyebrow,
            children: x.intl.string(D.default.ir6nEQ)
          })]
        }), (0, r.jsx)(P.Z, {
          variant: "display-lg",
          className: j.display,
          children: "DECO"
        })]
      })
    }), (0, r.jsx)(s.animated.div, {
      ref: A,
      className: j.cardAnimation,
      style: H,
      children: (0, r.jsx)(l.cAm, {
        fit: "contain",
        dataBinding: {
          "id#": null != (t = null == h ? true : h.id.substring(0, 4)) ? t : "0000",
          LVL: "".concat(Math.round(u)),
          Outof: "".concat(_, "/10"),
          PersonaName: R.IL[_],
          AnimationState: M,
          FillColor: {
            r: b.r,
            g: b.g,
            b: b.b,
            a: 255 * b.a
          },
          PowerMeter: (0, S.QB)(f),
          Icon: G[_],
          Illustration: U[_],
          reducedMotion: C
        },
        withReducedMotion: "play"
      }, "rive")
    }), n <= R.ij.END_REWARD && (0, r.jsx)("div", {
      className: j.content,
      children: (0, r.jsx)(T.Z, {
        onClick: a,
        muteSound: true,
        children: (0, r.jsx)(P.Z, {
          variant: "eyebrow",
          className: j.buttonCTA,
          children: x.intl.string(x.t.dcztdU)
        })
      })
    })]
  })
}

function V() {
  let e = (0, c.e7)([E.default], () => E.default.getCurrentUser()),
    {
      avatarDecoration: t
    } = (0, c.e7)([v.Z], () => v.Z.getCheckpointData());
  return (0, r.jsxs)("div", {
    className: j.contentSectionInnerClaim,
    children: [(0, r.jsx)(P.Z, {
      variant: "eyebrow",
      children: x.intl.string(D.default["4R3VzK"])
    }), (0, r.jsx)(P.Z, {
      variant: "heading-lg/medium",
      className: j.claimSubtitle,
      children: x.intl.string(D.default["94azAy"])
    }), null != e && (0, r.jsx)(_.Z, {
      user: e,
      guildId: null,
      avatarDecorationOverride: t
    }), (0, r.jsx)(C.Z, {
      className: j.claimButton
    }), (0, r.jsx)(P.Z, {
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

function H(e) {
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
      numEmojisSent: o,
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
      applications: _
    } = {
      applications: []
    }
  } = (0, c.e7)([v.Z], () => v.Z.getCheckpointData()), E = (0, c.e7)([p.Z], () => p.Z.useReducedMotion), y = s.length > 0 ? s[0] : null, O = d.length > 0 ? d[0].guild : null, I = _.length > 0 ? _[0].game : null, {
    unit: T,
    duration: C
  } = (0, S.Bi)(a), A = (0, c.e7)([g.Z], () => g.Z.getGuild(null == O ? true : O.id)), N = null != I && null != I.icon ? b.ZP.getApplicationIconURL({
    id: I.id,
    icon: I.icon
  }) : null, R = (0, w.Sg)(), M = (0, i.useMemo)(() => [{
    icon: l.kBi,
    title: x.intl.string(D.default.wWKySP),
    content: (0, r.jsx)(P.Z, {
      variant: "heading-xxl/medium",
      className: L.numeric,
      children: n
    })
  }, {
    icon: l.S6n,
    title: T === u.J6.HOURS ? x.intl.formatToPlainString(D.default.Xu0QsX, {
      numHours: C
    }) : x.intl.string(D.default.RmVTph),
    content: (0, r.jsx)(P.Z, {
      variant: "heading-xxl/medium",
      className: L.numeric,
      children: C
    })
  }, {
    icon: l.EO4,
    title: x.intl.string(D.default.zcbFu1),
    content: (0, r.jsx)(P.Z, {
      variant: "heading-xxl/medium",
      className: L.numeric,
      children: o
    })
  }, {
    icon: l.r7p,
    title: x.intl.string(D.default["3sARW7"]),
    content: (0, r.jsxs)("div", {
      className: L.title,
      children: [null != y ? (0, r.jsxs)("div", {
        className: L.title,
        children: [(0, r.jsx)(f.Z, {
          emojiName: null == y.id ? y.name : "",
          emojiId: y.id,
          animated: !E && y.animated,
          className: j.statIcon
        }), (0, r.jsx)(P.Z, {
          variant: "text-md/medium",
          children: null == y.id ? h.ZP.convertSurrogateToName(y.name) : ":".concat(y.name, ":")
        })]
      }) : (0, r.jsx)(l.IMN, {
        color: t,
        size: "md",
        className: j.statIcon
      }), null == y && (0, r.jsx)(P.Z, {
        variant: "text-md/medium",
        children: x.intl.string(x.t.PoWNfe)
      })]
    })
  }, {
    icon: l.iWm,
    title: x.intl.string(D.default.RbT4Zq),
    content: (0, r.jsxs)("div", {
      className: L.title,
      children: [null != N ? (0, r.jsx)("img", {
        src: N,
        alt: "",
        className: j.statIcon
      }) : (0, r.jsx)(l.IMN, {
        color: t,
        size: "md",
        className: j.statIcon
      }), (0, r.jsx)(P.Z, {
        variant: "text-md/medium",
        children: null != I ? I.name : x.intl.string(x.t.PoWNfe)
      })]
    })
  }, {
    icon: l.QTo,
    title: x.intl.string(D.default["8XPMJj"]),
    content: (0, r.jsxs)("div", {
      className: L.title,
      children: [null != A ? (0, r.jsx)(m.Z, {
        guild: A,
        className: j.statIcon
      }) : (0, r.jsx)(l.IMN, {
        color: t,
        size: "md",
        className: j.statIcon
      }), (0, r.jsx)(P.Z, {
        variant: "text-md/medium",
        children: null != A ? A.name : x.intl.string(x.t.PoWNfe)
      })]
    })
  }], [n, C, T, o, y, E, t, N, I, A]);
  return (0, r.jsx)(w.Qr.Provider, {
    value: R,
    children: (0, r.jsx)("div", {
      className: j.centerContent,
      children: (0, r.jsxs)("div", {
        className: j.contentSectionInner,
        children: [(0, r.jsxs)("div", {
          className: L.title,
          children: [(0, r.jsx)(l.d5i, {
            size: "refresh_sm",
            color: t,
            colorClass: L.iconColor,
            className: L.titleIcon
          }), (0, r.jsx)(P.Z, {
            variant: "eyebrow",
            className: L.eyebrow,
            children: x.intl.string(D.default.ir6nEQ)
          })]
        }), (0, r.jsx)(P.Z, {
          variant: "display-lg",
          className: j.display,
          children: x.intl.string(D.default.y4M1na)
        }), (0, r.jsx)("div", {
          className: j.stats,
          children: M.map((e, t) => (0, r.jsx)(W, k({}, e), t))
        })]
      })
    })
  })
}

function Y(e) {
  let {
    step: t
  } = e, n = (0, i.useContext)(O.Q), a = (0, d.dQu)(n.primaryColor).hex(), o = (0, d.dQu)(n.backgroundOverlayColor).hex();
  return (0, r.jsx)("div", {
    className: t === R.ij.END_CLAIM ? j.contentSectionClaim : j.contentSectionSummary,
    style: {
      backgroundColor: o
    },
    children: (0, r.jsxs)(N.ZP, {
      activeSlide: t,
      children: [(0, r.jsx)(d.Mi4, {
        id: R.ij.END_CLAIM,
        children: (0, r.jsx)(V, {})
      }), (0, r.jsx)(d.Mi4, {
        id: R.ij.END_SUMMARY,
        children: (0, r.jsx)(H, {
          primaryColor: a
        })
      })]
    })
  })
}

function W(e) {
  let {
    icon: t,
    title: n,
    content: a
  } = e, o = (0, i.useContext)(O.Q), s = (0, d.dQu)(o.primaryColor).hex(), l = (0, w.gl)(), c = (0, w.gl)();
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(w.QR, {
      spring: l,
      className: j.statTitle,
      children: (0, r.jsxs)("div", {
        className: L.title,
        children: [(0, r.jsx)(t, {
          size: "refresh_sm",
          color: s,
          colorClass: L.iconColor,
          className: L.titleIcon
        }), (0, r.jsx)(P.Z, {
          variant: "eyebrow",
          className: L.eyebrow,
          children: n
        })]
      })
    }), (0, r.jsx)(w.QR, {
      spring: c,
      children: a
    })]
  })
}

function K(e) {
  let {
    step: t,
    onNext: n
  } = e;
  return (0, r.jsxs)(A.Z, {
    noPadding: true,
    centered: false,
    className: j.container,
    children: [(0, r.jsx)(B, {
      step: t,
      onNext: n
    }), (0, r.jsx)(Y, {
      step: t
    })]
  })
}