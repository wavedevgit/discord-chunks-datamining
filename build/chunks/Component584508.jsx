/** Chunk was on 47841 **/
/** chunk id: 584508, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => p,
  m: () => f
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk635582 = require("./635582.js"),
  Chunk139637 = require("./139637.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk829050 = require("./829050.js"),
  Chunk584643 = require("./584643.js");

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
let f = "role_subscriptions_eligibility_modal";

function g(e) {
  let {
    guild: t,
    eligibility: i,
    eligibilityLoading: s,
    eligibilityError: a,
    refreshEligibility: o
  } = e;
  return (0, r.jsx)(l.Button, {
    variant: "expressive",
    onClick: function() {
      (0, l.mMO)(async () => {
        let {
          default: e
        } = await n.e("91699").then(n.bind(n, 561406));
        return n => {
          var l, c;
          return (0, r.jsx)(e, (l = u({}, n), c = c = {
            eligibility: i,
            eligibilityLoading: s,
            eligibilityError: a,
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
        modalKey: f
      })
    },
    size: "md",
    text: c.intl.string(c.t.NL5ZNS),
    icon: l.EpV
  })
}

function b(e) {
  let {
    guild: t,
    checkboxText: n
  } = e, {
    canSubmitAcceptance: a,
    error: o,
    loading: d,
    submitAcceptTermsRequest: u
  } = (0, s.A)(t.id), [f, g] = i.useState(false);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(l.Checkbox, {
      onChange: function() {
        g(e => !e)
      },
      checked: f,
      label: n
    }), (0, r.jsx)(l.hKd, {
      size: 24
    }), (0, r.jsx)(l.Button, {
      disabled: !f || !a,
      onClick: u,
      loading: d,
      variant: "expressive",
      text: c.intl.string(c.t.NL5ZNS)
    }), null != o && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(l.hKd, {
        size: 24
      }), (0, r.jsx)(l.wx6, {
        type: "critical",
        children: o.getAnyErrorMessage()
      })]
    })]
  })
}

function m(e) {
  let {
    guild: t,
    monetizationEligibility: n
  } = e, {
    eligibilityLoading: i,
    eligibilityError: l,
    refreshEligibility: s,
    eligibility: c,
    eligibleForMonetization: o,
    acceptTermsCheckboxText: d,
    wasRejectedInV1: f
  } = n;
  return o ? f ? (0, r.jsx)(a.A, u({}, n)) : (0, r.jsx)(b, {
    guild: t,
    checkboxText: d
  }) : (0, r.jsx)(g, {
    guild: t,
    eligibility: c,
    eligibilityLoading: i,
    eligibilityError: l,
    refreshEligibility: s
  })
}

function p(e) {
  let {
    guild: t,
    monetizationEligibility: n
  } = e;
  return (0, r.jsxs)("div", {
    className: o.OQ,
    children: [(0, r.jsx)("img", {
      className: o.hV,
      src: d,
      alt: c.intl.string(c.t.Af4klP)
    }), (0, r.jsxs)("div", {
      className: o.mv,
      children: [(0, r.jsx)(l.Heading, {
        variant: "heading-xl/semibold",
        color: "text-strong",
        children: c.intl.string(c.t["PqYfh/"])
      }), (0, r.jsx)(l.hKd, {
        size: 12
      }), (0, r.jsx)(l.Text, {
        variant: "text-md/normal",
        color: "text-default",
        children: c.intl.string(c.t["41wkMc"])
      }), (0, r.jsx)(l.hKd, {
        size: 24
      }), (0, r.jsx)(m, {
        guild: t,
        monetizationEligibility: n
      })]
    })]
  })
}