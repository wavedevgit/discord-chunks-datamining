/** Chunk was on 29679 **/
/** chunk id: 271267, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Q: () => g,
  Z: () => h
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk957011 = require("./957011.js"),
  Chunk756066 = require("./756066.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk370191 = require("./370191.js"),
  Chunk270395 = require("./270395.js");

function u(e) {
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
let g = "role_subscriptions_eligibility_modal";

function m(e) {
  let {
    guild: t,
    eligibility: i,
    eligibilityLoading: a,
    eligibilityError: s,
    refreshEligibility: c
  } = e;
  return (0, r.jsx)(l.Button, {
    variant: "expressive",
    onClick: function() {
      (0, l.ZDy)(async () => {
        let {
          default: e
        } = await n.e("21863").then(n.bind(n, 466501));
        return n => {
          var l, o;
          return (0, r.jsx)(e, (l = u({}, n), o = o = {
            eligibility: i,
            eligibilityLoading: a,
            eligibilityError: s,
            refreshEligibility: c,
            guildId: t.id
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(o)).forEach(function(e) {
            Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(o, e))
          }), l))
        }
      }, {
        modalKey: g
      })
    },
    size: "md",
    text: o.intl.string(o.t.NL5ZNS),
    icon: l.Mgn
  })
}

function p(e) {
  let {
    guild: t,
    checkboxText: n
  } = e, {
    canSubmitAcceptance: s,
    error: c,
    loading: d,
    submitAcceptTermsRequest: u
  } = (0, a.Z)(t.id), [g, m] = i.useState(false);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(l.Checkbox, {
      onChange: function() {
        m(e => !e)
      },
      checked: g,
      label: n
    }), (0, r.jsx)(l.LZC, {
      size: 24
    }), (0, r.jsx)(l.Button, {
      disabled: !g || !s,
      onClick: u,
      loading: d,
      variant: "expressive",
      text: o.intl.string(o.t.NL5ZNS)
    }), null != c && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(l.LZC, {
        size: 24
      }), (0, r.jsx)(l.M14, {
        type: "critical",
        children: c.getAnyErrorMessage()
      })]
    })]
  })
}

function f(e) {
  let {
    guild: t,
    monetizationEligibility: n
  } = e, {
    eligibilityLoading: i,
    eligibilityError: l,
    refreshEligibility: a,
    eligibility: o,
    eligibleForMonetization: c,
    acceptTermsCheckboxText: d,
    wasRejectedInV1: g
  } = n;
  return c ? g ? (0, r.jsx)(s.Z, u({}, n)) : (0, r.jsx)(p, {
    guild: t,
    checkboxText: d
  }) : (0, r.jsx)(m, {
    guild: t,
    eligibility: o,
    eligibilityLoading: i,
    eligibilityError: l,
    refreshEligibility: a
  })
}

function h(e) {
  let {
    guild: t,
    monetizationEligibility: n
  } = e;
  return (0, r.jsxs)("div", {
    className: c.ctaContainer,
    children: [(0, r.jsx)("img", {
      className: c.heroBanner,
      src: d,
      alt: o.intl.string(o.t.Af4klP)
    }), (0, r.jsxs)("div", {
      className: c.ctaContent,
      children: [(0, r.jsx)(l.Heading, {
        variant: "heading-xl/semibold",
        color: "header-primary",
        children: o.intl.string(o.t["PqYfh/"])
      }), (0, r.jsx)(l.LZC, {
        size: 12
      }), (0, r.jsx)(l.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        children: o.intl.string(o.t["41wkMc"])
      }), (0, r.jsx)(l.LZC, {
        size: 24
      }), (0, r.jsx)(f, {
        guild: t,
        monetizationEligibility: n
      })]
    })]
  })
}