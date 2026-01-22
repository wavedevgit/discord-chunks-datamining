/** Chunk was on 45210 **/
/** chunk id: 331617, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => _
}), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk156312 = require("./156312.jsx"),
  Chunk166532 = require("./166532.js"),
  Chunk632638 = require("./632638.jsx"),
  Chunk901017 = require("./901017.jsx"),
  Chunk473145 = require("./473145.js"),
  Chunk721923 = require("./721923.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk942609 = require("./942609.js"),
  Chunk473169 = require("./473169.js");

function x(e) {
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
let g = "premium-guild-subscription-upsell-modal-header";

function O(e) {
  let {
    title: t,
    subtitle: r,
    image: s
  } = e;
  return (0, n.jsxs)("div", {
    className: m.wx,
    children: [(0, n.jsx)(o.Heading, {
      variant: "heading-xl/semibold",
      id: g,
      color: "text-strong",
      className: y.QB,
      children: t
    }), (0, n.jsx)(o.Text, {
      variant: "text-md/normal",
      className: m.o4,
      children: r
    }), s]
  })
}
let h = e => {
    let {
      onClose: t,
      perks: r,
      perkIntro: s = j.intl.string(j.t.Dr3GoS),
      headerProps: a
    } = e;
    return (0, n.jsxs)("div", {
      className: m.iE,
      children: [(0, n.jsx)(o.s_y, {
        "data-migration-pending": true,
        className: m.b,
        onClick: () => {
          t()
        }
      }), (0, n.jsx)(v, {
        headerProps: a,
        perkIntro: s
      }), (0, n.jsx)("div", {
        className: m.md,
        children: r.map((e, t) => {
          let {
            icon: r,
            iconClassName: s,
            description: o,
            color: a
          } = e;
          return (0, n.jsx)(p.A, {
            icon: r,
            iconClassName: s,
            description: o,
            color: a
          }, t)
        })
      })]
    })
  },
  v = e => {
    let {
      headerProps: t,
      perkIntro: a
    } = e;
    return (0, n.jsxs)(s.Fragment, {
      children: [null != t ? (0, n.jsx)(O, x({}, t)) : (0, n.jsx)("img", {
        className: m.c8,
        src: r(69522),
        alt: j.intl.string(j.t.PkcaAH)
      }), (0, n.jsx)(o.Text, {
        variant: "text-md/normal",
        className: m.R_,
        children: a
      })]
    })
  },
  P = e => {
    let {
      guild: t,
      targetBoostedGuildTier: r,
      onClose: s,
      analyticsSourceLocation: a
    } = e, c = {
      section: f.JJy.PREMIUM_GUILD_UPSELL_MODAL,
      object: f.ZSU.BUTTON_CTA,
      objectType: null != r ? (0, u.k1)(r) : null
    };
    return (0, n.jsxs)(o.jlY, {
      className: m.qr,
      "data-migration-pending": true,
      children: [(0, n.jsx)(o.Button, {
        variant: "secondary",
        size: "sm",
        text: j.intl.string(j.t.cpT0Cq),
        onClick: () => {
          s()
        }
      }), (0, n.jsx)(b.A, {
        analyticsLocation: c,
        analyticsSourceLocation: a,
        guild: t,
        targetBoostedGuildTier: r,
        onClose: () => {
          s()
        }
      })]
    })
  };

function _(e) {
  var t, r;
  let {
    analyticsSourceLocation: s,
    guild: p,
    targetBoostedGuildTier: u,
    perks: b,
    perkIntro: f,
    headerProps: j,
    onClose: m
  } = e, y = function(e, t) {
    if (null == e) return {};
    var r, n, s, o = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (s = 0, r = Reflect.ownKeys(e); s < r.length; s++) n = r[s], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
      return o
    }
    if (o = function(e, t) {
        if (null == e) return {};
        var r, n, s = {},
          o = Object.getOwnPropertyNames(e);
        for (n = 0; n < o.length; n++) r = o[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (s[r] = e[r]);
        return s
      }(e, t), Object.getOwnPropertySymbols)
      for (s = 0, r = Object.getOwnPropertySymbols(e); s < r.length; s++) n = r[s], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
    return o
  }(e, ["analyticsSourceLocation", "guild", "targetBoostedGuildTier", "perks", "perkIntro", "headerProps", "onClose"]), {
    analyticsLocations: O
  } = (0, c.Ay)(a.A.ACTIVITY_DIRECTORY);
  return (0, n.jsx)(c.f5, {
    value: O,
    children: (0, n.jsx)(l.PaymentContextProvider, {
      activeSubscription: null,
      stepConfigs: [],
      skuIDs: [],
      children: (0, n.jsx)(o.EOs, (t = x({}, y), r = r = {
        "aria-labelledby": g,
        "data-migration-pending": true,
        parentComponent: "GuildBoostingUpsellModal",
        children: (0, n.jsx)(d.A, {
          hideBreadcrumbs: true,
          body: (0, n.jsx)(h, {
            onClose: m,
            perks: b,
            perkIntro: f,
            headerProps: j
          }),
          footer: (0, n.jsx)(P, {
            guild: p,
            targetBoostedGuildTier: u,
            onClose: m,
            analyticsSourceLocation: s
          }),
          steps: [i.pn.PREMIUM_GUILD_UPSELL],
          currentStep: i.pn.PREMIUM_GUILD_UPSELL
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