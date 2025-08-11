/** Chunk was on web.js **/
/** chunk id: 648613, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk230711 = require("./230711.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk543241 = require("./543241.js"),
  Chunk963249 = require("./963249.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk594174 = require("./594174.js"),
  Chunk78839 = require("./78839.js"),
  Chunk639119 = require("./639119.js"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
    })
  }
  return e
}

function E(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function y(e, t) {
  if (null == e) return {};
  var n, r, i = O(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function O(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function v(e) {
  let {
    onClick: t,
    subscriptionTier: m,
    postSuccessGuild: E,
    onSubscribeModalClose: O,
    premiumModalAnalyticsLocation: v,
    applicationId: I,
    giftMessage: T,
    confirmationFooter: S,
    paymentModalBanner: A,
    isGift: N,
    children: C
  } = e, R = (0, i.e7)([d.default], () => d.default.getCurrentUser()), P = (0, i.e7)([f.Z], () => f.Z.getPremiumTypeSubscription()), {
    analyticsLocations: w
  } = (0, s.ZP)(), D = (0, _.N)(), L = !N && null != D && null != m && p.nG[D.trial_id].skus.includes(m);
  return C({
    onClick: e => {
      var i;
      if (e.preventDefault(), null == R) return void(0, u.uL)(h.Z5c.LOGIN, {
        source: "premium_subscribe_button"
      });
      if (null == t || t(e), (null == P ? true : P.status) === h.O0b.ACCOUNT_HOLD) {
        (0, l.A3)(), a.Z.open(h.oAB.PREMIUM), null == O || O(false);
        return
      }
      if (!R.isClaimed()) return void(0, o.ZDy)(async () => {
        let {
          default: e
        } = await n.e("69417").then(n.bind(n, 918995));
        return t => {
          var {
            onClose: n
          } = t, i = y(t, ["onClose"]);
          return (0, r.jsx)(e, b(g({}, i), {
            onClose: n
          }))
        }
      });
      if (!R.verified) return void(0, o.ZDy)(async () => {
        let {
          default: e
        } = await n.e("20102").then(n.bind(n, 444688));
        return t => {
          var {
            onClose: n
          } = t, i = y(t, ["onClose"]);
          return (0, r.jsx)(e, b(g({}, i), {
            onClose: n
          }))
        }
      });
      let s = L ? null == (i = D.subscription_trial) ? true : i.id : null,
        d = h.Qqv.BUY;
      null != s ? d = h.Qqv.TRIAL : N && (d = h.Qqv.GIFT), (0, c.Z)({
        isGift: N,
        initialPlanId: null,
        subscriptionTier: m,
        analyticsLocations: w,
        analyticsObject: g({
          object: h.qAy.BUTTON_CTA,
          objectType: d
        }, v),
        trialId: s,
        postSuccessGuild: E,
        onClose: O,
        applicationId: I,
        giftMessage: T,
        confirmationFooter: S,
        paymentModalBanner: A
      })
    }
  })
}