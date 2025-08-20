/** Chunk was on web.js **/
/** chunk id: 235400, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  default: () => R
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
  Chunk864106 = require("./864106.js"),
  Chunk240781 = require("./240781.jsx"),
  Chunk818611 = require("./818611.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk88785 = require("./88785.js");

function N(e) {
  let {
    user: t,
    categories: n,
    purchases: a,
    analyticsLocations: l,
    onClose: f,
    initialSelectedDecoration: E,
    initialSelectedDecorationId: b,
    isTryItOutFlow: T,
    guild: N
  } = e, {
    pendingAvatarDecoration: R,
    setPendingAvatarDecoration: P,
    savedAvatarDecoration: w
  } = (0, g.Z)({
    analyticsLocations: l,
    isTryItOut: T,
    guildId: null == N ? true : N.id
  }), [D, x] = i.useState(() => {
    var e, t;
    if (null != E) return E;
    let r = (0, u.iC)(a, n);
    return null != b ? null != (e = r.find(e => e.id === b)) ? e : null : true !== R ? R : null == w ? null : null != (t = r.find(e => (0, O.sr)(e, w))) ? t : null
  }), {
    product: L,
    purchase: j
  } = (0, d.Z)(null == D ? true : D.skuId), M = y.ZP.canUseCollectibles(t), k = i.useRef(null), U = (0, _.Z)(l), G = (0, O.sr)(D, true === R ? w : R), B = e => {
    x(e), null != e && U(e)
  }, Z = () => {
    P(D), f()
  }, V = i.useCallback(e => {
    f(), (0, c.mK)({
      analyticsLocations: l,
      analyticsSource: s.Z.EDIT_AVATAR_DECORATION_MODAL,
      initialProductSkuId: e
    })
  }, [l, f]), F = (0, p.M)(), H = F && (0, u.G1)(L), Y = () => null != j && (!(0, u.qS)(j) || M) || null === D ? (0, r.jsx)(o.zxk, {
    variant: "primary",
    text: A.intl.string(A.t.Jh8fJy),
    onClick: Z,
    disabled: G
  }) : null == j && (M || !(0, u.G1)(L)) ? (0, r.jsx)(o.zxk, {
    variant: "primary",
    onClick: () => V(null == L ? true : L.skuId),
    text: A.intl.string(A.t.fYfGgI)
  }) : (0, r.jsx)(m.Z, {
    subscriptionTier: S.Si.TIER_2,
    showGradient: F,
    textOptions: {
      textOverride: y.ZP.isPremium(t) ? A.intl.string(A.t.KXLX7u) : F ? A.intl.string(A.t.pj0XBA) : A.intl.string(A.t.mr4K7O)
    }
  });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(o.xBx, {
      "data-migration-pending": true,
      separator: false,
      className: C.modalHeader,
      children: [(0, r.jsx)(o.X6q, {
        variant: "heading-lg/semibold",
        children: A.intl.string(A.t.HykynZ)
      }), (0, r.jsx)(o.olH, {
        "data-migration-pending": true,
        className: C.modalCloseButton,
        onClick: f
      })]
    }), (0, r.jsxs)(o.hzk, {
      "data-migration-pending": true,
      className: C.modalContent,
      scrollbarType: "none",
      children: [(0, r.jsx)(I.Z, {
        user: t,
        guild: N,
        pendingAvatarDecoration: D,
        selectedAvatarDecorationRef: k,
        onSelect: B,
        onOpenShop: V
      }), (0, r.jsx)(v.Z, {
        className: C.modalPreview,
        user: t,
        guildId: null == N ? true : N.id,
        avatarDecorationOverride: D
      })]
    }), (0, r.jsxs)(o.mzw, {
      "data-migration-pending": true,
      className: C.modalFooter,
      children: [Y(), H ? (0, r.jsx)(h.Z, {
        product: L,
        onSecondaryClick: f
      }) : (0, r.jsx)(o.zxk, {
        variant: "secondary",
        text: A.intl.string(A.t["ETE/oK"]),
        onClick: f
      })]
    })]
  })
}

function R(e) {
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
    isFetchingPurchases: I
  } = (0, f.ZP)(), S = v || I && 0 === O.size, A = () => {
    u(), null == c || c()
  };
  return i.useEffect(() => {
    b.default.track(T.rMx.OPEN_MODAL, {
      type: T.jXE.AVATAR_DECORATION_CUSTOMIZATION,
      location_stack: g
    })
  }, [g]), null == m ? null : (0, r.jsx)(l.Gt, {
    value: g,
    children: (0, r.jsx)(o.Y0X, {
      transitionState: t,
      className: C.modal,
      size: S ? o.CgR.DYNAMIC : o.CgR.MEDIUM,
      parentComponent: "AvatarDecorationModal",
      "data-migration-pending": true,
      children: S ? (0, r.jsx)(o.$jN, {
        className: C.spinner,
        type: o.$jN.Type.SPINNING_CIRCLE
      }) : (0, r.jsx)(N, {
        user: m,
        guild: h,
        categories: y,
        purchases: O,
        analyticsLocations: g,
        initialSelectedDecoration: d,
        initialSelectedDecorationId: _,
        onClose: A,
        isTryItOutFlow: p
      })
    })
  })
}