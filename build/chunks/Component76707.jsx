/** Chunk was on web.js **/
/** chunk id: 76707, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
}), require("./228524.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk296388 = require("./296388.js");
let l = e => {
  var t, n, i, l;
  let {
    title: c,
    shouldShowElement: u,
    cardVariantStyleInfo: d,
    description: f,
    titleClassName: p = "",
    subtitle: _ = "",
    subtitleClassName: h
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(s.Heading, {
      variant: "heading-xl/extrabold",
      className: a()(o.Jf, p),
      children: c
    }), "" !== _ && (null == u || u(null == d ? true : d.subtitle)) && (0, r.jsxs)("div", {
      className: h,
      children: [(0, r.jsx)(s.Text, {
        variant: null != (t = null == d || null == (i = d.subtitle) ? true : i.textVariant) ? t : "text-sm/normal",
        children: _
      }), null != f && (0, r.jsx)(s.Text, {
        variant: null != (n = null == d || null == (l = d.description) ? true : l.textVariant) ? n : "text-sm/normal",
        children: (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)("br", {}), f]
        })
      })]
    })]
  })
}