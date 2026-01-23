/** Chunk was on 47841 **/
/** chunk id: 600292, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => f,
  q: () => b
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
    subscriptionListings: a,
    onImport: f
  } = e, b = (0, d.gN)();
  return (0, r.jsx)("div", {
    className: g.kL,
    children: a.map(e => (0, r.jsxs)("div", {
      className: g.nM,
      children: [(0, r.jsx)("img", {
        alt: "",
        src: null == e.image_asset ? true : (0, o.YE)(e.application_id, e.image_asset, 512),
        className: l()(g.aL, g.mi)
      }), (0, r.jsxs)("div", {
        className: g.fw,
        children: [(0, r.jsx)(s.Text, {
          variant: "text-md/normal",
          color: "text-strong",
          className: l()(g.qg, g.Wo),
          children: e.name
        }), (0, r.jsx)(s.Text, {
          color: "text-default",
          variant: "text-sm/normal",
          children: u.intl.format(u.t["QMj+In"], {
            channels: e.role_benefits.benefits.filter(c.B1).length,
            benefits: e.role_benefits.benefits.filter(c.b1).length
          })
        })]
      }), (0, r.jsx)(s.Button, {
        variant: "secondary",
        onClick: () => {
          (0, s.mMO)(async () => {
            let {
              ImportBenefitsFromSubscriptionListingModal: l
            } = await n.e("66946").then(n.bind(n, 362937));
            return n => (0, r.jsx)(l, p(m({}, n), {
              fromSubscriptionListing: e,
              existingChannelBenefits: t,
              existingIntangibleBenefits: i,
              onSubmit: f
            }))
          })
        },
        disabled: b,
        text: u.intl.string(u.t["90bIv9"])
      })]
    }, e.id))
  })
}

function b(e) {
  let {
    guildId: t,
    onImport: i,
    disabled: o = false
  } = e;
  return (0, r.jsxs)(s.DUT, {
    className: l()(g.eZ, {
      [g.r9]: o
    }),
    onClick: o ? true : function() {
      (0, s.mMO)(async () => {
        let {
          ImportBenefitsFromRoleModal: e
        } = await n.e("66946").then(n.bind(n, 362937));
        return n => (0, r.jsx)(e, p(m({}, n), {
          guildId: t,
          onImport: i
        }))
      })
    },
    "aria-disabled": o,
    children: [(0, r.jsx)(s.iTF, {
      size: "custom",
      width: 23,
      height: 23,
      color: "currentColor",
      className: g.aL
    }), (0, r.jsx)(s.Text, {
      variant: "text-md/normal",
      color: "text-strong",
      className: g.qg,
      children: u.intl.string(u.t.xK9pBC)
    }), (0, r.jsx)(a.A, {
      direction: a.A.Directions.RIGHT,
      className: g.OW
    })]
  })
}