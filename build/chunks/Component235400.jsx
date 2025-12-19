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
  var t;
  let {
    user: n,
    categories: o,
    purchases: m,
    analyticsLocations: b,
    onClose: j,
    initialSelectedDecoration: w,
    guild: E
  } = e, A = (0, a.e7)([f.ZP], () => null != E ? f.ZP.getMember(E.id, n.id) : null), T = null != A ? A.avatarDecoration : n.avatarDecoration, {
    pendingAvatarDecoration: _,
    setPendingAvatarDecoration: D
  } = (0, g.Z)({
    analyticsLocations: b,
    guildId: null == E ? true : E.id
  }), [Z, N] = i.useState(() => {
    var e;
    return null != w ? w : true !== _ ? _ : null == T ? null : null != (e = (0, d.iC)(m, o).find(e => {
      let {
        skuId: t
      } = e;
      return t === T.skuId
    })) ? e : null
  }), k = (0, x.Ys)({
    pendingValue: Z,
    userValue: null == n ? true : n.avatarDecoration,
    guildValue: null == A ? true : A.avatarDecoration,
    guildId: null == E ? true : E.id
  }), {
    product: R,
    purchase: L
  } = (0, u.Z)(null == Z ? true : Z.skuId), U = null != L ? (0, d.qS)(L) : (0, d.G1)(R), M = P.ZP.canUseCollectibles(n), B = i.useRef(null), F = (0, p.Z)(b), z = true === _ ? (null == Z ? true : Z.skuId) === (null == T ? true : T.skuId) : (null == Z ? true : Z.skuId) === (null == _ ? true : _.skuId), G = i.useCallback(e => {
    j(), (0, c.mK)({
      analyticsLocations: b,
      analyticsSource: s.Z.EDIT_AVATAR_DECORATION_MODAL,
      initialProductSkuId: e
    })
  }, [b, j]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(l.xBx, {
      "data-migration-pending": true,
      separator: false,
      className: I.modalHeader,
      children: [(0, r.jsx)(l.Heading, {
        variant: "heading-lg/semibold",
        children: C.intl.string(C.t.HykynS)
      }), (0, r.jsx)(l.olH, {
        "data-migration-pending": true,
        className: I.modalCloseButton,
        onClick: j
      })]
    }), (0, r.jsxs)(l.hzk, {
      "data-migration-pending": true,
      className: I.modalContent,
      scrollbarType: "none",
      children: [(0, r.jsx)(O.Z, {
        user: n,
        guild: E,
        pendingAvatarDecoration: Z,
        selectedAvatarDecorationRef: B,
        onSelect: e => {
          N(e), null != e && F(e)
        },
        onOpenShop: G
      }), (0, r.jsx)(y.Z, {
        className: I.modalPreview,
        user: n,
        guildId: null == E ? true : E.id,
        avatarDecoration: k
      })]
    }), (0, r.jsxs)(l.mzw, {
      "data-migration-pending": true,
      className: I.modalFooter,
      children: [null != L && (M || !U) || null === Z ? (0, r.jsx)(l.Button, {
        variant: "primary",
        text: C.intl.string(C.t.Jh8fJz),
        onClick: () => {
          D(Z), j()
        },
        disabled: z
      }) : null == L && (M || !U) ? (0, r.jsx)(l.Button, {
        variant: "primary",
        onClick: () => G(null == R ? true : R.skuId),
        text: C.intl.string(C.t.fYfGgK)
      }) : (0, r.jsx)(v.Z, {
        subscriptionTier: S.Si.TIER_2,
        showGradient: !M,
        textOptions: {
          textOverride: P.ZP.isPremium(n) ? C.intl.string(C.t.KXLX7l) : M ? C.intl.string(C.t.mr4K7D) : C.intl.string(C.t.pj0XBN)
        }
      }), !M && U ? (0, r.jsx)(h.Z, {
        itemType: null != (t = null == L ? true : L.type) ? t : null == R ? true : R.type,
        onClose: j
      }) : (0, r.jsx)(l.Button, {
        variant: "secondary",
        text: C.intl.string(C.t["ETE/oC"]),
        onClick: j
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
  } = e, h = (0, a.e7)([b.default], () => b.default.getCurrentUser()), {
    analyticsLocations: v
  } = (0, o.ZP)(n, s.Z.EDIT_AVATAR_DECORATION_MODAL), {
    categories: x,
    purchases: g,
    isFetchingCategories: f,
    isFetchingPurchases: P
  } = (0, m.ZP)(), y = f || P && 0 === g.size;
  return i.useEffect(() => {
    j.default.track(w.rMx.OPEN_MODAL, {
      type: w.jXE.AVATAR_DECORATION_CUSTOMIZATION,
      location_stack: v
    })
  }, [v]), null == h ? null : (0, r.jsx)(o.Gt, {
    value: v,
    children: (0, r.jsx)(l.Y0X, {
      transitionState: t,
      className: I.modal,
      size: y ? l.CgR.DYNAMIC : l.CgR.MEDIUM,
      parentComponent: "AvatarDecorationModal",
      "data-migration-pending": true,
      children: y ? (0, r.jsx)(l.$jN, {
        className: I.spinner,
        type: l.$jN.Type.SPINNING_CIRCLE
      }) : (0, r.jsx)(E, {
        user: h,
        guild: p,
        categories: x,
        purchases: g,
        analyticsLocations: v,
        initialSelectedDecoration: u,
        onClose: () => {
          d(), null == c || c()
        }
      })
    })
  })
}