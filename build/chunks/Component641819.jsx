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
    step: O
  } = (0, P.P5)(), {
    setSelectedGiftingPromotionReward: S,
    selectedGiftingPromotionReward: I,
    claimableRewards: b
  } = (0, f.Pv)(), y = (0, a.bG)([E.default], () => E.default.getCurrentUser()), v = (0, a.bG)([p.A], () => p.A.getGiftPromotionRewardSkuIds()), R = (0, d.UY)(b, I), [C, M] = r.useState(R), [N, k] = r.useState(false);
  r.useEffect(() => {
    N || null != I || null == R || (S(R), M(R))
  }, [R, N, I, S]), s()(null != i, "Expected plan to selected"), s()(null != A, "Expected selectedSkuId"), s()(null != O, "Step should be set");
  let w = r.useMemo(() => null != C && (null != b ? b : []).includes(C), [C, b]),
    D = r.useMemo(() => 0 === v.length || null == C || !w, [v, C, w]);
  r.useEffect(() => {
    if (0 === v.length) {
      M(true), S(true);
      return
    }
    null != C && w && v.includes(C) || null == C || (M(true), S(true))
  }, [v, w, C, S]);
  let U = e => {
      S(e), M(e), k(true)
    },
    L = v.map(e => (0, l.jsx)(u.k, {
      skuId: e,
      claimed: null != b && !b.includes(e),
      user: y,
      onSelect: U,
      selectedSkuId: C
    }, e)),
    G = (0, l.jsx)(h.UX, {
      children: (0, l.jsx)(o.jlY, {
        "data-migration-pending": true,
        className: T.Hx,
        children: (0, l.jsx)(m.Z3, {
          onStepChange: e => {
            null != y && null != I && g.default.track(_.HAw.GIFT_PROMOTION_REWARD_SELECTED, {
              user_id: y.id,
              reward_sku_id: I
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
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)(o.rQ0, {
      "data-migration-pending": true,
      className: T.Hc,
      direction: c.A.Direction.VERTICAL,
      align: c.A.Align.START,
      separator: false,
      children: [(0, l.jsx)(o.Heading, {
        variant: "heading-lg/semibold",
        color: "text-strong",
        children: x.intl.string(x.t.OEtqpm)
      }), (0, l.jsx)(o.Text, {
        variant: "text-md/medium",
        color: "text-subtle",
        className: T.GQ,
        children: x.intl.string(x.t.h2nMp0)
      }), (0, l.jsx)(o.s_y, {
        "data-migration-pending": true,
        className: T.b,
        onClick: t
      })]
    }), (0, l.jsx)(o.$mQ, {
      "data-migration-pending": true,
      children: (0, l.jsx)(o.BJc, {
        direction: "vertical",
        justify: "center",
        align: "center",
        children: (0, l.jsx)("div", {
          className: T.Dq,
          children: L
        })
      })
    }), G]
  })
}