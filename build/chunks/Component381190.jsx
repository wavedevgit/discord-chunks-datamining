/** Chunk was on web.js **/
/** chunk id: 381190, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => S
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk979554 = require("./979554.js"),
  Chunk481060 = require("./481060.js"),
  Chunk357352 = require("./357352.js"),
  Chunk449217 = require("./449217.js"),
  Chunk922347 = require("./922347.js"),
  Chunk135483 = require("./135483.js"),
  Chunk212161 = require("./212161.js"),
  Chunk768581 = require("./768581.js"),
  Chunk937615 = require("./937615.js"),
  Chunk474936 = require("./474936.js"),
  Chunk345909 = require("./345909.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk673599 = require("./673599.js");
let b = e => {
    switch (e) {
      case o.Z.AVATAR_DECORATION:
        return g.intl.string(m.default.obi47u);
      case o.Z.PROFILE_EFFECT:
        return g.intl.string(m.default.RX8BMT);
      case o.Z.NAMEPLATE:
        return g.intl.string(m.default.nNGEHh);
      case o.Z.BUNDLE:
        return g.intl.string(m.default.VS1fKi);
      default:
        return ""
    }
  },
  y = e => {
    let {
      displayName: t,
      product: n
    } = e;
    if (0 === n.items.length) return null;
    let i = n.items[0];
    if (!(0, u.M)(i)) return null;
    let a = (0, _.NZ)({
      avatarDecoration: {
        asset: i.asset
      },
      size: 40,
      canAnimate: true
    });
    return (0, r.jsx)("img", {
      src: a,
      alt: t,
      className: E.avatarDecorationPreview
    })
  },
  O = e => {
    let {
      displayName: t,
      product: n
    } = e;
    if (0 === n.items.length) return null;
    let i = n.items[0];
    if (!(0, d.k)(i)) return null;
    let a = (0, l.b)("collectibles/".concat(i.asset, "static.png"));
    return (0, r.jsx)("img", {
      src: a,
      alt: t,
      className: E.nameplatePreview
    })
  },
  v = e => {
    let {
      displayName: t,
      product: n
    } = e;
    if (0 === n.items.length) return null;
    let i = n.items[0];
    if (!(0, f.H)(i)) return null;
    let a = i.thumbnailPreviewSrc;
    return (0, r.jsx)("img", {
      src: a,
      alt: t,
      className: E.avatarDecorationPreview
    })
  },
  I = e => {
    let {
      subscriptionPlanId: t
    } = e;
    if (null == t) return (0, r.jsx)("div", {
      className: E.purchasePlaceholder,
      children: (0, r.jsx)(s.EOn, {})
    });
    let n = h.GP[t],
      i = (null == n ? true : n.skuId) === h.Si.GUILD;
    return (0, r.jsx)("div", {
      className: E.purchasePlaceholder,
      children: i ? (0, r.jsx)(s.$Eu, {
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
  T = e => {
    let {
      displayName: t,
      product: n
    } = e;
    if (null == n) return (0, r.jsx)("div", {
      className: E.purchasePlaceholder,
      children: (0, r.jsx)(s.EOn, {})
    });
    switch (n.type) {
      case o.Z.AVATAR_DECORATION:
        return (0, r.jsx)(y, {
          displayName: t,
          product: n
        });
      case o.Z.NAMEPLATE:
        return (0, r.jsx)(O, {
          displayName: t,
          product: n
        });
      case o.Z.PROFILE_EFFECT:
        return (0, r.jsx)(v, {
          displayName: t,
          product: n
        });
      default:
        return (0, r.jsx)("div", {
          className: E.purchasePlaceholder,
          children: (0, r.jsx)(s.EOn, {})
        })
    }
  },
  S = e => {
    let t, n, {
        skuId: i,
        subscriptionPlanId: o,
        total: l,
        currency: u,
        className: d
      } = e,
      {
        product: f
      } = (0, c.Z)(i),
      _ = null != o;
    if (null !== i && !_ && null == f) return null;
    if (null != f) t = f.name, n = b(f.type);
    else if (_ && null != o) {
      let e = h.GP[o];
      t = null == e ? true : e.name
    }
    if (null == t) return null;
    let m = (0, p.T4)(l, u);
    return (0, r.jsxs)("div", {
      className: a()(E.container, d),
      children: [_ ? (0, r.jsx)(I, {
        subscriptionPlanId: o
      }) : (0, r.jsx)(T, {
        displayName: t,
        product: null != f ? f : null
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsx)(s.Text, {
          variant: "text-md/semibold",
          children: null != n ? "".concat(t, " • ").concat(n) : t
        }), (0, r.jsx)(s.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          children: m
        })]
      })]
    })
  }