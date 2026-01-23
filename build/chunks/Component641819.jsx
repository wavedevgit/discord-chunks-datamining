/** Chunk was on 2824 **/
/** chunk id: 641819, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  j: () => x
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

function x(e) {
  var t, n, i, x, S, T;
  let {
    handleStepChange: I,
    handleClose: A
  } = e, {
    selectedPlan: k,
    selectedSkuId: C,
    step: w
  } = (0, h.P5)(), {
    setSelectedGiftingPromotionReward: _,
    selectedGiftingPromotionReward: M,
    claimableRewards: N,
    claimableVariants: R
  } = (0, b.Pv)(), D = (0, d.A)(), L = (0, a.bG)([y.default], () => y.default.getCurrentUser()), G = (0, p.Ay)(N, R, M), [U, H] = l.useState(null == G || null == (t = G.defaultHighlightedReward) ? true : t.skuId), [B, F] = l.useState(false), W = (0, m.A)({
    claimableVariants: R,
    claimableRewards: N,
    defaultSelection: G,
    selectedGiftingPromotionReward: M,
    setSelectedGiftingPromotionReward: _,
    hasUserMadeSelection: B
  }), K = l.useMemo(() => {
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
    let e = null == G ? true : G.defaultHighlightedReward;
    !B && null == M && null != e && null != e && K.some(t => t.skuId === e.skuId) && (_(e), H(e.skuId))
  }, [G, B, M, K, _]), s()(null != k, "Expected plan to selected"), s()(null != C, "Expected selectedSkuId"), s()(null != w, "Step should be set");
  let V = l.useMemo(() => null != U && (null != N ? N : []).some(e => e.skuId === U), [U, N]),
    z = l.useMemo(() => null != M && K.some(e => e.skuId === M.skuId), [K, M]),
    Y = l.useMemo(() => 0 === K.length || null == U || !z || !V, [K, U, V, z]);
  l.useEffect(() => {
    if (0 === K.length) {
      H(true), _(true);
      return
    }
    V && K.some(e => e.skuId === U) || null == U || (H(true), _(true))
  }, [K, V, U, _]);
  let Z = e => {
      _(K.find(t => t.skuId === e)), H(e), F(true)
    },
    Q = K.map(e => {
      var t, n;
      return (0, r.jsx)(u.k, {
        skuId: e.skuId,
        assetId: e.assetId,
        productName: null == (t = e.name) ? true : t.call(e),
        a11yLabel: null == (n = e.a11yLabel) ? true : n.call(e),
        claimed: null != N && N.every(t => t.skuId !== e.skuId),
        user: L,
        onSelect: Z,
        selectedSkuId: U,
        category: null == W ? true : W.selectedCategory,
        type: e.type,
        palette: e.palette
      }, e.skuId)
    }),
    q = (0, r.jsx)(O.UX, {
      children: (0, r.jsx)(o.jlY, {
        "data-migration-pending": true,
        className: E.Hx,
        children: (0, r.jsx)(f.Z3, {
          onStepChange: e => {
            null != L && null != M && j.default.track(P.HAw.GIFT_PROMOTION_REWARD_SELECTED, {
              user_id: L.id,
              reward_sku_id: M.skuId
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
      className: E.Hc,
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
        className: E.GQ,
        children: null == D || null == (i = D.rewardSelection) ? true : i.primarySubtitle()
      }), (null == D || null == (S = D.rewardSelection) || null == (x = S.secondarySubtitle) ? true : x.call(S)) != null && (0, r.jsx)(o.Text, {
        variant: "text-md/medium",
        color: "text-subtle",
        children: null == D || null == (T = D.rewardSelection) ? true : T.secondarySubtitle()
      }), (0, r.jsx)(o.s_y, {
        "data-migration-pending": true,
        className: E.b,
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
          className: E.Dq,
          children: Q
        })]
      })
    }), q]
  })
}