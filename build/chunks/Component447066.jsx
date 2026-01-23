/** Chunk was on 21968 **/
/** chunk id: 447066, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
}), require("./228524.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk571316 = require("./571316.js");

function d(e) {
  let {
    name: t,
    description: n,
    icon: r,
    imageSrc: d,
    iconBackgroundColor: u,
    iconClassName: p,
    iconWrapperClassName: m,
    details: g,
    detailsClassName: b,
    isHeader: f,
    isPremium: h,
    children: x
  } = e;
  return (0, i.jsxs)(s.BJc, {
    direction: "horizontal",
    fullWidth: true,
    gap: 16,
    children: [null != r || null != d ? function(e, t, n, r, a) {
      if (null != t) return (0, i.jsx)("img", {
        alt: "",
        src: t,
        className: l()(c.P0, r)
      });
      let s = null;
      return null != e && (s = "string" == typeof e ? (0, i.jsx)("img", {
        alt: "",
        src: e,
        className: l()(c.Kk, r)
      }) : (0, i.jsx)(e, {
        className: l()(c.Kk, r),
        color: "currentColor"
      })), (0, i.jsx)("div", {
        style: {
          backgroundColor: n
        },
        className: l()(c.P0, a),
        children: s
      })
    }(r, d, u, p, m) : null, (0, i.jsxs)(s.BJc, {
      justify: "center",
      children: [function(e) {
        let {
          name: t,
          description: n,
          details: r,
          detailsClassName: d,
          isHeader: u,
          isPremium: p
        } = e, m = null == r ? true : r.map((e, t) => {
          let {
            icon: n,
            text: r
          } = e;
          return (0, i.jsxs)("div", {
            className: l()(c.yM, u ? c.Vw : null),
            children: [null != n ? (0, i.jsx)(n, {
              size: "xs",
              color: "currentColor",
              className: c.Ul
            }) : null, (0, i.jsx)(s.Text, {
              variant: "text-xs/normal",
              color: "text-default",
              className: d,
              children: r
            })]
          }, t)
        });
        return (0, i.jsxs)(s.BJc, {
          gap: 0,
          children: [(0, i.jsxs)(s.Heading, {
            variant: u ? "heading-xl/semibold" : "heading-md/medium",
            className: u ? c.wx : c.K8,
            children: [t, p && (0, i.jsx)(a.m, {
              text: o.intl.string(o.t.VFuFum),
              children: (0, i.jsx)(s.qyI, {
                size: "xs",
                color: "currentColor",
                className: c.PC
              })
            })]
          }), null != n ? (0, i.jsx)(s.Text, {
            variant: "text-sm/normal",
            color: "text-default",
            children: n
          }) : null, (0, i.jsx)(s.BJc, {
            direction: "horizontal",
            children: m
          })]
        })
      }({
        name: t,
        description: n,
        details: g,
        detailsClassName: b,
        isHeader: f,
        isPremium: h
      }), x]
    })]
  })
}