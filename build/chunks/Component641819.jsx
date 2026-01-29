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
  } = (0, j.P5)(), {
    setSelectedGiftingPromotionReward: b,
    selectedGiftingPromotionReward: y,
    claimableRewards: I
  } = (0, f.Pv)(), _ = (0, a.bG)([g.default], () => g.default.getCurrentUser()), v = (0, a.bG)([p.A], () => p.A.getGiftPromotionRewardSkuIds()), C = (0, d.UY)(I, y), [N, M] = r.useState(C), [R, k] = r.useState(false);
  r.useEffect(() => {
    R || null != y || null == C || (b(C), M(C))
  }, [C, R, y, b]), s()(null != i, "Expected plan to selected"), s()(null != A, "Expected selectedSkuId"), s()(null != O, "Step should be set");
  let w = r.useMemo(() => null != N && (null != I ? I : []).includes(N), [N, I]),
    D = r.useMemo(() => 0 === v.length || null == N || !w, [v, N, w]);
  r.useEffect(() => {
    if (0 === v.length) {
      M(true), b(true);
      return
    }
    null != N && w && v.includes(N) || null == N || (M(true), b(true))
  }, [v, w, N, b]);
  let L = e => {
      b(e), M(e), k(true)
    },
    G = v.map(e => (0, l.jsx)(u.k, {
      skuId: e,
      claimed: null != I && !I.includes(e),
      user: _,
      onSelect: L,
      selectedSkuId: N
    }, e)),
    U = (0, l.jsx)(x.UX, {
      children: (0, l.jsx)(o.jlY, {
        "data-migration-pending": true,
        className: S.Hx,
        children: (0, l.jsx)(m.Z3, {
          onStepChange: e => {
            null != _ && null != y && E.default.track(P.HAw.GIFT_PROMOTION_REWARD_SELECTED, {
              user_id: _.id,
              reward_sku_id: y
            }), n(e)
          },
          onBackClick: () => n(h.pn.PLAN_SELECT),
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
      className: S.Hc,
      direction: c.A.Direction.VERTICAL,
      align: c.A.Align.START,
      separator: false,
      children: [(0, l.jsx)(o.Heading, {
        variant: "heading-lg/semibold",
        color: "text-strong",
        children: T.intl.string(T.t.OEtqpm)
      }), (0, l.jsx)(o.Text, {
        variant: "text-md/medium",
        color: "text-subtle",
        className: S.GQ,
        children: T.intl.string(T.t.h2nMp0)
      }), (0, l.jsx)(o.s_y, {
        "data-migration-pending": true,
        className: S.b,
        onClick: t
      })]
    }), (0, l.jsx)(o.$mQ, {
      "data-migration-pending": true,
      children: (0, l.jsx)(o.BJc, {
        direction: "vertical",
        justify: "center",
        align: "center",
        children: (0, l.jsx)("div", {
          className: S.Dq,
          children: G
        })
      })
    }), U]
  })
}