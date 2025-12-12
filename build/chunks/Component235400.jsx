/** Chunk was on 79589 **/
/** chunk id: 235400, original params: e,t,n (module,exports,require) **/
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
    categories: n,
    purchases: o,
    analyticsLocations: m,
    onClose: j,
    initialSelectedDecoration: _,
    guild: y
  } = e, b = (0, l.e7)([f.ZP], () => null != y ? f.ZP.getMember(y.id, t.id) : null), E = null != b ? b.avatarDecoration : t.avatarDecoration, {
    pendingAvatarDecoration: A,
    setPendingAvatarDecoration: T
  } = (0, g.Z)({
    analyticsLocations: m,
    guildId: null == y ? true : y.id
  }), [D, Z] = i.useState(() => {
    var e;
    return null != _ ? _ : true !== A ? A : null == E ? null : null != (e = (0, d.iC)(o, n).find(e => {
      let {
        skuId: t
      } = e;
      return t === E.skuId
    })) ? e : null
  }), N = (0, v.Ys)({
    pendingValue: D,
    userValue: null == t ? true : t.avatarDecoration,
    guildValue: null == b ? true : b.avatarDecoration,
    guildId: null == y ? true : y.id
  }), {
    product: k,
    purchase: R
  } = (0, u.Z)(null == D ? true : D.skuId), L = (0, d.G1)(k), U = P.ZP.canUseCollectibles(t), M = i.useRef(null), B = (0, p.Z)(m), F = true === A ? (null == D ? true : D.skuId) === (null == E ? true : E.skuId) : (null == D ? true : D.skuId) === (null == A ? true : A.skuId), z = i.useCallback(e => {
    j(), (0, c.mK)({
      analyticsLocations: m,
      analyticsSource: s.Z.EDIT_AVATAR_DECORATION_MODAL,
      initialProductSkuId: e
    })
  }, [m, j]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(a.xBx, {
      "data-migration-pending": true,
      separator: false,
      className: I.modalHeader,
      children: [(0, r.jsx)(a.Heading, {
        variant: "heading-lg/semibold",
        children: S.intl.string(S.t.HykynS)
      }), (0, r.jsx)(a.olH, {
        "data-migration-pending": true,
        className: I.modalCloseButton,
        onClick: j
      })]
    }), (0, r.jsxs)(a.hzk, {
      "data-migration-pending": true,
      className: I.modalContent,
      scrollbarType: "none",
      children: [(0, r.jsx)(w.Z, {
        user: t,
        guild: y,
        pendingAvatarDecoration: D,
        selectedAvatarDecorationRef: M,
        onSelect: e => {
          Z(e), null != e && B(e)
        },
        onOpenShop: z
      }), (0, r.jsx)(O.Z, {
        className: I.modalPreview,
        user: t,
        guildId: null == y ? true : y.id,
        avatarDecoration: N
      })]
    }), (0, r.jsxs)(a.mzw, {
      "data-migration-pending": true,
      className: I.modalFooter,
      children: [null != R && (U || !L) || null === D ? (0, r.jsx)(a.Button, {
        variant: "primary",
        text: S.intl.string(S.t.Jh8fJz),
        onClick: () => {
          T(D), j()
        },
        disabled: F
      }) : null == R && (U || !L) ? (0, r.jsx)(a.Button, {
        variant: "primary",
        onClick: () => z(null == k ? true : k.skuId),
        text: S.intl.string(S.t.fYfGgK)
      }) : (0, r.jsx)(x.Z, {
        subscriptionTier: C.Si.TIER_2,
        showGradient: !U,
        textOptions: {
          textOverride: P.ZP.isPremium(t) ? S.intl.string(S.t.KXLX7l) : U ? S.intl.string(S.t.mr4K7D) : S.intl.string(S.t.pj0XBN)
        }
      }), !U && L ? (0, r.jsx)(h.Z, {
        product: k,
        onClose: j
      }) : (0, r.jsx)(a.Button, {
        variant: "secondary",
        text: S.intl.string(S.t["ETE/oC"]),
        onClick: j
      })]
    })]
  })
}

function E(e) {
  let {
    transitionState: t,
    analyticsLocations: n,
    onClose: c,
    onCloseModal: d,
    initialSelectedDecoration: u,
    guild: p
  } = e, h = (0, l.e7)([j.default], () => j.default.getCurrentUser()), {
    analyticsLocations: x
  } = (0, o.ZP)(n, s.Z.EDIT_AVATAR_DECORATION_MODAL), {
    categories: v,
    purchases: g,
    isFetchingCategories: f,
    isFetchingPurchases: P
  } = (0, m.ZP)(), O = f || P && 0 === g.size;
  return i.useEffect(() => {
    _.default.track(y.rMx.OPEN_MODAL, {
      type: y.jXE.AVATAR_DECORATION_CUSTOMIZATION,
      location_stack: x
    })
  }, [x]), null == h ? null : (0, r.jsx)(o.Gt, {
    value: x,
    children: (0, r.jsx)(a.Y0X, {
      transitionState: t,
      className: I.modal,
      size: O ? a.CgR.DYNAMIC : a.CgR.MEDIUM,
      parentComponent: "AvatarDecorationModal",
      "data-migration-pending": true,
      children: O ? (0, r.jsx)(a.$jN, {
        className: I.spinner,
        type: a.$jN.Type.SPINNING_CIRCLE
      }) : (0, r.jsx)(b, {
        user: h,
        guild: p,
        categories: v,
        purchases: g,
        analyticsLocations: x,
        initialSelectedDecoration: u,
        onClose: () => {
          d(), null == c || c()
        }
      })
    })
  })
}