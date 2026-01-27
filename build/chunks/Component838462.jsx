/** Chunk was on 2824 **/
/** chunk id: 838462, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  _: () => O
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

function O(e) {
  let n, {
      handleClose: i,
      planGroup: O,
      onSubscriptionConfirmation: _,
      renderPurchaseConfirmation: N,
      postSuccessGuild: C,
      followupSKUInfo: M,
      continueSessionToInitialStep: w
    } = e,
    {
      activeSubscription: R,
      paymentSources: k,
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
    } = (0, x.Pv)(),
    {
      confirmationFooter: X
    } = (0, T.cG)(),
    $ = (0, p.px)(L, K, q),
    ee = (0, d.A)(),
    en = (0, p.Mq)(L),
    et = (0, u.Mv)(J),
    el = (0, b.g)(k, D),
    er = K && null != J && en;
  s()(null != L, "Expected plan to selected"), s()(null != G, "Expected selectedSkuId"), s()(null != U, "Step should be set");
  let ei = r.useCallback(() => {
    i(), null == _ || _()
  }, [i, _]);
  r.useEffect(() => {
    function e() {
      W && null != H && H.hasAnyPremiumGroup && (0, o.mMO)(async () => {
        let {
          default: e
        } = await Promise.all([t.e("73987"), t.e("6593")]).then(t.bind(t, 773486));
        return n => {
          var t, r;
          return (0, l.jsx)(e, (t = I({}, n), r = r = {
            subscription: H
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
      })
    }
    return f._.subscribe(y.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e), () => {
      f._.unsubscribe(y.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e)
    }
  }, [W, H]), r.useEffect(() => {
    !K || null == V || null == z || Y || Z || (0, j.Ik)(V) || Q({
      onSubscriptionConfirmation: _
    })
  }, [Q, K, V, z, Y, Z, _]), r.useEffect(() => {
    null != ee && null != ee.reminderNotice && $ && (0, c.$l)(a.M.GIFTING_PROMOTION_REMINDER, (0, m.p)(), {
      dismissAction: v.i.INDIRECT_ACTION
    })
  }, [ee, $]);
  let es = null != w ? g.Rs.DEEPLINK_TO_DESKTOP_APP : true;
  if (null != N) n = N(L, ei, H);
  else if (K) n = (0, l.jsx)(g.fw, {
    planId: L.id,
    onClose: ei
  });
  else {
    let e = B.current === L.id ? {
      postSuccessGuild: C
    } : {
      followupSKUInfo: M,
      startingPremiumSubscriptionPlanId: B.current,
      isDowngrade: null != R && (0, E.vT)(R, L.id, O)
    };
    n = (0, l.jsx)(g.Ay, I({
      planId: L.id,
      onClose: ei,
      paymentSourceType: el,
      hideClose: null != X,
      startingFractionalPremiumEndsAt: F.current,
      customCTAType: es
    }, e))
  }
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)(P.dZ, {
      children: [(0, l.jsx)(A.A, {}), n]
    }), null != X && X, er && null != et && null != J && (0, l.jsx)(S.A, {
      rewardSkuId: J,
      purchase: et,
      onClose: ei
    })]
  })
}