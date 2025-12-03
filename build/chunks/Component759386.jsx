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
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
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
    renderStep: e => (0, i.jsx)(c.Z, m({
      initialStep: n ? r.h8.BENEFITS : r.h8.REVIEW,
      guildId: t
    }, e))
  }, {
    key: r.h8.BENEFITS,
    renderStep: e => (0, i.jsx)(o.Z, m({}, e)),
    options: {
      useBreadcrumbLabel: () => d.intl.string(d.t["5LD2+B"])
    }
  }, {
    key: r.h8.ADD_PAYMENT_STEPS,
    renderStep: e => {
      var t, n;
      return (0, i.jsx)(l.J, (t = m({}, e), n = n = {
        breadcrumbSteps: [r.h8.ADD_PAYMENT_STEPS, r.h8.REVIEW, r.h8.CONFIRM]
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          n.push.apply(n, i)
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
    key: r.h8.REVIEW,
    renderStep: e => (0, i.jsx)(u.Z, m({
      backButtonEligible: !!n || true,
      prevStep: n ? r.h8.BENEFITS : true
    }, e)),
    options: {
      renderHeader: true,
      useBreadcrumbLabel: () => d.intl.string(d.t.QBnNHq)
    }
  }, {
    key: r.h8.CONFIRM,
    renderStep: e => (0, i.jsx)(s.Z, m({
      showBenefits: !n
    }, e))
  }]
}