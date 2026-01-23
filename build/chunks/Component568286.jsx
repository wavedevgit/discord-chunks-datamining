/** Chunk was on web.js **/
/** chunk id: 568286, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  q: () => v
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk989349 = require("./989349.js"),
  s = require.n(Chunk989349),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk384904 = require("./384904.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk915089 = require("./915089.js"),
  Chunk250253 = require("./250253.jsx"),
  Chunk2242 = require("./2242.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk289324 = require("./289324.js");

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
let y = "MMMM Do, YYYY",
  b = e => {
    let [t, n] = i.useState(false), [r, a] = i.useState(null);
    return {
      cancelSubscription: async t => {
        try {
          return n(true), await c.M2(t, e), true
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
    } = e, g = (0, f.GV)(), {
      analyticsLocations: E
    } = (0, d.Ay)(u.A.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL), {
      cancelSubscription: O,
      error: v,
      submitting: A
    } = b(E), I = async () => {
      await O(a.id) && c()
    }, S = i.role_benefits.benefits.filter(e => e.ref_type === _.bN.CHANNEL), T = i.role_benefits.benefits.filter(e => e.ref_type === _.bN.INTANGIBLE), C = s()(a.currentPeriodEnd).format(y), N = h.intl.formatToPlainString(h.t.KsMRP5, {
      numChannels: S.length,
      numAdditionalBenefits: T.length,
      subscriptionEndDate: C
    });
    return (0, r.jsx)(o.Modal, {
      transitionState: t,
      "aria-labelledby": g,
      actions: [{
        text: h.intl.string(h.t.EP6EPb),
        variant: "secondary",
        onClick: c
      }, {
        variant: "critical-primary",
        text: h.intl.string(h.t.F6lUDF),
        onClick: I,
        loading: A
      }],
      title: h.intl.string(h.t.O6l5tM),
      subtitle: N,
      onClose: c,
      children: (0, r.jsxs)(l.BJc, {
        gap: 8,
        children: [null != v ? (0, r.jsx)(l.wx6, {
          type: "critical",
          children: v.message
        }) : null, (0, r.jsx)(p.x, {
          listingId: i.id,
          guildId: n.guild_id,
          className: m.P
        })]
      })
    })
  },
  v = e => {
    (0, l.qfG)(t => (0, r.jsx)(O, E({}, t, e)))
  }