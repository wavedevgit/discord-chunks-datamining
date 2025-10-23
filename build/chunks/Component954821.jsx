/** Chunk was on web.js **/
/** chunk id: 954821, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  h: () => v
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk913527 = require("./913527.js"),
  o = require.n(Chunk913527),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk355467 = require("./355467.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk305342 = require("./305342.jsx"),
  Chunk293810 = require("./293810.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk640749 = require("./640749.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      g(e, t, n[t])
    })
  }
  return e
}
let b = "MMMM Do, YYYY",
  y = e => {
    let [t, n] = i.useState(false), [r, a] = i.useState(null);
    return {
      cancelSubscription: async t => {
        try {
          return n(true), await c.EO(t, e), true
        } catch (e) {
          a(e)
        } finally {
          n(false)
        }
      },
      error: r,
      submitting: t
    }
  },
  O = e => {
    let {
      transitionState: t,
      groupListing: n,
      listing: i,
      subscription: a,
      onClose: c
    } = e, g = (0, f.Dt)(), {
      analyticsLocations: E
    } = (0, d.ZP)(u.Z.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL), {
      cancelSubscription: O,
      error: v,
      submitting: I
    } = y(E), T = async () => {
      await O(a.id) && c()
    }, S = i.role_benefits.benefits.filter(e => e.ref_type === p.Qs.CHANNEL), A = i.role_benefits.benefits.filter(e => e.ref_type === p.Qs.INTANGIBLE), C = o()(a.currentPeriodEnd).format(b), N = h.intl.formatToPlainString(h.t.KsMRP5, {
      numChannels: S.length,
      numAdditionalBenefits: A.length,
      subscriptionEndDate: C
    });
    return (0, r.jsx)(s.Modal, {
      transitionState: t,
      "aria-labelledby": g,
      actions: [{
        text: h.intl.string(h.t.EP6EPb),
        variant: "secondary",
        onClick: c
      }, {
        variant: "critical-primary",
        text: h.intl.string(h.t.F6lUDF),
        onClick: T,
        loading: I
      }],
      title: h.intl.string(h.t.O6l5tM),
      subtitle: N,
      onClose: c,
      children: (0, r.jsxs)(l.Kqy, {
        gap: 8,
        children: [null != v ? (0, r.jsx)(l.M14, {
          type: "critical",
          children: v.message
        }) : null, (0, r.jsx)(_.c, {
          listingId: i.id,
          guildId: n.guild_id,
          className: m.benefits
        })]
      })
    })
  },
  v = e => {
    (0, l.h7j)(t => (0, r.jsx)(O, E({}, t, e)))
  }