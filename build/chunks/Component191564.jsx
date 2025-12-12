/** Chunk was on 55183 **/
/** chunk id: 191564, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => I
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
  Chunk269982 = require("./269982.jsx"),
  Chunk767714 = require("./767714.jsx"),
  Chunk150039 = require("./150039.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk74538 = require("./74538.js"),
  Chunk934261 = require("./934261.jsx"),
  Chunk52268 = require("./52268.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk238983 = require("./238983.js");

function E(e) {
  let {
    user: t,
    product: n,
    purchase: i,
    onApply: l,
    onClose: s,
    onOpenShop: c,
    disableApplyButton: a,
    canUsePremiumCollectibles: d,
    selectedProfileEffect: f
  } = e, g = (0, u.G1)(n);
  return (0, r.jsx)(r.Fragment, {
    children: (0, r.jsxs)(o.mzw, {
      "data-migration-pending": true,
      className: v.modalFooter,
      children: [null != i && (d || !g) || null === f ? (0, r.jsx)(o.Button, {
        variant: "primary",
        text: _.intl.string(_.t.Jh8fJz),
        onClick: l,
        disabled: a
      }) : null == i && (d || !g) ? (0, r.jsx)(o.Button, {
        variant: "primary",
        text: _.intl.string(_.t.fYfGgK),
        onClick: () => c(null == f ? true : f.skuId)
      }) : (0, r.jsx)(m.Z, {
        subscriptionTier: O.Si.TIER_2,
        showGradient: !d,
        textOptions: {
          textOverride: b.ZP.isPremium(t) ? _.intl.string(_.t.KXLX7l) : d ? _.intl.string(_.t.mr4K7D) : _.intl.string(_.t.pj0XBN)
        }
      }), !d && g ? (0, r.jsx)(p.Z, {
        product: n,
        onClose: s
      }) : (0, r.jsx)(o.Button, {
        variant: "secondary",
        text: _.intl.string(_.t["ETE/oC"]),
        onClick: s
      })]
    })
  })
}

function C(e) {
  let {
    user: t,
    guild: n,
    categories: l,
    purchases: c,
    initialSelectedProfileEffect: f,
    currentSavedEffect: p,
    analyticsLocations: m,
    onClose: h
  } = e, {
    pendingProfileEffect: x
  } = (0, g.xZ)(null == n ? true : n.id), [y, O] = i.useMemo(() => {
    let e = (0, u.bl)(l, c);
    return [e.purchased, e.shopPreviews]
  }, [l, c]), [C, I] = i.useState(() => null != f ? f : true !== x ? x : null == p ? null : null != p ? p : null), [S, w] = i.useMemo(() => {
    var e;
    let t = y.find(e => {
        let {
          skuId: t
        } = e;
        return t === (null == C ? true : C.skuId)
      }),
      n = null != t || null === C;
    return [null != (e = null != t ? t : O.find(e => {
      let {
        skuId: t
      } = e;
      return t === (null == C ? true : C.skuId)
    })) ? e : null, n]
  }, [C, y, O]), {
    product: A,
    purchase: N
  } = (0, d.Z)(null == S ? true : S.skuId), k = i.useRef(null), Z = b.ZP.canUseCollectibles(t), D = true === x ? (null == C ? true : C.skuId) === (null == p ? true : p.skuId) : (null == C ? true : C.skuId) === (null == x ? true : x.skuId), T = i.useCallback(e => {
    I(e)
  }, [I]), U = i.useCallback(e => {
    h(), (0, a.mK)({
      analyticsLocations: m,
      analyticsSource: s.Z.EDIT_PROFILE_EFFECT_MODAL,
      initialProductSkuId: e
    })
  }, [m, h]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(o.xBx, {
      "data-migration-pending": true,
      separator: false,
      className: v.modalHeader,
      children: [(0, r.jsx)(o.Heading, {
        variant: "heading-lg/semibold",
        children: _.intl.string(_.t["/6nv6N"])
      }), (0, r.jsx)(o.olH, {
        "data-migration-pending": true,
        className: v.modalCloseButton,
        onClick: h
      })]
    }), (0, r.jsxs)(o.hzk, {
      "data-migration-pending": true,
      className: v.modalContent,
      children: [(0, r.jsx)(P.Z, {
        user: t,
        guild: n,
        pendingProfileEffect: C,
        selectedProfileEffectRef: k,
        onSelect: T,
        onOpenShop: U
      }), (0, r.jsx)(j.Z, {
        user: t,
        canApplySelectedChange: w,
        pendingProfileEffectRecord: S,
        product: A,
        purchase: N,
        guild: n
      })]
    }), (0, r.jsx)(E, {
      user: t,
      onApply: () => {
        (0, g.UK)(C, null == n ? true : n.id), h()
      },
      onClose: h,
      onOpenShop: U,
      product: A,
      purchase: N,
      canUsePremiumCollectibles: Z,
      selectedProfileEffect: C,
      disableApplyButton: D
    })]
  })
}

function I(e) {
  let {
    transitionState: t,
    analyticsLocations: n,
    initialSelectedEffect: a,
    guild: u,
    onClose: d
  } = e, {
    isFetching: p,
    categories: m,
    purchases: b
  } = (0, f.ZP)(), j = (0, l.e7)([h.default], () => h.default.getCurrentUser()), {
    analyticsLocations: P
  } = (0, c.ZP)(n, s.Z.EDIT_PROFILE_EFFECT_MODAL), O = (0, g.nh)({
    user: j,
    guildId: null == u ? true : u.id
  });
  return i.useEffect(() => {
    x.default.track(y.rMx.OPEN_MODAL, {
      type: y.jXE.PROFILE_EFFECT_CUSTOMIZATION,
      location_stack: P
    })
  }, [P]), (0, r.jsx)(c.Gt, {
    value: P,
    children: (0, r.jsx)(o.Y0X, {
      transitionState: t,
      className: v.modal,
      size: p ? o.CgR.DYNAMIC : o.CgR.MEDIUM,
      parentComponent: "ProfileEffectModal",
      "data-migration-pending": true,
      children: p ? (0, r.jsx)(o.$jN, {
        className: v.spinner,
        type: o.$jN.Type.SPINNING_CIRCLE
      }) : (0, r.jsx)(C, {
        user: j,
        guild: u,
        categories: m,
        purchases: b,
        initialSelectedProfileEffect: a,
        currentSavedEffect: O,
        onClose: d,
        analyticsLocations: P
      })
    })
  })
}