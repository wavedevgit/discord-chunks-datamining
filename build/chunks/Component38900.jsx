/** Chunk was on 45620 **/
/** chunk id: 38900, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  K: () => g,
  Z: () => p
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk55783 = require("./55783.js"),
  Chunk654664 = require("./654664.js"),
  Chunk970217 = require("./970217.js"),
  Chunk670185 = require("./670185.js");
let u = () => 4 * Math.random() + 8,
  d = [u(), u(), u()],
  g = () => (0, Chunk951288.jsx)("div", {
    className: i()(Chunk970217.skeleton, Chunk670185.shopCard),
    children: (0, Chunk951288.jsxs)("div", {
      className: Chunk970217.cardBody,
      children: [(0, Chunk951288.jsx)("div", {
        className: Chunk970217.cardAvatar
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk970217.cardTitle
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk970217.cardDescription
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk970217.cardSummary
      })]
    })
  }),
  p = () => (0, Chunk951288.jsx)("div", {
    className: Chunk970217.skeletonsContainer,
    children: d.map(e => (0, r.jsxs)("div", {
      className: a.cardsContainer,
      children: [(0, r.jsx)("div", {
        className: i()(o.skeleton, o.bannerSkeleton, s.catalogBanner),
        children: (0, r.jsx)("div", {
          className: o.bannerBody
        })
      }), Array.from({
        length: e
      }, (e, t) => t).map(e => (0, r.jsx)(g, {}, e))]
    }, e))
  })