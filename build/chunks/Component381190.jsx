/** Chunk was on web.js **/
/** chunk id: 381190, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk979554 = require("./979554.js"),
  Chunk481060 = require("./481060.js"),
  Chunk449217 = require("./449217.js"),
  Chunk937615 = require("./937615.js"),
  Chunk380979 = require("./380979.js"),
  Chunk673599 = require("./673599.js");
let f = e => {
    let {
      displayName: t,
      product: n
    } = e, i = (0, u.vV)(n);
    return null == i ? null : (0, r.jsx)("img", {
      src: i,
      alt: t,
      className: d.avatarDecorationPreview
    })
  },
  _ = e => {
    let {
      displayName: t,
      product: n
    } = e, i = (0, u.$U)(n);
    return null == i ? null : (0, r.jsx)("img", {
      src: i,
      alt: t,
      className: d.nameplatePreview
    })
  },
  p = e => {
    let {
      displayName: t,
      product: n
    } = e, i = (0, u.yz)(n);
    return null == i ? null : (0, r.jsx)("img", {
      src: i,
      alt: t,
      className: d.avatarDecorationPreview
    })
  },
  h = e => {
    let {
      subscriptionPlanId: t
    } = e;
    if (null == t) return (0, r.jsx)("div", {
      className: d.purchasePlaceholder,
      children: (0, r.jsx)(s.EOn, {})
    });
    let n = (0, u.Km)(t);
    return (0, r.jsx)("div", {
      className: d.purchasePlaceholder,
      children: n ? (0, r.jsx)(s.$Eu, {
        size: "custom",
        width: 20,
        height: 20
      }) : (0, r.jsx)(s.SrA, {
        size: "custom",
        width: 20,
        height: 20
      })
    })
  },
  m = e => {
    let {
      displayName: t,
      product: n
    } = e;
    if (null == n) return (0, r.jsx)("div", {
      className: d.purchasePlaceholder,
      children: (0, r.jsx)(s.EOn, {})
    });
    switch (n.type) {
      case o.Z.AVATAR_DECORATION:
        return (0, r.jsx)(f, {
          displayName: t,
          product: n
        });
      case o.Z.NAMEPLATE:
        return (0, r.jsx)(_, {
          displayName: t,
          product: n
        });
      case o.Z.PROFILE_EFFECT:
        return (0, r.jsx)(p, {
          displayName: t,
          product: n
        });
      default:
        return (0, r.jsx)("div", {
          className: d.purchasePlaceholder,
          children: (0, r.jsx)(s.EOn, {})
        })
    }
  },
  g = e => {
    let {
      skuId: t,
      subscriptionPlanId: n,
      total: i,
      currency: o,
      className: f
    } = e, {
      product: _
    } = (0, l.Z)(t), {
      displayName: p,
      typeName: g,
      isSubscription: E
    } = (0, u.HB)(null != _ ? _ : null, n);
    if (null != t && !E && null == _ || null == p) return null;
    let b = (0, c.T4)(i, o);
    return (0, r.jsxs)("div", {
      className: a()(d.container, f),
      children: [E ? (0, r.jsx)(h, {
        subscriptionPlanId: n
      }) : (0, r.jsx)(m, {
        displayName: p,
        product: null != _ ? _ : null
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsx)(s.Text, {
          variant: "text-md/semibold",
          children: null != g ? "".concat(p, " • ").concat(g) : p
        }), (0, r.jsx)(s.Text, {
          variant: "text-sm/medium",
          color: "text-secondary",
          children: b
        })]
      })]
    })
  }