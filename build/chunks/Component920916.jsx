/** Chunk was on 83175 **/
/** chunk id: 920916, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => W
}), require("./457542.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk238651 = require("./238651.js"),
  Chunk979554 = require("./979554.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk809206 = require("./809206.js"),
  Chunk230711 = require("./230711.js"),
  Chunk607070 = require("./607070.js"),
  Chunk235400 = require("./235400.jsx"),
  Chunk204418 = require("./204418.jsx"),
  Chunk975298 = require("./975298.js"),
  Chunk583434 = require("./583434.js"),
  Chunk530618 = require("./530618.jsx"),
  Chunk454585 = require("./454585.js"),
  Chunk732389 = require("./732389.jsx"),
  Chunk164946 = require("./164946.js"),
  Chunk369111 = require("./369111.js"),
  Chunk25990 = require("./25990.js"),
  Chunk594174 = require("./594174.js"),
  Chunk960048 = require("./960048.js"),
  Chunk509212 = require("./509212.js"),
  Chunk272008 = require("./272008.js"),
  Chunk113434 = require("./113434.js"),
  Chunk497505 = require("./497505.js"),
  Chunk475595 = require("./475595.js"),
  Chunk566078 = require("./566078.js"),
  Chunk968435 = require("./968435.jsx"),
  Chunk114732 = require("./114732.jsx"),
  Chunk46140 = require("./46140.js"),
  Chunk981631 = require("./981631.js"),
  Chunk675654 = require("./675654.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk824210 = require("./824210.js");

function z() {
  let e = Chunk25990.Z.getAllPending(),
    n = (0, Chunk164946.ED)(module);
  return (0, Chunk809206.Mn)(exports).finally(Chunk809206.si)
}

function F(e) {
  var n;
  let {
    transitionState: t,
    onClose: r,
    quest: s,
    location: u,
    reward: m,
    decoration: _,
    onUseNow: x,
    preview: f
  } = e, g = o.useRef(null), [C, v] = o.useState(null), j = o.useRef(new l.qA), w = (0, d.e7)([p.Z], () => p.Z.useReducedMotion), b = (0, d.e7)([N.default], () => N.default.getCurrentUser()), I = (null == (n = s.userStatus) ? true : n.claimedAt) != null, [R, P] = o.useState(true === f || I ? "claimed" : "loading");
  o.useEffect(() => {
    I || true === f || (0, T.QB)(s.id, S.y$.CROSS_PLATFORM, u).then(() => P("claimed")).catch(() => P("error"))
  }, [s, u, I, f]);
  let y = true === f && null === _ && (null == m ? true : m.skuId) !== "",
    A = null == b || null == _ && true !== f || y || "loading" === R;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(l.O_, {
      ref: v,
      className: D.confettiCanvas,
      environment: j.current
    }), (0, a.jsx)("div", {
      ref: g,
      children: (0, a.jsx)(c.Y0X, {
        "data-migration-pending": true,
        transitionState: t,
        size: c.CgR.DYNAMIC,
        className: i()(D.rootContainer, {
          [D.rootContainerLoading]: A
        }),
        hideShadow: true,
        parentComponent: "QuestsRewardCollectibleModal",
        children: "error" === R ? (0, a.jsx)(E.Z, {
          onClose: r
        }) : A ? (0, a.jsx)("div", {
          className: D.loadingIndicatorWrapper,
          children: (0, a.jsx)(c.$jN, {
            type: c.$jN.Type.SPINNING_CIRCLE
          })
        }) : (0, a.jsx)(q, {
          quest: s,
          user: b,
          decoration: _,
          isSaving: "applying" === R,
          onClose: r,
          onConfirm: () => {
            P("applying"), x().finally(r)
          }
        })
      })
    }), !w && !I && "claimed" === R && (0, a.jsx)(h.Z, {
      confettiTarget: g.current,
      confettiCanvas: C,
      sprites: M.CA,
      colors: M.Br
    })]
  })
}

function U(e) {
  let {
    quest: n
  } = e, t = o.useMemo(() => (0, y.fh)(n, y.eC.LOGO_TYPE, "dark"), [n]), r = A.r.build(n.config).defaultRewardRedemptionInstructionsByPlatform[S.y$.CROSS_PLATFORM];
  return (0, a.jsxs)("div", {
    className: D.additionalRedemptionInstructions,
    children: [(0, a.jsx)("img", {
      src: t.url,
      alt: "",
      className: D.sponsorLogo
    }), (0, a.jsx)(c.Text, {
      variant: "text-sm/normal",
      color: "always-white",
      children: C.Z.parse(r, false, {
        allowLinks: true
      })
    })]
  })
}

function q(e) {
  let {
    quest: n,
    user: t,
    decoration: o,
    isSaving: r,
    onClose: i,
    onConfirm: l
  } = e, s = (0, y.fh)(n, y.eC.REWARD).url, d = (0, R.f$)(n.config), {
    fractionalState: u
  } = (0, f.Z)(), p = u === O.a$.FP_ONLY, _ = (0, P.Qy)(n.config);
  return (0, a.jsxs)("div", {
    className: D.claimedRootContainer,
    children: [(0, a.jsxs)("div", {
      className: D.headerContainer,
      children: [(0, a.jsx)(B.Z, {
        quest: n,
        dimensions: {
          width: 528,
          height: 148
        },
        className: D.headerBackground
      }), (0, a.jsx)("div", {
        className: D.headerForeground,
        children: (0, a.jsx)(c.olH, {
          "data-migration-pending": true,
          className: D.close,
          withCircleBackground: true,
          onClick: i
        })
      })]
    }), (0, a.jsx)(c.mzw, {
      "data-migration-pending": true,
      separator: false,
      children: (0, a.jsxs)("div", {
        className: D.footerBody,
        children: [(0, a.jsx)("div", {
          className: D.previewContainer,
          children: (0, a.jsx)(x.Z, {
            user: t,
            guildId: null,
            avatarDecorationOverride: o,
            avatarSize: c.EFr.SIZE_152,
            questPreviewRewardAssetUrl: s
          })
        }), (0, a.jsx)(c.X6q, {
          variant: "heading-lg/bold",
          color: "header-primary",
          className: D.heading,
          children: Z.intl.string(Z.t["0/Yz+f"])
        }), (0, a.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          className: D.text,
          children: _
        }), (0, a.jsx)(c.zxk, {
          variant: "primary",
          text: Z.intl.string(Z.t.MAS7uL),
          loading: r,
          onClick: l
        }), (0, R.zK)(n, k.S7.ADDITIONAL_REDEMPTION_INSTRUCTIONS) && (0, a.jsx)(U, {
          quest: n
        }), d && !p && (0, a.jsx)(v.p, {
          className: D.upsell,
          upsellText: Z.intl.format(Z.t.VHXn7O, {
            onNitroClick: () => {
              m.Z.open(L.oAB.PREMIUM, null, {}), i()
            }
          }),
          buttonAnalyticsObject: {
            section: L.jXE.PERMADECOS_MARKETING_UPSELL
          }
        })]
      })
    })]
  })
}

function W(e) {
  var n, t;
  let {
    quest: r,
    location: i,
    onClose: l,
    transitionState: d,
    preview: c
  } = e, m = o.useMemo(() => (0, R.xn)(r.config), [r]), [p, x] = function(e) {
    let {
      product: n,
      isFetching: t
    } = (0, g.T)(e), {} = (0, w.Z)({}), a = o.useMemo(() => {
      if (null == n || t) return null;
      let e = n.items.find(e => e.type === s.Z.AVATAR_DECORATION);
      return null == e ? null : e
    }, [n, t]);
    return [a, () => null == a ? (I.Z.addBreadcrumb({
      message: "Error saving avatar decoration; it is null"
    }), Promise.reject()) : ((0, u.cV)(a), z())]
  }(null != (t = null == m ? true : m.skuId) ? t : null);
  return null == m ? null : (null == (n = r.userStatus) ? true : n.claimedAt) != null ? (0, a.jsx)(_.default, {
    transitionState: d,
    onCloseModal: z,
    onClose: l,
    analyticsLocations: [],
    initialSelectedDecoration: p
  }) : (0, a.jsx)(F, {
    onClose: l,
    transitionState: d,
    quest: r,
    location: i,
    reward: m,
    decoration: p,
    onUseNow: x,
    preview: c
  })
}