/** Chunk was on 2824 **/
/** chunk id: 641819, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  j: () => E
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

function E(e) {
  var t, n, i, E, S, T;
  let {
    handleStepChange: I,
    handleClose: A
  } = e, {
    selectedPlan: k,
    selectedSkuId: w,
    step: C
  } = (0, h.P5)(), {
    setSelectedGiftingPromotionReward: M,
    selectedGiftingPromotionReward: _,
    claimableRewards: N,
    claimableVariants: R
  } = (0, b.Pv)(), D = (0, d.A)(), L = (0, a.bG)([y.default], () => y.default.getCurrentUser()), U = (0, p.Ay)(N, R, _), [G, H] = l.useState(null == U || null == (t = U.defaultHighlightedReward) ? true : t.skuId), [B, F] = l.useState(false), W = (0, m.A)({
    claimableVariants: R,
    claimableRewards: N,
    defaultSelection: U,
    selectedGiftingPromotionReward: _,
    setSelectedGiftingPromotionReward: M,
    hasUserMadeSelection: B
  }), V = l.useMemo(() => {
    var e, t;
    if (null == R || 0 === R.length) return null != (t = null == D ? true : D.rewards) ? t : [];
    let n = null != (e = null == W ? true : W.selectedCategory) ? e : p.Sm.Trick;
    return R.flatMap(e => {
      var t, r;
      return e.variants.length < p.PN ? [] : (t = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = r
          })
        }
        return e
      }({}, e.variants[n]), r = r = {
        name: e.name
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(r)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
      }), t)
    })
  }, [R, null == D ? true : D.rewards, null == W ? true : W.selectedCategory]);
  l.useEffect(() => {
    let e = null == U ? true : U.defaultHighlightedReward;
    !B && null == _ && null != e && null != e && V.some(t => t.skuId === e.skuId) && (M(e), H(e.skuId))
  }, [U, B, _, V, M]), s()(null != k, "Expected plan to selected"), s()(null != w, "Expected selectedSkuId"), s()(null != C, "Step should be set");
  let K = l.useMemo(() => null != G && (null != N ? N : []).some(e => e.skuId === G), [G, N]),
    z = l.useMemo(() => null != _ && V.some(e => e.skuId === _.skuId), [V, _]),
    Y = l.useMemo(() => 0 === V.length || null == G || !z || !K, [V, G, K, z]);
  l.useEffect(() => {
    if (0 === V.length) {
      H(true), M(true);
      return
    }
    K && V.some(e => e.skuId === G) || null == G || (H(true), M(true))
  }, [V, K, G, M]);
  let Z = e => {
      M(V.find(t => t.skuId === e)), H(e), F(true)
    },
    Q = V.map(e => {
      var t, n;
      return (0, r.jsx)(u.k, {
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
    q = (0, r.jsx)(O.UX, {
      children: (0, r.jsx)(o.jlY, {
        "data-migration-pending": true,
        className: x.Hx,
        children: (0, r.jsx)(f.Z3, {
          onStepChange: e => {
            null != L && null != _ && j.default.track(P.HAw.GIFT_PROMOTION_REWARD_SELECTED, {
              user_id: L.id,
              reward_sku_id: _.skuId
            }), I(e)
          },
          onBackClick: () => I(v.pn.PLAN_SELECT),
          shouldRenderUpdatedPaymentModal: true,
          showBackButton: true,
          planOptions: [k.id],
          selectedPlanId: k.id,
          isNextDisabled: Y
        })
      })
    });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(o.rQ0, {
      "data-migration-pending": true,
      className: x.Hc,
      direction: c.A.Direction.VERTICAL,
      align: c.A.Align.START,
      separator: false,
      children: [(0, r.jsx)(o.Heading, {
        variant: "heading-lg/semibold",
        color: "text-strong",
        children: null == D || null == (n = D.rewardSelection) ? true : n.heading()
      }), (0, r.jsx)(o.Text, {
        variant: "text-md/medium",
        color: "text-subtle",
        className: x.GQ,
        children: null == D || null == (i = D.rewardSelection) ? true : i.primarySubtitle()
      }), (null == D || null == (S = D.rewardSelection) || null == (E = S.secondarySubtitle) ? true : E.call(S)) != null && (0, r.jsx)(o.Text, {
        variant: "text-md/medium",
        color: "text-subtle",
        children: null == D || null == (T = D.rewardSelection) ? true : T.secondarySubtitle()
      }), (0, r.jsx)(o.s_y, {
        "data-migration-pending": true,
        className: x.b,
        onClick: A
      })]
    }), (0, r.jsx)(o.$mQ, {
      "data-migration-pending": true,
      children: (0, r.jsxs)(o.BJc, {
        direction: "vertical",
        justify: "center",
        align: "center",
        children: [(null == W ? true : W.shouldRenderCategoryControl) && (0, r.jsx)(g.A, {
          defaultCategory: W.selectedCategory,
          onCategoryChange: W.setSelectedCategory
        }), (0, r.jsx)("div", {
          className: x.Dq,
          children: Q
        })]
      })
    }), q]
  })
}