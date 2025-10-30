/** Chunk was on 29679 **/
/** chunk id: 862319, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => f,
  w: () => h
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk73346 = require("./73346.js"),
  Chunk817460 = require("./817460.js"),
  Chunk723047 = require("./723047.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk371493 = require("./371493.js");

function m(e) {
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
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function f(e) {
  let {
    channelBenefits: t,
    intangibleBenefits: i,
    subscriptionListings: s,
    onImport: f
  } = e, h = (0, d.mY)();
  return (0, r.jsx)("div", {
    className: g.container,
    children: s.map(e => (0, r.jsxs)("div", {
      className: g.row,
      children: [(0, r.jsx)("img", {
        alt: "",
        src: null == e.image_asset ? true : (0, o._W)(e.application_id, e.image_asset, 512),
        className: l()(g.rowIcon, g.listingImage)
      }), (0, r.jsxs)("div", {
        className: g.rowBody,
        children: [(0, r.jsx)(a.Text, {
          variant: "text-md/normal",
          color: "header-primary",
          className: l()(g.rowText, g.listingName),
          children: e.name
        }), (0, r.jsx)(a.Text, {
          color: "header-secondary",
          variant: "text-sm/normal",
          children: u.intl.format(u.t["QMj+In"], {
            channels: e.role_benefits.benefits.filter(c.rC).length,
            benefits: e.role_benefits.benefits.filter(c.lL).length
          })
        })]
      }), (0, r.jsx)(a.Button, {
        variant: "secondary",
        onClick: () => {
          (0, a.ZDy)(async () => {
            let {
              ImportBenefitsFromSubscriptionListingModal: l
            } = await n.e("31667").then(n.bind(n, 880229));
            return n => (0, r.jsx)(l, p(m({}, n), {
              fromSubscriptionListing: e,
              existingChannelBenefits: t,
              existingIntangibleBenefits: i,
              onSubmit: f
            }))
          })
        },
        disabled: h,
        text: u.intl.string(u.t["90bIv9"])
      })]
    }, e.id))
  })
}

function h(e) {
  let {
    guildId: t,
    onImport: i,
    disabled: o = false
  } = e;
  return (0, r.jsxs)(a.P3F, {
    className: l()(g.importRoleCard, {
      [g.disabled]: o
    }),
    onClick: o ? true : function() {
      (0, a.ZDy)(async () => {
        let {
          ImportBenefitsFromRoleModal: e
        } = await n.e("31667").then(n.bind(n, 880229));
        return n => (0, r.jsx)(e, p(m({}, n), {
          guildId: t,
          onImport: i
        }))
      })
    },
    "aria-disabled": o,
    children: [(0, r.jsx)(a.lZ8, {
      size: "custom",
      width: 23,
      height: 23,
      color: "currentColor",
      className: g.rowIcon
    }), (0, r.jsx)(a.Text, {
      variant: "text-md/normal",
      color: "header-primary",
      className: g.rowText,
      children: u.intl.string(u.t.xK9pBC)
    }), (0, r.jsx)(s.Z, {
      direction: s.Z.Directions.RIGHT,
      className: g.caret
    })]
  })
}