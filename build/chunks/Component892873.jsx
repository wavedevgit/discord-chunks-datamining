/** Chunk was on 92818 **/
/** chunk id: 892873, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => C
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk979286 = require("./979286.js"),
  Chunk993408 = require("./993408.js"),
  Chunk821701 = require("./821701.js"),
  Chunk841702 = require("./841702.js"),
  Chunk571827 = require("./571827.jsx"),
  Chunk465794 = require("./465794.jsx"),
  Chunk919395 = require("./919395.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk927578 = require("./927578.js"),
  Chunk725550 = require("./725550.jsx"),
  Chunk307560 = require("./307560.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk347677 = require("./347677.js");

function E(e) {
  var t;
  let {
    user: n,
    product: l,
    purchase: i,
    onApply: c,
    onClose: o,
    onOpenShop: a,
    disableApplyButton: d,
    canUsePremiumCollectibles: p,
    selectedProfileEffect: b
  } = e, g = null != i ? (0, u.gA)(i) : (0, u.G0)(l);
  return (0, r.jsx)(r.Fragment, {
    children: (0, r.jsxs)(s.jlY, {
      "data-migration-pending": true,
      className: P.Hx,
      children: [null != i && (p || !g) || null === b ? (0, r.jsx)(s.Button, {
        variant: "primary",
        text: v.intl.string(v.t.Jh8fJz),
        onClick: c,
        disabled: d
      }) : null == i && (p || !g) ? (0, r.jsx)(s.Button, {
        variant: "primary",
        text: v.intl.string(v.t.fYfGgK),
        onClick: () => a(null == b ? true : b.skuId)
      }) : (0, r.jsx)(m.A, {
        subscriptionTier: A.pe.TIER_2,
        showGradient: !p,
        textOptions: {
          textOverride: x.Ay.isPremium(n) ? v.intl.string(v.t.KXLX7l) : p ? v.intl.string(v.t.mr4K7D) : v.intl.string(v.t.pj0XBN)
        }
      }), !p && g ? (0, r.jsx)(f.A, {
        itemType: null != (t = null == i ? true : i.type) ? t : null == l ? true : l.type,
        onClose: o
      }) : (0, r.jsx)(s.Button, {
        variant: "secondary",
        text: v.intl.string(v.t["ETE/oC"]),
        onClick: o
      })]
    })
  })
}

function _(e) {
  let {
    user: t,
    guild: n,
    categories: i,
    purchases: o,
    initialSelectedProfileEffect: p,
    currentSavedEffect: f,
    analyticsLocations: m,
    onClose: g
  } = e, {
    pendingProfileEffect: y
  } = (0, b.nZ)(null == n ? true : n.id), [O, A] = l.useMemo(() => {
    let e = (0, u.sz)(i, o);
    return [e.purchased, e.shopPreviews]
  }, [i, o]), [_, C] = l.useState(() => null != p ? p : true !== y ? y : null == f ? null : null != f ? f : null), I = l.useMemo(() => {
    var e;
    let t = O.find(e => {
      let {
        skuId: t
      } = e;
      return t === (null == _ ? true : _.skuId)
    });
    return null != (e = null != t ? t : A.find(e => {
      let {
        skuId: t
      } = e;
      return t === (null == _ ? true : _.skuId)
    })) ? e : null
  }, [_, O, A]), {
    product: S,
    purchase: w
  } = (0, d.A)(null == I ? true : I.skuId), k = l.useRef(null), N = x.Ay.canUseCollectibles(t), T = true === y ? (null == _ ? true : _.skuId) === (null == f ? true : f.skuId) : (null == _ ? true : _.skuId) === (null == y ? true : y.skuId), R = l.useCallback(e => {
    C(e)
  }, [C]), L = l.useCallback(e => {
    g(), (0, a.Cz)({
      analyticsLocations: m,
      analyticsSource: c.A.EDIT_PROFILE_EFFECT_MODAL,
      initialProductSkuId: e
    })
  }, [m, g]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(s.rQ0, {
      "data-migration-pending": true,
      separator: false,
      className: P.Hc,
      children: [(0, r.jsx)(s.Heading, {
        variant: "heading-lg/semibold",
        children: v.intl.string(v.t["/6nv6N"])
      }), (0, r.jsx)(s.s_y, {
        "data-migration-pending": true,
        className: P.iT,
        onClick: g
      })]
    }), (0, r.jsxs)(s.$mQ, {
      "data-migration-pending": true,
      className: P.jE,
      children: [(0, r.jsx)(j.A, {
        user: t,
        guild: n,
        pendingProfileEffect: _,
        selectedProfileEffectRef: k,
        onSelect: R,
        onOpenShop: L
      }), (0, r.jsx)(h.A, {
        user: t,
        pendingProfileEffectRecord: I,
        product: S,
        purchase: w,
        guild: n
      })]
    }), (0, r.jsx)(E, {
      user: t,
      onApply: () => {
        (0, b.mZ)(_, null == n ? true : n.id), g()
      },
      onClose: g,
      onOpenShop: L,
      product: S,
      purchase: w,
      canUsePremiumCollectibles: N,
      selectedProfileEffect: _,
      disableApplyButton: T
    })]
  })
}

function C(e) {
  let {
    transitionState: t,
    analyticsLocations: n,
    initialSelectedEffect: a,
    guild: u,
    onClose: d
  } = e, {
    isFetching: f,
    categories: m,
    purchases: x
  } = (0, p.Ay)(), h = (0, i.bG)([g.default], () => g.default.getCurrentUser()), {
    analyticsLocations: j
  } = (0, o.Ay)(n, c.A.EDIT_PROFILE_EFFECT_MODAL), A = (0, b.N2)({
    user: h,
    guildId: null == u ? true : u.id
  });
  return l.useEffect(() => {
    y.default.track(O.HAw.OPEN_MODAL, {
      type: O.JJy.PROFILE_EFFECT_CUSTOMIZATION,
      location_stack: j
    })
  }, [j]), (0, r.jsx)(o.f5, {
    value: j,
    children: (0, r.jsx)(s.EOs, {
      transitionState: t,
      className: P.yl,
      size: f ? s.rIJ.DYNAMIC : s.rIJ.MEDIUM,
      parentComponent: "ProfileEffectModal",
      "data-migration-pending": true,
      children: f ? (0, r.jsx)(s.y$y, {
        className: P.u1,
        type: s.y$y.Type.SPINNING_CIRCLE
      }) : (0, r.jsx)(_, {
        user: h,
        guild: u,
        categories: m,
        purchases: x,
        initialSelectedProfileEffect: a,
        currentSavedEffect: A,
        onClose: d,
        analyticsLocations: j
      })
    })
  })
}