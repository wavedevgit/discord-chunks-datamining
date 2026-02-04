/** Chunk was on 2824 **/
/** chunk id: 641819, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  j: () => S
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  s = require.n(Chunk284009),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk447784 = require("./447784.jsx"),
  Chunk235986 = require("./235986.jsx"),
  Chunk68545 = require("./68545.js"),
  Chunk412260 = require("./412260.js"),
  Chunk91053 = require("./91053.jsx"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk937008 = require("./937008.jsx"),
  Chunk156312 = require("./156312.jsx"),
  Chunk166532 = require("./166532.js"),
  Chunk482132 = require("./482132.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk907 = require("./907.js");

function S(e) {
  let {
    handleStepChange: n,
    handleClose: t
  } = e, {
    selectedPlan: i,
    selectedSkuId: S,
    step: b
  } = (0, P.P5)(), {
    setSelectedGiftingPromotionReward: O,
    selectedGiftingPromotionReward: y,
    claimableRewards: A
  } = (0, f.Pv)(), I = (0, a.bG)([E.default], () => E.default.getCurrentUser()), v = (0, a.bG)([p.A], () => p.A.getGiftPromotionRewardSkuIds()), R = (0, d.UY)(A, y), [C, M] = l.useState(R), [N, k] = l.useState(false);
  l.useEffect(() => {
    N || null != y || null == R || (O(R), M(R))
  }, [R, N, y, O]), s()(null != i, "Expected plan to selected"), s()(null != S, "Expected selectedSkuId"), s()(null != b, "Step should be set");
  let w = l.useMemo(() => null != C && (null != A ? A : []).includes(C), [C, A]),
    D = l.useMemo(() => 0 === v.length || null == C || !w, [v, C, w]);
  l.useEffect(() => {
    if (0 === v.length) {
      M(true), O(true);
      return
    }
    null != C && w && v.includes(C) || null == C || (M(true), O(true))
  }, [v, w, C, O]);
  let U = e => {
      O(e), M(e), k(true)
    },
    L = v.map(e => (0, r.jsx)(u.k, {
      skuId: e,
      claimed: null != A && !A.includes(e),
      user: I,
      onSelect: U,
      selectedSkuId: C
    }, e)),
    G = (0, r.jsx)(h.UX, {
      children: (0, r.jsx)(o.jlY, {
        "data-migration-pending": true,
        className: T.Hx,
        children: (0, r.jsx)(m.Z, {
          onStepChange: e => {
            null != I && null != y && g.default.track(_.HAw.GIFT_PROMOTION_REWARD_SELECTED, {
              user_id: I.id,
              reward_sku_id: y
            }), n(e)
          },
          onBackClick: () => n(j.pn.PLAN_SELECT),
          shouldRenderUpdatedPaymentModal: true,
          showBackButton: true,
          planOptions: [i.id],
          selectedPlanId: i.id,
          isNextDisabled: D
        })
      })
    });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(o.rQ0, {
      "data-migration-pending": true,
      className: T.Hc,
      direction: c.A.Direction.VERTICAL,
      align: c.A.Align.START,
      separator: false,
      children: [(0, r.jsx)(o.Heading, {
        variant: "heading-lg/semibold",
        color: "text-strong",
        children: x.intl.string(x.t.OEtqpm)
      }), (0, r.jsx)(o.Text, {
        variant: "text-md/medium",
        color: "text-subtle",
        className: T.GQ,
        children: x.intl.string(x.t.h2nMp0)
      }), (0, r.jsx)(o.s_y, {
        "data-migration-pending": true,
        className: T.b,
        onClick: t
      })]
    }), (0, r.jsx)(o.$mQ, {
      "data-migration-pending": true,
      children: (0, r.jsx)(o.BJc, {
        direction: "vertical",
        justify: "center",
        align: "center",
        children: (0, r.jsx)("div", {
          className: T.Dq,
          children: L
        })
      })
    }), G]
  })
}