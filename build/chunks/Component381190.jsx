/** Chunk was on web.js **/
/** chunk id: 381190, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk979554 = require("./979554.js"),
  Chunk481060 = require("./481060.js"),
  Chunk449217 = require("./449217.js"),
  Chunk937615 = require("./937615.js"),
  Chunk380979 = require("./380979.js"),
  Chunk673599 = require("./673599.js");
let p = e => {
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
  _ = e => {
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
  m = e => {
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
  h = e => {
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
        return (0, r.jsx)(p, {
          displayName: t,
          product: n
        });
      case s.Z.NAMEPLATE:
        return (0, r.jsx)(_, {
          displayName: t,
          product: n
        });
      case s.Z.PROFILE_EFFECT:
        return (0, r.jsx)(m, {
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
  E = Chunk473749.memo(e => {
    let {
      skuId: t,
      subscriptionPlanId: n,
      total: i,
      currency: a,
      className: s
    } = e, {
      product: p
    } = (0, c.Z)(t), {
      displayName: _,
      typeName: m,
      isSubscription: E
    } = (0, d.HB)(null != p ? p : null, n);
    if (null != t && !E && null == p || null == _) return null;
    let b = (0, u.T4)(i, a);
    return (0, r.jsxs)("div", {
      className: o()(f.container, s),
      children: [E ? (0, r.jsx)(h, {
        subscriptionPlanId: n
      }) : (0, r.jsx)(g, {
        displayName: _,
        product: null != p ? p : null
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsx)(l.Text, {
          variant: "text-md/semibold",
          children: null != m ? "".concat(_, " • ").concat(m) : _
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