/** Chunk was on 2827 **/
/** chunk id: 568286, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  q: () => b
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
let f = e => {
    let {
      transitionState: t,
      groupListing: n,
      listing: l,
      subscription: f,
      onClose: b
    } = e, h = (0, _.GV)(), {
      analyticsLocations: E
    } = (0, u.Ay)(d.A.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL), {
      cancelSubscription: O,
      error: C,
      submitting: x
    } = (e => {
      let [t, n] = i.useState(false), [r, l] = i.useState(null);
      return {
        cancelSubscription: async t => {
          try {
            return n(true), await c.M2(t, e), true
          } catch (e) {
            l(e)
          } finally {
            n(false)
          }
        },
        error: r,
        submitting: t
      }
    })(E), S = async () => {
      await O(f.id) && b()
    }, T = l.role_benefits.benefits.filter(e => e.ref_type === m.bN.CHANNEL), I = l.role_benefits.benefits.filter(e => e.ref_type === m.bN.INTANGIBLE), y = s()(f.currentPeriodEnd).format("MMMM Do, YYYY"), N = g.intl.formatToPlainString(g.t.KsMRP5, {
      numChannels: T.length,
      numAdditionalBenefits: I.length,
      subscriptionEndDate: y
    });
    return (0, r.jsx)(a.Modal, {
      transitionState: t,
      "aria-labelledby": h,
      actions: [{
        text: g.intl.string(g.t.EP6EPb),
        variant: "secondary",
        onClick: b
      }, {
        variant: "critical-primary",
        text: g.intl.string(g.t.F6lUDF),
        onClick: S,
        loading: x
      }],
      title: g.intl.string(g.t.O6l5tM),
      subtitle: N,
      onClose: b,
      children: (0, r.jsxs)(o.BJc, {
        gap: 8,
        children: [null != C ? (0, r.jsx)(o.wx6, {
          type: "critical",
          children: C.message
        }) : null, (0, r.jsx)(p.x, {
          listingId: l.id,
          guildId: n.guild_id,
          className: A.P
        })]
      })
    })
  },
  b = e => {
    (0, o.qfG)(t => (0, r.jsx)(f, function(e) {
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
    }({}, t, e)))
  }