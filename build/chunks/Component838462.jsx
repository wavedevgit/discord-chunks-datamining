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
      l = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), l.forEach(function(n) {
      var l;
      l = t[n], n in e ? Object.defineProperty(e, n, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[n] = l
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
    } = (0, O.P5)(),
    {
      isGift: Z,
      giftRecipient: Q,
      giftCode: J,
      hasSentMessage: X,
      isSendingMessage: $,
      sendGiftMessage: ee,
      claimableRewards: en,
      selectedGiftingPromotionReward: et
    } = (0, A.Pv)(),
    {
      confirmationFooter: el
    } = (0, S.cG)(),
    er = (0, g.px)(B, Z, en),
    ei = (0, g.Mq)(B),
    es = (0, m.Mv)(et, false),
    ea = (0, u.bG)([P.A], () => {
      let e = P.A.getMarketingComponentByType(o.C.GIFT_REMINDER_NAGBAR);
      return null == e || "giftReminderNagbar" !== e.properties.properties.oneofKind ? null : e.properties.properties.giftReminderNagbar
    }),
    eo = (0, y.g)(H, F),
    eu = Z && null != et && null != es && ei;
  s()(null != B, "Expected plan to selected"), s()(null != W, "Expected selectedSkuId"), s()(null != K, "Step should be set");
  let ec = r.useCallback(() => {
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
  }), r.useEffect(() => {
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
              var t, r;
              return (0, l.jsx)(e, (t = M({}, n), r = r = {
                subscription: V,
                isFromPurchaseFlow: true,
                onClose: async () => {
                  _._.dispatch(R.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED), await n.onClose()
                }
              }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var l = Object.getOwnPropertySymbols(e);
                  t.push.apply(t, l)
                }
                return t
              })(Object(r)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
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
  }, [q, V]), r.useEffect(() => {
    !Z || null == Q || null == J || X || $ || (0, x.Ik)(Q) || ee({
      onSubscriptionConfirmation: k
    })
  }, [ee, Z, Q, J, X, $, k]), r.useEffect(() => {
    er && null != ea && (0, E.$l)(c.M.GIFTING_PROMOTION_REMINDER, (0, f.p)(), {
      dismissAction: C.i.INDIRECT_ACTION
    })
  }, [ea, er]);
  let ed = null != L ? j.Rs.DEEPLINK_TO_DESKTOP_APP : true;
  if (null != w) n = w(B, ec, V);
  else if (Z) n = (0, l.jsx)(j.fw, {
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
    n = (0, l.jsx)(j.Ay, M({
      planId: B.id,
      onClose: ec,
      paymentSourceType: eo,
      hideClose: null != el,
      startingFractionalPremiumEndsAt: z.current,
      customCTAType: ed
    }, e))
  }
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)(I.dZ, {
      children: [(0, l.jsx)(v.A, {}), n]
    }), null != el && el, eu && null != et && (0, l.jsx)(b.A, {
      rewardSkuId: et,
      onClose: ec
    })]
  })
}