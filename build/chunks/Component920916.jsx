/** Chunk was on 70154 **/
/** chunk id: 920916, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => W
}), require("./457542.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk921254 = require("./921254.js"),
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
  Chunk968435 = require("./968435.jsx"),
  Chunk114732 = require("./114732.jsx"),
  Chunk46140 = require("./46140.js"),
  Chunk981631 = require("./981631.js"),
  Chunk675654 = require("./675654.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk794668 = require("./794668.js");

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
    quest: l,
    location: u,
    reward: _,
    decoration: p,
    onUseNow: g,
    preview: f
  } = e, h = o.useRef(null), [C, v] = o.useState(null), j = o.useRef(new s.qA), w = (0, d.e7)([m.Z], () => m.Z.useReducedMotion), N = (0, d.e7)([T.default], () => T.default.getCurrentUser()), b = (null == (n = l.userStatus) ? true : n.claimedAt) != null, [I, P] = o.useState(true === f || b ? "claimed" : "loading");
  o.useEffect(() => {
    b || true === f || (0, R.QB)(l.id, B.y$.CROSS_PLATFORM, u).then(() => P("claimed")).catch(() => P("error"))
  }, [l, u, b, f]);
  let S = true === f && null === p && (null == _ ? true : _.skuId) !== "",
    y = null == N || null == p && true !== f || S || "loading" === I;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(s.O_, {
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
          [F.rootContainerLoading]: y
        }),
        hideShadow: true,
        parentComponent: "QuestsRewardCollectibleModal",
        children: "error" === I ? (0, a.jsx)(M.Z, {
          onClose: r
        }) : y ? (0, a.jsx)("div", {
          className: F.loadingIndicatorWrapper,
          children: (0, a.jsx)(c.$jN, {
            type: c.$jN.Type.SPINNING_CIRCLE
          })
        }) : (0, a.jsx)(H, {
          quest: l,
          user: N,
          decoration: p,
          isSaving: "applying" === I,
          onClose: r,
          onConfirm: () => {
            P("applying"), g().finally(r)
          }
        })
      })
    }), !w && !b && "claimed" === I && (0, a.jsx)(x.Z, {
      confettiTarget: h.current,
      confettiCanvas: C,
      sprites: k.CA,
      colors: k.Br
    })]
  })
}

function q(e) {
  let {
    quest: n
  } = e, t = o.useMemo(() => (0, A.fh)(n, A.eC.LOGO_TYPE, "dark"), [n]), r = (0, S.M1)(n.config).messages.redemptionInstructionsByPlatform[B.y$.CROSS_PLATFORM];
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
    onConfirm: s
  } = e, l = (0, A.fh)(n, A.eC.REWARD).url, d = (0, S.f$)(n.config), {
    fractionalState: u
  } = (0, g.Z)(), m = u === Z.a$.FP_ONLY, _ = (0, y.Qy)(n.config);
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
            questPreviewRewardAssetUrl: l
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
          onClick: s
        }), (0, S.zK)(n, L.S7.ADDITIONAL_REDEMPTION_INSTRUCTIONS) && (0, a.jsx)(q, {
          quest: n
        }), d && !m && (0, a.jsx)(C.p, {
          className: F.upsell,
          upsellText: D.intl.format(D.t.VHXn7C, {
            onNitroClick: () => {
              (0, b.openUserSettings)(N.n.NITRO_PANEL, {
                section: O.oAB.PREMIUM
              }), i()
            }
          }),
          buttonAnalyticsObject: {
            section: O.jXE.PERMADECOS_MARKETING_UPSELL
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
    onClose: s,
    transitionState: d,
    preview: c
  } = e, u = o.useMemo(() => (0, S.xn)(r.config), [r]), [m, p] = function(e) {
    let {
      product: n,
      isFetching: t
    } = (0, f.T)(e), {} = (0, w.Z)({}), a = o.useMemo(() => {
      if (null == n || t) return null;
      let e = n.items.find(e => e.type === l.Z.AVATAR_DECORATION);
      return null == e ? null : e
    }, [n, t]);
    return [a, () => null == a ? (P.Z.addBreadcrumb({
      message: "Error saving avatar decoration; it is null"
    }), Promise.reject()) : ((0, v.PO)(a), z())]
  }(null != (t = null == u ? true : u.skuId) ? t : null);
  return null == u ? null : (null == (n = r.userStatus) ? true : n.claimedAt) != null ? (0, a.jsx)(_.default, {
    transitionState: d,
    onCloseModal: z,
    onClose: s,
    analyticsLocations: [],
    initialSelectedDecoration: m
  }) : (0, a.jsx)(U, {
    onClose: s,
    transitionState: d,
    quest: r,
    location: i,
    reward: u,
    decoration: m,
    onUseNow: p,
    preview: c
  })
}