/** Chunk was on 79589 **/
/** chunk id: 235400, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => E
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk335131 = require("./335131.js"),
  Chunk884697 = require("./884697.js"),
  Chunk449217 = require("./449217.js"),
  Chunk223143 = require("./223143.js"),
  Chunk311395 = require("./311395.js"),
  Chunk269982 = require("./269982.jsx"),
  Chunk767714 = require("./767714.jsx"),
  Chunk150039 = require("./150039.js"),
  Chunk369111 = require("./369111.js"),
  Chunk271383 = require("./271383.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk74538 = require("./74538.js"),
  Chunk240781 = require("./240781.jsx"),
  Chunk818611 = require("./818611.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk88785 = require("./88785.js");

function b(e) {
  let {
    user: t,
    categories: r,
    purchases: o,
    analyticsLocations: m,
    onClose: j,
    initialSelectedDecoration: _,
    isTryItOut: w,
    guild: b
  } = e, E = (0, l.e7)([f.ZP], () => null != b ? f.ZP.getMember(b.id, t.id) : null), T = null != E ? E.avatarDecoration : t.avatarDecoration, {
    pendingAvatarDecoration: A,
    setPendingAvatarDecoration: D
  } = (0, g.Z)({
    analyticsLocations: m,
    isTryItOut: w,
    guildId: null == b ? true : b.id
  }), [Z, N] = i.useState(() => {
    var e;
    return null != _ ? _ : true !== A ? A : null == T ? null : null != (e = (0, d.iC)(o, r).find(e => {
      let {
        skuId: t
      } = e;
      return t === T.skuId
    })) ? e : null
  }), k = (0, x.Ys)({
    pendingValue: Z,
    userValue: null == t ? true : t.avatarDecoration,
    guildValue: null == E ? true : E.avatarDecoration,
    guildId: null == b ? true : b.id
  }), {
    product: R,
    purchase: L
  } = (0, u.Z)(null == Z ? true : Z.skuId), U = (0, d.G1)(R), M = y.ZP.canUseCollectibles(t), B = i.useRef(null), F = (0, p.Z)(m), z = true === A ? (null == Z ? true : Z.skuId) === (null == T ? true : T.skuId) : (null == Z ? true : Z.skuId) === (null == A ? true : A.skuId), G = i.useCallback(e => {
    j(), (0, c.mK)({
      analyticsLocations: m,
      analyticsSource: s.Z.EDIT_AVATAR_DECORATION_MODAL,
      initialProductSkuId: e
    })
  }, [m, j]);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(a.xBx, {
      "data-migration-pending": true,
      separator: false,
      className: S.modalHeader,
      children: [(0, n.jsx)(a.Heading, {
        variant: "heading-lg/semibold",
        children: C.intl.string(C.t.HykynS)
      }), (0, n.jsx)(a.olH, {
        "data-migration-pending": true,
        className: S.modalCloseButton,
        onClick: j
      })]
    }), (0, n.jsxs)(a.hzk, {
      "data-migration-pending": true,
      className: S.modalContent,
      scrollbarType: "none",
      children: [(0, n.jsx)(O.Z, {
        user: t,
        guild: b,
        pendingAvatarDecoration: Z,
        selectedAvatarDecorationRef: B,
        isTryItOut: w,
        onSelect: e => {
          N(e), null != e && F(e)
        },
        onOpenShop: G
      }), (0, n.jsx)(P.Z, {
        className: S.modalPreview,
        user: t,
        guildId: null == b ? true : b.id,
        avatarDecoration: k
      })]
    }), (0, n.jsxs)(a.mzw, {
      "data-migration-pending": true,
      className: S.modalFooter,
      children: [null != L && (M || !U) || null === Z || w && U ? (0, n.jsx)(a.Button, {
        variant: "primary",
        text: C.intl.string(C.t.Jh8fJz),
        onClick: () => {
          D(Z), j()
        },
        disabled: z
      }) : null == L && (M || !U) ? (0, n.jsx)(a.Button, {
        variant: "primary",
        onClick: () => G(null == R ? true : R.skuId),
        text: C.intl.string(C.t.fYfGgK)
      }) : (0, n.jsx)(v.Z, {
        subscriptionTier: I.Si.TIER_2,
        showGradient: !M,
        textOptions: {
          textOverride: y.ZP.isPremium(t) ? C.intl.string(C.t.KXLX7l) : M ? C.intl.string(C.t.mr4K7D) : C.intl.string(C.t.pj0XBN)
        }
      }), M || w || !U ? (0, n.jsx)(a.Button, {
        variant: "secondary",
        text: C.intl.string(C.t["ETE/oC"]),
        onClick: j
      }) : (0, n.jsx)(h.Z, {
        product: R,
        onClose: j
      })]
    })]
  })
}

function E(e) {
  let {
    transitionState: t,
    analyticsLocations: r,
    onClose: c,
    onCloseModal: d,
    initialSelectedDecoration: u,
    isTryItOut: p,
    guild: h
  } = e, v = (0, l.e7)([j.default], () => j.default.getCurrentUser()), {
    analyticsLocations: x
  } = (0, o.ZP)(r, s.Z.EDIT_AVATAR_DECORATION_MODAL), {
    categories: g,
    purchases: f,
    isFetchingCategories: y,
    isFetchingPurchases: P
  } = (0, m.ZP)(), O = y || P && 0 === f.size;
  return i.useEffect(() => {
    _.default.track(w.rMx.OPEN_MODAL, {
      type: w.jXE.AVATAR_DECORATION_CUSTOMIZATION,
      location_stack: x
    })
  }, [x]), null == v ? null : (0, n.jsx)(o.Gt, {
    value: x,
    children: (0, n.jsx)(a.Y0X, {
      transitionState: t,
      className: S.modal,
      size: O ? a.CgR.DYNAMIC : a.CgR.MEDIUM,
      parentComponent: "AvatarDecorationModal",
      "data-migration-pending": true,
      children: O ? (0, n.jsx)(a.$jN, {
        className: S.spinner,
        type: a.$jN.Type.SPINNING_CIRCLE
      }) : (0, n.jsx)(b, {
        user: v,
        guild: h,
        categories: g,
        purchases: f,
        analyticsLocations: x,
        initialSelectedDecoration: u,
        onClose: () => {
          d(), null == c || c()
        },
        isTryItOut: p
      })
    })
  })
}