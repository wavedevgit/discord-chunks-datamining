/** Chunk was on 9558 **/
/** chunk id: 847004, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk44315 = require("./44315.js"),
  Chunk937615 = require("./937615.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk874888 = require("./874888.js");

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      a = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), a.forEach(function(t) {
      var a;
      a = n[t], t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = a
    })
  }
  return e
}

function u(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      n.push.apply(n, a)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function f(e) {
  let {
    price: t,
    selected: n,
    onClick: i
  } = e;
  return (0, a.jsxs)(s.P3F, {
    className: l()(x.priceRow, {
      [x.selected]: n
    }),
    onClick: i,
    children: [n ? (0, a.jsx)(s.owK, {
      size: "custom",
      width: 20,
      height: 20,
      secondaryColor: (0, c.Lq)(d.Ilk.WHITE_500),
      color: (0, c.Lq)(d.Ilk.BRAND_500)
    }) : (0, a.jsx)("svg", {
      width: "20",
      height: "20",
      children: (0, a.jsx)("circle", {
        cx: 10,
        cy: 10,
        r: 10,
        className: x.circle
      })
    }), (0, a.jsxs)("div", {
      className: x.priceRowText,
      children: [(0, a.jsx)(s.Text, {
        variant: "text-sm/normal",
        tag: "span",
        children: (0, o.T4)(t, d.pKx.USD)
      }), (0, a.jsx)(s.Text, {
        variant: "text-xxs/medium",
        tag: "span",
        children: "/mo."
      })]
    })]
  })
}

function _(e) {
  let {
    selectedTemplate: t,
    handleSelectTemplate: n,
    newPricesToPick: r
  } = e, [l, c] = i.useState(0);
  return (0, a.jsxs)("div", {
    className: x.container,
    children: [(0, a.jsxs)("div", {
      className: x.content,
      children: [(0, a.jsx)(s.Heading, {
        variant: "heading-md/semibold",
        children: m.intl.format(m.t["5WZ9Ct"], {
          tierName: t.listings[0].name
        })
      }), (0, a.jsx)(s.Text, {
        variant: "text-sm/normal",
        className: x.bodyText,
        children: m.intl.format(m.t["5i7Uhb"], {
          price: (0, o.T4)(t.listings[0].price_tier, d.pKx.USD)
        })
      }), r.map((e, t) => (0, a.jsx)(f, {
        price: e,
        selected: t === l,
        onClick: () => c(t)
      }, e))]
    }), (0, a.jsx)(s.Button, {
      variant: "primary",
      text: m.intl.string(m.t["1W7mCt"]),
      onClick: () => {
        n(u(p({}, t), {
          listings: [u(p({}, t.listings[0]), {
            price_tier: r[l]
          })]
        }))
      }
    })]
  })
}