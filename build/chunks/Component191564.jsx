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
    selectedProfileEffectId: f,
    selectedProfileEffectItem: h
  } = e, x = (0, p.M)(), b = x && (0, u.G1)(n);
  return (0, r.jsx)(r.Fragment, {
    children: (0, r.jsxs)(o.mzw, {
      "data-migration-pending": true,
      className: C.modalFooter,
      children: [null != i && (!(0, u.qS)(i) || d) || null === f ? (0, r.jsx)(o.zxk, {
        variant: "primary",
        text: _.intl.string(_.t.Jh8fJy),
        onClick: l,
        disabled: a
      }) : d || !(0, u.G1)(n) ? (0, r.jsx)(o.zxk, {
        variant: "primary",
        text: _.intl.string(_.t.fYfGgI),
        onClick: () => c(null == h ? true : h.skuId)
      }) : (0, r.jsx)(g.Z, {
        subscriptionTier: O.Si.TIER_2,
        showGradient: x,
        textOptions: {
          textOverride: j.ZP.isPremium(t) ? _.intl.string(_.t.KXLX7u) : x ? _.intl.string(_.t.pj0XBA) : _.intl.string(_.t.mr4K7O)
        }
      }), b ? (0, r.jsx)(m.Z, {
        product: n,
        onSecondaryClick: s
      }) : (0, r.jsx)(o.zxk, {
        variant: "secondary",
        text: _.intl.string(_.t["ETE/oK"]),
        onClick: s
      })]
    })
  })
}

function w(e) {
  let {
    user: t,
    guild: n,
    categories: l,
    purchases: c,
    onClose: f,
    initialSelectedProfileEffectId: p,
    currentSavedEffectId: m,
    analyticsLocations: g
  } = e, {
    pendingProfileEffectId: x
  } = (0, h.bd)(n), [b, P] = i.useMemo(() => {
    let e = (0, u.bl)(l, c);
    return [e.purchased, e.shopPreviews]
  }, [l, c]), [O, w] = i.useState(() => null != p ? p : true !== x ? x : null == m ? null : null != m ? m : null), [I, S] = i.useMemo(() => {
    var e;
    let t = b.find(e => (null == e ? true : e.id) === O),
      n = null != t || null === O;
    return [null != (e = null != t ? t : P.find(e => (null == e ? true : e.id) === O)) ? e : null, n]
  }, [O, b, P]), {
    product: Z,
    purchase: N
  } = (0, d.Z)(null == I ? true : I.skuId), A = i.useRef(null), k = j.ZP.canUseCollectibles(t), D = O === (true === x ? null != m ? m : null : x), T = i.useCallback(e => {
    w(e)
  }, [w]), B = i.useCallback(e => {
    f(), (0, a.mK)({
      analyticsLocations: g,
      analyticsSource: s.Z.EDIT_PROFILE_EFFECT_MODAL,
      initialProductSkuId: e
    })
  }, [g, f]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(o.xBx, {
      "data-migration-pending": true,
      separator: false,
      className: C.modalHeader,
      children: [(0, r.jsx)(o.X6q, {
        variant: "heading-lg/semibold",
        children: _.intl.string(_.t["/6nv6O"])
      }), (0, r.jsx)(o.olH, {
        "data-migration-pending": true,
        className: C.modalCloseButton,
        onClick: f
      })]
    }), (0, r.jsxs)(o.hzk, {
      "data-migration-pending": true,
      className: C.modalContent,
      children: [(0, r.jsx)(v.Z, {
        user: t,
        guild: n,
        pendingProfileEffect: O,
        selectedProfileEffectRef: A,
        onSelect: T,
        onOpenShop: B
      }), (0, r.jsx)(y.Z, {
        user: t,
        canApplySelectedChange: S,
        pendingProfileEffectRecord: I,
        product: Z,
        purchase: N,
        guild: n
      })]
    }), (0, r.jsx)(E, {
      user: t,
      onApply: () => {
        (0, h.s6)(O, m, null == n ? true : n.id), f()
      },
      onClose: f,
      onOpenShop: B,
      product: Z,
      purchase: N,
      canUseCollectibles: k,
      selectedProfileEffectId: O,
      selectedProfileEffectItem: I,
      disableApplyButton: D,
      analyticsLocations: g
    })]
  })
}

function I(e) {
  let {
    transitionState: t,
    analyticsLocations: n,
    initialSelectedEffectId: a,
    guild: u,
    onClose: d
  } = e, {
    isFetching: p,
    categories: m,
    purchases: g
  } = (0, f.Z)(), j = (0, l.e7)([x.default], () => x.default.getCurrentUser()), {
    analyticsLocations: y
  } = (0, c.ZP)(n, s.Z.EDIT_PROFILE_EFFECT_MODAL), v = (0, h.Kg)(j, u);
  return i.useEffect(() => {
    b.default.track(P.rMx.OPEN_MODAL, {
      type: P.jXE.PROFILE_EFFECT_CUSTOMIZATION,
      location_stack: y
    })
  }, [y]), (0, r.jsx)(c.Gt, {
    value: y,
    children: (0, r.jsx)(o.Y0X, {
      transitionState: t,
      className: C.modal,
      size: p ? o.CgR.DYNAMIC : o.CgR.MEDIUM,
      parentComponent: "ProfileEffectModal",
      "data-migration-pending": true,
      children: p ? (0, r.jsx)(o.$jN, {
        className: C.spinner,
        type: o.$jN.Type.SPINNING_CIRCLE
      }) : (0, r.jsx)(w, {
        user: j,
        guild: u,
        categories: m,
        purchases: g,
        initialSelectedProfileEffectId: a,
        currentSavedEffectId: v,
        onClose: d,
        analyticsLocations: y
      })
    })
  })
}