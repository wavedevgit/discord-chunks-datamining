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
  Chunk824210 = require("./824210.js");

function z() {
  let e = Chunk25990.Z.getAllPending(),
    n = (0, Chunk164946.ED)(module);
  return (0, Chunk809206.Mn)(exports).finally(Chunk809206.si)
}

function U(e) {
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
  } = e, h = o.useRef(null), [C, v] = o.useState(null), j = o.useRef(new l.qA), w = (0, d.e7)([m.Z], () => m.Z.useReducedMotion), N = (0, d.e7)([I.default], () => I.default.getCurrentUser()), b = (null == (n = s.userStatus) ? true : n.claimedAt) != null, [T, P] = o.useState(true === g || b ? "claimed" : "loading");
  o.useEffect(() => {
    b || true === g || (0, R.QB)(s.id, y.y$.CROSS_PLATFORM, u).then(() => P("claimed")).catch(() => P("error"))
  }, [s, u, b, g]);
  let S = true === g && null === p && (null == _ ? true : _.skuId) !== "",
    B = null == N || null == p && true !== g || S || "loading" === T;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(l.O_, {
      ref: v,
      className: F.confettiCanvas,
      environment: j.current
    }), (0, a.jsx)("div", {
      ref: h,
      children: (0, a.jsx)(c.Y0X, {
        "data-migration-pending": true,
        transitionState: t,
        size: c.CgR.DYNAMIC,
        className: i()(F.rootContainer, {
          [F.rootContainerLoading]: B
        }),
        hideShadow: true,
        parentComponent: "QuestsRewardCollectibleModal",
        children: "error" === T ? (0, a.jsx)(L.Z, {
          onClose: r
        }) : B ? (0, a.jsx)("div", {
          className: F.loadingIndicatorWrapper,
          children: (0, a.jsx)(c.$jN, {
            type: c.$jN.Type.SPINNING_CIRCLE
          })
        }) : (0, a.jsx)(H, {
          quest: s,
          user: N,
          decoration: p,
          isSaving: "applying" === T,
          onClose: r,
          onConfirm: () => {
            P("applying"), f().finally(r)
          }
        })
      })
    }), !w && !b && "claimed" === T && (0, a.jsx)(x.Z, {
      confettiTarget: h.current,
      confettiCanvas: C,
      sprites: O.CA,
      colors: O.Br
    })]
  })
}

function q(e) {
  let {
    quest: n
  } = e, t = o.useMemo(() => (0, B.fh)(n, B.eC.LOGO_TYPE, "dark"), [n]), r = A.r.build(n.config).defaultRewardRedemptionInstructionsByPlatform[y.y$.CROSS_PLATFORM];
  return (0, a.jsxs)("div", {
    className: F.additionalRedemptionInstructions,
    children: [(0, a.jsx)("img", {
      src: t.url,
      alt: "",
      className: F.sponsorLogo
    }), (0, a.jsx)(c.Text, {
      variant: "text-sm/normal",
      color: "always-white",
      children: h.Z.parse(r, false, {
        allowLinks: true
      })
    })]
  })
}

function H(e) {
  let {
    quest: n,
    user: t,
    decoration: o,
    isSaving: r,
    onClose: i,
    onConfirm: l
  } = e, s = (0, B.fh)(n, B.eC.REWARD).url, d = (0, P.f$)(n.config), {
    fractionalState: u
  } = (0, f.Z)(), m = u === Z.a$.FP_ONLY, _ = (0, S.Qy)(n.config);
  return (0, a.jsxs)("div", {
    className: F.claimedRootContainer,
    children: [(0, a.jsxs)("div", {
      className: F.headerContainer,
      children: [(0, a.jsx)(E.Z, {
        quest: n,
        dimensions: {
          width: 528,
          height: 148
        },
        className: F.headerBackground
      }), (0, a.jsx)("div", {
        className: F.headerForeground,
        children: (0, a.jsx)(c.olH, {
          "data-migration-pending": true,
          className: F.close,
          withCircleBackground: true,
          onClick: i
        })
      })]
    }), (0, a.jsx)(c.mzw, {
      "data-migration-pending": true,
      separator: false,
      children: (0, a.jsxs)("div", {
        className: F.footerBody,
        children: [(0, a.jsx)("div", {
          className: F.previewContainer,
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
          className: F.heading,
          children: D.intl.string(D.t["0/Yz+Y"])
        }), (0, a.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          className: F.text,
          children: _
        }), (0, a.jsx)(c.Button, {
          variant: "primary",
          text: D.intl.string(D.t.MAS7uK),
          loading: r,
          onClick: l
        }), (0, P.zK)(n, M.S7.ADDITIONAL_REDEMPTION_INSTRUCTIONS) && (0, a.jsx)(q, {
          quest: n
        }), d && !m && (0, a.jsx)(C.p, {
          className: F.upsell,
          upsellText: D.intl.format(D.t.VHXn7C, {
            onNitroClick: () => {
              (0, N.openUserSettings)(w.n.NITRO_PANEL, {
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

function W(e) {
  var n, t;
  let {
    quest: r,
    location: i,
    onClose: l,
    transitionState: d,
    preview: c
  } = e, m = o.useMemo(() => (0, P.xn)(r.config), [r]), [p, f] = function(e) {
    let {
      product: n,
      isFetching: t
    } = (0, g.T)(e), {} = (0, j.Z)({}), a = o.useMemo(() => {
      if (null == n || t) return null;
      let e = n.items.find(e => e.type === s.Z.AVATAR_DECORATION);
      return null == e ? null : e
    }, [n, t]);
    return [a, () => null == a ? (T.Z.addBreadcrumb({
      message: "Error saving avatar decoration; it is null"
    }), Promise.reject()) : ((0, u.cV)(a), z())]
  }(null != (t = null == m ? true : m.skuId) ? t : null);
  return null == m ? null : (null == (n = r.userStatus) ? true : n.claimedAt) != null ? (0, a.jsx)(_.default, {
    transitionState: d,
    onCloseModal: z,
    onClose: l,
    analyticsLocations: [],
    initialSelectedDecoration: p
  }) : (0, a.jsx)(U, {
    onClose: l,
    transitionState: d,
    quest: r,
    location: i,
    reward: m,
    decoration: p,
    onUseNow: f,
    preview: c
  })
}