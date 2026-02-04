/** Chunk was on 2824 **/
/** chunk id: 838462, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  _: () => N
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  s = require.n(Chunk284009),
  Chunk735438 = require("./735438.js"),
  Chunk877624 = require("./877624.js"),
  Chunk311907 = require("./311907.js"),
  Chunk554146 = require("./554146.js"),
  Chunk397927 = require("./397927.js"),
  Chunk964486 = require("./964486.js"),
  Chunk841702 = require("./841702.js"),
  Chunk367727 = require("./367727.js"),
  Chunk810498 = require("./810498.js"),
  Chunk173834 = require("./173834.js"),
  Chunk412260 = require("./412260.js"),
  Chunk380083 = require("./380083.jsx"),
  Chunk954571 = require("./954571.js"),
  Chunk203982 = require("./203982.js"),
  Chunk45938 = require("./45938.js"),
  Chunk615396 = require("./615396.js"),
  Chunk937008 = require("./937008.jsx"),
  Chunk156312 = require("./156312.jsx"),
  Chunk491057 = require("./491057.jsx"),
  Chunk482132 = require("./482132.jsx"),
  Chunk877156 = require("./877156.jsx"),
  Chunk216641 = require("./216641.js"),
  Chunk921925 = require("./921925.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk49999 = require("./49999.js");

function M(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = null != arguments[n] ? arguments[n] : {},
      r = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), r.forEach(function(n) {
      var r;
      r = t[n], n in e ? Object.defineProperty(e, n, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[n] = r
    })
  }
  return e
}

function N(e) {
  let n, {
      handleClose: i,
      planGroup: N,
      onSubscriptionConfirmation: k,
      renderPurchaseConfirmation: w,
      postSuccessGuild: D,
      followupSKUInfo: U,
      continueSessionToInitialStep: L
    } = e,
    {
      activeSubscription: G,
      paymentSources: H,
      paymentSourceId: F,
      selectedPlan: B,
      selectedSkuId: W,
      step: K,
      updatedSubscription: V,
      startingPremiumSubscriptionPlanIdRef: Y,
      startingFractionalPremiumEndsAtRef: z,
      isPremiumGroupPurchase: q
    } = (0, b.P5)(),
    {
      isGift: Z,
      giftRecipient: Q,
      giftCode: X,
      hasSentMessage: J,
      isSendingMessage: $,
      sendGiftMessage: ee,
      claimableRewards: en,
      selectedGiftingPromotionReward: et
    } = (0, S.Pv)(),
    {
      confirmationFooter: er
    } = (0, O.cG)(),
    el = (0, g.px)(B, Z, en),
    ei = (0, g.Mq)(B),
    es = (0, m.Mv)(et, false),
    ea = (0, u.bG)([P.A], () => {
      let e = P.A.getMarketingComponentByType(o.C.GIFT_REMINDER_NAGBAR);
      return null == e || "giftReminderNagbar" !== e.properties.properties.oneofKind ? null : e.properties.properties.giftReminderNagbar
    }),
    eo = (0, I.g)(H, F),
    eu = Z && null != et && null != es && ei;
  s()(null != B, "Expected plan to selected"), s()(null != W, "Expected selectedSkuId"), s()(null != K, "Step should be set");
  let ec = l.useCallback(() => {
    i(), null == k || k()
  }, [i, k]);
  (0, p.Ay)(() => {
    if (q) {
      var e;
      h.default.track(R.HAw.PREMIUM_GROUP_PURCHASE_CONFIRMATION_VIEWED, {
        has_updated_subscription: null != V,
        has_any_premium_group: null != (e = null == V ? true : V.hasAnyPremiumGroup) && e,
        subscription_id: null == V ? true : V.id
      })
    }
  }), l.useEffect(() => {
    function e() {
      if (q)
        if (null != V && V.hasAnyPremiumGroup) {
          h.default.track(R.HAw.PREMIUM_GROUP_PURCHASE_FRIEND_SELECTOR_OPENED, {
            subscription_id: V.id
          });
          let e = (0, a.uniqueId)("premium-group-purchase-flow-modal");
          (0, d.mMO)(async () => {
            let {
              default: e
            } = await Promise.all([t.e("73987"), t.e("6593")]).then(t.bind(t, 773486));
            return n => {
              var t, l;
              return (0, r.jsx)(e, (t = M({}, n), l = l = {
                subscription: V,
                isFromPurchaseFlow: true,
                onClose: async () => {
                  _._.dispatch(R.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED), await n.onClose()
                }
              }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l)) : (function(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var r = Object.getOwnPropertySymbols(e);
                  t.push.apply(t, r)
                }
                return t
              })(Object(l)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(l, e))
              }), t))
            }
          }, {
            onCloseRequest: () => {
              _._.dispatch(R.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED), (0, d.OoC)(e)
            },
            modalKey: e
          })
        } else {
          var e;
          h.default.track(R.HAw.PREMIUM_GROUP_PURCHASE_FRIEND_SELECTOR_SKIPPED, {
            has_updated_subscription: null != V,
            has_any_premium_group: null != (e = null == V ? true : V.hasAnyPremiumGroup) && e
          }), _._.dispatch(R.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED)
        }
    }
    return _._.subscribe(R.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e), () => {
      _._.unsubscribe(R.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e)
    }
  }, [q, V]), l.useEffect(() => {
    !Z || null == Q || null == X || J || $ || (0, x.Ik)(Q) || ee({
      onSubscriptionConfirmation: k
    })
  }, [ee, Z, Q, X, J, $, k]), l.useEffect(() => {
    el && null != ea && (0, E.$l)(c.M.GIFTING_PROMOTION_REMINDER, (0, f.p)(), {
      dismissAction: C.i.INDIRECT_ACTION
    })
  }, [ea, el]);
  let ed = null != L ? j.Rs.DEEPLINK_TO_DESKTOP_APP : true;
  if (null != w) n = w(B, ec, V);
  else if (Z) n = (0, r.jsx)(j.fw, {
    planId: B.id,
    onClose: ec
  });
  else {
    let e = Y.current === B.id ? {
      postSuccessGuild: D
    } : {
      followupSKUInfo: U,
      startingPremiumSubscriptionPlanId: Y.current,
      isDowngrade: null != G && (0, T.vT)(G, B.id, N)
    };
    n = (0, r.jsx)(j.Ay, M({
      planId: B.id,
      onClose: ec,
      paymentSourceType: eo,
      hideClose: null != er,
      startingFractionalPremiumEndsAt: z.current,
      customCTAType: ed
    }, e))
  }
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(y.dZ, {
      children: [(0, r.jsx)(v.A, {}), n]
    }), null != er && er, eu && null != et && (0, r.jsx)(A.A, {
      rewardSkuId: et,
      onClose: ec
    })]
  })
}