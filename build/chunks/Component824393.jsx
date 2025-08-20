/** Chunk was on 838 **/
/** chunk id: 824393, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => Z
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk238651 = require("./238651.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk230711 = require("./230711.js"),
  Chunk211266 = require("./211266.js"),
  Chunk410030 = require("./410030.js"),
  Chunk607070 = require("./607070.js"),
  Chunk975298 = require("./975298.js"),
  Chunk530618 = require("./530618.jsx"),
  Chunk688465 = require("./688465.jsx"),
  Chunk98278 = require("./98278.js"),
  Chunk741245 = require("./741245.jsx"),
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
  Chunk192975 = require("./192975.js"),
  Chunk851750 = require("./851750.js"),
  Chunk946790 = require("./946790.js"),
  Chunk593639 = require("./593639.js");

function b(e) {
  var t, r, i, d, m;
  let {
    transitionState: u,
    onClose: x,
    quest: _,
    location: g
  } = e, p = a.useRef(null), [j, N] = a.useState(null), f = a.useRef(new s.qA), H = (0, l.e7)([C.Z], () => C.Z.useReducedMotion), A = (null == (t = _.userStatus) ? true : t.claimedAt) != null, [I, M] = a.useState({
    state: "loading"
  });
  a.useEffect(() => {
    A || (0, v.QB)(_.id, k.y$.CROSS_PLATFORM, g).then(e => {
      if ((null == e ? true : e.claimedAt) != null) return void M({
        state: "claimed",
        entitlements: e
      });
      M({
        state: "error",
        errorReason: 0
      })
    }).catch(() => {
      M({
        state: "error",
        errorReason: 0
      })
    })
  }, [_, g, A]);
  let B = "loading" === I.state,
    L = !H && !A && "claimed" === I.state,
    b = "claimed" === I.state && null != I.entitlements && I.entitlements.items.some(e => e.consumed);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(s.O_, {
      ref: N,
      className: S.confettiCanvas,
      environment: f.current
    }), (0, n.jsx)("div", {
      ref: p,
      children: (0, n.jsx)(c.Y0X, {
        "data-migration-pending": true,
        transitionState: u,
        size: c.CgR.DYNAMIC,
        className: o()(S.rootContainer, {
          [S.rootContainerLoading]: B
        }),
        hideShadow: true,
        parentComponent: "QuestsNitroRewardModal",
        children: B ? (0, n.jsx)(c.$jN, {
          type: c.$jN.Type.SPINNING_CIRCLE
        }) : "error" === I.state ? (0, n.jsx)(w, {
          errorReason: I.errorReason,
          onClose: x
        }) : b ? (0, n.jsx)(F, {
          duration: (0, R.kb)(null != (d = null == (r = I.entitlements) ? true : r.items) ? d : []),
          onClose: x
        }) : (0, n.jsx)(P, {
          duration: (0, R.kb)(null != (m = null == (i = I.entitlements) ? true : i.items) ? m : []),
          onClose: x
        })
      })
    }), L && (0, n.jsx)(h.Z, {
      confettiTarget: p.current,
      confettiCanvas: j,
      sprites: T.CA,
      colors: T.Br
    })]
  })
}

function w(e) {
  let {
    onClose: t
  } = e, r = I.intl.string(I.t.PbaUtr);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(c.xBx, {
      "data-migration-pending": true,
      separator: false,
      className: S.errorHeader,
      children: [(0, n.jsx)(c.X6q, {
        className: S.errorTitle,
        variant: "heading-xl/medium",
        children: I.intl.string(I.t["UleS9/"])
      }), (0, n.jsx)(c.olH, {
        "data-migration-pending": true,
        onClick: t,
        className: S.errorModalCloseButton
      })]
    }), (0, n.jsx)(c.hzk, {
      "data-migration-pending": true,
      className: S.errorContent,
      children: (0, n.jsx)(c.Text, {
        variant: "text-md/normal",
        children: r
      })
    }), (0, n.jsx)(c.mzw, {
      "data-migration-pending": true,
      className: S.errorModalFooter,
      children: (0, n.jsx)(c.zxk, {
        variant: "primary",
        text: I.intl.string(I.t.cpT0Cg),
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
  } = (0, c.TCT)(), o = (0, x.Z)({
    forceFetch: true
  }), s = (0, N.vc)(o.endsAt, "L"), l = a.useCallback(() => {
    (0, g.$)(r)
  }, [r]);
  return o.fractionalState === A.a$.NONE ? (0, n.jsx)("div", {
    className: S.spinnerContainer,
    children: (0, n.jsx)(c.$jN, {
      type: c.$jN.Type.SPINNING_CIRCLE
    })
  }) : (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)("div", {
      className: S.nitroHeaderContainer,
      children: [(0, n.jsx)("div", {
        className: S.nitroHeaderClouds
      }), (0, n.jsx)(j.Z, {
        className: S.nitroHeaderWordmark
      }), (0, n.jsx)(c.Eep, {
        src: B,
        width: 110,
        height: 82,
        zoomable: false,
        className: S.nitroHeaderWumpus
      }), (0, n.jsx)(c.olH, {
        "data-migration-pending": true,
        className: S.nitroHeaderClose,
        onClick: r
      })]
    }), (0, n.jsxs)(c.mzw, {
      "data-migration-pending": true,
      className: S.footerContainer,
      separator: false,
      children: [(0, n.jsx)(_.Z, {
        className: S.beta
      }), (0, n.jsx)(p.ZP, {
        className: S.nitroHeading,
        premiumType: A.p9.TIER_2,
        type: p.ZP.Types.PREMIUM_ACTIVATED,
        theme: i
      }), (0, n.jsx)(c.Text, {
        variant: "text-md/normal",
        className: S.text,
        children: I.intl.format(I.t.tgc1oq, {
          helpCenterLink: f.Z.getArticleURL(H.BhN.FRACTIONAL_PREMIUM_ABOUT),
          duration: t,
          expirationDate: s
        })
      }), (0, n.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: S.cta,
        children: (0, n.jsx)(c.zxk, {
          variant: "primary",
          text: I.intl.string(I.t["eQX+go"]),
          onClick: l
        })
      })]
    })]
  })
}

function P(e) {
  let {
    duration: t,
    onClose: r
  } = e, i = (0, x.Z)({
    forceFetch: true
  }), s = (0, u.ZP)(), l = a.useCallback(() => {
    d.Z.open(H.oAB.SUBSCRIPTIONS, null, {}), r()
  }, [r]);
  if (!i.fetched) return (0, n.jsx)("div", {
    className: S.spinnerContainer,
    children: (0, n.jsx)(c.$jN, {
      type: c.$jN.Type.SPINNING_CIRCLE
    })
  });
  let m = i.isFractionalPremiumActive ? I.intl.string(I.t["1ku8i4"]) : I.intl.format(I.t.fI1nLy, {
    helpCenterLink: f.Z.getArticleURL(H.BhN.FRACTIONAL_PREMIUM_ABOUT),
    duration: t
  });
  return (0, n.jsx)(c.f6W, {
    theme: s,
    children: e => (0, n.jsxs)("div", {
      className: o()(S.claimedRootContainer, e),
      children: [(0, n.jsxs)("div", {
        className: S.headerContainer,
        children: [(0, n.jsx)("img", {
          className: S.headerBackground,
          src: M,
          alt: I.intl.string(I.t["8SsCa2"])
        }), (0, n.jsx)(_.Z, {
          className: S.beta
        }), (0, n.jsxs)("div", {
          className: S.headerForeground,
          children: [(0, n.jsx)("div", {
            className: S.rewardAssetContainer,
            children: (0, n.jsx)("img", {
              src: L,
              alt: I.intl.string(I.t.OhPMam),
              height: 120
            })
          }), (0, n.jsx)(c.olH, {
            "data-migration-pending": true,
            className: S.close,
            withCircleBackground: true,
            onClick: r
          })]
        })]
      }), (0, n.jsxs)(c.mzw, {
        "data-migration-pending": true,
        className: S.footerContainer,
        separator: false,
        children: [(0, n.jsx)(c.X6q, {
          variant: "heading-lg/bold",
          className: S.heading,
          children: I.intl.string(I.t["+PHEo6"])
        }), (0, n.jsx)(c.Text, {
          variant: "text-sm/normal",
          className: S.text,
          children: m
        }), (0, n.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: S.cta2,
          children: (0, n.jsx)(c.zxk, {
            variant: "primary",
            text: I.intl.string(I.t.LnsQGR),
            onClick: l
          })
        })]
      })]
    })
  })
}

function Z(e) {
  let {
    quest: t,
    location: r,
    onClose: i,
    transitionState: o
  } = e, s = (0, m.Z)(() => {
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