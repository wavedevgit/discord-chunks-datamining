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
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk74538 = require("./74538.js"),
  Chunk934261 = require("./934261.jsx"),
  Chunk52268 = require("./52268.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk913211 = require("./913211.js");

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
    selectedProfileEffectId: f,
    selectedProfileEffectItem: g
  } = e;
  return (0, r.jsx)(r.Fragment, {
    children: (0, r.jsxs)(o.mzw, {
      "data-migration-pending": true,
      className: v.modalFooter,
      children: [null != i && (!(0, u.qS)(i) || d) || null === f ? (0, r.jsx)(o.zxk, {
        variant: "primary",
        text: _.intl.string(_.t.Jh8fJy),
        onClick: l,
        disabled: a
      }) : null == i && (d || !(0, u.G1)(n)) ? (0, r.jsx)(o.zxk, {
        variant: "primary",
        text: _.intl.string(_.t.fYfGgI),
        onClick: () => c(null == g ? true : g.skuId)
      }) : (0, r.jsx)(m.Z, {
        subscriptionTier: O.Si.TIER_2,
        showGradient: !d,
        textOptions: {
          textOverride: b.ZP.isPremium(t) ? _.intl.string(_.t.KXLX7u) : d ? _.intl.string(_.t.mr4K7O) : _.intl.string(_.t.pj0XBA)
        }
      }), !d && (0, u.G1)(n) ? (0, r.jsx)(p.Z, {
        product: n,
        onClose: s
      }) : (0, r.jsx)(o.zxk, {
        variant: "secondary",
        text: _.intl.string(_.t["ETE/oK"]),
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
    initialSelectedProfileEffectId: p,
    currentSavedEffectId: m,
    analyticsLocations: h
  } = e, {
    pendingProfileEffectId: x
  } = (0, g.bd)(n), [j, O] = i.useMemo(() => {
    let e = (0, u.bl)(l, c);
    return [e.purchased, e.shopPreviews]
  }, [l, c]), [C, S] = i.useState(() => null != p ? p : true !== x ? x : null == m ? null : null != m ? m : null), [w, A] = i.useMemo(() => {
    var e;
    let t = j.find(e => (null == e ? true : e.id) === C),
      n = null != t || null === C;
    return [null != (e = null != t ? t : O.find(e => (null == e ? true : e.id) === C)) ? e : null, n]
  }, [C, j, O]), {
    product: I,
    purchase: Z
  } = (0, d.Z)(null == w ? true : w.skuId), N = i.useRef(null), D = b.ZP.canUseCollectibles(t), T = C === (true === x ? null != m ? m : null : x), k = i.useCallback(e => {
    S(e)
  }, [S]), L = i.useCallback(e => {
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
      children: [(0, r.jsx)(o.X6q, {
        variant: "heading-lg/semibold",
        children: _.intl.string(_.t["/6nv6O"])
      }), (0, r.jsx)(o.olH, {
        "data-migration-pending": true,
        className: v.modalCloseButton,
        onClick: f
      })]
    }), (0, r.jsxs)(o.hzk, {
      "data-migration-pending": true,
      className: v.modalContent,
      children: [(0, r.jsx)(P.Z, {
        user: t,
        guild: n,
        pendingProfileEffect: C,
        selectedProfileEffectRef: N,
        onSelect: k,
        onOpenShop: L
      }), (0, r.jsx)(y.Z, {
        user: t,
        canApplySelectedChange: A,
        pendingProfileEffectRecord: w,
        product: I,
        purchase: Z,
        guild: n
      })]
    }), (0, r.jsx)(E, {
      user: t,
      onApply: () => {
        (0, g.s6)(C, m, null == n ? true : n.id), f()
      },
      onClose: f,
      onOpenShop: L,
      product: I,
      purchase: Z,
      canUseCollectibles: D,
      selectedProfileEffectId: C,
      selectedProfileEffectItem: w,
      disableApplyButton: T,
      analyticsLocations: h
    })]
  })
}

function S(e) {
  let {
    transitionState: t,
    analyticsLocations: n,
    initialSelectedEffectId: a,
    guild: u,
    onClose: d
  } = e, {
    isFetching: p,
    categories: m,
    purchases: b
  } = (0, f.Z)(), y = (0, l.e7)([h.default], () => h.default.getCurrentUser()), {
    analyticsLocations: P
  } = (0, c.ZP)(n, s.Z.EDIT_PROFILE_EFFECT_MODAL), O = (0, g.Kg)(y, u);
  return i.useEffect(() => {
    x.default.track(j.rMx.OPEN_MODAL, {
      type: j.jXE.PROFILE_EFFECT_CUSTOMIZATION,
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
        user: y,
        guild: u,
        categories: m,
        purchases: b,
        initialSelectedProfileEffectId: a,
        currentSavedEffectId: O,
        onClose: d,
        analyticsLocations: P
      })
    })
  })
}