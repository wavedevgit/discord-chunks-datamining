/** Chunk was on 20565 **/
/** chunk id: 383294, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => Z
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk790519 = require("./790519.js"),
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
  Chunk22095 = require("./22095.js"),
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
    [t, n] = Chunk473749.useState(!module),
    [s, d] = Chunk473749.useState(false),
    b = Chunk473749.useRef(null),
    m = (0, Chunk410030.ZP)(),
    h = (0, Chunk481060.apv)(Chunk335131),
    j = Chunk507808 ? Chunk345554.Z : Chunk582425.Z,
    y = Chunk507808 ? Chunk466674.Z : Chunk88490.Z;
  Chunk473749.useEffect(() => {
    if (!exports && !module) {
      var n;
      null == (n = Chunk100527.current) || require.play()
    }
  }, [exports, module]);
  let O = (0, Chunk481060.q_F)({
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
  return (0, Chunk54381.jsxs)(Chunk790519.animated.div, {
    className: Chunk378658.videoLayers,
    style: Chunk960919,
    children: [!Chunk120356 && (0, Chunk54381.jsx)("div", {
      className: Chunk378658.videoPlaceholder
    }), (0, Chunk54381.jsx)(Chunk70097.Z, {
      ref: Chunk100527,
      autoPlay: false,
      loop: true,
      muted: true,
      playsInline: true,
      className: a()(Chunk378658.videoAsset, {
        [Chunk378658.hidden]: exports
      }),
      controls: false,
      children: (0, Chunk54381.jsx)("source", {
        src: Chunk82856,
        type: "video/webm"
      })
    }), (0, Chunk54381.jsx)(Chunk70097.Z, {
      autoPlay: true,
      muted: true,
      playsInline: true,
      className: a()(Chunk378658.videoAsset, {
        [Chunk378658.hidden]: !exports
      }),
      controls: false,
      onLoadedData: () => Chunk110924(true),
      onEnded: () => {
        require(false)
      },
      children: (0, Chunk54381.jsx)("source", {
        src: Chunk43747,
        type: "video/webm"
      })
    })]
  })
}

function T(e) {
  let {
    transitionState: t,
    balance: n,
    onSubmit: c,
    onClose: s,
    state: a
  } = e;
  return (0, r.jsxs)(l.Y0X, {
    "data-migration-pending": true,
    transitionState: t,
    size: l.CgR.DYNAMIC,
    className: N.modal,
    parentComponent: "QuestsOrbsRewardModal",
    children: [(0, r.jsx)("div", {
      className: N.header,
      children: (0, r.jsx)(l.olH, {
        "data-migration-pending": true,
        className: N.closeBtn,
        onClick: s
      })
    }), "loading" === a ? (0, r.jsx)("div", {
      className: N.spinnerContainer,
      children: (0, r.jsx)(l.$jN, {
        type: l.RAz.SPINNING_CIRCLE
      })
    }) : "success" === a ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(R, {}), (0, r.jsx)(l.Heading, {
        variant: "heading-lg/medium",
        className: N.title,
        children: S.intl.format(S.t["8l9H0s"], {
          balanceHook: () => (0, r.jsxs)("span", {
            className: N.orbsBalance,
            children: [(0, r.jsx)(O.Z, {
              shouldUseThemeColor: true,
              className: N.orbsBalanceIcon
            }), n]
          })
        })
      }), (0, r.jsx)(l.Text, {
        variant: "text-sm/normal",
        className: N.subtext,
        children: S.intl.string(S.t.EDUOIH)
      }), (0, r.jsxs)(l.ButtonGroup, {
        className: N.buttonContainer,
        fullWidthContainer: true,
        fullWidth: true,
        direction: "vertical",
        children: [(0, r.jsx)(l.Button, {
          variant: "primary",
          fullWidth: true,
          text: S.intl.string(S.t.WYchde),
          onClick: c
        }), (0, r.jsx)(l.Button, {
          variant: "secondary",
          fullWidth: true,
          text: S.intl.string(S.t["7kTAgJ"]),
          onClick: () => window.open(C.EYA.PAID_TERMS_ORBS)
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
        children: [(0, r.jsx)(l.Heading, {
          variant: "heading-xl/medium",
          className: N.errorHeader,
          children: S.intl.string(S.t["tWYWJ+"])
        }), (0, r.jsx)(l.Text, {
          variant: "text-md/normal",
          color: "text-muted",
          children: S.intl.string(S.t.JNQRU4)
        })]
      }), (0, r.jsx)("div", {
        className: N.buttonContainer,
        children: (0, r.jsx)(l.Button, {
          variant: "primary",
          fullWidth: true,
          text: S.intl.string(S.t.cpT0Cq),
          onClick: s
        })
      })]
    })]
  })
}

function Z(e) {
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
    } = (0, j.A)(), l = (0, d.Z)(i), [u, f] = c.useState(false);
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
      (0, x.QB)(e, v.y$.CROSS_PLATFORM, n).then(e => {
        if ((null == e ? true : e.claimedAt) != null) return void s("success");
        s("error")
      }).catch(() => {
        s("error")
      })
    }, [e, n]), "error" === r) ? r : "success" === r && (a || u) ? "success" : "loading"
  }(s.id, s.preview, o.location), u = c.useCallback(() => {
    a(), (0, h.Y)({
      pageType: C.ZY5.GLOBAL_DISCOVERY_QUESTS,
      sectionType: C.jXE.ORBS_REWARD_MODAL,
      ctaObject: C.qAy.CTA_TO_ORBS_SHOP
    }), (0, m.mK)({
      tab: _.AW.ORBS,
      analyticsLocations: [],
      analyticsSource: s.id === g.V6 ? b.Z.INTRO_TO_ORBS_QUEST : b.Z.QUEST_HOME_PAGE
    })
  }, [a, s.id]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(y.o, {}), (0, r.jsx)(T, (t = function(e) {
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