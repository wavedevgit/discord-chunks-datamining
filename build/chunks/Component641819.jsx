/** Chunk was on 2824 **/
/** chunk id: 641819, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  j: () => A
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
  Chunk446929 = require("./446929.jsx"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk937008 = require("./937008.jsx"),
  Chunk156312 = require("./156312.jsx"),
  Chunk166532 = require("./166532.js"),
  Chunk482132 = require("./482132.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk907 = require("./907.js");

function A(e) {
  let {
    handleStepChange: n,
    handleClose: t
  } = e, {
    selectedPlan: i,
    selectedSkuId: A,
    step: b
  } = (0, j.P5)(), {
    setSelectedGiftingPromotionReward: y,
    selectedGiftingPromotionReward: I,
    claimableRewards: O
  } = (0, E.Pv)(), v = (0, a.bG)([g.default], () => g.default.getCurrentUser()), _ = (0, a.bG)([p.A], () => p.A.getGiftPromotionRewardSkuIds()), N = (0, d.UY)(O, I), [C, M] = l.useState(N), [R, k] = l.useState(false);
  l.useEffect(() => {
    R || null != I || null == N || (y(N), M(N))
  }, [N, R, I, y]), s()(null != i, "Expected plan to selected"), s()(null != A, "Expected selectedSkuId"), s()(null != b, "Step should be set");
  let w = l.useMemo(() => null != C && (null != O ? O : []).includes(C), [C, O]),
    D = l.useMemo(() => 0 === _.length || null == C || !w, [_, C, w]);
  l.useEffect(() => {
    if (0 === _.length) {
      M(true), y(true);
      return
    }
    null != C && w && _.includes(C) || null == C || (M(true), y(true))
  }, [_, w, C, y]);
  let L = e => {
      y(e), M(e), k(true)
    },
    G = _.map(e => (0, r.jsx)(u.k, {
      skuId: e,
      claimed: null != O && !O.includes(e),
      user: v,
      onSelect: L,
      selectedSkuId: C
    }, e)),
    U = (0, r.jsx)(h.UX, {
      children: (0, r.jsx)(o.jlY, {
        "data-migration-pending": true,
        className: S.Hx,
        children: (0, r.jsx)(m.Z3, {
          onStepChange: e => {
            null != v && null != I && f.default.track(T.HAw.GIFT_PROMOTION_REWARD_SELECTED, {
              user_id: v.id,
              reward_sku_id: I
            }), n(e)
          },
          onBackClick: () => n(x.pn.PLAN_SELECT),
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
      className: S.Hc,
      direction: c.A.Direction.VERTICAL,
      align: c.A.Align.START,
      separator: false,
      children: [(0, r.jsx)(o.Heading, {
        variant: "heading-lg/semibold",
        color: "text-strong",
        children: P.intl.string(P.t.OEtqpm)
      }), (0, r.jsx)(o.Text, {
        variant: "text-md/medium",
        color: "text-subtle",
        className: S.GQ,
        children: P.intl.string(P.t.h2nMp0)
      }), (0, r.jsx)(o.s_y, {
        "data-migration-pending": true,
        className: S.b,
        onClick: t
      })]
    }), (0, r.jsx)(o.$mQ, {
      "data-migration-pending": true,
      children: (0, r.jsx)(o.BJc, {
        direction: "vertical",
        justify: "center",
        align: "center",
        children: (0, r.jsx)("div", {
          className: S.Dq,
          children: G
        })
      })
    }), U]
  })
}