/** Chunk was on 2824 **/
/** chunk id: 838462, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  _: () => A
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  s = require.n(Chunk284009),
  Chunk554146 = require("./554146.js"),
  Chunk397927 = require("./397927.js"),
  Chunk841702 = require("./841702.js"),
  Chunk367727 = require("./367727.js"),
  Chunk552736 = require("./552736.js"),
  Chunk810498 = require("./810498.js"),
  Chunk173834 = require("./173834.js"),
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

function I(e) {
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
}

function A(e) {
  let t, {
      handleClose: i,
      planGroup: A,
      onSubscriptionConfirmation: k,
      renderPurchaseConfirmation: C,
      postSuccessGuild: w,
      followupSKUInfo: _,
      continueSessionToInitialStep: M
    } = e,
    {
      activeSubscription: N,
      paymentSources: R,
      paymentSourceId: D,
      selectedPlan: L,
      selectedSkuId: G,
      step: U,
      updatedSubscription: H,
      startingPremiumSubscriptionPlanIdRef: B,
      startingFractionalPremiumEndsAtRef: F,
      isPremiumGroupPurchase: W
    } = (0, h.P5)(),
    {
      isGift: K,
      giftRecipient: V,
      giftCode: z,
      hasSentMessage: Y,
      isSendingMessage: Z,
      sendGiftMessage: Q,
      claimableRewards: q,
      selectedGiftingPromotionReward: J
    } = (0, b.Pv)(),
    {
      confirmationFooter: X
    } = (0, v.cG)(),
    $ = (0, p.px)(L, K, q),
    ee = (0, d.A)(),
    et = (0, p.Mq)(L),
    en = (0, u.Mv)(null == J ? true : J.skuId),
    er = (0, E.g)(R, D),
    el = K && null != J && et;
  s()(null != L, "Expected plan to selected"), s()(null != G, "Expected selectedSkuId"), s()(null != U, "Step should be set");
  let ei = l.useCallback(() => {
    i(), null == k || k()
  }, [i, k]);
  l.useEffect(() => {
    function e() {
      W && null != H && H.hasAnyPremiumGroup && (0, o.mMO)(async () => {
        let {
          default: e
        } = await n.e("73987").then(n.bind(n, 773486));
        return t => {
          var n, l;
          return (0, r.jsx)(e, (n = I({}, t), l = l = {
            subscription: H
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(l)).forEach(function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e))
          }), n))
        }
      })
    }
    return f._.subscribe(S.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e), () => {
      f._.unsubscribe(S.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e)
    }
  }, [W, H]), l.useEffect(() => {
    !K || null == V || null == z || Y || Z || (0, y.Ik)(V) || Q({
      onSubscriptionConfirmation: k
    })
  }, [Q, K, V, z, Y, Z, k]), l.useEffect(() => {
    null != ee && null != ee.reminderNotice && $ && (0, c.$l)(a.M.GIFTING_PROMOTION_REMINDER, (0, m.p)(), {
      dismissAction: T.i.INDIRECT_ACTION
    })
  }, [ee, $]);
  let es = null != M ? g.Rs.DEEPLINK_TO_DESKTOP_APP : true;
  if (null != C) t = C(L, ei, H);
  else if (K) t = (0, r.jsx)(g.fw, {
    planId: L.id,
    onClose: ei
  });
  else {
    let e = B.current === L.id ? {
      postSuccessGuild: w
    } : {
      followupSKUInfo: _,
      startingPremiumSubscriptionPlanId: B.current,
      isDowngrade: null != N && (0, j.vT)(N, L.id, A)
    };
    t = (0, r.jsx)(g.Ay, I({
      planId: L.id,
      onClose: ei,
      paymentSourceType: er,
      hideClose: null != X,
      startingFractionalPremiumEndsAt: F.current,
      customCTAType: es
    }, e))
  }
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(O.dZ, {
      children: [(0, r.jsx)(x.A, {}), t]
    }), null != X && X, el && null != en && (0, r.jsx)(P.A, {
      reward: J,
      purchase: en,
      onClose: ei
    })]
  })
}