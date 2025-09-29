/** Chunk was on 81501 **/
/** chunk id: 383294, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => T
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk488290 = require("./488290.js"),
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
  Chunk898694 = require("./898694.js"),
  Chunk557256 = require("./557256.js"),
  Chunk582425 = require("./582425.js"),
  Chunk345554 = require("./345554.js"),
  Chunk88490 = require("./88490.js"),
  Chunk466674 = require("./466674.js");

function B() {
  let e = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.useReducedMotion),
    [t, n] = Chunk647438.useState(!module),
    [i, d] = Chunk647438.useState(false),
    _ = Chunk647438.useRef(null),
    b = (0, Chunk410030.ZP)(),
    C = (0, Chunk481060.apv)(Chunk335131),
    m = Chunk507808 ? Chunk345554.Z : Chunk582425.Z,
    p = Chunk507808 ? Chunk466674.Z : Chunk88490.Z;
  Chunk647438.useEffect(() => {
    if (!exports && !module) {
      var n;
      null == (n = Chunk100527.current) || require.play()
    }
  }, [exports, module]);
  let g = (0, Chunk481060.q_F)({
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
  return (0, Chunk951288.jsxs)(Chunk488290.animated.div, {
    className: Chunk898694.videoLayers,
    style: Chunk960919,
    children: [!Chunk120356 && (0, Chunk951288.jsx)("div", {
      className: Chunk898694.videoPlaceholder
    }), (0, Chunk951288.jsx)(Chunk70097.Z, {
      ref: Chunk100527,
      autoPlay: false,
      loop: true,
      muted: true,
      playsInline: true,
      className: l()(Chunk898694.videoAsset, {
        [Chunk898694.hidden]: exports
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
      className: l()(Chunk898694.videoAsset, {
        [Chunk898694.hidden]: !exports
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

function U(e) {
  let {
    transitionState: t,
    balance: n,
    onSubmit: a,
    onClose: i,
    state: l
  } = e;
  return (0, r.jsxs)(o.Y0X, {
    "data-migration-pending": true,
    transitionState: t,
    size: o.CgR.DYNAMIC,
    className: v.modal,
    parentComponent: "QuestsOrbsRewardModal",
    children: [(0, r.jsx)("div", {
      className: v.header,
      children: (0, r.jsx)(o.olH, {
        "data-migration-pending": true,
        className: v.closeBtn,
        onClick: i
      })
    }), "loading" === l ? (0, r.jsx)("div", {
      className: v.spinnerContainer,
      children: (0, r.jsx)(o.$jN, {
        type: o.RAz.SPINNING_CIRCLE
      })
    }) : "success" === l ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(B, {}), (0, r.jsx)(o.X6q, {
        variant: "heading-lg/medium",
        className: v.title,
        children: S.intl.format(S.t["8l9H0t"], {
          balanceHook: () => (0, r.jsxs)("span", {
            className: v.orbsBalance,
            children: [(0, r.jsx)(g.Z, {
              shouldUseThemeColor: true,
              className: v.orbsBalanceIcon
            }), n]
          })
        })
      }), (0, r.jsx)(o.Text, {
        variant: "text-sm/normal",
        className: v.subtext,
        children: S.intl.string(S.t.EDUOIC)
      }), (0, r.jsxs)(o.hE2, {
        className: v.buttonContainer,
        fullWidthContainer: true,
        fullWidth: true,
        direction: "vertical",
        children: [(0, r.jsx)(o.zxk, {
          variant: "primary",
          fullWidth: true,
          text: S.intl.string(S.t.WYchdX),
          onClick: a
        }), (0, r.jsx)(o.zxk, {
          variant: "secondary",
          fullWidth: true,
          text: S.intl.string(S.t["7kTAgI"]),
          onClick: () => window.open(O.EYA.PAID_TERMS_ORBS)
        })]
      })]
    }) : (0, r.jsxs)("div", {
      className: v.errorContainer,
      children: [(0, r.jsx)("img", {
        alt: "",
        className: v.errorImage,
        src: N
      }), (0, r.jsxs)("div", {
        className: v.errorContentContainer,
        children: [(0, r.jsx)(o.X6q, {
          variant: "heading-xl/medium",
          className: v.errorHeader,
          children: S.intl.string(S.t.tWYWJy)
        }), (0, r.jsx)(o.Text, {
          variant: "text-md/normal",
          color: "text-muted",
          children: S.intl.string(S.t.JNQRU1)
        })]
      }), (0, r.jsx)("div", {
        className: v.buttonContainer,
        children: (0, r.jsx)(o.zxk, {
          variant: "primary",
          fullWidth: true,
          text: S.intl.string(S.t.cpT0Cg),
          onClick: i
        })
      })]
    })]
  })
}

function T(e) {
  var t, n, {
      quest: i,
      onClose: l
    } = e,
    c = function(e, t) {
      if (null == e) return {};
      var n, r, a = function(e, t) {
        if (null == e) return {};
        var n, r, a = {},
          i = Object.keys(e);
        for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
      }
      return a
    }(e, ["quest", "onClose"]);
  let {
    balance: s
  } = (0, m.A)(), o = function(e, t, n) {
    let [r, i] = a.useState("loading"), [l, c] = a.useState(false), {
      balance: s
    } = (0, m.A)(), o = (0, d.Z)(s), [u, h] = a.useState(false);
    return (a.useEffect(() => {
      let e = null;
      return "success" === r && t && (e = setTimeout(() => {
        h(true)
      }, 1e3)), () => {
        null != e && clearTimeout(e)
      }
    }, [r, t]), a.useEffect(() => {
      !l && null != s && null != o && s > o && c(true)
    }, [s, o, l]), a.useEffect(() => {
      (0, R.QB)(e, E.y$.CROSS_PLATFORM, n).then(e => {
        if ((null == e ? true : e.claimedAt) != null) return void i("success");
        i("error")
      }).catch(() => {
        i("error")
      })
    }, [e, n]), "error" === r) ? r : "success" === r && (l || u) ? "success" : "loading"
  }(i.id, i.preview, c.location), u = a.useCallback(() => {
    l(), (0, C.Y)({
      pageType: O.ZY5.GLOBAL_DISCOVERY_QUESTS,
      sectionType: O.jXE.ORBS_REWARD_MODAL,
      ctaObject: O.qAy.CTA_TO_ORBS_SHOP
    }), (0, b.mK)({
      openInLayer: false,
      tab: A.AW.ORBS,
      analyticsLocations: [],
      analyticsSource: i.id === y.V6 ? _.Z.INTRO_TO_ORBS_QUEST : _.Z.QUEST_HOME_PAGE
    })
  }, [l, i.id]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(p.o, {}), (0, r.jsx)(U, (t = function(e) {
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
    }({}, c), n = n = {
      balance: s,
      onClose: l,
      onSubmit: u,
      state: o
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