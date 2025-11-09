/** Chunk was on web.js **/
/** chunk id: 381190, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk979554 = require("./979554.js"),
  Chunk481060 = require("./481060.js"),
  Chunk449217 = require("./449217.js"),
  Chunk937615 = require("./937615.js"),
  Chunk380979 = require("./380979.js"),
  Chunk951029 = require("./951029.js");
let _ = e => {
    let {
      displayName: t,
      product: n
    } = e, i = (0, d.vV)(n);
    return null == i ? null : (0, r.jsx)("img", {
      src: i,
      alt: t,
      className: f.avatarDecorationPreview
    })
  },
  p = e => {
    let {
      displayName: t,
      product: n
    } = e, i = (0, d.$U)(n);
    return null == i ? null : (0, r.jsx)("img", {
      src: i,
      alt: t,
      className: f.nameplatePreview
    })
  },
  h = e => {
    let {
      displayName: t,
      product: n
    } = e, i = (0, d.yz)(n);
    return null == i ? null : (0, r.jsx)("img", {
      src: i,
      alt: t,
      className: f.avatarDecorationPreview
    })
  },
  m = e => {
    let {
      subscriptionPlanId: t
    } = e;
    if (null == t) return (0, r.jsx)("div", {
      className: f.purchasePlaceholder,
      children: (0, r.jsx)(l.EOn, {})
    });
    let n = (0, d.Km)(t);
    return (0, r.jsx)("div", {
      className: f.purchasePlaceholder,
      children: n ? (0, r.jsx)(l.Ucv, {
        size: "custom",
        width: 20,
        height: 20
      }) : (0, r.jsx)(l.SrA, {
        size: "custom",
        width: 20,
        height: 20
      })
    })
  },
  g = e => {
    let {
      displayName: t,
      product: n
    } = e;
    if (null == n) return (0, r.jsx)("div", {
      className: f.purchasePlaceholder,
      children: (0, r.jsx)(l.EOn, {})
    });
    switch (n.type) {
      case s.Z.AVATAR_DECORATION:
        return (0, r.jsx)(_, {
          displayName: t,
          product: n
        });
      case s.Z.NAMEPLATE:
        return (0, r.jsx)(p, {
          displayName: t,
          product: n
        });
      case s.Z.PROFILE_EFFECT:
        return (0, r.jsx)(h, {
          displayName: t,
          product: n
        });
      default:
        return (0, r.jsx)("div", {
          className: f.purchasePlaceholder,
          children: (0, r.jsx)(l.EOn, {})
        })
    }
  },
  E = Chunk647438.memo(e => {
    let {
      skuId: t,
      subscriptionPlanId: n,
      total: i,
      currency: a,
      className: s
    } = e, {
      product: _
    } = (0, c.Z)(t), {
      displayName: p,
      typeName: h,
      isSubscription: E
    } = (0, d.HB)(null != _ ? _ : null, n);
    if (null != t && !E && null == _ || null == p) return null;
    let b = (0, u.T4)(i, a);
    return (0, r.jsxs)("div", {
      className: o()(f.container, s),
      children: [E ? (0, r.jsx)(m, {
        subscriptionPlanId: n
      }) : (0, r.jsx)(g, {
        displayName: p,
        product: null != _ ? _ : null
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsx)(l.Text, {
          variant: "text-md/semibold",
          children: null != h ? "".concat(p, " • ").concat(h) : p
        }), (0, r.jsx)(l.Text, {
          variant: "text-sm/medium",
          color: "text-secondary",
          children: b
        })]
      })]
    })
  });
E.displayName = "FamilyCenterActivityPurchaseRow";
let b = E