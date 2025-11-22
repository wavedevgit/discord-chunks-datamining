/** Chunk was on 53159 **/
/** chunk id: 896326, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => Z
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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
  Chunk49436 = require("./49436.js"),
  Chunk324805 = require("./324805.js"),
  Chunk981631 = require("./981631.js"),
  Chunk215023 = require("./215023.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk479952 = require("./479952.js"),
  Chunk557256 = require("./557256.js"),
  Chunk582425 = require("./582425.js"),
  Chunk345554 = require("./345554.js"),
  Chunk88490 = require("./88490.js"),
  Chunk466674 = require("./466674.js");

function R() {
  let e = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.useReducedMotion),
    [t, n] = Chunk473749.useState(!module),
    [a, d] = Chunk473749.useState(false),
    m = Chunk473749.useRef(null),
    p = (0, Chunk410030.ZP)(),
    h = (0, Chunk481060.apv)(Chunk335131),
    _ = Chunk507808 ? Chunk345554.Z : Chunk582425.Z,
    j = Chunk507808 ? Chunk466674.Z : Chunk88490.Z;
  Chunk473749.useEffect(() => {
    if (!exports && !module) {
      var n;
      null == (n = Chunk100527.current) || require.play()
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
  return (0, Chunk54381.jsxs)(Chunk790519.animated.div, {
    className: Chunk479952.videoLayers,
    style: Chunk960919,
    children: [!Chunk120356 && (0, Chunk54381.jsx)("div", {
      className: Chunk479952.videoPlaceholder
    }), (0, Chunk54381.jsx)(Chunk70097.Z, {
      ref: Chunk100527,
      autoPlay: false,
      loop: true,
      muted: true,
      playsInline: true,
      className: o()(Chunk479952.videoAsset, {
        [Chunk479952.hidden]: exports
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
      className: o()(Chunk479952.videoAsset, {
        [Chunk479952.hidden]: !exports
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
    onSubmit: s,
    onClose: a,
    state: o
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
        onClick: a
      })
    }), "loading" === o ? (0, r.jsx)("div", {
      className: N.spinnerContainer,
      children: (0, r.jsx)(l.$jN, {
        type: l.RAz.SPINNING_CIRCLE
      })
    }) : "success" === o ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(R, {}), (0, r.jsx)(l.Heading, {
        variant: "heading-lg/medium",
        className: N.title,
        children: S.intl.format(S.t["8l9H0s"], {
          balanceHook: () => (0, r.jsxs)("span", {
            className: N.orbsBalance,
            children: [(0, r.jsx)(y.Z, {
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
          onClick: s
        }), (0, r.jsx)(l.Button, {
          variant: "secondary",
          fullWidth: true,
          text: S.intl.string(S.t["7kTAgJ"]),
          onClick: () => window.open(g.EYA.PAID_TERMS_ORBS)
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
          onClick: a
        })
      })]
    })]
  })
}

function Z(e) {
  var t, n, {
      quest: a,
      onClose: o
    } = e,
    i = function(e, t) {
      if (null == e) return {};
      var n, r, s = function(e, t) {
        if (null == e) return {};
        var n, r, s = {},
          a = Object.keys(e);
        for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (s[n] = e[n]);
        return s
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n])
      }
      return s
    }(e, ["quest", "onClose"]);
  let {
    balance: c
  } = (0, _.A)(), l = function(e, t, n) {
    let [r, a] = s.useState("loading"), [o, i] = s.useState(false), {
      balance: c
    } = (0, _.A)(), l = (0, d.Z)(c), [u, b] = s.useState(false);
    return (s.useEffect(() => {
      let e = null;
      return "success" === r && t && (e = setTimeout(() => {
        b(true)
      }, 1e3)), () => {
        null != e && clearTimeout(e)
      }
    }, [r, t]), s.useEffect(() => {
      !o && null != c && null != l && c > l && i(true)
    }, [c, l, o]), s.useEffect(() => {
      (0, O.QB)(e, x.y$.CROSS_PLATFORM, n).then(e => {
        if ((null == e ? true : e.claimedAt) != null) return void a("success");
        a("error")
      }).catch(() => {
        a("error")
      })
    }, [e, n]), "error" === r) ? r : "success" === r && (o || u) ? "success" : "loading"
  }(a.id, a.preview, i.location), u = s.useCallback(() => {
    o(), (0, h.Y)({
      pageType: g.ZY5.GLOBAL_DISCOVERY_QUESTS,
      sectionType: g.jXE.ORBS_REWARD_MODAL,
      ctaObject: g.qAy.CTA_TO_ORBS_SHOP
    }), (0, p.mK)({
      tab: C.AW.ORBS,
      analyticsLocations: [],
      analyticsSource: a.id === v.V6 ? m.Z.INTRO_TO_ORBS_QUEST : m.Z.QUEST_HOME_PAGE
    })
  }, [o, a.id]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(j.o, {}), (0, r.jsx)(T, (t = function(e) {
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
      balance: c,
      onClose: o,
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