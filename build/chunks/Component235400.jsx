/** Chunk was on web.js **/
/** chunk id: 235400, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  default: () => N
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
  Chunk398726 = require("./398726.js");

function C(e) {
  let {
    user: t,
    categories: n,
    purchases: a,
    analyticsLocations: l,
    onClose: f,
    initialSelectedDecoration: E,
    initialSelectedDecorationId: b,
    isTryItOutFlow: I,
    guild: C
  } = e, {
    pendingAvatarDecoration: N,
    setPendingAvatarDecoration: R,
    savedAvatarDecoration: P
  } = (0, g.Z)({
    analyticsLocations: l,
    isTryItOut: I,
    guildId: null == C ? true : C.id
  }), [w, D] = i.useState(() => {
    var e, t;
    if (null != E) return E;
    let r = (0, u.iC)(a, n);
    return null != b ? null != (e = r.find(e => e.id === b)) ? e : null : true !== N ? N : null == P ? null : null != (t = r.find(e => {
      let {
        skuId: t
      } = e;
      return t === P.skuId
    })) ? t : null
  }), {
    product: x,
    purchase: L
  } = (0, d.Z)(null == w ? true : w.skuId), j = y.ZP.canUseCollectibles(t), k = i.useRef(null), M = (0, _.Z)(l), U = true === N ? (null == w ? true : w.skuId) === (null == P ? true : P.skuId) : (null == w ? true : w.skuId) === (null == N ? true : N.skuId), G = e => {
    D(e), null != e && M(e)
  }, B = () => {
    R(w), f()
  }, Z = i.useCallback(e => {
    f(), (0, c.mK)({
      analyticsLocations: l,
      analyticsSource: s.Z.EDIT_AVATAR_DECORATION_MODAL,
      initialProductSkuId: e
    })
  }, [l, f]), F = (0, p.M)(), V = F && (0, u.G1)(x), H = () => null != L && (!(0, u.qS)(L) || j) || null === w ? (0, r.jsx)(o.zxk, {
    variant: "primary",
    text: S.intl.string(S.t.Jh8fJy),
    onClick: B,
    disabled: U
  }) : null == L && (j || !(0, u.G1)(x)) ? (0, r.jsx)(o.zxk, {
    variant: "primary",
    onClick: () => Z(null == x ? true : x.skuId),
    text: S.intl.string(S.t.fYfGgI)
  }) : (0, r.jsx)(m.Z, {
    subscriptionTier: T.Si.TIER_2,
    showGradient: F,
    textOptions: {
      textOverride: y.ZP.isPremium(t) ? S.intl.string(S.t.KXLX7u) : F ? S.intl.string(S.t.pj0XBA) : S.intl.string(S.t.mr4K7O)
    }
  });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(o.xBx, {
      "data-migration-pending": true,
      separator: false,
      className: A.modalHeader,
      children: [(0, r.jsx)(o.X6q, {
        variant: "heading-lg/semibold",
        children: S.intl.string(S.t.HykynZ)
      }), (0, r.jsx)(o.olH, {
        "data-migration-pending": true,
        className: A.modalCloseButton,
        onClick: f
      })]
    }), (0, r.jsxs)(o.hzk, {
      "data-migration-pending": true,
      className: A.modalContent,
      scrollbarType: "none",
      children: [(0, r.jsx)(v.Z, {
        user: t,
        guild: C,
        pendingAvatarDecoration: w,
        selectedAvatarDecorationRef: k,
        onSelect: G,
        onOpenShop: Z
      }), (0, r.jsx)(O.Z, {
        className: A.modalPreview,
        user: t,
        guildId: null == C ? true : C.id,
        avatarDecorationOverride: w
      })]
    }), (0, r.jsxs)(o.mzw, {
      "data-migration-pending": true,
      className: A.modalFooter,
      children: [H(), V ? (0, r.jsx)(h.Z, {
        product: x,
        onSecondaryClick: f
      }) : (0, r.jsx)(o.zxk, {
        variant: "secondary",
        text: S.intl.string(S.t["ETE/oK"]),
        onClick: f
      })]
    })]
  })
}

function N(e) {
  let {
    transitionState: t,
    analyticsLocations: n,
    onClose: c,
    onCloseModal: u,
    initialSelectedDecoration: d,
    initialSelectedDecorationId: _,
    isTryItOutFlow: p,
    guild: h
  } = e, m = (0, a.e7)([E.default], () => E.default.getCurrentUser()), {
    analyticsLocations: g
  } = (0, l.ZP)(n, s.Z.EDIT_AVATAR_DECORATION_MODAL), {
    categories: y,
    purchases: O,
    isFetchingCategories: v,
    isFetchingPurchases: T
  } = (0, f.ZP)(), S = v || T && 0 === O.size, N = () => {
    u(), null == c || c()
  };
  return i.useEffect(() => {
    b.default.track(I.rMx.OPEN_MODAL, {
      type: I.jXE.AVATAR_DECORATION_CUSTOMIZATION,
      location_stack: g
    })
  }, [g]), null == m ? null : (0, r.jsx)(l.Gt, {
    value: g,
    children: (0, r.jsx)(o.Y0X, {
      transitionState: t,
      className: A.modal,
      size: S ? o.CgR.DYNAMIC : o.CgR.MEDIUM,
      parentComponent: "AvatarDecorationModal",
      "data-migration-pending": true,
      children: S ? (0, r.jsx)(o.$jN, {
        className: A.spinner,
        type: o.$jN.Type.SPINNING_CIRCLE
      }) : (0, r.jsx)(C, {
        user: m,
        guild: h,
        categories: y,
        purchases: O,
        analyticsLocations: g,
        initialSelectedDecoration: d,
        initialSelectedDecorationId: _,
        onClose: N,
        isTryItOutFlow: p
      })
    })
  })
}