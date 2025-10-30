/** Chunk was on 13873 **/
/** chunk id: 545594, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  i: () => o
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk680393 = require("./680393.js");

function o(e) {
  let {
    bannerIcon: t,
    bannerHeader: n,
    bannerSubtext: i,
    textStyles: o,
    headerStyles: s,
    containerStyles: c,
    children: u
  } = e;
  return (0, r.jsxs)("div", {
    className: l()(a.spamBanner, c),
    children: [(0, r.jsxs)("div", {
      className: l()(a.bannerTextContainer, o),
      children: [null != t && ("string" == typeof t ? (0, r.jsx)("img", {
        src: t,
        alt: "",
        className: a.bannerIcon
      }) : t), (0, r.jsxs)("div", {
        className: a.bannerText,
        children: [(0, r.jsx)("div", {
          className: l()(a.bannerHeader, s),
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