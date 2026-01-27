/** Chunk was on 2824 **/
/** chunk id: 641819, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  j: () => b
}), require("./896048.js");
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
  Chunk412260 = require("./412260.js"),
  Chunk446929 = require("./446929.jsx"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk937008 = require("./937008.jsx"),
  Chunk156312 = require("./156312.jsx"),
  Chunk166532 = require("./166532.js"),
  Chunk482132 = require("./482132.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk907 = require("./907.js");

function b(e) {
  var n, t, i, b, A;
  let {
    handleStepChange: y,
    handleClose: v
  } = e, {
    selectedPlan: I,
    selectedSkuId: O,
    step: _
  } = (0, x.P5)(), {
    setSelectedGiftingPromotionReward: N,
    selectedGiftingPromotionReward: C,
    claimableRewards: M
  } = (0, E.Pv)(), w = (0, d.A)(), R = (0, a.bG)([f.default], () => f.default.getCurrentUser()), k = (0, a.bG)([m.A], () => m.A.getGiftPromotionRewardSkuIds()), D = (0, p.UY)(M, C), [L, G] = r.useState(D), [U, H] = r.useState(false);
  r.useEffect(() => {
    U || null != C || null == D || (N(D), G(D))
  }, [D, U, C, N]), s()(null != I, "Expected plan to selected"), s()(null != O, "Expected selectedSkuId"), s()(null != _, "Step should be set");
  let B = r.useMemo(() => null != L && (null != M ? M : []).includes(L), [L, M]),
    F = r.useMemo(() => 0 === k.length || null == L || !B, [k, L, B]);
  r.useEffect(() => {
    if (0 === k.length) {
      G(true), N(true);
      return
    }
    null != L && B && k.includes(L) || null == L || (G(true), N(true))
  }, [k, B, L, N]);
  let W = e => {
      N(e), G(e), H(true)
    },
    K = k.map(e => (0, l.jsx)(u.k, {
      skuId: e,
      claimed: null != M && !M.includes(e),
      user: R,
      onSelect: W,
      selectedSkuId: L
    }, e)),
    V = (0, l.jsx)(T.UX, {
      children: (0, l.jsx)(o.jlY, {
        "data-migration-pending": true,
        className: S.Hx,
        children: (0, l.jsx)(g.Z3, {
          onStepChange: e => {
            null != R && null != C && j.default.track(P.HAw.GIFT_PROMOTION_REWARD_SELECTED, {
              user_id: R.id,
              reward_sku_id: C
            }), y(e)
          },
          onBackClick: () => y(h.pn.PLAN_SELECT),
          shouldRenderUpdatedPaymentModal: true,
          showBackButton: true,
          planOptions: [I.id],
          selectedPlanId: I.id,
          isNextDisabled: F
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
        children: null == w || null == (n = w.rewardSelection) ? true : n.heading()
      }), (0, l.jsx)(o.Text, {
        variant: "text-md/medium",
        color: "text-subtle",
        className: S.GQ,
        children: null == w || null == (t = w.rewardSelection) ? true : t.primarySubtitle()
      }), (null == w || null == (b = w.rewardSelection) || null == (i = b.secondarySubtitle) ? true : i.call(b)) != null && (0, l.jsx)(o.Text, {
        variant: "text-md/medium",
        color: "text-subtle",
        children: null == w || null == (A = w.rewardSelection) ? true : A.secondarySubtitle()
      }), (0, l.jsx)(o.s_y, {
        "data-migration-pending": true,
        className: S.b,
        onClick: v
      })]
    }), (0, l.jsx)(o.$mQ, {
      "data-migration-pending": true,
      children: (0, l.jsx)(o.BJc, {
        direction: "vertical",
        justify: "center",
        align: "center",
        children: (0, l.jsx)("div", {
          className: S.Dq,
          children: K
        })
      })
    }), V]
  })
}