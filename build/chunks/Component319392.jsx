/** Chunk was on 18290 **/
/** chunk id: 319392, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk726542 = require("./726542.js"),
  Chunk198993 = require("./198993.jsx"),
  Chunk63063 = require("./63063.js"),
  Chunk376340 = require("./376340.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk927923 = require("./927923.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk196365 = require("./196365.js"),
  Chunk629582 = require("./629582.js");

function b() {
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk196365.getXboxApp,
    children: [(0, Chunk951288.jsxs)("div", {
      className: Chunk196365.getXboxAppBody,
      children: [(0, Chunk951288.jsxs)(Chunk481060.Heading, {
        className: Chunk196365.getXboxAppHeading,
        variant: "text-lg/semibold",
        children: [(0, Chunk951288.jsx)("div", {
          className: Chunk196365.xboxLogoBox,
          children: (0, Chunk951288.jsx)("img", {
            src: Chunk726542.Z.get(Chunk981631.ABu.XBOX).icon.whiteSVG,
            alt: ""
          })
        }), Chunk388032.intl.string(Chunk388032.t["12Kx2v"])]
      }), (0, Chunk951288.jsx)(Chunk481060.Text, {
        tag: "p",
        variant: "text-md/normal",
        color: "header-secondary",
        children: Chunk388032.intl.string(Chunk388032.t.M5yEcb)
      }), (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: (0, Chunk951288.jsx)(Chunk481060.Anchor, {
          href: Chunk63063.Z.getArticleURL(Chunk981631.BhN.XBOX_CONNECTION),
          children: Chunk388032.intl.string(Chunk388032.t.hvVgAZ)
        })
      })]
    }), (0, Chunk951288.jsx)(Chunk198993.ZP, {
      className: Chunk196365.getXboxAppQR,
      text: Chunk927923.X3,
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
      src: f.Z,
      width: "124",
      height: "160",
      alt: ""
    }),
    title: u.intl.string(u.t["7QsHmh"]),
    body: u.intl.string(u.t.byYNPX),
    content: (0, o.jsx)(b, {}),
    onClose: t
  })
}