/** Chunk was on 13025 **/
/** chunk id: 383294, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => L
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk401393 = require("./401393.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk110924 = require("./110924.js"),
  Chunk410030 = require("./410030.js"),
  Chunk607070 = require("./607070.js"),
  Chunk100527 = require("./100527.js"),
  Chunk335131 = require("./335131.js"),
  Chunk70097 = require("./70097.jsx"),
  Chunk507808 = require("./507808.js"),
  Chunk43747 = require("./43747.js"),
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

function T() {
  let e = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.useReducedMotion),
    [t, n] = Chunk647438.useState(!module),
    [c, l] = Chunk647438.useState(false),
    f = Chunk647438.useRef(null),
    p = (0, Chunk410030.ZP)(),
    h = (0, Chunk481060.apv)(Chunk335131),
    g = Chunk507808 ? Chunk345554.Z : Chunk582425.Z,
    _ = Chunk507808 ? Chunk466674.Z : Chunk88490.Z;
  Chunk647438.useEffect(() => {
    if (!exports && !module) {
      var n;
      null == (n = Chunk100527.current) || require.play()
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
  return (0, Chunk951288.jsxs)(Chunk401393.animated.div, {
    className: Chunk378658.videoLayers,
    style: Chunk960919,
    children: [!Chunk120356 && (0, Chunk951288.jsx)("div", {
      className: Chunk378658.videoPlaceholder
    }), (0, Chunk951288.jsx)(Chunk70097.Z, {
      ref: Chunk100527,
      autoPlay: false,
      loop: true,
      muted: true,
      playsInline: true,
      className: o()(Chunk378658.videoAsset, {
        [Chunk378658.hidden]: exports
      }),
      controls: false,
      children: (0, Chunk951288.jsx)("source", {
        src: Chunk82856,
        type: "video/webm"
      })
    }), (0, Chunk951288.jsx)(Chunk70097.Z, {
      autoPlay: true,
      muted: true,
      playsInline: true,
      className: o()(Chunk378658.videoAsset, {
        [Chunk378658.hidden]: !exports
      }),
      controls: false,
      onLoadedData: () => Chunk110924(true),
      onEnded: () => {
        require(false)
      },
      children: (0, Chunk951288.jsx)("source", {
        src: Chunk43747,
        type: "video/webm"
      })
    })]
  })
}

function k(e) {
  let {
    transitionState: t,
    balance: n,
    onSubmit: a,
    onClose: c,
    state: o
  } = e;
  return (0, r.jsxs)(d.Y0X, {
    "data-migration-pending": true,
    transitionState: t,
    size: d.CgR.DYNAMIC,
    className: N.modal,
    parentComponent: "QuestsOrbsRewardModal",
    children: [(0, r.jsx)("div", {
      className: N.header,
      children: (0, r.jsx)(d.olH, {
        "data-migration-pending": true,
        className: N.closeBtn,
        onClick: c
      })
    }), "loading" === o ? (0, r.jsx)("div", {
      className: N.spinnerContainer,
      children: (0, r.jsx)(d.$jN, {
        type: d.RAz.SPINNING_CIRCLE
      })
    }) : "success" === o ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(T, {}), (0, r.jsx)(d.X6q, {
        variant: "heading-lg/medium",
        className: N.title,
        children: S.intl.format(S.t["8l9H0t"], {
          balanceHook: () => (0, r.jsxs)("span", {
            className: N.orbsBalance,
            children: [(0, r.jsx)(x.Z, {
              shouldUseThemeColor: true,
              className: N.orbsBalanceIcon
            }), n]
          })
        })
      }), (0, r.jsx)(d.Text, {
        variant: "text-sm/normal",
        className: N.subtext,
        children: S.intl.string(S.t.EDUOIC)
      }), (0, r.jsxs)(d.hE2, {
        className: N.buttonContainer,
        fullWidthContainer: true,
        fullWidth: true,
        direction: "vertical",
        children: [(0, r.jsx)(d.zxk, {
          variant: "primary",
          fullWidth: true,
          text: S.intl.string(S.t.WYchdX),
          onClick: a
        }), (0, r.jsx)(d.zxk, {
          variant: "secondary",
          fullWidth: true,
          text: S.intl.string(S.t["7kTAgI"]),
          onClick: () => window.open(v.EYA.PAID_TERMS_ORBS)
        })]
      })]
    }) : (0, r.jsxs)("div", {
      className: N.errorContainer,
      children: [(0, r.jsx)("img", {
        alt: "",
        className: N.errorImage,
        src: P
      }), (0, r.jsxs)("div", {
        className: N.errorContentContainer,
        children: [(0, r.jsx)(d.X6q, {
          variant: "heading-xl/medium",
          className: N.errorHeader,
          children: S.intl.string(S.t.tWYWJy)
        }), (0, r.jsx)(d.Text, {
          variant: "text-md/normal",
          color: "text-muted",
          children: S.intl.string(S.t.JNQRU1)
        })]
      }), (0, r.jsx)("div", {
        className: N.buttonContainer,
        children: (0, r.jsx)(d.zxk, {
          variant: "primary",
          fullWidth: true,
          text: S.intl.string(S.t.cpT0Cg),
          onClick: c
        })
      })]
    })]
  })
}

function L(e) {
  var t, n, {
      quest: c,
      onClose: o
    } = e,
    s = function(e, t) {
      if (null == e) return {};
      var n, r, a = function(e, t) {
        if (null == e) return {};
        var n, r, a = {},
          c = Object.keys(e);
        for (r = 0; r < c.length; r++) n = c[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var c = Object.getOwnPropertySymbols(e);
        for (r = 0; r < c.length; r++) n = c[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
      }
      return a
    }(e, ["quest", "onClose"]);
  let {
    balance: i
  } = (0, g.A)(), d = function(e, t, n) {
    let [r, c] = a.useState("loading"), [o, s] = a.useState(false), {
      balance: i
    } = (0, g.A)(), d = (0, l.Z)(i), [u, b] = a.useState(false);
    return (a.useEffect(() => {
      let e = null;
      return "success" === r && t && (e = setTimeout(() => {
        b(true)
      }, 1e3)), () => {
        null != e && clearTimeout(e)
      }
    }, [r, t]), a.useEffect(() => {
      !o && null != i && null != d && i > d && s(true)
    }, [i, d, o]), a.useEffect(() => {
      (0, y.QB)(e, j.y$.CROSS_PLATFORM, n).then(e => {
        if ((null == e ? true : e.claimedAt) != null) return void c("success");
        c("error")
      }).catch(() => {
        c("error")
      })
    }, [e, n]), "error" === r) ? r : "success" === r && (o || u) ? "success" : "loading"
  }(c.id, c.preview, s.location), u = a.useCallback(() => {
    o(), (0, h.Y)({
      pageType: v.ZY5.GLOBAL_DISCOVERY_QUESTS,
      sectionType: v.jXE.ORBS_REWARD_MODAL,
      ctaObject: v.qAy.CTA_TO_ORBS_SHOP
    }), (0, p.mK)({
      openInLayer: false,
      tab: C.AW.ORBS,
      analyticsLocations: [],
      analyticsSource: c.id === O.V6 ? f.Z.INTRO_TO_ORBS_QUEST : f.Z.QUEST_HOME_PAGE
    })
  }, [o, c.id]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(_.o, {}), (0, r.jsx)(k, (t = function(e) {
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
    }({}, s), n = n = {
      balance: i,
      onClose: o,
      onSubmit: u,
      state: d
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