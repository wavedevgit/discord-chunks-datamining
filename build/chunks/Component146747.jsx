/** Chunk was on 89675 **/
/** chunk id: 146747, original params: e,r,t (module,exports,require) **/
require.d(exports, {
  default: () => P
}), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk261203 = require("./261203.js"),
  Chunk478411 = require("./478411.js");

function h(e) {
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
let x = "premium-guild-subscription-upsell-modal-header";

function y(e) {
  let {
    title: r,
    subtitle: t,
    image: o
  } = e;
  return (0, n.jsxs)("div", {
    className: j.header,
    children: [(0, n.jsx)(a.Heading, {
      variant: "heading-xl/semibold",
      id: x,
      color: "text-strong",
      className: f.marginBottom8,
      children: r
    }), (0, n.jsx)(a.Text, {
      variant: "text-md/normal",
      className: j.subtitleText,
      children: t
    }), o]
  })
}
let O = e => {
    let {
      onClose: r,
      perks: t,
      perkIntro: o = g.intl.string(g.t.Dr3GoS),
      headerProps: s
    } = e;
    return (0, n.jsxs)("div", {
      className: j.wrapper,
      children: [(0, n.jsx)(a.olH, {
        "data-migration-pending": true,
        className: j.closeButton,
        onClick: () => {
          r()
        }
      }), (0, n.jsx)(k, {
        headerProps: s,
        perkIntro: o
      }), (0, n.jsx)("div", {
        className: j.perks,
        children: t.map((e, r) => {
          let {
            icon: t,
            iconClassName: o,
            description: a,
            color: s
          } = e;
          return (0, n.jsx)(u.Z, {
            icon: t,
            iconClassName: o,
            description: a,
            color: s
          }, r)
        })
      })]
    })
  },
  k = e => {
    let {
      headerProps: r,
      perkIntro: s
    } = e;
    return (0, n.jsxs)(o.Fragment, {
      children: [null != r ? (0, n.jsx)(y, h({}, r)) : (0, n.jsx)("img", {
        className: j.heroImage,
        src: t(438471),
        alt: g.intl.string(g.t.PkcaAH)
      }), (0, n.jsx)(a.Text, {
        variant: "text-md/normal",
        className: j.heading,
        children: s
      })]
    })
  },
  v = e => {
    let {
      guild: r,
      targetBoostedGuildTier: t,
      onClose: o,
      analyticsSourceLocation: s
    } = e, i = {
      section: m.jXE.PREMIUM_GUILD_UPSELL_MODAL,
      object: m.qAy.BUTTON_CTA,
      objectType: null != t ? (0, d.ge)(t) : null
    };
    return (0, n.jsxs)(a.mzw, {
      className: j.footer,
      "data-migration-pending": true,
      children: [(0, n.jsx)(a.Button, {
        variant: "secondary",
        size: "sm",
        text: g.intl.string(g.t.cpT0Cq),
        onClick: () => {
          o()
        }
      }), (0, n.jsx)(b.Z, {
        analyticsLocation: i,
        analyticsSourceLocation: s,
        guild: r,
        targetBoostedGuildTier: t,
        onClose: () => {
          o()
        }
      })]
    })
  };

function P(e) {
  var r, t, {
      analyticsSourceLocation: o,
      guild: u,
      targetBoostedGuildTier: d,
      perks: b,
      perkIntro: m,
      headerProps: g,
      onClose: j
    } = e,
    f = function(e, r) {
      if (null == e) return {};
      var t, n, o = function(e, r) {
        if (null == e) return {};
        var t, n, o = {},
          a = Object.keys(e);
        for (n = 0; n < a.length; n++) t = a[n], r.indexOf(t) >= 0 || (o[t] = e[t]);
        return o
      }(e, r);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (n = 0; n < a.length; n++) t = a[n], !(r.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
      }
      return o
    }(e, ["analyticsSourceLocation", "guild", "targetBoostedGuildTier", "perks", "perkIntro", "headerProps", "onClose"]);
  let {
    analyticsLocations: y
  } = (0, i.ZP)(s.Z.ACTIVITY_DIRECTORY);
  return (0, n.jsx)(i.Gt, {
    value: y,
    children: (0, n.jsx)(c.PaymentContextProvider, {
      activeSubscription: null,
      stepConfigs: [],
      skuIDs: [],
      children: (0, n.jsx)(a.Y0X, (r = h({}, f), t = t = {
        "aria-labelledby": x,
        "data-migration-pending": true,
        parentComponent: "GuildBoostingUpsellModal",
        children: (0, n.jsx)(p.Z, {
          hideBreadcrumbs: true,
          body: (0, n.jsx)(O, {
            onClose: j,
            perks: b,
            perkIntro: m,
            headerProps: g
          }),
          footer: (0, n.jsx)(v, {
            guild: u,
            targetBoostedGuildTier: d,
            onClose: j,
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