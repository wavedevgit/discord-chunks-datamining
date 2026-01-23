/** Chunk was on web.js **/
/** chunk id: 783420, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => A
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk822123 = require("./822123.js"),
  Chunk532794 = require("./532794.jsx"),
  Chunk976860 = require("./976860.js"),
  Chunk780964 = require("./780964.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk287809 = require("./287809.js"),
  Chunk166403 = require("./166403.js"),
  Chunk234419 = require("./234419.js"),
  Chunk788868 = require("./788868.js"),
  Chunk652215 = require("./652215.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      g(e, t, n[t])
    })
  }
  return e
}

function y(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function O(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = v(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function v(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}

function A(e) {
  let {
    onClick: t,
    subscriptionTier: g,
    postSuccessGuild: y,
    onSubscribeModalClose: v,
    premiumModalAnalyticsLocation: A,
    applicationId: I,
    giftMessage: S,
    confirmationFooter: T,
    isGift: C,
    initialPlanId: N = null,
    children: w
  } = e, R = (0, i.bG)([f.default], () => f.default.getCurrentUser()), P = (0, i.bG)([p.A], () => p.A.getPremiumTypeSubscription()), {
    analyticsLocations: D
  } = (0, s.Ay)(), x = (0, _.V)(), L = !C && null != x && null != g && h.TP[x.trial_id].skus.includes(g);
  return w({
    onClick: e => {
      var i;
      if (e.preventDefault(), null == R) return void(0, c.pX)(m.BVt.LOGIN, {
        source: "premium_subscribe_button"
      });
      if (null == t || t(e), (null == P ? true : P.status) === m.Dmq.ACCOUNT_HOLD) {
        (0, o.xf)(), (0, d.openUserSettings)(u.X.NITRO_PANEL, {
          section: m.nc_.PREMIUM
        }), null == v || v(false);
        return
      }
      if (!R.isClaimed()) return void(0, a.mMO)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("12206"), n.e("24806"), n.e("80388")]).then(n.bind(n, 195759));
        return t => {
          let {
            onClose: n
          } = t, i = O(t, ["onClose"]);
          return (0, r.jsx)(e, b(E({}, i), {
            onClose: n
          }))
        }
      });
      if (!R.verified) return void(0, a.mMO)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("12206"), n.e("90406")]).then(n.bind(n, 661925));
        return t => {
          let {
            onClose: n
          } = t, i = O(t, ["onClose"]);
          return (0, r.jsx)(e, b(E({}, i), {
            onClose: n
          }))
        }
      });
      let s = L ? null == (i = x.subscription_trial) ? true : i.id : null,
        f = m.AnalyticsObjectTypes.BUY;
      null != s ? f = m.AnalyticsObjectTypes.TRIAL : C && (f = m.AnalyticsObjectTypes.GIFT), (0, l.A)({
        isGift: C,
        initialPlanId: N,
        subscriptionTier: g,
        analyticsLocations: D,
        analyticsObject: E({
          object: m.ZSU.BUTTON_CTA,
          objectType: f
        }, A),
        trialId: s,
        postSuccessGuild: y,
        onClose: v,
        applicationId: I,
        giftMessage: S,
        confirmationFooter: T
      })
    }
  })
}