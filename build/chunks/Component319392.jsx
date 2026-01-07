/** Chunk was on 18290 **/
/** chunk id: 319392, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk726542 = require("./726542.js"),
  Chunk198993 = require("./198993.jsx"),
  Chunk63063 = require("./63063.js"),
  Chunk376340 = require("./376340.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk927923 = require("./927923.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk126690 = require("./126690.js"),
  Chunk898912 = require("./898912.js");

function f() {
  return (0, o.jsxs)("div", {
    className: p.getXboxApp,
    children: [(0, o.jsxs)("div", {
      className: p.getXboxAppBody,
      children: [(0, o.jsxs)(r.Heading, {
        className: p.getXboxAppHeading,
        variant: "text-lg/semibold",
        children: [(0, o.jsx)("div", {
          className: p.xboxLogoBox,
          children: (0, o.jsx)("img", {
            src: i.Z.get(l.ABu.XBOX).icon.whiteSVG,
            alt: ""
          })
        }), u.intl.string(u.t["12Kx2v"])]
      }), (0, o.jsx)(r.Text, {
        tag: "p",
        variant: "text-md/normal",
        color: "text-default",
        children: u.intl.string(u.t.M5yEcb)
      }), (0, o.jsx)(r.Text, {
        variant: "text-sm/medium",
        color: "text-default",
        children: (0, o.jsx)(r.eee, {
          href: a.Z.getArticleURL(l.BhN.XBOX_CONNECTION),
          children: u.intl.string(u.t.hvVgAZ)
        })
      })]
    }), (0, o.jsx)(s.ZP, {
      className: p.getXboxAppQR,
      text: d.X3,
      size: 90
    })]
  })
}

function g(e) {
  let {
    onClose: t
  } = e;
  return (0, o.jsx)(c.L, {
    img: (0, o.jsx)("img", {
      src: b.Z,
      width: "124",
      height: "160",
      alt: ""
    }),
    title: u.intl.string(u.t["7QsHmh"]),
    body: u.intl.string(u.t.byYNPX),
    content: (0, o.jsx)(f, {}),
    onClose: t
  })
}