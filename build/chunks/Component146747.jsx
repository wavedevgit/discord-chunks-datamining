/** Chunk was on 89675 **/
/** chunk id: 146747, original params: e,r,t (module,exports,require) **/
require.d(exports, {
  default: () => v
}), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk700817 = require("./700817.js"),
  Chunk20493 = require("./20493.js");

function f(e) {
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
let g = "premium-guild-subscription-upsell-modal-header";

function y(e) {
  let {
    title: r,
    subtitle: t,
    image: o
  } = e;
  return (0, n.jsxs)("div", {
    className: h.header,
    children: [(0, n.jsx)(s.X6q, {
      variant: "heading-xl/semibold",
      id: g,
      color: "header-primary",
      className: x.marginBottom8,
      children: r
    }), (0, n.jsx)(s.Text, {
      variant: "text-md/normal",
      className: h.subtitleText,
      children: t
    }), o]
  })
}
let O = e => {
    let {
      onClose: r,
      perks: t,
      perkIntro: o = m.intl.string(m.t.Dr3Goa),
      headerProps: c
    } = e;
    return (0, n.jsxs)("div", {
      className: h.wrapper,
      children: [(0, n.jsx)(s.olH, {
        className: h.closeButton,
        onClick: () => {
          r()
        }
      }), (0, n.jsx)(k, {
        headerProps: c,
        perkIntro: o
      }), (0, n.jsx)("div", {
        className: h.perks,
        children: t.map((e, r) => {
          let {
            icon: t,
            iconClassName: o,
            description: s,
            color: c
          } = e;
          return (0, n.jsx)(u.Z, {
            icon: t,
            iconClassName: o,
            description: s,
            color: c
          }, r)
        })
      })]
    })
  },
  k = e => {
    let {
      headerProps: r,
      perkIntro: c
    } = e;
    return (0, n.jsxs)(o.Fragment, {
      children: [null != r ? (0, n.jsx)(y, f({}, r)) : (0, n.jsx)("img", {
        className: h.heroImage,
        src: t(438471),
        alt: m.intl.string(m.t.PkcaAA)
      }), (0, n.jsx)(s.Text, {
        variant: "text-md/normal",
        className: h.heading,
        children: c
      })]
    })
  },
  _ = e => {
    let {
      guild: r,
      targetBoostedGuildTier: t,
      onClose: o,
      analyticsSourceLocation: c
    } = e, i = {
      section: b.jXE.PREMIUM_GUILD_UPSELL_MODAL,
      object: b.qAy.BUTTON_CTA,
      objectType: null != t ? (0, d.ge)(t) : null
    };
    return (0, n.jsxs)(s.mzw, {
      className: h.footer,
      children: [(0, n.jsx)(s.zxk, {
        variant: "secondary",
        size: "sm",
        text: m.intl.string(m.t.cpT0Cg),
        onClick: () => {
          o()
        }
      }), (0, n.jsx)(j.Z, {
        analyticsLocation: i,
        analyticsSourceLocation: c,
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
      perks: j,
      perkIntro: b,
      headerProps: m,
      onClose: h
    } = e,
    x = function(e, r) {
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
  } = (0, i.ZP)(c.Z.ACTIVITY_DIRECTORY);
  return (0, n.jsx)(i.Gt, {
    value: y,
    children: (0, n.jsx)(a.PaymentContextProvider, {
      activeSubscription: null,
      stepConfigs: [],
      skuIDs: [],
      children: (0, n.jsx)(s.Y0X, (r = f({}, x), t = t = {
        "aria-labelledby": g,
        parentComponent: "GuildBoostingUpsellModal",
        children: (0, n.jsx)(p.Z, {
          hideBreadcrumbs: true,
          body: (0, n.jsx)(O, {
            onClose: h,
            perks: j,
            perkIntro: b,
            headerProps: m
          }),
          footer: (0, n.jsx)(_, {
            guild: u,
            targetBoostedGuildTier: d,
            onClose: h,
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