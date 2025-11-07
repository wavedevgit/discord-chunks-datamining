/** Chunk was on 57336 **/
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
  Chunk367390 = require("./367390.js");

function c(e) {
  let {
    className: t,
    iconContainerClassName: n,
    icon: r,
    title: c,
    description: u,
    userCount: d,
    onClick: p,
    highlight: h
  } = e;
  return (0, i.jsxs)(a.P3F, {
    className: l()(s.container, t, null != h && {
      [s.pulse]: h
    }),
    onClick: p,
    children: [(0, i.jsx)("div", {
      className: l()(s.icon, n),
      children: r
    }), (0, i.jsxs)("div", {
      className: s.textContainer,
      children: [(0, i.jsx)(a.Heading, {
        variant: "heading-md/semibold",
        color: "text-primary",
        children: c
      }), (0, i.jsx)(a.Text, {
        variant: "text-xs/normal",
        color: "text-primary",
        className: s.inline,
        children: u
      }), null != d && d > 0 ? (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(a.Text, {
          variant: "text-xs/normal",
          color: "text-primary",
          className: s.dot,
          children: "•"
        }), (0, i.jsx)(a.Text, {
          variant: "text-xs/normal",
          color: "text-primary",
          className: s.inline,
          children: o.intl.format(o.t.NywdIj, {
            count: d
          })
        })]
      }) : null]
    }), (0, i.jsx)(a.Fbu, {
      size: "xs",
      color: "currentColor",
      className: s.caret
    })]
  })
}