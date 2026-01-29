/** Chunk was on 92818 **/
/** chunk id: 892873, original params: e,t,r (module,exports,require) **/
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

function _(e) {
  var t;
  let {
    user: r,
    product: l,
    purchase: i,
    onApply: o,
    onClose: c,
    onOpenShop: a,
    disableApplyButton: d,
    canUsePremiumCollectibles: p,
    selectedProfileEffect: g
  } = e, y = null != i ? (0, u.gA)(i) : (0, u.G0)(l);
  return (0, n.jsx)(n.Fragment, {
    children: (0, n.jsxs)(s.jlY, {
      "data-migration-pending": true,
      className: P.Hx,
      children: [null != i && (p || !y) || null === g ? (0, n.jsx)(s.Button, {
        variant: "primary",
        text: v.intl.string(v.t.Jh8fJz),
        onClick: o,
        disabled: d
      }) : null == i && (p || !y) ? (0, n.jsx)(s.Button, {
        variant: "primary",
        text: v.intl.string(v.t.fYfGgK),
        onClick: () => a(null == g ? true : g.skuId)
      }) : (0, n.jsx)(m.A, {
        subscriptionTier: A.pe.TIER_2,
        showGradient: !p,
        textOptions: {
          textOverride: O.Ay.isPremium(r) ? v.intl.string(v.t.KXLX7l) : p ? v.intl.string(v.t.mr4K7D) : v.intl.string(v.t.pj0XBN)
        }
      }), !p && y ? (0, n.jsx)(f.A, {
        itemType: null != (t = null == i ? true : i.type) ? t : null == l ? true : l.type,
        onClose: c
      }) : (0, n.jsx)(s.Button, {
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
    guild: r,
    categories: i,
    purchases: c,
    initialSelectedProfileEffect: p,
    currentSavedEffect: f,
    analyticsLocations: m,
    onClose: y
  } = e, {
    pendingProfileEffect: b
  } = (0, g.nZ)(null == r ? true : r.id), [j, A] = l.useMemo(() => {
    let e = (0, u.sz)(i, c);
    return [e.purchased, e.shopPreviews]
  }, [i, c]), [E, C] = l.useState(() => null != p ? p : true !== b ? b : null == f ? null : null != f ? f : null), w = l.useMemo(() => {
    var e;
    let t = j.find(e => {
      let {
        skuId: t
      } = e;
      return t === (null == E ? true : E.skuId)
    });
    return null != (e = null != t ? t : A.find(e => {
      let {
        skuId: t
      } = e;
      return t === (null == E ? true : E.skuId)
    })) ? e : null
  }, [E, j, A]), {
    product: I,
    purchase: S
  } = (0, d.A)(null == w ? true : w.skuId), T = l.useRef(null), k = O.Ay.canUseCollectibles(t), N = true === b ? (null == E ? true : E.skuId) === (null == f ? true : f.skuId) : (null == E ? true : E.skuId) === (null == b ? true : b.skuId), R = l.useCallback(e => {
    C(e)
  }, [C]), U = l.useCallback(e => {
    y(), (0, a.Cz)({
      analyticsLocations: m,
      analyticsSource: o.A.EDIT_PROFILE_EFFECT_MODAL,
      initialProductSkuId: e
    })
  }, [m, y]);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(s.rQ0, {
      "data-migration-pending": true,
      separator: false,
      className: P.Hc,
      children: [(0, n.jsx)(s.Heading, {
        variant: "heading-lg/semibold",
        children: v.intl.string(v.t["/6nv6N"])
      }), (0, n.jsx)(s.s_y, {
        "data-migration-pending": true,
        className: P.iT,
        onClick: y
      })]
    }), (0, n.jsxs)(s.$mQ, {
      "data-migration-pending": true,
      className: P.jE,
      children: [(0, n.jsx)(x.A, {
        user: t,
        guild: r,
        pendingProfileEffect: E,
        selectedProfileEffectRef: T,
        onSelect: R,
        onOpenShop: U
      }), (0, n.jsx)(h.A, {
        user: t,
        pendingProfileEffectRecord: w,
        product: I,
        purchase: S,
        guild: r
      })]
    }), (0, n.jsx)(_, {
      user: t,
      onApply: () => {
        (0, g.mZ)(E, null == r ? true : r.id), y()
      },
      onClose: y,
      onOpenShop: U,
      product: I,
      purchase: S,
      canUsePremiumCollectibles: k,
      selectedProfileEffect: E,
      disableApplyButton: N
    })]
  })
}

function C(e) {
  let {
    transitionState: t,
    analyticsLocations: r,
    initialSelectedEffect: a,
    guild: u,
    onClose: d
  } = e, {
    isFetching: f,
    categories: m,
    purchases: O
  } = (0, p.Ay)(), h = (0, i.bG)([y.default], () => y.default.getCurrentUser()), {
    analyticsLocations: x
  } = (0, c.Ay)(r, o.A.EDIT_PROFILE_EFFECT_MODAL), A = (0, g.N2)({
    user: h,
    guildId: null == u ? true : u.id
  });
  return l.useEffect(() => {
    b.default.track(j.HAw.OPEN_MODAL, {
      type: j.JJy.PROFILE_EFFECT_CUSTOMIZATION,
      location_stack: x
    })
  }, [x]), (0, n.jsx)(c.f5, {
    value: x,
    children: (0, n.jsx)(s.EOs, {
      transitionState: t,
      className: P.yl,
      size: f ? s.rIJ.DYNAMIC : s.rIJ.MEDIUM,
      parentComponent: "ProfileEffectModal",
      "data-migration-pending": true,
      children: f ? (0, n.jsx)(s.y$y, {
        className: P.u1,
        type: s.y$y.Type.SPINNING_CIRCLE
      }) : (0, n.jsx)(E, {
        user: h,
        guild: u,
        categories: m,
        purchases: O,
        initialSelectedProfileEffect: a,
        currentSavedEffect: A,
        onClose: d,
        analyticsLocations: x
      })
    })
  })
}