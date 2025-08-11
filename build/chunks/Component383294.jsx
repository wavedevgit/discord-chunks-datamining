/** Chunk was on 94784 **/
/** chunk id: 383294, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => R
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk126663 = require("./126663.js"),
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
  Chunk696693 = require("./696693.js"),
  Chunk557256 = require("./557256.js"),
  Chunk582425 = require("./582425.js"),
  Chunk345554 = require("./345554.js"),
  Chunk88490 = require("./88490.js"),
  Chunk466674 = require("./466674.js");

function L() {
  let e = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.useReducedMotion),
    [n, t] = Chunk73800.useState(!module),
    [c, l] = Chunk73800.useState(false),
    u = Chunk73800.useRef(null),
    p = (0, Chunk410030.ZP)(),
    m = (0, Chunk481060.apv)(Chunk100527),
    _ = Chunk335131 ? Chunk345554.Z : Chunk582425.Z,
    h = Chunk335131 ? Chunk466674.Z : Chunk88490.Z;
  Chunk73800.useEffect(() => {
    if (!exports && !module) {
      var t;
      null == (t = Chunk110924.current) || require.play()
    }
  }, [exports, module]);
  let x = (0, Chunk481060.q_F)({
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
  return (0, Chunk255367.jsxs)(Chunk126663.animated.div, {
    className: Chunk696693.videoLayers,
    style: Chunk511050,
    children: [!Chunk120356 && (0, Chunk255367.jsx)("div", {
      className: Chunk696693.videoPlaceholder
    }), (0, Chunk255367.jsx)(Chunk70097.Z, {
      ref: Chunk110924,
      autoPlay: false,
      loop: true,
      muted: true,
      playsInline: true,
      className: o()(Chunk696693.videoAsset, {
        [Chunk696693.hidden]: exports
      }),
      controls: false,
      children: (0, Chunk255367.jsx)("source", {
        src: Chunk43747,
        type: "video/webm"
      })
    }), (0, Chunk255367.jsx)(Chunk70097.Z, {
      autoPlay: true,
      muted: true,
      playsInline: true,
      className: o()(Chunk696693.videoAsset, {
        [Chunk696693.hidden]: !exports
      }),
      controls: false,
      onLoadedData: () => Chunk755721(true),
      onEnded: () => {
        require(false)
      },
      children: (0, Chunk255367.jsx)("source", {
        src: Chunk507808,
        type: "video/webm"
      })
    })]
  })
}

function A(e) {
  let {
    transitionState: n,
    balance: t,
    onSubmit: a,
    onClose: c,
    state: o
  } = e;
  return (0, r.jsxs)(d.Y0X, {
    transitionState: n,
    size: d.CgR.DYNAMIC,
    className: Z.modal,
    parentComponent: "QuestsOrbsRewardModal",
    children: [(0, r.jsx)("div", {
      className: Z.header,
      children: (0, r.jsx)(d.olH, {
        className: Z.closeBtn,
        onClick: c
      })
    }), "loading" === o ? (0, r.jsx)("div", {
      className: Z.spinnerContainer,
      children: (0, r.jsx)(d.$jN, {
        type: d.RAz.SPINNING_CIRCLE
      })
    }) : "success" === o ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(L, {}), (0, r.jsx)(d.X6q, {
        variant: "heading-lg/medium",
        className: Z.title,
        children: B.intl.format(B.t["8l9H0t"], {
          balanceHook: () => (0, r.jsxs)("span", {
            className: Z.orbsBalance,
            children: [(0, r.jsx)(O.Z, {
              shouldUseThemeColor: true,
              className: Z.orbsBalanceIcon
            }), t]
          })
        })
      }), (0, r.jsx)(d.Text, {
        variant: "text-sm/normal",
        className: Z.subtext,
        children: B.intl.string(B.t.EDUOIC)
      }), (0, r.jsx)(l.zx, {
        className: Z.ctaBtn,
        onClick: a,
        children: B.intl.string(B.t.WYchdX)
      }), (0, r.jsx)(l.zx, {
        look: l.iL.LINK,
        color: l.Tt.CUSTOM,
        className: Z.orbsTermsButton,
        onClick: () => window.open(S.EYA.PAID_TERMS_ORBS),
        children: B.intl.string(B.t["7kTAgI"])
      })]
    }) : (0, r.jsxs)("div", {
      className: Z.errorContainer,
      children: [(0, r.jsx)("img", {
        alt: "",
        className: Z.errorImage,
        src: E
      }), (0, r.jsxs)("div", {
        className: Z.errorContentContainer,
        children: [(0, r.jsx)(d.X6q, {
          variant: "heading-xl/medium",
          className: Z.errorHeader,
          children: B.intl.string(B.t.tWYWJy)
        }), (0, r.jsx)(d.Text, {
          variant: "text-md/normal",
          color: "text-muted",
          children: B.intl.string(B.t.JNQRU1)
        })]
      }), (0, r.jsx)(l.zx, {
        className: Z.ctaBtn,
        onClick: c,
        children: B.intl.string(B.t.cpT0Cg)
      })]
    })]
  })
}

function R(e) {
  var n, t, {
      quest: c,
      onClose: o
    } = e,
    s = function(e, n) {
      if (null == e) return {};
      var t, r, a = function(e, n) {
        if (null == e) return {};
        var t, r, a = {},
          c = Object.keys(e);
        for (r = 0; r < c.length; r++) t = c[r], n.indexOf(t) >= 0 || (a[t] = e[t]);
        return a
      }(e, n);
      if (Object.getOwnPropertySymbols) {
        var c = Object.getOwnPropertySymbols(e);
        for (r = 0; r < c.length; r++) t = c[r], !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (a[t] = e[t])
      }
      return a
    }(e, ["quest", "onClose"]);
  let {
    balance: i
  } = (0, h.A)(), l = function(e, n, t) {
    let [r, c] = a.useState("loading"), [o, s] = a.useState(false), {
      balance: i
    } = (0, h.A)(), l = (0, u.Z)(i), [d, b] = a.useState(false);
    return (a.useEffect(() => {
      let e = null;
      return "success" === r && n && (e = setTimeout(() => {
        b(true)
      }, 1e3)), () => {
        null != e && clearTimeout(e)
      }
    }, [r, n]), a.useEffect(() => {
      !o && null != i && null != l && i > l && s(true)
    }, [i, l, o]), a.useEffect(() => {
      (0, j.QB)(e, C.y$.CROSS_PLATFORM, t).then(e => {
        if ((null == e ? true : e.claimedAt) != null) return void c("success");
        c("error")
      }).catch(() => {
        c("error")
      })
    }, [e, t]), "error" === r) ? r : "success" === r && (o || d) ? "success" : "loading"
  }(c.id, c.preview, s.location), {
    openIntroToOrbsClaimedCoachmark: d
  } = (0, x.Z)({
    location: "QuestsOrbsRewardModal"
  }), b = a.useCallback(() => {
    o(), (0, _.Y)({
      pageType: S.ZY5.GLOBAL_DISCOVERY_QUESTS,
      sectionType: S.jXE.ORBS_REWARD_MODAL,
      ctaObject: S.qAy.CTA_TO_ORBS_SHOP
    }), (0, m.mK)({
      openInLayer: false,
      tab: N.AW.ORBS,
      analyticsLocations: [],
      analyticsSource: c.id === v.V6 ? p.Z.INTRO_TO_ORBS_QUEST : p.Z.QUEST_HOME_PAGE
    }), d({
      delayMS: 300
    })
  }, [o, d, c.id]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(y.o, {}), (0, r.jsx)(A, (n = function(e) {
      for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
          r = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.forEach(function(n) {
          var r;
          r = t[n], n in e ? Object.defineProperty(e, n, {
            value: r,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[n] = r
        })
      }
      return e
    }({}, s), t = t = {
      balance: i,
      onClose: o,
      onSubmit: b,
      state: l
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : (function(e, n) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t.push.apply(t, r)
      }
      return t
    })(Object(t)).forEach(function(e) {
      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
    }), n))]
  })
}