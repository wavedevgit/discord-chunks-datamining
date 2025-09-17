/** Chunk was on 838 **/
/** chunk id: 824393, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => E
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk238651 = require("./238651.js"),
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
  Chunk272008 = require("./272008.js"),
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
  var t, r, i, d, m;
  let {
    transitionState: C,
    onClose: _,
    quest: h,
    location: g
  } = e, p = a.useRef(null), [N, j] = a.useState(null), f = a.useRef(new s.qA), v = (0, l.e7)([u.Z], () => u.Z.useReducedMotion), T = (null == (t = h.userStatus) ? true : t.claimedAt) != null, [I, S] = a.useState({
    state: "loading"
  });
  a.useEffect(() => {
    T || (0, k.QB)(h.id, R.y$.CROSS_PLATFORM, g).then(e => {
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
  }, [h, g, T]);
  let L = "loading" === I.state,
    M = !v && !T && "claimed" === I.state,
    P = "claimed" === I.state && null != I.entitlements && I.entitlements.items.some(e => e.consumed);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(s.O_, {
      ref: j,
      className: B.confettiCanvas,
      environment: f.current
    }), (0, n.jsx)("div", {
      ref: p,
      children: (0, n.jsx)(c.Y0X, {
        "data-migration-pending": true,
        transitionState: C,
        size: c.CgR.DYNAMIC,
        className: o()(B.rootContainer, {
          [B.rootContainerLoading]: L
        }),
        hideShadow: true,
        parentComponent: "QuestsNitroRewardModal",
        children: L ? (0, n.jsx)(c.$jN, {
          type: c.$jN.Type.SPINNING_CIRCLE
        }) : "error" === I.state ? (0, n.jsx)(w, {
          errorReason: I.errorReason,
          onClose: _
        }) : P ? (0, n.jsx)(F, {
          duration: (0, H.kb)(null != (d = null == (r = I.entitlements) ? true : r.items) ? d : []),
          onClose: _
        }) : (0, n.jsx)(y, {
          duration: (0, H.kb)(null != (m = null == (i = I.entitlements) ? true : i.items) ? m : []),
          onClose: _
        })
      })
    }), M && (0, n.jsx)(x.Z, {
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
  } = e, r = S.intl.string(S.t.PbaUtr);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(c.xBx, {
      "data-migration-pending": true,
      separator: false,
      className: B.errorHeader,
      children: [(0, n.jsx)(c.X6q, {
        className: B.errorTitle,
        variant: "heading-xl/medium",
        children: S.intl.string(S.t["UleS9/"])
      }), (0, n.jsx)(c.olH, {
        "data-migration-pending": true,
        onClick: t,
        className: B.errorModalCloseButton
      })]
    }), (0, n.jsx)(c.hzk, {
      "data-migration-pending": true,
      className: B.errorContent,
      children: (0, n.jsx)(c.Text, {
        variant: "text-md/normal",
        children: r
      })
    }), (0, n.jsx)(c.mzw, {
      "data-migration-pending": true,
      className: B.errorModalFooter,
      children: (0, n.jsx)(c.zxk, {
        variant: "primary",
        text: S.intl.string(S.t.cpT0Cg),
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
  } = (0, c.TCT)(), o = (0, C.Z)({
    forceFetch: true
  }), s = (0, f.vc)(o.endsAt, "L"), l = a.useCallback(() => {
    (0, h.$)(r)
  }, [r]);
  return o.fractionalState === I.a$.NONE ? (0, n.jsx)("div", {
    className: B.spinnerContainer,
    children: (0, n.jsx)(c.$jN, {
      type: c.$jN.Type.SPINNING_CIRCLE
    })
  }) : (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)("div", {
      className: B.nitroHeaderContainer,
      children: [(0, n.jsx)("div", {
        className: B.nitroHeaderClouds
      }), (0, n.jsx)(j.Z, {
        className: B.nitroHeaderWordmark
      }), (0, n.jsx)(c.Eep, {
        src: M,
        width: 110,
        height: 82,
        zoomable: false,
        className: B.nitroHeaderWumpus
      }), (0, n.jsx)(c.olH, {
        "data-migration-pending": true,
        className: B.nitroHeaderClose,
        onClick: r
      })]
    }), (0, n.jsxs)(c.mzw, {
      "data-migration-pending": true,
      className: B.footerContainer,
      separator: false,
      children: [(0, n.jsx)(_.Z, {
        className: B.beta
      }), (0, n.jsx)(g.ZP, {
        className: B.nitroHeading,
        premiumType: I.p9.TIER_2,
        type: g.ZP.Types.PREMIUM_ACTIVATED,
        theme: i
      }), (0, n.jsx)(c.Text, {
        variant: "text-md/normal",
        className: B.text,
        children: S.intl.format(S.t.tgc1oq, {
          helpCenterLink: v.Z.getArticleURL(T.BhN.FRACTIONAL_PREMIUM_ABOUT),
          duration: t,
          expirationDate: s
        })
      }), (0, n.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: B.cta,
        children: (0, n.jsx)(c.zxk, {
          variant: "primary",
          text: S.intl.string(S.t["eQX+go"]),
          onClick: l
        })
      })]
    })]
  })
}

function y(e) {
  let {
    duration: t,
    onClose: r
  } = e, i = (0, C.Z)({
    forceFetch: true
  }), s = (0, m.ZP)(), l = a.useCallback(() => {
    (0, N.openUserSettings)(p.n.SUBSCRIPTIONS_PANEL, {
      section: T.oAB.SUBSCRIPTIONS
    }), r()
  }, [r]);
  if (!i.fetched) return (0, n.jsx)("div", {
    className: B.spinnerContainer,
    children: (0, n.jsx)(c.$jN, {
      type: c.$jN.Type.SPINNING_CIRCLE
    })
  });
  let d = i.isFractionalPremiumActive ? S.intl.string(S.t["1ku8i4"]) : S.intl.format(S.t.fI1nLy, {
    helpCenterLink: v.Z.getArticleURL(T.BhN.FRACTIONAL_PREMIUM_ABOUT),
    duration: t
  });
  return (0, n.jsx)(c.f6W, {
    theme: s,
    children: e => (0, n.jsxs)("div", {
      className: o()(B.claimedRootContainer, e),
      children: [(0, n.jsxs)("div", {
        className: B.headerContainer,
        children: [(0, n.jsx)("img", {
          className: B.headerBackground,
          src: L,
          alt: S.intl.string(S.t["8SsCa2"])
        }), (0, n.jsx)(_.Z, {
          className: B.beta
        }), (0, n.jsxs)("div", {
          className: B.headerForeground,
          children: [(0, n.jsx)("div", {
            className: B.rewardAssetContainer,
            children: (0, n.jsx)("img", {
              src: P,
              alt: S.intl.string(S.t.OhPMam),
              height: 120
            })
          }), (0, n.jsx)(c.olH, {
            "data-migration-pending": true,
            className: B.close,
            withCircleBackground: true,
            onClick: r
          })]
        })]
      }), (0, n.jsxs)(c.mzw, {
        "data-migration-pending": true,
        className: B.footerContainer,
        separator: false,
        children: [(0, n.jsx)(c.X6q, {
          variant: "heading-lg/bold",
          className: B.heading,
          children: S.intl.string(S.t["+PHEo6"])
        }), (0, n.jsx)(c.Text, {
          variant: "text-sm/normal",
          className: B.text,
          children: d
        }), (0, n.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: B.cta2,
          children: (0, n.jsx)(c.zxk, {
            variant: "primary",
            text: S.intl.string(S.t.LnsQGR),
            onClick: l
          })
        })]
      })]
    })
  })
}

function E(e) {
  let {
    quest: t,
    location: r,
    onClose: i,
    transitionState: o
  } = e, s = (0, d.Z)(() => {
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