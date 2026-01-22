/** Chunk was on 2824 **/
/** chunk id: 641819, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  j: () => S
}), require("./896048.js"), require("./114821.js"), require("./339614.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  s = require.n(Chunk284009),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk447784 = require("./447784.jsx"),
  Chunk235986 = require("./235986.jsx"),
  Chunk552736 = require("./552736.js"),
  Chunk68545 = require("./68545.js"),
  Chunk327101 = require("./327101.js"),
  Chunk763327 = require("./763327.jsx"),
  Chunk446929 = require("./446929.jsx"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk937008 = require("./937008.jsx"),
  Chunk156312 = require("./156312.jsx"),
  Chunk166532 = require("./166532.js"),
  Chunk482132 = require("./482132.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk907 = require("./907.js");

function S(e) {
  var t, n, i, S, E, T;
  let {
    handleStepChange: I,
    handleClose: A
  } = e, {
    selectedPlan: k,
    selectedSkuId: w,
    step: _
  } = (0, v.P5)(), {
    setSelectedGiftingPromotionReward: C,
    selectedGiftingPromotionReward: M,
    claimableRewards: N,
    claimableVariants: R
  } = (0, h.Pv)(), D = (0, d.A)(), L = (0, a.bG)([j.default], () => j.default.getCurrentUser()), U = (0, p.Ay)(N, R, M), [G, H] = r.useState(null == U || null == (t = U.defaultHighlightedReward) ? true : t.skuId), [B, F] = r.useState(false), W = (0, m.A)({
    claimableVariants: R,
    claimableRewards: N,
    defaultSelection: U,
    selectedGiftingPromotionReward: M,
    setSelectedGiftingPromotionReward: C,
    hasUserMadeSelection: B
  }), z = r.useMemo(() => {
    var e, t;
    if (null == R || 0 === R.length) return null != (t = null == D ? true : D.rewards) ? t : [];
    let n = null != (e = null == W ? true : W.selectedCategory) ? e : p.Sm.Trick;
    return R.flatMap(e => {
      var t, l;
      return e.variants.length < p.PN ? [] : (t = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), l.forEach(function(t) {
            var l;
            l = n[t], t in e ? Object.defineProperty(e, t, {
              value: l,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = l
          })
        }
        return e
      }({}, e.variants[n]), l = l = {
        name: e.name
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          n.push.apply(n, l)
        }
        return n
      })(Object(l)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(l, e))
      }), t)
    })
  }, [R, null == D ? true : D.rewards, null == W ? true : W.selectedCategory]);
  r.useEffect(() => {
    let e = null == U ? true : U.defaultHighlightedReward;
    !B && null == M && null != e && null != e && z.some(t => t.skuId === e.skuId) && (C(e), H(e.skuId))
  }, [U, B, M, z, C]), s()(null != k, "Expected plan to selected"), s()(null != w, "Expected selectedSkuId"), s()(null != _, "Step should be set");
  let V = r.useMemo(() => null != G && (null != N ? N : []).some(e => e.skuId === G), [G, N]),
    K = r.useMemo(() => null != M && z.some(e => e.skuId === M.skuId), [z, M]),
    Y = r.useMemo(() => 0 === z.length || null == G || !K || !V, [z, G, V, K]);
  r.useEffect(() => {
    if (0 === z.length) {
      H(true), C(true);
      return
    }
    V && z.some(e => e.skuId === G) || null == G || (H(true), C(true))
  }, [z, V, G, C]);
  let Z = e => {
      C(z.find(t => t.skuId === e)), H(e), F(true)
    },
    Q = z.map(e => {
      var t, n;
      return (0, l.jsx)(u.k, {
        skuId: e.skuId,
        assetId: e.assetId,
        productName: null == (t = e.name) ? true : t.call(e),
        a11yLabel: null == (n = e.a11yLabel) ? true : n.call(e),
        claimed: null != N && N.every(t => t.skuId !== e.skuId),
        user: L,
        onSelect: Z,
        selectedSkuId: G,
        category: null == W ? true : W.selectedCategory,
        type: e.type,
        palette: e.palette
      }, e.skuId)
    }),
    q = (0, l.jsx)(O.UX, {
      children: (0, l.jsx)(o.jlY, {
        "data-migration-pending": true,
        className: P.Hx,
        children: (0, l.jsx)(g.Z, {
          onStepChange: e => {
            null != L && null != M && y.default.track(x.HAw.GIFT_PROMOTION_REWARD_SELECTED, {
              user_id: L.id,
              reward_sku_id: M.skuId
            }), I(e)
          },
          onBackClick: () => I(b.pn.PLAN_SELECT),
          shouldRenderUpdatedPaymentModal: true,
          showBackButton: true,
          planOptions: [k.id],
          selectedPlanId: k.id,
          isNextDisabled: Y
        })
      })
    });
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)(o.rQ0, {
      "data-migration-pending": true,
      className: P.Hc,
      direction: c.A.Direction.VERTICAL,
      align: c.A.Align.START,
      separator: false,
      children: [(0, l.jsx)(o.Heading, {
        variant: "heading-lg/semibold",
        color: "text-strong",
        children: null == D || null == (n = D.rewardSelection) ? true : n.heading()
      }), (0, l.jsx)(o.Text, {
        variant: "text-md/medium",
        color: "text-subtle",
        className: P.GQ,
        children: null == D || null == (i = D.rewardSelection) ? true : i.primarySubtitle()
      }), (null == D || null == (E = D.rewardSelection) || null == (S = E.secondarySubtitle) ? true : S.call(E)) != null && (0, l.jsx)(o.Text, {
        variant: "text-md/medium",
        color: "text-subtle",
        children: null == D || null == (T = D.rewardSelection) ? true : T.secondarySubtitle()
      }), (0, l.jsx)(o.s_y, {
        "data-migration-pending": true,
        className: P.b,
        onClick: A
      })]
    }), (0, l.jsx)(o.$mQ, {
      "data-migration-pending": true,
      children: (0, l.jsxs)(o.BJc, {
        direction: "vertical",
        justify: "center",
        align: "center",
        children: [(null == W ? true : W.shouldRenderCategoryControl) && (0, l.jsx)(f.A, {
          defaultCategory: W.selectedCategory,
          onCategoryChange: W.setSelectedCategory
        }), (0, l.jsx)("div", {
          className: P.Dq,
          children: Q
        })]
      })
    }), q]
  })
}