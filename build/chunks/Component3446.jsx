/** Chunk was on 92326 **/
/** chunk id: 3446, original params: t,e,r (module,exports,require) **/
require.d(exports, {
  default: () => y
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk807163 = require("./807163.jsx"),
  Chunk80721 = require("./80721.js"),
  Chunk474936 = require("./474936.js"),
  Chunk282793 = require("./282793.js"),
  Chunk137427 = require("./137427.js"),
  Chunk388032 = require("./388032.jsx");

function f(t) {
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

function m(t, e) {
  return e = null != e ? e : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : (function(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(t);
      r.push.apply(r, n)
    }
    return r
  })(Object(e)).forEach(function(r) {
    Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r))
  }), t
}

function b(t, e) {
  if (null == t) return {};
  var r, n, o = function(t, e) {
    if (null == t) return {};
    var r, n, o = {},
      i = Object.keys(t);
    for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || (o[r] = t[r]);
    return o
  }(t, e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (n = 0; n < i.length; n++) r = i[n], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
  }
  return o
}
let O = t => {
    var {
      onClose: e,
      currentUser: r,
      onNext: o
    } = t, a = b(t, ["onClose", "currentUser", "onNext"]);
    return (0, n.jsx)(i.Modal, m(f({
      title: p.intl.formatToPlainString(u.default["4e7WtF"], {
        premiumGroupProductName: (0, c.sO)()
      }),
      subtitle: p.intl.formatToPlainString(u.default["3kVEg0"], {
        cooldownMonths: c.T9
      }),
      onClose: e
    }, a), {
      actions: [{
        text: p.intl.string(u.default.UFHNtO),
        variant: "secondary",
        onClick: e
      }, {
        text: p.intl.string(p.t["3PatSz"]),
        variant: "primary",
        onClick: o
      }],
      children: (0, n.jsx)(l.g, {
        currentUser: r,
        premiumType: s.PremiumTypes.TIER_2,
        onClose: e,
        isDowngrade: false,
        isPremiumRebrand: true
      })
    }))
  },
  d = t => {
    var {
      onClose: e,
      onConfirm: r,
      isRemovingUser: o
    } = t, l = b(t, ["onClose", "onConfirm", "isRemovingUser"]);
    return (0, n.jsx)(i.Modal, f({
      size: "md",
      title: p.intl.formatToPlainString(u.default.IrvJHs, {
        premiumGroupProductName: (0, c.sO)()
      }),
      subtitle: p.intl.formatToPlainString(u.default.cQDYKU, {
        premiumGroupProductName: (0, c.sO)(),
        cooldownMonths: c.T9
      }),
      onClose: e,
      actions: [{
        text: p.intl.string(u.default.UFHNtO),
        variant: "secondary",
        onClick: e
      }, {
        text: p.intl.string(p.t["cY+Oob"]),
        variant: "critical-primary",
        onClick: r,
        loading: o
      }]
    }, l))
  },
  y = t => {
    var {
      premiumGroupSubscriptionId: e,
      currentUser: r,
      onClose: i
    } = t, l = b(t, ["premiumGroupSubscriptionId", "currentUser", "onClose"]);
    let [s, c] = o.useState(1), [u, p] = o.useState(false), y = async () => {
      p(true), await (0, a.Jn)(e, r.id), p(false), i()
    };
    return 1 === s ? (0, n.jsx)(O, m(f({}, l), {
      onNext: () => c(2),
      currentUser: r,
      onClose: i
    })) : 2 === s ? (0, n.jsx)(d, m(f({}, l), {
      onConfirm: y,
      onClose: i,
      isRemovingUser: u
    })) : null
  }