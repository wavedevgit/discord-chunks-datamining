/** Chunk was on 40725 **/
/** chunk id: 271267, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Q: () => g,
  Z: () => b
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk957011 = require("./957011.js"),
  Chunk587431 = require("./587431.jsx"),
  Chunk756066 = require("./756066.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk52726 = require("./52726.js"),
  Chunk270395 = require("./270395.js");

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
let g = "role_subscriptions_eligibility_modal";

function p(e) {
  let {
    guild: t,
    eligibility: i,
    eligibilityLoading: a,
    eligibilityError: s,
    refreshEligibility: o
  } = e;
  return (0, r.jsx)(l.zxk, {
    variant: "expressive",
    onClick: function() {
      (0, l.ZDy)(async () => {
        let {
          default: e
        } = await n.e("21863").then(n.bind(n, 466501));
        return n => {
          var l, c;
          return (0, r.jsx)(e, (l = m({}, n), c = c = {
            eligibility: i,
            eligibilityLoading: a,
            eligibilityError: s,
            refreshEligibility: o,
            guildId: t.id
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(c)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(c)).forEach(function(e) {
            Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(c, e))
          }), l))
        }
      }, {
        modalKey: g
      })
    },
    size: "md",
    text: c.intl.string(c.t.NL5ZNT),
    icon: l.Mgn
  })
}

function h(e) {
  let {
    guild: t,
    checkboxText: n
  } = e, {
    canSubmitAcceptance: o,
    error: d,
    loading: u,
    submitAcceptTermsRequest: m
  } = (0, a.Z)(t.id), [g, p] = i.useState(false);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(l.XZJ, {
      onChange: function() {
        p(e => !e)
      },
      size: 20,
      type: l.XZJ.Types.INVERTED,
      value: g,
      children: (0, r.jsx)(l.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: n
      })
    }), (0, r.jsx)(l.LZC, {
      size: 24
    }), (0, r.jsx)(l.zxk, {
      disabled: !g || !o,
      onClick: m,
      loading: u,
      variant: "expressive",
      text: c.intl.string(c.t.NL5ZNT)
    }), null != d && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(l.LZC, {
        size: 24
      }), (0, r.jsx)(s.Z, {
        children: d.getAnyErrorMessage()
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
    eligibility: s,
    eligibleForMonetization: c,
    acceptTermsCheckboxText: d,
    wasRejectedInV1: u
  } = n;
  return c ? u ? (0, r.jsx)(o.Z, m({}, n)) : (0, r.jsx)(h, {
    guild: t,
    checkboxText: d
  }) : (0, r.jsx)(p, {
    guild: t,
    eligibility: s,
    eligibilityLoading: i,
    eligibilityError: l,
    refreshEligibility: a
  })
}

function b(e) {
  let {
    guild: t,
    monetizationEligibility: n
  } = e;
  return (0, r.jsxs)("div", {
    className: d.ctaContainer,
    children: [(0, r.jsx)("img", {
      className: d.heroBanner,
      src: u,
      alt: c.intl.string(c.t.Af4klJ)
    }), (0, r.jsxs)("div", {
      className: d.ctaContent,
      children: [(0, r.jsx)(l.X6q, {
        variant: "heading-xl/semibold",
        color: "header-primary",
        children: c.intl.string(c.t.PqYfh4)
      }), (0, r.jsx)(l.LZC, {
        size: 12
      }), (0, r.jsx)(l.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        children: c.intl.string(c.t["41wkMT"])
      }), (0, r.jsx)(l.LZC, {
        size: 24
      }), (0, r.jsx)(f, {
        guild: t,
        monetizationEligibility: n
      })]
    })]
  })
}