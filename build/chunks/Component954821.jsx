/** Chunk was on 20501 **/
/** chunk id: 954821, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  h: () => E
}), require("./388685.js"), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk545518 = require("./545518.js");
let _ = e => {
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
  },
  j = e => {
    var t;
    let {
      transitionState: n,
      groupListing: r,
      guildId: s,
      listing: c,
      subscription: j,
      onClose: E
    } = e, C = (0, m.Dt)(), O = (0, g.YB)(s), v = (null == O || null == (t = O.cover_image_asset) ? true : t.application_id) != null ? (0, p._W)(O.cover_image_asset.application_id, O.cover_image_asset, 440) : true, {
      analyticsLocations: S
    } = (0, u.ZP)(d.Z.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL), {
      cancelSubscription: T,
      error: I,
      submitting: N
    } = _(S), y = async () => {
      await T(j.id) && E()
    }, A = c.role_benefits.benefits.filter(e => e.ref_type === f.Qs.CHANNEL), P = c.role_benefits.benefits.filter(e => e.ref_type === f.Qs.INTANGIBLE), R = a()(j.currentPeriodEnd).format("MMMM Do, YYYY"), D = b.intl.formatToPlainString(b.t.KsMRPz, {
      numChannels: A.length,
      numAdditionalBenefits: P.length,
      subscriptionEndDate: R
    });
    return (0, i.jsxs)(o.Y0X, {
      transitionState: n,
      className: x.__invalid_modal,
      "aria-labelledby": C,
      parentComponent: "CancelSubscriptionModal",
      children: [(0, i.jsxs)("div", {
        children: [(0, i.jsx)("img", {
          src: v,
          alt: "",
          className: x.headerImage
        }), (0, i.jsx)(o.olH, {
          withCircleBackground: true,
          className: x.closeButton,
          onClick: E
        })]
      }), null != I ? (0, i.jsx)(o.kzN, {
        children: I.message
      }) : null, (0, i.jsxs)(o.hzk, {
        className: x.content,
        children: [(0, i.jsx)(o.X6q, {
          id: C,
          variant: "text-md/medium",
          className: x.title,
          children: b.intl.string(b.t.O6l5tL)
        }), (0, i.jsx)(o.Text, {
          className: x.description,
          variant: "text-sm/normal",
          children: D
        }), (0, i.jsx)(h.c, {
          listingId: c.id,
          guildId: r.guild_id,
          className: x.benefits
        })]
      }), (0, i.jsxs)(o.mzw, {
        className: x.footer,
        children: [(0, i.jsx)(o.zxk, {
          variant: "critical-primary",
          text: b.intl.string(b.t.F6lUDA),
          onClick: y,
          loading: N
        }), (0, i.jsx)(l.zx, {
          look: l.zx.Looks.LINK,
          color: l.zx.Colors.WHITE,
          className: x.goBackButton,
          onClick: E,
          children: b.intl.string(b.t.EP6EPT)
        })]
      })]
    })
  },
  E = e => {
    (0, o.h7j)(t => (0, i.jsx)(j, function(e) {
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