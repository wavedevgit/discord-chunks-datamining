/** Chunk was on 79589 **/
/** chunk id: 235400, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => T
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
  Chunk398726 = require("./398726.js");

function A(e) {
  let {
    user: t,
    categories: r,
    purchases: o,
    analyticsLocations: m,
    onClose: y,
    initialSelectedDecoration: O,
    isTryItOut: b,
    guild: A
  } = e, T = (0, l.e7)([j.ZP], () => null != A ? j.ZP.getMember(A.id, t.id) : null), w = null != T ? T.avatarDecoration : t.avatarDecoration, {
    pendingAvatarDecoration: Z,
    setPendingAvatarDecoration: N
  } = (0, v.Z)({
    analyticsLocations: m,
    isTryItOut: b,
    guildId: null == A ? true : A.id
  }), [D, _] = i.useState(() => {
    var e;
    return null != O ? O : true !== Z ? Z : null == w ? null : null != (e = (0, u.iC)(o, r).find(e => {
      let {
        skuId: t
      } = e;
      return t === w.skuId
    })) ? e : null
  }), k = (0, g.Ys)({
    pendingValue: D,
    userValue: null == t ? true : t.avatarDecoration,
    guildValue: null == T ? true : T.avatarDecoration,
    guildId: null == A ? true : A.id
  }), {
    product: R,
    purchase: L
  } = (0, d.Z)(null == D ? true : D.skuId), M = (0, u.G1)(R), U = f.ZP.canUseCollectibles(t), z = i.useRef(null), F = (0, p.Z)(m), G = true === Z ? (null == D ? true : D.skuId) === (null == w ? true : w.skuId) : (null == D ? true : D.skuId) === (null == Z ? true : Z.skuId), B = i.useCallback(e => {
    y(), (0, c.mK)({
      analyticsLocations: m,
      analyticsSource: a.Z.EDIT_AVATAR_DECORATION_MODAL,
      initialProductSkuId: e
    })
  }, [m, y]);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(s.xBx, {
      "data-migration-pending": true,
      separator: false,
      className: C.modalHeader,
      children: [(0, n.jsx)(s.Heading, {
        variant: "heading-lg/semibold",
        children: E.intl.string(E.t.HykynS)
      }), (0, n.jsx)(s.olH, {
        "data-migration-pending": true,
        className: C.modalCloseButton,
        onClick: y
      })]
    }), (0, n.jsxs)(s.hzk, {
      "data-migration-pending": true,
      className: C.modalContent,
      scrollbarType: "none",
      children: [(0, n.jsx)(S.Z, {
        user: t,
        guild: A,
        pendingAvatarDecoration: D,
        selectedAvatarDecorationRef: z,
        isTryItOut: b,
        onSelect: e => {
          _(e), null != e && F(e)
        },
        onOpenShop: B
      }), (0, n.jsx)(P.Z, {
        className: C.modalPreview,
        user: t,
        guildId: null == A ? true : A.id,
        avatarDecoration: k
      })]
    }), (0, n.jsxs)(s.mzw, {
      "data-migration-pending": true,
      className: C.modalFooter,
      children: [null != L && (U || !M) || null === D || b && M ? (0, n.jsx)(s.Button, {
        variant: "primary",
        text: E.intl.string(E.t.Jh8fJz),
        onClick: () => {
          N(D), y()
        },
        disabled: G
      }) : null == L && (U || !M) ? (0, n.jsx)(s.Button, {
        variant: "primary",
        onClick: () => B(null == R ? true : R.skuId),
        text: E.intl.string(E.t.fYfGgK)
      }) : (0, n.jsx)(x.Z, {
        subscriptionTier: I.Si.TIER_2,
        showGradient: !U,
        textOptions: {
          textOverride: f.ZP.isPremium(t) ? E.intl.string(E.t.KXLX7l) : U ? E.intl.string(E.t.mr4K7D) : E.intl.string(E.t.pj0XBN)
        }
      }), U || b || !M ? (0, n.jsx)(s.Button, {
        variant: "secondary",
        text: E.intl.string(E.t["ETE/oC"]),
        onClick: y
      }) : (0, n.jsx)(h.Z, {
        product: R,
        onClose: y
      })]
    })]
  })
}

function T(e) {
  let {
    transitionState: t,
    analyticsLocations: r,
    onClose: c,
    onCloseModal: u,
    initialSelectedDecoration: d,
    isTryItOut: p,
    guild: h
  } = e, x = (0, l.e7)([y.default], () => y.default.getCurrentUser()), {
    analyticsLocations: g
  } = (0, o.ZP)(r, a.Z.EDIT_AVATAR_DECORATION_MODAL), {
    categories: v,
    purchases: j,
    isFetchingCategories: f,
    isFetchingPurchases: P
  } = (0, m.ZP)(), S = f || P && 0 === j.size;
  return i.useEffect(() => {
    O.default.track(b.rMx.OPEN_MODAL, {
      type: b.jXE.AVATAR_DECORATION_CUSTOMIZATION,
      location_stack: g
    })
  }, [g]), null == x ? null : (0, n.jsx)(o.Gt, {
    value: g,
    children: (0, n.jsx)(s.Y0X, {
      transitionState: t,
      className: C.modal,
      size: S ? s.CgR.DYNAMIC : s.CgR.MEDIUM,
      parentComponent: "AvatarDecorationModal",
      "data-migration-pending": true,
      children: S ? (0, n.jsx)(s.$jN, {
        className: C.spinner,
        type: s.$jN.Type.SPINNING_CIRCLE
      }) : (0, n.jsx)(A, {
        user: x,
        guild: h,
        categories: v,
        purchases: j,
        analyticsLocations: g,
        initialSelectedDecoration: d,
        onClose: () => {
          u(), null == c || c()
        },
        isTryItOut: p
      })
    })
  })
}