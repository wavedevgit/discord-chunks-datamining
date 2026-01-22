/** Chunk was on web.js **/
/** chunk id: 319820, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => P,
  h: () => D
}), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  l = require.n(Chunk284009),
  Chunk575593 = require("./575593.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk590180 = require("./590180.js"),
  Chunk14702 = require("./14702.jsx"),
  Chunk735164 = require("./735164.jsx"),
  Chunk980094 = require("./980094.jsx"),
  Chunk366523 = require("./366523.jsx"),
  Chunk773669 = require("./773669.js"),
  Chunk252424 = require("./252424.js"),
  Chunk580630 = require("./580630.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk991198 = require("./991198.js");
let v = (e, t) => {
    let n = null != t && e.productLine === y.EZt.COLLECTIBLES && t.type !== c.R.BUNDLE,
      r = e.productLine === y.EZt.SOCIAL_LAYER_GAME_ITEM;
    return n || r ? "THREE_COLUMN" : "TWO_COLUMN"
  },
  S = e => {
    if (null == e.discounts || 0 === e.discounts.length) return null;
    let t = e.discounts[0];
    return 0 === t.amount ? null : t
  },
  I = e => {
    let {
      children: t,
      className: n
    } = e;
    return (0, r.jsx)("div", {
      className: s()(A.ac, n),
      children: t
    })
  },
  T = e => {
    let {
      children: t,
      className: n
    } = e;
    return (0, r.jsx)("div", {
      className: s()(A.KN, n),
      children: t
    })
  },
  C = e => {
    let {
      children: t,
      className: n
    } = e;
    return (0, r.jsx)("div", {
      className: s()(A.cP, n),
      children: t
    })
  },
  N = e => {
    let {
      children: t,
      className: n
    } = e;
    return (0, r.jsx)("div", {
      className: n,
      children: t
    })
  },
  R = e => {
    let {
      sku: t
    } = e, n = (0, u.bG)([f.A], () => f.A.getProduct(t.id));
    return null != n && t.productLine === y.EZt.COLLECTIBLES && n.type !== c.R.BUNDLE ? (0, r.jsx)(p.O, {
      sku: t,
      fallbackLabel: null
    }) : t.productLine === y.EZt.SOCIAL_LAYER_GAME_ITEM ? (0, r.jsx)(m.e, {
      containerClassName: A.oC,
      sku: t,
      shape: "square"
    }) : null
  },
  w = e => {
    let {
      discount: t
    } = e, n = (0, u.bG)([g.default], () => g.default.locale), i = null != t && null != t.percentage_amount ? (0, E.l9)(n, -(t.percentage_amount / 100 * 1)) : null;
    return (0, r.jsx)("div", {
      className: A.d8,
      children: (0, r.jsx)(d.Text, {
        variant: "text-sm/semibold",
        color: "always-white",
        children: i
      })
    })
  },
  P = e => {
    let {
      sku: t,
      value: n,
      rentalDuration: a
    } = e, s = (0, u.bG)([f.A], () => f.A.getProduct(t.id)), o = (0, u.bG)([g.default], () => g.default.locale), l = v(t, s), c = i.useMemo(() => {
      if (null == a) return null;
      let e = new Date;
      return e.setDate(e.getDate() + a), e.toLocaleDateString(o, {
        day: "numeric",
        month: "long",
        year: "numeric"
      })
    }, [a, o]);
    return (0, r.jsx)(_.Yx, {
      className: A.S,
      children: (0, r.jsxs)(I, {
        children: ["THREE_COLUMN" === l && (0, r.jsx)(T, {
          children: (0, r.jsx)(R, {
            sku: t
          })
        }), (0, r.jsxs)(C, {
          className: A.Hi,
          children: [t.name, null != c && (0, r.jsx)(d.Text, {
            variant: "text-sm/normal",
            className: A.TU,
            children: O.intl.format(O.t["es/G6j"], {
              date: c
            })
          })]
        }), (0, r.jsx)(N, {
          className: A.Hi,
          children: n
        })]
      })
    })
  };

function D(e) {
  let {
    sku: t,
    skuPricePreview: n,
    application: i
  } = e;
  l()(null != n.amount, "SKU must have a price set."), l()(null != n.invoice_items && 1 === n.invoice_items.length, "SKU preview must have single line item");
  let a = (0, u.bG)([f.A], () => f.A.getProduct(t.id)),
    s = v(t, a),
    o = n.invoice_items[0],
    c = o.unit_price.amount,
    p = !n.tax_inclusive && n.tax > 0,
    m = S(o),
    g = c !== n.amount,
    E = t.productLine === y.EZt.SOCIAL_LAYER_GAME_ITEM;
  return (0, r.jsxs)(_.Yx, {
    className: A.S,
    children: [(0, r.jsxs)(I, {
      children: ["THREE_COLUMN" === s && (0, r.jsx)(T, {
        children: (0, r.jsx)(R, {
          sku: t
        })
      }), (0, r.jsxs)(C, {
        className: A.Hi,
        children: [E && (0, r.jsx)(h.Q, {
          application: i
        }), (0, r.jsx)(d.Text, {
          variant: "text-sm/semibold",
          children: t.name
        })]
      }), (0, r.jsx)(N, {
        className: A.Hi,
        children: (0, b.$g)(c, n.currency)
      })]
    }), null != m && (0, r.jsxs)(I, {
      children: ["THREE_COLUMN" === s && (0, r.jsx)(T, {
        children: (0, r.jsx)(w, {
          discount: m
        })
      }), (0, r.jsx)(C, {
        className: A.ys,
        children: m.description
      }), (0, r.jsx)(N, {
        className: A.ys,
        children: (0, b.$g)(false * m.amount, n.currency)
      })]
    }), p && (0, r.jsxs)(I, {
      children: ["THREE_COLUMN" === s && (0, r.jsx)(T, {}), (0, r.jsx)(C, {
        className: A.Hi,
        children: O.intl.string(O.t["/I8zmP"])
      }), (0, r.jsx)(N, {
        className: A.Hi,
        children: (0, b.$g)(n.tax, n.currency)
      })]
    }), g && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(_.pK, {}), (0, r.jsxs)(I, {
        className: A.V$,
        children: [(0, r.jsx)(T, {
          className: A.Hi,
          children: O.intl.format(O.t["+B5KfG"], {})
        }), "THREE_COLUMN" === s && (0, r.jsx)(C, {}), (0, r.jsx)(N, {
          className: A.Hi,
          children: (0, b.$g)(n.amount, n.currency)
        })]
      })]
    })]
  })
}