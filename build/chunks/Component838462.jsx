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
  Chunk841702 = require("./841702.js"),
  Chunk367727 = require("./367727.js"),
  Chunk810498 = require("./810498.js"),
  Chunk173834 = require("./173834.js"),
  Chunk412260 = require("./412260.js"),
  Chunk380083 = require("./380083.jsx"),
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

function C(e) {
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
      onSubscriptionConfirmation: M,
      renderPurchaseConfirmation: R,
      postSuccessGuild: k,
      followupSKUInfo: w,
      continueSessionToInitialStep: D
    } = e,
    {
      activeSubscription: L,
      paymentSources: G,
      paymentSourceId: U,
      selectedPlan: H,
      selectedSkuId: F,
      step: B,
      updatedSubscription: W,
      startingPremiumSubscriptionPlanIdRef: K,
      startingFractionalPremiumEndsAtRef: V,
      isPremiumGroupPurchase: Y
    } = (0, S.P5)(),
    {
      isGift: z,
      giftRecipient: q,
      giftCode: Z,
      hasSentMessage: Q,
      isSendingMessage: J,
      sendGiftMessage: X,
      claimableRewards: $,
      selectedGiftingPromotionReward: ee
    } = (0, T.Pv)(),
    {
      confirmationFooter: en
    } = (0, A.cG)(),
    et = (0, g.px)(H, z, $),
    el = (0, g.Mq)(H),
    er = (0, p.Mv)(ee, false),
    ei = (0, u.bG)([f.A], () => {
      let e = f.A.getMarketingComponentByType(o.C.GIFT_REMINDER_NAGBAR);
      return null == e || "giftReminderNagbar" !== e.properties.properties.oneofKind ? null : e.properties.properties.giftReminderNagbar
    }),
    es = (0, y.g)(G, U),
    ea = z && null != ee && null != er && el;
  s()(null != H, "Expected plan to selected"), s()(null != F, "Expected selectedSkuId"), s()(null != B, "Step should be set");
  let eo = r.useCallback(() => {
    i(), null == M || M()
  }, [i, M]);
  r.useEffect(() => {
    function e() {
      if (Y && null != W && W.hasAnyPremiumGroup) {
        let e = (0, a.uniqueId)("premium-group-purchase-flow-modal");
        (0, d.mMO)(async () => {
          let {
            default: e
          } = await Promise.all([t.e("73987"), t.e("6593")]).then(t.bind(t, 773486));
          return n => {
            var t, r;
            return (0, l.jsx)(e, (t = C({}, n), r = r = {
              subscription: W,
              onClose: async () => {
                h._.dispatch(_.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED), await n.onClose()
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
            h._.dispatch(_.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED), (0, d.OoC)(e)
          },
          modalKey: e
        })
      }
    }
    return h._.subscribe(_.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e), () => {
      h._.unsubscribe(_.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e)
    }
  }, [Y, W]), r.useEffect(() => {
    !z || null == q || null == Z || Q || J || (0, x.Ik)(q) || X({
      onSubscriptionConfirmation: M
    })
  }, [X, z, q, Z, Q, J, M]), r.useEffect(() => {
    et && null != ei && (0, m.$l)(c.M.GIFTING_PROMOTION_REMINDER, (0, E.p)(), {
      dismissAction: v.i.INDIRECT_ACTION
    })
  }, [ei, et]);
  let eu = null != D ? j.Rs.DEEPLINK_TO_DESKTOP_APP : true;
  if (null != R) n = R(H, eo, W);
  else if (z) n = (0, l.jsx)(j.fw, {
    planId: H.id,
    onClose: eo
  });
  else {
    let e = K.current === H.id ? {
      postSuccessGuild: k
    } : {
      followupSKUInfo: w,
      startingPremiumSubscriptionPlanId: K.current,
      isDowngrade: null != L && (0, P.vT)(L, H.id, N)
    };
    n = (0, l.jsx)(j.Ay, C({
      planId: H.id,
      onClose: eo,
      paymentSourceType: es,
      hideClose: null != en,
      startingFractionalPremiumEndsAt: V.current,
      customCTAType: eu
    }, e))
  }
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)(O.dZ, {
      children: [(0, l.jsx)(I.A, {}), n]
    }), null != en && en, ea && null != ee && (0, l.jsx)(b.A, {
      rewardSkuId: ee,
      onClose: eo
    })]
  })
}