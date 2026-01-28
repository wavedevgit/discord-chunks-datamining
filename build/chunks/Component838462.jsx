/** Chunk was on 2824 **/
/** chunk id: 838462, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  _: () => N
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  s = require.n(Chunk284009),
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

function _(e) {
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
      onSubscriptionConfirmation: C,
      renderPurchaseConfirmation: M,
      postSuccessGuild: R,
      followupSKUInfo: k,
      continueSessionToInitialStep: w
    } = e,
    {
      activeSubscription: D,
      paymentSources: L,
      paymentSourceId: G,
      selectedPlan: U,
      selectedSkuId: H,
      step: B,
      updatedSubscription: F,
      startingPremiumSubscriptionPlanIdRef: W,
      startingFractionalPremiumEndsAtRef: K,
      isPremiumGroupPurchase: V
    } = (0, P.P5)(),
    {
      isGift: Y,
      giftRecipient: z,
      giftCode: Z,
      hasSentMessage: Q,
      isSendingMessage: q,
      sendGiftMessage: J,
      claimableRewards: X,
      selectedGiftingPromotionReward: $
    } = (0, T.Pv)(),
    {
      confirmationFooter: ee
    } = (0, S.cG)(),
    en = (0, m.px)(U, Y, X),
    et = (0, m.Mq)(U),
    er = (0, d.Mv)($, false),
    el = (0, o.bG)([f.A], () => {
      let e = f.A.getMarketingComponentByType(a.C.GIFT_REMINDER_NAGBAR);
      return null == e || "giftReminderNagbar" !== e.properties.properties.oneofKind ? null : e.properties.properties.giftReminderNagbar
    }),
    ei = (0, y.g)(L, G),
    es = Y && null != $ && null != er && et;
  s()(null != U, "Expected plan to selected"), s()(null != H, "Expected selectedSkuId"), s()(null != B, "Step should be set");
  let ea = l.useCallback(() => {
    i(), null == C || C()
  }, [i, C]);
  l.useEffect(() => {
    function e() {
      V && null != F && F.hasAnyPremiumGroup && (0, c.mMO)(async () => {
        let {
          default: e
        } = await Promise.all([t.e("73987"), t.e("6593")]).then(t.bind(t, 773486));
        return n => {
          var t, l;
          return (0, r.jsx)(e, (t = _({}, n), l = l = {
            subscription: F
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
      })
    }
    return j._.subscribe(O.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e), () => {
      j._.unsubscribe(O.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e)
    }
  }, [V, F]), l.useEffect(() => {
    !Y || null == z || null == Z || Q || q || (0, x.Ik)(z) || J({
      onSubscriptionConfirmation: C
    })
  }, [J, Y, z, Z, Q, q, C]), l.useEffect(() => {
    en && null != el && (0, p.$l)(u.M.GIFTING_PROMOTION_REMINDER, (0, g.p)(), {
      dismissAction: v.i.INDIRECT_ACTION
    })
  }, [el, en]);
  let eo = null != w ? E.Rs.DEEPLINK_TO_DESKTOP_APP : true;
  if (null != M) n = M(U, ea, F);
  else if (Y) n = (0, r.jsx)(E.fw, {
    planId: U.id,
    onClose: ea
  });
  else {
    let e = W.current === U.id ? {
      postSuccessGuild: R
    } : {
      followupSKUInfo: k,
      startingPremiumSubscriptionPlanId: W.current,
      isDowngrade: null != D && (0, h.vT)(D, U.id, N)
    };
    n = (0, r.jsx)(E.Ay, _({
      planId: U.id,
      onClose: ea,
      paymentSourceType: ei,
      hideClose: null != ee,
      startingFractionalPremiumEndsAt: K.current,
      customCTAType: eo
    }, e))
  }
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(A.dZ, {
      children: [(0, r.jsx)(I.A, {}), n]
    }), null != ee && ee, es && null != $ && (0, r.jsx)(b.A, {
      rewardSkuId: $,
      onClose: ea
    })]
  })
}