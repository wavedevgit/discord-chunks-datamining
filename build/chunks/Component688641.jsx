/** Chunk was on 13873 **/
/** chunk id: 688641, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./953529.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk356221 = require("./356221.js");

function c(e) {
  let {
    className: t,
    iconContainerClassName: n,
    icon: i,
    title: c,
    description: u,
    userCount: d,
    onClick: p,
    highlight: f
  } = e;
  return (0, r.jsxs)(a.P3F, {
    className: l()(s.container, t, null != f && {
      [s.pulse]: f
    }),
    onClick: p,
    children: [(0, r.jsx)("div", {
      className: l()(s.icon, n),
      children: i
    }), (0, r.jsxs)("div", {
      className: s.textContainer,
      children: [(0, r.jsx)(a.Heading, {
        variant: "heading-md/semibold",
        color: "text-primary",
        children: c
      }), (0, r.jsx)(a.Text, {
        variant: "text-xs/normal",
        color: "text-primary",
        className: s.inline,
        children: u
      }), null != d && d > 0 ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(a.Text, {
          variant: "text-xs/normal",
          color: "text-primary",
          className: s.dot,
          children: "•"
        }), (0, r.jsx)(a.Text, {
          variant: "text-xs/normal",
          color: "text-primary",
          className: s.inline,
          children: o.intl.format(o.t.NywdIj, {
            count: d
          })
        })]
      }) : null]
    }), (0, r.jsx)(a.Fbu, {
      size: "xs",
      color: "currentColor",
      className: s.caret
    })]
  })
}