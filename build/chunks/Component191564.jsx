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
  var t;
  let {
    user: n,
    product: i,
    purchase: l,
    onApply: s,
    onClose: c,
    onOpenShop: a,
    disableApplyButton: d,
    canUsePremiumCollectibles: f,
    selectedProfileEffect: g
  } = e, b = null != l ? (0, u.qS)(l) : (0, u.G1)(i);
  return (0, r.jsx)(r.Fragment, {
    children: (0, r.jsxs)(o.mzw, {
      "data-migration-pending": true,
      className: E.modalFooter,
      children: [null != l && (f || !b) || null === g ? (0, r.jsx)(o.Button, {
        variant: "primary",
        text: O.intl.string(O.t.Jh8fJz),
        onClick: s,
        disabled: d
      }) : null == l && (f || !b) ? (0, r.jsx)(o.Button, {
        variant: "primary",
        text: O.intl.string(O.t.fYfGgK),
        onClick: () => a(null == g ? true : g.skuId)
      }) : (0, r.jsx)(m.Z, {
        subscriptionTier: P.Si.TIER_2,
        showGradient: !f,
        textOptions: {
          textOverride: h.ZP.isPremium(n) ? O.intl.string(O.t.KXLX7l) : f ? O.intl.string(O.t.mr4K7D) : O.intl.string(O.t.pj0XBN)
        }
      }), !f && b ? (0, r.jsx)(p.Z, {
        itemType: null != (t = null == l ? true : l.type) ? t : null == i ? true : i.type,
        onClose: c
      }) : (0, r.jsx)(o.Button, {
        variant: "secondary",
        text: O.intl.string(O.t["ETE/oC"]),
        onClick: c
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
    pendingProfileEffect: x
  } = (0, g.xZ)(null == n ? true : n.id), [v, P] = i.useMemo(() => {
    let e = (0, u.bl)(l, c);
    return [e.purchased, e.shopPreviews]
  }, [l, c]), [I, S] = i.useState(() => null != f ? f : true !== x ? x : null == p ? null : null != p ? p : null), _ = i.useMemo(() => {
    var e;
    let t = v.find(e => {
      let {
        skuId: t
      } = e;
      return t === (null == I ? true : I.skuId)
    });
    return null != (e = null != t ? t : P.find(e => {
      let {
        skuId: t
      } = e;
      return t === (null == I ? true : I.skuId)
    })) ? e : null
  }, [I, v, P]), {
    product: w,
    purchase: Z
  } = (0, d.Z)(null == _ ? true : _.skuId), k = i.useRef(null), A = h.ZP.canUseCollectibles(t), N = true === x ? (null == I ? true : I.skuId) === (null == p ? true : p.skuId) : (null == I ? true : I.skuId) === (null == x ? true : x.skuId), T = i.useCallback(e => {
    S(e)
  }, [S]), D = i.useCallback(e => {
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
        children: O.intl.string(O.t["/6nv6N"])
      }), (0, r.jsx)(o.olH, {
        "data-migration-pending": true,
        className: E.modalCloseButton,
        onClick: b
      })]
    }), (0, r.jsxs)(o.hzk, {
      "data-migration-pending": true,
      className: E.modalContent,
      children: [(0, r.jsx)(y.Z, {
        user: t,
        guild: n,
        pendingProfileEffect: I,
        selectedProfileEffectRef: k,
        onSelect: T,
        onOpenShop: D
      }), (0, r.jsx)(j.Z, {
        user: t,
        pendingProfileEffectRecord: _,
        product: w,
        purchase: Z,
        guild: n
      })]
    }), (0, r.jsx)(C, {
      user: t,
      onApply: () => {
        (0, g.UK)(I, null == n ? true : n.id), b()
      },
      onClose: b,
      onOpenShop: D,
      product: w,
      purchase: Z,
      canUsePremiumCollectibles: A,
      selectedProfileEffect: I,
      disableApplyButton: N
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
    purchases: h
  } = (0, f.ZP)(), j = (0, l.e7)([b.default], () => b.default.getCurrentUser()), {
    analyticsLocations: y
  } = (0, c.ZP)(n, s.Z.EDIT_PROFILE_EFFECT_MODAL), P = (0, g.nh)({
    user: j,
    guildId: null == u ? true : u.id
  });
  return i.useEffect(() => {
    x.default.track(v.rMx.OPEN_MODAL, {
      type: v.jXE.PROFILE_EFFECT_CUSTOMIZATION,
      location_stack: y
    })
  }, [y]), (0, r.jsx)(c.Gt, {
    value: y,
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
        purchases: h,
        initialSelectedProfileEffect: a,
        currentSavedEffect: P,
        onClose: d,
        analyticsLocations: y
      })
    })
  })
}