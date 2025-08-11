/** Chunk was on 58011 **/
/** chunk id: 824393, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => V
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk505266 = require("./505266.js"),
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
  Chunk639220 = require("./639220.js"),
  Chunk851750 = require("./851750.js"),
  Chunk946790 = require("./946790.js"),
  Chunk593639 = require("./593639.js");

function R(e) {
  var t, r, o, c, d;
  let {
    transitionState: u,
    onClose: h,
    quest: p,
    location: j
  } = e, _ = a.useRef(null), [f, g] = a.useState(null), v = a.useRef(new i.qA), L = (0, C.e7)([m.Z], () => m.Z.useReducedMotion), O = (null == (t = p.userStatus) ? true : t.claimedAt) != null, [M, k] = a.useState({
    state: "loading"
  });
  a.useEffect(() => {
    O || (0, N.QB)(p.id, H.y$.CROSS_PLATFORM, j).then(e => {
      if ((null == e ? true : e.claimedAt) != null) return void k({
        state: "claimed",
        entitlements: e
      });
      k({
        state: "error",
        errorReason: 0
      })
    }).catch(() => {
      k({
        state: "error",
        errorReason: 0
      })
    })
  }, [p, j, O]);
  let w = "loading" === M.state,
    P = !L && !O && "claimed" === M.state,
    R = "claimed" === M.state && null != M.entitlements && M.entitlements.items.some(e => e.consumed);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(i.O_, {
      ref: g,
      className: Z.confettiCanvas,
      environment: v.current
    }), (0, n.jsx)("div", {
      ref: _,
      children: (0, n.jsx)(l.Y0X, {
        transitionState: u,
        size: l.CgR.DYNAMIC,
        className: s()(Z.rootContainer, {
          [Z.rootContainerLoading]: w
        }),
        hideShadow: true,
        parentComponent: "QuestsNitroRewardModal",
        children: w ? (0, n.jsx)(l.$jN, {
          type: l.$jN.Type.SPINNING_CIRCLE
        }) : "error" === M.state ? (0, n.jsx)(S, {
          errorReason: M.errorReason,
          onClose: h
        }) : R ? (0, n.jsx)(T, {
          duration: (0, b.kb)(null != (c = null == (r = M.entitlements) ? true : r.items) ? c : []),
          onClose: h
        }) : (0, n.jsx)(A, {
          duration: (0, b.kb)(null != (d = null == (o = M.entitlements) ? true : o.items) ? d : []),
          onClose: h
        })
      })
    }), P && (0, n.jsx)(x.Z, {
      confettiTarget: _.current,
      confettiCanvas: f,
      sprites: y.CA,
      colors: y.Br
    })]
  })
}

function S(e) {
  let {
    onClose: t
  } = e, r = M.intl.string(M.t.PbaUtr);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(l.xBx, {
      separator: false,
      className: Z.errorHeader,
      children: [(0, n.jsx)(l.X6q, {
        className: Z.errorTitle,
        variant: "heading-xl/medium",
        children: M.intl.string(M.t["UleS9/"])
      }), (0, n.jsx)(l.olH, {
        onClick: t,
        className: Z.errorModalCloseButton
      })]
    }), (0, n.jsx)(l.hzk, {
      className: Z.errorContent,
      children: (0, n.jsx)(l.Text, {
        variant: "text-md/normal",
        children: r
      })
    }), (0, n.jsx)(l.mzw, {
      className: Z.errorModalFooter,
      children: (0, n.jsx)(l.zxk, {
        variant: "primary",
        text: M.intl.string(M.t.cpT0Cg),
        onClick: t
      })
    })]
  })
}

function T(e) {
  let {
    duration: t,
    onClose: r
  } = e, {
    theme: o
  } = (0, l.TCT)(), s = (0, h.Z)({
    forceFetch: true
  }), i = (0, g.vc)(s.endsAt, "L"), C = a.useCallback(() => {
    (0, j.$)(r)
  }, [r]);
  return s.fractionalState === O.a$.NONE ? (0, n.jsx)("div", {
    className: Z.spinnerContainer,
    children: (0, n.jsx)(l.$jN, {
      type: l.$jN.Type.SPINNING_CIRCLE
    })
  }) : (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)("div", {
      className: Z.nitroHeaderContainer,
      children: [(0, n.jsx)("div", {
        className: Z.nitroHeaderClouds
      }), (0, n.jsx)(f.Z, {
        className: Z.nitroHeaderWordmark
      }), (0, n.jsx)(l.Eep, {
        src: w,
        width: 110,
        height: 82,
        zoomable: false,
        className: Z.nitroHeaderWumpus
      }), (0, n.jsx)(l.olH, {
        className: Z.nitroHeaderClose,
        onClick: r
      })]
    }), (0, n.jsxs)(l.mzw, {
      className: Z.footerContainer,
      separator: false,
      children: [(0, n.jsx)(p.Z, {
        className: Z.beta
      }), (0, n.jsx)(_.ZP, {
        className: Z.nitroHeading,
        premiumType: O.p9.TIER_2,
        type: _.ZP.Types.PREMIUM_ACTIVATED,
        theme: o
      }), (0, n.jsx)(l.Text, {
        variant: "text-md/normal",
        className: Z.text,
        children: M.intl.format(M.t.tgc1oq, {
          helpCenterLink: v.Z.getArticleURL(L.BhN.FRACTIONAL_PREMIUM_ABOUT),
          duration: t,
          expirationDate: i
        })
      }), (0, n.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: Z.cta,
        children: (0, n.jsx)(l.zxk, {
          variant: "primary",
          text: M.intl.string(M.t["eQX+go"]),
          onClick: C
        })
      })]
    })]
  })
}

function A(e) {
  let {
    duration: t,
    onClose: r
  } = e, o = (0, h.Z)({
    forceFetch: true
  }), i = (0, u.ZP)(), C = a.useCallback(() => {
    c.Z.open(L.oAB.SUBSCRIPTIONS, null, {}), r()
  }, [r]);
  if (!o.fetched) return (0, n.jsx)("div", {
    className: Z.spinnerContainer,
    children: (0, n.jsx)(l.$jN, {
      type: l.$jN.Type.SPINNING_CIRCLE
    })
  });
  let d = o.isFractionalPremiumActive ? M.intl.string(M.t["1ku8i4"]) : M.intl.format(M.t.fI1nLy, {
    helpCenterLink: v.Z.getArticleURL(L.BhN.FRACTIONAL_PREMIUM_ABOUT),
    duration: t
  });
  return (0, n.jsx)(l.f6W, {
    theme: i,
    children: e => (0, n.jsxs)("div", {
      className: s()(Z.claimedRootContainer, e),
      children: [(0, n.jsxs)("div", {
        className: Z.headerContainer,
        children: [(0, n.jsx)("img", {
          className: Z.headerBackground,
          src: k,
          alt: M.intl.string(M.t["8SsCa2"])
        }), (0, n.jsx)(p.Z, {
          className: Z.beta
        }), (0, n.jsxs)("div", {
          className: Z.headerForeground,
          children: [(0, n.jsx)("div", {
            className: Z.rewardAssetContainer,
            children: (0, n.jsx)("img", {
              src: P,
              alt: M.intl.string(M.t.OhPMam),
              height: 120
            })
          }), (0, n.jsx)(l.olH, {
            className: Z.close,
            withCircleBackground: true,
            onClick: r
          })]
        })]
      }), (0, n.jsxs)(l.mzw, {
        className: Z.footerContainer,
        separator: false,
        children: [(0, n.jsx)(l.X6q, {
          variant: "heading-lg/bold",
          className: Z.heading,
          children: M.intl.string(M.t["+PHEo6"])
        }), (0, n.jsx)(l.Text, {
          variant: "text-sm/normal",
          className: Z.text,
          children: d
        }), (0, n.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: Z.cta2,
          children: (0, n.jsx)(l.zxk, {
            variant: "primary",
            text: M.intl.string(M.t.LnsQGR),
            onClick: C
          })
        })]
      })]
    })
  })
}

function V(e) {
  let {
    quest: t,
    location: r,
    onClose: o,
    transitionState: s
  } = e, i = (0, d.Z)(() => {
    var e;
    return (null == (e = t.userStatus) ? true : e.claimedAt) != null
  });
  return (a.useEffect(() => {
    i && o()
  }, [o, i]), i) ? null : (0, n.jsx)(R, {
    onClose: o,
    transitionState: s,
    quest: t,
    location: r
  })
}