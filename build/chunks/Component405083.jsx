/** Chunk was on 7458 **/
/** chunk id: 405083, original params: e,t,r (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => b
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk355467 = require("./355467.js"),
  Chunk106976 = require("./106976.js"),
  Chunk703656 = require("./703656.js"),
  Chunk914010 = require("./914010.js"),
  Chunk563132 = require("./563132.jsx"),
  Chunk791785 = require("./791785.jsx"),
  Chunk981631 = require("./981631.js");

function b(e) {
  var t, r, {
      onClose: b,
      onComplete: f,
      forcesTransitionToGuild: s
    } = e,
    O = function(e, t) {
      if (null == e) return {};
      var r, n, o = function(e, t) {
        if (null == e) return {};
        var r, n, o = {},
          c = Object.keys(e);
        for (n = 0; n < c.length; n++) r = c[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
        return o
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var c = Object.getOwnPropertySymbols(e);
        for (n = 0; n < c.length; n++) r = c[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
      }
      return o
    }(e, ["onClose", "onComplete", "forcesTransitionToGuild"]);
  let {
    subscriptionMetadataRequest: y
  } = (0, u.JL)();
  return (0, n.jsx)(p.PaymentModal, (t = function(e) {
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
  }({}, O), r = r = {
    onComplete: f,
    onClose: e => {
      b(e);
      let t = null == y ? true : y.guild_id;
      e && null != t && (o.jg(), (0, c.i1)(t), null == f || f(), null != t && (s || i.Z.getGuildId() !== t) && (0, l.uL)(a.Z5c.CHANNEL(t)))
    },
    forceNewPaymentModal: true
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