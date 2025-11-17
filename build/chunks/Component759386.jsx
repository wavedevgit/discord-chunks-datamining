/** Chunk was on 86513 **/
/** chunk id: 759386, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  getApplicationPaymentSteps: () => p
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk409813 = require("./409813.js"),
  Chunk276442 = require("./276442.js"),
  Chunk961830 = require("./961830.jsx"),
  Chunk721165 = require("./721165.jsx"),
  Chunk519801 = require("./519801.jsx"),
  Chunk589771 = require("./589771.jsx"),
  Chunk883419 = require("./883419.jsx"),
  Chunk388032 = require("./388032.jsx");

function m(e) {
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

function p(e) {
  let {
    guildId: t,
    showBenefitsFirst: n
  } = e;
  return [{
    key: null,
    renderStep: e => (0, r.jsx)(c.Z, m({
      initialStep: n ? i.h8.BENEFITS : i.h8.REVIEW,
      guildId: t
    }, e))
  }, {
    key: i.h8.BENEFITS,
    renderStep: e => (0, r.jsx)(o.Z, m({}, e)),
    options: {
      useBreadcrumbLabel: () => d.intl.string(d.t["5LD2+B"])
    }
  }, {
    key: i.h8.ADD_PAYMENT_STEPS,
    renderStep: e => {
      var t, n;
      return (0, r.jsx)(l.J, (t = m({}, e), n = n = {
        breadcrumbSteps: [i.h8.ADD_PAYMENT_STEPS, i.h8.REVIEW, i.h8.CONFIRM]
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(n)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
      }), t))
    },
    options: {
      renderHeader: true
    }
  }, ...a.yp, {
    key: i.h8.REVIEW,
    renderStep: e => (0, r.jsx)(u.Z, m({
      backButtonEligible: !!n || true,
      prevStep: n ? i.h8.BENEFITS : true
    }, e)),
    options: {
      renderHeader: true,
      useBreadcrumbLabel: () => d.intl.string(d.t.QBnNHq)
    }
  }, {
    key: i.h8.CONFIRM,
    renderStep: e => (0, r.jsx)(s.Z, m({
      showBenefits: !n
    }, e))
  }]
}