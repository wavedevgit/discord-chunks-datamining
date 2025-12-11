/** Chunk was on 89675 **/
/** chunk id: 146747, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => k
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

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}
let y = "premium-guild-subscription-upsell-modal-header";

function x(e) {
  let {
    title: t,
    subtitle: r,
    image: a
  } = e;
  return (0, n.jsxs)("div", {
    className: j.header,
    children: [(0, n.jsx)(o.Heading, {
      variant: "heading-xl/semibold",
      id: y,
      color: "header-primary",
      className: h.marginBottom8,
      children: t
    }), (0, n.jsx)(o.Text, {
      variant: "text-md/normal",
      className: j.subtitleText,
      children: r
    }), a]
  })
}
let O = e => {
    let {
      onClose: t,
      perks: r,
      perkIntro: a = m.intl.string(m.t.Dr3GoS),
      headerProps: s
    } = e;
    return (0, n.jsxs)("div", {
      className: j.wrapper,
      children: [(0, n.jsx)(o.olH, {
        "data-migration-pending": true,
        className: j.closeButton,
        onClick: () => {
          t()
        }
      }), (0, n.jsx)(P, {
        headerProps: s,
        perkIntro: a
      }), (0, n.jsx)("div", {
        className: j.perks,
        children: r.map((e, t) => {
          let {
            icon: r,
            iconClassName: a,
            description: o,
            color: s
          } = e;
          return (0, n.jsx)(p.Z, {
            icon: r,
            iconClassName: a,
            description: o,
            color: s
          }, t)
        })
      })]
    })
  },
  P = e => {
    let {
      headerProps: t,
      perkIntro: s
    } = e;
    return (0, n.jsxs)(a.Fragment, {
      children: [null != t ? (0, n.jsx)(x, f({}, t)) : (0, n.jsx)("img", {
        className: j.heroImage,
        src: r(438471),
        alt: m.intl.string(m.t.PkcaAH)
      }), (0, n.jsx)(o.Text, {
        variant: "text-md/normal",
        className: j.heading,
        children: s
      })]
    })
  },
  v = e => {
    let {
      guild: t,
      targetBoostedGuildTier: r,
      onClose: a,
      analyticsSourceLocation: s
    } = e, i = {
      section: g.jXE.PREMIUM_GUILD_UPSELL_MODAL,
      object: g.qAy.BUTTON_CTA,
      objectType: null != r ? (0, d.ge)(r) : null
    };
    return (0, n.jsxs)(o.mzw, {
      className: j.footer,
      "data-migration-pending": true,
      children: [(0, n.jsx)(o.Button, {
        variant: "secondary",
        size: "sm",
        text: m.intl.string(m.t.cpT0Cq),
        onClick: () => {
          a()
        }
      }), (0, n.jsx)(b.Z, {
        analyticsLocation: i,
        analyticsSourceLocation: s,
        guild: t,
        targetBoostedGuildTier: r,
        onClose: () => {
          a()
        }
      })]
    })
  };

function k(e) {
  var t, r, {
      analyticsSourceLocation: a,
      guild: p,
      targetBoostedGuildTier: d,
      perks: b,
      perkIntro: g,
      headerProps: m,
      onClose: j
    } = e,
    h = function(e, t) {
      if (null == e) return {};
      var r, n, a = function(e, t) {
        if (null == e) return {};
        var r, n, a = {},
          o = Object.keys(e);
        for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
        return a
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (n = 0; n < o.length; n++) r = o[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
      }
      return a
    }(e, ["analyticsSourceLocation", "guild", "targetBoostedGuildTier", "perks", "perkIntro", "headerProps", "onClose"]);
  let {
    analyticsLocations: x
  } = (0, i.ZP)(s.Z.ACTIVITY_DIRECTORY);
  return (0, n.jsx)(i.Gt, {
    value: x,
    children: (0, n.jsx)(l.PaymentContextProvider, {
      activeSubscription: null,
      stepConfigs: [],
      skuIDs: [],
      children: (0, n.jsx)(o.Y0X, (t = f({}, h), r = r = {
        "aria-labelledby": y,
        "data-migration-pending": true,
        parentComponent: "GuildBoostingUpsellModal",
        children: (0, n.jsx)(u.Z, {
          hideBreadcrumbs: true,
          body: (0, n.jsx)(O, {
            onClose: j,
            perks: b,
            perkIntro: g,
            headerProps: m
          }),
          footer: (0, n.jsx)(v, {
            guild: p,
            targetBoostedGuildTier: d,
            onClose: j,
            analyticsSourceLocation: a
          }),
          steps: [c.h8.PREMIUM_GUILD_UPSELL],
          currentStep: c.h8.PREMIUM_GUILD_UPSELL
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r.push.apply(r, n)
        }
        return r
      })(Object(r)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
      }), t))
    })
  })
}