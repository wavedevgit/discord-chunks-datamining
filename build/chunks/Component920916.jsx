/** Chunk was on 70154 **/
/** chunk id: 920916, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => G
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
  Chunk607070 = require("./607070.js"),
  Chunk235400 = require("./235400.jsx"),
  Chunk204418 = require("./204418.jsx"),
  Chunk975298 = require("./975298.js"),
  Chunk583434 = require("./583434.js"),
  Chunk530618 = require("./530618.jsx"),
  Chunk454585 = require("./454585.js"),
  Chunk732389 = require("./732389.jsx"),
  Chunk150039 = require("./150039.js"),
  Chunk164946 = require("./164946.js"),
  Chunk369111 = require("./369111.js"),
  Chunk313789 = require("./313789.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk25990 = require("./25990.js"),
  Chunk594174 = require("./594174.js"),
  Chunk960048 = require("./960048.js"),
  Chunk22095 = require("./22095.js"),
  Chunk509212 = require("./509212.js"),
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
  Chunk794668 = require("./794668.js");

function U() {
  let e = Chunk25990.Z.getAllPending(),
    n = (0, Chunk164946.ED)(module);
  return (0, Chunk809206.Mn)(exports).finally(Chunk809206.si)
}

function q(e) {
  var n;
  let {
    transitionState: t,
    onClose: r,
    quest: s,
    location: u,
    reward: _,
    decoration: p,
    onUseNow: f,
    preview: g
  } = e, h = o.useRef(null), [C, v] = o.useState(null), j = o.useRef(new l.qA), w = (0, d.e7)([m.Z], () => m.Z.useReducedMotion), N = (0, d.e7)([T.default], () => T.default.getCurrentUser()), b = (null == (n = s.userStatus) ? true : n.claimedAt) != null, [I, R] = o.useState(true === g || b ? "claimed" : "loading");
  o.useEffect(() => {
    b || true === g || (0, P.QB)(s.id, B.y$.CROSS_PLATFORM, u).then(() => R("claimed")).catch(() => R("error"))
  }, [s, u, b, g]);
  let S = true === g && null === p && (null == _ ? true : _.skuId) !== "",
    y = null == N || null == p && true !== g || S || "loading" === I;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(l.O_, {
      ref: v,
      className: z.confettiCanvas,
      environment: j.current
    }), (0, a.jsx)("div", {
      ref: h,
      children: (0, a.jsx)(c.Y0X, {
        "data-migration-pending": true,
        transitionState: t,
        size: c.CgR.DYNAMIC,
        className: i()(z.rootContainer, {
          [z.rootContainerLoading]: y
        }),
        hideShadow: true,
        parentComponent: "QuestsRewardCollectibleModal",
        children: "error" === I ? (0, a.jsx)(M.Z, {
          onClose: r
        }) : y ? (0, a.jsx)("div", {
          className: z.loadingIndicatorWrapper,
          children: (0, a.jsx)(c.$jN, {
            type: c.$jN.Type.SPINNING_CIRCLE
          })
        }) : (0, a.jsx)(W, {
          quest: s,
          user: N,
          decoration: p,
          isSaving: "applying" === I,
          onClose: r,
          onConfirm: () => {
            R("applying"), f().finally(r)
          }
        })
      })
    }), !w && !b && "claimed" === I && (0, a.jsx)(x.Z, {
      confettiTarget: h.current,
      confettiCanvas: C,
      sprites: Z.CA,
      colors: Z.Br
    })]
  })
}

function H(e) {
  let {
    quest: n
  } = e, t = o.useMemo(() => (0, A.fh)(n, A.eC.LOGO_TYPE, "dark"), [n]), r = E.r.build(n.config).defaultRewardRedemptionInstructionsByPlatform[B.y$.CROSS_PLATFORM];
  return (0, a.jsxs)("div", {
    className: z.additionalRedemptionInstructions,
    children: [(0, a.jsx)("img", {
      src: t.url,
      alt: "",
      className: z.sponsorLogo
    }), (0, a.jsx)(c.Text, {
      variant: "text-sm/normal",
      color: "always-white",
      children: h.Z.parse(r, false, {
        allowLinks: true
      })
    })]
  })
}

function W(e) {
  let {
    quest: n,
    user: t,
    decoration: o,
    isSaving: r,
    onClose: i,
    onConfirm: l
  } = e, s = (0, A.fh)(n, A.eC.REWARD).url, d = (0, S.f$)(n.config), {
    fractionalState: u
  } = (0, f.Z)(), m = u === D.a$.FP_ONLY, _ = (0, y.Qy)(n.config);
  return (0, a.jsxs)("div", {
    className: z.claimedRootContainer,
    children: [(0, a.jsxs)("div", {
      className: z.headerContainer,
      children: [(0, a.jsx)(L.Z, {
        quest: n,
        dimensions: {
          width: 528,
          height: 148
        },
        className: z.headerBackground
      }), (0, a.jsx)("div", {
        className: z.headerForeground,
        children: (0, a.jsx)(c.olH, {
          "data-migration-pending": true,
          className: z.close,
          withCircleBackground: true,
          onClick: i
        })
      })]
    }), (0, a.jsx)(c.mzw, {
      "data-migration-pending": true,
      separator: false,
      children: (0, a.jsxs)("div", {
        className: z.footerBody,
        children: [(0, a.jsx)("div", {
          className: z.previewContainer,
          children: (0, a.jsx)(p.Z, {
            user: t,
            guildId: null,
            avatarDecorationOverride: o,
            avatarSize: c.EFr.SIZE_152,
            questPreviewRewardAssetUrl: s
          })
        }), (0, a.jsx)(c.Heading, {
          variant: "heading-lg/bold",
          color: "header-primary",
          className: z.heading,
          children: F.intl.string(F.t["0/Yz+Y"])
        }), (0, a.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          className: z.text,
          children: _
        }), (0, a.jsx)(c.Button, {
          variant: "primary",
          text: F.intl.string(F.t.MAS7uK),
          loading: r,
          onClick: l
        }), (0, S.zK)(n, O.S7.ADDITIONAL_REDEMPTION_INSTRUCTIONS) && (0, a.jsx)(H, {
          quest: n
        }), d && !m && (0, a.jsx)(C.p, {
          className: z.upsell,
          upsellText: F.intl.format(F.t.VHXn7C, {
            onNitroClick: () => {
              (0, b.openUserSettings)(N.n.NITRO_PANEL, {
                section: k.oAB.PREMIUM
              }), i()
            }
          }),
          buttonAnalyticsObject: {
            section: k.jXE.PERMADECOS_MARKETING_UPSELL
          }
        })]
      })
    })]
  })
}

function G(e) {
  var n, t;
  let {
    quest: r,
    location: i,
    onClose: l,
    transitionState: d,
    preview: c
  } = e, u = o.useMemo(() => (0, S.xn)(r.config), [r]), [m, p] = function(e) {
    let {
      product: n,
      isFetching: t
    } = (0, g.T)(e), {} = (0, w.Z)({}), a = o.useMemo(() => {
      if (null == n || t) return null;
      let e = n.items.find(e => e.type === s.Z.AVATAR_DECORATION);
      return null == e ? null : e
    }, [n, t]);
    return [a, () => null == a ? (R.Z.addBreadcrumb({
      message: "Error saving avatar decoration; it is null"
    }), Promise.reject()) : ((0, v.PO)(a), U())]
  }(null != (t = null == u ? true : u.skuId) ? t : null);
  return null == u ? null : (null == (n = r.userStatus) ? true : n.claimedAt) != null ? (0, a.jsx)(_.default, {
    transitionState: d,
    onCloseModal: U,
    onClose: l,
    analyticsLocations: [],
    initialSelectedDecoration: m
  }) : (0, a.jsx)(q, {
    onClose: l,
    transitionState: d,
    quest: r,
    location: i,
    reward: u,
    decoration: m,
    onUseNow: p,
    preview: c
  })
}