/** Chunk was on 79589 **/
/** chunk id: 235400, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => C
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk369111 = require("./369111.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk74538 = require("./74538.js"),
  Chunk240781 = require("./240781.jsx"),
  Chunk818611 = require("./818611.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk88785 = require("./88785.js");

function I(e) {
  let {
    user: t,
    categories: r,
    purchases: l,
    analyticsLocations: o,
    onClose: m,
    initialSelectedDecoration: v,
    isTryItOutFlow: j,
    guild: S
  } = e, {
    pendingAvatarDecoration: I,
    setPendingAvatarDecoration: C,
    savedAvatarDecoration: A
  } = (0, g.Z)({
    analyticsLocations: o,
    isTryItOut: j,
    guildId: null == S ? true : S.id
  }), [w, T] = i.useState(() => {
    var e;
    return null != v ? v : true !== I ? I : null == A ? null : null != (e = (0, u.iC)(l, r).find(e => {
      let {
        skuId: t
      } = e;
      return t === A.skuId
    })) ? e : null
  }), {
    product: N,
    purchase: Z
  } = (0, d.Z)(null == w ? true : w.skuId), D = y.ZP.canUseCollectibles(t), _ = i.useRef(null), k = (0, p.Z)(o), R = true === I ? (null == w ? true : w.skuId) === (null == A ? true : A.skuId) : (null == w ? true : w.skuId) === (null == I ? true : I.skuId), L = i.useCallback(e => {
    m(), (0, c.mK)({
      analyticsLocations: o,
      analyticsSource: a.Z.EDIT_AVATAR_DECORATION_MODAL,
      initialProductSkuId: e
    })
  }, [o, m]);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(s.xBx, {
      "data-migration-pending": true,
      separator: false,
      className: E.modalHeader,
      children: [(0, n.jsx)(s.Heading, {
        variant: "heading-lg/semibold",
        children: b.intl.string(b.t.HykynS)
      }), (0, n.jsx)(s.olH, {
        "data-migration-pending": true,
        className: E.modalCloseButton,
        onClick: m
      })]
    }), (0, n.jsxs)(s.hzk, {
      "data-migration-pending": true,
      className: E.modalContent,
      scrollbarType: "none",
      children: [(0, n.jsx)(f.Z, {
        user: t,
        guild: S,
        pendingAvatarDecoration: w,
        selectedAvatarDecorationRef: _,
        onSelect: e => {
          T(e), null != e && k(e)
        },
        onOpenShop: L
      }), (0, n.jsx)(O.Z, {
        className: E.modalPreview,
        user: t,
        guildId: null == S ? true : S.id,
        avatarDecorationOverride: w
      })]
    }), (0, n.jsxs)(s.mzw, {
      "data-migration-pending": true,
      className: E.modalFooter,
      children: [null != Z && (!(0, u.qS)(Z) || D) || null === w ? (0, n.jsx)(s.Button, {
        variant: "primary",
        text: b.intl.string(b.t.Jh8fJz),
        onClick: () => {
          C(w), m()
        },
        disabled: R
      }) : null == Z && (D || !(0, u.G1)(N)) ? (0, n.jsx)(s.Button, {
        variant: "primary",
        onClick: () => L(null == N ? true : N.skuId),
        text: b.intl.string(b.t.fYfGgK)
      }) : (0, n.jsx)(x.Z, {
        subscriptionTier: P.Si.TIER_2,
        showGradient: !D,
        textOptions: {
          textOverride: y.ZP.isPremium(t) ? b.intl.string(b.t.KXLX7l) : D ? b.intl.string(b.t.mr4K7D) : b.intl.string(b.t.pj0XBN)
        }
      }), !D && (0, u.G1)(N) ? (0, n.jsx)(h.Z, {
        product: N,
        onClose: m
      }) : (0, n.jsx)(s.Button, {
        variant: "secondary",
        text: b.intl.string(b.t["ETE/oC"]),
        onClick: m
      })]
    })]
  })
}

function C(e) {
  let {
    transitionState: t,
    analyticsLocations: r,
    onClose: c,
    onCloseModal: u,
    initialSelectedDecoration: d,
    isTryItOutFlow: p,
    guild: h
  } = e, x = (0, l.e7)([v.default], () => v.default.getCurrentUser()), {
    analyticsLocations: g
  } = (0, o.ZP)(r, a.Z.EDIT_AVATAR_DECORATION_MODAL), {
    categories: y,
    purchases: O,
    isFetchingCategories: f,
    isFetchingPurchases: P
  } = (0, m.ZP)(), b = f || P && 0 === O.size;
  return i.useEffect(() => {
    j.default.track(S.rMx.OPEN_MODAL, {
      type: S.jXE.AVATAR_DECORATION_CUSTOMIZATION,
      location_stack: g
    })
  }, [g]), null == x ? null : (0, n.jsx)(o.Gt, {
    value: g,
    children: (0, n.jsx)(s.Y0X, {
      transitionState: t,
      className: E.modal,
      size: b ? s.CgR.DYNAMIC : s.CgR.MEDIUM,
      parentComponent: "AvatarDecorationModal",
      "data-migration-pending": true,
      children: b ? (0, n.jsx)(s.$jN, {
        className: E.spinner,
        type: s.$jN.Type.SPINNING_CIRCLE
      }) : (0, n.jsx)(I, {
        user: x,
        guild: h,
        categories: y,
        purchases: O,
        analyticsLocations: g,
        initialSelectedDecoration: d,
        onClose: () => {
          u(), null == c || c()
        },
        isTryItOutFlow: p
      })
    })
  })
}