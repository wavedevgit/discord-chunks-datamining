/** Chunk was on 55183 **/
/** chunk id: 191564, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => S
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
  Chunk566111 = require("./566111.js"),
  Chunk269982 = require("./269982.jsx"),
  Chunk767714 = require("./767714.jsx"),
  Chunk150039 = require("./150039.js"),
  Chunk350327 = require("./350327.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk74538 = require("./74538.js"),
  Chunk934261 = require("./934261.jsx"),
  Chunk52268 = require("./52268.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk238983 = require("./238983.js");

function C(e) {
  let {
    user: t,
    product: n,
    purchase: i,
    onApply: l,
    onClose: s,
    onOpenShop: c,
    disableApplyButton: a,
    canUsePremiumCollectibles: d,
    isTryItOut: f,
    selectedProfileEffect: g
  } = e, h = (0, u.G1)(n);
  return (0, r.jsx)(r.Fragment, {
    children: (0, r.jsxs)(o.mzw, {
      "data-migration-pending": true,
      className: E.modalFooter,
      children: [null != i && (d || !h) || null === g || f && h ? (0, r.jsx)(o.Button, {
        variant: "primary",
        text: _.intl.string(_.t.Jh8fJz),
        onClick: l,
        disabled: a
      }) : null == i && (d || !h) ? (0, r.jsx)(o.Button, {
        variant: "primary",
        text: _.intl.string(_.t.fYfGgK),
        onClick: () => c(null == g ? true : g.skuId)
      }) : (0, r.jsx)(m.Z, {
        subscriptionTier: v.Si.TIER_2,
        showGradient: !d,
        textOptions: {
          textOverride: b.ZP.isPremium(t) ? _.intl.string(_.t.KXLX7l) : d ? _.intl.string(_.t.mr4K7D) : _.intl.string(_.t.pj0XBN)
        }
      }), d || f || !h ? (0, r.jsx)(o.Button, {
        variant: "secondary",
        text: _.intl.string(_.t["ETE/oC"]),
        onClick: s
      }) : (0, r.jsx)(p.Z, {
        product: n,
        onClose: s
      })]
    })
  })
}

function I(e) {
  let {
    user: t,
    guild: n,
    categories: l,
    purchases: c,
    initialSelectedProfileEffect: f,
    currentSavedEffect: p,
    analyticsLocations: m,
    isTryItOut: x = false,
    onClose: y
  } = e, {
    pendingProfileEffect: P
  } = (0, g.sY)({
    guildId: null == n ? true : n.id,
    isTryItOut: x
  }), [v, I] = i.useMemo(() => {
    let e = (0, u.bl)(l, c);
    return [e.purchased, e.shopPreviews]
  }, [l, c]), [S, w] = i.useState(() => null != f ? f : true !== P ? P : null == p ? null : null != p ? p : null), [A, N] = i.useMemo(() => {
    var e;
    let t = v.find(e => {
        let {
          skuId: t
        } = e;
        return t === (null == S ? true : S.skuId)
      }),
      n = null != t || null === S;
    return [null != (e = null != t ? t : I.find(e => {
      let {
        skuId: t
      } = e;
      return t === (null == S ? true : S.skuId)
    })) ? e : null, n]
  }, [S, v, I]), {
    product: T,
    purchase: Z
  } = (0, d.Z)(null == A ? true : A.skuId), k = i.useRef(null), D = b.ZP.canUseCollectibles(t), U = true === P ? (null == S ? true : S.skuId) === (null == p ? true : p.skuId) : (null == S ? true : S.skuId) === (null == P ? true : P.skuId), B = i.useCallback(e => {
    w(e)
  }, [w]), L = i.useCallback(e => {
    y(), (0, a.mK)({
      analyticsLocations: m,
      analyticsSource: s.Z.EDIT_PROFILE_EFFECT_MODAL,
      initialProductSkuId: e
    })
  }, [m, y]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(o.xBx, {
      "data-migration-pending": true,
      separator: false,
      className: E.modalHeader,
      children: [(0, r.jsx)(o.Heading, {
        variant: "heading-lg/semibold",
        children: _.intl.string(_.t["/6nv6N"])
      }), (0, r.jsx)(o.olH, {
        "data-migration-pending": true,
        className: E.modalCloseButton,
        onClick: y
      })]
    }), (0, r.jsxs)(o.hzk, {
      "data-migration-pending": true,
      className: E.modalContent,
      children: [(0, r.jsx)(O.Z, {
        user: t,
        guild: n,
        pendingProfileEffect: S,
        selectedProfileEffectRef: k,
        isTryItOut: x,
        onSelect: B,
        onOpenShop: L
      }), (0, r.jsx)(j.Z, {
        user: t,
        canApplySelectedChange: N,
        pendingProfileEffectRecord: A,
        product: T,
        purchase: Z,
        guild: n
      })]
    }), (0, r.jsx)(C, {
      user: t,
      onApply: () => {
        x ? (0, h.Ju)(S) : (0, g.UK)(S, null == n ? true : n.id), y()
      },
      onClose: y,
      onOpenShop: L,
      product: T,
      purchase: Z,
      canUsePremiumCollectibles: D,
      isTryItOut: x,
      selectedProfileEffect: S,
      disableApplyButton: U
    })]
  })
}

function S(e) {
  let {
    transitionState: t,
    analyticsLocations: n,
    initialSelectedEffect: a,
    guild: u,
    isTryItOut: d,
    onClose: p
  } = e, {
    isFetching: m,
    categories: h,
    purchases: b
  } = (0, f.Z)(), j = (0, l.e7)([x.default], () => x.default.getCurrentUser()), {
    analyticsLocations: O
  } = (0, c.ZP)(n, s.Z.EDIT_PROFILE_EFFECT_MODAL), v = (0, g.nh)({
    user: j,
    guildId: null == u ? true : u.id
  });
  return i.useEffect(() => {
    y.default.track(P.rMx.OPEN_MODAL, {
      type: P.jXE.PROFILE_EFFECT_CUSTOMIZATION,
      location_stack: O
    })
  }, [O]), (0, r.jsx)(c.Gt, {
    value: O,
    children: (0, r.jsx)(o.Y0X, {
      transitionState: t,
      className: E.modal,
      size: m ? o.CgR.DYNAMIC : o.CgR.MEDIUM,
      parentComponent: "ProfileEffectModal",
      "data-migration-pending": true,
      children: m ? (0, r.jsx)(o.$jN, {
        className: E.spinner,
        type: o.$jN.Type.SPINNING_CIRCLE
      }) : (0, r.jsx)(I, {
        user: j,
        guild: u,
        categories: h,
        purchases: b,
        initialSelectedProfileEffect: a,
        currentSavedEffect: v,
        onClose: p,
        analyticsLocations: O,
        isTryItOut: d
      })
    })
  })
}