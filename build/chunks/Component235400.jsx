/** Chunk was on 79589 **/
/** chunk id: 235400, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => Z
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
  Chunk222062 = require("./222062.js"),
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

function w(e) {
  let {
    user: t,
    categories: r,
    purchases: l,
    analyticsLocations: o,
    onClose: m,
    initialSelectedDecoration: j,
    initialSelectedDecorationId: f,
    isTryItOutFlow: S,
    guild: w
  } = e, {
    pendingAvatarDecoration: Z,
    setPendingAvatarDecoration: E,
    savedAvatarDecoration: N
  } = (0, g.Z)({
    analyticsLocations: o,
    isTryItOut: S,
    guildId: null == w ? true : w.id
  }), [T, A] = i.useState(() => {
    var e, t;
    if (null != j) return j;
    let n = (0, u.iC)(l, r);
    return null != f ? null != (e = n.find(e => e.id === f)) ? e : null : true !== Z ? Z : null == N ? null : null != (t = n.find(e => {
      let {
        skuId: t
      } = e;
      return t === N.skuId
    })) ? t : null
  }), {
    product: k,
    purchase: D
  } = (0, d.Z)(null == T ? true : T.skuId), R = y.ZP.canUseCollectibles(t), _ = i.useRef(null), M = (0, h.Z)(o), z = true === Z ? (null == T ? true : T.skuId) === (null == N ? true : N.skuId) : (null == T ? true : T.skuId) === (null == Z ? true : Z.skuId), U = i.useCallback(e => {
    m(), (0, c.mK)({
      analyticsLocations: o,
      analyticsSource: a.Z.EDIT_AVATAR_DECORATION_MODAL,
      initialProductSkuId: e
    })
  }, [o, m]), G = (0, x.M)(), F = G && (0, u.G1)(k);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(s.xBx, {
      "data-migration-pending": true,
      separator: false,
      className: I.modalHeader,
      children: [(0, n.jsx)(s.X6q, {
        variant: "heading-lg/semibold",
        children: C.intl.string(C.t.HykynZ)
      }), (0, n.jsx)(s.olH, {
        "data-migration-pending": true,
        className: I.modalCloseButton,
        onClick: m
      })]
    }), (0, n.jsxs)(s.hzk, {
      "data-migration-pending": true,
      className: I.modalContent,
      scrollbarType: "none",
      children: [(0, n.jsx)(b.Z, {
        user: t,
        guild: w,
        pendingAvatarDecoration: T,
        selectedAvatarDecorationRef: _,
        onSelect: e => {
          A(e), null != e && M(e)
        },
        onOpenShop: U
      }), (0, n.jsx)(O.Z, {
        className: I.modalPreview,
        user: t,
        guildId: null == w ? true : w.id,
        avatarDecorationOverride: T
      })]
    }), (0, n.jsxs)(s.mzw, {
      "data-migration-pending": true,
      className: I.modalFooter,
      children: [null != D && (!(0, u.qS)(D) || R) || null === T ? (0, n.jsx)(s.zxk, {
        variant: "primary",
        text: C.intl.string(C.t.Jh8fJy),
        onClick: () => {
          E(T), m()
        },
        disabled: z
      }) : null == D && (R || !(0, u.G1)(k)) ? (0, n.jsx)(s.zxk, {
        variant: "primary",
        onClick: () => U(null == k ? true : k.skuId),
        text: C.intl.string(C.t.fYfGgI)
      }) : (0, n.jsx)(v.Z, {
        subscriptionTier: P.Si.TIER_2,
        showGradient: G,
        textOptions: {
          textOverride: y.ZP.isPremium(t) ? C.intl.string(C.t.KXLX7u) : G ? C.intl.string(C.t.pj0XBA) : C.intl.string(C.t.mr4K7O)
        }
      }), F ? (0, n.jsx)(p.Z, {
        product: k,
        onSecondaryClick: m
      }) : (0, n.jsx)(s.zxk, {
        variant: "secondary",
        text: C.intl.string(C.t["ETE/oK"]),
        onClick: m
      })]
    })]
  })
}

function Z(e) {
  let {
    transitionState: t,
    analyticsLocations: r,
    onClose: c,
    onCloseModal: u,
    initialSelectedDecoration: d,
    initialSelectedDecorationId: h,
    isTryItOutFlow: x,
    guild: p
  } = e, v = (0, l.e7)([j.default], () => j.default.getCurrentUser()), {
    analyticsLocations: g
  } = (0, o.ZP)(r, a.Z.EDIT_AVATAR_DECORATION_MODAL), {
    categories: y,
    purchases: O,
    isFetchingCategories: b,
    isFetchingPurchases: P
  } = (0, m.ZP)(), C = b || P && 0 === O.size;
  return i.useEffect(() => {
    f.default.track(S.rMx.OPEN_MODAL, {
      type: S.jXE.AVATAR_DECORATION_CUSTOMIZATION,
      location_stack: g
    })
  }, [g]), null == v ? null : (0, n.jsx)(o.Gt, {
    value: g,
    children: (0, n.jsx)(s.Y0X, {
      transitionState: t,
      className: I.modal,
      size: C ? s.CgR.DYNAMIC : s.CgR.MEDIUM,
      parentComponent: "AvatarDecorationModal",
      "data-migration-pending": true,
      children: C ? (0, n.jsx)(s.$jN, {
        className: I.spinner,
        type: s.$jN.Type.SPINNING_CIRCLE
      }) : (0, n.jsx)(w, {
        user: v,
        guild: p,
        categories: y,
        purchases: O,
        analyticsLocations: g,
        initialSelectedDecoration: d,
        initialSelectedDecorationId: h,
        onClose: () => {
          u(), null == c || c()
        },
        isTryItOutFlow: x
      })
    })
  })
}