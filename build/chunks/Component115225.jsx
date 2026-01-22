/** Chunk was on 15554 **/
/** chunk id: 115225, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => P
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk964486 = require("./964486.js"),
  Chunk780964 = require("./780964.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk954571 = require("./954571.js"),
  Chunk427262 = require("./427262.js"),
  Chunk677185 = require("./677185.js"),
  Chunk88001 = require("./88001.js"),
  Chunk652215 = require("./652215.js"),
  Chunk519412 = require("./519412.js"),
  Chunk985018 = require("./985018.jsx");

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}
let P = e => {
  var t, r;
  let {
    subscriptionId: P,
    invitedUser: _,
    subscriptionGroupMemberId: j,
    onClose: m
  } = e, I = function(e, t) {
    if (null == e) return {};
    var r, n, i, o = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (i = 0, r = Reflect.ownKeys(e); i < r.length; i++) n = r[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
      return o
    }
    if (o = function(e, t) {
        if (null == e) return {};
        var r, n, i = {},
          o = Object.getOwnPropertyNames(e);
        for (n = 0; n < o.length; n++) r = o[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
        return i
      }(e, t), Object.getOwnPropertySymbols)
      for (i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) n = r[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
    return o
  }(e, ["subscriptionId", "invitedUser", "subscriptionGroupMemberId", "onClose"]), [w, E] = (0, i.useState)(false), [S, C] = (0, i.useState)(false), [v, h] = (0, i.useState)(false);
  (0, c.Ay)(() => {
    u.default.track(f.HAw.PREMIUM_GROUP_CANCEL_INVITE_MODAL_VIEWED, {
      subscription_id: P,
      invited_user_id: _.id
    })
  });
  let k = async () => {
    u.default.track(f.HAw.PREMIUM_GROUP_CANCEL_INVITE_CTA_CLICKED, {
      subscription_id: P,
      invited_user_id: _.id
    }), h(true);
    let e = await (0, b.kE)(P, _.id, j);
    if (h(false), e.ok) m();
    else {
      var t;
      (null == (t = e.body) ? true : t.code) === d.Hy.BILLING_SUBSCRIPTION_GROUP_INVITE_ALREADY_ACCEPTED ? E(true) : C(true)
    }
  };
  return w ? (0, n.jsx)(o.Modal, g({
    size: "md",
    title: y.intl.string(O.default.grjTat),
    subtitle: y.intl.string(O.default.VgTgGu),
    actions: [{
      text: y.intl.string(O.default["+YO9kw"]),
      variant: "secondary",
      onClick: () => {
        (0, a.openUserSettings)(s.X.SUBSCRIPTIONS_PANEL, {
          section: f.nc_.SUBSCRIPTIONS
        }), m()
      }
    }],
    onClose: m
  }, I)) : (0, n.jsx)(o.Modal, (t = g({
    size: "md",
    title: y.intl.string(O.default.U439m2),
    subtitle: y.intl.formatToPlainString(O.default["Sv6+Ox"], {
      memberName: (0, p.$3)(_),
      premiumGroupProductName: (0, d.DP)()
    }),
    onClose: m,
    actions: [{
      text: y.intl.string(O.default["2blqtw"]),
      variant: "critical-primary",
      onClick: k,
      loading: v
    }]
  }, I), r = r = {
    children: S && (0, n.jsx)(l.wx6, {
      type: "critical",
      children: y.intl.string(y.t["rTU7/z"])
    })
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(r)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
  }), t))
}