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
    guild: y
  } = e, E = (0, a.e7)([g.ZP], () => null != y ? g.ZP.getMember(y.id, t.id) : null), A = null != E ? E.avatarDecoration : t.avatarDecoration, {
    pendingAvatarDecoration: T,
    setPendingAvatarDecoration: _
  } = (0, v.Z)({
    analyticsLocations: m,
    guildId: null == y ? true : y.id
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
    guildId: null == y ? true : y.id
  }), {
    product: k,
    purchase: R
  } = (0, u.Z)(null == D ? true : D.skuId), L = (0, d.G1)(k), U = P.ZP.canUseCollectibles(t), M = i.useRef(null), B = (0, p.Z)(m), F = true === T ? (null == D ? true : D.skuId) === (null == A ? true : A.skuId) : (null == D ? true : D.skuId) === (null == T ? true : T.skuId), z = i.useCallback(e => {
    b(), (0, c.mK)({
      analyticsLocations: m,
      analyticsSource: s.Z.EDIT_AVATAR_DECORATION_MODAL,
      initialProductSkuId: e
    })
  }, [m, b]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(l.xBx, {
      "data-migration-pending": true,
      separator: false,
      className: I.modalHeader,
      children: [(0, r.jsx)(l.Heading, {
        variant: "heading-lg/semibold",
        children: S.intl.string(S.t.HykynS)
      }), (0, r.jsx)(l.olH, {
        "data-migration-pending": true,
        className: I.modalCloseButton,
        onClick: b
      })]
    }), (0, r.jsxs)(l.hzk, {
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
    }), (0, r.jsxs)(l.mzw, {
      "data-migration-pending": true,
      className: I.modalFooter,
      children: [null != R && (U || !L) || null === D ? (0, r.jsx)(l.Button, {
        variant: "primary",
        text: S.intl.string(S.t.Jh8fJz),
        onClick: () => {
          _(D), b()
        },
        disabled: F
      }) : null == R && (U || !L) ? (0, r.jsx)(l.Button, {
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
        onClose: b
      }) : (0, r.jsx)(l.Button, {
        variant: "secondary",
        text: S.intl.string(S.t["ETE/oC"]),
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
  } = e, h = (0, a.e7)([b.default], () => b.default.getCurrentUser()), {
    analyticsLocations: x
  } = (0, o.ZP)(n, s.Z.EDIT_AVATAR_DECORATION_MODAL), {
    categories: f,
    purchases: v,
    isFetchingCategories: g,
    isFetchingPurchases: P
  } = (0, m.ZP)(), O = g || P && 0 === v.size;
  return i.useEffect(() => {
    j.default.track(y.rMx.OPEN_MODAL, {
      type: y.jXE.AVATAR_DECORATION_CUSTOMIZATION,
      location_stack: x
    })
  }, [x]), null == h ? null : (0, r.jsx)(o.Gt, {
    value: x,
    children: (0, r.jsx)(l.Y0X, {
      transitionState: t,
      className: I.modal,
      size: O ? l.CgR.DYNAMIC : l.CgR.MEDIUM,
      parentComponent: "AvatarDecorationModal",
      "data-migration-pending": true,
      children: O ? (0, r.jsx)(l.$jN, {
        className: I.spinner,
        type: l.$jN.Type.SPINNING_CIRCLE
      }) : (0, r.jsx)(E, {
        user: h,
        guild: p,
        categories: f,
        purchases: v,
        analyticsLocations: x,
        initialSelectedDecoration: u,
        onClose: () => {
          d(), null == c || c()
        }
      })
    })
  })
}