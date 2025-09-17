/** Chunk was on 8360 **/
/** chunk id: 486199, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./953529.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk77464 = require("./77464.js");

function c(e) {
  let {
    name: t,
    description: n,
    icon: r,
    imageSrc: c,
    iconBackgroundColor: d,
    iconClassName: u,
    iconWrapperClassName: p,
    details: m,
    detailsClassName: b,
    isHeader: g,
    isPremium: f,
    children: h
  } = e;
  return (0, i.jsxs)(a.Kqy, {
    direction: "horizontal",
    fullWidth: true,
    gap: 16,
    children: [null != r || null != c ? function(e, t, n, r, a) {
      if (null != t) return (0, i.jsx)("img", {
        alt: "",
        src: t,
        className: l()(s.iconWrapper, r)
      });
      let o = null;
      return null != e && (o = "string" == typeof e ? (0, i.jsx)("img", {
        alt: "",
        src: e,
        className: l()(s.icon, r)
      }) : (0, i.jsx)(e, {
        className: l()(s.icon, r),
        color: "currentColor"
      })), (0, i.jsx)("div", {
        style: {
          backgroundColor: n
        },
        className: l()(s.iconWrapper, a),
        children: o
      })
    }(r, c, d, u, p) : null, (0, i.jsxs)(a.Kqy, {
      justify: "center",
      children: [function(e) {
        let {
          name: t,
          description: n,
          details: r,
          detailsClassName: c,
          isHeader: d,
          isPremium: u
        } = e, p = null == r ? true : r.map((e, t) => {
          let {
            icon: n,
            text: r
          } = e;
          return (0, i.jsxs)("div", {
            className: l()(s.detailsWrapper, d ? s.headerDetailsWrapper : null),
            children: [null != n ? (0, i.jsx)(n, {
              size: "xs",
              color: "currentColor",
              className: s.detailsIcon
            }) : null, (0, i.jsx)(a.Text, {
              variant: "text-xs/normal",
              color: "header-secondary",
              className: c,
              children: r
            })]
          }, t)
        });
        return (0, i.jsxs)(a.Kqy, {
          gap: 0,
          children: [(0, i.jsxs)(a.X6q, {
            variant: d ? "heading-xl/semibold" : "heading-md/medium",
            className: d ? s.header : s.secondaryHeader,
            children: [t, u && (0, i.jsx)(a.ua7, {
              text: o.intl.string(o.t.VFuFur),
              children: e => {
                var t, n;
                return (0, i.jsx)(a.Prq, (t = function(e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                      i = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                      return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), i.forEach(function(t) {
                      var i;
                      i = n[t], t in e ? Object.defineProperty(e, t, {
                        value: i,
                        enumerable: true,
                        configurable: true,
                        writable: true
                      }) : e[t] = i
                    })
                  }
                  return e
                }({
                  size: "xs",
                  color: "currentColor"
                }, e), n = n = {
                  className: s.premiumIcon
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, i)
                  }
                  return n
                })(Object(n)).forEach(function(e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }), t))
              }
            })]
          }), null != n ? (0, i.jsx)(a.Text, {
            variant: "text-sm/normal",
            color: "header-secondary",
            children: n
          }) : null, (0, i.jsx)(a.Kqy, {
            direction: "horizontal",
            children: p
          })]
        })
      }({
        name: t,
        description: n,
        details: m,
        detailsClassName: b,
        isHeader: g,
        isPremium: f
      }), h]
    })]
  })
}