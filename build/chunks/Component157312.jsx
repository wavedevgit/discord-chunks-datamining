/** Chunk was on 72114 **/
/** chunk id: 157312, original params: t,e,r (module,exports,require) **/
require.d(exports, {
  default: () => P
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk313789 = require("./313789.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk51144 = require("./51144.js"),
  Chunk80721 = require("./80721.js"),
  Chunk282793 = require("./282793.js"),
  Chunk981631 = require("./981631.js"),
  Chunk353149 = require("./353149.js"),
  Chunk388032 = require("./388032.jsx");

function g(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = null != arguments[e] ? arguments[e] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(t) {
      return Object.getOwnPropertyDescriptor(r, t).enumerable
    }))), n.forEach(function(e) {
      var n;
      n = r[e], e in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : t[e] = n
    })
  }
  return t
}
let P = t => {
  var e, r, {
      subscriptionId: P,
      invitedUser: _,
      subscriptionGroupMemberId: j,
      onClose: m
    } = t,
    I = function(t, e) {
      if (null == t) return {};
      var r, n, i = function(t, e) {
        if (null == t) return {};
        var r, n, i = {},
          o = Object.keys(t);
        for (n = 0; n < o.length; n++) r = o[n], e.indexOf(r) >= 0 || (i[r] = t[r]);
        return i
      }(t, e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(t);
        for (n = 0; n < o.length; n++) r = o[n], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (i[r] = t[r])
      }
      return i
    }(t, ["subscriptionId", "invitedUser", "subscriptionGroupMemberId", "onClose"]);
  let [S, v] = (0, i.useState)(false), [C, E] = (0, i.useState)(false), [w, h] = (0, i.useState)(false);
  (0, s.ZP)(() => {
    u.default.track(O.rMx.PREMIUM_GROUP_CANCEL_INVITE_MODAL_VIEWED, {
      subscription_id: P,
      invited_user_id: _.id
    })
  });
  let k = async () => {
    u.default.track(O.rMx.PREMIUM_GROUP_CANCEL_INVITE_CTA_CLICKED, {
      subscription_id: P,
      invited_user_id: _.id
    }), h(true);
    let t = await (0, p.if)(P, _.id, j);
    if (h(false), t.ok) m();
    else {
      var e;
      (null == (e = t.body) ? true : e.code) === b.YW.BILLING_SUBSCRIPTION_GROUP_INVITE_ALREADY_ACCEPTED ? v(true) : E(true)
    }
  };
  return S ? (0, n.jsx)(o.Modal, g({
    size: "md",
    title: y.intl.string(f.default.grjTat),
    subtitle: y.intl.string(f.default.VgTgGu),
    actions: [{
      text: y.intl.string(f.default["+YO9kw"]),
      variant: "secondary",
      onClick: () => {
        (0, a.openUserSettings)(c.n.SUBSCRIPTIONS_PANEL, {
          section: O.oAB.SUBSCRIPTIONS
        }), m()
      }
    }],
    onClose: m
  }, I)) : (0, n.jsx)(o.Modal, (e = g({
    size: "md",
    title: y.intl.string(f.default.U439m2),
    subtitle: y.intl.formatToPlainString(f.default["Sv6+Ox"], {
      memberName: (0, d.XM)(_),
      premiumGroupProductName: (0, b.sO)()
    }),
    onClose: m,
    actions: [{
      text: y.intl.string(f.default["2blqtw"]),
      variant: "critical-primary",
      onClick: k,
      loading: w
    }]
  }, I), r = r = {
    children: C && (0, n.jsx)(l.M14, {
      type: "critical",
      children: y.intl.string(y.t["rTU7/z"])
    })
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : (function(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(t);
      r.push.apply(r, n)
    }
    return r
  })(Object(r)).forEach(function(t) {
    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
  }), e))
}