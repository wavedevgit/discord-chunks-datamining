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

function C(e) {
  let {
    user: t,
    product: n,
    purchase: i,
    onApply: l,
    onClose: o,
    onOpenShop: c,
    disableApplyButton: a,
    canUseCollectibles: d,
    selectedProfileEffectId: f,
    selectedProfileEffectItem: h
  } = e, x = (0, p.M)(), b = x && (0, u.G1)(n);
  return (0, r.jsx)(r.Fragment, {
    children: (0, r.jsxs)(s.mzw, {
      "data-migration-pending": true,
      className: E.modalFooter,
      children: [null != i && (!(0, u.qS)(i) || d) || null === f ? (0, r.jsx)(s.zxk, {
        variant: "primary",
        text: _.intl.string(_.t.Jh8fJy),
        onClick: l,
        disabled: a
      }) : d || !(0, u.G1)(n) ? (0, r.jsx)(s.zxk, {
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
        onSecondaryClick: o
      }) : (0, r.jsx)(s.zxk, {
        variant: "secondary",
        text: _.intl.string(_.t["ETE/oK"]),
        onClick: o
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
    onClose: f,
    initialSelectedProfileEffectId: p,
    currentSavedEffectId: m,
    analyticsLocations: g
  } = e, {
    pendingProfileEffectId: x
  } = (0, h.bd)(n), [b, y] = i.useMemo(() => {
    let e = (0, u.bl)(l, c);
    return [e.purchased, e.shopPreviews]
  }, [l, c]), [O, I] = i.useState(() => null != p ? p : true !== x ? x : null == m ? null : null != m ? m : null), [S, Z] = i.useMemo(() => {
    var e;
    let t = b.find(e => (null == e ? true : e.id) === O),
      n = null != t || null === O;
    return [null != (e = null != t ? t : y.find(e => (null == e ? true : e.id) === O)) ? e : null, n]
  }, [O, b, y]), {
    product: w,
    purchase: N
  } = (0, d.Z)(null == S ? true : S.skuId), D = i.useRef(null), k = j.ZP.canUseCollectibles(t), A = O === (true === x ? null != m ? m : null : x), G = i.useCallback(e => {
    I(e)
  }, [I]), T = i.useCallback(e => {
    f(), (0, a.mK)({
      analyticsLocations: g,
      analyticsSource: o.Z.EDIT_PROFILE_EFFECT_MODAL,
      initialProductSkuId: e
    })
  }, [g, f]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(s.xBx, {
      "data-migration-pending": true,
      separator: false,
      className: E.modalHeader,
      children: [(0, r.jsx)(s.X6q, {
        variant: "heading-lg/semibold",
        children: _.intl.string(_.t["/6nv6O"])
      }), (0, r.jsx)(s.olH, {
        "data-migration-pending": true,
        className: E.modalCloseButton,
        onClick: f
      })]
    }), (0, r.jsxs)(s.hzk, {
      "data-migration-pending": true,
      className: E.modalContent,
      children: [(0, r.jsx)(P.Z, {
        user: t,
        guild: n,
        pendingProfileEffect: O,
        selectedProfileEffectRef: D,
        onSelect: G,
        onOpenShop: T
      }), (0, r.jsx)(v.Z, {
        user: t,
        canApplySelectedChange: Z,
        pendingProfileEffectRecord: S,
        product: w,
        purchase: N,
        guild: n
      })]
    }), (0, r.jsx)(C, {
      user: t,
      onApply: () => {
        (0, h.s6)(O, m, null == n ? true : n.id), f()
      },
      onClose: f,
      onOpenShop: T,
      product: w,
      purchase: N,
      canUseCollectibles: k,
      selectedProfileEffectId: O,
      selectedProfileEffectItem: S,
      disableApplyButton: A,
      analyticsLocations: g
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
    purchases: g
  } = (0, f.Z)(), j = (0, l.e7)([x.default], () => x.default.getCurrentUser()), {
    analyticsLocations: v
  } = (0, c.ZP)(n, o.Z.EDIT_PROFILE_EFFECT_MODAL), P = (0, h.Kg)(j, u);
  return i.useEffect(() => {
    b.default.track(y.rMx.OPEN_MODAL, {
      type: y.jXE.PROFILE_EFFECT_CUSTOMIZATION,
      location_stack: v
    })
  }, [v]), (0, r.jsx)(c.Gt, {
    value: v,
    children: (0, r.jsx)(s.Y0X, {
      transitionState: t,
      className: E.modal,
      size: p ? s.CgR.DYNAMIC : s.CgR.MEDIUM,
      parentComponent: "ProfileEffectModal",
      "data-migration-pending": true,
      children: p ? (0, r.jsx)(s.$jN, {
        className: E.spinner,
        type: s.$jN.Type.SPINNING_CIRCLE
      }) : (0, r.jsx)(I, {
        user: j,
        guild: u,
        categories: m,
        purchases: g,
        initialSelectedProfileEffectId: a,
        currentSavedEffectId: P,
        onClose: d,
        analyticsLocations: v
      })
    })
  })
}