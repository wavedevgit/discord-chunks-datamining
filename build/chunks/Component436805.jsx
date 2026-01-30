/** Chunk was on 78376 **/
/** chunk id: 436805, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk575593 = require("./575593.js"),
  Chunk397927 = require("./397927.js"),
  Chunk821701 = require("./821701.js"),
  Chunk580630 = require("./580630.js"),
  Chunk349439 = require("./349439.js"),
  Chunk959349 = require("./959349.js");
let p = e => {
    let {
      displayName: t,
      product: n
    } = e, i = (0, u.nF)(n);
    return null == i ? null : (0, r.jsx)("img", {
      src: i,
      alt: t,
      className: _._P
    })
  },
  m = e => {
    let {
      displayName: t,
      product: n
    } = e, i = (0, u.rj)(n);
    return null == i ? null : (0, r.jsx)("img", {
      src: i,
      alt: t,
      className: _.M4
    })
  },
  g = e => {
    let {
      displayName: t,
      product: n
    } = e, i = (0, u.GQ)(n);
    return null == i ? null : (0, r.jsx)("img", {
      src: i,
      alt: t,
      className: _._P
    })
  },
  A = e => {
    let {
      subscriptionPlanId: t
    } = e;
    if (null == t) return (0, r.jsx)("div", {
      className: _.T8,
      children: (0, r.jsx)(o.U1X, {})
    });
    let n = (0, u.il)(t);
    return (0, r.jsx)("div", {
      className: _.T8,
      children: n ? (0, r.jsx)(o._Jp, {
        size: "custom",
        width: 20,
        height: 20
      }) : (0, r.jsx)(o.tvc, {
        size: "custom",
        width: 20,
        height: 20
      })
    })
  },
  f = e => {
    let {
      displayName: t,
      product: n
    } = e;
    if (null == n) return (0, r.jsx)("div", {
      className: _.T8,
      children: (0, r.jsx)(o.U1X, {})
    });
    switch (n.type) {
      case a.R.AVATAR_DECORATION:
        return (0, r.jsx)(p, {
          displayName: t,
          product: n
        });
      case a.R.NAMEPLATE:
        return (0, r.jsx)(m, {
          displayName: t,
          product: n
        });
      case a.R.PROFILE_EFFECT:
        return (0, r.jsx)(g, {
          displayName: t,
          product: n
        });
      default:
        return (0, r.jsx)("div", {
          className: _.T8,
          children: (0, r.jsx)(o.U1X, {})
        })
    }
  },
  b = Chunk64700.memo(e => {
    let {
      skuId: t,
      subscriptionPlanId: n,
      total: i,
      currency: l,
      className: a
    } = e, {
      product: p
    } = (0, c.A)(t), {
      displayName: m,
      typeName: g,
      isSubscription: b
    } = (0, u.GZ)(null != p ? p : null, n);
    if (null != t && !b && null == p || null == m) return null;
    let h = (0, d.$g)(i, l);
    return (0, r.jsxs)("div", {
      className: s()(_.kL, a),
      children: [b ? (0, r.jsx)(A, {
        subscriptionPlanId: n
      }) : (0, r.jsx)(f, {
        displayName: m,
        product: null != p ? p : null
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsx)(o.Text, {
          variant: "text-md/semibold",
          children: null != g ? "".concat(m, " • ").concat(g) : m
        }), (0, r.jsx)(o.Text, {
          variant: "text-sm/medium",
          color: "text-subtle",
          children: h
        })]
      })]
    })
  });
b.displayName = "FamilyCenterActivityPurchaseRow";
let h = b