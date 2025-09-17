/** Chunk was on 45620 **/
/** chunk id: 38900, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  K: () => g,
  Z: () => f
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk654664 = require("./654664.js"),
  Chunk717249 = require("./717249.js"),
  Chunk970217 = require("./970217.js"),
  Chunk670185 = require("./670185.js");
let u = () => 4 * Math.random() + 8,
  d = [u(), u(), u()],
  g = () => (0, Chunk951288.jsx)("div", {
    className: a()(Chunk970217.skeleton, Chunk670185.shopCard),
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
  f = () => (0, Chunk951288.jsx)("div", {
    className: Chunk654664.skeletons,
    children: d.map(e => (0, r.jsxs)("div", {
      className: o.cardsContainer,
      children: [(0, r.jsx)("div", {
        className: a()(i.skeleton, s.shopBanner),
        children: (0, r.jsx)("div", {
          className: i.bannerBody
        })
      }), Array.from({
        length: e
      }, (e, t) => t).map(e => (0, r.jsx)(g, {}, e))]
    }, e))
  })