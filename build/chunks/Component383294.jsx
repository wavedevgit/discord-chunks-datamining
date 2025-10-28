/** Chunk was on 13025 **/
/** chunk id: 383294, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => L
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  c = require.n(Chunk120356),
  Chunk13941 = require("./13941.js"),
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

function Z() {
  let e = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.useReducedMotion),
    [t, n] = Chunk647438.useState(!module),
    [o, d] = Chunk647438.useState(false),
    b = Chunk647438.useRef(null),
    p = (0, Chunk410030.ZP)(),
    m = (0, Chunk481060.apv)(Chunk335131),
    _ = Chunk507808 ? Chunk345554.Z : Chunk582425.Z,
    g = Chunk507808 ? Chunk466674.Z : Chunk88490.Z;
  Chunk647438.useEffect(() => {
    if (!exports && !module) {
      var n;
      null == (n = Chunk100527.current) || require.play()
    }
  }, [exports, module]);
  let h = (0, Chunk481060.q_F)({
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
  return (0, Chunk951288.jsxs)(Chunk13941.animated.div, {
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
      className: c()(Chunk378658.videoAsset, {
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
      className: c()(Chunk378658.videoAsset, {
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

function I(e) {
  let {
    transitionState: t,
    balance: n,
    onSubmit: a,
    onClose: o,
    state: c
  } = e;
  return (0, r.jsxs)(l.Y0X, {
    "data-migration-pending": true,
    transitionState: t,
    size: l.CgR.DYNAMIC,
    className: R.modal,
    parentComponent: "QuestsOrbsRewardModal",
    children: [(0, r.jsx)("div", {
      className: R.header,
      children: (0, r.jsx)(l.olH, {
        "data-migration-pending": true,
        className: R.closeBtn,
        onClick: o
      })
    }), "loading" === c ? (0, r.jsx)("div", {
      className: R.spinnerContainer,
      children: (0, r.jsx)(l.$jN, {
        type: l.RAz.SPINNING_CIRCLE
      })
    }) : "success" === c ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(Z, {}), (0, r.jsx)(l.Heading, {
        variant: "heading-lg/medium",
        className: R.title,
        children: x.intl.format(x.t["8l9H0s"], {
          balanceHook: () => (0, r.jsxs)("span", {
            className: R.orbsBalance,
            children: [(0, r.jsx)(h.Z, {
              shouldUseThemeColor: true,
              className: R.orbsBalanceIcon
            }), n]
          })
        })
      }), (0, r.jsx)(l.Text, {
        variant: "text-sm/normal",
        className: R.subtext,
        children: x.intl.string(x.t.EDUOIH)
      }), (0, r.jsxs)(l.ButtonGroup, {
        className: R.buttonContainer,
        fullWidthContainer: true,
        fullWidth: true,
        direction: "vertical",
        children: [(0, r.jsx)(l.Button, {
          variant: "primary",
          fullWidth: true,
          text: x.intl.string(x.t.WYchde),
          onClick: a
        }), (0, r.jsx)(l.Button, {
          variant: "secondary",
          fullWidth: true,
          text: x.intl.string(x.t["7kTAgJ"]),
          onClick: () => window.open(v.EYA.PAID_TERMS_ORBS)
        })]
      })]
    }) : (0, r.jsxs)("div", {
      className: R.errorContainer,
      children: [(0, r.jsx)("img", {
        alt: "",
        className: R.errorImage,
        src: S
      }), (0, r.jsxs)("div", {
        className: R.errorContentContainer,
        children: [(0, r.jsx)(l.Heading, {
          variant: "heading-xl/medium",
          className: R.errorHeader,
          children: x.intl.string(x.t["tWYWJ+"])
        }), (0, r.jsx)(l.Text, {
          variant: "text-md/normal",
          color: "text-muted",
          children: x.intl.string(x.t.JNQRU4)
        })]
      }), (0, r.jsx)("div", {
        className: R.buttonContainer,
        children: (0, r.jsx)(l.Button, {
          variant: "primary",
          fullWidth: true,
          text: x.intl.string(x.t.cpT0Cq),
          onClick: o
        })
      })]
    })]
  })
}

function L(e) {
  var t, n, {
      quest: o,
      onClose: c
    } = e,
    i = function(e, t) {
      if (null == e) return {};
      var n, r, a = function(e, t) {
        if (null == e) return {};
        var n, r, a = {},
          o = Object.keys(e);
        for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
      }
      return a
    }(e, ["quest", "onClose"]);
  let {
    balance: s
  } = (0, _.A)(), l = function(e, t, n) {
    let [r, o] = a.useState("loading"), [c, i] = a.useState(false), {
      balance: s
    } = (0, _.A)(), l = (0, d.Z)(s), [u, f] = a.useState(false);
    return (a.useEffect(() => {
      let e = null;
      return "success" === r && t && (e = setTimeout(() => {
        f(true)
      }, 1e3)), () => {
        null != e && clearTimeout(e)
      }
    }, [r, t]), a.useEffect(() => {
      !c && null != s && null != l && s > l && i(true)
    }, [s, l, c]), a.useEffect(() => {
      (0, O.QB)(e, j.y$.CROSS_PLATFORM, n).then(e => {
        if ((null == e ? true : e.claimedAt) != null) return void o("success");
        o("error")
      }).catch(() => {
        o("error")
      })
    }, [e, n]), "error" === r) ? r : "success" === r && (c || u) ? "success" : "loading"
  }(o.id, o.preview, i.location), u = a.useCallback(() => {
    c(), (0, m.Y)({
      pageType: v.ZY5.GLOBAL_DISCOVERY_QUESTS,
      sectionType: v.jXE.ORBS_REWARD_MODAL,
      ctaObject: v.qAy.CTA_TO_ORBS_SHOP
    }), (0, p.mK)({
      tab: E.AW.ORBS,
      analyticsLocations: [],
      analyticsSource: o.id === C.V6 ? b.Z.INTRO_TO_ORBS_QUEST : b.Z.QUEST_HOME_PAGE
    })
  }, [c, o.id]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(g.o, {}), (0, r.jsx)(I, (t = function(e) {
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
    }({}, i), n = n = {
      balance: s,
      onClose: c,
      onSubmit: u,
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