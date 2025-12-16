/** Chunk was on 79589 **/
/** chunk id: 235400, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => A
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
  Chunk258659 = require("./258659.js");

function E(e) {
  let {
    user: t,
    categories: n,
    purchases: o,
    analyticsLocations: m,
    onClose: b,
    initialSelectedDecoration: j,
    guild: w
  } = e, E = (0, l.e7)([v.ZP], () => null != w ? v.ZP.getMember(w.id, t.id) : null), A = null != E ? E.avatarDecoration : t.avatarDecoration, {
    pendingAvatarDecoration: T,
    setPendingAvatarDecoration: _
  } = (0, g.Z)({
    analyticsLocations: m,
    guildId: null == w ? true : w.id
  }), [D, Z] = i.useState(() => {
    var e;
    return null != j ? j : true !== T ? T : null == A ? null : null != (e = (0, d.iC)(o, n).find(e => {
      let {
        skuId: t
      } = e;
      return t === A.skuId
    })) ? e : null
  }), N = (0, f.Ys)({
    pendingValue: D,
    userValue: null == t ? true : t.avatarDecoration,
    guildValue: null == E ? true : E.avatarDecoration,
    guildId: null == w ? true : w.id
  }), {
    product: k,
    purchase: R
  } = (0, u.Z)(null == D ? true : D.skuId), L = null != R ? (0, d.qS)(R) : (0, d.G1)(k), U = P.ZP.canUseCollectibles(t), M = i.useRef(null), B = (0, p.Z)(m), F = true === T ? (null == D ? true : D.skuId) === (null == A ? true : A.skuId) : (null == D ? true : D.skuId) === (null == T ? true : T.skuId), z = i.useCallback(e => {
    b(), (0, c.mK)({
      analyticsLocations: m,
      analyticsSource: s.Z.EDIT_AVATAR_DECORATION_MODAL,
      initialProductSkuId: e
    })
  }, [m, b]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(a.xBx, {
      "data-migration-pending": true,
      separator: false,
      className: I.modalHeader,
      children: [(0, r.jsx)(a.Heading, {
        variant: "heading-lg/semibold",
        children: C.intl.string(C.t.HykynS)
      }), (0, r.jsx)(a.olH, {
        "data-migration-pending": true,
        className: I.modalCloseButton,
        onClick: b
      })]
    }), (0, r.jsxs)(a.hzk, {
      "data-migration-pending": true,
      className: I.modalContent,
      scrollbarType: "none",
      children: [(0, r.jsx)(O.Z, {
        user: t,
        guild: w,
        pendingAvatarDecoration: D,
        selectedAvatarDecorationRef: M,
        onSelect: e => {
          Z(e), null != e && B(e)
        },
        onOpenShop: z
      }), (0, r.jsx)(y.Z, {
        className: I.modalPreview,
        user: t,
        guildId: null == w ? true : w.id,
        avatarDecoration: N
      })]
    }), (0, r.jsxs)(a.mzw, {
      "data-migration-pending": true,
      className: I.modalFooter,
      children: [null != R && (U || !L) || null === D ? (0, r.jsx)(a.Button, {
        variant: "primary",
        text: C.intl.string(C.t.Jh8fJz),
        onClick: () => {
          _(D), b()
        },
        disabled: F
      }) : null == R && (U || !L) ? (0, r.jsx)(a.Button, {
        variant: "primary",
        onClick: () => z(null == k ? true : k.skuId),
        text: C.intl.string(C.t.fYfGgK)
      }) : (0, r.jsx)(x.Z, {
        subscriptionTier: S.Si.TIER_2,
        showGradient: !U,
        textOptions: {
          textOverride: P.ZP.isPremium(t) ? C.intl.string(C.t.KXLX7l) : U ? C.intl.string(C.t.mr4K7D) : C.intl.string(C.t.pj0XBN)
        }
      }), !U && L ? (0, r.jsx)(h.Z, {
        product: null != R ? R : k,
        onClose: b
      }) : (0, r.jsx)(a.Button, {
        variant: "secondary",
        text: C.intl.string(C.t["ETE/oC"]),
        onClick: b
      })]
    })]
  })
}

function A(e) {
  let {
    transitionState: t,
    analyticsLocations: n,
    onClose: c,
    onCloseModal: d,
    initialSelectedDecoration: u,
    guild: p
  } = e, h = (0, l.e7)([b.default], () => b.default.getCurrentUser()), {
    analyticsLocations: x
  } = (0, o.ZP)(n, s.Z.EDIT_AVATAR_DECORATION_MODAL), {
    categories: f,
    purchases: g,
    isFetchingCategories: v,
    isFetchingPurchases: P
  } = (0, m.ZP)(), y = v || P && 0 === g.size;
  return i.useEffect(() => {
    j.default.track(w.rMx.OPEN_MODAL, {
      type: w.jXE.AVATAR_DECORATION_CUSTOMIZATION,
      location_stack: x
    })
  }, [x]), null == h ? null : (0, r.jsx)(o.Gt, {
    value: x,
    children: (0, r.jsx)(a.Y0X, {
      transitionState: t,
      className: I.modal,
      size: y ? a.CgR.DYNAMIC : a.CgR.MEDIUM,
      parentComponent: "AvatarDecorationModal",
      "data-migration-pending": true,
      children: y ? (0, r.jsx)(a.$jN, {
        className: I.spinner,
        type: a.$jN.Type.SPINNING_CIRCLE
      }) : (0, r.jsx)(E, {
        user: h,
        guild: p,
        categories: f,
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