/** Chunk was on web.js **/
/** chunk id: 954821, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  h: () => S
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

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      b(e, t, n[t])
    })
  }
  return e
}
let O = 440,
  v = "MMMM Do, YYYY",
  I = e => {
    let [t, n] = i.useState(false), [r, o] = i.useState(null);
    return {
      cancelSubscription: async t => {
        try {
          return n(true), await c.EO(t, e), true
        } catch (e) {
          o(e)
        } finally {
          n(false)
        }
      },
      error: r,
      submitting: t
    }
  },
  T = e => {
    var t;
    let {
      transitionState: n,
      groupListing: i,
      guildId: o,
      listing: c,
      subscription: b,
      onClose: y
    } = e, T = (0, f.Dt)(), S = (0, p.YB)(o), A = (null == S || null == (t = S.cover_image_asset) ? true : t.application_id) != null ? (0, _._W)(S.cover_image_asset.application_id, S.cover_image_asset, O) : true, {
      analyticsLocations: C
    } = (0, d.ZP)(u.Z.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL), {
      cancelSubscription: N,
      error: R,
      submitting: P
    } = I(C), w = async () => {
      await N(b.id) && y()
    }, D = c.role_benefits.benefits.filter(e => e.ref_type === m.Qs.CHANNEL), x = c.role_benefits.benefits.filter(e => e.ref_type === m.Qs.INTANGIBLE), L = a()(b.currentPeriodEnd).format(v), j = g.intl.formatToPlainString(g.t.KsMRPz, {
      numChannels: D.length,
      numAdditionalBenefits: x.length,
      subscriptionEndDate: L
    });
    return (0, r.jsxs)(l.Y0X, {
      transitionState: n,
      className: E.__invalid_modal,
      "aria-labelledby": T,
      parentComponent: "CancelSubscriptionModal",
      children: [(0, r.jsxs)("div", {
        children: [(0, r.jsx)("img", {
          src: A,
          alt: "",
          className: E.headerImage
        }), (0, r.jsx)(l.olH, {
          withCircleBackground: true,
          className: E.closeButton,
          onClick: y
        })]
      }), null != R ? (0, r.jsx)(l.kzN, {
        children: R.message
      }) : null, (0, r.jsxs)(l.hzk, {
        className: E.content,
        children: [(0, r.jsx)(l.X6q, {
          id: T,
          variant: "text-md/medium",
          className: E.title,
          children: g.intl.string(g.t.O6l5tL)
        }), (0, r.jsx)(l.Text, {
          className: E.description,
          variant: "text-sm/normal",
          children: j
        }), (0, r.jsx)(h.c, {
          listingId: c.id,
          guildId: i.guild_id,
          className: E.benefits
        })]
      }), (0, r.jsxs)(l.mzw, {
        className: E.footer,
        children: [(0, r.jsx)(l.zxk, {
          variant: "critical-primary",
          text: g.intl.string(g.t.F6lUDA),
          onClick: w,
          loading: P
        }), (0, r.jsx)(s.zx, {
          look: s.zx.Looks.LINK,
          color: s.zx.Colors.WHITE,
          className: E.goBackButton,
          onClick: y,
          children: g.intl.string(g.t.EP6EPT)
        })]
      })]
    })
  },
  S = e => {
    (0, l.h7j)(t => (0, r.jsx)(T, y({}, t, e)))
  }