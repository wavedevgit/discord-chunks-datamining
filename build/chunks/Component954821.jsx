/** Chunk was on 30202 **/
/** chunk id: 954821, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  h: () => j
}), require("./388685.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk913527 = require("./913527.js"),
  a = require.n(Chunk913527),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk355467 = require("./355467.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk73346 = require("./73346.js"),
  Chunk584825 = require("./584825.js"),
  Chunk305342 = require("./305342.jsx"),
  Chunk293810 = require("./293810.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk640749 = require("./640749.js");
let _ = e => {
    var t;
    let {
      transitionState: n,
      groupListing: s,
      guildId: _,
      listing: j,
      subscription: E,
      onClose: C
    } = e, O = (0, m.Dt)(), v = (0, g.YB)(_), S = (null == v || null == (t = v.cover_image_asset) ? true : t.application_id) != null ? (0, p._W)(v.cover_image_asset.application_id, v.cover_image_asset, 440) : true, {
      analyticsLocations: T
    } = (0, u.ZP)(d.Z.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL), {
      cancelSubscription: N,
      error: I,
      submitting: y
    } = (e => {
      let [t, n] = r.useState(false), [i, s] = r.useState(null);
      return {
        cancelSubscription: async t => {
          try {
            return n(true), await c.EO(t, e), true
          } catch (e) {
            s(e)
          } finally {
            n(false)
          }
        },
        error: i,
        submitting: t
      }
    })(T), A = async () => {
      await N(E.id) && C()
    }, P = j.role_benefits.benefits.filter(e => e.ref_type === f.Qs.CHANNEL), R = j.role_benefits.benefits.filter(e => e.ref_type === f.Qs.INTANGIBLE), D = a()(E.currentPeriodEnd).format("MMMM Do, YYYY"), Z = b.intl.formatToPlainString(b.t.KsMRPz, {
      numChannels: P.length,
      numAdditionalBenefits: R.length,
      subscriptionEndDate: D
    });
    return (0, i.jsxs)(o.Y0X, {
      transitionState: n,
      className: x.__invalid_modal,
      "aria-labelledby": O,
      parentComponent: "CancelSubscriptionModal",
      children: [(0, i.jsxs)("div", {
        children: [(0, i.jsx)("img", {
          src: S,
          alt: "",
          className: x.headerImage
        }), (0, i.jsx)(o.olH, {
          withCircleBackground: true,
          className: x.closeButton,
          onClick: C
        })]
      }), null != I ? (0, i.jsx)(o.kzN, {
        children: I.message
      }) : null, (0, i.jsxs)(o.hzk, {
        className: x.content,
        children: [(0, i.jsx)(o.X6q, {
          id: O,
          variant: "text-md/medium",
          className: x.title,
          children: b.intl.string(b.t.O6l5tL)
        }), (0, i.jsx)(o.Text, {
          className: x.description,
          variant: "text-sm/normal",
          children: Z
        }), (0, i.jsx)(h.c, {
          listingId: j.id,
          guildId: s.guild_id,
          className: x.benefits
        })]
      }), (0, i.jsxs)(o.mzw, {
        className: x.footer,
        children: [(0, i.jsx)(o.zxk, {
          variant: "critical-primary",
          text: b.intl.string(b.t.F6lUDA),
          onClick: A,
          loading: y
        }), (0, i.jsx)(l.zx, {
          look: l.zx.Looks.LINK,
          color: l.zx.Colors.WHITE,
          className: x.goBackButton,
          onClick: C,
          children: b.intl.string(b.t.EP6EPT)
        })]
      })]
    })
  },
  j = e => {
    (0, o.h7j)(t => (0, i.jsx)(_, function(e) {
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
    }({}, t, e)))
  }