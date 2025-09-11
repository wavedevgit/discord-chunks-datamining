/** Chunk was on 70830 **/
/** chunk id: 271267, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Q: () => p,
  Z: () => x
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk957011 = require("./957011.js"),
  Chunk587431 = require("./587431.jsx"),
  Chunk756066 = require("./756066.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk370191 = require("./370191.js"),
  Chunk270395 = require("./270395.js");

function g(e) {
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
let p = "role_subscriptions_eligibility_modal";

function f(e) {
  let {
    guild: t,
    eligibility: i,
    eligibilityLoading: l,
    eligibilityError: s,
    refreshEligibility: o
  } = e;
  return (0, r.jsx)(a.zxk, {
    variant: "expressive",
    onClick: function() {
      (0, a.ZDy)(async () => {
        let {
          default: e
        } = await n.e("21863").then(n.bind(n, 466501));
        return n => {
          var a, c;
          return (0, r.jsx)(e, (a = g({}, n), c = c = {
            eligibility: i,
            eligibilityLoading: l,
            eligibilityError: s,
            refreshEligibility: o,
            guildId: t.id
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(c)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(c)).forEach(function(e) {
            Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(c, e))
          }), a))
        }
      }, {
        modalKey: p
      })
    },
    size: "md",
    text: d.intl.string(d.t.NL5ZNT),
    icon: a.Mgn
  })
}

function h(e) {
  let {
    guild: t,
    checkboxText: n
  } = e, {
    canSubmitAcceptance: c,
    error: u,
    loading: m,
    submitAcceptTermsRequest: g
  } = (0, s.Z)(t.id), [p, f] = i.useState(false);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(l.$q, {
      onChange: function() {
        f(e => !e)
      },
      size: 20,
      type: l.M0.INVERTED,
      value: p,
      children: (0, r.jsx)(a.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: n
      })
    }), (0, r.jsx)(a.LZC, {
      size: 24
    }), (0, r.jsx)(a.zxk, {
      disabled: !p || !c,
      onClick: g,
      loading: m,
      variant: "expressive",
      text: d.intl.string(d.t.NL5ZNT)
    }), null != u && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(a.LZC, {
        size: 24
      }), (0, r.jsx)(o.Z, {
        children: u.getAnyErrorMessage()
      })]
    })]
  })
}

function b(e) {
  let {
    guild: t,
    monetizationEligibility: n
  } = e, {
    eligibilityLoading: i,
    eligibilityError: l,
    refreshEligibility: a,
    eligibility: s,
    eligibleForMonetization: o,
    acceptTermsCheckboxText: d,
    wasRejectedInV1: u
  } = n;
  return o ? u ? (0, r.jsx)(c.Z, g({}, n)) : (0, r.jsx)(h, {
    guild: t,
    checkboxText: d
  }) : (0, r.jsx)(f, {
    guild: t,
    eligibility: s,
    eligibilityLoading: i,
    eligibilityError: l,
    refreshEligibility: a
  })
}

function x(e) {
  let {
    guild: t,
    monetizationEligibility: n
  } = e;
  return (0, r.jsxs)("div", {
    className: u.ctaContainer,
    children: [(0, r.jsx)("img", {
      className: u.heroBanner,
      src: m,
      alt: d.intl.string(d.t.Af4klJ)
    }), (0, r.jsxs)("div", {
      className: u.ctaContent,
      children: [(0, r.jsx)(a.X6q, {
        variant: "heading-xl/semibold",
        color: "header-primary",
        children: d.intl.string(d.t.PqYfh4)
      }), (0, r.jsx)(a.LZC, {
        size: 12
      }), (0, r.jsx)(a.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        children: d.intl.string(d.t["41wkMT"])
      }), (0, r.jsx)(a.LZC, {
        size: 24
      }), (0, r.jsx)(b, {
        guild: t,
        monetizationEligibility: n
      })]
    })]
  })
}