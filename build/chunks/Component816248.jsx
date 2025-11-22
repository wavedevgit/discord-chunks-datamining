/** Chunk was on 10349 **/
/** chunk id: 816248, original params: e,n,a (module,exports,require) **/
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
  Chunk313481 = require("./313481.js"),
  Chunk49436 = require("./49436.js"),
  Chunk509212 = require("./509212.js"),
  Chunk475595 = require("./475595.js"),
  Chunk939729 = require("./939729.jsx"),
  Chunk968435 = require("./968435.jsx"),
  Chunk324805 = require("./324805.js"),
  Chunk981631 = require("./981631.js"),
  Chunk675654 = require("./675654.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk809349 = require("./809349.js");

function z() {
  let e = Chunk25990.Z.getAllPending(),
    n = (0, Chunk164946.ED)(module);
  return (0, Chunk809206.Mn)(exports).finally(Chunk809206.si)
}

function U(e) {
  var n;
  let {
    transitionState: a,
    onClose: r,
    quest: l,
    location: u,
    reward: _,
    decoration: p,
    onUseNow: g,
    preview: f
  } = e, h = o.useRef(null), [C, v] = o.useState(null), j = o.useRef(new s.qA), w = (0, d.e7)([m.Z], () => m.Z.useReducedMotion), N = (0, d.e7)([P.default], () => P.default.getCurrentUser()), I = (null == (n = l.userStatus) ? true : n.claimedAt) != null, [T, R] = o.useState(true === f || I ? "claimed" : "loading");
  o.useEffect(() => {
    I || true === f || (0, S.QB)(l.id, B.y$.CROSS_PLATFORM, u).then(() => R("claimed")).catch(() => R("error"))
  }, [l, u, I, f]);
  let y = true === f && null === p && (null == _ ? true : _.skuId) !== "",
    A = null == N || null == p && true !== f || y || "loading" === T;
  return (0, t.jsxs)(t.Fragment, {
    children: [(0, t.jsx)(s.O_, {
      ref: v,
      className: F.confettiCanvas,
      environment: j.current
    }), (0, t.jsx)("div", {
      ref: h,
      children: (0, t.jsx)(c.Y0X, {
        "data-migration-pending": true,
        transitionState: a,
        size: c.CgR.DYNAMIC,
        className: i()(F.rootContainer, {
          [F.rootContainerLoading]: A
        }),
        hideShadow: true,
        parentComponent: "QuestsRewardCollectibleModal",
        children: "error" === T ? (0, t.jsx)(M.Z, {
          onClose: r
        }) : A ? (0, t.jsx)("div", {
          className: F.loadingIndicatorWrapper,
          children: (0, t.jsx)(c.$jN, {
            type: c.$jN.Type.SPINNING_CIRCLE
          })
        }) : (0, t.jsx)(H, {
          quest: l,
          user: N,
          decoration: p,
          isSaving: "applying" === T,
          onClose: r,
          onConfirm: () => {
            R("applying"), g().finally(r)
          }
        })
      })
    }), !w && !I && "claimed" === T && (0, t.jsx)(x.Z, {
      confettiTarget: h.current,
      confettiCanvas: C,
      sprites: Z.CA,
      colors: Z.Br
    })]
  })
}

function q(e) {
  let {
    quest: n
  } = e, a = o.useMemo(() => (0, E.fh)(n, E.eC.LOGO_TYPE, "dark"), [n]), r = (0, A.M1)(n.config).messages.redemptionInstructionsByPlatform[B.y$.CROSS_PLATFORM];
  return (0, t.jsxs)("div", {
    className: F.additionalRedemptionInstructions,
    children: [(0, t.jsx)("img", {
      src: a.url,
      alt: "",
      className: F.sponsorLogo
    }), (0, t.jsx)(c.Text, {
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
    user: a,
    decoration: o,
    isSaving: r,
    onClose: i,
    onConfirm: s
  } = e, l = (0, E.fh)(n, E.eC.REWARD).url, d = (0, A.f$)(n.config), {
    fractionalState: u
  } = (0, g.Z)(), m = u === D.a$.FP_ONLY, _ = (0, y.Qy)(n.config);
  return (0, t.jsxs)("div", {
    className: F.claimedRootContainer,
    children: [(0, t.jsxs)("div", {
      className: F.headerContainer,
      children: [(0, t.jsx)(L.Z, {
        quest: n,
        dimensions: {
          width: 528,
          height: 148
        },
        className: F.headerBackground
      }), (0, t.jsx)("div", {
        className: F.headerForeground,
        children: (0, t.jsx)(c.olH, {
          "data-migration-pending": true,
          className: F.close,
          withCircleBackground: true,
          onClick: i
        })
      })]
    }), (0, t.jsx)(c.mzw, {
      "data-migration-pending": true,
      separator: false,
      children: (0, t.jsxs)("div", {
        className: F.footerBody,
        children: [(0, t.jsx)("div", {
          className: F.previewContainer,
          children: (0, t.jsx)(p.Z, {
            user: a,
            guildId: null,
            avatarDecorationOverride: o,
            avatarSize: c.EFr.SIZE_152,
            questPreviewRewardAssetUrl: l
          })
        }), (0, t.jsx)(c.Heading, {
          variant: "heading-lg/bold",
          color: "header-primary",
          className: F.heading,
          children: b.intl.string(b.t["0/Yz+Y"])
        }), (0, t.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          className: F.text,
          children: _
        }), (0, t.jsx)(c.Button, {
          variant: "primary",
          text: b.intl.string(b.t.MAS7uK),
          loading: r,
          onClick: s
        }), (0, A.zK)(n, O.S7.ADDITIONAL_REDEMPTION_INSTRUCTIONS) && (0, t.jsx)(q, {
          quest: n
        }), d && !m && (0, t.jsx)(C.p, {
          className: F.upsell,
          upsellText: b.intl.format(b.t.VHXn7C, {
            onNitroClick: () => {
              (0, I.openUserSettings)(N.n.NITRO_PANEL, {
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
  var n, a;
  let {
    quest: r,
    location: i,
    onClose: s,
    transitionState: d,
    preview: c
  } = e, u = o.useMemo(() => (0, A.xn)(r.config), [r]), [m, p] = function(e) {
    let {
      product: n,
      isFetching: a
    } = (0, f.T)(e), {} = (0, w.Z)({}), t = o.useMemo(() => {
      if (null == n || a) return null;
      let e = n.items.find(e => e.type === l.Z.AVATAR_DECORATION);
      return null == e ? null : e
    }, [n, a]);
    return [t, () => null == t ? (R.Z.addBreadcrumb({
      message: "Error saving avatar decoration; it is null"
    }), Promise.reject()) : ((0, v.PO)(t), z())]
  }(null != (a = null == u ? true : u.skuId) ? a : null);
  return null == u ? null : (null == (n = r.userStatus) ? true : n.claimedAt) != null ? (0, t.jsx)(_.default, {
    transitionState: d,
    onCloseModal: z,
    onClose: s,
    analyticsLocations: [],
    initialSelectedDecoration: m
  }) : (0, t.jsx)(U, {
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