/** Chunk was on 838 **/
/** chunk id: 824393, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => y
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk921254 = require("./921254.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk211266 = require("./211266.js"),
  Chunk410030 = require("./410030.js"),
  Chunk607070 = require("./607070.js"),
  Chunk975298 = require("./975298.js"),
  Chunk530618 = require("./530618.jsx"),
  Chunk688465 = require("./688465.jsx"),
  Chunk98278 = require("./98278.js"),
  Chunk741245 = require("./741245.jsx"),
  Chunk313789 = require("./313789.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk931331 = require("./931331.jsx"),
  Chunk55935 = require("./55935.js"),
  Chunk63063 = require("./63063.js"),
  Chunk22095 = require("./22095.js"),
  Chunk497505 = require("./497505.js"),
  Chunk502288 = require("./502288.js"),
  Chunk981631 = require("./981631.js"),
  Chunk675654 = require("./675654.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk77397 = require("./77397.js"),
  Chunk851750 = require("./851750.js"),
  Chunk946790 = require("./946790.js"),
  Chunk593639 = require("./593639.js");

function b(e) {
  var t, r, i, c, m;
  let {
    transitionState: C,
    onClose: h,
    quest: x,
    location: g
  } = e, p = a.useRef(null), [N, j] = a.useState(null), f = a.useRef(new s.qA), v = (0, l.e7)([u.Z], () => u.Z.useReducedMotion), k = (null == (t = x.userStatus) ? true : t.claimedAt) != null, [I, S] = a.useState({
    state: "loading"
  });
  a.useEffect(() => {
    k || (0, H.QB)(x.id, R.y$.CROSS_PLATFORM, g).then(e => {
      if ((null == e ? true : e.claimedAt) != null) return void S({
        state: "claimed",
        entitlements: e
      });
      S({
        state: "error",
        errorReason: 0
      })
    }).catch(() => {
      S({
        state: "error",
        errorReason: 0
      })
    })
  }, [x, g, k]);
  let P = "loading" === I.state,
    L = !v && !k && "claimed" === I.state,
    M = "claimed" === I.state && null != I.entitlements && I.entitlements.items.some(e => e.consumed);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(s.O_, {
      ref: j,
      className: B.confettiCanvas,
      environment: f.current
    }), (0, n.jsx)("div", {
      ref: p,
      children: (0, n.jsx)(d.Y0X, {
        "data-migration-pending": true,
        transitionState: C,
        size: d.CgR.DYNAMIC,
        className: o()(B.rootContainer, {
          [B.rootContainerLoading]: P
        }),
        hideShadow: true,
        parentComponent: "QuestsNitroRewardModal",
        children: P ? (0, n.jsx)(d.$jN, {
          type: d.$jN.Type.SPINNING_CIRCLE
        }) : "error" === I.state ? (0, n.jsx)(w, {
          errorReason: I.errorReason,
          onClose: h
        }) : M ? (0, n.jsx)(F, {
          duration: (0, T.kb)(null != (c = null == (r = I.entitlements) ? true : r.items) ? c : []),
          onClose: h
        }) : (0, n.jsx)(Z, {
          duration: (0, T.kb)(null != (m = null == (i = I.entitlements) ? true : i.items) ? m : []),
          onClose: h
        })
      })
    }), L && (0, n.jsx)(_.Z, {
      confettiTarget: p.current,
      confettiCanvas: N,
      sprites: A.CA,
      colors: A.Br
    })]
  })
}

function w(e) {
  let {
    onClose: t
  } = e, r = S.intl.string(S.t.PbaUtv);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(d.xBx, {
      "data-migration-pending": true,
      separator: false,
      className: B.errorHeader,
      children: [(0, n.jsx)(d.Heading, {
        className: B.errorTitle,
        variant: "heading-xl/medium",
        children: S.intl.string(S.t.UleS91)
      }), (0, n.jsx)(d.olH, {
        "data-migration-pending": true,
        onClick: t,
        className: B.errorModalCloseButton
      })]
    }), (0, n.jsx)(d.hzk, {
      "data-migration-pending": true,
      className: B.errorContent,
      children: (0, n.jsx)(d.Text, {
        variant: "text-md/normal",
        children: r
      })
    }), (0, n.jsx)(d.mzw, {
      "data-migration-pending": true,
      className: B.errorModalFooter,
      children: (0, n.jsx)(d.Button, {
        variant: "primary",
        text: S.intl.string(S.t.cpT0Cq),
        onClick: t
      })
    })]
  })
}

function F(e) {
  let {
    duration: t,
    onClose: r
  } = e, {
    theme: i
  } = (0, d.TCT)(), o = (0, C.Z)({
    forceFetch: true
  }), s = (0, f.vc)(o.endsAt, "L"), l = a.useCallback(() => {
    (0, x.$)(r)
  }, [r]);
  return o.fractionalState === I.a$.NONE ? (0, n.jsx)("div", {
    className: B.spinnerContainer,
    children: (0, n.jsx)(d.$jN, {
      type: d.$jN.Type.SPINNING_CIRCLE
    })
  }) : (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)("div", {
      className: B.nitroHeaderContainer,
      children: [(0, n.jsx)("div", {
        className: B.nitroHeaderClouds
      }), (0, n.jsx)(j.Z, {
        className: B.nitroHeaderWordmark
      }), (0, n.jsx)(d.Eep, {
        src: L,
        width: 110,
        height: 82,
        zoomable: false,
        className: B.nitroHeaderWumpus
      }), (0, n.jsx)(d.olH, {
        "data-migration-pending": true,
        className: B.nitroHeaderClose,
        onClick: r
      })]
    }), (0, n.jsxs)(d.mzw, {
      "data-migration-pending": true,
      className: B.footerContainer,
      separator: false,
      children: [(0, n.jsx)(h.Z, {
        className: B.beta
      }), (0, n.jsx)(g.ZP, {
        className: B.nitroHeading,
        premiumType: I.PremiumTypes.TIER_2,
        type: g.ZP.Types.PREMIUM_ACTIVATED,
        theme: i
      }), (0, n.jsx)(d.Text, {
        variant: "text-md/normal",
        className: B.text,
        children: S.intl.format(S.t.tgc1ol, {
          helpCenterLink: v.Z.getArticleURL(k.BhN.FRACTIONAL_PREMIUM_ABOUT),
          duration: t,
          expirationDate: s
        })
      }), (0, n.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: B.cta,
        children: (0, n.jsx)(d.Button, {
          variant: "primary",
          text: S.intl.string(S.t["eQX+gg"]),
          onClick: l
        })
      })]
    })]
  })
}

function Z(e) {
  let {
    duration: t,
    onClose: r
  } = e, i = (0, C.Z)({
    forceFetch: true
  }), s = (0, m.ZP)(), l = a.useCallback(() => {
    (0, N.openUserSettings)(p.n.SUBSCRIPTIONS_PANEL, {
      section: k.oAB.SUBSCRIPTIONS
    }), r()
  }, [r]);
  if (!i.fetched) return (0, n.jsx)("div", {
    className: B.spinnerContainer,
    children: (0, n.jsx)(d.$jN, {
      type: d.$jN.Type.SPINNING_CIRCLE
    })
  });
  let c = i.isFractionalPremiumActive ? S.intl.string(S.t["1ku8i2"]) : S.intl.format(S.t.fI1nL2, {
    helpCenterLink: v.Z.getArticleURL(k.BhN.FRACTIONAL_PREMIUM_ABOUT),
    duration: t
  });
  return (0, n.jsx)(d.f6W, {
    theme: s,
    children: e => (0, n.jsxs)("div", {
      className: o()(B.claimedRootContainer, e),
      children: [(0, n.jsxs)("div", {
        className: B.headerContainer,
        children: [(0, n.jsx)("img", {
          className: B.headerBackground,
          src: P,
          alt: S.intl.string(S.t["8SsCa3"])
        }), (0, n.jsx)(h.Z, {
          className: B.beta
        }), (0, n.jsxs)("div", {
          className: B.headerForeground,
          children: [(0, n.jsx)("div", {
            className: B.rewardAssetContainer,
            children: (0, n.jsx)("img", {
              src: M,
              alt: S.intl.string(S.t.OhPMaq),
              height: 120
            })
          }), (0, n.jsx)(d.olH, {
            "data-migration-pending": true,
            className: B.close,
            withCircleBackground: true,
            onClick: r
          })]
        })]
      }), (0, n.jsxs)(d.mzw, {
        "data-migration-pending": true,
        className: B.footerContainer,
        separator: false,
        children: [(0, n.jsx)(d.Heading, {
          variant: "heading-lg/bold",
          className: B.heading,
          children: S.intl.string(S.t["+PHEo+"])
        }), (0, n.jsx)(d.Text, {
          variant: "text-sm/normal",
          className: B.text,
          children: c
        }), (0, n.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: B.cta2,
          children: (0, n.jsx)(d.Button, {
            variant: "primary",
            text: S.intl.string(S.t.LnsQGZ),
            onClick: l
          })
        })]
      })]
    })
  })
}

function y(e) {
  let {
    quest: t,
    location: r,
    onClose: i,
    transitionState: o
  } = e, s = (0, c.Z)(() => {
    var e;
    return (null == (e = t.userStatus) ? true : e.claimedAt) != null
  });
  return (a.useEffect(() => {
    s && i()
  }, [i, s]), s) ? null : (0, n.jsx)(b, {
    onClose: i,
    transitionState: o,
    quest: t,
    location: r
  })
}