/** Chunk was on 47841 **/
/** chunk id: 600292, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => m,
  q: () => p
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk147925 = require("./147925.jsx"),
  Chunk371794 = require("./371794.js"),
  Chunk500345 = require("./500345.js"),
  Chunk11351 = require("./11351.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk100634 = require("./100634.js");

function g(e) {
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

function b(e, t) {
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

function m(e) {
  let {
    channelBenefits: t,
    intangibleBenefits: i,
    subscriptionListings: a,
    onImport: m
  } = e, p = (0, d.gN)();
  return (0, r.jsx)("div", {
    className: f.kL,
    children: a.map(e => (0, r.jsxs)("div", {
      className: f.nM,
      children: [(0, r.jsx)("img", {
        alt: "",
        src: null == e.image_asset ? true : (0, c.YE)(e.application_id, e.image_asset, 512),
        className: l()(f.aL, f.mi)
      }), (0, r.jsxs)("div", {
        className: f.fw,
        children: [(0, r.jsx)(s.Text, {
          variant: "text-md/normal",
          color: "text-strong",
          className: l()(f.qg, f.Wo),
          children: e.name
        }), (0, r.jsx)(s.Text, {
          color: "text-default",
          variant: "text-sm/normal",
          children: u.intl.format(u.t["QMj+In"], {
            channels: e.role_benefits.benefits.filter(o.B1).length,
            benefits: e.role_benefits.benefits.filter(o.b1).length
          })
        })]
      }), (0, r.jsx)(s.Button, {
        variant: "secondary",
        onClick: () => {
          (0, s.mMO)(async () => {
            let {
              ImportBenefitsFromSubscriptionListingModal: l
            } = await n.e("66946").then(n.bind(n, 362937));
            return n => (0, r.jsx)(l, b(g({}, n), {
              fromSubscriptionListing: e,
              existingChannelBenefits: t,
              existingIntangibleBenefits: i,
              onSubmit: m
            }))
          })
        },
        disabled: p,
        text: u.intl.string(u.t["90bIv9"])
      })]
    }, e.id))
  })
}

function p(e) {
  let {
    guildId: t,
    onImport: i,
    disabled: c = false
  } = e;
  return (0, r.jsxs)(s.DUT, {
    className: l()(f.eZ, {
      [f.r9]: c
    }),
    onClick: c ? true : function() {
      (0, s.mMO)(async () => {
        let {
          ImportBenefitsFromRoleModal: e
        } = await n.e("66946").then(n.bind(n, 362937));
        return n => (0, r.jsx)(e, b(g({}, n), {
          guildId: t,
          onImport: i
        }))
      })
    },
    "aria-disabled": c,
    children: [(0, r.jsx)(s.iTF, {
      size: "custom",
      width: 23,
      height: 23,
      color: "currentColor",
      className: f.aL
    }), (0, r.jsx)(s.Text, {
      variant: "text-md/normal",
      color: "text-strong",
      className: f.qg,
      children: u.intl.string(u.t.xK9pBC)
    }), (0, r.jsx)(a.A, {
      direction: a.A.Directions.RIGHT,
      className: f.OW
    })]
  })
}