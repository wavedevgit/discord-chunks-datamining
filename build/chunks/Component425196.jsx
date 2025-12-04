/** Chunk was on web.js **/
/** chunk id: 425196, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => Q
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk205120 = require("./205120.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk379649 = require("./379649.js"),
  Chunk481060 = require("./481060.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk607070 = require("./607070.js"),
  Chunk100527 = require("./100527.js"),
  Chunk204418 = require("./204418.jsx"),
  Chunk1585 = require("./1585.jsx"),
  Chunk633302 = require("./633302.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk580130 = require("./580130.js"),
  Chunk768581 = require("./768581.js"),
  Chunk302221 = require("./302221.js"),
  Chunk515970 = require("./515970.js"),
  Chunk324060 = require("./324060.js"),
  Chunk5888 = require("./5888.js"),
  Chunk26118 = require("./26118.js"),
  Chunk482617 = require("./482617.js"),
  Chunk639949 = require("./639949.jsx"),
  Chunk198358 = require("./198358.jsx"),
  Chunk225055 = require("./225055.jsx"),
  Chunk391876 = require("./391876.jsx"),
  Chunk883166 = require("./883166.jsx"),
  Chunk612776 = require("./612776.js"),
  Chunk140939 = require("./140939.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk417788 = require("./417788.js"),
  Chunk278607 = require("./278607.js");

function G(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function Z(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      G(e, t, n[t])
    })
  }
  return e
}
let B = {
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
  F = {
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
  V = 429 / 462,
  H = 200;

function Y(e) {
  var t;
  let {
    step: n,
    onNext: a
  } = e, {
    powerLevel: u = 0,
    powerLevelPercentile: f = 0,
    cardId: _ = 0
  } = (0, c.e7)([A.Z], () => A.Z.getCheckpointData()), m = (0, c.e7)([y.default], () => y.default.getCurrentUser()), h = (0, i.useContext)(T.Q), g = (0, N.Z)((0, d.dQu)(h.primaryColor).hex()), E = (0, S.a7)(g), b = (0, c.e7)([p.Z], () => p.Z.useReducedMotion), O = (0, i.useRef)(null), [v, I] = (0, i.useState)(true), R = (0, i.useMemo)(() => n <= L.ij.END_REWARD ? 1 : n === L.ij.END_CLAIM ? 2 : 3, [n]), w = (0, i.useMemo)(() => o().throttle(() => {
    null != O.current && I(O.current.clientWidth)
  }, H), []), x = (0, i.useCallback)(() => n <= L.ij.END_REWARD ? "100%" : n === L.ij.END_CLAIM ? "50%" : "30%", [n]), G = (0, l.q_F)({
    onChange: w,
    to: {
      width: x()
    }
  }), Z = (0, l.q_F)({
    to: {
      width: n === L.ij.END_SUMMARY ? "140%" : "100%",
      height: null != v ? v * V : true,
      left: n === L.ij.END_SUMMARY ? "40px" : "0px"
    }
  }), Y = (0, l.q_F)({
    to: {
      opacity: +(n !== L.ij.END_SUMMARY),
      transform: n === L.ij.END_SUMMARY ? "translate3d(0, -200px, 0)" : "translate3d(0, 0px, 0)"
    }
  });
  return (0, i.useEffect)(() => (w(), window.addEventListener("resize", w), () => {
    window.removeEventListener("resize", w), w.cancel()
  }), [w]), (0, r.jsxs)(s.animated.div, {
    className: U.cardSection,
    style: G,
    children: [(0, r.jsx)(s.animated.div, {
      style: Y,
      children: (0, r.jsxs)("div", {
        className: U.content,
        children: [(0, r.jsxs)("div", {
          className: k.title,
          children: [(0, r.jsx)(l.d5i, {
            size: "refresh_sm",
            color: g,
            colorClass: k.iconColor,
            className: k.titleIcon
          }), (0, r.jsx)(D.Z, {
            variant: "eyebrow",
            className: k.eyebrow,
            children: M.intl.string(j.default.ir6nEQ)
          })]
        }), (0, r.jsx)(D.Z, {
          variant: "display-lg",
          className: U.display,
          children: "DECO"
        })]
      })
    }), (0, r.jsx)(s.animated.div, {
      ref: O,
      className: U.cardAnimation,
      style: Z,
      children: (0, r.jsx)(l.cAm, {
        fit: "contain",
        dataBinding: {
          "id#": null != (t = null == m ? true : m.id.substring(0, 4)) ? t : "0000",
          LVL: "".concat(Math.round(u)),
          Outof: "".concat(_, "/10"),
          PersonaName: L.IL[_],
          AnimationState: R,
          FillColor: {
            r: E.r,
            g: E.g,
            b: E.b,
            a: 255 * E.a
          },
          PowerMeter: (0, C.QB)(f),
          Icon: F[_],
          Illustration: B[_],
          reducedMotion: b
        },
        withReducedMotion: "play"
      }, "rive")
    }), n <= L.ij.END_REWARD && (0, r.jsx)("div", {
      className: U.content,
      children: (0, r.jsx)(P.Z, {
        onClick: a,
        muteSound: true,
        children: (0, r.jsx)(D.Z, {
          variant: "eyebrow",
          className: U.buttonCTA,
          children: M.intl.string(M.t.dcztdU)
        })
      })
    })]
  })
}

function W() {
  let e = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser()),
    {
      avatarDecoration: t
    } = (0, Chunk442837.e7)([Chunk5888.Z], () => Chunk5888.Z.getCheckpointData()),
    n = (0, Chunk442837.Wu)([Chunk580130.Z], () => {
      if ((null == exports ? true : exports.skuId) == null) return [];
      let e = Chunk580130.Z.getForSku(null == exports ? true : exports.skuId);
      return null != module ? [...module] : []
    })[0],
    a = null != require,
    o = (0, Chunk473749.useRef)(false);
  (0, Chunk473749.useEffect)(() => {
    null != require && null != module && o.current && (0, Chunk1585.ps)({
      analyticsLocations: [Chunk100527.Z.CHECKPOINT],
      initialSelectedDecoration: exports
    })
  }, [require, module, exports]);
  let s = () => {
    Chunk392711 || (o.current = true, (0, Chunk515970._Z)())
  };
  return (0, Chunk54381.jsxs)("div", {
    className: Chunk278607.contentSectionInnerClaim,
    children: [(0, Chunk54381.jsx)(Chunk391876.Z, {
      variant: "eyebrow",
      children: Chunk388032.intl.string(Chunk140939.default["4R3VzK"])
    }), (0, Chunk54381.jsx)(Chunk391876.Z, {
      variant: "heading-lg/medium",
      className: Chunk278607.claimSubtitle,
      children: Chunk388032.intl.string(Chunk140939.default["94azAy"])
    }), null != module && (0, Chunk54381.jsx)(Chunk204418.Z, {
      user: module,
      guildId: null,
      avatarDecorationOverride: exports
    }), (0, Chunk54381.jsx)(Chunk639949.Z, {
      disabled: Chunk392711,
      onClick: Chunk205120,
      className: Chunk278607.claimButton,
      children: (0, Chunk54381.jsx)(Chunk391876.Z, {
        variant: "eyebrow",
        className: Chunk278607.buttonCTA,
        children: Chunk392711 ? Chunk388032.intl.string(Chunk388032.t.lIsIFo) : Chunk388032.intl.string(Chunk140939.default.mDxM7m)
      })
    }), (0, Chunk54381.jsx)(Chunk391876.Z, {
      variant: "heading-sm/medium",
      children: Chunk388032.intl.format(Chunk388032.t.eZSTa5, {
        date: new Date("2026-01-15").toLocaleDateString(Chunk388032.intl.currentLocale, {
          month: "long",
          day: "numeric",
          year: "numeric",
          timeZone: "UTC"
        })
      })
    })]
  })
}

function K(e) {
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
  } = (0, c.e7)([A.Z], () => A.Z.getCheckpointData()), m = (0, c.e7)([p.Z], () => p.Z.useReducedMotion), h = s.length > 0 ? s[0] : null, y = d.length > 0 ? d[0].guild : null, O = _.length > 0 ? _[0].game : null, {
    unit: S,
    duration: I
  } = (0, C.Bi)(a), T = (0, c.e7)([b.Z], () => b.Z.getGuild(null == y ? true : y.id)), N = null != O && null != O.icon ? v.ZP.getApplicationIconURL({
    id: O.id,
    icon: O.icon
  }) : null, P = (0, x.Sg)(), R = (0, i.useMemo)(() => [{
    icon: l.kBi,
    title: M.intl.string(j.default.wWKySP),
    content: (0, r.jsx)(D.Z, {
      variant: "heading-xxl/medium",
      className: k.numeric,
      children: n
    })
  }, {
    icon: l.S6n,
    title: S === u.J6.HOURS ? M.intl.formatToPlainString(j.default.Xu0QsX, {
      numHours: I
    }) : M.intl.string(j.default.RmVTph),
    content: (0, r.jsx)(D.Z, {
      variant: "heading-xxl/medium",
      className: k.numeric,
      children: I
    })
  }, {
    icon: l.EO4,
    title: M.intl.string(j.default.zcbFu1),
    content: (0, r.jsx)(D.Z, {
      variant: "heading-xxl/medium",
      className: k.numeric,
      children: o
    })
  }, {
    icon: l.r7p,
    title: M.intl.string(j.default["3sARW7"]),
    content: (0, r.jsxs)("div", {
      className: k.title,
      children: [null != h ? (0, r.jsxs)("div", {
        className: k.title,
        children: [(0, r.jsx)(f.Z, {
          emojiName: null == h.id ? h.name : "",
          emojiId: h.id,
          animated: !m && h.animated,
          className: U.statIcon
        }), (0, r.jsx)(D.Z, {
          variant: "text-md/medium",
          children: null == h.id ? g.ZP.convertSurrogateToName(h.name) : ":".concat(h.name, ":")
        })]
      }) : (0, r.jsx)(l.IMN, {
        color: t,
        size: "md",
        className: U.statIcon
      }), null == h && (0, r.jsx)(D.Z, {
        variant: "text-md/medium",
        children: M.intl.string(M.t.PoWNfe)
      })]
    })
  }, {
    icon: l.iWm,
    title: M.intl.string(j.default.RbT4Zq),
    content: (0, r.jsxs)("div", {
      className: k.title,
      children: [null != N ? (0, r.jsx)("img", {
        src: N,
        alt: "",
        className: U.statIcon
      }) : (0, r.jsx)(l.IMN, {
        color: t,
        size: "md",
        className: U.statIcon
      }), (0, r.jsx)(D.Z, {
        variant: "text-md/medium",
        children: null != O ? O.name : M.intl.string(M.t.PoWNfe)
      })]
    })
  }, {
    icon: l.QTo,
    title: M.intl.string(j.default["8XPMJj"]),
    content: (0, r.jsxs)("div", {
      className: k.title,
      children: [null != T ? (0, r.jsx)(E.Z, {
        guild: T,
        className: U.statIcon
      }) : (0, r.jsx)(l.IMN, {
        color: t,
        size: "md",
        className: U.statIcon
      }), (0, r.jsx)(D.Z, {
        variant: "text-md/medium",
        children: null != T ? T.name : M.intl.string(M.t.PoWNfe)
      })]
    })
  }], [n, I, S, o, h, m, t, N, O, T]);
  return (0, r.jsx)(x.Qr.Provider, {
    value: P,
    children: (0, r.jsx)("div", {
      className: U.centerContent,
      children: (0, r.jsxs)("div", {
        className: U.contentSectionInner,
        children: [(0, r.jsxs)("div", {
          className: k.title,
          children: [(0, r.jsx)(l.d5i, {
            size: "refresh_sm",
            color: t,
            colorClass: k.iconColor,
            className: k.titleIcon
          }), (0, r.jsx)(D.Z, {
            variant: "eyebrow",
            className: k.eyebrow,
            children: M.intl.string(j.default.ir6nEQ)
          })]
        }), (0, r.jsx)(D.Z, {
          variant: "display-lg",
          className: U.display,
          children: M.intl.string(j.default.y4M1na)
        }), (0, r.jsx)("div", {
          className: U.stats,
          children: R.map((e, t) => (0, r.jsx)(q, Z({}, e), t))
        })]
      })
    })
  })
}

function z(e) {
  let {
    step: t
  } = e, n = (0, i.useContext)(T.Q), a = (0, d.dQu)(n.primaryColor).hex(), o = (0, d.dQu)(n.backgroundOverlayColor).hex();
  return (0, r.jsx)("div", {
    className: t === L.ij.END_CLAIM ? U.contentSectionClaim : U.contentSectionSummary,
    style: {
      backgroundColor: o
    },
    children: (0, r.jsxs)(w.ZP, {
      activeSlide: t,
      children: [(0, r.jsx)(d.Mi4, {
        id: L.ij.END_CLAIM,
        children: (0, r.jsx)(W, {})
      }), (0, r.jsx)(d.Mi4, {
        id: L.ij.END_SUMMARY,
        children: (0, r.jsx)(K, {
          primaryColor: a
        })
      })]
    })
  })
}

function q(e) {
  let {
    icon: t,
    title: n,
    content: a
  } = e, o = (0, i.useContext)(T.Q), s = (0, d.dQu)(o.primaryColor).hex(), l = (0, x.gl)(), c = (0, x.gl)();
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(x.QR, {
      spring: l,
      className: U.statTitle,
      children: (0, r.jsxs)("div", {
        className: k.title,
        children: [(0, r.jsx)(t, {
          size: "refresh_sm",
          color: s,
          colorClass: k.iconColor,
          className: k.titleIcon
        }), (0, r.jsx)(D.Z, {
          variant: "eyebrow",
          className: k.eyebrow,
          children: n
        })]
      })
    }), (0, r.jsx)(x.QR, {
      spring: c,
      children: a
    })]
  })
}

function Q(e) {
  let {
    step: t,
    onNext: n
  } = e;
  return (0, r.jsxs)(R.Z, {
    noPadding: true,
    centered: false,
    className: U.container,
    children: [(0, r.jsx)(Y, {
      step: t,
      onNext: n
    }), (0, r.jsx)(z, {
      step: t
    })]
  })
}