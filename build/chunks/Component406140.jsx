/** Chunk was on 21738 **/
/** chunk id: 406140, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
}), require("./228524.js"), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk263063 = require("./263063.jsx"),
  Chunk253932 = require("./253932.js"),
  Chunk218394 = require("./218394.js"),
  Chunk258335 = require("./258335.js"),
  Chunk249850 = require("./249850.js");

function u(e) {
  let {
    coverImageAsset: t,
    title: n,
    guild: u,
    description: d,
    children: p
  } = e, h = a.kt.useSetting(), g = (0, s.j)(), [f, m] = (0, o.A)(t, g && h);
  return (0, r.jsxs)("div", {
    className: c.kL,
    children: [(0, r.jsx)("div", {
      ref: f,
      className: c.El,
      children: null != m && (0, r.jsx)("img", {
        src: m,
        alt: "",
        className: c.N4
      })
    }), (0, r.jsx)("div", {
      className: c._C,
      children: (0, r.jsx)(l.A, {
        guild: u,
        size: l.A.Sizes.XLARGE
      })
    }), (0, r.jsx)(i.Heading, {
      variant: "heading-xl/semibold",
      className: c.H1,
      children: n
    }), (0, r.jsx)(i.Text, {
      className: c.jr,
      variant: "text-md/normal",
      color: "text-default",
      children: d
    }), p]
  })
}