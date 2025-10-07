/** Chunk was on 79589 **/
/** chunk id: 235400, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => A
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

function C(e) {
  let {
    user: t,
    categories: r,
    purchases: l,
    analyticsLocations: o,
    onClose: m,
    initialSelectedDecoration: v,
    initialSelectedDecorationId: j,
    isTryItOutFlow: S,
    guild: C
  } = e, {
    pendingAvatarDecoration: A,
    setPendingAvatarDecoration: I,
    savedAvatarDecoration: w
  } = (0, g.Z)({
    analyticsLocations: o,
    isTryItOut: S,
    guildId: null == C ? true : C.id
  }), [T, N] = i.useState(() => {
    var e, t;
    if (null != v) return v;
    let n = (0, u.iC)(l, r);
    return null != j ? null != (e = n.find(e => e.id === j)) ? e : null : true !== A ? A : null == w ? null : null != (t = n.find(e => {
      let {
        skuId: t
      } = e;
      return t === w.skuId
    })) ? t : null
  }), {
    product: Z,
    purchase: D
  } = (0, d.Z)(null == T ? true : T.skuId), _ = y.ZP.canUseCollectibles(t), k = i.useRef(null), R = (0, p.Z)(o), L = true === A ? (null == T ? true : T.skuId) === (null == w ? true : w.skuId) : (null == T ? true : T.skuId) === (null == A ? true : A.skuId), M = i.useCallback(e => {
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
      children: [(0, n.jsx)(s.X6q, {
        variant: "heading-lg/semibold",
        children: b.intl.string(b.t.HykynZ)
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
        guild: C,
        pendingAvatarDecoration: T,
        selectedAvatarDecorationRef: k,
        onSelect: e => {
          N(e), null != e && R(e)
        },
        onOpenShop: M
      }), (0, n.jsx)(O.Z, {
        className: E.modalPreview,
        user: t,
        guildId: null == C ? true : C.id,
        avatarDecorationOverride: T
      })]
    }), (0, n.jsxs)(s.mzw, {
      "data-migration-pending": true,
      className: E.modalFooter,
      children: [null != D && (!(0, u.qS)(D) || _) || null === T ? (0, n.jsx)(s.zxk, {
        variant: "primary",
        text: b.intl.string(b.t.Jh8fJy),
        onClick: () => {
          I(T), m()
        },
        disabled: L
      }) : null == D && (_ || !(0, u.G1)(Z)) ? (0, n.jsx)(s.zxk, {
        variant: "primary",
        onClick: () => M(null == Z ? true : Z.skuId),
        text: b.intl.string(b.t.fYfGgI)
      }) : (0, n.jsx)(x.Z, {
        subscriptionTier: P.Si.TIER_2,
        showGradient: !_,
        textOptions: {
          textOverride: y.ZP.isPremium(t) ? b.intl.string(b.t.KXLX7u) : _ ? b.intl.string(b.t.mr4K7O) : b.intl.string(b.t.pj0XBA)
        }
      }), !_ && (0, u.G1)(Z) ? (0, n.jsx)(h.Z, {
        product: Z,
        onClose: m
      }) : (0, n.jsx)(s.zxk, {
        variant: "secondary",
        text: b.intl.string(b.t["ETE/oK"]),
        onClick: m
      })]
    })]
  })
}

function A(e) {
  let {
    transitionState: t,
    analyticsLocations: r,
    onClose: c,
    onCloseModal: u,
    initialSelectedDecoration: d,
    initialSelectedDecorationId: p,
    isTryItOutFlow: h,
    guild: x
  } = e, g = (0, l.e7)([v.default], () => v.default.getCurrentUser()), {
    analyticsLocations: y
  } = (0, o.ZP)(r, a.Z.EDIT_AVATAR_DECORATION_MODAL), {
    categories: O,
    purchases: f,
    isFetchingCategories: P,
    isFetchingPurchases: b
  } = (0, m.ZP)(), A = P || b && 0 === f.size;
  return i.useEffect(() => {
    j.default.track(S.rMx.OPEN_MODAL, {
      type: S.jXE.AVATAR_DECORATION_CUSTOMIZATION,
      location_stack: y
    })
  }, [y]), null == g ? null : (0, n.jsx)(o.Gt, {
    value: y,
    children: (0, n.jsx)(s.Y0X, {
      transitionState: t,
      className: E.modal,
      size: A ? s.CgR.DYNAMIC : s.CgR.MEDIUM,
      parentComponent: "AvatarDecorationModal",
      "data-migration-pending": true,
      children: A ? (0, n.jsx)(s.$jN, {
        className: E.spinner,
        type: s.$jN.Type.SPINNING_CIRCLE
      }) : (0, n.jsx)(C, {
        user: g,
        guild: x,
        categories: O,
        purchases: f,
        analyticsLocations: y,
        initialSelectedDecoration: d,
        initialSelectedDecorationId: p,
        onClose: () => {
          u(), null == c || c()
        },
        isTryItOutFlow: h
      })
    })
  })
}