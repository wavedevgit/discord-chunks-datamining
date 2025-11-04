/** Chunk was on 55183 **/
/** chunk id: 191564, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => I
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
    canUseCollectibles: d,
    selectedProfileEffect: f
  } = e;
  return (0, r.jsx)(r.Fragment, {
    children: (0, r.jsxs)(o.mzw, {
      "data-migration-pending": true,
      className: v.modalFooter,
      children: [null != i && (!(0, u.qS)(i) || d) || null === f ? (0, r.jsx)(o.Button, {
        variant: "primary",
        text: _.intl.string(_.t.Jh8fJz),
        onClick: l,
        disabled: a
      }) : null == i && (d || !(0, u.G1)(n)) ? (0, r.jsx)(o.Button, {
        variant: "primary",
        text: _.intl.string(_.t.fYfGgK),
        onClick: () => c(null == f ? true : f.skuId)
      }) : (0, r.jsx)(m.Z, {
        subscriptionTier: O.Si.TIER_2,
        showGradient: !d,
        textOptions: {
          textOverride: b.ZP.isPremium(t) ? _.intl.string(_.t.KXLX7l) : d ? _.intl.string(_.t.mr4K7D) : _.intl.string(_.t.pj0XBN)
        }
      }), !d && (0, u.G1)(n) ? (0, r.jsx)(p.Z, {
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
    onClose: f,
    initialSelectedProfileEffect: p,
    currentSavedEffect: m,
    analyticsLocations: h
  } = e, {
    pendingProfileEffect: x
  } = (0, g.bd)(n), [P, O] = i.useMemo(() => {
    let e = (0, u.bl)(l, c);
    return [e.purchased, e.shopPreviews]
  }, [l, c]), [C, I] = i.useState(() => null != p ? p : true !== x ? x : null == m ? null : null != m ? m : null), [S, w] = i.useMemo(() => {
    var e;
    let t = P.find(e => {
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
  }, [C, P, O]), {
    product: A,
    purchase: N
  } = (0, d.Z)(null == S ? true : S.skuId), Z = i.useRef(null), k = b.ZP.canUseCollectibles(t), D = true === x ? (null == C ? true : C.skuId) === (null == m ? true : m.skuId) : (null == C ? true : C.skuId) === (null == x ? true : x.skuId), T = i.useCallback(e => {
    I(e)
  }, [I]), U = i.useCallback(e => {
    f(), (0, a.mK)({
      analyticsLocations: h,
      analyticsSource: s.Z.EDIT_PROFILE_EFFECT_MODAL,
      initialProductSkuId: e
    })
  }, [h, f]);
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
        onClick: f
      })]
    }), (0, r.jsxs)(o.hzk, {
      "data-migration-pending": true,
      className: v.modalContent,
      children: [(0, r.jsx)(j.Z, {
        user: t,
        guild: n,
        pendingProfileEffect: C,
        selectedProfileEffectRef: Z,
        onSelect: T,
        onOpenShop: U
      }), (0, r.jsx)(y.Z, {
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
        (0, g.UK)(C, null == n ? true : n.id), f()
      },
      onClose: f,
      onOpenShop: U,
      product: A,
      purchase: N,
      canUseCollectibles: k,
      selectedProfileEffect: C,
      disableApplyButton: D,
      analyticsLocations: h
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
  } = (0, f.Z)(), y = (0, l.e7)([h.default], () => h.default.getCurrentUser()), {
    analyticsLocations: j
  } = (0, c.ZP)(n, s.Z.EDIT_PROFILE_EFFECT_MODAL), O = (0, g.Kg)(y, u);
  return i.useEffect(() => {
    x.default.track(P.rMx.OPEN_MODAL, {
      type: P.jXE.PROFILE_EFFECT_CUSTOMIZATION,
      location_stack: j
    })
  }, [j]), (0, r.jsx)(c.Gt, {
    value: j,
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
        user: y,
        guild: u,
        categories: m,
        purchases: b,
        initialSelectedProfileEffect: a,
        currentSavedEffect: O,
        onClose: d,
        analyticsLocations: j
      })
    })
  })
}