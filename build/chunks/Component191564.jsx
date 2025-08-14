/** Chunk was on 55183 **/
/** chunk id: 191564, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => I
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk335131 = require("./335131.js"),
  Chunk884697 = require("./884697.js"),
  Chunk449217 = require("./449217.js"),
  Chunk566111 = require("./566111.js"),
  Chunk222062 = require("./222062.js"),
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
  Chunk625002 = require("./625002.js");

function S(e) {
  let {
    user: t,
    product: r,
    purchase: i,
    onApply: l,
    onClose: s,
    onOpenShop: c,
    disableApplyButton: a,
    canUseCollectibles: d,
    selectedProfileEffectId: f,
    selectedProfileEffectItem: h
  } = e, b = (0, p.M)(), j = b && (0, u.G1)(r);
  return (0, n.jsx)(n.Fragment, {
    children: (0, n.jsxs)(o.mzw, {
      "data-migration-pending": true,
      className: E.modalFooter,
      children: [null != i && (!(0, u.qS)(i) || d) || null === f ? (0, n.jsx)(o.zxk, {
        variant: "primary",
        text: _.intl.string(_.t.Jh8fJy),
        onClick: l,
        disabled: a
      }) : d || !(0, u.G1)(r) ? (0, n.jsx)(o.zxk, {
        variant: "primary",
        text: _.intl.string(_.t.fYfGgI),
        onClick: () => c(null == h ? true : h.skuId)
      }) : (0, n.jsx)(g.Z, {
        subscriptionTier: P.Si.TIER_2,
        showGradient: b,
        textOptions: {
          textOverride: y.ZP.isPremium(t) ? _.intl.string(_.t.KXLX7u) : b ? _.intl.string(_.t.pj0XBA) : _.intl.string(_.t.mr4K7O)
        }
      }), j ? (0, n.jsx)(m.Z, {
        product: r,
        onSecondaryClick: s
      }) : (0, n.jsx)(o.zxk, {
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
    guild: r,
    categories: l,
    purchases: c,
    onClose: f,
    initialSelectedProfileEffectId: p,
    currentSavedEffectId: m,
    analyticsLocations: g
  } = e, {
    pendingProfileEffectId: b
  } = (0, h.bd)(r), [j, v] = i.useMemo(() => {
    let e = (0, u.bl)(l, c);
    return [e.purchased, e.shopPreviews]
  }, [l, c]), [P, C] = i.useState(() => null != p ? p : true !== b ? b : null == m ? null : null != m ? m : null), [I, w] = i.useMemo(() => {
    var e;
    let t = j.find(e => (null == e ? true : e.id) === P),
      r = null != t || null === P;
    return [null != (e = null != t ? t : v.find(e => (null == e ? true : e.id) === P)) ? e : null, r]
  }, [P, j, v]), {
    product: Z,
    purchase: N
  } = (0, d.Z)(null == I ? true : I.skuId), D = i.useRef(null), k = y.ZP.canUseCollectibles(t), A = P === (true === b ? null != m ? m : null : b), T = i.useCallback(e => {
    C(e)
  }, [C]), G = i.useCallback(e => {
    f(), (0, a.mK)({
      analyticsLocations: g,
      analyticsSource: s.Z.EDIT_PROFILE_EFFECT_MODAL,
      initialProductSkuId: e
    })
  }, [g, f]);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(o.xBx, {
      "data-migration-pending": true,
      separator: false,
      className: E.modalHeader,
      children: [(0, n.jsx)(o.X6q, {
        variant: "heading-lg/semibold",
        children: _.intl.string(_.t["/6nv6O"])
      }), (0, n.jsx)(o.olH, {
        "data-migration-pending": true,
        className: E.modalCloseButton,
        onClick: f
      })]
    }), (0, n.jsxs)(o.hzk, {
      "data-migration-pending": true,
      className: E.modalContent,
      children: [(0, n.jsx)(O.Z, {
        user: t,
        guild: r,
        pendingProfileEffect: P,
        selectedProfileEffectRef: D,
        onSelect: T,
        onOpenShop: G
      }), (0, n.jsx)(x.Z, {
        user: t,
        canApplySelectedChange: w,
        pendingProfileEffectRecord: I,
        product: Z,
        purchase: N,
        guild: r
      })]
    }), (0, n.jsx)(S, {
      user: t,
      onApply: () => {
        (0, h.s6)(P, m, null == r ? true : r.id), f()
      },
      onClose: f,
      onOpenShop: G,
      product: Z,
      purchase: N,
      canUseCollectibles: k,
      selectedProfileEffectId: P,
      selectedProfileEffectItem: I,
      disableApplyButton: A,
      analyticsLocations: g
    })]
  })
}

function I(e) {
  let {
    transitionState: t,
    analyticsLocations: r,
    initialSelectedEffectId: a,
    guild: u,
    onClose: d
  } = e, {
    isFetching: p,
    categories: m,
    purchases: g
  } = (0, f.Z)(), y = (0, l.e7)([b.default], () => b.default.getCurrentUser()), {
    analyticsLocations: x
  } = (0, c.ZP)(r, s.Z.EDIT_PROFILE_EFFECT_MODAL), O = (0, h.Kg)(y, u);
  return i.useEffect(() => {
    j.default.track(v.rMx.OPEN_MODAL, {
      type: v.jXE.PROFILE_EFFECT_CUSTOMIZATION,
      location_stack: x
    })
  }, [x]), (0, n.jsx)(c.Gt, {
    value: x,
    children: (0, n.jsx)(o.Y0X, {
      transitionState: t,
      className: E.modal,
      size: p ? o.CgR.DYNAMIC : o.CgR.MEDIUM,
      parentComponent: "ProfileEffectModal",
      "data-migration-pending": true,
      children: p ? (0, n.jsx)(o.$jN, {
        className: E.spinner,
        type: o.$jN.Type.SPINNING_CIRCLE
      }) : (0, n.jsx)(C, {
        user: y,
        guild: u,
        categories: m,
        purchases: g,
        initialSelectedProfileEffectId: a,
        currentSavedEffectId: O,
        onClose: d,
        analyticsLocations: x
      })
    })
  })
}