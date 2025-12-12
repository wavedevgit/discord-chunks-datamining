/** Chunk was on 55183 **/
/** chunk id: 191564, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => S
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
  Chunk930796 = require("./930796.js");

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
    selectedProfileEffect: f
  } = e, g = (0, u.G1)(n);
  return (0, r.jsx)(r.Fragment, {
    children: (0, r.jsxs)(o.mzw, {
      "data-migration-pending": true,
      className: E.modalFooter,
      children: [null != i && (d || !g) || null === f ? (0, r.jsx)(o.Button, {
        variant: "primary",
        text: v.intl.string(v.t.Jh8fJz),
        onClick: l,
        disabled: a
      }) : null == i && (d || !g) ? (0, r.jsx)(o.Button, {
        variant: "primary",
        text: v.intl.string(v.t.fYfGgK),
        onClick: () => c(null == f ? true : f.skuId)
      }) : (0, r.jsx)(m.Z, {
        subscriptionTier: O.Si.TIER_2,
        showGradient: !d,
        textOptions: {
          textOverride: x.ZP.isPremium(t) ? v.intl.string(v.t.KXLX7l) : d ? v.intl.string(v.t.mr4K7D) : v.intl.string(v.t.pj0XBN)
        }
      }), !d && g ? (0, r.jsx)(p.Z, {
        product: n,
        onClose: s
      }) : (0, r.jsx)(o.Button, {
        variant: "secondary",
        text: v.intl.string(v.t["ETE/oC"]),
        onClick: s
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
    onClose: b
  } = e, {
    pendingProfileEffect: h
  } = (0, g.xZ)(null == n ? true : n.id), [y, O] = i.useMemo(() => {
    let e = (0, u.bl)(l, c);
    return [e.purchased, e.shopPreviews]
  }, [l, c]), [I, S] = i.useState(() => null != f ? f : true !== h ? h : null == p ? null : null != p ? p : null), [w, _] = i.useMemo(() => {
    var e;
    let t = y.find(e => {
        let {
          skuId: t
        } = e;
        return t === (null == I ? true : I.skuId)
      }),
      n = null != t || null === I;
    return [null != (e = null != t ? t : O.find(e => {
      let {
        skuId: t
      } = e;
      return t === (null == I ? true : I.skuId)
    })) ? e : null, n]
  }, [I, y, O]), {
    product: A,
    purchase: N
  } = (0, d.Z)(null == w ? true : w.skuId), k = i.useRef(null), Z = x.ZP.canUseCollectibles(t), D = true === h ? (null == I ? true : I.skuId) === (null == p ? true : p.skuId) : (null == I ? true : I.skuId) === (null == h ? true : h.skuId), T = i.useCallback(e => {
    S(e)
  }, [S]), U = i.useCallback(e => {
    b(), (0, a.mK)({
      analyticsLocations: m,
      analyticsSource: s.Z.EDIT_PROFILE_EFFECT_MODAL,
      initialProductSkuId: e
    })
  }, [m, b]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(o.xBx, {
      "data-migration-pending": true,
      separator: false,
      className: E.modalHeader,
      children: [(0, r.jsx)(o.Heading, {
        variant: "heading-lg/semibold",
        children: v.intl.string(v.t["/6nv6N"])
      }), (0, r.jsx)(o.olH, {
        "data-migration-pending": true,
        className: E.modalCloseButton,
        onClick: b
      })]
    }), (0, r.jsxs)(o.hzk, {
      "data-migration-pending": true,
      className: E.modalContent,
      children: [(0, r.jsx)(P.Z, {
        user: t,
        guild: n,
        pendingProfileEffect: I,
        selectedProfileEffectRef: k,
        onSelect: T,
        onOpenShop: U
      }), (0, r.jsx)(j.Z, {
        user: t,
        canApplySelectedChange: _,
        pendingProfileEffectRecord: w,
        product: A,
        purchase: N,
        guild: n
      })]
    }), (0, r.jsx)(C, {
      user: t,
      onApply: () => {
        (0, g.UK)(I, null == n ? true : n.id), b()
      },
      onClose: b,
      onOpenShop: U,
      product: A,
      purchase: N,
      canUsePremiumCollectibles: Z,
      selectedProfileEffect: I,
      disableApplyButton: D
    })]
  })
}

function S(e) {
  let {
    transitionState: t,
    analyticsLocations: n,
    initialSelectedEffect: a,
    guild: u,
    onClose: d
  } = e, {
    isFetching: p,
    categories: m,
    purchases: x
  } = (0, f.ZP)(), j = (0, l.e7)([b.default], () => b.default.getCurrentUser()), {
    analyticsLocations: P
  } = (0, c.ZP)(n, s.Z.EDIT_PROFILE_EFFECT_MODAL), O = (0, g.nh)({
    user: j,
    guildId: null == u ? true : u.id
  });
  return i.useEffect(() => {
    h.default.track(y.rMx.OPEN_MODAL, {
      type: y.jXE.PROFILE_EFFECT_CUSTOMIZATION,
      location_stack: P
    })
  }, [P]), (0, r.jsx)(c.Gt, {
    value: P,
    children: (0, r.jsx)(o.Y0X, {
      transitionState: t,
      className: E.modal,
      size: p ? o.CgR.DYNAMIC : o.CgR.MEDIUM,
      parentComponent: "ProfileEffectModal",
      "data-migration-pending": true,
      children: p ? (0, r.jsx)(o.$jN, {
        className: E.spinner,
        type: o.$jN.Type.SPINNING_CIRCLE
      }) : (0, r.jsx)(I, {
        user: j,
        guild: u,
        categories: m,
        purchases: x,
        initialSelectedProfileEffect: a,
        currentSavedEffect: O,
        onClose: d,
        analyticsLocations: P
      })
    })
  })
}