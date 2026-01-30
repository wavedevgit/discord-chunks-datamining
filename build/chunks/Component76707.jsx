/** Chunk was on 2827 **/
/** chunk id: 76707, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
}), require("./228524.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk296388 = require("./296388.js");
let o = e => {
  var t, n, i, o, c;
  let {
    title: d,
    cardVariantStyleInfo: u,
    description: _,
    titleClassName: p,
    subtitle: m,
    subtitleClassName: g,
    isOverlay: A
  } = e, f = null != m && !(A && (null == u || null == (i = u.subtitle) ? true : i.hideOnOverlay) === true), b = null != _;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(s.Heading, {
      variant: "heading-xl/extrabold",
      className: l()(a.Jf, p),
      children: d
    }), (f || b) && (0, r.jsxs)("div", {
      className: g,
      children: [f && (0, r.jsx)(s.Text, {
        variant: null != (t = null == u || null == (o = u.subtitle) ? true : o.textVariant) ? t : "text-sm/normal",
        children: m
      }), b && (0, r.jsxs)(s.Text, {
        variant: null != (n = null == u || null == (c = u.description) ? true : c.textVariant) ? n : "text-sm/normal",
        children: [f && (0, r.jsx)("br", {}), _]
      })]
    })]
  })
}