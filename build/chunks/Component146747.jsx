/** Chunk was on 89675 **/
/** chunk id: 146747, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => v
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
  Chunk707435 = require("./707435.js"),
  Chunk197571 = require("./197571.js");

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
let x = "premium-guild-subscription-upsell-modal-header";

function y(e) {
  let {
    title: t,
    subtitle: r,
    image: o
  } = e;
  return (0, n.jsxs)("div", {
    className: j.header,
    children: [(0, n.jsx)(s.Heading, {
      variant: "heading-xl/semibold",
      id: x,
      color: "text-strong",
      className: h.marginBottom8,
      children: t
    }), (0, n.jsx)(s.Text, {
      variant: "text-md/normal",
      className: j.subtitleText,
      children: r
    }), o]
  })
}
let O = e => {
    let {
      onClose: t,
      perks: r,
      perkIntro: o = m.intl.string(m.t.Dr3GoS),
      headerProps: i
    } = e;
    return (0, n.jsxs)("div", {
      className: j.wrapper,
      children: [(0, n.jsx)(s.olH, {
        "data-migration-pending": true,
        className: j.closeButton,
        onClick: () => {
          t()
        }
      }), (0, n.jsx)(_, {
        headerProps: i,
        perkIntro: o
      }), (0, n.jsx)("div", {
        className: j.perks,
        children: r.map((e, t) => {
          let {
            icon: r,
            iconClassName: o,
            description: s,
            color: i
          } = e;
          return (0, n.jsx)(p.Z, {
            icon: r,
            iconClassName: o,
            description: s,
            color: i
          }, t)
        })
      })]
    })
  },
  _ = e => {
    let {
      headerProps: t,
      perkIntro: i
    } = e;
    return (0, n.jsxs)(o.Fragment, {
      children: [null != t ? (0, n.jsx)(y, f({}, t)) : (0, n.jsx)("img", {
        className: j.heroImage,
        src: r(438471),
        alt: m.intl.string(m.t.PkcaAH)
      }), (0, n.jsx)(s.Text, {
        variant: "text-md/normal",
        className: j.heading,
        children: i
      })]
    })
  },
  P = e => {
    let {
      guild: t,
      targetBoostedGuildTier: r,
      onClose: o,
      analyticsSourceLocation: i
    } = e, a = {
      section: b.jXE.PREMIUM_GUILD_UPSELL_MODAL,
      object: b.qAy.BUTTON_CTA,
      objectType: null != r ? (0, d.ge)(r) : null
    };
    return (0, n.jsxs)(s.mzw, {
      className: j.footer,
      "data-migration-pending": true,
      children: [(0, n.jsx)(s.Button, {
        variant: "secondary",
        size: "sm",
        text: m.intl.string(m.t.cpT0Cq),
        onClick: () => {
          o()
        }
      }), (0, n.jsx)(g.Z, {
        analyticsLocation: a,
        analyticsSourceLocation: i,
        guild: t,
        targetBoostedGuildTier: r,
        onClose: () => {
          o()
        }
      })]
    })
  };

function v(e) {
  var t, r, {
      analyticsSourceLocation: o,
      guild: p,
      targetBoostedGuildTier: d,
      perks: g,
      perkIntro: b,
      headerProps: m,
      onClose: j
    } = e,
    h = function(e, t) {
      if (null == e) return {};
      var r, n, o = function(e, t) {
        if (null == e) return {};
        var r, n, o = {},
          s = Object.keys(e);
        for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
        return o
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for (n = 0; n < s.length; n++) r = s[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
      }
      return o
    }(e, ["analyticsSourceLocation", "guild", "targetBoostedGuildTier", "perks", "perkIntro", "headerProps", "onClose"]);
  let {
    analyticsLocations: y
  } = (0, a.ZP)(i.Z.ACTIVITY_DIRECTORY);
  return (0, n.jsx)(a.Gt, {
    value: y,
    children: (0, n.jsx)(l.PaymentContextProvider, {
      activeSubscription: null,
      stepConfigs: [],
      skuIDs: [],
      children: (0, n.jsx)(s.Y0X, (t = f({}, h), r = r = {
        "aria-labelledby": x,
        "data-migration-pending": true,
        parentComponent: "GuildBoostingUpsellModal",
        children: (0, n.jsx)(u.Z, {
          hideBreadcrumbs: true,
          body: (0, n.jsx)(O, {
            onClose: j,
            perks: g,
            perkIntro: b,
            headerProps: m
          }),
          footer: (0, n.jsx)(P, {
            guild: p,
            targetBoostedGuildTier: d,
            onClose: j,
            analyticsSourceLocation: o
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