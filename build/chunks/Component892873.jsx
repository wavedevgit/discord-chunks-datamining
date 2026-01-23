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

function P(e) {
  var t;
  let {
    user: n,
    product: l,
    purchase: i,
    onApply: o,
    onClose: c,
    onOpenShop: a,
    disableApplyButton: d,
    canUsePremiumCollectibles: p,
    selectedProfileEffect: g
  } = e, x = null != i ? (0, u.gA)(i) : (0, u.G0)(l);
  return (0, r.jsx)(r.Fragment, {
    children: (0, r.jsxs)(s.jlY, {
      "data-migration-pending": true,
      className: _.Hx,
      children: [null != i && (p || !x) || null === g ? (0, r.jsx)(s.Button, {
        variant: "primary",
        text: v.intl.string(v.t.Jh8fJz),
        onClick: o,
        disabled: d
      }) : null == i && (p || !x) ? (0, r.jsx)(s.Button, {
        variant: "primary",
        text: v.intl.string(v.t.fYfGgK),
        onClick: () => a(null == g ? true : g.skuId)
      }) : (0, r.jsx)(f.A, {
        subscriptionTier: O.pe.TIER_2,
        showGradient: !p,
        textOptions: {
          textOverride: b.Ay.isPremium(n) ? v.intl.string(v.t.KXLX7l) : p ? v.intl.string(v.t.mr4K7D) : v.intl.string(v.t.pj0XBN)
        }
      }), !p && x ? (0, r.jsx)(m.A, {
        itemType: null != (t = null == i ? true : i.type) ? t : null == l ? true : l.type,
        onClose: c
      }) : (0, r.jsx)(s.Button, {
        variant: "secondary",
        text: v.intl.string(v.t["ETE/oC"]),
        onClick: c
      })]
    })
  })
}

function E(e) {
  let {
    user: t,
    guild: n,
    categories: i,
    purchases: c,
    initialSelectedProfileEffect: p,
    currentSavedEffect: m,
    analyticsLocations: f,
    onClose: x
  } = e, {
    pendingProfileEffect: y
  } = (0, g.nZ)(null == n ? true : n.id), [A, O] = l.useMemo(() => {
    let e = (0, u.sz)(i, c);
    return [e.purchased, e.shopPreviews]
  }, [i, c]), [E, C] = l.useState(() => null != p ? p : true !== y ? y : null == m ? null : null != m ? m : null), I = l.useMemo(() => {
    var e;
    let t = A.find(e => {
      let {
        skuId: t
      } = e;
      return t === (null == E ? true : E.skuId)
    });
    return null != (e = null != t ? t : O.find(e => {
      let {
        skuId: t
      } = e;
      return t === (null == E ? true : E.skuId)
    })) ? e : null
  }, [E, A, O]), {
    product: w,
    purchase: S
  } = (0, d.A)(null == I ? true : I.skuId), k = l.useRef(null), N = b.Ay.canUseCollectibles(t), T = true === y ? (null == E ? true : E.skuId) === (null == m ? true : m.skuId) : (null == E ? true : E.skuId) === (null == y ? true : y.skuId), R = l.useCallback(e => {
    C(e)
  }, [C]), D = l.useCallback(e => {
    x(), (0, a.Cz)({
      analyticsLocations: f,
      analyticsSource: o.A.EDIT_PROFILE_EFFECT_MODAL,
      initialProductSkuId: e
    })
  }, [f, x]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(s.rQ0, {
      "data-migration-pending": true,
      separator: false,
      className: _.Hc,
      children: [(0, r.jsx)(s.Heading, {
        variant: "heading-lg/semibold",
        children: v.intl.string(v.t["/6nv6N"])
      }), (0, r.jsx)(s.s_y, {
        "data-migration-pending": true,
        className: _.iT,
        onClick: x
      })]
    }), (0, r.jsxs)(s.$mQ, {
      "data-migration-pending": true,
      className: _.jE,
      children: [(0, r.jsx)(j.A, {
        user: t,
        guild: n,
        pendingProfileEffect: E,
        selectedProfileEffectRef: k,
        onSelect: R,
        onOpenShop: D
      }), (0, r.jsx)(h.A, {
        user: t,
        pendingProfileEffectRecord: I,
        product: w,
        purchase: S,
        guild: n
      })]
    }), (0, r.jsx)(P, {
      user: t,
      onApply: () => {
        (0, g.mZ)(E, null == n ? true : n.id), x()
      },
      onClose: x,
      onOpenShop: D,
      product: w,
      purchase: S,
      canUsePremiumCollectibles: N,
      selectedProfileEffect: E,
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
    isFetching: m,
    categories: f,
    purchases: b
  } = (0, p.Ay)(), h = (0, i.bG)([x.default], () => x.default.getCurrentUser()), {
    analyticsLocations: j
  } = (0, c.Ay)(n, o.A.EDIT_PROFILE_EFFECT_MODAL), O = (0, g.N2)({
    user: h,
    guildId: null == u ? true : u.id
  });
  return l.useEffect(() => {
    y.default.track(A.HAw.OPEN_MODAL, {
      type: A.JJy.PROFILE_EFFECT_CUSTOMIZATION,
      location_stack: j
    })
  }, [j]), (0, r.jsx)(c.f5, {
    value: j,
    children: (0, r.jsx)(s.EOs, {
      transitionState: t,
      className: _.yl,
      size: m ? s.rIJ.DYNAMIC : s.rIJ.MEDIUM,
      parentComponent: "ProfileEffectModal",
      "data-migration-pending": true,
      children: m ? (0, r.jsx)(s.y$y, {
        className: _.u1,
        type: s.y$y.Type.SPINNING_CIRCLE
      }) : (0, r.jsx)(E, {
        user: h,
        guild: u,
        categories: f,
        purchases: b,
        initialSelectedProfileEffect: a,
        currentSavedEffect: O,
        onClose: d,
        analyticsLocations: j
      })
    })
  })
}