/** Chunk was on 89675 **/
/** chunk id: 146747, original params: e,r,t (module,exports,require) **/
require.d(exports, {
  default: () => v
}), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk563132 = require("./563132.jsx"),
  Chunk409813 = require("./409813.js"),
  Chunk185139 = require("./185139.jsx"),
  Chunk263954 = require("./263954.jsx"),
  Chunk267642 = require("./267642.js"),
  Chunk678558 = require("./678558.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk707435 = require("./707435.js"),
  Chunk197571 = require("./197571.js");

function x(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {},
      n = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), n.forEach(function(r) {
      var n;
      n = t[r], r in e ? Object.defineProperty(e, r, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[r] = n
    })
  }
  return e
}
let f = "premium-guild-subscription-upsell-modal-header";

function y(e) {
  let {
    title: r,
    subtitle: t,
    image: o
  } = e;
  return (0, n.jsxs)("div", {
    className: g.header,
    children: [(0, n.jsx)(s.Heading, {
      variant: "heading-xl/semibold",
      id: f,
      color: "header-primary",
      className: h.marginBottom8,
      children: r
    }), (0, n.jsx)(s.Text, {
      variant: "text-md/normal",
      className: g.subtitleText,
      children: t
    }), o]
  })
}
let O = e => {
    let {
      onClose: r,
      perks: t,
      perkIntro: o = b.intl.string(b.t.Dr3GoS),
      headerProps: i
    } = e;
    return (0, n.jsxs)("div", {
      className: g.wrapper,
      children: [(0, n.jsx)(s.olH, {
        "data-migration-pending": true,
        className: g.closeButton,
        onClick: () => {
          r()
        }
      }), (0, n.jsx)(k, {
        headerProps: i,
        perkIntro: o
      }), (0, n.jsx)("div", {
        className: g.perks,
        children: t.map((e, r) => {
          let {
            icon: t,
            iconClassName: o,
            description: s,
            color: i
          } = e;
          return (0, n.jsx)(u.Z, {
            icon: t,
            iconClassName: o,
            description: s,
            color: i
          }, r)
        })
      })]
    })
  },
  k = e => {
    let {
      headerProps: r,
      perkIntro: i
    } = e;
    return (0, n.jsxs)(o.Fragment, {
      children: [null != r ? (0, n.jsx)(y, x({}, r)) : (0, n.jsx)("img", {
        className: g.heroImage,
        src: t(438471),
        alt: b.intl.string(b.t.PkcaAH)
      }), (0, n.jsx)(s.Text, {
        variant: "text-md/normal",
        className: g.heading,
        children: i
      })]
    })
  },
  _ = e => {
    let {
      guild: r,
      targetBoostedGuildTier: t,
      onClose: o,
      analyticsSourceLocation: i
    } = e, a = {
      section: j.jXE.PREMIUM_GUILD_UPSELL_MODAL,
      object: j.qAy.BUTTON_CTA,
      objectType: null != t ? (0, d.ge)(t) : null
    };
    return (0, n.jsxs)(s.mzw, {
      className: g.footer,
      "data-migration-pending": true,
      children: [(0, n.jsx)(s.Button, {
        variant: "secondary",
        size: "sm",
        text: b.intl.string(b.t.cpT0Cq),
        onClick: () => {
          o()
        }
      }), (0, n.jsx)(m.Z, {
        analyticsLocation: a,
        analyticsSourceLocation: i,
        guild: r,
        targetBoostedGuildTier: t,
        onClose: () => {
          o()
        }
      })]
    })
  };

function v(e) {
  var r, t, {
      analyticsSourceLocation: o,
      guild: u,
      targetBoostedGuildTier: d,
      perks: m,
      perkIntro: j,
      headerProps: b,
      onClose: g
    } = e,
    h = function(e, r) {
      if (null == e) return {};
      var t, n, o = function(e, r) {
        if (null == e) return {};
        var t, n, o = {},
          s = Object.keys(e);
        for (n = 0; n < s.length; n++) t = s[n], r.indexOf(t) >= 0 || (o[t] = e[t]);
        return o
      }(e, r);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for (n = 0; n < s.length; n++) t = s[n], !(r.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
      }
      return o
    }(e, ["analyticsSourceLocation", "guild", "targetBoostedGuildTier", "perks", "perkIntro", "headerProps", "onClose"]);
  let {
    analyticsLocations: y
  } = (0, a.ZP)(i.Z.ACTIVITY_DIRECTORY);
  return (0, n.jsx)(a.Gt, {
    value: y,
    children: (0, n.jsx)(c.PaymentContextProvider, {
      activeSubscription: null,
      stepConfigs: [],
      skuIDs: [],
      children: (0, n.jsx)(s.Y0X, (r = x({}, h), t = t = {
        "aria-labelledby": f,
        "data-migration-pending": true,
        parentComponent: "GuildBoostingUpsellModal",
        children: (0, n.jsx)(p.Z, {
          hideBreadcrumbs: true,
          body: (0, n.jsx)(O, {
            onClose: g,
            perks: m,
            perkIntro: j,
            headerProps: b
          }),
          footer: (0, n.jsx)(_, {
            guild: u,
            targetBoostedGuildTier: d,
            onClose: g,
            analyticsSourceLocation: o
          }),
          steps: [l.h8.PREMIUM_GUILD_UPSELL],
          currentStep: l.h8.PREMIUM_GUILD_UPSELL
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : (function(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t.push.apply(t, n)
        }
        return t
      })(Object(t)).forEach(function(e) {
        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(t, e))
      }), r))
    })
  })
}