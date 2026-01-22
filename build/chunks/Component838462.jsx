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
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      var l;
      l = n[t], t in e ? Object.defineProperty(e, t, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = l
    })
  }
  return e
}

function A(e) {
  let t, {
      handleClose: i,
      planGroup: A,
      onSubscriptionConfirmation: k,
      renderPurchaseConfirmation: w,
      postSuccessGuild: _,
      followupSKUInfo: C,
      continueSessionToInitialStep: M
    } = e,
    {
      activeSubscription: N,
      paymentSources: R,
      paymentSourceId: D,
      selectedPlan: L,
      selectedSkuId: U,
      step: G,
      updatedSubscription: H,
      startingPremiumSubscriptionPlanIdRef: B,
      startingFractionalPremiumEndsAtRef: F,
      isPremiumGroupPurchase: W
    } = (0, v.P5)(),
    {
      isGift: z,
      giftRecipient: V,
      giftCode: K,
      hasSentMessage: Y,
      isSendingMessage: Z,
      sendGiftMessage: Q,
      claimableRewards: q,
      selectedGiftingPromotionReward: J
    } = (0, h.Pv)(),
    {
      confirmationFooter: X
    } = (0, b.cG)(),
    $ = (0, p.px)(L, z, q),
    ee = (0, d.A)(),
    et = (0, p.Mq)(L),
    en = (0, u.Mv)(null == J ? true : J.skuId),
    el = (0, P.g)(R, D),
    er = z && null != J && et;
  s()(null != L, "Expected plan to selected"), s()(null != U, "Expected selectedSkuId"), s()(null != G, "Step should be set");
  let ei = r.useCallback(() => {
    i(), null == k || k()
  }, [i, k]);
  r.useEffect(() => {
    function e() {
      W && null != H && H.hasAnyPremiumGroup && (0, o.mMO)(async () => {
        let {
          default: e
        } = await n.e("73987").then(n.bind(n, 773486));
        return t => {
          var n, r;
          return (0, l.jsx)(e, (n = I({}, t), r = r = {
            subscription: H
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var l = Object.getOwnPropertySymbols(e);
              n.push.apply(n, l)
            }
            return n
          })(Object(r)).forEach(function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
          }), n))
        }
      })
    }
    return g._.subscribe(E.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e), () => {
      g._.unsubscribe(E.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e)
    }
  }, [W, H]), r.useEffect(() => {
    !z || null == V || null == K || Y || Z || (0, j.Ik)(V) || Q({
      onSubscriptionConfirmation: k
    })
  }, [Q, z, V, K, Y, Z, k]), r.useEffect(() => {
    null != ee && null != ee.reminderNotice && $ && (0, c.$l)(a.M.GIFTING_PROMOTION_REMINDER, (0, m.p)(), {
      dismissAction: T.i.INDIRECT_ACTION
    })
  }, [ee, $]);
  let es = null != M ? f.Rs.DEEPLINK_TO_DESKTOP_APP : true;
  if (null != w) t = w(L, ei, H);
  else if (z) t = (0, l.jsx)(f.fw, {
    planId: L.id,
    onClose: ei
  });
  else {
    let e = B.current === L.id ? {
      postSuccessGuild: _
    } : {
      followupSKUInfo: C,
      startingPremiumSubscriptionPlanId: B.current,
      isDowngrade: null != N && (0, y.vT)(N, L.id, A)
    };
    t = (0, l.jsx)(f.Ay, I({
      planId: L.id,
      onClose: ei,
      paymentSourceType: el,
      hideClose: null != X,
      startingFractionalPremiumEndsAt: F.current,
      customCTAType: es
    }, e))
  }
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)(O.dZ, {
      children: [(0, l.jsx)(S.A, {}), t]
    }), null != X && X, er && null != en && (0, l.jsx)(x.A, {
      reward: J,
      purchase: en,
      onClose: ei
    })]
  })
}