/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Q: () => g,
  Z: () => h
}), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(481060),
  a = n(957011),
  l = n(587431),
  o = n(756066),
  A = n(388032),
  c = n(105168),
  d = n(270395);

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
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r
    })
  }
  return e
}
let g = "role_subscriptions_eligibility_modal";

function f(e) {
  let {
    guild: t,
    eligibility: i,
    eligibilityLoading: a,
    eligibilityError: l,
    refreshEligibility: o
  } = e;
  return (0, r.jsxs)(s.zxk, {
    color: s.Ttl.CUSTOM,
    className: c.ineligibleButton,
    innerClassName: c.ineligibleButtonContent,
    grow: !0,
    onClick: function() {
      (0, s.ZDy)(async () => {
        let {
          default: e
        } = await n.e("21863").then(n.bind(n, 466501));
        return n => {
          var s, A;
          return (0, r.jsx)(e, (s = u({}, n), A = A = {
            eligibility: i,
            eligibilityLoading: a,
            eligibilityError: l,
            refreshEligibility: o,
            guildId: t.id
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(A)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(A)).forEach(function(e) {
            Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(A, e))
          }), s))
        }
      }, {
        modalKey: g
      })
    },
    size: s.zxk.Sizes.LARGE,
    children: [(0, r.jsx)(s.P4T, {
      size: "xs",
      color: "currentColor"
    }), A.NW.string(A.t.NL5ZNT)]
  })
}

function m(e) {
  let {
    guild: t,
    checkboxText: n
  } = e, {
    canSubmitAcceptance: o,
    error: d,
    loading: u,
    submitAcceptTermsRequest: g
  } = (0, a.Z)(t.id), [f, m] = i.useState(!1);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(s.XZJ, {
      onChange: function() {
        m(e => !e)
      },
      size: 20,
      type: s.XZJ.Types.INVERTED,
      value: f,
      children: (0, r.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: n
      })
    }), (0, r.jsx)(s.LZC, {
      size: 24
    }), (0, r.jsx)(s.zxk, {
      className: c.ctaButton,
      disabled: !f || !o,
      grow: !0,
      onClick: g,
      size: s.zxk.Sizes.LARGE,
      submitting: u,
      children: A.NW.string(A.t.NL5ZNT)
    }), null != d && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(s.LZC, {
        size: 24
      }), (0, r.jsx)(l.Z, {
        children: d.getAnyErrorMessage()
      })]
    })]
  })
}

function p(e) {
  let {
    guild: t,
    monetizationEligibility: n
  } = e, {
    eligibilityLoading: i,
    eligibilityError: s,
    refreshEligibility: a,
    eligibility: l,
    eligibleForMonetization: A,
    acceptTermsCheckboxText: c,
    wasRejectedInV1: d
  } = n;
  return A ? d ? (0, r.jsx)(o.Z, u({}, n)) : (0, r.jsx)(m, {
    guild: t,
    checkboxText: c
  }) : (0, r.jsx)(f, {
    guild: t,
    eligibility: l,
    eligibilityLoading: i,
    eligibilityError: s,
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
      alt: A.NW.string(A.t.Af4klJ)
    }), (0, r.jsxs)("div", {
      className: c.ctaContent,
      children: [(0, r.jsx)(s.X6q, {
        variant: "heading-xl/semibold",
        color: "header-primary",
        children: A.NW.string(A.t.PqYfh4)
      }), (0, r.jsx)(s.LZC, {
        size: 12
      }), (0, r.jsx)(s.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        children: A.NW.string(A.t["41wkMT"])
      }), (0, r.jsx)(s.LZC, {
        size: 24
      }), (0, r.jsx)(p, {
        guild: t,
        monetizationEligibility: n
      })]
    })]
  })
}