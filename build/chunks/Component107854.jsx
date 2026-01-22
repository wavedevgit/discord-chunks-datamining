/** Chunk was on 50243 **/
/** chunk id: 107854, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  getApplicationPaymentSteps: () => m
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk166532 = require("./166532.js"),
  Chunk735305 = require("./735305.js"),
  Chunk721252 = require("./721252.jsx"),
  Chunk924076 = require("./924076.jsx"),
  Chunk984742 = require("./984742.jsx"),
  Chunk155301 = require("./155301.jsx"),
  Chunk758655 = require("./758655.jsx"),
  Chunk985018 = require("./985018.jsx");

function p(e) {
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

function m(e) {
  let {
    guildId: t,
    showBenefitsFirst: n
  } = e;
  return [{
    key: null,
    renderStep: e => (0, r.jsx)(c.A, p({
      initialStep: n ? i.pn.BENEFITS : i.pn.REVIEW,
      guildId: t
    }, e))
  }, {
    key: i.pn.BENEFITS,
    renderStep: e => (0, r.jsx)(s.A, p({}, e)),
    options: {
      useBreadcrumbLabel: () => d.intl.string(d.t["5LD2+B"])
    }
  }, {
    key: i.pn.ADD_PAYMENT_STEPS,
    renderStep: e => {
      var t, n;
      return (0, r.jsx)(l.x, (t = p({}, e), n = n = {
        breadcrumbSteps: [i.pn.ADD_PAYMENT_STEPS, i.pn.REVIEW, i.pn.CONFIRM]
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
  }, ...a.hh, {
    key: i.pn.REVIEW,
    renderStep: e => (0, r.jsx)(u.A, p({
      backButtonEligible: !!n || true,
      prevStep: n ? i.pn.BENEFITS : true
    }, e)),
    options: {
      renderHeader: true,
      useBreadcrumbLabel: () => d.intl.string(d.t.QBnNHq)
    }
  }, {
    key: i.pn.CONFIRM,
    renderStep: e => (0, r.jsx)(o.A, p({
      showBenefits: !n
    }, e))
  }]
}