/** Chunk was on 20565 **/
/** chunk id: 383294, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => k
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk803948 = require("./803948.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk110924 = require("./110924.js"),
  Chunk410030 = require("./410030.js"),
  Chunk607070 = require("./607070.js"),
  Chunk100527 = require("./100527.js"),
  Chunk335131 = require("./335131.js"),
  Chunk70097 = require("./70097.jsx"),
  Chunk507808 = require("./507808.js"),
  Chunk43747 = require("./43747.js"),
  Chunk511050 = require("./511050.js"),
  Chunk82856 = require("./82856.jsx"),
  Chunk960919 = require("./960919.jsx"),
  Chunk272008 = require("./272008.js"),
  Chunk497505 = require("./497505.js"),
  Chunk46140 = require("./46140.js"),
  Chunk981631 = require("./981631.js"),
  Chunk215023 = require("./215023.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk378658 = require("./378658.js"),
  Chunk557256 = require("./557256.js"),
  Chunk582425 = require("./582425.js"),
  Chunk345554 = require("./345554.js"),
  Chunk88490 = require("./88490.js"),
  Chunk466674 = require("./466674.js");

function R() {
  let e = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.useReducedMotion),
    [t, n] = Chunk647438.useState(!module),
    [s, l] = Chunk647438.useState(false),
    u = Chunk647438.useRef(null),
    m = (0, Chunk410030.ZP)(),
    p = (0, Chunk481060.apv)(Chunk100527),
    O = Chunk335131 ? Chunk345554.Z : Chunk582425.Z,
    j = Chunk335131 ? Chunk466674.Z : Chunk88490.Z;
  Chunk647438.useEffect(() => {
    if (!exports && !module) {
      var n;
      null == (n = Chunk110924.current) || require.play()
    }
  }, [exports, module]);
  let y = (0, Chunk481060.q_F)({
    from: {
      y: 50
    },
    to: {
      y: 0
    },
    config: {
      tension: 170,
      friction: 26
    }
  });
  return (0, Chunk951288.jsxs)(Chunk803948.animated.div, {
    className: Chunk378658.videoLayers,
    style: Chunk511050,
    children: [!Chunk120356 && (0, Chunk951288.jsx)("div", {
      className: Chunk378658.videoPlaceholder
    }), (0, Chunk951288.jsx)(Chunk70097.Z, {
      ref: Chunk110924,
      autoPlay: false,
      loop: true,
      muted: true,
      playsInline: true,
      className: a()(Chunk378658.videoAsset, {
        [Chunk378658.hidden]: exports
      }),
      controls: false,
      children: (0, Chunk951288.jsx)("source", {
        src: Chunk43747,
        type: "video/webm"
      })
    }), (0, Chunk951288.jsx)(Chunk70097.Z, {
      autoPlay: true,
      muted: true,
      playsInline: true,
      className: a()(Chunk378658.videoAsset, {
        [Chunk378658.hidden]: !exports
      }),
      controls: false,
      onLoadedData: () => Chunk755721(true),
      onEnded: () => {
        require(false)
      },
      children: (0, Chunk951288.jsx)("source", {
        src: Chunk507808,
        type: "video/webm"
      })
    })]
  })
}

function Z(e) {
  let {
    transitionState: t,
    balance: n,
    onSubmit: c,
    onClose: s,
    state: a
  } = e;
  return (0, r.jsxs)(d.Y0X, {
    "data-migration-pending": true,
    transitionState: t,
    size: d.CgR.DYNAMIC,
    className: P.modal,
    parentComponent: "QuestsOrbsRewardModal",
    children: [(0, r.jsx)("div", {
      className: P.header,
      children: (0, r.jsx)(d.olH, {
        "data-migration-pending": true,
        className: P.closeBtn,
        onClick: s
      })
    }), "loading" === a ? (0, r.jsx)("div", {
      className: P.spinnerContainer,
      children: (0, r.jsx)(d.$jN, {
        type: d.RAz.SPINNING_CIRCLE
      })
    }) : "success" === a ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(R, {}), (0, r.jsx)(d.X6q, {
        variant: "heading-lg/medium",
        className: P.title,
        children: w.intl.format(w.t["8l9H0t"], {
          balanceHook: () => (0, r.jsxs)("span", {
            className: P.orbsBalance,
            children: [(0, r.jsx)(g.Z, {
              shouldUseThemeColor: true,
              className: P.orbsBalanceIcon
            }), n]
          })
        })
      }), (0, r.jsx)(d.Text, {
        variant: "text-sm/normal",
        className: P.subtext,
        children: w.intl.string(w.t.EDUOIC)
      }), (0, r.jsx)(l.zx, {
        className: P.ctaBtn,
        onClick: c,
        children: w.intl.string(w.t.WYchdX)
      }), (0, r.jsx)(l.zx, {
        look: l.iL.LINK,
        color: l.Tt.CUSTOM,
        className: P.orbsTermsButton,
        onClick: () => window.open(S.EYA.PAID_TERMS_ORBS),
        children: w.intl.string(w.t["7kTAgI"])
      })]
    }) : (0, r.jsxs)("div", {
      className: P.errorContainer,
      children: [(0, r.jsx)("img", {
        alt: "",
        className: P.errorImage,
        src: B
      }), (0, r.jsxs)("div", {
        className: P.errorContentContainer,
        children: [(0, r.jsx)(d.X6q, {
          variant: "heading-xl/medium",
          className: P.errorHeader,
          children: w.intl.string(w.t.tWYWJy)
        }), (0, r.jsx)(d.Text, {
          variant: "text-md/normal",
          color: "text-muted",
          children: w.intl.string(w.t.JNQRU1)
        })]
      }), (0, r.jsx)(l.zx, {
        className: P.ctaBtn,
        onClick: s,
        children: w.intl.string(w.t.cpT0Cg)
      })]
    })]
  })
}

function k(e) {
  var t, n, {
      quest: s,
      onClose: a
    } = e,
    o = function(e, t) {
      if (null == e) return {};
      var n, r, c = function(e, t) {
        if (null == e) return {};
        var n, r, c = {},
          s = Object.keys(e);
        for (r = 0; r < s.length; r++) n = s[r], t.indexOf(n) >= 0 || (c[n] = e[n]);
        return c
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for (r = 0; r < s.length; r++) n = s[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (c[n] = e[n])
      }
      return c
    }(e, ["quest", "onClose"]);
  let {
    balance: i
  } = (0, j.A)(), l = function(e, t, n) {
    let [r, s] = c.useState("loading"), [a, o] = c.useState(false), {
      balance: i
    } = (0, j.A)(), l = (0, u.Z)(i), [d, f] = c.useState(false);
    return (c.useEffect(() => {
      let e = null;
      return "success" === r && t && (e = setTimeout(() => {
        f(true)
      }, 1e3)), () => {
        null != e && clearTimeout(e)
      }
    }, [r, t]), c.useEffect(() => {
      !a && null != i && null != l && i > l && o(true)
    }, [i, l, a]), c.useEffect(() => {
      (0, v.QB)(e, _.y$.CROSS_PLATFORM, n).then(e => {
        if ((null == e ? true : e.claimedAt) != null) return void s("success");
        s("error")
      }).catch(() => {
        s("error")
      })
    }, [e, n]), "error" === r) ? r : "success" === r && (a || d) ? "success" : "loading"
  }(s.id, s.preview, o.location), {
    openIntroToOrbsClaimedCoachmark: d
  } = (0, y.Z)({
    location: "QuestsOrbsRewardModal"
  }), f = c.useCallback(() => {
    a(), (0, O.Y)({
      pageType: S.ZY5.GLOBAL_DISCOVERY_QUESTS,
      sectionType: S.jXE.ORBS_REWARD_MODAL,
      ctaObject: S.qAy.CTA_TO_ORBS_SHOP
    }), (0, p.mK)({
      openInLayer: false,
      tab: N.AW.ORBS,
      analyticsLocations: [],
      analyticsSource: s.id === C.V6 ? m.Z.INTRO_TO_ORBS_QUEST : m.Z.QUEST_HOME_PAGE
    }), d({
      delayMS: 300
    })
  }, [a, d, s.id]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(x.o, {}), (0, r.jsx)(Z, (t = function(e) {
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
    }({}, o), n = n = {
      balance: i,
      onClose: a,
      onSubmit: f,
      state: l
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t))]
  })
}