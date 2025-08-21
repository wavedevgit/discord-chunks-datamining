/** Chunk was on 54400 **/
/** chunk id: 183813, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  S: () => L
}), require("./388685.js"), require("./361932.js"), require("./187205.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk14476 = require("./14476.jsx"),
  Chunk314404 = require("./314404.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk987209 = require("./987209.jsx"),
  Chunk563132 = require("./563132.jsx"),
  Chunk409813 = require("./409813.js"),
  Chunk27034 = require("./27034.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk950174 = require("./950174.js");

function L(e) {
  let {
    handleStepChange: t,
    handleClose: n
  } = e, {
    selectedPlan: l,
    selectedSkuId: L,
    step: b
  } = (0, x.JL)(), {
    setSelectedGiftingPromotionReward: g,
    selectedGiftingPromotionReward: y,
    claimableRewards: S,
    claimableVariants: v
  } = (0, u.wD)(), E = (0, s.e7)([c.default], () => c.default.getCurrentUser()), [O, P] = i.useState(null), w = Math.floor(2 * Math.random()), [I, Z] = i.useState(w);
  i.useEffect(() => {
    null != S && S.length > 0 && null == y && g(S[0])
  }, [S, y, g]), a()(null != l, "Expected plan to selected"), a()(null != L, "Expected selectedSkuId"), a()(null != b, "Step should be set");
  let M = i.useMemo(() => null == v ? null != S ? S : [] : v.flatMap(e => {
      var t, n;
      return e.variants.length < 2 ? [] : (t = function(e) {
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
      }({}, e.variants[I]), n = n = {
        name: e.name
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(n)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
      }), t)
    }), [v, S, I]),
    A = e => {
      g(M.find(t => t.skuId === e)), P(e)
    },
    k = M.map(e => (0, r.jsx)(C.c, {
      skuId: e.skuId,
      assetId: e.assetId,
      productName: e.name,
      a11yLabel: e.a11yLabel,
      user: E,
      onSelect: A,
      selectedSkuId: null != O ? O : true
    }, e.skuId)),
    T = (0, r.jsx)(h.O3, {
      children: (0, r.jsx)(o.mzw, {
        className: m.modalFooter,
        children: (0, r.jsx)(d.y, {
          onStepChange: e => {
            null != E && null != y && p.default.track(_.rMx.GIFT_PROMOTION_REWARD_SELECTED, {
              user_id: E.id,
              reward_sku_id: y.skuId
            }), t(e)
          },
          onBackClick: () => t(f.h8.PLAN_SELECT),
          shouldRenderUpdatedPaymentModal: true,
          showBackButton: true,
          planOptions: [l.id],
          selectedPlanId: l.id
        })
      })
    }),
    B = (0, r.jsxs)(o.X6q, {
      variant: "heading-lg/bold",
      color: "header-primary",
      className: m.title,
      children: [j.intl.string(j.t["Rp0+ZG"]), (0, r.jsx)(o.Text, {
        variant: "text-md/normal",
        color: "text-secondary",
        className: m.subtitle,
        children: j.intl.format(j.t.xGzXNT, {
          rewardCount: M.length
        })
      })]
    });
  return (0, r.jsxs)("div", {
    className: m.container,
    children: [(0, r.jsx)(o.xBx, {
      children: (0, r.jsx)(o.olH, {
        onClick: n
      })
    }), (0, r.jsxs)(o.Kqy, {
      direction: "vertical",
      justify: "center",
      align: "center",
      children: [B, null != v && v.length > 1 && (0, r.jsx)(o.sY7, {
        options: [{
          name: "Trick",
          value: 0
        }, {
          name: "Treat",
          value: 1
        }],
        value: I,
        look: "pill",
        onChange: e => {
          let {
            value: t
          } = e;
          Z(t)
        }
      })]
    }), (0, r.jsx)(o.hzk, {
      children: (0, r.jsx)("div", {
        className: m.cardsGrid,
        children: k
      })
    }), T]
  })
}