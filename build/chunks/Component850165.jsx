/** Chunk was on 5749 **/
/** chunk id: 850165, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
}), require("./953529.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk72595 = require("./72595.js");

function s(t) {
  let {
    heroImage: e,
    children: n,
    header: s,
    description: o
  } = t;
  return (0, i.jsxs)(i.Fragment, {
    children: [true !== e && (0, i.jsx)("div", {
      className: a.heroImage,
      children: e
    }), (0, i.jsxs)(r.hzk, {
      "data-migration-pending": true,
      className: a.body,
      children: [(0, i.jsxs)("div", {
        className: a.textContainer,
        children: [(0, i.jsx)(r.Heading, {
          variant: "heading-xl/semibold",
          color: "header-primary",
          children: s
        }), null != o && (0, i.jsx)(r.Text, {
          variant: "text-md/medium",
          color: "text-default",
          className: a.description,
          children: o
        })]
      }), n]
    })]
  })
}