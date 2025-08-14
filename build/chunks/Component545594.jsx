/** Chunk was on web.js **/
/** chunk id: 545594, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  i: () => s
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk458926 = require("./458926.js");

function s(e) {
  let {
    bannerIcon: t,
    bannerHeader: n,
    bannerSubtext: i,
    textStyles: s,
    headerStyles: l,
    containerStyles: c,
    children: u
  } = e;
  return (0, r.jsxs)("div", {
    className: o()(a.spamBanner, c),
    children: [(0, r.jsxs)("div", {
      className: o()(a.bannerTextContainer, s),
      children: [null != t && ("string" == typeof t ? (0, r.jsx)("img", {
        src: t,
        alt: "",
        className: a.bannerIcon
      }) : t), (0, r.jsxs)("div", {
        className: a.bannerText,
        children: [(0, r.jsx)("div", {
          className: o()(a.bannerHeader, l),
          children: n
        }), null != i && (0, r.jsx)("div", {
          className: a.bannerSubtext,
          children: i
        })]
      })]
    }), (0, r.jsx)("div", {
      className: a.actionButtons,
      children: u
    })]
  })
}