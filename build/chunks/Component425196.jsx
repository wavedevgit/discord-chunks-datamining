/** Chunk was on web.js **/
/** chunk id: 425196, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => K
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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

function k(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function U(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      k(e, t, n[t])
    })
  }
  return e
}
let G = {
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
  Z = {
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
  B = 429 / 462;

function F(e) {
  var t;
  let {
    step: n,
    onNext: l
  } = e, {
    powerLevel: u = 0,
    powerLevelPercentile: f = 0,
    cardId: p = 0
  } = (0, s.e7)([I.Z], () => I.Z.getCheckpointData()), _ = (0, s.e7)([E.default], () => E.default.getCurrentUser()), m = (0, i.useContext)(S.Q), h = (0, A.Z)((0, c.dQu)(m.primaryColor).hex()), g = (0, O.a7)(h), b = (0, s.e7)([d.Z], () => d.Z.useReducedMotion), y = (0, i.useRef)(null), v = (0, i.useMemo)(() => n <= D.ij.END_REWARD ? 1 : n === D.ij.END_CLAIM ? 2 : 3, [n]), N = (0, i.useCallback)(() => n <= D.ij.END_REWARD ? "100%" : n === D.ij.END_CLAIM ? "50%" : "30%", [n]), P = (0, o.q_F)({
    to: {
      width: N()
    }
  }), w = (0, o.q_F)({
    to: {
      width: n === D.ij.END_SUMMARY ? "140%" : "100%",
      left: n === D.ij.END_SUMMARY ? "40px" : "0px"
    }
  }), k = (0, o.q_F)({
    to: {
      opacity: +(n !== D.ij.END_SUMMARY),
      transform: n === D.ij.END_SUMMARY ? "translate3d(0, -200px, 0)" : "translate3d(0, 0px, 0)"
    }
  });
  return (0, i.useEffect)(() => {
    let e = () => {
      null != y.current && (y.current.style.height = "".concat(y.current.clientWidth * B, "px"))
    };
    return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
  }, []), (0, r.jsxs)(a.animated.div, {
    className: M.cardSection,
    style: P,
    children: [(0, r.jsx)(a.animated.div, {
      style: k,
      children: (0, r.jsxs)("div", {
        className: M.content,
        children: [(0, r.jsxs)("div", {
          className: j.title,
          children: [(0, r.jsx)(o.d5i, {
            size: "refresh_sm",
            color: h,
            colorClass: j.iconColor,
            className: j.titleIcon
          }), (0, r.jsx)(R.Z, {
            variant: "eyebrow",
            className: j.eyebrow,
            children: L.intl.string(x.default.ir6nEQ)
          })]
        }), (0, r.jsx)(R.Z, {
          variant: "display-lg",
          className: M.display,
          children: "DECO"
        })]
      })
    }), (0, r.jsx)(a.animated.div, {
      ref: y,
      className: M.cardAnimation,
      style: w,
      children: (0, r.jsx)(o.cAm, {
        fit: "contain",
        dataBinding: {
          "id#": null != (t = null == _ ? true : _.id.substring(0, 4)) ? t : "0000",
          LVL: "".concat(Math.round(u)),
          Outof: "".concat(p, "/10"),
          PersonaName: D.IL[p],
          AnimationState: v,
          FillColor: {
            r: g.r,
            g: g.g,
            b: g.b,
            a: 255 * g.a
          },
          PowerMeter: (0, T.QB)(f),
          Icon: Z[p],
          Illustration: G[p],
          reducedMotion: b
        },
        withReducedMotion: "play"
      })
    }), n <= D.ij.END_REWARD && (0, r.jsx)("div", {
      className: M.content,
      children: (0, r.jsx)(C.Z, {
        onClick: l,
        muteSound: true,
        children: (0, r.jsx)(R.Z, {
          variant: "eyebrow",
          className: M.buttonCTA,
          children: L.intl.string(L.t.dcztdU)
        })
      })
    })]
  })
}

function V() {
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
    null != require && null != module && Chunk793030.current && (0, Chunk1585.ps)({
      analyticsLocations: [Chunk100527.Z.CHECKPOINT],
      initialSelectedDecoration: exports
    })
  }, [require, module, exports]);
  let l = () => {
    Chunk205120 || (Chunk793030.current = true, (0, Chunk515970._Z)())
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
      disabled: Chunk205120,
      onClick: Chunk379649,
      className: Chunk278607.claimButton,
      children: (0, Chunk54381.jsx)(Chunk391876.Z, {
        variant: "eyebrow",
        className: Chunk278607.buttonCTA,
        children: Chunk205120 ? Chunk388032.intl.string(Chunk388032.t.lIsIFo) : Chunk388032.intl.string(Chunk140939.default.mDxM7m)
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
      numEmojisSent: c,
      emojis: f
    } = {
      numEmojisSent: 0,
      emojis: []
    },
    guilds: {
      guilds: p
    } = {
      guilds: []
    },
    applications: {
      applications: _
    } = {
      applications: []
    }
  } = (0, s.e7)([I.Z], () => I.Z.getCheckpointData()), E = (0, s.e7)([d.Z], () => d.Z.useReducedMotion), b = f.length > 0 ? f[0] : null, O = p.length > 0 ? p[0].guild : null, v = _.length > 0 ? _[0].game : null, {
    unit: S,
    duration: A
  } = (0, T.Bi)(a), C = (0, s.e7)([g.Z], () => g.Z.getGuild(null == O ? true : O.id)), N = null != v && null != v.icon ? y.ZP.getApplicationIconURL({
    id: v.id,
    icon: v.icon
  }) : null, P = (0, w.Sg)(), D = (0, i.useMemo)(() => [{
    icon: o.kBi,
    title: L.intl.string(x.default.wWKySP),
    content: (0, r.jsx)(R.Z, {
      variant: "heading-xxl/medium",
      className: j.numeric,
      children: n
    })
  }, {
    icon: o.S6n,
    title: S === l.J6.HOURS ? L.intl.formatToPlainString(x.default.Xu0QsX, {
      numHours: A
    }) : L.intl.string(x.default.RmVTph),
    content: (0, r.jsx)(R.Z, {
      variant: "heading-xxl/medium",
      className: j.numeric,
      children: A
    })
  }, {
    icon: o.EO4,
    title: L.intl.string(x.default.zcbFu1),
    content: (0, r.jsx)(R.Z, {
      variant: "heading-xxl/medium",
      className: j.numeric,
      children: c
    })
  }, {
    icon: o.r7p,
    title: L.intl.string(x.default["3sARW7"]),
    content: (0, r.jsxs)("div", {
      className: j.title,
      children: [null != b ? (0, r.jsxs)("div", {
        className: j.title,
        children: [(0, r.jsx)(u.Z, {
          emojiName: null == b.id ? b.name : "",
          emojiId: b.id,
          animated: !E && b.animated,
          className: M.statIcon
        }), (0, r.jsx)(R.Z, {
          variant: "text-md/medium",
          children: null == b.id ? m.ZP.convertSurrogateToName(b.name) : ":".concat(b.name, ":")
        })]
      }) : (0, r.jsx)(o.IMN, {
        color: t,
        size: "md",
        className: M.statIcon
      }), null == b && (0, r.jsx)(R.Z, {
        variant: "text-md/medium",
        children: L.intl.string(L.t.PoWNfe)
      })]
    })
  }, {
    icon: o.iWm,
    title: L.intl.string(x.default.RbT4Zq),
    content: (0, r.jsxs)("div", {
      className: j.title,
      children: [null != N ? (0, r.jsx)("img", {
        src: N,
        alt: "",
        className: M.statIcon
      }) : (0, r.jsx)(o.IMN, {
        color: t,
        size: "md",
        className: M.statIcon
      }), (0, r.jsx)(R.Z, {
        variant: "text-md/medium",
        children: null != v ? v.name : L.intl.string(L.t.PoWNfe)
      })]
    })
  }, {
    icon: o.QTo,
    title: L.intl.string(x.default["8XPMJj"]),
    content: (0, r.jsxs)("div", {
      className: j.title,
      children: [null != C ? (0, r.jsx)(h.Z, {
        guild: C,
        className: M.statIcon
      }) : (0, r.jsx)(o.IMN, {
        color: t,
        size: "md",
        className: M.statIcon
      }), (0, r.jsx)(R.Z, {
        variant: "text-md/medium",
        children: null != C ? C.name : L.intl.string(L.t.PoWNfe)
      })]
    })
  }], [n, A, S, c, b, E, t, N, v, C]);
  return (0, r.jsx)(w.Qr.Provider, {
    value: P,
    children: (0, r.jsx)("div", {
      className: M.centerContent,
      children: (0, r.jsxs)("div", {
        className: M.contentSectionInner,
        children: [(0, r.jsxs)("div", {
          className: j.title,
          children: [(0, r.jsx)(o.d5i, {
            size: "refresh_sm",
            color: t,
            colorClass: j.iconColor,
            className: j.titleIcon
          }), (0, r.jsx)(R.Z, {
            variant: "eyebrow",
            className: j.eyebrow,
            children: L.intl.string(x.default.ir6nEQ)
          })]
        }), (0, r.jsx)(R.Z, {
          variant: "display-lg",
          className: M.display,
          children: L.intl.string(x.default.y4M1na)
        }), (0, r.jsx)("div", {
          className: M.stats,
          children: D.map((e, t) => (0, r.jsx)(W, U({}, e), t))
        })]
      })
    })
  })
}

function Y(e) {
  let {
    step: t
  } = e, n = (0, i.useContext)(S.Q), a = (0, c.dQu)(n.primaryColor).hex(), o = (0, c.dQu)(n.backgroundOverlayColor).hex();
  return (0, r.jsx)("div", {
    className: t === D.ij.END_CLAIM ? M.contentSectionClaim : M.contentSectionSummary,
    style: {
      backgroundColor: o
    },
    children: (0, r.jsxs)(P.ZP, {
      activeSlide: t,
      children: [(0, r.jsx)(c.Mi4, {
        id: D.ij.END_CLAIM,
        children: (0, r.jsx)(V, {})
      }), (0, r.jsx)(c.Mi4, {
        id: D.ij.END_SUMMARY,
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
  } = e, o = (0, i.useContext)(S.Q), s = (0, c.dQu)(o.primaryColor).hex(), l = (0, w.gl)(), u = (0, w.gl)();
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(w.QR, {
      spring: l,
      className: M.statTitle,
      children: (0, r.jsxs)("div", {
        className: j.title,
        children: [(0, r.jsx)(t, {
          size: "refresh_sm",
          color: s,
          colorClass: j.iconColor,
          className: j.titleIcon
        }), (0, r.jsx)(R.Z, {
          variant: "eyebrow",
          className: j.eyebrow,
          children: n
        })]
      })
    }), (0, r.jsx)(w.QR, {
      spring: u,
      children: a
    })]
  })
}

function K(e) {
  let {
    step: t,
    onNext: n
  } = e;
  return (0, r.jsxs)(N.Z, {
    noPadding: true,
    centered: false,
    className: M.container,
    children: [(0, r.jsx)(F, {
      step: t,
      onNext: n
    }), (0, r.jsx)(Y, {
      step: t
    })]
  })
}